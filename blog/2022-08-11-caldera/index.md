---
title: La caldera - Parte 1
slug: la-caldera-parte-1
tags: [iot,esp,electronica,nodered]

draft: true
---

A principio de este año, en Abril, para hacerlo tranquilo unos meses antes del frío, contratamos la instalación de la Caldera. Una sencilla, no es de las duales, solo para calefaccionar la casa, total ya teníamos un termotanque para el agua caliente sanitaria.

Ya tenia la experiencia de tener caldera con radiadores del depto donde vivía antes, en ese entonces me metí un poco para entender como funcionaban. Sin entrar en demasiado detalle porque no viene al caso para esta serie de posteos, cuento un poco como funciona todo el sistema de una caldera con radiadores.

La caldera funciona similar a un calefón, tiene una serpentina con un quemador que calienta el agua que pasa pero este agua está en un circuito cerrado y va circulando entre todos los radiadores conectados en paralelo, es decir, si cerras un radiador los demás siguen recibiendo agua.

El agua circula a una temperatura determinada pre definida en la caldera, en general al rededor de los 75°, los radiadores se llenan de agua caliente y generan calor, lo cual termina calentando los ambientes.

[pic caldera]

Ahora quien determina cuando prender el quemador?

<!--truncate-->

Un termostato, este es el encargado de medir la temperatura actual y mandar la señal a la caldera para prender el quemador y asi llegar a la temperatura deseada. Ahora, el problema es que este termostato mide la temperatura actual en donde se encuentre entonces la recomendación es _dejarlo en el ambiente mas frío de la casa_.

El objetivo de este proyecto es automatizar ese quemador por horarios, presencia en ambientes y control de temperatura desde el celular.

Lo voy a separar en varios posts porque es largo para empezar esto es la vista general de la implementación

* ESP-01 conectados a la wifi para reportar temperaturas y prender/apagar el quemador
* Protocolo MQTT de comunicación entre dispositivos usando Mosquitto como broker
* Home Assitant como frontend para control desde celular, pc, etc 
* NodeRed para las automatizaciones



