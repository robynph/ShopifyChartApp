
import React from 'react';
import {
	Card,
	ResourceList,
	Avatar,
	TextStyle,
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
			? [{ content: 'View latest order', url: latestOrderUrl }]
			: null;

		// ​console.log(ResourceListItem);
		return (
				<ResourceListItem
					id={id}
					url={url}
					media={media}
					accessibilityLabel={`View details for ${name}`}
					shortcutActions={shortcutActions}
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
			<Card>
				<ResourceList
					resourceName={{ singular: 'customer', plural: 'customers' }}
					items={[
						{
							id: 341,
							url: 'customers/341',
							name: 'Mae Jemison',
							location: 'Decatur, USA',
						},
						{
							id: 256,
							url: 'customers/256',
							name: 'Ellen Ochoa',
							location: 'Los Angeles, USA',
						},
					]}
					renderItem={this.renderItems}
				/>
			</Card>
		);
	}
}
