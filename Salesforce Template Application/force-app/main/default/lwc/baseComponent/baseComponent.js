/**
 * @description       : 
 * @author            : Salesforce Consultancy
 * @group             : 
 * @last modified on  : 09-16-2022
 * @last modified by  : Salesforce Consultancy
**/
import { LightningElement, track } from 'lwc';

const SUCCESS = "success";
const WARNING = "warning";
const ERROR = "error";
export default class BaseComponent extends LightningElement {

    applicationName;
    
    @track componentName = "BaseComponent";

   /**
     * Log message with console.log 
     * @param {*} who name of the component by default it will take base Component but it should be
     *              configued with the <code> componetName </code> 
     * @param {*} what 
     */
   logMessage( what,who) {
        if( who == null || who == undefined ) {
            who = this.componentName;
        }
       console.log( "[ " + who + " ] : "+ what);
   }

   /**
    * Show Error and Success Message as toast message
    * @param {*} message Message to be displayed 
    * @param {*} title title of the toast message 
    * @param {*} isError true if show sucessfull message 
    */
    showMessage( message , title , isError) {
       this.dispatchEvent(
           new ShowToastEvent({
               title: title == null ? this.componentName : title,
               message: message ,
               variant: isError ? ERROR : SUCCESS
           })
       );

   }      
}