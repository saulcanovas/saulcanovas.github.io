---
title: 'Gestor de Facturación'
description: Aplicación para gestionar facturas, clientes e inventario, diseñada para pymes y autónomos que necesitan una solución ligera y funcional.
publishDate: 'Oct 27 2025'
isFeatured: true
seo:
  image:
    src: '/project-gestor.jpg'
    alt: Vista previa del Gestor de Facturación
---

![Vista previa del proyecto](/gestor.PNG)

Este proyecto nace de una necesidad real: optimizar el flujo de trabajo de facturación y el control de stock en negocios pequeños. Puedes ver el código y el historial en GitHub: https://github.com/saulcanovas/gestorFacturacion

## Descripción general

Desarrollé un gestor de facturación que centraliza la creación y envío de facturas, la gestión de clientes y el control de inventario. La interfaz está pensada para ser clara y rápida: acceso a facturas recientes, fichas de cliente con historial y un panel de inventario con alertas de stock mínimo.

## Objetivos

1. Permitir emitir facturas y presupuestos de forma ágil.  
2. Mantener un registro ordenado de clientes y sus transacciones.  
3. Controlar el inventario con movimientos de entrada y salida.  
4. Facilitar la exportación de información (CSV/PDF) y la integración con herramientas contables.

## Funcionalidades principales

1. **Facturación**
   - Crear, editar y duplicar facturas y presupuestos.
   - Generación automática de numeración y cálculo de impuestos.
   - Exportación a PDF y envío por correo desde la propia interfaz.

2. **Gestión de clientes**
   - Fichas con datos fiscales, direcciones y contactos.
   - Historial de facturas y presupuestos por cliente.
   - Búsqueda y filtros rápidos para localizar registros.

3. **Inventario**
   - Listado de productos con precios, códigos y cantidades.
   - Movimientos de stock (entradas/salidas) asociados a facturas.
   - Alertas automáticas cuando el stock baja de un umbral definido.

4. **Reportes y exportación**
   - Informes de ventas por periodo, clientes más activos y productos más vendidos.
   - Exportación en CSV para conciliación contable o análisis externo.

5. **Roles y permisos (básico)**
   - Usuario administrador y usuarios operativos con permisos limitados.
   - Registro de actividad para auditoría básica.

## Tecnología utilizada

- **Backend:** Node.js con Express (API REST).  
- **Base de datos:** PostgreSQL para datos transaccionales.  
- **Frontend:** HTML/CSS + JavaScript con plantillas (interfaz ligera y sin dependencias pesadas).  
- **Autenticación:** Sesiones gestionadas desde el servidor.  
- **Utilidades:** Generación de PDFs (server-side), exportación CSV y validaciones en formularios.

> En el repositorio verás la estructura del proyecto, scripts de migración y ejemplos de datos para pruebas: https://github.com/saulcanovas/gestorFacturacion

## Resultado

La herramienta permite a pymes y autónomos llevar la facturación diaria sin necesidad de soluciones complejas. Tras las primeras pruebas con usuarios, se redujo el tiempo de emisión de facturas y mejoró el control del inventario, lo que facilitó la gestión administrativa del negocio.

## Comentario personal

Fue un proyecto muy práctico: me obligó a pensar en flujos reales de trabajo (errores comunes, usabilidad en pantallas pequeñas y procesos de exportación). Lo mantengo actualizado en el repositorio y lo uso como base para futuras mejoras.

