import type { CollectionConfig, Access, FieldAccess } from 'payload'

const isAdmin: Access = ({ req: { user } }) => {
  return (user as any)?.role === 'admin'
}

const isAdminOrSelf: Access = ({ req: { user }, id }) => {
  if (!user) return false
  if ((user as any)?.role === 'admin') return true
  return user?.id === id
}

const isAdminField: FieldAccess = ({ req: { user } }) => {
  return (user as any)?.role === 'admin'
}

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: () => true,
    update: isAdminOrSelf,
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
      required: true,
      defaultValue: 'editor',
      // 👇 COMMENT THIS OUT TEMPORARILY
      // access: {
      //   update: isAdminField,
      // },
    },
  ],
}
