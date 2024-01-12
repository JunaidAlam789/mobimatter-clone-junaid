import {pgTable, varchar, integer,serial, text } from 'drizzle-orm/pg-core'

import {drizzle } from 'drizzle-orm/vercel-postgres'
import {sql} from '@vercel/postgres'

export const orders=pgTable('orders',{
id: serial("id"),
userid: varchar("userid",{length: 255}),
orderid: varchar("orderid",{length: 255}),
orderstate: varchar("ordrestate",{length: 255}),
merchantid: varchar("merchantid",{length: 255}),
externalid: varchar("externalid",{length: 255}),
currencycode: varchar("currencycode",{length: 255}),
createdtime: varchar("createdtime",{length: 255}),
updatedtime: varchar("updatedtime",{length: 255}),
productid: varchar("productid",{length: 255}),
productcategory: varchar("productcategory",{length: 255}),
cost: varchar("cost",{length: 255}),
title: varchar("title",{length: 255}),
provider: varchar("provider",{length: 255}),
});
/* export const cartTable=pgTable('cart',{
    id: serial("id"),
    user_id: varchar("user_id",{length: 255}).notNull(),
    product_id: varchar("product_id",{length: 255}).notNull(),
    quantity: integer("quantity").notNull(),
    price: integer("price"),
    title: varchar("title",{length: 255}),
    imagename: varchar("imagename",{length: 255}),
    size: varchar("size",{length: 50}),
    color: varchar("color",{length: 50})
    
    }); */

export const db= drizzle(sql);