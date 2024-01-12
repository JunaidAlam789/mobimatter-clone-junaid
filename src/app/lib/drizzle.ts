import {pgTable, varchar, integer,serial, text } from 'drizzle-orm/pg-core'

import {drizzle } from 'drizzle-orm/vercel-postgres'
import {sql} from '@vercel/postgres'

export const cartTable=pgTable('cart',{
id: serial("id"),
user_id: varchar("user_id",{length: 255}).notNull(),
product_id: varchar("product_id",{length: 255}).notNull(),
quantity: integer("quantity").notNull(),
price: integer("price"),
title: varchar("title",{length: 255}),
imagename: varchar("imagename",{length: 255}),
size: varchar("size",{length: 50}),
color: varchar("color",{length: 50})

});

export const db= drizzle(sql);