import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'darkcyan-bear',

  projectId: 't0rh026v',
  dataset: 'darkcyan-bear',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
