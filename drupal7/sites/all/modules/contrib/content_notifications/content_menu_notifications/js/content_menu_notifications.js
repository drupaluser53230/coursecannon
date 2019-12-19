(function ($) {

  Drupal.behaviors.content_menu_notifications = {
    attach: function (context, settings) {

      var $menus = $('.content-menu-notifications-placeholder', context);

      if ($menus.length) {
        var menus = {};

        $menus.each(function () {
          var id = $(this).attr('id');
          var mlid = $(this).data('mlid');
          menus[id] = mlid;
        });
        if (menus) {
          var apiRequestPath = Drupal.settings.basePath + 'content-notifications/menu/get/json';
          var postData = {"menus": menus};
          $.post(apiRequestPath, postData, function(result) {
            if (result.menus) {
              $.each(result.menus, function (i, markup) {
                $('#' + i).html(markup);
              });
            }
          }, 'json');
        }

      }
    }
  };

}(jQuery));