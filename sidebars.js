/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
 // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
 
  MainSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'intro',
          label: 'What is RisingWave?',
        },
        
        {
          type: 'doc',
          id: 'architecture',
          label: 'Architecture',
        },

        {
          type: 'doc',
          id: 'key-concepts',
          label: 'Key concepts and terms',
        }
      ]
    },

    {
      type: 'category',
      label: 'Get started',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'get-started',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'deploy/risingwave-local',
          label: 'Run locally',
        },
        {
          type: 'doc',
          id: 'deploy/risingwave-docker-image',
          label: 'Run in Docker',
        },
        {
          type: 'category',
          label: 'Set up a cluster with',
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'deploy/risingwave-docker-compose',
              label: 'Docker Compose',
            },
            {
              type: 'doc',
              id: 'deploy/risingwave-kubernetes',
              label: 'Kubernetes',
            }
          ]
        },
        {
          type: 'doc',
          id: 'risingwave-sql-101',
          label: 'RisingWave SQL 101',
        },
        {
          type: 'doc',
          id: 'guides/install-psql-without-postgresql',
        },
      ]
    },

    {
      type: 'category',
      label: 'Tutorials',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'tutorials/real-time-ad-performance-analysis',
          label: 'Real-time ad performance analysis',
        },
        {
          type: 'doc',
          id: 'tutorials/server-performance-anomaly-detection',
          label: 'Server performance anomaly detection',
        },
        {
          type: 'doc',
          id: 'tutorials/fast-twitter-events-processing',
          label: 'Fast Twitter events processing',
        },
        {
          type: 'doc',
          id: 'tutorials/clickstream-analysis',
          label: 'Clickstream analysis',
        },
        {
          type: 'doc',
          id: 'tutorials/live-stream-metrics-analysis',
          label: 'Live stream metrics analysis',
        },
        {
          type: 'doc',
          id: 'tutorials/use-risingwave-to-monitor-risingwave-metrics',
          label: 'Use RisingWave to monitor RisingWave metrics',
        },
      ]
    },
    
    {
      type: 'category', 
      label: 'Data ingestion', 
      collapsible: true,
      collapsed: true,
      items: 
      [
        {
          type: 'doc',
          label: 'Overview',
          id: 'data-ingestion',
        },
        {
          type: 'doc',
          label: 'CDC',
          id: 'create-source/create-source-cdc',
        },
        {
          type: 'doc',
          label: 'Kafka',
          id: 'create-source/create-source-kafka',
        },
        {
          type: 'doc',
          label: 'Redpanda',
          id: 'create-source/create-source-redpanda',
        },
        {
          type: 'doc',
          label: 'Kinesis',
          id: 'create-source/create-source-kinesis',
        },
        {
          type: 'doc',
          label: 'Pulsar',
          id: 'create-source/create-source-pulsar',
        },
        {
          type: 'doc',
          label: 'Astra Streaming',
          id: 'guides/connector-astra-streaming',
        },
        {
          type: 'doc',
          label: 'Amazon S3',
          id: 'create-source/create-source-s3',
        },
        {
          type: 'doc',
          label: 'Load generator',
          id: 'create-source/create-source-datagen',
        },
      ]
    },
    {type: 'category',
    label: 'Data delivery',
    items:[
      {
        type: 'doc',
        id: 'delivery-overview',
        label: 'Overview',
      },
      {
        type: 'doc',
        id: 'sql/commands/sql-create-sink',
        label: 'Create a sink',
      },
    ]},

    {
      type: 'category',
      label: 'Integrations',
      items:
      [
        {
        type: 'doc',
        label: 'Overview',
        id: 'rw-integration-summary',
        },
        {
        type: 'doc',
        label: 'Grafana',
        id: 'guides/grafana-integration'
        },
        {
        type: 'doc',
        label: 'Superset',
        id: 'guides/superset-integration'
        }
      ]
    },

  {
    type: 'category',
    label: 'SQL reference',
    collapsible: true,
    collapsed: true,
    items: 
    [
      {
        type: 'category',
        label: 'Commands',
        items: 
          [
            {
              type: 'autogenerated',
              dirName: 'sql/commands',
            },
              
          ]
        },
        {
          type: 'category',
          label: 'Patterns',
          items:
            [
              {
                type: 'doc',
                id: 'sql/syntax/sql-pattern-topn',
                label: 'Top-N by group'
              }
            ]
         }, 
        {
          type: 'doc',
          id: 'sql/sql-identifiers',
          label: 'Identifiers',
        }, 
        {
          type: 'category',
          label: 'Data types',
          items:
          [
            {
              type: 'doc',
              id: 'sql/sql-data-types',
              label: 'Overview',
              },
            {
              type: 'doc',
              id: 'sql/data-types/data-type-casting',
              label: 'Casting',
            },
            {
              type: 'doc',
              id: 'sql/data-types/data-type-array',
              label: 'Array',
              },
            {
              type: 'doc',
              id: 'sql/data-types/data-type-struct',
              label: 'Struct',
            },
            ]
      },  
      {
      type: 'category',
      label: 'Functions and operators',
      items: 
        [
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-logical',
            label: 'Logical',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-comparison',
            label: 'Comparison',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-time-window',
            label: 'Time window',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-cast',
            label: 'Cast',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-mathematical',
            label: 'Mathematical',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-bitstring',
            label: 'Bit string',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-string',
            label: 'String',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-datetime',
            label: 'Date/time',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-aggregate',
            label: 'Aggregate',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-conditional',
            label: 'Conditional',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-sys-info',
            label: 'System information',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-array',
            label: 'Array',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-set',
            label: 'Set',
          },
        
        ]
        },
      
        {
          type: 'category',
          label: 'System catalogs',
          items: [
            {
              type: 'doc',
              id: 'sql/system-catalogs/information-schema',
              label: 'information_schema',
          },
          {
              type: 'doc',
              id: 'sql/system-catalogs/pg-catalog-function',
              label: 'PostgreSQL catalogs and functions',
          },
          
          ]
        },
        
     'sql/psql-commands',
      ],
    },

    {
      type: 'category',
      label: `Client libraries`,
      collapsible: true,
      collapsed: true,
      items:
      [
      {
        type: 'doc',
        id: 'dev/java-client-libraries',
        label: 'Java',
      },
      {
        type: 'doc',
        id: 'dev/nodejs-client-libraries',
        label: 'Node.js',
      },
      {
        type: 'doc',
        id: 'dev/python-client-libraries',
        label: 'Python',
      },
    ]
    },

    {
      type: 'category',
      label: 'Manage RisingWave',
      collapsible: true,
      collapsed: true,
      items: 
      [ 
        {
          type: 'doc',
          id: 'manage/meta-backup',
        },
        
      ]
    },

    {
      type: 'doc',
      id: 'release-notes',
      label: 'Release notes'
      },
    ]
    
};


module.exports = sidebars;
