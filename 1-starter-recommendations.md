# nn-nextjs-starter: Starter recommendations

## Drupal module

This list recommends Drupal modules and Next.js for creating a decoupled Drupal site. Here's a brief explanation for each module:

- JSON:API: A Drupal module to serialize your Drupal data in JSON:API standard. This is an essential module for setting up a decoupled or headless Drupal system.

- Next: A module that allows integration between Drupal and the Next.js framework. This helps you build server-side rendered and static web applications using a Drupal backend.

- JSON:API Include: This module improves the JSON:API module by allowing the merging of include and relationship data, providing more flexibility in handling complex data relationships.

- JSON:API Menu Items: This module adds a JSON:API resource for Drupal menu items, enabling navigation menus to be included in your decoupled front-end.

- JSON:API Image Styles: This module exposes image style URLs to JSON:API exports. It allows decoupled front-ends to utilize Drupal's image style (resize, crop, etc.) functionality.

Remember to run the corresponding commands for installing and enabling these modules using Lando and Drush (Drupal's command-line utility).

### Netnode decoupled config recommendations

https://github.com/NETNODEAG/nn-drupal-starter/blob/10.0.x/3_netnode_decoupled_config_lando.sh
