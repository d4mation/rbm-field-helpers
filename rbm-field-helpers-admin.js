!function(a){"use strict";function b(){var b=a(".rbm-field-colorpicker");b.length&&b.each(function(){return a(this).data("rbm-colorpicker-init")?!0:(a(this).data("rbm-colorpicker-init",1),void a(this).find('input[type="text"]').wpColorPicker())})}a(b),a(document).on("rbm-repeater-add",b)}(jQuery),function(a){"use strict";function b(a,b){var c=b.find(".rbm-field-media");c.length&&c.find(".remove-media").click()}window.rbm_instantiate_media_uploaders=function(){var b=a(".rbm-media-uploader");b.length&&b.each(function(){if(a(this).data("rbm_media_frame"))return!0;var b=a(this),c={title:b.data("title"),button:{text:b.data("button-text")}},d=b.data("type");switch(d&&"any"!==d&&(c.library={type:d}),b.data("rbm_media_frame",wp.media.frames.meta_image_frame=wp.media(c)),b.find(".remove-media").off(),b.find(".upload-media").off(),d){case"image":b.data("rbm_media_frame").on("select",function(){var a=b.data("rbm_media_frame").state().get("selection").first().toJSON();b.find(".media-id").val(a.id),b.find(".image-preview").attr("src",a.url),b.find(".upload-media").hide(),b.find(".remove-media").show()}),b.find(".remove-media").click(function(b){var c=a(this).siblings(".image-preview");c.attr("src",c.data("placeholder")||"")});break;default:b.data("rbm_media_frame").on("select",function(){var a=b.data("rbm_media_frame").state().get("selection").first().toJSON();b.find(".media-id").val(a.id),b.find(".media-url").html(a.url),b.find(".upload-media").hide(),b.find(".remove-media").show()}),b.find(".remove-media").click(function(b){var c=a(this).siblings(".media-url");c.html(c.data("placeholder")||"&nbsp;")})}b.find(".upload-media").click(function(a){a.preventDefault(),b.data("rbm_media_frame").open()}),b.find(".remove-media").click(function(b){a(this).siblings(".upload-media").show(),a(this).hide(),a(this).siblings(".media-id").val("")})})},a(rbm_instantiate_media_uploaders),a(document).on("rbm-repeater-add",rbm_instantiate_media_uploaders),a(document).on("rbm-repeater-add",b)}(jQuery),function(a){"use strict";a(function(){a(".rbm-field-repeater").each(function(){var b=a(this).find(".rbm-field-repeater-list"),c=b.data("repeater-list");a(this).repeater({show:function(){a(this).slideDown(),a(document).trigger("rbm-repeater-add",[a(this)])},hide:function(){confirm("Are you sure you want to delete this element?")&&(a(this).slideUp(400,function(){a(this).remove()}),a(document).trigger("rbm-repeater-delete"))},isFirstItemUndeletable:!0}),b.sortable({axis:"y",handle:".rbm-field-repeater-handle",update:function(d,e){b.find(".rbm-field-repeater-row").each(function(){a(this).find("input, select, textarea").filter('[name^="'+c+'"]').each(function(){var b=a(this).closest(".rbm-field-repeater-row").index(),d=a(this).attr("name"),e=new RegExp("("+c+"\\[)\\d(\\]\\[.*?\\])","i");a(this).attr("name",d.replace(e,"$1"+b+"$2"))})}),a(document).trigger("rbm-repeater-list-update",[e.item])}}),a(this).find(".rbm-field-repeater-row.dummy").remove()})})}(jQuery),function(a){"use strict";a(function(){function b(){a(".rbm-field-table").each(function(){var b=a(this).find("table");b.find("thead th").first().find("[data-table-delete-column]").prop("disabled",!0),b.find("tbody tr").first().find("[data-table-delete-row]").prop("disabled",!0),b.find("tbody").sortable({axis:"y",handle:".rbm-field-table-sort",update:c}),a(this).find("[data-table-create-row]").click(function(){var b=a(this).closest(".rbm-field-table").find("table"),d=b.find("tbody tr").first().clone(!0,!0);d.find("[data-table-delete-row]").prop("disabled",!1),d.find('input[type="text"]').val(""),b.find("tbody").append(d),c()}),a(this).find("[data-table-create-column]").click(function(){var b=a(this).closest(".rbm-field-table").find("table"),d=b.find("thead th").first().clone(!0,!0),e=b.find("tbody td").first().clone(!0,!0);d.find('input[type="text"]').val(""),d.find("[data-table-delete-column]").prop("disabled",!1),e.find('input[type="text"]').val(""),b.find("thead tr th:last-of-type").before(d),b.find("tbody tr td:last-of-type").before(e),c()}),a(this).find("[data-table-delete-row]").click(function(){a(this).closest("tr").remove(),c()}),a(this).find("[data-table-delete-column]").click(function(){var b=a(this).closest("table"),d=a(this).closest("th").index();b.find("th:nth-child("+(d+1)+")").remove(),b.find("td:nth-child("+(d+1)+")").remove(),c()})})}function c(){a(".rbm-field-table").each(function(){a(this).find("thead th").each(function(){if(a(this).hasClass("actions"))return!0;var b=a(this).index(),c=a(this).find('input[type="text"]').attr("name"),d="["+b+"]";a(this).find('input[type="text"]').attr("name",c.replace(/\[\d]/,d))}),a(this).find("tbody td").each(function(){if(a(this).hasClass("actions"))return 0===a(this).closest("tr").index()?a(this).find("[data-table-delete-row]").prop("disabled",!0):a(this).find("[data-table-delete-row]").prop("disabled",!1),!0;var b=a(this).closest("tr").index(),c=a(this).index(),d=a(this).find('input[type="text"]').attr("name"),e="["+b+"]["+c+"]";a(this).find('input[type="text"]').attr("name",d.replace(/\[\d]\[\d]/,e))})})}b(),a(document).on("rbm-repeater-add",b)})}(jQuery),function(a){"use strict";function b(b,c){var d=c.find(".rbm-field-wysiwyg");d.length&&d.each(function(){var b,c=a(this).find("textarea.wp-editor-area"),d=tinymce.editors[a(this).data("id")],e=a('<textarea type="text" name="'+c.attr("name")+'"></textarea>'),f=a(this).find(".wp-editor-wrap");b=d?d.getContent():c.val(),e.val(b).hide(),f.before('<p class="description">Please Update or Save Draft to edit this content.</p>'),f.replaceWith(e)})}a(document).on("rbm-repeater-list-update",b),a(document).on("rbm-repeater-add",b)}(jQuery);
//# sourceMappingURL=rbm-field-helpers-admin.js.map