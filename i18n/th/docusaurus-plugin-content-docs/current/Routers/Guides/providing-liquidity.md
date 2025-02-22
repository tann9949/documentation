---
sidebar_position: 3
---

# การให้สภาพคล่องด้วย contract ของ Router

ผู้ใช้งาน operator จะต้องให้สภาพคล่องสู่เครือข่ายเพื่อที่จะให้ทำงานได้ โดยสิ่งนี้จะทำสำเร็จได้ด้วยการเรียกใช้ method `addLiquidityFor` บน contract [`TransactionManager`](https://github.com/connext/nxtp/blob/main/packages/contracts/contracts/TransactionManager.sol)

## การใช้งาน UI

แน่นอนว่าคุณนั้นสามารถใช้งาน contract เพื่อให้สภาพคล่องด้วย Etherscan หรือเครื่องมือที่คล้ายๆกัน เราได้สร้าง [NXTP Test UI](https://nxtp.connext.network) เพื่อทำให้สิ่งนี้ง่ายขึ้น และสามารถให้ผู้ใช้งานดูและเพิ่มสภาพคล่องบน router ได้ เพียงกดไปที่หน้า "Router" เพื่อการจัดการสภาพคล่องที่สะดวกสบายมากขึ้น

:::caution

address ของ router นั้นคือ address ของ Router Contract ไม่ใช่ EOA address ของ router signer!

:::

:::info

testnets นั้นเปิดให้ routers สามารถให้สภาพคล่องได้อย่างอิสระ อย่างไรก็ตาม สำหรับ mainnet แล้ว routers และสินทรัพย์จะยังถูกคัดเลือกอยู่ในช่วงเวลาชั่วคราว หากต้องการเพิ่มสินทรัพย์ให้ใช้ได้หรืออยากเป็น router แล้ว ให้ติดต่อทางทีมงาน Connext เพื่อให้ได้รับสิทธิ

:::

การเพิ่มสภาพคล่องสำหรับการแลกเปลี่ยน (swaps) ทั้งสองทางนั้นขึ้นอยู่กับการตั้งค่าของ กองเงินแลกเปลี่ยน (swap pools) อย่าลืมที่จะเตรียมค่าแก๊สให้เพียงพอ

:::note

คุณไม่ต้องอาศัย private key ของ router ในการทำสิ่งนี้ เพราะ method `addLiquidityFor` จะดึงเงินจากกระเป๋าที่เชื่อมต่อไว้ และระบุกระเป๋านั้นเข้ากับ router ที่เลือกไว้อีกที

:::

## โทเคนสำหรับทดสอบ (Test Tokens)

เราได้ทำการปล่อยโทเคนสำหรับทดสอบสำหรับ testnet ทุกตัวที่สามารถใช่เป็นเส้นทางสำหรับทดสอบได้ โทเคนเหล่านี้สามารถ mint ได้ และ address ของ token เหล่านี้จะอยู่ใน[ไฟล์นี้](https://github.com/connext/nxtp/blob/11d995b6bb96ff1fb20bb23be0811f3d0486fa4d/packages/contracts/deployments.json) ในรูปแบบของ `TestERC20`.

## การสังเกตสภาพคล่อง

คุณสามารถหา router ของคุณได้ที่ https://connextscan.io และสังเกตสภาพคล่องรวมทั้งธุรกรรมทั้งหมด