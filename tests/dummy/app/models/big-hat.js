import Hat from './hat';
import { hasMany } from 'ember-data/relationships';

export default Hat.extend({
  materials: hasMany('soft-material', {async: false})
});
