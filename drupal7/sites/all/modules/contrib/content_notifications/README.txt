INTRODUCTION
------------

This module display unread status for logged-in users on node display without
performance loss.
It place a placeholder on node display. Load and display the status
asynchronously.

REQUIREMENTS
------------

None


INSTALLATION
------------

 * Install as you would normally install a contributed Drupal module. Visit:
   https://drupal.org/documentation/install/modules-themes/modules-7
   for further information.



CONFIGURATION
-------------

 * Configure user permissions in Administration » People » Permissions:
    - Administer content notifications

 * Set the options on Configuration » Content authoring » Content
 notifications

 * Display the Content Status field on the Content types display modes


TROUBLESHOOTING
---------------
 * If the status does not display, check the following:
   - Truncate the drupal history table to reset all seen contents for your
   user
   - The field is visible in the view mode displayed
   - The javascript are loaded and work correctly (content_notifications.js)
   - Your are logged-in


MAINTAINERS
-----------

Current maintainers:
 * Vahé Chahbenderian (wwwahe) - https://www.drupal.org/u/wwwahe
