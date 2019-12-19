<?php

/**
 * Admin form to configure content notices.
 */
function content_notifications_admin_form($form, &$form_state) {
  $form['content_notifications_days_limit'] = array(
    '#type' => 'textfield',
    '#attributes' => array(
      ' type' => 'number',
    ),
    '#description' => t('Days'),
    '#title' => t('Maximum content age to display status'),
    '#default_value' => variable_get('content_notifications_days_limit', 7),
    '#required' => TRUE,
  );

  $options = array(
    'new' => t('New content'),
    'updated' => t('Updated content'),
  );

  $form['content_notifications_status_display'] = array(
    '#type' => 'checkboxes',
    '#title' => 'Display content status :',
    '#options' => $options,
    '#default_value' => variable_get('content_notifications_status_display', array('new')),
  );

  return system_settings_form($form);
}

/**
 * Admin form to configure content notices.
 */
function content_notifications_admin_form_validate($form, &$form_state) {
  $limit = $form_state['values']['content_notifications_days_limit'];
  if (!is_numeric($limit)) {
    form_set_error('content_notifications_days_limit', t('Please enter a number.'));
    return;
  }
}
