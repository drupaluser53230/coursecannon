INTRODUCTION
------------

Allow you to display menu badges with notifications.
Example : Display the number of unread contents based on a views.

The module place a placeholder after the menu title and load
asynchronesly the result,
so there is no cache or performance impacts


REQUIREMENTS
------------

 * Content Notifications
 * Views (https://drupal.org/project/views)
 * Menu


CONFIGURATION
-------------

 * Enable the module
 * Edit Any Menu link and select the notifications handlers


TROUBLESHOOTING
---------------
 * If the options doesn't display on the menu edit link make sure
 that the Permission Administer content notifications has been set
 * If the status does not display, check the following:
   - Truncate the drupal history table to reset all seen
   contents for your user
   - The javascript are loaded and work correctly
   (content_notifications.js)
   - Your are logged-in


MAINTAINERS
-----------

Current maintainers:
 * Vahe Chahbenderian (wwwahe) - https://www.drupal.org/u/wwwahe
