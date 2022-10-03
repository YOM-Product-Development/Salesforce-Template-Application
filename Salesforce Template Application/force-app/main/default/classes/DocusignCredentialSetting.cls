/**
 * @description       : 
 * @author            : Salesforce Consultancy
 * @group             : 
 * @last modified on  : 09-26-2022
 * @last modified by  : Salesforce Consultancy
**/
public with sharing class DocusignCredentialSetting {


    /**
     * get the Docusign Settings 
     * 
     */
    public static DocuSignCredentialsSetting__c getDocusignCredential(){
        DocuSignCredentialsSetting__c settings = null;
        Map<String,DocuSignCredentialsSetting__c> credentialSetting = DocuSignCredentialsSetting__c.getAll(); 
        for(DocuSignCredentialsSetting__c credentialIns : credentialSetting.values()){ 
    
            if (credentialIns.isActive__C ){
                settings =  credentialIns;
            }
        }
        return settings ;
    }
}
