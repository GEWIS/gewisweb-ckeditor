/**
 * @license Copyright (c) 2014-2022, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';
import GeneralHTMLSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import List from '@ckeditor/ckeditor5-list/src/list';
import Markdown from '@ckeditor/ckeditor5-markdown-gfm/src/markdown';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';

class FullEditor extends ClassicEditor {}
class MarkdownEditor extends ClassicEditor {}

// Plugins to include in the FullEditor build.
FullEditor.builtinPlugins = [
    Alignment,
    Autoformat,
    AutoLink,
    BlockQuote,
    Bold,
    Code,
    CodeBlock,
    Essentials,
    FindAndReplace,
    GeneralHTMLSupport,
    Heading,
    Highlight,
    HorizontalLine,
    Image,
    ImageCaption,
    ImageInsert,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Indent,
    IndentBlock,
    Italic,
    Link,
    LinkImage,
    List,
    MediaEmbed,
    Paragraph,
    RemoveFormat,
    SimpleUploadAdapter,
    SourceEditing,
    Strikethrough,
    Subscript,
    Superscript,
    Table,
    TableCaption,
    TableToolbar,
    Underline
];

// Plugins to include in the MarkdownEditor build.
MarkdownEditor.builtinPlugins = [
    Alignment,
    Autoformat,
    AutoLink,
    BlockQuote,
    Bold,
    Code,
    CodeBlock,
    Essentials,
    FindAndReplace,
    GeneralHTMLSupport,
    Heading,
    HorizontalLine,
    Italic,
    Link,
    List,
    Markdown,
    Paragraph,
    RemoveFormat,
    SourceEditing,
    Strikethrough,
    Table,
    TableCaption,
    TableToolbar
];

// FullEditor configuration.
FullEditor.defaultConfig = {
    toolbar: {
        items: [
            'heading',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'subscript',
            'superscript',
            'highlight',
            'removeFormat',
            '|',
            'alignment',
            'outdent',
            'indent',
            'bulletedList',
            'numberedList',
            'horizontalLine',
            '|',
            'link',
            'imageInsert',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
            'code',
            'codeBlock',
            '|',
            'findAndReplace',
            'undo',
            'redo',
            '|',
            'sourceEditing'
        ],
        shouldNotGroupWhenFull: true
    },
    // The language must be kept in sync with the webpack.config.js build configuration.
    language: 'en',
    // Force the alignment plugin to use classes instead of inline styles.
    alignment: {
        options: [
            {
                name: 'center',
                className: 'text-center'
            },
            {
                name: 'justify',
                className: 'text-justify'
            },
            {
                name: 'left',
                className: 'text-left'
            },
            {
                name: 'right',
                className: 'text-right'
            }
        ]
    },
    htmlSupport: {
        allow: [
            // Allow usage of <details and <summary>.
            {
                name: /^(details|summary)$/
            },
            // Allow usage of <small> inline elements.
            {
                name: 'small'
            },
            // Allow specific <ul> and <li> classes for the Bootstrap navbars.
            {
                name: 'ul',
                classes: [
                    'nav',
                    'nav-pills'
                ]
            },
            {
                name: 'div',
                classes: [
                    'nav',
                    'nav-pills'
                ]
            },
            {
                name: 'li',
                classes: [
                    'active'
                ]
            },
            {
                name: 'div',
                classes: [
                    'active'
                ]
            },
            // Allow mark-up <div>s.
            {
                name: 'div',
                classes: [
                    'row',
                    /^col\-(xs|sm|md|lg)\-((pull|push)\-)?([1-9]|(1[0-2]))$/
                ]
            },
            // Allow Bootstrap <table> styles.
            {
                name: 'table',
                classes: [
                    'table',
                    'table-striped',
                    'table-documents',
                    'table-bordered',
                    'table-condensed',
                    'table-hover'
                ]
            },
            // Allow iframes for video embeds from YouTube (NoCookie) and Vimeo (as per the CSP).
            {
                name: 'iframe',
                attributes: {
                   src: /^((https:\/\/www.youtube-nocookie.com\/embed\/)|(https:\/\/player.vimeo.com\/video\/)).+$/
                },
            }
        ],
        disallow: [
            // Do not allow images which are not hosted on a GEWIS domain ('https://' is required).
            {
                name: 'img',
                attributes: {
                    src: /^(?!(https:\/\/)([a-z0-9][a-z0-9-]+[a-z0-9]\.)*gewis\.nl\/).+$/y
                }
            }
        ]
    },
    image: {
        toolbar: [
            'toggleImageCaption',
            'imageTextAlternative',
            '|',
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
            '|',
            'linkImage'
        ]
    },
    mediaEmbed: {
        // Override the default providers.
        providers: [
            {
                name: 'vimeo',
                url: [
                    /^vimeo\.com\/(\d+)/,
                    /^vimeo\.com\/[^/]+\/[^/]+\/video\/(\d+)/,
                    /^vimeo\.com\/album\/[^/]+\/video\/(\d+)/,
                    /^vimeo\.com\/channels\/[^/]+\/(\d+)/,
                    /^vimeo\.com\/groups\/[^/]+\/videos\/(\d+)/,
                    /^vimeo\.com\/ondemand\/[^/]+\/(\d+)/,
                    /^player\.vimeo\.com\/video\/(\d+)/
                ],
                html: match => {
                    const id = match[1];

                    return (
                        '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">' +
                            `<iframe src="https://player.vimeo.com/video/${ id }" ` +
                                'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ' +
                                'frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>' +
                            '</iframe>' +
                        '</div>'
                    );
                }
            },
            {
                name: 'youtube',
                url: [
                    /^(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/,
                    /^(?:m\.)?youtube\.com\/v\/([\w-]+)/,
                    /^youtube\.com\/embed\/([\w-]+)/,
                    /^youtu\.be\/([\w-]+)/
                ],
                html: match => {
                    const id = match[1];

                    return (
                        '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">' +
                            `<iframe src="https://www.youtube-nocookie.com/embed/${ id }" ` +
                                'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ' +
                                'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>' +
                            '</iframe>' +
                        '</div>'
                    );
                }
            }
        ],
        previewsInData: true,
        // Remove content providers which are not supported.
        removeProviders: [
            'dailymotion',
            'facebook',
            'flickr',
            'googleMaps',
            'instagram',
            'spotify',
            'twitter'
        ]
    },
    simpleUpload: {
        uploadUrl: '/admin/page/upload'
        // Unfortunately, by using the URLHelper, CKEditor thinks that there is no URL. The ordering of the scripts does not appear to influence this.
        // uploadUrl: URLHelper.url('admin_page/upload')
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    }
};

// MarkdownEditor configuration.
MarkdownEditor.defaultConfig = {
    toolbar: {
        items: [
            'heading',
            '|',
            'bold',
            'italic',
            'strikethrough',
            'removeFormat',
            '|',
            'bulletedList',
            'numberedList',
            'horizontalLine',
            '|',
            'link',
            'blockQuote',
            'insertTable',
            'code',
            'codeBlock',
            '|',
            'findAndReplace',
            'undo',
            'redo',
            '|',
            'sourceEditing'
        ],
        shouldNotGroupWhenFull: true
    },
    // The language must be kept in sync with the webpack.config.js build configuration.
    language: 'en',
    htmlSupport: {
        allow: [
            // Allow Bootstrap <table> styles.
            {
                name: 'table',
                classes: [
                    'table',
                    'table-striped',
                    'table-documents',
                    'table-bordered',
                    'table-condensed',
                    'table-hover'
                ]
            },
        ],
        disallow: [
            {
                name: 'iframe'
            },
            {
                name: 'img'
            }
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    }
};

// Export all editors.
export default {
    FullEditor,
    MarkdownEditor
};
