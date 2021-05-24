1. SELECT model, speed, hd FROM PC WHERE price < 500
2. SELECT DISTINCT maker AS Maker FROM Product WHERE type = 'Printer'
3. SELECT model, ram, screen FROM Laptop WHERE price > 1000
4. SELECT * FROM Printer WHERE color = 'y'
5. SELECT model, speed, hd FROM PC WHERE (cd = '12x' OR cd = '24x') AND price < 600
6. SELECT DISTINCT Product.maker, speed FROM Laptop JOIN Product ON Laptop.model = Product.model WHERE Product.type='Laptop' AND hd >= 10
7. SELECT model, price FROM (SELECT model, price FROM PC UNION SELECT model, price FROM Laptop UNION SELECT model, price FROM Printer) AS modelPrice 
WHERE modelPrice.model IN (SELECT model FROM Product WHERE maker = 'B')
8. SELECT maker FROM Product WHERE type='PC' EXCEPT SELECT maker FROM Product WHERE type='Laptop'
9. SELECT DISTINCT maker FROM Product INNER JOIN PC ON Product.model = PC.model WHERE PC.speed >= 450
10. SELECT model, price FROM Printer WHERE price = (SELECT MAX(price) FROM Printer)
11. SELECT AVG(speed) AS Average FROM PC
12. SELECT AVG(speed) AS Average FROM Laptop WHERE price > 1000
13. SELECT AVG(speed) AS Average FROM PC WHERE model = (SELECT model FROM Product WHERE maker='A' AND Product.model = PC.model)
14. SELECT Classes.class, name, country FROM Classes INNER JOIN Ships ON Classes.class = Ships.class WHERE numGuns >= 10
15. SELECT hd FROM PC GROUP BY hd HAVING COUNT(model) > 1
16. SELECT DISTINCT A.model AS model, B.model AS model, A.speed, A.ram FROM PC AS A, PC AS B WHERE A.speed = B.speed AND A.ram = B.ram AND A.model > B.model
17. SELECT DISTINCT type, Laptop.model, Speed FROM Laptop INNER JOIN Product ON Product.model = Laptop.model WHERE speed < (SELECT MIN(speed) FROM PC)
18. SELECT DISTINCT maker, price FROM Printer INNER JOIN Product ON Product.model = Printer.model WHERE color = 'y' AND price = (SELECT MIN(price) FROM Printer WHERE color ='y')
19. SELECT maker, AVG(screen) AS Average FROM Laptop INNER JOIN Product ON Product.model = Laptop.model GROUP BY maker
20. SELECT maker, COUNT(model) AS Count FROM Product WHERE type = 'PC' GROUP BY maker HAVING COUNT(model) >= 3
21. SELECT maker, MAX(price) FROM PC INNER JOIN Product ON Product.model = PC.model GROUP BY maker
22. SELECT speed, AVG(price) FROM PC WHERE speed > 600 GROUP BY speed
23. SELECT DISTINCT maker FROM PC INNER JOIN Product ON PC.model = Product.model WHERE PC.speed >= 750 AND maker IN (SELECT  maker FROM Laptop INNER JOIN Product ON Laptop.model = Product.model WHERE Laptop.speed >= 750)
24. SELECT model FROM(SELECT DISTINCT model, price FROM Laptop WHERE Laptop.price = (SELECT MAX(price) FROM Laptop) UNION SELECT DISTINCT model, price FROM PC WHERE PC.price = (SELECT MAX(price) FROM PC) UNION SELECT DISTINCT model, price FROM Printer WHERE Printer.price = (SELECT MAX(price) FROM Printer)) AS FIRST WHERE FIRST.price=(SELECT MAX(price) FROM (SELECT DISTINCT price FROM Laptop WHERE Laptop.price = (SELECT MAX(price) FROM Laptop) UNION SELECT DISTINCT price FROM PC WHERE PC.price = (SELECT MAX(price) FROM PC) UNION SELECT DISTINCT price FROM Printer WHERE Printer.price = (SELECT MAX(price) FROM Printer)) AS SECOND )    
25. SELECT DISTINCT product.maker FROM product WHERE product.type='Printer' INTERSECT 
SELECT DISTINCT product.maker FROM product INNER JOIN pc ON pc.model=product.model WHERE product.type='PC' AND pc.ram=(SELECT MIN(ram) FROM pc) AND pc.speed = (SELECT MAX(speed) FROM (SELECT DISTINCT speed FROM pc WHERE pc.ram=(SELECT MIN(ram) FROM pc)) as t)


