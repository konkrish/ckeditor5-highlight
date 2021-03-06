/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module highlight/highlight
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import HighlightEditing from './highlightediting';
import HighlightUI from './highlightui';

/**
 * The highlight plugin.
 *
 * It loads the {@link module:highlight/highlightediting~HighlightEditing} and
 * {@link module:highlight/highlightui~HighlightUI} plugins.
 *
 * Read more about the feature in the {@glink api/highlight highlight package} page.
 *
 * @extends module:core/plugin~Plugin
 */
export default class Highlight extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ HighlightEditing, HighlightUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'Highlight';
	}
}

/**
 * The highlight option descriptor. See the {@link module:highlight/highlight~HighlightConfig} to learn more.
 *
 *		{
 *			model: 'pinkMarker',
 *			class: 'marker-pink',
 *			title: 'Pink Marker',
 *			color: '#fc7999',
 *			type: 'marker'
 *		}
 *
 * @typedef {Object} module:highlight/highlight~HighlightOption
 * @property {String} title The user-readable title of the option.
 * @property {String} model The unique attribute value in the model.
 * @property {String} color The color used for the highlighter. It should match the `class` CSS definition.
 * The color is used in the user interface to represent the highlighter.
 * @property {String} class The CSS class used on the `<mark>` element in the view. It should match the `color` setting.
 * @property {'marker'|'pen'} type The type of highlighter:
 * - `'marker'` – uses the `color` as a `background-color` style,
 * - `'pen'` – uses the `color` as a font `color` style.
 */

/**
 * The configuration of the {@link module:highlight/highlight~Highlight} feature.
 *
 * Read more in {@link module:highlight/highlight~HighlightConfig}.
 *
 * @member {module:highlight/highlight~HighlightConfig} module:core/editor/editorconfig~EditorConfig#highlight
 */

/**
 * The configuration of the {@link module:highlight/highlight~Highlight Highlight feature}.
 *
 *		ClassicEditor
 *			.create( editorElement, {
 * 				highlight:  ... // Highlight feature config.
 *			} )
 *			.then( ... )
 *			.catch( ... );
 *
 * See {@link module:core/editor/editorconfig~EditorConfig all editor options}.
 *
 * @interface HighlightConfig
 */

/**
 * The available highlighters options. The default value is:
 *
 *		options: [
 *			{ model: 'yellowMarker', class: 'marker-yellow', title: 'Yellow marker', color: '#fdfd77', type: 'marker' },
 *			{ model: 'greenMarker', class: 'marker-green', title: 'Green marker', color: '#63f963', type: 'marker' },
 *			{ model: 'pinkMarker', class: 'marker-pink', title: 'Pink marker', color: '#fc7999', type: 'marker' },
 *			{ model: 'blueMarker', class: 'marker-blue', title: 'Blue marker', color: '#72cdfd', type: 'marker' },
 *			{ model: 'redPen', class: 'pen-red', title: 'Red pen', color: '#e91313', type: 'pen' },
 *			{ model: 'greenPen', class: 'pen-green', title: 'Green pen', color: '#118800', type: 'pen' }
 *		]
 *
 * There are two types of highlighters available:
 * - `'marker'` - rendered as a `<mark>` element, styled with the `background-color`,
 * - `'pen'` - rendered as a `<mark>` element, styled with the font `color`.
 *
 * **Note**: A style sheet with CSS classes is required for the configuration to work properly.
 * The highlight feature does not provide the actual styles by itself.
 *
 * **Note**: It is recommended that the `color` value should correspond to the class in the content
 * style sheet. It represents the highlighter in the user interface of the editor.
 *
 *		ClassicEditor
 *			.create( editorElement, {
 *				highlight: {
 *					options: [
 *						{
 *							model: 'pinkMarker',
 *							class: 'marker-pink',
 *							title: 'Pink Marker',
 *							color: '#fc7999',
 *							type: 'marker'
 *						},
 *						{
 *							model: 'redPen',
 *							class: 'pen-red',
 *							title: 'Red Pen',
 *							color: '#e91313',
 *							type: 'pen'
 *						},
 *					]
 *				}
 *		} )
 *		.then( ... )
 *		.catch( ... );
 *
 * @member {Array.<module:highlight/highlight~HighlightOption>} module:highlight/highlight~HighlightConfig#options
 */
