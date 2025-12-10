import ExtensionAPI from 'sap/fe/core/ExtensionAPI';
import Context from 'sap/ui/model/odata/v4/Context';
import MessageToast from 'sap/m/MessageToast';
import MessageBox from "sap/m/MessageBox";

/**
 * Generated event handler.
 *
 * @param this reference to the 'this' that the event handler is bound to.
 * @param context the context of the page on which the event was fired. `undefined` for list report page.
 * @param selectedContexts the selected contexts of the table rows.
 */
export async function GotoWeb(this: ExtensionAPI, context: Context | undefined, selectedContexts: Context[]) {
    var sUrl = selectedContexts[0].getObject().url;
    if(sUrl){
 window.open(sUrl, "_blank")
    }
    else{
 MessageToast.show("Custom handler invoked.");
    }
}
