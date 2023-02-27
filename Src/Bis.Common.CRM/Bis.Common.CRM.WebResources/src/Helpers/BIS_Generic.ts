export class BIS_Generic {

    static async setSectionVisible(formContext: Xrm.FormContext, tabName: string, sectionName: string, isVisible: boolean): Promise<void> {

        let tabObj = formContext.ui.tabs.get(tabName);
        if (tabObj != null) {
            let sectionObj = tabObj.sections.get(sectionName);
            if (sectionObj != null) {
                sectionObj.setVisible(isVisible);
            }
        }
    }
}