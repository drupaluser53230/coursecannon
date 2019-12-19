(function ($) {

  Drupal.behaviors.content_notifications = {
    attach: function (context, settings) {

      var $selector = $('.content-status-placeholder', context);

      if ($selector.length) {
        var nodes = {};

        $selector.each(function () {
          var id = $(this).attr('id');
          var nid = $(this).data('nid');
          nodes[id] = nid;
        });

        if (nodes) {
          var apiRequestPath = Drupal.settings.basePath + 'content-notifications/get/json';
          var postData = {"nodes": nodes};
          $.post(apiRequestPath, postData, function(result) {
            if (result.nodes) {
              $.each(result.nodes, function (i, markup) {
                $('#' + i).html(markup);
              });
            }
          }, 'json');
        }
      }
    }
  };

}(jQuery));