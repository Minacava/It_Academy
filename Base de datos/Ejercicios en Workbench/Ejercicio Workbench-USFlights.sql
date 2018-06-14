USE USAirlineFlights;


-- Quantitat de registres de la taula de vols:

SELECT count(*) FROM Flights;


-- Retard promig de sortida i arribada segons l’aeroport origen.-- 

SELECT  Origin, avg(ArrDelay) From Flights GROUP BY  Origin;

SELECT  Origin, avg(DepDelay) From Flights GROUP BY  Origin;


-- Retard promig d’arribada dels vols, per mesos i segons l’aeroport origen. A més, volen que els resultat es mostrin de la següent forma:

SELECT  Origin, colYear, colMonth, avg(ArrDelay) From Flights GROUP BY  Origin, colYear, colMonth;


-- Retard promig d’arribada dels vols, per mesos i segons l’aeroport origen (mateixa consulta que abans i amb el mateix ordre). Però a més, ara volen que en comptes del codi de l’aeroport es mostri el nom de la ciutat.

SELECT USAirports.City, colYear, colMonth, avg(ArrDelay) FROM USAirports JOIN Flights ON USAirports.IATA = Flights.Origin GROUP BY USAirports.City, Flights.colYear, Flights.colMonth;


-- Les companyies amb més vols cancelats. A més, han d’estar ordenades de forma que les companyies amb més cancelacions apareguin les primeres.

SELECT CarrierCode, count(Cancelled) FROM Carriers  JOIN Flights ON Carriers.CarrierCode= Flights.UniqueCarrier WHERE Flights.Cancelled =1 GROUP BY CarrierCode ORDER BY Cancelled; 


-- Companyies amb el seu promig només d’aquelles les quals els seus vols arriben al seu destí amb un retràs major de 10 minuts

SELECT CarrierCode, avg(ArrDelay) FROM Carriers  JOIN Flights ON Carriers.CarrierCode= Flights.UniqueCarrier WHERE Flights.ArrDelay > 10  GROUP BY CarrierCode; 

-- L’identificador dels 10 avions que més kilòmetres han recorregut fent vols comercials:
-- USE Tailnum

SELECT TailNum, sum(Distance) AS totalDistance FROM Flights GROUP BY TailNum ORDER BY totalDistance DESC LIMIT 10;