/*global define*/
define(['underscore', 'backbone', 'oronote/js/note/model'
    ], function (_, Backbone, NoteModel) {
    'use strict';

    /**
     * @export  oronote/js/note/collection
     * @class   oronote.note.Collection
     * @extends Backbone.Collection
     */
    return Backbone.Collection.extend({
        model: NoteModel
    });
});
