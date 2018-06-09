const ContactsSchema = {
  name: 'Contacts',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: { type: 'string', indexed: true },
    company: 'string?',
    phone: { type: 'string', indexed: true },
    email: 'string?',
    picture: 'data?' // optional property
  }
};

export const realmConfig = {
  path: 'RealmDbDemo.realm',
  schemaVersion: 1,
  schema: [
    ContactsSchema,
  ],
  migration: (oldRealm, newRealm) => {
    // only apply this change if upgrading to schemaVersion 1
    if (oldRealm.schemaVersion < 1) {
      //const oldObjects = oldRealm.objects('Contacts');
      //const newObjects = newRealm.objects('Contacts');

      // loop through all objects and set the name property in the new schema
      // for (let i = 0; i < oldObjects.length; i++) {
      //   newObjects[i].name = oldObjects[i].firstName + ' ' + oldObjects[i].lastName;
      // }
    }
  }
};
