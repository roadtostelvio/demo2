import { AccountForm} from "../AccountForm";
import { XrmMockGenerator } from "xrm-mock";

describe("AccountForm.onload", () => {
    beforeEach(() => {
      XrmMockGenerator.initialise();
    });
  
    it("Do nothing", () => {
      // Arrange
      const context = XrmMockGenerator.getEventContext();
      const websiteMock = XrmMockGenerator.Attribute.createString("accountnumber", undefined);
      websiteMock.controls.itemCollection[0].setNotification = jest.fn();
      websiteMock.controls.itemCollection[0].clearNotification = jest.fn();
      // Act
      AccountForm.onLoad(context);
      websiteMock.fireOnChange();
    });
  
    
  
    
  });
