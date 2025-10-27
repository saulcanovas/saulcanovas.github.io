---
title: 'Gestor de Tienda de Cómics'
description: Aplicación para gestionar una tienda de cómics, con control de facturas, clientes, inventario de cómics y precios, diseñada para simplificar la administración diaria.
publishDate: 'Oct 27 2025'
isFeatured: true
seo:
  image:
    src: '/project-comics.jpg'
    alt: Vista previa del Gestor de Tienda de Cómics
---

![Vista previa del proyecto](/comic.PNG)

Este proyecto fue desarrollado para gestionar de forma eficiente una tienda de cómics, centralizando clientes, ventas y el inventario de productos. El código completo está disponible en GitHub: https://github.com/saulcanovas/gestorTiendaDeComics

## Descripción general

El gestor permite llevar el control de facturas, clientes y productos, incluyendo información de editoriales y precios. La interfaz está pensada para que cualquier empleado pueda acceder rápidamente a la información necesaria, crear ventas y actualizar inventario sin complicaciones.

## Objetivos

1. Facilitar la gestión de clientes y facturas en la tienda de cómics.  
2. Mantener un inventario actualizado con editoriales, títulos y precios.  
3. Ofrecer reportes rápidos de ventas y stock para tomar decisiones.  
4. Permitir exportar datos y mantener un registro histórico de operaciones.

## Funcionalidades principales

1. **Facturación y ventas**
   - Creación y edición de facturas para clientes.  
   - Cálculo automático de precios y totales.  
   - Registro de ventas por cliente y por fecha.  

2. **Gestión de clientes**
   - Fichas de clientes con datos de contacto y compras previas.  
   - Historial completo de facturas asociadas.  
   - Búsqueda rápida y filtros para encontrar clientes específicos.  

3. **Inventario de cómics**
   - Listado de cómics con título, editorial, precio y stock.  
   - Movimientos de stock asociados a ventas o ingresos.  
   - Alertas de bajo stock para reposición.  

4. **Reportes y análisis**
   - Ventas totales por cliente o periodo.  
   - Inventario actual y valor total del stock.  
   - Exportación de datos a CSV para control contable o análisis externo.  

5. **Administración y seguridad**
   - Diferentes roles de usuario (administrador y empleados).  
   - Registro de actividad básica para seguimiento de operaciones.  

## Tecnología utilizada

- **Backend:** Node.js con Express para manejar la lógica y API REST.  
- **Base de datos:** PostgreSQL para clientes, facturas e inventario.  
- **Frontend:** HTML, CSS y JavaScript para una interfaz ligera y funcional.  
- **Exportación de datos:** CSV y PDF para reportes y facturas.  
- **Autenticación:** Sistema de sesiones gestionadas desde el servidor.  

> Toda la estructura y ejemplos de datos están disponibles en el repositorio: https://github.com/saulcanovas/gestorTiendaDeComics

## Resultado

El gestor simplifica la administración de la tienda, permitiendo un control completo de las ventas, clientes y productos. Los empleados pueden emitir facturas, consultar stock y mantener actualizado el inventario sin complicaciones.  
El sistema también permite generar reportes de ventas y stock, facilitando la toma de decisiones sobre reposiciones y promociones.

## Comentario personal

Este proyecto me permitió aplicar buenas prácticas de desarrollo de aplicaciones de gestión y aprender a diseñar flujos de trabajo claros para un negocio real. La experiencia fue muy valiosa para comprender cómo organizar datos y crear una interfaz útil para usuarios finales.
