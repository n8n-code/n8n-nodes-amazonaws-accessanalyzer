import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class AmazonawsAccessanalyzer implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'amazonaws-accessanalyzer',
		name: 'N8nDevAmazonawsAccessanalyzer',
		icon: { light: 'file:./amazonaws-accessanalyzer.png', dark: 'file:./amazonaws-accessanalyzer.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Identity and Access Management Access Analyzer helps identify potential resource-access risks by enabling you to identify any policies that grant access to an external principal. It does this by..',
		defaults: { name: 'amazonaws-accessanalyzer' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAmazonawsAccessanalyzerApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...defaultDescription
		],
	};
}
