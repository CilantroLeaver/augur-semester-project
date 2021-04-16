# Title  
developer-monitoring-contributors  

# Background  
Developers who produce open source software (OSS) can evaluate the inactivity of contributors as well as the number of new contributors making commits.  

# Description  
A developer puts their OSS into a database under Augur's schema. Augur's backend collects the requested contributor data from the Augur API and presents it at a frontend URL.  

# Triggers  
1. A developer of OSS gains curiosity over the activity and timeframe of contributors to their project(s).  

# Actors  
1. OSS developers
2. OSS contributors  

# Preconditions  
1. A postgresql database has been configured with Augur's schema  
3. The database contains the data for an OSS developer's project  
4. The developer initiates the backend collection system for Augur  

# Main Success Scenario  
1. Augur's API is queried and contains the requested metric data  
2. Desired metrics are output at the frontend URL  

# Alternate Success Scenarios  
N/A  

# Failed End Condition  
1. The database to be queried by Augur is not of the appropriate schema  
2. The data for the OSS project to be queried is not in the database  
3. The OSS project to be queried does not have enough data to display requested metrics  

# Extensions  
1. Compare requested metrics between multiple OSS projects  

# Steps of Execution  
1. An OSS developer starts an Augur backend collection on a supported database and OSS project  
2. Requested metrics are calculated from the Augur API
3. Calculated metrics are displayed at the frontend URL  

# Dependent Use Cases  
N/A  
