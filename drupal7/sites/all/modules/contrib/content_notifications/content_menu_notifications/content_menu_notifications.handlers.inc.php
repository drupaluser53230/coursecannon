<?php

/**
 * @file
 * Handlers delivered with the module.
 *
 * You can create your own and provide them through.
 * hook_content_menu_notifications_handlers_options.
 */

/**
 * Get view count from the view name.
 *
 * @param string $view_name
 * @param string $display_name
 *
 * @return int return view count result
 */
function content_menu_notifications_get_view_count($view_name, $display_name = '') {

  $count = 0;

  if ($view = views_get_view($view_name)) {
    $view->get_total_rows = TRUE;
    $view->count_unread = TRUE;

    if ($display_name) {
      $view->set_display($display_name);
    }

    $view->execute();
    if (isset($view->total_rows)) {
      $count = $view->total_rows;
    }

  }

  return $count;
}

/**
 * Display the argument.
 *
 * @return string display the $text
 */
function content_menu_notifications_display_text($text) {

  $text = check_plain($text);
  return t($text);

}
