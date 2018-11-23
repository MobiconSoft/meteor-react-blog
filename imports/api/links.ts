import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
  Meteor.publish('links', () => Links.find());
  Links.allow({
    insert (userId: string, doc: any) {
      console.log('insert doc:', doc);
      return (userId && doc.owner === userId);
    },
    remove(userId: string, doc: any) {
      console.log('remove doc:', doc);
      return (userId && doc.owner === userId);
    }
  })
}
export default Links;
