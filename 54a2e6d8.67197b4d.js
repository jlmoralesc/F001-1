(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{71:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(2),c=a(6),r=(a(0),a(94)),o={id:"factura",title:"Factura Electr\xf3nica",sidebar_label:"Factura",description:"Construye tu primera factura electr\xf3nica siguiendo el est\xe1ndar UBL 2.1 - SUNAT."},i={unversionedId:"factura",id:"factura",isDocsHomePage:!1,title:"Factura Electr\xf3nica",description:"Construye tu primera factura electr\xf3nica siguiendo el est\xe1ndar UBL 2.1 - SUNAT.",source:"@site/docs/factura.md",permalink:"/docs/factura",editUrl:"https://github.com/thegreenter/F001-1/edit/master/website/docs/factura.md",sidebar_label:"Factura",sidebar:"docs",previous:{title:"Requerimientos",permalink:"/docs/requirements"},next:{title:"Firma Digital",permalink:"/docs/sign"}},b=[{value:"Datos de la Factura",id:"datos-de-la-factura",children:[]},{value:"XML",id:"xml",children:[]},{value:"Cat\xe1logos",id:"cat\xe1logos",children:[]}],l={rightToc:b};function s(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"En esta secci\xf3n empezaremos la elaboraci\xf3n de los comprobantes electr\xf3nicos (archivos ",Object(r.b)("inlineCode",{parentName:"p"},"XML"),"),\nbasados en el estandar ",Object(r.b)("inlineCode",{parentName:"p"},"UBL 2.1"),"."),Object(r.b)("p",null,"Una factura se representa con un nodo raiz xml ",Object(r.b)("inlineCode",{parentName:"p"},"<Invoice>"),", cuya especificaci\xf3n podemos encontrarla ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.datypic.com/sc/ubl21/t-ns39_InvoiceType.html"}),"aqu\xed"),". "),Object(r.b)("h2",{id:"datos-de-la-factura"},"Datos de la Factura"),Object(r.b)("p",null,"Utilizaremos un ejemplo b\xe1sico para elaborar esta primera factura."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Factura")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Campo"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Valor"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Numero"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"F001-1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fecha de Emisi\xf3n"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"21/07/2020")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Moneda"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"PEN")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Emisor RUC"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"20123456789")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Receptor RUC"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"20603343710")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Operaciones Gravadas"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"S/ 100.00")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Valor Venta"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"S/ 100.00")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IGV"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"S/ 18.00")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Importe Total"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"S/ 118.00")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Detalle"),"    "),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Campo"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Valor"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Codigo"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"P001")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Descripc\xedon"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"Tijeraas")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unidad de Medida"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"Unidad")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cantidad"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Precio"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"S/ 50.00")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Valor venta"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"S/ 100.00")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tipo de afectaci\xf3n IGV"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"Gravado, oneroso")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IGV"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"S/ 18.00")))),Object(r.b)("h2",{id:"xml"},"XML"),Object(r.b)("p",null,"Con los datos de arriba esta ser\xeda la representaci\xf3n en XML."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8"?>\n<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"\nxmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"\nxmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"\nxmlns:ds="http://www.w3.org/2000/09/xmldsig#"\nxmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2">\n  <ext:UBLExtensions>\n    <ext:UBLExtension>\n      <ext:ExtensionContent>\n      \x3c!-- Aqui ira la firma digital --\x3e\n      </ext:ExtensionContent>\n    </ext:UBLExtension>\n  </ext:UBLExtensions>\n  \x3c!-- La versi\xf3n de UBL --\x3e\n  <cbc:UBLVersionID>2.1</cbc:UBLVersionID>\n  \x3c!-- La versi\xf3n de la estructura del documento, SUNAT define 2.0 como valor constante para UBL 2.1 --\x3e\n  <cbc:CustomizationID>2.0</cbc:CustomizationID>\n  \x3c!-- El numero de la factura --\x3e\n  <cbc:ID>F001-1</cbc:ID>\n  \x3c!-- La fecha de emisi\xf3n --\x3e\n  <cbc:IssueDate>2020-07-21</cbc:IssueDate>\n  \x3c!-- El tipo de comprobante: 01 (Factura - Cat\xe1logo 01)\n       Tipo de operaci\xf3n: @listID = 0101 (Venta interna - Cat\xe1logo 51)\n  --\x3e\n  <cbc:InvoiceTypeCode\n        listID="0101"\n        listAgencyName="PE:SUNAT"\n        listName="Tipo de Documento"\n        listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo01">01</cbc:InvoiceTypeCode>\n  \x3c!-- Leyendas: @languageLocaleID = 1000 (Importe total en letras - Cat\xe1logo 52) --\x3e\n  <cbc:Note languageLocaleID="1000"><![CDATA[CIENTO DIECIOCHO CON 00 /100 SOLES]]></cbc:Note>\n  \x3c!-- La moneda del comprobante --\x3e\n  <cbc:DocumentCurrencyCode\n        listID="ISO 4217 Alpha"\n        listName="Currency"\n        listAgencyName="United Nations Economic Commission for Europe">PEN</cbc:DocumentCurrencyCode>\n  <cac:Signature>\n    \x3c!-- Ruc del firmante --\x3e\n    <cbc:ID>20123456789</cbc:ID>\n    <cac:SignatoryParty>\n      <cac:PartyIdentification>\n      \x3c!-- Ruc del firmante --\x3e\n        <cbc:ID>20123456789</cbc:ID>\n      </cac:PartyIdentification>\n      <cac:PartyName>\n        \x3c!-- Nombre del firmante --\x3e\n        <cbc:Name><![CDATA[MI EMPRESA S.A.C]]></cbc:Name>\n      </cac:PartyName>\n    </cac:SignatoryParty>\n    <cac:DigitalSignatureAttachment>\n      <cac:ExternalReference>\n        \x3c!-- Referencia del firmante, nada expec\xedfico que SUNAT exija. --\x3e\n        <cbc:URI>#EMPRESA-SIGN</cbc:URI>\n      </cac:ExternalReference>\n    </cac:DigitalSignatureAttachment>\n  </cac:Signature>\n  \x3c!-- Datos del emisor --\x3e\n  <cac:AccountingSupplierParty>\n    <cac:Party>\n      <cac:PartyIdentification>\n        \x3c!-- Ruc del Emisor --\x3e\n        \x3c!-- Tipo documento: @schemeID = 6 (RUC - Cat\xe1logo 06) --\x3e\n        <cbc:ID\n            schemeID="6"\n            schemeName="Documento de Identidad"\n            schemeAgencyName="PE:SUNAT"\n            schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06">20123456789</cbc:ID>\n      </cac:PartyIdentification>\n      <cac:PartyName>\n        \x3c!-- Nombre comercial del Emisor --\x3e\n        <cbc:Name><![CDATA[MI EMPRESA]]></cbc:Name>\n      </cac:PartyName>\n      <cac:PartyLegalEntity>\n        \x3c!-- Razon social del Emisor --\x3e\n        <cbc:RegistrationName><![CDATA[MI EMPRESA S.A.C]]></cbc:RegistrationName>\n        \x3c!-- Datos de la direcci\xf3n del Emisor --\x3e\n        <cac:RegistrationAddress>\n          \x3c!-- Codigo de Ubigeo --\x3e\n          <cbc:ID schemeName="Ubigeos"\n                  schemeAgencyName="PE:INEI">150101</cbc:ID>\n          \x3c!-- C\xf3digo asignado por la SUNAT para el establecimiento anexo declarado en el RUC, 0000 si no tiene --\x3e\n          <cbc:AddressTypeCode \n            listName="Establecimientos anexos"\n            listAgencyName="PE:SUNAT">0000</cbc:AddressTypeCode>\n          \x3c!-- Urbanizaci\xf3n --\x3e\n          <cbc:CitySubdivisionName>CASUARINAS</cbc:CitySubdivisionName>\n          \x3c!-- Provincia --\x3e\n          <cbc:CityName>LIMA</cbc:CityName>\n          \x3c!-- Departamento --\x3e\n          <cbc:CountrySubentity>LIMA</cbc:CountrySubentity>\n          \x3c!-- Distrito --\x3e\n          <cbc:District>LIMA</cbc:District>\n          <cac:AddressLine>\n            \x3c!-- Direcci\xf3n completa detallada --\x3e\n            <cbc:Line><![CDATA[Av. Park 211]]></cbc:Line>\n          </cac:AddressLine>\n          <cac:Country>\n            \x3c!-- Codigo del pais --\x3e\n            <cbc:IdentificationCode\n                listID="ISO 3166-1"\n                listName="Country"\n                listAgencyName="United Nations Economic Commission for Europe">PE</cbc:IdentificationCode>\n          </cac:Country>\n        </cac:RegistrationAddress>\n      </cac:PartyLegalEntity>\n    </cac:Party>\n  </cac:AccountingSupplierParty>\n  \x3c!-- Datos del receptor --\x3e\n  <cac:AccountingCustomerParty>\n    <cac:Party>\n      <cac:PartyIdentification>\n        \x3c!-- Documento del receptor --\x3e\n        \x3c!-- Tipo documento: @schemeID = 6 (RUC - Cat\xe1logo 06) --\x3e\n        <cbc:ID \n            schemeID="6"\n            schemeName="Documento de Identidad"\n            schemeAgencyName="PE:SUNAT"\n            schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06">20603343710</cbc:ID>\n      </cac:PartyIdentification>\n      <cac:PartyLegalEntity>\n        \x3c!-- Razon social del receptor --\x3e\n        <cbc:RegistrationName><![CDATA[NEGOCIOS S.A.C.]]></cbc:RegistrationName>\n        <cac:RegistrationAddress>\n          <cbc:ID>150101</cbc:ID>\n          <cac:AddressLine>\n            \x3c!-- Direcci\xf3n completa del receptor --\x3e\n            <cbc:Line><![CDATA[AV. OLIVAR NRO. 425 ]]></cbc:Line>\n          </cac:AddressLine>\n          <cac:Country>\n            \x3c!-- Codigo del pais --\x3e\n            <cbc:IdentificationCode\n                listID="ISO 3166-1"\n                listName="Country"\n                listAgencyName="United Nations Economic Commission for Europe">PE</cbc:IdentificationCode>\n          </cac:Country>\n        </cac:RegistrationAddress>\n      </cac:PartyLegalEntity>\n    </cac:Party>\n  </cac:AccountingCustomerParty>\n  <cac:TaxTotal>\n    \x3c!-- Total impuestos --\x3e\n    <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>\n    \x3c!-- Sumatoria de los detalle por cada Operaciones Gravadas/Inafectas/Exoneradas --\x3e\n    <cac:TaxSubtotal>\n      \x3c!-- Sum. valor venta (gravadas) --\x3e\n      <cbc:TaxableAmount currencyID="PEN">100.00</cbc:TaxableAmount>\n      \x3c!-- Sum. IGV (gravadas) --\x3e\n      <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>\n      <cac:TaxCategory>\n        <cac:TaxScheme>\n          \x3c!-- Tipo de tributo: 1000 (IGV Impuesto General a las Ventas - Cat\xe1logo 05)  --\x3e\n          <cbc:ID\n                schemeName="Codigo de tributos"\n                schemeAgencyName="PE:SUNAT"\n                schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo05">1000</cbc:ID>\n          <cbc:Name>IGV</cbc:Name>\n          <cbc:TaxTypeCode>VAT</cbc:TaxTypeCode>\n        </cac:TaxScheme>\n      </cac:TaxCategory>\n    </cac:TaxSubtotal>\n  </cac:TaxTotal>\n  <cac:LegalMonetaryTotal>\n    \x3c!-- Total valor venta --\x3e\n    <cbc:LineExtensionAmount currencyID="PEN">100.00</cbc:LineExtensionAmount>\n    \x3c!-- Total precio venta --\x3e\n    <cbc:TaxInclusiveAmount currencyID="PEN">118.00</cbc:TaxInclusiveAmount>\n    \x3c!-- Importe total de la venta --\x3e\n    <cbc:PayableAmount currencyID="PEN">118.00</cbc:PayableAmount>\n  </cac:LegalMonetaryTotal>\n  \x3c!-- Detalles --\x3e\n  <cac:InvoiceLine>\n    \x3c!-- N\xfamero de orden del detalle --\x3e\n    <cbc:ID>1</cbc:ID>\n    \x3c!-- Cantidad del producto/servicio --\x3e\n    \x3c!-- Unidad de medida: @unitCode = NIU (Unidad - Cat\xe1logo 03) --\x3e\n    <cbc:InvoicedQuantity\n        unitCode="NIU"\n        unitCodeListID="UN/ECE rec 20"\n        unitCodeListAgencyName="United Nations Economic Commission for Europe">2</cbc:InvoicedQuantity>\n    \x3c!-- Valor venta --\x3e\n    <cbc:LineExtensionAmount currencyID="PEN">100.00</cbc:LineExtensionAmount>\n    <cac:PricingReference>\n      <cac:AlternativeConditionPrice>\n        \x3c!-- Precio venta unitario --\x3e\n        <cbc:PriceAmount currencyID="PEN">59</cbc:PriceAmount>\n        \x3c!-- Tipo de precio: 01 (Precio unitario con IGV - Cat\xe1logo 16)  --\x3e\n        <cbc:PriceTypeCode\n            listName="Tipo de Precio"\n            listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo16"\n            listAgencyName="PE:SUNAT">01</cbc:PriceTypeCode>\n      </cac:AlternativeConditionPrice>\n    </cac:PricingReference>\n    <cac:TaxTotal>\n      \x3c!-- Total impuesto detalle --\x3e\n      <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>\n      <cac:TaxSubtotal>\n        \x3c!-- Valor base para calcular el igv detalle --\x3e\n        <cbc:TaxableAmount currencyID="PEN">100.00</cbc:TaxableAmount>\n        \x3c!-- IGV --\x3e\n        <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>\n        <cac:TaxCategory>\n          \x3c!-- Tasa de IGV: 18% --\x3e\n          <cbc:Percent>18</cbc:Percent>\n          \x3c!-- Tipo de Afectacion IGV: 10 (Gravado, Operaci\xf3n Onerosa - Cat\xe1logo 07)  --\x3e\n          <cbc:TaxExemptionReasonCode\n                listName="Afectacion del IGV"\n                listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo07"\n                listAgencyName="PE:SUNAT">10</cbc:TaxExemptionReasonCode>\n          <cac:TaxScheme>\n            \x3c!-- Tipo de tributo: 1000 (IGV Impuesto General a las Ventas - Cat\xe1logo 05)  --\x3e\n            <cbc:ID\n                schemeName="Codigo de tributos"\n                schemeAgencyName="PE:SUNAT"\n                schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo05">1000</cbc:ID>\n            <cbc:Name>IGV</cbc:Name>\n            <cbc:TaxTypeCode>VAT</cbc:TaxTypeCode>\n          </cac:TaxScheme>\n        </cac:TaxCategory>\n      </cac:TaxSubtotal>\n    </cac:TaxTotal>\n    <cac:Item>\n      \x3c!-- Descripci\xf3n del producto/servicio --\x3e\n      <cbc:Description><![CDATA[TIJERAS - PRUEBA DE SISTEMAS]]></cbc:Description>\n      <cac:SellersItemIdentification>\n        \x3c!-- Codigo del producto --\x3e\n        <cbc:ID>P001</cbc:ID>\n      </cac:SellersItemIdentification>\n      <cac:CommodityClassification>\n        \x3c!-- Codigo del producto SUNAT (Cat\xe1logo 25)--\x3e\n        <cbc:ItemClassificationCode\n          listID="UNSPSC"\n          listAgencyName="GS1 US"\n          listName="Item Classification">44121618</cbc:ItemClassificationCode>\n      </cac:CommodityClassification>\n    </cac:Item>\n    <cac:Price>\n      \x3c!-- Valor venta unitario --\x3e\n      <cbc:PriceAmount currencyID="PEN">50</cbc:PriceAmount>\n    </cac:Price>\n  </cac:InvoiceLine>\n</Invoice>\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Hay algunos atributos en el XML que no son obligatorios, puedes ver esa versi\xf3n ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://gist.github.com/giansalex/6cab789ed1d9ee838216c3847862a030"}),"aqu\xed"))),Object(r.b)("p",null,"Para saber que etiqueta del ",Object(r.b)("inlineCode",{parentName:"p"},"XML")," le corresponde a cada dato, tienes que dirigirte a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://cpe.sunat.gob.pe/node/88#item-1"}),"Reglas de Validaci\xf3n SUNAT"),", alli deber\xe1s descargar la versi\xf3n m\xe1s reciente, encontrar\xe1s en ese archivo Excel todos los comprobantes electr\xf3nicos disponibles, los datos que SUNAT espera recibir y en que etiquetas especificas del XML.  "),Object(r.b)("h2",{id:"cat\xe1logos"},"Cat\xe1logos"),Object(r.b)("p",null,"Como habr\xe1s notado, en el ejemplo hay varias indicaciones sobre ",Object(r.b)("inlineCode",{parentName:"p"},"Cat\xe1logos"),", existen varias listas de c\xf3digos que representan alg\xfan tipo de informaci\xf3n, por ejemplo:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Tipos de Comprobantes \u2b05\ufe0f ",Object(r.b)("inlineCode",{parentName:"li"},"Catalogo 01"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"01")," - Factura"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"03")," - Boleta"),Object(r.b)("li",{parentName:"ul"},"etc"))),Object(r.b)("li",{parentName:"ul"},"Tipos de Documento de Identidad \u2b05\ufe0f ",Object(r.b)("inlineCode",{parentName:"li"},"Catalogo 06"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"0")," - No domiciliado"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"1")," - DNI"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"6")," - RUC"),Object(r.b)("li",{parentName:"ul"},"etc"))),Object(r.b)("li",{parentName:"ul"},"etc")),Object(r.b)("p",null,"Para obtener las listas completas de los cat\xe1logos, puedes encontrarlo en el excel de ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://cpe.sunat.gob.pe/node/88#item-1"}),"Reglas de validaciones de SUNAT"),"."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Github")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Tambi\xe9n puedes encontrar esta lista de catalogos en diferentes formatos ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://eliutimana.github.io/SunatCatalogos/"}),"aqu\xed"),".",Object(r.b)("br",{parentName:"p"}),"\n","\ud83d\udcd6 ",Object(r.b)("em",{parentName:"p"},"Colaboraci\xf3n de ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/eliutimana/"}),"@eliutimana"))))))}s.isMDXComponent=!0},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var l=c.a.createContext({}),s=function(e){var t=c.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),m=s(a),p=n,u=m["".concat(o,".").concat(p)]||m[p]||d[p]||r;return a?c.a.createElement(u,i(i({ref:t},l),{},{components:a})):c.a.createElement(u,i({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=p;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<r;l++)o[l]=a[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);