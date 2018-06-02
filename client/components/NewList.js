
import React from 'react';
import {
	Card,
	ResourceList,
	Avatar,
	TextStyle,
	Page,
	Link,
	DisplayText
} from '@shopify/polaris';


export default class NewList extends React.Component {
	constructor(props) {
		super(props);
	}
	renderItems(item) {
		// console.log(item, ResourceList.Item);
		const ResourceListItem = ResourceList.Item;
		const { id, url, name, location, latestOrderUrl } = item;
		console.log(id, url, name, location, latestOrderUrl);
		const media = <Avatar customer size="medium" name={name} />;
		const shortcutActions = latestOrderUrl
			? [{ content: 'View latest order', url: 'google.ca' }]
			: null;

		// ​console.log(ResourceListItem);
		return (
				<ResourceListItem
					id={id}
					url='www.google.ca'
					media={media}
					accessibilityLabel={`View details for ${name}`}
					shortcutActions={shortcutActions}
					persistActions
				>
					<h3>
							<TextStyle variation="strong">{name}</TextStyle>
						</h3>
						<div>{location}</div>
				</ResourceListItem>
					);
	}
	render() {
		return (
			<Card title="Subscription Information"
				secondaryFooterAction={{content: 'Go to redhIO'}}
				primaryFooterAction={{content: 'Retrain Model'}}
			>
				<ResourceList
					resourceName={{ singular: 'result', plural: 'results' }}
					items={[
						{
							id: 341,
							url: 'www.google.ca',
							name: 'Account ID',
							location: <Link url="https://rinkeby.etherscan.io/address/0x00e2b5d2d08e7d63b87dab38d25a97a80d2ed26b">0x00e2b5D2d08e7D63B87Dab38d25a97a80d2ed26B</Link>,
						},
						{
							id: 256,
							url: 'etherscan.io',
							name: 'Transaction ID',
							location: <Link url="https://rinkeby.etherscan.io/tx/0xb36ababb336501592cdca47973950eb96e4eb165dee01b88f95c243d46f9d2c2">0xb36ababb336501592cdca47973950eb96e4eb165dee01b88f95c243d46f9d2c2</Link>,
						},
						{
							id: 250,
							url: 'etherscan.io',
							name: 'Result Details (Response Time & Cost):',
							location: <Link url="https://rinkeby.etherscan.io/address/0xd7ae9209ae6a7cd7cadcb7fab252ea63f6decb7d">Subscription Contract</Link>,
						},
					]}
					renderItem={this.renderItems}
				/>
			</Card>

		);
	}
}
