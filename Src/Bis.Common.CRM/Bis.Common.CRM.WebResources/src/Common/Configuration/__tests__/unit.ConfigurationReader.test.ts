import * as sinon from "sinon";
import { expect } from "chai";
import { ConfigurationReader } from "../ConfigurationReader";
import { bis_systemsettingtype } from "../../../dataverse-gen/enums/bis_systemsettingtype";
import { XrmMockGenerator } from "xrm-mock";


const key = "PersistedKey";
const notPersistedKey = "Nothing";

function Setup(value: string, type: number){
    const stub = sinon.stub(Xrm.WebApi, "retrieveMultipleRecords");

    stub.withArgs(sinon.match.string, sinon.match(key)).resolves({
        entities: [{ bis_value: value, bis_type: type }] // eslint-disable-line
    });

    stub.withArgs(sinon.match.string, sinon.match(notPersistedKey)).resolves({
        entities: []
    });
}

beforeEach(() => {
    XrmMockGenerator.initialise();
  });

  describe('ConfigurationReader Get String Tests', () => {
    const value = "Test";
    const dflt = "Default";

    beforeEach(() => {
        Setup(value, bis_systemsettingtype.String);
    });

    it("should retrieve the config value", () => {
        //Act
        const result = ConfigurationReader.getString(key, dflt, null);

        //Assert
        return result.then((result) => {
            expect(result).to.be.equal(value);

        });
    });

    it("should return default value if not persisted", () => {
        //Act
        const result = ConfigurationReader.getString(notPersistedKey, dflt, null);

        //Assert
        return result.then((result) => {
            expect(result).to.be.equal(dflt);
        });
    });
});

describe('ConfigurationReader Get Bool Tests', () => {
    const value = true;
    const dflt = false;
    const type = bis_systemsettingtype.Boolean;

    it("should retrieve the config value", () => {
        //Arrange
        Setup(value.toString(), type);

        //Act
        const result = ConfigurationReader.getBool(key, dflt, null);

        //Assert
        return result.then((result) => {
            expect(result).to.be.equal(value);
        });
    });

    it("should return default value if not persisted", () => {
        //Arrange
        Setup(value.toString(), type);

        //Act
        const result = ConfigurationReader.getBool(notPersistedKey, dflt, null);

        //Assert
        return result.then((result) => {
            expect(result).to.be.equal(dflt);
        });
    });

    it("should return default value if not castable", () => {
        //Arrange
        Setup("Nope", type);

        //Act
        const result = ConfigurationReader.getBool(key, dflt, null);

        //Assert
        return result.then((result) => {
            expect(result).to.be.equal(dflt);
        });
    });
});

describe('ConfigurationReader Get Number Tests', () => {
    const value = 127;
    const dflt = 2;
    const type = bis_systemsettingtype.Number;

    it("should retrieve the config value", () => {
        //Arrange
        Setup(value.toString(), type);

        //Act
        const result = ConfigurationReader.getNumber(key, dflt, null);

        //Assert
        return result.then((result) => {
            expect(result).to.be.equal(value);
        });
    });

    it("should return default value if not persisted", () => {
        //Arrange
        Setup(value.toString(), type);

        //Act
        const result = ConfigurationReader.getNumber(notPersistedKey, dflt, null);

        //Assert
        return result.then((result) => {
            expect(result).to.be.equal(dflt);
        });
    });

    it("should return default value if not castable", () => {
        //Arrange
        Setup("Nope", type);

        //Act
        const result = ConfigurationReader.getNumber(key, dflt, null);

        //Assert
        return result.then((result) => {
            expect(result).to.be.equal(dflt);
        });
    });
});


// describe('ConfigurationReader Get Semicolon List Tests', () => {
//     const value = "1;2;3;4";
//     const dflt = ["1", "2", "3"];
//     const type = 122870006;

//     it("should retrieve the config value", () => {
//         //Arrange
//         Setup(value.toString(), type);

//         //Act
//         const result = ConfigurationReader.getList(key, dflt, null);

//         //Assert
//         return result.then((result) => {
//             expect(result.join(";")).to.be.equal(value);
//         });
//     });

//     it("should return default value if not persisted", () => {
//         //Arrange
//         Setup(value.toString(), type);

//         //Act
//         const result = ConfigurationReader.getList(notPersistedKey, dflt, null);

//         //Assert
//         return result.then((result) => {
//             expect(result).to.be.deep.equal(dflt);
//         });
//     });

//     it("should return default value if not castable", () => {
//         //Arrange
//         Setup(null, type);

//         //Act
//         const result = ConfigurationReader.getList(key, dflt, null);

//         //Assert
//         return result.then((result) => {
//             expect(result).to.be.deep.equal(dflt);
//         });
//     });
// });

describe('ConfigurationReader Get Comma List Tests', () => {
    const value = "1,2,3,4";
    const dflt = ["1", "2", "3"];
    const type = bis_systemsettingtype.List;

    it("should retrieve the config value", () => {
        //Arrange
        Setup(value.toString(), type);

        //Act
        const result = ConfigurationReader.getList(key, dflt, null);

        //Assert
        return result.then((result) => {
            expect(result.join(",")).to.be.equal(value);
        });
    });

    it("should return default value if not persisted", () => {
        //Arrange
        Setup(value.toString(), type);

        //Act
        const result = ConfigurationReader.getList(notPersistedKey, dflt, null);

        //Assert
        return result.then((result) => {
            expect(result).to.be.deep.equal(dflt);
        });
    });

    it("should return default value if not castable", () => {
        //Arrange
        Setup(null, type);

        //Act
        const result = ConfigurationReader.getList(key, dflt, null);

        //Assert
        return result.then((result) => {
            expect(result).to.be.deep.equal(dflt);
        });
    });
});

describe('ConfigurationReader Get JSON Object Tests', () => {
    const value = { x: "a", y: 1 };
    const dflt = { a: "x", b: 3 };
    const type = bis_systemsettingtype.JSON;

    it("should retrieve the config value", () => {
        //Arrange
        Setup(JSON.stringify(value), type);

        //Act
        const result = ConfigurationReader.getObject(key, dflt, null);

        //Assert
        return result.then((result) => {
            expect(result).to.be.deep.equal(value);
        });
    });

     it("should return default value if not persisted", () => {
         //Arrange
         Setup(JSON.stringify(value), type);
        

         //Act
         const result = ConfigurationReader.getObject(notPersistedKey, dflt, null);

         //Assert
         return result.then((result) => {
             expect(result).to.be.deep.equal(dflt);
         });
     });

    // it("should return default value if not castable", () => {
         //Arrange
    //     Setup(null, type);

    //     //Act
    //     const result = ConfigurationReader.getObject(key, dflt, null);

    //     //Assert
    //     return result.then((result) => {
    //         expect(result).to.be.deep.equal(dflt);
    //     });
    // });
});

describe('ConfigurationReader Get XML Object Tests', () => {
    const value = "<bookstore><book>" +
        "<title>Everyday Italian</title>" +
        "<author>Giada De Laurentiis</author>" +
        "<year>2005</year>" +
        "</book></bookstore>";
    const dflt = { a: "x", b: 3 };
    const type = bis_systemsettingtype.XML;

    it("should retrieve the config value", () => {
        //Arrange
        Setup(value, type);
        
        //Act
        const result = ConfigurationReader.getObject(key, dflt, null);

        //Assert
        return result.then((result) => {
            expect(result).to.be./*not.*/deep.equal(dflt); //mocha does not have window.DOMParser. Evaluate Karma
            expect(result).to.be.not.null;
        });
    });

    it("should return default value if not persisted", () => {
        //Arrange
        Setup(value, type);

        //Act
        const result = ConfigurationReader.getObject(notPersistedKey, dflt, null);

        //Assert
        return result.then((result) => {
            expect(result).to.be.deep.equal(dflt);
        });
    });

    it("should return default value if not castable", () => {
        //Arrange
        Setup(value.replace('<', ''), type);

        //Act
        const result = ConfigurationReader.getObject(key, dflt, null);

        //Assert
        return result.then((result) => {
            expect(result).to.be.deep.equal(dflt);
        });
    });
});
