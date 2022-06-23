- Make a db dump : ``ddev export-db > db.sql.gz``
- Reimport when needed

Testing:

- Create or select a node of type Abte.Site:Document.Products (data pool) where data will be inserted
- Copy the Identifier of the data pool
- Insert Identifier in Import-Script: *DistributionPackages/Selfix.Import/Classes/Service/ProductImporter.php* like:
  - protected $storageNodeNodePath = '1112511d-d4db-4c1c-b824-5da878142aee';
  - protected $storageNodeIdentifier = '1112511d-d4db-4c1c-b824-5da878142aee';
  
- Update the mapping if needed : *DistributionPackages/Selfix.Import/Classes/DataProvider/CsvDataProvider.php::preProcessRecordData()*
  - Each csv wil need a own data provider wir mapping in future..
  
- Run importer: ``ddev exec ./flow import:batch --preset products``
- Check Log for more information: ``tail -n 50  Data/Logs/System_Development.log``