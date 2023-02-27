<p align="center">
    <h1 align="center">
        How to setup a repository?
    </h1>
    <p align="center">
        First steps to initialize a GitHub repository for Power Platform / Dynamics 365 development.
    </p>
</p>

## Step by step guide

### 1 - Create repository

### 2 - Add environments to repository

1. In the new repository, go to the **Settings** tab
2. Open the **Environments** section
3. Create the following environments:
   - **Dynamics CRM - DEV**
   - **Dynamics CRM - SIT**
   - **Dynamics CRM - UAT**
   - **Dynamics CRM - PREPROD**
   - **Dynamics CRM - SANDBOX**

### 3 - Add Environment secrets

1. In the new repository, go to the **Settings** tab
2. Open the **Environments** section
3. Click on the name of the environment where you want to add the secrets
4. Go to the botton of the environment page, and click on the **Add secret** button to register the secrets below:

| **Secret Name**                        | **Description**                                            | **Example**                              |
| -------------------------------------- | ---------------------------------------------------------- | ---------------------------------------- |
| **DATAVERSE_ENVIRONMENT_URL**          | URL of the considered Dataverse environment                | https://bis-d365-dev.crm17.dynamics.com/ |
| **DATAVERSE_ENVIRONMENT_DISPLAY_NAME** | Display name of the considered Dataverse environment       | Dynamics CRM - DEV                       |
| **APPLICATION_ID**                     | Application (client) ID of the considered app registration |                                          |
| **CLIENT_SECRET**                      | Secret of the considered app registration                  |                                          |
| **TENANT_ID**                          | Directory (tenant) ID of the considered app registration   |                                          |