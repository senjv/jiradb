#!/bin/bash



curl -u username:password https://jira.in.sensis.com.au/rest/api/2/project > data.json

#'https://jira.in.sensis.com.au/rest/api/2/search?jql=project %3D \"myAccount (SDF Customer Centre)\" AND fixVersion %3D R13.0.1' > data.json
