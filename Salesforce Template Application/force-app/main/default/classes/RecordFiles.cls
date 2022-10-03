/**
 * @description       : 
 * @author            : Salesforce Consultancy
 * @group             : 
 * @last modified on  : 10-01-2022
 * @last modified by  : Salesforce Consultancy
**/
public with sharing class RecordFiles {

    @AuraEnabled    
    public static List<ContentVersion>  getFiles(String recordId) {
        try {
            List<ContentVersion> documents = [Select Id , title ,
                                                        ContentSize,
                                                        ContentLocation,
                                                        ContentUrl,
                                                        Description,
                                                        FileExtension,
                                                        FileType,
                                                        OwnerId,
                                                        TagCsv,
                                                        VersionNumber
                                                        from ContentVersion 
                                                        where FirstPublishLocationId = :recordId ];

                return documents;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

    }
}
