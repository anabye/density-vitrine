import{a as xt}from"./chunk-IFDAJLOA.js";import{a as at,b as rt}from"./chunk-XJQYGMIS.js";import{a as re,b as be,c as he,d as M,e as ne,f as oe,h as St}from"./chunk-Z5KJKBIY.js";import"./chunk-CUUHEJH7.js";import"./chunk-YFFZCOO4.js";import{a as bt}from"./chunk-ZR6TW4Y4.js";import{$ as p,$c as Pe,Ac as ye,Ae as te,Bd as P,Bf as Ae,Cf as xe,Da as x,Db as S,Ea as de,Eb as b,Ee as we,Fb as h,Gc as Ye,Hf as ie,Ia as F,Jb as Be,Jf as Et,Ka as Ge,Kb as ee,La as Ne,Mb as ge,Md as Te,Na as s,Nb as He,Nc as et,Pc as R,Qd as U,Rc as Q,Rd as L,Sc as pe,Tc as B,U as je,Ua as ve,Ub as We,Uc as tt,Uf as X,V as le,Vb as Ue,Vc as f,Wc as Z,X as ze,Xc as ce,Xd as dt,Ya as i,Yd as H,Za as t,Zc as it,_a as o,_b as K,_c as Ce,a as V,aa as c,ag as Y,b as O,bg as j,cb as I,cc as Ke,cd as nt,dd as ot,eg as Se,ff as De,gf as pt,hg as ke,ib as g,ja as J,jb as u,kb as $,kc as Je,lb as y,lc as $e,mc as se,me as mt,pa as Oe,pe as fe,qb as w,qe as st,rb as D,re as v,sa as m,sb as A,sf as Ee,tc as Ze,vd as lt,vf as ct,wb as W,wf as ut,xa as G,xb as e,xc as Xe,xd as Fe,yb as me,zb as Qe,ze as ue}from"./chunk-UHWQDKUJ.js";var ei=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","enums-before",""]],[["","enums-after",""]],[["","templates-before",""]],[["","templates-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],ti=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[enums-before]","[enums-after]","[templates-before]","[templates-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],ht=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let C=E.querySelector(".po-tab-button-label");C&&C?.textContent?.trim().toLowerCase()===a&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(G(J))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-grid"]],viewQuery:function(r,n){if(r&1&&(w(j,5),w(L,5)),r&2){let l;D(l=A())&&(n.tabs=l.first),D(l=A())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:ti,decls:6351,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","Function"],[1,"language-html"],["pan","",1,"docs-api-property-type","Array<ThfTableAction>"],["href","/guides/icons"],[1,"language-typescript"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<ThfAggregateDescriptor>"],["p-type","success","p-value","since 19.19.0"],["pan","",1,"docs-api-property-type","Array<ThfGridColumn>"],[1,"docs-api-deprecated-marker"],["p-type","success","p-value","since 19.8.0"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDropdownAction>"],["pan","",1,"docs-api-property-type","{","[key:","string]:","TemplateRef<any>;","}"],["pan","",1,"docs-api-property-type","ThfGridEditProperties"],["pan","",1,"docs-api-property-type","Array<PoPageDynamicSearchFilters>"],["pan","",1,"docs-api-property-type","'basic'"],["pan","",1,"docs-api-property-type","'service'"],["pan","",1,"docs-api-property-type","ThfGridRowActions"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","null"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","ThfGridLiterals"],["pan","",1,"docs-api-property-type","(()","=>","ThfGridOptions)"],["pan","",1,"docs-api-property-type","Array<ThfGridOptionPaging>"],[1,"language-json"],["pan","",1,"docs-api-property-type","ThfGridDeleteService"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","Array<ThfGridColumnSort>"],["p-label","M\xE9todos"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],["href","https://tdn.totvs.com/pages/releaseview.action?pageId=871520382"],["pan","",1,"docs-api-property-type","{","key:","value","}"],["p-label","Interfaces"],["p-label","ThfTableAction"],["href","https://po-ui.io/icons"],["p-label","ThfAggregateDescriptor"],["pan","",1,"docs-api-property-type","'sum'"],["pan","",1,"docs-api-property-type","'average'"],["pan","",1,"docs-api-property-type","'count'"],["pan","",1,"docs-api-property-type","'min'"],["pan","",1,"docs-api-property-type","'max'"],["p-label","ThfGridColumnSort"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["p-label","ThfGridColumn"],["pan","",1,"docs-api-property-type","PoTableBoolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","PoTableDetail"],["pan","",1,"docs-api-property-type","CustomEditProperties"],["href","https://angular.dev/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnIcon>"],["href","documentation/po-table#tableColumnIcon"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["href","https://po-ui.io/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoTableSubtitleColumn>"],["href","/documentation/po-table-cell-template"],["href","/documentation/po-table-column-template"],["p-label","CustomEditProperties"],["href","https://po-ui.io/documentation/po-dynamic-form"],["pan","",1,"docs-api-property-type","'input'"],["pan","",1,"docs-api-property-type","'number'"],["pan","",1,"docs-api-property-type","'select'"],["pan","",1,"docs-api-property-type","'datepicker'"],["pan","",1,"docs-api-property-type","'switch'"],["pan","",1,"docs-api-property-type","'combo'"],["pan","",1,"docs-api-property-type","'multiselect'"],["pan","",1,"docs-api-property-type","'decimal'"],["pan","",1,"docs-api-property-type","'checkbox'"],["pan","",1,"docs-api-property-type","'lookup'"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["pan","",1,"docs-api-property-type","((rowData:","any,","column?:","ThfGridColumn)","=>","boolean)"],["pan","",1,"docs-api-property-type","((item:","any)","=>","string)"],["pan","",1,"docs-api-property-type","Array<ThfLookupFilterSearchSelect>"],["pan","",1,"docs-api-property-type","Array<ThfLookupKeysLabel>"],["pan","",1,"docs-api-property-type","ThfLookupGridProperties"],["pan","",1,"docs-api-property-type","(value:","any)","=>","void"],["pan","",1,"docs-api-property-type","(model:","any)","=>","void"],["pan","",1,"docs-api-property-type","(error:","HttpErrorResponse)","=>","void"],["pan","",1,"docs-api-property-type","(selection:","any"],["pan","",1,"docs-api-property-type","Array<any>)","=>","void"],["pan","",1,"docs-api-property-type","'sm'"],["pan","",1,"docs-api-property-type","'md'"],["pan","",1,"docs-api-property-type","'lg'"],["pan","",1,"docs-api-property-type","'xl'"],["pan","",1,"docs-api-property-type","'auto'"],["p-label","ThfGridDeleteService"],["p-label","ThfGridEditProperties"],["pan","",1,"docs-api-property-type","(param:","any)","=>","FormGroup"],["pan","",1,"docs-api-property-type","(data:","any,","columnProperty:","string)","=>","FormGroup"],["p-label","ThfGridLiterals"],["p-label","ThfGridOptionPaging"],["p-label","ThfGridOptions"],["p-label","ThfGridRowActions"],["pan","",1,"docs-api-property-type","(param:","any,","mode:","'edit'"],["pan","",1,"docs-api-property-type","'include')","=>","FormGroup"],["pan","",1,"docs-api-property-type","Observable<FormGroup>"],["pan","",1,"docs-api-property-type","(row:","any)","=>","void"],["pan","",1,"docs-api-property-type","(row:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","Observable<boolean>"],["pan","",1,"docs-api-property-type","(updatedRow:","any,","originalRow:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","(updatedRows:","Array<any>)","=>","void"],["pan","",1,"docs-api-property-type","Array<ThfGridEditModeActionType>"],["pan","",1,"docs-api-property-type","(updatedField:","any,","columnProperty:","string)","=>","boolean"],["p-label","Enums"],["p-label","ThfColumnSpacing"],["p-label","ThfGridEditModeActionType"],["p-label","Templates"],["p-label","ThfGridCellTemplateDirective"],["p-label","ThfGridColumnTemplateDirective"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&($(ei),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),y(4),t(),i(5,"po-tab",4),y(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfGridComponent"),t()(),i(16,"div",10)(17,"p"),e(18,`O grid foi criado para que voc\xEA tenha um controle de alto desempenho, oferecendo uma performance extremamente r\xE1pida,
integrando-se perfeitamente ao seu aplicativo e sendo altamente personaliz\xE1vel.`),t(),i(19,"p"),e(20,"\xC9 possivel realizar a importa\xE7\xE3o individual do "),i(21,"code"),e(22,"THF-Grid"),t(),e(23,` no seu m\xF3dulo ou componente(caso esteja utilizando standalone):
`),i(24,"code"),e(25,"import { ThfGridComponent } from '@totvs/thf-components';"),t()()(),i(26,"div",11)(27,"h4",12),e(28,"Seletor"),t(),i(29,"pre",13),e(30,`<thf-grid
  t-action-delete="boolean"
  t-action-edit="Function"
  t-action-excel="boolean"
  t-action-pdf="boolean"
  t-actions-right="boolean"
  t-actions="Array<ThfTableAction>"
  t-actions-filter="boolean"
  (t-delete-items)="EventEmitter"
  t-aggregates="Array<ThfAggregateDescriptor>"
  t-allow-batch-delete="boolean"
  t-auto-size="boolean"
  t-auto-size-on-scroll="boolean"
  (t-change-fixed-columns)="EventEmitter"
  (t-change-options-column-manager)="EventEmitter"
  (t-change-visible-columns)="EventEmitter"
  (t-changed-density)="EventEmitter"
  (t-changed-items)="EventEmitter"
  (t-restore-column-manager)="EventEmitter"
  t-columns="Array<ThfGridColumn>"
  (t-columns-selected)="EventEmitter"
  t-components-size="string"
  t-custom-actions="Array<PoDropdownAction>"
  (t-custom-filter)="EventEmitter"
  t-custom-templates="{
    [key: string]: TemplateRef<any>;
}"
  (t-delete-item)="EventEmitter"
  t-disabled-include-button="boolean"
  t-draggable="boolean"
  t-edit-properties="ThfGridEditProperties"
  (t-change-page-size)="EventEmitter"
  t-fields="Array<PoPageDynamicSearchFilters>"
  t-filter-input-mode="'basic' | 'service'"
  t-grid-row-actions="ThfGridRowActions"
  t-group="Array<string>"
  t-groupable="boolean | GroupableSettings"
  t-header-template="TemplateRef<void>"
  t-headline-fixed="boolean"
  t-height="number | string | null"
  t-hide-action-fixed-columns="boolean"
  t-hide-batch-actions="boolean"
  t-hide-columns-manager="boolean"
  t-hide-select-all="boolean"
  t-hide-table-search="boolean"
  t-loading="boolean"
  t-items="Array<any>"
  (t-items-after-get)="EventEmitter"
  t-literals="ThfGridLiterals"
  t-max-columns="number"
  t-max-height="number | string | null"
  t-max-resizable-width="number"
  t-min-height="number | string | null"
  t-min-resizable-width="number"
  (t-change-group)="EventEmitter"
  t-load="string | (() => ThfGridOptions)"
  t-options-paging="Array<ThfGridOptionPaging>"
  (t-change-order-column)="EventEmitter"
  t-page-size="number"
  t-page-size-virtual="number"
  t-pageable="boolean"
  t-param-delete-api="string"
  t-resizable="boolean"
  t-row-height="number"
  (t-rows-selected)="EventEmitter"
  t-selectable="boolean"
  t-selectable-entire-line="boolean"
  (t-selected)="EventEmitter"
  (t-all-selected)="EventEmitter"
  t-service-delete-api="string | ThfGridDeleteService"
  t-service-api="string"
  t-show-densification-configuration="boolean"
  t-show-draggable-icon="boolean"
  t-show-footer-aggregates="boolean"
  (t-show-more)="EventEmitter"
  t-show-more-disabled="boolean"
  t-show-more-visible="boolean"
  t-single-select="boolean"
  t-sort="Array<ThfGridColumnSort>"
  (t-change-sort-column)="EventEmitter"
  t-sortable="boolean"
  t-spacing="string"
  t-striped="boolean"
  t-text-wrap="boolean"
  (t-unselected)="EventEmitter"
  (t-all-unselected)="EventEmitter"
  t-virtual-columns="boolean"
  t-virtual-scroll="boolean" >
</thf-grid>
`),t()()(),i(31,"po-accordion-item",14)(32,"h4",15),e(33,"Propriedades"),t(),i(34,"table",16)(35,"tr",17)(36,"th",18),e(37,"Nome"),t(),i(38,"th",18),e(39,"Tipo"),t(),i(40,"th",18),e(41,"Padr\xE3o"),t(),i(42,"th",18),e(43,"Descri\xE7\xE3o"),t()(),i(44,"tr",19)(45,"td",20)(46,"div",21)(47,"span",22),e(48,"t-action-delete"),o(49,"br"),t()()(),i(50,"td",23)(51,"code",24),e(52,"boolean"),t()(),i(53,"td",25)(54,"p")(55,"code"),e(56,"false"),t()()(),i(57,"td",26)(58,"em")(59,"strong"),e(60,"(opcional)"),t()(),i(61,"p"),e(62,"Exibe o bot\xE3o de Excluir. Requer que a propriedade "),i(63,"strong"),e(64,"t-selectable"),t(),e(65," esteja habilitada."),t()()(),i(66,"tr",19)(67,"td",20)(68,"div",21)(69,"span",22),e(70,"t-action-edit"),o(71,"br"),t()()(),i(72,"td",23)(73,"code",27),e(74,"Function"),t()(),i(75,"td",25),e(76,"-"),t(),i(77,"td",26)(78,"em")(79,"strong"),e(80,"(opcional)"),t()(),i(81,"p"),e(82,`Exibe o bot\xE3o de Editar e executa a fun\xE7\xE3o definida ao clicar.
Requer que a propriedade `),i(83,"strong"),e(84,"t-selectable"),t(),e(85," esteja habilitada."),t(),i(86,"pre")(87,"code",28),e(88,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-action-edit]="myFunction.bind(this)"
 [t-selectable]-true
></thf-grid>`),t()()()(),i(89,"tr",19)(90,"td",20)(91,"div",21)(92,"span",22),e(93,"t-action-excel"),o(94,"br"),t()()(),i(95,"td",23)(96,"code",24),e(97,"boolean"),t()(),i(98,"td",25)(99,"p")(100,"code"),e(101,"false"),t()()(),i(102,"td",26)(103,"em")(104,"strong"),e(105,"(opcional)"),t()(),i(106,"p"),e(107,"Exibe o bot\xE3o de Exportar. Requer que a propriedade "),i(108,"strong"),e(109,"t-selectable"),t(),e(110,` esteja habilitada.
Permite realizar o download dos dados do grid no formato `),i(111,"code"),e(112,".xlsx"),t(),e(113,"."),t()()(),i(114,"tr",19)(115,"td",20)(116,"div",21)(117,"span",22),e(118,"t-action-pdf"),o(119,"br"),t()()(),i(120,"td",23)(121,"code",24),e(122,"boolean"),t()(),i(123,"td",25)(124,"p")(125,"code"),e(126,"false"),t()()(),i(127,"td",26)(128,"em")(129,"strong"),e(130,"(opcional)"),t()(),i(131,"p"),e(132,"Exibe o bot\xE3o de Download. Requer que a propriedade "),i(133,"strong"),e(134,"t-selectable"),t(),e(135,` esteja habilitada.
Permite realizar o download dos dados do grid no formato `),i(136,"code"),e(137,"PDF"),t(),e(138,"."),t(),i(139,"blockquote")(140,"p"),e(141,"Todos os dados exportados para PDF utilizar\xE3o a fonte 'Lato', garantindo compatibilidade com a tabela de caracteres ASCII estendida."),t()()()(),i(142,"tr",19)(143,"td",20)(144,"div",21)(145,"span",22),e(146," t-actions-right"),o(147,"br"),t()()(),i(148,"td",23)(149,"code",24),e(150,"boolean"),t()(),i(151,"td",25)(152,"p")(153,"code"),e(154,"false"),t()()(),i(155,"td",26)(156,"em")(157,"strong"),e(158,"(opcional)"),t()(),i(159,"p"),e(160,"Posiciona a coluna de a\xE7\xF5es ("),i(161,"strong"),e(162,"t-actions"),t(),e(163,") \xE0 direita."),t()()(),i(164,"tr",19)(165,"td",20)(166,"div",21)(167,"span",22),e(168,"t-actions"),o(169,"br"),t()()(),i(170,"td",23)(171,"code",29),e(172,"Array<ThfTableAction>"),t()(),i(173,"td",25),e(174,"-"),t(),i(175,"td",26)(176,"em")(177,"strong"),e(178,"(opcional)"),t()(),i(179,"p"),e(180,"Permite definir uma lista de a\xE7\xF5es que implementam a interface "),i(181,"strong"),e(182,"ThfTableAction"),t(),e(183,`, adicionando uma coluna
ao grid. Se houver apenas uma a\xE7\xE3o v\xE1lida, ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrupar m\xFAltiplas a\xE7\xF5es e exibe o \xEDcone `),i(184,"a",30)(185,"strong"),e(186,"an an-caret-circle-right"),t()(),e(187,`. Ao
pressionar o \xEDcone, todas as a\xE7\xF5es ser\xE3o listadas.`),t(),i(188,"p")(189,"strong"),e(190,"A coluna n\xE3o ser\xE1 exibida se:"),t()(),i(191,"ul")(192,"li"),e(193,"a lista contiver valores inv\xE1lidos ou indefinidos;"),t(),i(194,"li"),e(195,"houver apenas uma a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),t()(),i(196,"pre")(197,"code",28),e(198,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-actions]="actionsGrid"
></thf-grid>`),t()(),i(199,"pre")(200,"code",31),e(201,`actionsGrid: Array<ThfTableAction> = [
 {
   label: '',
   action: (e: any) => {
     this.poNotification.information(\`\${e.id} - \${e.name} \`);
   },
   icon: 'ICON_MENU_OPEN',
   fixed: true
 },
];

constructor(private poNotification: PoNotificationService) {}`),t()()()(),i(202,"tr",19)(203,"td",20)(204,"div",21)(205,"span",22),e(206,"t-actions-filter"),o(207,"br"),t()()(),i(208,"td",23)(209,"code",24),e(210,"boolean"),t()(),i(211,"td",25)(212,"p")(213,"code"),e(214,"true"),t()()(),i(215,"td",26)(216,"em")(217,"strong"),e(218,"(opcional)"),t()(),i(219,"p"),e(220,`Exibe o bot\xE3o de Filtros.
Habilita um modal com op\xE7\xF5es adicionais de filtro, caso o output `),i(221,"strong"),e(222,"t-custom-filter"),t(),e(223," n\xE3o esteja em uso."),t()()(),i(224,"tr",19)(225,"td",20)(226,"div",32)(227,"span",33),e(228," (t-delete-items)"),o(229,"br"),t()()(),i(230,"td",23)(231,"code",34),e(232,"EventEmitter"),t()(),i(233,"td",25),e(234,"-"),t(),i(235,"td",26)(236,"em")(237,"strong"),e(238,"(opcional)"),t()(),i(239,"p"),e(240,`Evento disparado ap\xF3s o m\xE9todo de exclus\xE3o ser finalizado.
Retorna os itens que permanecem dispon\xEDveis.`),t()()(),i(241,"tr",19)(242,"td",20)(243,"div",21)(244,"span",22),e(245," t-aggregates"),o(246,"br"),t()()(),i(247,"td",23)(248,"code",35),e(249,"Array<ThfAggregateDescriptor>"),t()(),i(250,"td",25)(251,"p")(252,"code"),e(253,"[]"),t()()(),i(254,"td",26)(255,"em")(256,"strong"),e(257,"(opcional)"),t()(),i(258,"p"),e(259,`Possibilita apresentar totalizadores de uma ou mais colunas ao utilizar o recurso de agrupamento de colunas.
Esta propriedade recebe um array com a lista de objetos com formato da interface `),i(260,"code"),e(261,"ThfAggregateDescriptor"),t(),e(262,"."),t()()(),i(263,"tr",19)(264,"td",20)(265,"div",21)(266,"span",22),e(267," t-allow-batch-delete"),o(268,"br"),t(),o(269,"po-tag",36),t()(),i(270,"td",23)(271,"code",24),e(272,"boolean"),t()(),i(273,"td",25)(274,"p")(275,"code"),e(276,"false"),t()()(),i(277,"td",26)(278,"em")(279,"strong"),e(280,"(opcional)"),t()(),i(281,"p"),e(282,`Habilita a exclus\xE3o em lote dos itens selecionados na grid. Quando ativado, permite que m\xFAltiplos itens sejam exclu\xEDdos de uma vez
ao utilizar `),i(283,"strong"),e(284,"t-service-api"),t(),e(285," e/ou "),i(286,"strong"),e(287,"t-service-delete-api"),t(),e(288,", desde que o servi\xE7o implemente o m\xE9todo "),i(289,"code"),e(290,"deleteBatchItems"),t(),e(291," da interface "),i(292,"code"),e(293,"ThfGridDeleteService"),t(),e(294,"."),t()()(),i(295,"tr",19)(296,"td",20)(297,"div",21)(298,"span",22),e(299,"t-auto-size"),o(300,"br"),t()()(),i(301,"td",23)(302,"code",24),e(303,"boolean"),t()(),i(304,"td",25)(305,"p")(306,"code"),e(307,"false"),t()()(),i(308,"td",26)(309,"em")(310,"strong"),e(311,"(opcional)"),t()(),i(312,"p"),e(313,`Ajusta automaticamente a largura das colunas vis\xEDveis no grid. O ajuste autom\xE1tico \xE9 realizado durante a
inicializa\xE7\xE3o. Requer que a propriedade `),i(314,"strong"),e(315,"t-resizable"),t(),e(316," esteja habilitada."),t(),i(317,"blockquote")(318,"p"),e(319,`Apesar de atribuir largura \xE0s colunas do grid, \xE9 importante ressaltar que o componente recalcula
as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis no grid, podendo alterar as
dimens\xF5es passadas proporcionalmente.
Esta propriedade \xE9 incompat\xEDvel quando t-grid-row-actions est\xE1 habilitado.`),t()()()(),i(320,"tr",19)(321,"td",20)(322,"div",21)(323,"span",22),e(324,"t-auto-size-on-scroll"),o(325,"br"),t()()(),i(326,"td",23)(327,"code",24),e(328,"boolean"),t()(),i(329,"td",25)(330,"p")(331,"code"),e(332,"false"),t()()(),i(333,"td",26)(334,"em")(335,"strong"),e(336,"(opcional)"),t()(),i(337,"p"),e(338,"Ativa o redimensionamento autom\xE1tico das colunas durante a rolagem virtual."),t(),i(339,"p"),e(340,`Quando habilitado, a grid recalcula automaticamente as larguras das colunas
conforme novos dados s\xE3o carregados durante a rolagem, garantindo que o
conte\xFAdo seja exibido corretamente sem truncamento indesejado.`),t(),i(341,"p"),e(342,`O redimensionamento ocorre a cada mudan\xE7a de p\xE1gina virtual, controlada pela
propriedade `),i(343,"code"),e(344,"t-page-size-virtual"),t(),e(345," (valor padr\xE3o: 60 itens por p\xE1gina)."),t(),i(346,"blockquote")(347,"p")(348,"strong"),e(349,"Pr\xE9-requisitos"),t(),e(350,": Requer que as propriedades "),i(351,"code"),e(352,"t-auto-size"),t(),e(353,", "),i(354,"code"),e(355,"t-resizable"),t(),e(356,`
e `),i(357,"code"),e(358,"t-virtual-scroll"),t(),e(359," (ou altura fixa via "),i(360,"code"),e(361,"[t-height]"),t(),e(362,") estejam habilitadas."),t()(),i(363,"blockquote")(364,"p")(365,"strong"),e(366,"Incompatibilidade"),t(),e(367,": N\xE3o funciona com "),i(368,"code"),e(369,"t-grid-row-actions"),t(),e(370," habilitado;"),t()(),i(371,"p")(372,"strong"),e(373,"Exemplo de uso:"),t()(),i(374,"pre")(375,"code",28),e(376,`<thf-grid
  ...
  [t-auto-size]="true"
  [t-auto-size-on-scroll]="true"
  [t-resizable]="true"
  [t-virtual-scroll]="true"
/>`),t()()()(),i(377,"tr",19)(378,"td",20)(379,"div",32)(380,"span",33),e(381," (t-change-fixed-columns)"),o(382,"br"),t()()(),i(383,"td",23)(384,"code",34),e(385,"EventEmitter"),t()(),i(386,"td",25),e(387,"-"),t(),i(388,"td",26)(389,"em")(390,"strong"),e(391,"(opcional)"),t()(),i(392,"p"),e(393,`Evento disparado ao fechar o Gerenciar Tabela ap\xF3s alterar as colunas fixas.
Retorna um array de strings com as colunas fixas atualizadas.`),t()()(),i(394,"tr",19)(395,"td",20)(396,"div",32)(397,"span",33),e(398," (t-change-options-column-manager)"),o(399,"br"),t()()(),i(400,"td",23)(401,"code",34),e(402,"EventEmitter"),t()(),i(403,"td",25),e(404,"-"),t(),i(405,"td",26)(406,"em")(407,"strong"),e(408,"(opcional)"),t()(),i(409,"p"),e(410,`Evento disparado ao selecionar a op\xE7\xE3o draggable ou groupable no Gerenciar Tabela.
Retorna um array de strings contendo as a\xE7\xF5es habilitadas.`),t()()(),i(411,"tr",19)(412,"td",20)(413,"div",32)(414,"span",33),e(415," (t-change-visible-columns)"),o(416,"br"),t()()(),i(417,"td",23)(418,"code",34),e(419,"EventEmitter"),t()(),i(420,"td",25),e(421,"-"),t(),i(422,"td",26)(423,"em")(424,"strong"),e(425,"(opcional)"),t()(),i(426,"p"),e(427,`Evento disparado ao fechar o Gerenciar Tabela ap\xF3s alterar as colunas vis\xEDveis.
Retorna um array de strings com as colunas vis\xEDveis atualizadas.`),t()()(),i(428,"tr",19)(429,"td",20)(430,"div",32)(431,"span",33),e(432," (t-changed-density)"),o(433,"br"),t()()(),i(434,"td",23)(435,"code",34),e(436,"EventEmitter"),t()(),i(437,"td",25),e(438,"-"),t(),i(439,"td",26)(440,"em")(441,"strong"),e(442,"(opcional)"),t()(),i(443,"p"),e(444,"Evento disparado ao selecionar o tipo de densidade no Gerenciar Tabela. Retorna a densidade aplicada."),t()()(),i(445,"tr",19)(446,"td",20)(447,"div",32)(448,"span",33),e(449," (t-changed-items)"),o(450,"br"),t()()(),i(451,"td",23)(452,"code",34),e(453,"EventEmitter"),t()(),i(454,"td",25),e(455,"-"),t(),i(456,"td",26)(457,"em")(458,"strong"),e(459,"(opcional)"),t()(),i(460,"p"),e(461,"Evento emitido quando ocorre uma altera\xE7\xE3o em alguma linha da grid."),t()()(),i(462,"tr",19)(463,"td",20)(464,"div",32)(465,"span",33),e(466," (t-restore-column-manager)"),o(467,"br"),t()()(),i(468,"td",23)(469,"code",34),e(470,"EventEmitter"),t()(),i(471,"td",25),e(472,"-"),t(),i(473,"td",26)(474,"em")(475,"strong"),e(476,"(opcional)"),t()(),i(477,"p"),e(478,`Evento disparado quando pressionado o bot\xE3o 'Restaurar padr\xE3o' no Gerenciar Tabela.
Retorna um array de strings com as colunas vis\xEDveis por padr\xE3o.`),t()()(),i(479,"tr",19)(480,"td",20)(481,"div",21)(482,"span",22),e(483,"t-columns"),o(484,"br"),t()()(),i(485,"td",23)(486,"code",37),e(487,"Array<ThfGridColumn>"),t()(),i(488,"td",25),e(489,"-"),t(),i(490,"td",26)(491,"em")(492,"strong"),e(493,"(opcional)"),t()(),i(494,"p"),e(495,"Permite definir e configurar as colunas do grid que implementam a interface "),i(496,"strong"),e(497,"ThfGridColumn"),t(),e(498,"."),t(),i(499,"pre")(500,"code",28),e(501,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-columns]="columns"
></thf-grid>`),t()(),i(502,"pre")(503,"code",31),e(504,`columns: Array<ThfGridColumn> = [
 { property: 'id', visible: false },
 { property: 'name', label: 'Nome' },
}`),t()()()(),i(505,"tr",19)(506,"td",20)(507,"div",32)(508,"span",33),e(509," (t-columns-selected)"),o(510,"br"),t()(),i(511,"div",38),e(512,"Deprecated"),t()(),i(513,"td",23)(514,"code",34),e(515,"EventEmitter"),t()(),i(516,"td",25),e(517,"-"),t(),i(518,"td",26)(519,"p"),e(520,"Retorna um array indicando quais s\xE3o as linhas selecionadas no momento."),t(),i(521,"blockquote")(522,"p")(523,"strong"),e(524,"Nota"),t(),e(525,`: Este evento est\xE1 depreciado e ser\xE1 removido na vers\xE3o 21. Recomendamos
utilizar o evento `),i(526,"code"),e(527,"t-rows-selected"),t(),e(528,", que j\xE1 est\xE1 dispon\xEDvel e oferece a mesma funcionalidade."),t()()()(),i(529,"tr",19)(530,"td",20)(531,"div",21)(532,"span",22),e(533,"t-components-size"),o(534,"br"),t(),o(535,"po-tag",39),t()(),i(536,"td",23)(537,"code",40),e(538,"string"),t()(),i(539,"td",25)(540,"p")(541,"code"),e(542,"medium"),t()()(),i(543,"td",26)(544,"em")(545,"strong"),e(546,"(opcional)"),t()(),i(547,"p"),e(548,"Define o tamanho dos componentes de formul\xE1rio no grid:"),t(),i(549,"ul")(550,"li")(551,"code"),e(552,"small"),t(),e(553,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(554,"li")(555,"code"),e(556,"medium"),t(),e(557,": aplica a medida medium de cada componente."),t()(),i(558,"blockquote")(559,"p"),e(560,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(561,"code"),e(562,"medium"),t(),e(563,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(564,"a",41),e(565,"po-theme"),t(),e(566,"."),t()()()(),i(567,"tr",19)(568,"td",20)(569,"div",21)(570,"span",22),e(571,"t-custom-actions"),o(572,"br"),t()()(),i(573,"td",23)(574,"code",42),e(575,"Array<PoDropdownAction>"),t()(),i(576,"td",25),e(577,"-"),t(),i(578,"td",26)(579,"em")(580,"strong"),e(581,"(opcional)"),t()(),i(582,"p"),e(583,"Permite adicionar a\xE7\xF5es customizadas que implementam a interface "),i(584,"strong"),e(585,"PoDropdownAction"),t(),e(586,`.
Essas a\xE7\xF5es ser\xE3o exibidas no dropdown 'Mais a\xE7\xF5es' ao selecionar um item.
Requer que a propriedade `),i(587,"strong"),e(588,"t-selectable"),t(),e(589," esteja habilitada."),t(),i(590,"pre")(591,"code",28),e(592,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-custom-actions]="customActions"
 [t-selectable]="true"></thf-grid>`),t()(),i(593,"pre")(594,"code",31),e(595,`customActions: Array<PoDropdownAction> = [
 { label: 'Hist\xF3rico', action: this.myAction.bind(this) }];

myAction() {
 window.alert('voce clicou em hist\xF3rico!');
}`),t()()()(),i(596,"tr",19)(597,"td",20)(598,"div",32)(599,"span",33),e(600," (t-custom-filter)"),o(601,"br"),t()()(),i(602,"td",23)(603,"code",34),e(604,"EventEmitter"),t()(),i(605,"td",25),e(606,"-"),t(),i(607,"td",26)(608,"em")(609,"strong"),e(610,"(opcional)"),t()(),i(611,"p"),e(612,"Evento disparado ao clicar no menu Filtros."),t()()(),i(613,"tr",19)(614,"td",20)(615,"div",21)(616,"span",22),e(617,"t-custom-templates"),o(618,"br"),t()()(),i(619,"td",23)(620,"code",43),e(621,`{ [key: string]: TemplateRef<any>;
}`),t()(),i(622,"td",25),e(623,"-"),t(),i(624,"td",26)(625,"em")(626,"strong"),e(627,"(opcional)"),t()(),i(628,"p"),e(629,"Permite a cria\xE7\xE3o de templates customizados para a edi\xE7\xE3o flu\xEDda da grid, como por exemplo:"),t(),i(630,"pre")(631,"code",28),e(632,`// Exemplo de uso:
<thf-grid
 ...
[t-custom-templates]="{ name: customTemplate }"
></thf-grid>
<ng-template #customTemplate let-formControl="formControl">
  <po-input [formControl]="formControl" p-placeholder="CPF" [p-required]="true"></po-input>
</ng-template>`),t()(),i(633,"p"),e(634,`\xC9 obrigat\xF3rio passar o formControl como par\xE2metro do template.
Os eventos de validate, keydown, blur, additional-help e change n\xE3o s\xE3o emitidos com o uso de templates customizados,
sendo necess\xE1rio o controle desses eventos dentro do pr\xF3prio componente.
Caso utilize a propriedade controlValueWithLabel,
\xE9 necess\xE1rio continuar passando no editProperties em columns, em conjunto com fieldLabel, fieldValue e options caso esteja utilizando.
Caso o template n\xE3o seja passado, o componente ser\xE1 renderizado de forma padr\xE3o.
Caso esteja utilizando o componente po-decimal e esteja configurando a propriedade `),i(635,"code"),e(636,"p-decimals-length"),t(),e(637,`, \xE9 necess\xE1rio continuar
enviando via columns em editProperties.`),t(),i(638,"blockquote")(639,"p"),e(640,"Para mais detalhes, consulte o exemplo na aba Overview - Edi\xE7\xE3o flu\xEDda."),t()()()(),i(641,"tr",19)(642,"td",20)(643,"div",32)(644,"span",33),e(645," (t-delete-item)"),o(646,"br"),t()()(),i(647,"td",23)(648,"code",34),e(649,"EventEmitter"),t()(),i(650,"td",25),e(651,"-"),t(),i(652,"td",26)(653,"em")(654,"strong"),e(655,"(opcional)"),t()(),i(656,"p"),e(657,"Evento disparado ao excluir um item. Retorna o item exclu\xEDdo."),t()()(),i(658,"tr",19)(659,"td",20)(660,"div",21)(661,"span",22),e(662,"t-disabled-include-button"),o(663,"br"),t()()(),i(664,"td",23)(665,"code",24),e(666,"boolean"),t()(),i(667,"td",25)(668,"p")(669,"code"),e(670,"false"),t()()(),i(671,"td",26)(672,"em")(673,"strong"),e(674,"(opcional)"),t()(),i(675,"p"),e(676,`Desabilita o bot\xE3o de Incluir. Ao definir como true, o bot\xE3o ser\xE1 desabilitado.
Ideal para cen\xE1rios onde a inclus\xE3o de novas linhas deve ser restrita.`),t()()(),i(677,"tr",19)(678,"td",20)(679,"div",21)(680,"span",22),e(681,"t-draggable"),o(682,"br"),t()()(),i(683,"td",23)(684,"code",24),e(685,"boolean"),t()(),i(686,"td",25)(687,"p")(688,"code"),e(689,"false"),t()()(),i(690,"td",26)(691,"em")(692,"strong"),e(693,"(opcional)"),t()(),i(694,"p"),e(695,"Habilita o Drag and Drop nas colunas."),t()()(),i(696,"tr",19)(697,"td",20)(698,"div",21)(699,"span",22),e(700,"t-edit-properties"),o(701,"br"),t()()(),i(702,"td",23)(703,"code",44),e(704,"ThfGridEditProperties"),t()(),i(705,"td",25),e(706,"-"),t(),i(707,"td",26)(708,"em")(709,"strong"),e(710,"(opcional)"),t()(),i(711,"p"),e(712,"Permite configurar a edi\xE7\xE3o em linha, implementando a interface "),i(713,"strong"),e(714,"ThfGridEditProperties"),t(),e(715,`.
Exemplo de uso na aba Interfaces >> ThfGridEditProperties.`),t(),i(716,"blockquote")(717,"p"),e(718,"Para garantir o correto funcionamento da conclus\xE3o da edi\xE7\xE3o dos dados, \xE9 necess\xE1rio que os dados contenham uma coluna de ID ou que pelo menos uma coluna tenha a propriedade KEY definida como true."),t()()()(),i(719,"tr",19)(720,"td",20)(721,"div",32)(722,"span",33),e(723," (t-change-page-size)"),o(724,"br"),t()()(),i(725,"td",23)(726,"code",34),e(727,"EventEmitter"),t()(),i(728,"td",25),e(729,"-"),t(),i(730,"td",26)(731,"em")(732,"strong"),e(733,"(opcional)"),t()(),i(734,"p"),e(735,"Evento disparado ao alterar a quantidade de itens por p\xE1gina. Retorna um objeto com o page-size atual."),t()()(),i(736,"tr",19)(737,"td",20)(738,"div",21)(739,"span",22),e(740,"t-fields"),o(741,"br"),t()()(),i(742,"td",23)(743,"code",45),e(744,"Array<PoPageDynamicSearchFilters>"),t()(),i(745,"td",25),e(746,"-"),t(),i(747,"td",26)(748,"em")(749,"strong"),e(750,"(opcional)"),t()(),i(751,"p"),e(752,"Permite definir os campos filtr\xE1veis na janela 'Filtros', implementando a interface "),i(753,"strong"),e(754,"PoPageDynamicSearchFilters"),t(),e(755,"."),t(),i(756,"pre")(757,"code",28),e(758,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-fields]="customFields"
></thf-grid>`),t()(),i(759,"pre")(760,"code",31),e(761,"customFields: Array<PoPageDynamicSearchFilters> = [{ property: 'name', required: true, showRequired: true }]"),t()()()(),i(762,"tr",19)(763,"td",20)(764,"div",21)(765,"span",22),e(766,"t-filter-input-mode"),o(767,"br"),t()()(),i(768,"td",23)(769,"code",46),e(770,"'basic' "),t(),i(771,"code",47),e(772," 'service'"),t()(),i(773,"td",25)(774,"p")(775,"code"),e(776,"basic"),t()()(),i(777,"td",26)(778,"em")(779,"strong"),e(780,"(opcional)"),t()(),i(781,"p"),e(782,"Define o modo do filtro para o input de pesquisa."),t()()(),i(783,"tr",19)(784,"td",20)(785,"div",21)(786,"span",22),e(787,"t-grid-row-actions"),o(788,"br"),t()()(),i(789,"td",23)(790,"code",48),e(791,"ThfGridRowActions"),t()(),i(792,"td",25),e(793,"-"),t(),i(794,"td",26)(795,"em")(796,"strong"),e(797,"(opcional)"),t()(),i(798,"p"),e(799,"Configura a edi\xE7\xE3o flu\xEDda, implementando a interface "),i(800,"strong"),e(801,"ThfGridRowActions"),t(),e(802,`.
Permite manipular o comportamento das a\xE7\xF5es de linha, como edi\xE7\xE3o, inclus\xE3o e remo\xE7\xE3o de itens.
\xC9 poss\xEDvel definir fun\xE7\xF5es espec\xEDficas para controlar as a\xE7\xF5es antes e depois das opera\xE7\xF5es.
Fundamental para implementar um fluxo de manipula\xE7\xE3o de dados totalmente personalizado.`),t(),i(803,"blockquote")(804,"p"),e(805,`Ao habilitar t-grid-row-actions a propriedade t-auto-size \xE9 desabilitada para manter a padroniza\xE7\xE3o das larguras das colunas edit\xE1veis.
Quando o t-grid-row-actions \xE9 habilitado, a propriedade t-resizable \xE9 ativada automaticamente.`),t()()()(),i(806,"tr",19)(807,"td",20)(808,"div",21)(809,"span",22),e(810," t-group"),o(811,"br"),t()()(),i(812,"td",23)(813,"code",49),e(814,"Array<string>"),t()(),i(815,"td",25),e(816,"-"),t(),i(817,"td",26)(818,"em")(819,"strong"),e(820,"(opcional)"),t()(),i(821,"p"),e(822,"Lista das colunas que devem iniciar agrupadas. Requer que a propriedade "),i(823,"strong"),e(824,"t-groupable"),t(),e(825," esteja habilitada."),t()()(),i(826,"tr",19)(827,"td",20)(828,"div",21)(829,"span",22),e(830,"t-groupable"),o(831,"br"),t()()(),i(832,"td",23)(833,"code",24),e(834,"boolean "),t(),i(835,"code",50),e(836," GroupableSettings"),t()(),i(837,"td",25)(838,"p")(839,"code"),e(840,"false"),t()()(),i(841,"td",26)(842,"em")(843,"strong"),e(844,"(opcional)"),t()(),i(845,"p"),e(846,"Habilita a ordena\xE7\xE3o por grupo atrav\xE9s da coluna."),t()()(),i(847,"tr",19)(848,"td",20)(849,"div",21)(850,"span",22),e(851,"t-header-template"),o(852,"br"),t()()(),i(853,"td",23)(854,"code",51),e(855,"TemplateRef<void>"),t()(),i(856,"td",25),e(857,"-"),t(),i(858,"td",26)(859,"em")(860,"strong"),e(861,"(opcional)"),t()(),i(862,"p"),e(863,"Container aberto para adicionar conte\xFAdo entre o cabe\xE7alho de a\xE7\xF5es e a lista do grid."),t(),i(864,"pre")(865,"code",28),e(866,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-header-template]="template"
></thf-grid>

<ng-template #template>
 <div style="display: flex; gap: 8px; align-items: center;">
   <po-tag [p-type]="tagTypeDanger" p-value="Remover todos"> </po-tag>
   <po-tag [p-type]="tagTypeInfo" [p-removable]="true" p-value="Brasil"> </po-tag>
   <po-tag [p-type]="tagTypeInfo" [p-removable]="true" p-value="College"> </po-tag>
 </div>
</ng-template>`),t()()()(),i(867,"tr",19)(868,"td",20)(869,"div",21)(870,"span",22),e(871,"t-headline-fixed"),o(872,"br"),t()()(),i(873,"td",23)(874,"code",24),e(875,"boolean"),t()(),i(876,"td",25)(877,"p")(878,"code"),e(879,"false"),t()()(),i(880,"td",26)(881,"em")(882,"strong"),e(883,"(opcional)"),t()(),i(884,"p"),e(885,"Define o cabe\xE7alho do grid como fixo, desde que a altura ("),i(886,"strong"),e(887,"t-height"),t(),e(888,") n\xE3o esteja definida."),t()()(),i(889,"tr",19)(890,"td",20)(891,"div",21)(892,"span",22),e(893,"t-height"),o(894,"br"),t()()(),i(895,"td",23)(896,"code",52),e(897,"number "),t(),i(898,"code",40),e(899," string "),t(),i(900,"code",53),e(901," null"),t()(),i(902,"td",25)(903,"p"),e(904,"100%"),t()(),i(905,"td",26)(906,"em")(907,"strong"),e(908,"(opcional)"),t()(),i(909,"p"),e(910,"Define a altura da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(911,"code"),e(912,'"<n\xFAmero>%"'),t(),e(913,")."),t(),i(914,"ul")(915,"li"),e(916,"Se "),i(917,"strong"),e(918,"n\xE3o informado"),t(),e(919,", a altura da tabela ser\xE1 ajustada automaticamente pela quantidade de itens."),t(),i(920,"li"),e(921,"Caso seja informado um valor inv\xE1lido, ser\xE1 aplicado "),i(922,"strong"),e(923,"100%"),t(),e(924," como padr\xE3o."),t(),i(925,"li"),e(926,"Se "),i(927,"code"),e(928,"t-height"),t(),e(929," for menor que "),i(930,"code"),e(931,"t-min-height"),t(),e(932,", a altura m\xEDnima ser\xE1 aplicada."),t(),i(933,"li"),e(934,"Se "),i(935,"code"),e(936,"t-height"),t(),e(937," for maior que "),i(938,"code"),e(939,"t-max-height"),t(),e(940,", a altura m\xE1xima ser\xE1 aplicada."),t()(),i(941,"blockquote")(942,"p")(943,"strong"),e(944,"Observa\xE7\xE3o:"),t(),e(945," Quando definido, o "),i(946,"strong"),e(947,"virtual scroll"),t(),e(948," ser\xE1 ativado automaticamente. Consulte a documenta\xE7\xE3o da propriedade "),i(949,"strong"),e(950,"t-virtual-scroll"),t(),e(951," para mais detalhes."),t()()()(),i(952,"tr",19)(953,"td",20)(954,"div",21)(955,"span",22),e(956,"t-hide-action-fixed-columns"),o(957,"br"),t()()(),i(958,"td",23)(959,"code",24),e(960,"boolean"),t()(),i(961,"td",25)(962,"p")(963,"code"),e(964,"false"),t()()(),i(965,"td",26)(966,"em")(967,"strong"),e(968,"(opcional)"),t()(),i(969,"p"),e(970,`Controla a visibilidade da op\xE7\xE3o de fixar colunas no Gerenciar Tabela.
Se alguma coluna j\xE1 estiver fixa quando essa propriedade for habilitada,
ela permanecer\xE1 fixa, garantindo que ocultar as op\xE7\xF5es de fixar n\xE3o afete o estado das colunas j\xE1 fixadas.`),t()()(),i(971,"tr",19)(972,"td",20)(973,"div",21)(974,"span",22),e(975," t-hide-batch-actions"),o(976,"br"),t()()(),i(977,"td",23)(978,"code",24),e(979,"boolean"),t()(),i(980,"td",25)(981,"p")(982,"code"),e(983,"false"),t()()(),i(984,"td",26)(985,"em")(986,"strong"),e(987,"(opcional)"),t()(),i(988,"p"),e(989,"Permite ocultar as a\xE7\xF5es em lote, respons\xE1vel por excluir e exibir a quantidade de itens."),t()()(),i(990,"tr",19)(991,"td",20)(992,"div",21)(993,"span",22),e(994,"t-hide-columns-manager"),o(995,"br"),t()()(),i(996,"td",23)(997,"code",24),e(998,"boolean"),t()(),i(999,"td",25)(1e3,"p")(1001,"code"),e(1002,"false"),t()()(),i(1003,"td",26)(1004,"em")(1005,"strong"),e(1006,"(opcional)"),t()(),i(1007,"p"),e(1008,"Permite ocultar o bot\xE3o Gerenciar Tabela."),t()()(),i(1009,"tr",19)(1010,"td",20)(1011,"div",21)(1012,"span",22),e(1013,"t-hide-select-all"),o(1014,"br"),t()()(),i(1015,"td",23)(1016,"code",24),e(1017,"boolean"),t()(),i(1018,"td",25)(1019,"p")(1020,"code"),e(1021,"false"),t()()(),i(1022,"td",26)(1023,"em")(1024,"strong"),e(1025,"(opcional)"),t()(),i(1026,"p"),e(1027,"Permite ocultar o checkbox de selecionar todos os itens."),t()()(),i(1028,"tr",19)(1029,"td",20)(1030,"div",21)(1031,"span",22),e(1032,"t-hide-table-search"),o(1033,"br"),t()()(),i(1034,"td",23)(1035,"code",24),e(1036,"boolean"),t()(),i(1037,"td",25)(1038,"p")(1039,"code"),e(1040,"false"),t()()(),i(1041,"td",26)(1042,"em")(1043,"strong"),e(1044,"(opcional)"),t()(),i(1045,"p"),e(1046,"Permite ocultar o campo de pesquisa."),t()()(),i(1047,"tr",19)(1048,"td",20)(1049,"div",21)(1050,"span",22),e(1051," t-loading"),o(1052,"br"),t()()(),i(1053,"td",23)(1054,"code",24),e(1055,"boolean"),t()(),i(1056,"td",25)(1057,"p")(1058,"code"),e(1059,"false"),t()()(),i(1060,"td",26)(1061,"em")(1062,"strong"),e(1063,"(opcional)"),t()(),i(1064,"p"),e(1065,"Bloqueia a intera\xE7\xE3o do usu\xE1rio com os dados do grid."),t()()(),i(1066,"tr",19)(1067,"td",20)(1068,"div",21)(1069,"span",22),e(1070,"t-items"),o(1071,"br"),t()()(),i(1072,"td",23)(1073,"code",54),e(1074,"Array<any>"),t()(),i(1075,"td",25),e(1076,"-"),t(),i(1077,"td",26)(1078,"em")(1079,"strong"),e(1080,"(opcional)"),t()(),i(1081,"p"),e(1082,`Permite listar os itens no grid.
Cada item do array representa uma linha no grid e deve conter as propriedades
que correspondem \xE0s colunas definidas no grid.`),t(),i(1083,"pre")(1084,"code",28),e(1085,`// Exemplo de uso:
<thf-grid
 [t-items]="[{ name: 'M\xF4nica'}, { name: 'Cebolinha'}]"
></thf-grid>`),t()()()(),i(1086,"tr",19)(1087,"td",20)(1088,"div",32)(1089,"span",33),e(1090," (t-items-after-get)"),o(1091,"br"),t()()(),i(1092,"td",23)(1093,"code",34),e(1094,"EventEmitter"),t()(),i(1095,"td",25),e(1096,"-"),t(),i(1097,"td",26)(1098,"em")(1099,"strong"),e(1100,"(opcional)"),t()(),i(1101,"p"),e(1102,`Evento disparado ap\xF3s finaliza\xE7\xE3o das requisi\xE7\xF5es de GET.
Dispara no GET inicial caso esteja utilizando `),i(1103,"strong"),e(1104,"t-service-api"),t(),e(1105,`.
Dispara tamb\xE9m no GET de filtros caso esteja utilizando a propriedade `),i(1106,"strong"),e(1107,"t-actions-filter"),t(),e(1108,`
ou no GET do input de pesquisa quando a propriedade `),i(1109,"strong"),e(1110,"t-filter-input-mode"),t(),e(1111," estiver como "),i(1112,"code"),e(1113,"service"),t(),e(1114,`.
Retorna os itens atuais da tabela, o total de itens, n\xFAmero da p\xE1gina atual e pageSize.`),t()()(),i(1115,"tr",19)(1116,"td",20)(1117,"div",21)(1118,"span",22),e(1119,"t-literals"),o(1120,"br"),t()()(),i(1121,"td",23)(1122,"code",55),e(1123,"ThfGridLiterals"),t()(),i(1124,"td",25),e(1125,"-"),t(),i(1126,"td",26)(1127,"em")(1128,"strong"),e(1129,"(opcional)"),t()(),i(1130,"p"),e(1131,"Permite definir literais personalizados para o componente, conforme a interface "),i(1132,"strong"),e(1133,"ThfGridLiterals"),t(),e(1134,"."),t(),i(1135,"pre")(1136,"code",28),e(1137,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-literals]="customLiterals"
></thf-grid>`),t()(),i(1138,"pre")(1139,"code",31),e(1140,"customLiterals: ThfGridLiterals = { advancedSearch: 'Mais filtros' };"),t()()()(),i(1141,"tr",19)(1142,"td",20)(1143,"div",21)(1144,"span",22),e(1145,"t-max-columns"),o(1146,"br"),t()()(),i(1147,"td",23)(1148,"code",52),e(1149,"number"),t()(),i(1150,"td",25),e(1151,"-"),t(),i(1152,"td",26)(1153,"em")(1154,"strong"),e(1155,"(opcional)"),t()(),i(1156,"p"),e(1157,`Define a quantidade m\xE1xima de colunas que ser\xE3o exibidas no grid.
Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o desabilitadas e
caso houver mais colunas vis\xEDveis do que o permitido, as excedentes ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),t()()(),i(1158,"tr",19)(1159,"td",20)(1160,"div",21)(1161,"span",22),e(1162," t-max-height"),o(1163,"br"),t()()(),i(1164,"td",23)(1165,"code",52),e(1166,"number "),t(),i(1167,"code",40),e(1168," string "),t(),i(1169,"code",53),e(1170," null"),t()(),i(1171,"td",25),e(1172,"-"),t(),i(1173,"td",26)(1174,"em")(1175,"strong"),e(1176,"(opcional)"),t()(),i(1177,"p"),e(1178,"Define a "),i(1179,"strong"),e(1180,"altura m\xE1xima"),t(),e(1181," da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(1182,"code"),e(1183,'"<n\xFAmero>%"'),t(),e(1184,")."),t(),i(1185,"ul")(1186,"li"),e(1187,"Se "),i(1188,"strong"),e(1189,"n\xE3o informado"),t(),e(1190,", a altura m\xE1xima ser\xE1 definida pela propriedade "),i(1191,"code"),e(1192,"t-height"),t(),e(1193,", se existir."),t(),i(1194,"li"),e(1195,"Caso "),i(1196,"code"),e(1197,"t-height"),t(),e(1198," seja "),i(1199,"strong"),e(1200,"maior"),t(),e(1201," que "),i(1202,"code"),e(1203,"t-max-height"),t(),e(1204,", o grid usar\xE1 "),i(1205,"code"),e(1206,"t-max-height"),t(),e(1207," como limite superior."),t(),i(1208,"li"),e(1209,"Caso o valor passado seja inv\xE1lido, "),i(1210,"strong"),e(1211,"nenhuma altura m\xE1xima ser\xE1 aplicada"),t(),e(1212,"."),t()()()(),i(1213,"tr",19)(1214,"td",20)(1215,"div",21)(1216,"span",22),e(1217,"t-max-resizable-width"),o(1218,"br"),t()()(),i(1219,"td",23)(1220,"code",52),e(1221,"number"),t()(),i(1222,"td",25),e(1223,"-"),t(),i(1224,"td",26)(1225,"em")(1226,"strong"),e(1227,"(opcional)"),t()(),i(1228,"p"),e(1229,"Define a largura m\xE1xima para redimensionar uma coluna. Requer que a propriedade "),i(1230,"strong"),e(1231,"t-resizable"),t(),e(1232," esteja habilitada."),t()()(),i(1233,"tr",19)(1234,"td",20)(1235,"div",21)(1236,"span",22),e(1237," t-min-height"),o(1238,"br"),t()()(),i(1239,"td",23)(1240,"code",52),e(1241,"number "),t(),i(1242,"code",40),e(1243," string "),t(),i(1244,"code",53),e(1245," null"),t()(),i(1246,"td",25),e(1247,"-"),t(),i(1248,"td",26)(1249,"em")(1250,"strong"),e(1251,"(opcional)"),t()(),i(1252,"p"),e(1253,"Define a "),i(1254,"strong"),e(1255,"altura m\xEDnima"),t(),e(1256," da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(1257,"code"),e(1258,'"<n\xFAmero>%"'),t(),e(1259,")."),t(),i(1260,"ul")(1261,"li"),e(1262,"Se "),i(1263,"strong"),e(1264,"n\xE3o informado"),t(),e(1265,", a altura m\xEDnima ser\xE1 definida pela propriedade "),i(1266,"code"),e(1267,"t-height"),t(),e(1268,", se existir."),t(),i(1269,"li"),e(1270,"Caso "),i(1271,"code"),e(1272,"t-height"),t(),e(1273," seja "),i(1274,"strong"),e(1275,"menor"),t(),e(1276," que "),i(1277,"code"),e(1278,"t-min-height"),t(),e(1279,", o grid usar\xE1 "),i(1280,"code"),e(1281,"t-min-height"),t(),e(1282," como limite inferior."),t(),i(1283,"li"),e(1284,"Caso o valor passado seja inv\xE1lido, "),i(1285,"strong"),e(1286,"nenhuma altura m\xEDnima ser\xE1 aplicada"),t(),e(1287,"."),t()()()(),i(1288,"tr",19)(1289,"td",20)(1290,"div",21)(1291,"span",22),e(1292,"t-min-resizable-width"),o(1293,"br"),t()()(),i(1294,"td",23)(1295,"code",52),e(1296,"number"),t()(),i(1297,"td",25)(1298,"p")(1299,"code"),e(1300,"10"),t()()(),i(1301,"td",26)(1302,"em")(1303,"strong"),e(1304,"(opcional)"),t()(),i(1305,"p"),e(1306,"Define a largura m\xEDnima para redimensionar uma coluna. Requer que a propriedade "),i(1307,"strong"),e(1308,"t-resizable"),t(),e(1309," esteja habilitada."),t()()(),i(1310,"tr",19)(1311,"td",20)(1312,"div",32)(1313,"span",33),e(1314," (t-change-group)"),o(1315,"br"),t()()(),i(1316,"td",23)(1317,"code",34),e(1318,"EventEmitter"),t()(),i(1319,"td",25),e(1320,"-"),t(),i(1321,"td",26)(1322,"em")(1323,"strong"),e(1324,"(opcional)"),t()(),i(1325,"p"),e(1326,"Evento disparado quando ocorre o agrupamento no grid. Retorna um array de strings das colunas agrupadas."),t()()(),i(1327,"tr",19)(1328,"td",20)(1329,"div",21)(1330,"span",22),e(1331," t-load"),o(1332,"br"),t()()(),i(1333,"td",23)(1334,"code",40),e(1335,"string "),t(),i(1336,"code",56),e(1337," (() => ThfGridOptions)"),t()(),i(1338,"td",25),e(1339,"-"),t(),i(1340,"td",26)(1341,"em")(1342,"strong"),e(1343,"(opcional)"),t()(),i(1344,"p"),e(1345,`Define dinamicamente as colunas e a\xE7\xF5es do grid ap\xF3s o carregamento inicial dos dados.
Pode ser uma URL que retorna a configura\xE7\xE3o via GET ou uma fun\xE7\xE3o que retorna a configura\xE7\xE3o diretamente.
Quando fun\xE7\xE3o, a propriedade deve implementar a interface `),i(1346,"strong"),e(1347,"ThfGridOptions"),t(),e(1348,"."),t()()(),i(1349,"tr",19)(1350,"td",20)(1351,"div",21)(1352,"span",22),e(1353,"t-options-paging"),o(1354,"br"),t()()(),i(1355,"td",23)(1356,"code",57),e(1357,"Array<ThfGridOptionPaging>"),t()(),i(1358,"td",25),e(1359,"-"),t(),i(1360,"td",26)(1361,"em")(1362,"strong"),e(1363,"(opcional)"),t()(),i(1364,"p"),e(1365,"Define as op\xE7\xF5es de itens por p\xE1gina, implementando a interface "),i(1366,"strong"),e(1367,"ThfGridOptionPaging"),t(),e(1368,`.
Requer que a propriedade `),i(1369,"strong"),e(1370,"t-pageable"),t(),e(1371," esteja habilitada."),t()()(),i(1372,"tr",19)(1373,"td",20)(1374,"div",32)(1375,"span",33),e(1376," (t-change-order-column)"),o(1377,"br"),t()()(),i(1378,"td",23)(1379,"code",34),e(1380,"EventEmitter"),t()(),i(1381,"td",25),e(1382,"-"),t(),i(1383,"td",26)(1384,"em")(1385,"strong"),e(1386,"(opcional)"),t()(),i(1387,"p"),e(1388,`Evento disparado quando a ordem das colunas \xE9 alterada atrav\xE9s do Gerenciar Tabela ou pelo Draggable.
Retorna um array de strings.`),t()()(),i(1389,"tr",19)(1390,"td",20)(1391,"div",21)(1392,"span",22),e(1393,"t-page-size"),o(1394,"br"),t()()(),i(1395,"td",23)(1396,"code",52),e(1397,"number"),t()(),i(1398,"td",25)(1399,"p")(1400,"code"),e(1401,"10"),t()()(),i(1402,"td",26)(1403,"em")(1404,"strong"),e(1405,"(opcional)"),t()(),i(1406,"p"),e(1407,"Define a quantidade de itens default na p\xE1gina. Requer que a propriedade "),i(1408,"strong"),e(1409,"t-pageable"),t(),e(1410," esteja habilitada."),t()()(),i(1411,"tr",19)(1412,"td",20)(1413,"div",21)(1414,"span",22),e(1415,"t-page-size-virtual"),o(1416,"br"),t()()(),i(1417,"td",23)(1418,"code",52),e(1419,"number"),t()(),i(1420,"td",25)(1421,"p")(1422,"code"),e(1423,"60"),t()()(),i(1424,"td",26)(1425,"em")(1426,"strong"),e(1427,"(opcional)"),t()(),i(1428,"p"),e(1429,`Necess\xE1rio quando o virtual scroll est\xE1 habilitado para evitar comportamentos inesperados durante a rolagem.
Recomenda-se que o valor seja pelo menos 3 vezes o n\xFAmero de itens vis\xEDveis no grid.`),t()()(),i(1430,"tr",19)(1431,"td",20)(1432,"div",21)(1433,"span",22),e(1434,"t-pageable"),o(1435,"br"),t()()(),i(1436,"td",23)(1437,"code",24),e(1438,"boolean"),t()(),i(1439,"td",25)(1440,"p")(1441,"code"),e(1442,"false"),t()()(),i(1443,"td",26)(1444,"em")(1445,"strong"),e(1446,"(opcional)"),t()(),i(1447,"p"),e(1448,"Exibe o bot\xE3o 'Carregar mais resultados' e habilita a pagina\xE7\xE3o no Gerenciar Tabela."),t()()(),i(1449,"tr",19)(1450,"td",20)(1451,"div",21)(1452,"span",22),e(1453,"t-param-delete-api"),o(1454,"br"),t()()(),i(1455,"td",23)(1456,"code",40),e(1457,"string"),t()(),i(1458,"td",25),e(1459,"-"),t(),i(1460,"td",26)(1461,"em")(1462,"strong"),e(1463,"(opcional)"),t()(),i(1464,"p"),e(1465,"Define o par\xE2metro para a requisi\xE7\xE3o de DELETE ou POST(caso a propriedade "),i(1466,"code"),e(1467,"t-allow-batch-delete"),t(),e(1468," seja definida)."),t(),i(1469,"p"),e(1470,"Quando "),i(1471,"strong"),e(1472,"t-service-delete-api"),t(),e(1473," estiver configurado e o valor de "),i(1474,"strong"),e(1475,"t-param-delete-api"),t(),e(1476,` n\xE3o for informado,
por padr\xE3o, ser\xE1 enviado `),i(1477,"code"),e(1478,"key"),t(),e(1479," (definido ao usar "),i(1480,"strong"),e(1481,"ThfGridColumn"),t(),e(1482,") ou, na aus\xEAncia, "),i(1483,"code"),e(1484,"id"),t(),e(1485,`. Caso
`),i(1486,"strong"),e(1487,"t-service-delete-api"),t(),e(1488," n\xE3o esteja definido, ser\xE1 considerada a URL de "),i(1489,"strong"),e(1490,"t-service-api"),t(),e(1491,"."),t(),i(1492,"blockquote")(1493,"p"),e(1494,"Durante a exclus\xE3o de um \xFAnico item, ele ser\xE1 enviado como par\xE2metro na URL, conforme o exemplo abaixo:"),t(),i(1495,"pre")(1496,"code"),e(1497,`// Considerando t-param-delete-api="email"
DELETE /items?email=email1@example.com`),t()(),i(1498,"p"),e(1499,"Caso o valor n\xE3o seja uma propriedade v\xE1lida do item, o grid ir\xE1 considerar as keys definidas na coluna"),t(),i(1500,"pre")(1501,"code"),e(1502,`// Considerando t-param-delete-api="propriedadeInexistente" e as colunas "id" e "email" com keys definidas
DELETE /items?propriedadeInexistente=1|email1@example.com`),t()(),i(1503,"p"),e(1504,"Na aus\xEAncia do t-param-delete-api e das keys, o grid ir\xE1 considerar o id do item e enviar diretamente como par\xE2metro na URL:"),t(),i(1505,"pre")(1506,"code"),e(1507,`// Considerando t-param-delete-api="email" e sem keys definidas
DELETE /items/1`),t()()(),i(1508,"blockquote")(1509,"p"),e(1510,"Durante a exclus\xE3o em lote, ele ser\xE1 enviado no corpo da requisi\xE7\xE3o POST como o \xEDndice "),i(1511,"code"),e(1512,"paramDelete"),t(),e(1513,", conforme o exemplo abaixo:"),t(),i(1514,"pre")(1515,"code",58),e(1516,`// Considerando t-param-delete-api="email"
{
  items: [
    { id: '1', email: 'email1@example.com' },
    { id: '2', email: 'email2@example.com' }
  ],
  keys: ['email1@example.com', 'email2@example.com'],
  total: 2,
  paramDelete: "email"
}`),t()()()()(),i(1517,"tr",19)(1518,"td",20)(1519,"div",21)(1520,"span",22),e(1521,"t-resizable"),o(1522,"br"),t()()(),i(1523,"td",23)(1524,"code",24),e(1525,"boolean"),t()(),i(1526,"td",25)(1527,"p")(1528,"code"),e(1529,"false"),t()()(),i(1530,"td",26)(1531,"em")(1532,"strong"),e(1533,"(opcional)"),t()(),i(1534,"p"),e(1535,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do grid,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(1536,"tr",19)(1537,"td",20)(1538,"div",21)(1539,"span",22),e(1540,"t-row-height"),o(1541,"br"),t()()(),i(1542,"td",23)(1543,"code",52),e(1544,"number"),t()(),i(1545,"td",25),e(1546,"-"),t(),i(1547,"td",26)(1548,"em")(1549,"strong"),e(1550,"(opcional)"),t()(),i(1551,"p"),e(1552,`Define a altura da linha quando o virtual scroll est\xE1 habilitado.
Necess\xE1ria para calcular corretamente o n\xFAmero de itens vis\xEDveis e evitar comportamentos inesperados durante a rolagem.
Recomenda-se o uso dessa propriedade ao utilizar colunas com templates personalizados
(`),i(1553,"code"),e(1554,"columnTemplate"),t(),e(1555," e "),i(1556,"code"),e(1557,"cellTemplate"),t(),e(1558,")."),t()()(),i(1559,"tr",19)(1560,"td",20)(1561,"div",32)(1562,"span",33),e(1563," (t-rows-selected)"),o(1564,"br"),t()()(),i(1565,"td",23)(1566,"code",34),e(1567,"EventEmitter"),t()(),i(1568,"td",25),e(1569,"-"),t(),i(1570,"td",26)(1571,"p"),e(1572,"Retorna um array indicando quais s\xE3o as linhas selecionadas no momento."),t()()(),i(1573,"tr",19)(1574,"td",20)(1575,"div",21)(1576,"span",22),e(1577,"t-selectable"),o(1578,"br"),t()()(),i(1579,"td",23)(1580,"code",24),e(1581,"boolean"),t()(),i(1582,"td",25)(1583,"p")(1584,"code"),e(1585,"false"),t()()(),i(1586,"td",26)(1587,"em")(1588,"strong"),e(1589,"(opcional)"),t()(),i(1590,"p"),e(1591,`Habilita a sele\xE7\xE3o de itens, adicionando uma coluna com checkbox.
A sele\xE7\xE3o padr\xE3o \xE9 m\xFAltipla, permitindo selecionar v\xE1rios itens ao mesmo tempo.`),t()()(),i(1592,"tr",19)(1593,"td",20)(1594,"div",21)(1595,"span",22),e(1596,"t-selectable-entire-line"),o(1597,"br"),t()()(),i(1598,"td",23)(1599,"code",24),e(1600,"boolean"),t()(),i(1601,"td",25)(1602,"p")(1603,"code"),e(1604,"true"),t()()(),i(1605,"td",26)(1606,"em")(1607,"strong"),e(1608,"(opcional)"),t()(),i(1609,"p"),e(1610,"Permite selecionar o item ao clicar na linha. Requer que a propriedade "),i(1611,"strong"),e(1612,"t-selectable"),t(),e(1613," esteja habilitada."),t()()(),i(1614,"tr",19)(1615,"td",20)(1616,"div",32)(1617,"span",33),e(1618," (t-selected)"),o(1619,"br"),t()()(),i(1620,"td",23)(1621,"code",34),e(1622,"EventEmitter"),t()(),i(1623,"td",25),e(1624,"-"),t(),i(1625,"td",26)(1626,"em")(1627,"strong"),e(1628,"(opcional)"),t()(),i(1629,"p"),e(1630,"Evento disparado quando selecionado um item. Retorna o item selecionado."),t()()(),i(1631,"tr",19)(1632,"td",20)(1633,"div",32)(1634,"span",33),e(1635," (t-all-selected)"),o(1636,"br"),t()()(),i(1637,"td",23)(1638,"code",34),e(1639,"EventEmitter"),t()(),i(1640,"td",25),e(1641,"-"),t(),i(1642,"td",26)(1643,"em")(1644,"strong"),e(1645,"(opcional)"),t()(),i(1646,"p"),e(1647,"Evento disparado quando selecionado todos os itens. Retorna todos os itens selecionados."),t()()(),i(1648,"tr",19)(1649,"td",20)(1650,"div",21)(1651,"span",22),e(1652,"t-service-delete-api"),o(1653,"br"),t()()(),i(1654,"td",23)(1655,"code",40),e(1656,"string "),t(),i(1657,"code",59),e(1658," ThfGridDeleteService"),t()(),i(1659,"td",25),e(1660,"-"),t(),i(1661,"td",26)(1662,"em")(1663,"strong"),e(1664,"(opcional)"),t()(),i(1665,"p"),e(1666,`Respons\xE1vel por excluir o item. Aceita um servi\xE7o que implementa a interface
`),i(1667,"strong"),e(1668,"ThfGridDeleteService"),t(),e(1669," ou uma URL."),t(),i(1670,"p"),e(1671,`Ao selecionar o bot\xE3o de excluir, essa URL ou servi\xE7o ser\xE1 chamado, enviando o par\xE2metro definido na propriedade
`),i(1672,"strong"),e(1673,"t-param-delete-api"),t(),e(1674,". Se configurado e "),i(1675,"strong"),e(1676,"t-param-delete-api"),t(),e(1677," n\xE3o for informado, ser\xE1 enviado "),i(1678,"code"),e(1679,"key"),t(),e(1680,`
(definido ao usar `),i(1681,"strong"),e(1682,"ThfGridColumn"),t(),e(1683,") ou, na aus\xEAncia, "),i(1684,"code"),e(1685,"id"),t(),e(1686,"."),t(),i(1687,"p"),e(1688,"Por padr\xE3o, a exclus\xE3o \xE9 feita item a item. No entanto, ao habilitar a propriedade "),i(1689,"strong"),e(1690,"t-allow-batch-delete"),t(),e(1691,` e utilizar
um servi\xE7o com o m\xE9todo `),i(1692,"code"),e(1693,"deleteBatchItems"),t(),e(1694,", a exclus\xE3o em lote ser\xE1 permitida."),t(),i(1695,"blockquote")(1696,"p"),e(1697,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(1698,"a",60),e(1699,"API do PO UI"),t()()(),i(1700,"blockquote")(1701,"p"),e(1702,"Caso utilize um servi\xE7o "),i(1703,"strong"),e(1704,"ThfGridDeleteService"),t(),e(1705,`, o tratamento de encoding do valor fica sob a responsabilidade do
desenvolvedor.`),t()()()(),i(1706,"tr",19)(1707,"td",20)(1708,"div",21)(1709,"span",22),e(1710," t-service-api"),o(1711,"br"),t()()(),i(1712,"td",23)(1713,"code",40),e(1714,"string"),t()(),i(1715,"td",25),e(1716,"-"),t(),i(1717,"td",26)(1718,"em")(1719,"strong"),e(1720,"(opcional)"),t()(),i(1721,"p"),e(1722,"Define a rota da "),i(1723,"code"),e(1724,"API"),t(),e(1725,` para realizar o GET dos itens e popular o grid.
Para a exclus\xE3o, \xE9 necess\xE1rio que a `),i(1726,"code"),e(1727,"API"),t(),e(1728,` esteja preparada para receber uma ou
mais `),i(1729,"code"),e(1730,"keys"),t(),e(1731," concatenadas para identifica\xE7\xE3o do registro. Caso n\xE3o haja "),i(1732,"code"),e(1733,"keys"),t(),e(1734,`,
que implementa a interface `),i(1735,"strong"),e(1736,"ThfGridColumn"),t(),e(1737,", a requisi\xE7\xE3o de exclus\xE3o ocorrer\xE1 pelo "),i(1738,"code"),e(1739,"id"),t(),e(1740,"."),t()()(),i(1741,"tr",19)(1742,"td",20)(1743,"div",21)(1744,"span",22),e(1745,"t-show-densification-configuration"),o(1746,"br"),t()()(),i(1747,"td",23)(1748,"code",24),e(1749,"boolean"),t()(),i(1750,"td",25)(1751,"p")(1752,"code"),e(1753,"false"),t()()(),i(1754,"td",26)(1755,"em")(1756,"strong"),e(1757,"(opcional)"),t()(),i(1758,"p"),e(1759,"Habilita um atalho para alternar o espa\xE7amento das linhas do grid entre os modos "),i(1760,"code"),e(1761,"Compacto"),t(),e(1762," e "),i(1763,"code"),e(1764,"Espa\xE7oso"),t(),e(1765,` no
Gerenciar Tabela.`),t(),i(1766,"blockquote")(1767,"p"),e(1768,"Em n\xEDvel de acessibilidade "),i(1769,"strong"),e(1770,"AA"),t(),e(1771,", a op\xE7\xE3o "),i(1772,"code"),e(1773,"Extra Compacto"),t(),e(1774," tamb\xE9m \xE9 exibida."),t()()()(),i(1775,"tr",19)(1776,"td",20)(1777,"div",21)(1778,"span",22),e(1779,"t-show-draggable-icon"),o(1780,"br"),t()()(),i(1781,"td",23)(1782,"code",24),e(1783,"boolean"),t()(),i(1784,"td",25)(1785,"p")(1786,"code"),e(1787,"false"),t()()(),i(1788,"td",26)(1789,"em")(1790,"strong"),e(1791,"(opcional)"),t()(),i(1792,"p"),e(1793,"Exibe o \xEDcone de draggable nas respectivas colunas."),t()()(),i(1794,"tr",19)(1795,"td",20)(1796,"div",21)(1797,"span",22),e(1798," t-show-footer-aggregates"),o(1799,"br"),t()()(),i(1800,"td",23)(1801,"code",24),e(1802,"boolean"),t()(),i(1803,"td",25)(1804,"p")(1805,"code"),e(1806,"false"),t()()(),i(1807,"td",26)(1808,"em")(1809,"strong"),e(1810,"(opcional)"),t()(),i(1811,"p"),e(1812,"Quando definido true, exibir\xE1 no rodap\xE9 da tabela os totalizadores que foram definidos na propriedade "),i(1813,"code"),e(1814,"t-aggregates"),t(),e(1815,"."),t()()(),i(1816,"tr",19)(1817,"td",20)(1818,"div",32)(1819,"span",33),e(1820," (t-show-more)"),o(1821,"br"),t()()(),i(1822,"td",23)(1823,"code",34),e(1824,"EventEmitter"),t()(),i(1825,"td",25),e(1826,"-"),t(),i(1827,"td",26)(1828,"em")(1829,"strong"),e(1830,"(opcional)"),t()(),i(1831,"p"),e(1832,"Evento disparado quando pressionado o bot\xE3o 'Carregar mais'. Retorna um array do tipo "),i(1833,"strong"),e(1834,"ThfGridColumnSort"),t(),e(1835,`,
caso existam colunas ordenadas definidas.`),t(),i(1836,"blockquote")(1837,"p"),e(1838,"Caso "),i(1839,"strong"),e(1840,"t-items"),t(),e(1841," esteja definido, o uso desse evento se torna obrigat\xF3rio caso queira exibir o bot\xE3o 'Carregar mais'."),t()()()(),i(1842,"tr",19)(1843,"td",20)(1844,"div",21)(1845,"span",22),e(1846,"t-show-more-disabled"),o(1847,"br"),t()()(),i(1848,"td",23)(1849,"code",24),e(1850,"boolean"),t()(),i(1851,"td",25)(1852,"p")(1853,"code"),e(1854,"false"),t()()(),i(1855,"td",26)(1856,"em")(1857,"strong"),e(1858,"(opcional)"),t()(),i(1859,"p"),e(1860,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(1861,"tr",19)(1862,"td",20)(1863,"div",21)(1864,"span",22),e(1865,"t-show-more-visible"),o(1866,"br"),t()()(),i(1867,"td",23)(1868,"code",24),e(1869,"boolean"),t()(),i(1870,"td",25)(1871,"p")(1872,"code"),e(1873,"true"),t()()(),i(1874,"td",26)(1875,"em")(1876,"strong"),e(1877,"(opcional)"),t()(),i(1878,"p"),e(1879,"Controla a exibi\xE7\xE3o do bot\xE3o 'Carregar mais resultados'. Requer que a propriedade "),i(1880,"strong"),e(1881,"t-pageable"),t(),e(1882," esteja habilitada, ou seja utilizado o evento "),i(1883,"code"),e(1884,"t-show-more"),t(),e(1885," em conjunto com a propriedade "),i(1886,"strong"),e(1887,"t-items"),t(),e(1888,"."),t(),i(1889,"blockquote")(1890,"p"),e(1891,"Caso seja utilizado em conjunto com "),i(1892,"strong"),e(1893,"t-show-more-disabled"),t(),e(1894,", a propriedade "),i(1895,"strong"),e(1896,"t-show-more-visible"),t(),e(1897," ter\xE1 prioridade."),t()()()(),i(1898,"tr",19)(1899,"td",20)(1900,"div",21)(1901,"span",22),e(1902,"t-single-select"),o(1903,"br"),t()()(),i(1904,"td",23)(1905,"code",24),e(1906,"boolean"),t()(),i(1907,"td",25)(1908,"p")(1909,"code"),e(1910,"false"),t()()(),i(1911,"td",26)(1912,"em")(1913,"strong"),e(1914,"(opcional)"),t()(),i(1915,"p"),e(1916,"Define a sele\xE7\xE3o \xFAnica. Requer que a propriedade "),i(1917,"strong"),e(1918,"t-selectable"),t(),e(1919," esteja habilitada."),t()()(),i(1920,"tr",19)(1921,"td",20)(1922,"div",21)(1923,"span",22),e(1924,"t-sort"),o(1925,"br"),t()()(),i(1926,"td",23)(1927,"code",61),e(1928,"Array<ThfGridColumnSort>"),t()(),i(1929,"td",25),e(1930,"-"),t(),i(1931,"td",26)(1932,"em")(1933,"strong"),e(1934,"(opcional)"),t()(),i(1935,"p"),e(1936,"Define a ordena\xE7\xE3o (sort) crescente (asc) ou decrescente (desc) por coluna."),t(),i(1937,"pre")(1938,"code",28),e(1939,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-sort]="sortColumns"
></thf-grid>`),t()(),i(1940,"pre")(1941,"code",31),e(1942,"sortColumns: Array<ThfGridColumnSort> = [{ field: 'name', dir: 'desc'}];"),t()()()(),i(1943,"tr",19)(1944,"td",20)(1945,"div",32)(1946,"span",33),e(1947," (t-change-sort-column)"),o(1948,"br"),t()()(),i(1949,"td",23)(1950,"code",34),e(1951,"EventEmitter"),t()(),i(1952,"td",25),e(1953,"-"),t(),i(1954,"td",26)(1955,"em")(1956,"strong"),e(1957,"(opcional)"),t()(),i(1958,"p"),e(1959,`Evento disparado ao alterar o sort da coluna.
Retorna um array do tipo `),i(1960,"strong"),e(1961,"ThfGridColumnSort"),t(),e(1962," com a regra de sortable e a coluna aplicada."),t()()(),i(1963,"tr",19)(1964,"td",20)(1965,"div",21)(1966,"span",22),e(1967,"t-sortable"),o(1968,"br"),t()()(),i(1969,"td",23)(1970,"code",24),e(1971,"boolean"),t()(),i(1972,"td",25)(1973,"p")(1974,"code"),e(1975,"true"),t()()(),i(1976,"td",26)(1977,"em")(1978,"strong"),e(1979,"(opcional)"),t()(),i(1980,"p"),e(1981,"Habilita a ordena\xE7\xE3o (sort) crescente ou decrescente em todas as colunas do grid."),t()()(),i(1982,"tr",19)(1983,"td",20)(1984,"div",21)(1985,"span",22),e(1986,"t-spacing"),o(1987,"br"),t()()(),i(1988,"td",23)(1989,"code",40),e(1990,"string"),t()(),i(1991,"td",25)(1992,"p")(1993,"code"),e(1994,"medium"),t()()(),i(1995,"td",26)(1996,"em")(1997,"strong"),e(1998,"(opcional)"),t()(),i(1999,"p"),e(2e3,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do grid. Os valores
permitidos s\xE3o definidos pelo enum `),i(2001,"strong"),e(2002,"ThfColumnSpacing"),t(),e(2003,"."),t(),i(2004,"blockquote")(2005,"p"),e(2006,"Em n\xEDvel de acessibilidade "),i(2007,"strong"),e(2008,"AA"),t(),e(2009,", caso o valor de "),i(2010,"code"),e(2011,"t-spacing"),t(),e(2012," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),i(2013,"code"),e(2014,"extraSmall"),t(),e(2015,`
nos seguintes cen\xE1rios:`),t(),i(2016,"ul")(2017,"li"),e(2018,"Quando o valor de "),i(2019,"code"),e(2020,"t-components-size"),t(),e(2021," for "),i(2022,"code"),e(2023,"small"),t(),e(2024,";"),t(),i(2025,"li"),e(2026,"Quando o valor padr\xE3o dos componentes for configurado como "),i(2027,"code"),e(2028,"small"),t(),e(2029,` no
`),i(2030,"a",41),e(2031,"servi\xE7o de tema"),t(),e(2032,"."),t()()()()(),i(2033,"tr",19)(2034,"td",20)(2035,"div",21)(2036,"span",22),e(2037,"t-striped"),o(2038,"br"),t()()(),i(2039,"td",23)(2040,"code",24),e(2041,"boolean"),t()(),i(2042,"td",25)(2043,"p")(2044,"code"),e(2045,"true"),t()()(),i(2046,"td",26)(2047,"em")(2048,"strong"),e(2049,"(opcional)"),t()(),i(2050,"p"),e(2051,"Define o estilo listrado no grid (striped)."),t()()(),i(2052,"tr",19)(2053,"td",20)(2054,"div",21)(2055,"span",22),e(2056,"t-text-wrap"),o(2057,"br"),t()()(),i(2058,"td",23)(2059,"code",24),e(2060,"boolean"),t()(),i(2061,"td",25)(2062,"p")(2063,"code"),e(2064,"false"),t()()(),i(2065,"td",26)(2066,"em")(2067,"strong"),e(2068,"(opcional)"),t()(),i(2069,"p"),e(2070,`Define a quebra autom\xE1tica de texto. Quando ativada, o texto que excede o espa\xE7o dispon\xEDvel \xE9 transferido para a
pr\xF3xima linha em pontos apropriados para uma leitura clara.`),t(),i(2071,"blockquote")(2072,"p"),e(2073,"Propriedade incompat\xEDvel quando "),i(2074,"strong"),e(2075,"t-virtual-scroll"),t(),e(2076," est\xE1 habilitado."),t()()()(),i(2077,"tr",19)(2078,"td",20)(2079,"div",32)(2080,"span",33),e(2081," (t-unselected)"),o(2082,"br"),t()()(),i(2083,"td",23)(2084,"code",34),e(2085,"EventEmitter"),t()(),i(2086,"td",25),e(2087,"-"),t(),i(2088,"td",26)(2089,"em")(2090,"strong"),e(2091,"(opcional)"),t()(),i(2092,"p"),e(2093,"Evento disparado quando desselecionado um item. Retorna o item desselecionado."),t()()(),i(2094,"tr",19)(2095,"td",20)(2096,"div",32)(2097,"span",33),e(2098," (t-all-unselected)"),o(2099,"br"),t()()(),i(2100,"td",23)(2101,"code",34),e(2102,"EventEmitter"),t()(),i(2103,"td",25),e(2104,"-"),t(),i(2105,"td",26)(2106,"em")(2107,"strong"),e(2108,"(opcional)"),t()(),i(2109,"p"),e(2110,"Evento disparado quando desselecionado todos os itens. Retorna um array com todos os itens desselecionados."),t()()(),i(2111,"tr",19)(2112,"td",20)(2113,"div",21)(2114,"span",22),e(2115,"t-virtual-columns"),o(2116,"br"),t()()(),i(2117,"td",23)(2118,"code",24),e(2119,"boolean"),t()(),i(2120,"td",25)(2121,"p")(2122,"code"),e(2123,"false"),t()()(),i(2124,"td",26)(2125,"em")(2126,"strong"),e(2127,"(opcional)"),t()(),i(2128,"p"),e(2129,`Define o uso do virtual columns no grid para melhorar a performance com grande volume de colunas.
Recomendamos a utiliza\xE7\xE3o dessa propriedade somente em caso de perda de performance com grande quantidade de colunas.
Existe incompatibilidade com a propriedade `),i(2130,"strong"),e(2131,"t-auto-size"),t(),e(2132," e m\xE9todo "),i(2133,"strong"),e(2134,"autoFitColumns()"),t(),e(2135,`.
Caso a grid tenha mais de 50 colunas o virtual-columns \xE9 ativado.`),t()()(),i(2136,"tr",19)(2137,"td",20)(2138,"div",21)(2139,"span",22),e(2140,"t-virtual-scroll"),o(2141,"br"),t()()(),i(2142,"td",23)(2143,"code",24),e(2144,"boolean"),t()(),i(2145,"td",25)(2146,"p")(2147,"code"),e(2148,"true"),t()()(),i(2149,"td",26)(2150,"em")(2151,"strong"),e(2152,"(opcional)"),t()(),i(2153,"p"),e(2154,`Define o uso do virtual scroll no grid para melhorar a performance com grandes volumes de dados.
Requer que a propriedade `),i(2155,"strong"),e(2156,"t-height"),t(),e(2157," esteja definida."),t(),i(2158,"blockquote")(2159,"p"),e(2160,"Verificar a documenta\xE7\xE3o das seguintes propriedades: "),i(2161,"strong"),e(2162,"t-text-wrap"),t(),e(2163,", "),i(2164,"strong"),e(2165,"t-row-height"),t(),e(2166," e "),i(2167,"strong"),e(2168,"t-page-size-virtual"),t(),e(2169,"."),t()()()()()(),i(2170,"po-accordion-item",62)(2171,"table",63)(2172,"tr",19)(2173,"th",64)(2174,"div",21)(2175,"h4")(2176,"span",22),e(2177," autoFitColumns "),t()()()()(),i(2178,"tr",26)(2179,"td",26)(2180,"p"),e(2181,"Ajusta automaticamente a largura das colunas com base no conte\xFAdo atual das c\xE9lulas."),t(),i(2182,"p"),e(2183,`Este m\xE9todo calcula a largura ideal para cada coluna considerando o conte\xFAdo textual das c\xE9lulas vis\xEDveis,
cabe\xE7alhos das colunas e configura\xE7\xF5es de redimensionamento e tamanho fixo`),t(),i(2184,"p")(2185,"strong"),e(2186,"Exemplo de uso:"),t()(),i(2187,"pre")(2188,"code",31),e(2189,`// Ajusta colunas e mant\xE9m largura total da tabela
this.gridComponent.autoFitColumns(true);

// Ajusta colunas e permite redimensionamento fluido
this.gridComponent.autoFitColumns();`),t()(),i(2190,"blockquote")(2191,"p"),e(2192,"Este m\xE9todo \xE9 chamado automaticamente quando:"),t(),i(2193,"ul")(2194,"li"),e(2195,"A propriedade "),i(2196,"code"),e(2197,"t-auto-size"),t(),e(2198," \xE9 habilitada"),t(),i(2199,"li"),e(2200,"O evento "),i(2201,"code"),e(2202,"t-auto-size-on-scroll"),t(),e(2203," \xE9 disparado durante scroll virtual"),t()()()()()(),i(2204,"h5")(2205,"b"),e(2206,"Par\xE2metros"),t()(),i(2207,"table",16)(2208,"tr",17)(2209,"th",18),e(2210,"Nome"),t(),i(2211,"th",18),e(2212,"Tipo"),t(),i(2213,"th",18),e(2214,"Descri\xE7\xE3o"),t()(),i(2215,"tr",19)(2216,"td",20),e(2217," recalculate"),t(),i(2218,"td",23)(2219,"code",65),e(2220," boolean "),t()(),i(2221,"td",26)(2222,"p"),e(2223,"Quando "),i(2224,"code"),e(2225,"true"),t(),e(2226,`, mant\xE9m a largura total da tabela ap\xF3s o ajuste.
Quando `),i(2227,"code"),e(2228,"false"),t(),e(2229," ou omitido, limpa a largura fixa da tabela para permitir redimensionamento fluido."),t()()()(),o(2230,"br"),i(2231,"table",63)(2232,"tr",19)(2233,"th",64)(2234,"div",21)(2235,"h4")(2236,"span",22),e(2237," cleanRowActionsMode "),t()()()()(),i(2238,"tr",26)(2239,"td",26)(2240,"p"),e(2241,"Aplica o estado default aos itens editados, inclu\xEDdos e removidos do grid."),t(),i(2242,"p"),e(2243,`Usado para aplicar as altera\xE7\xF5es realizadas nos registros do grid, e tamb\xE9m
para remover os itens marcados para exclus\xE3o, de acordo com os par\xE2metros fornecidos.`),t(),i(2244,"pre")(2245,"code"),e(2246,`// Aplica o estado de edi\xE7\xE3o e inclus\xE3o, removendo os itens com $removed
this.cleanRowActionsMode();

// Aplica apenas as edi\xE7\xF5es, sem alterar as inclus\xF5es e exclus\xF5es
this.cleanRowActionsMode(true, false, false);

// Remove apenas os itens com $removed, sem aplicar edi\xE7\xF5es e inclus\xF5es
this.cleanRowActionsMode(false, false, true);`),t()(),i(2247,"p"),e(2248,`Exemplo de uso:
Se voc\xEA precisa aplicar o estado de todas as a\xE7\xF5es de linha, como edi\xE7\xE3o, inclus\xE3o e
remo\xE7\xE3o, basta chamar esta fun\xE7\xE3o. Por exemplo, se houver uma a\xE7\xE3o de aplicar o grid ao
salvar os dados, voc\xEA pode us\xE1-lo da seguinte forma:`),t(),i(2249,"pre")(2250,"code",31),e(2251,`// Ap\xF3s salvar os dados na API, voc\xEA pode limpar todos os estados de a\xE7\xE3o de linha
this.myService.saveData(this.thfGrid.getChangedItems()).subscribe(() => {
  this.thfGrid.cleanRowActionsMode(); // Limpa todas as a\xE7\xF5es de linha ap\xF3s salvar
  console.log('A\xE7\xF5es de linha limpas.');
});`),t()()()()(),i(2252,"h5")(2253,"b"),e(2254,"Par\xE2metros"),t()(),i(2255,"table",16)(2256,"tr",17)(2257,"th",18),e(2258,"Nome"),t(),i(2259,"th",18),e(2260,"Tipo"),t(),i(2261,"th",18),e(2262,"Descri\xE7\xE3o"),t()(),i(2263,"tr",19)(2264,"td",20),e(2265," edit"),t(),i(2266,"td",23)(2267,"code",65),e(2268," boolean "),t()(),i(2269,"td",26)(2270,"p"),e(2271,"Indica se deve aplicar as edi\xE7\xF5es realizadas nas linhas."),t()()(),i(2272,"tr",19)(2273,"td",20),e(2274," include"),t(),i(2275,"td",23)(2276,"code",65),e(2277," boolean "),t()(),i(2278,"td",26)(2279,"p"),e(2280,"Indica se deve aplicar as inclus\xF5es de novas linhas."),t()()(),i(2281,"tr",19)(2282,"td",20),e(2283," del"),t(),i(2284,"td",23)(2285,"code",65),e(2286," boolean "),t()(),i(2287,"td",26)(2288,"p"),e(2289,"Indica se deve remover as linhas marcadas para exclus\xE3o."),t()()()(),o(2290,"br"),i(2291,"table",63)(2292,"tr",19)(2293,"th",64)(2294,"div",21)(2295,"h4")(2296,"span",22),e(2297," deleteItems "),t()()()()(),i(2298,"tr",26)(2299,"td",26)(2300,"p"),e(2301,"Respons\xE1vel pela exclus\xE3o de itens selecionados."),t(),i(2302,"p"),e(2303,"Quando "),i(2304,"strong"),e(2305,"t-items"),t(),e(2306,` est\xE1 definido, a remo\xE7\xE3o pode ser feita em lote, excluindo todas as linhas selecionadas localmente.
Se utilizado com um servi\xE7o (`),i(2307,"strong"),e(2308,"t-service-api"),t(),e(2309," e/ou "),i(2310,"strong"),e(2311,"t-service-delete-api"),t(),e(2312,"), a exclus\xE3o permitida \xE9 de um item por vez."),t(),i(2313,"blockquote")(2314,"p"),e(2315,'Caso utilizado com a "edi\xE7\xE3o flu\xEDda offline via formul\xE1rio (propriedade '),i(2316,"strong"),e(2317,"t-grid-row-actions"),t(),e(2318,`)" remove localmente
as linhas sinalizadas com `),i(2319,"code"),e(2320,"$removed"),t(),e(2321,"."),t()(),i(2322,"blockquote")(2323,"p"),e(2324,"\xC9 poss\xEDvel habilitar a exclus\xE3o em lote com servi\xE7os remotos utilizando a propriedade "),i(2325,"strong"),e(2326,"t-allow-batch-delete"),t(),e(2327," em conjunto com "),i(2328,"strong"),e(2329,"t-service-api"),t(),e(2330," e/ou "),i(2331,"strong"),e(2332,"t-service-delete-api"),t(),e(2333,"."),t()()()()(),o(2334,"br"),i(2335,"table",63)(2336,"tr",19)(2337,"th",64)(2338,"div",21)(2339,"h4")(2340,"span",22),e(2341," getChangedItems "),t()()()()(),i(2342,"tr",26)(2343,"td",26)(2344,"p"),e(2345,"Retorna uma lista dos itens que foram modificados no grid, com a propriedade "),i(2346,"code"),e(2347,"op"),t(),e(2348,` indicando
a a\xE7\xE3o executada sobre cada item, podendo ser 'remove', 'add' ou 'replace'.`),t(),i(2349,"pre")(2350,"code"),e(2351,`// Exemplo de uso:
const changedItems = this.getChangedItems();
console.log(changedItems);
// Sa\xEDda esperada: [{ id: 1, name: 'Item 1', op: 'replace' }, { id: 2, name: 'Item 2', op: 'remove' }]`),t()()()()(),i(2352,"h5")(2353,"b"),e(2354,"Retorno"),t()(),i(2355,"table",16)(2356,"tr",17)(2357,"th",18),e(2358,"Tipo"),t(),i(2359,"th",18),e(2360,"Descri\xE7\xE3o"),t()(),i(2361,"tr",19)(2362,"td",23)(2363,"code",65),e(2364,"Array<any>"),t()(),i(2365,"td",26)(2366,"p"),e(2367,"Uma lista de objetos representando os itens modificados. Cada objeto ter\xE1 a propriedade "),i(2368,"code"),e(2369,"op"),t(),e(2370," que indica a a\xE7\xE3o realizada"),t()()()(),o(2371,"br"),i(2372,"table",63)(2373,"tr",19)(2374,"th",64)(2375,"div",21)(2376,"h4")(2377,"span",22),e(2378," getSelectedRows "),t()()()()(),i(2379,"tr",26)(2380,"td",26)(2381,"p"),e(2382,"Respons\xE1vel por retornar os itens do grid que est\xE3o selecionadas."),t()()()(),o(2383,"br"),i(2384,"table",63)(2385,"tr",19)(2386,"th",64)(2387,"div",21)(2388,"h4")(2389,"span",22),e(2390," showAdditionalHelp "),t()()()()(),i(2391,"tr",26)(2392,"td",26)(2393,"p"),e(2394,"Exibe o conte\xFAdo da propriedade "),i(2395,"code"),e(2396,"helper"),t(),e(2397," durante a edi\xE7\xE3o ("),i(2398,"code"),e(2399,"t-edit-properties"),t(),e(2400," ou "),i(2401,"code"),e(2402,"t-grid-row-actions"),t(),e(2403,`) do grid.
Para isso, ser\xE1 necess\xE1rio ter uma inst\xE2ncia do componente no DOM e configurar uma tecla de atalho utilizando o evento `),i(2404,"code"),e(2405,"t-keydown"),t(),e(2406,"."),t(),i(2407,"pre")(2408,"code"),e(2409,`import { ThfGridComponent } from '@totvs/thf-components';
...
@ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

columns: Array<ThfGridColumn> = [
 ...
 {
   property: 'name',
   label: 'Nome',
   editProperties: {
     componentEditable: 'input',
     helper: 'Nome completo',
     keydown: this.onkeydown.bind(this, 'name')
    }
 },
]

onkeydown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.thfGrid.showAdditionalHelp(property);
 }
}`),t()(),i(2410,"blockquote")(2411,"p"),e(2412,`Com t-grid-row-actions: Alguns atalhos j\xE1 est\xE3o em uso, ent\xE3o, evite sobrescrev\xEA-los. Para mais detalhes,
consulte o `),i(2413,"a",66),e(2414,"TDN"),t(),e(2415,"."),t()()()()(),i(2416,"h5")(2417,"b"),e(2418,"Par\xE2metros"),t()(),i(2419,"table",16)(2420,"tr",17)(2421,"th",18),e(2422,"Nome"),t(),i(2423,"th",18),e(2424,"Tipo"),t(),i(2425,"th",18),e(2426,"Descri\xE7\xE3o"),t()(),i(2427,"tr",19)(2428,"td",20),e(2429," property"),t(),i(2430,"td",23)(2431,"code",65),e(2432," string "),t()(),i(2433,"td",26)(2434,"p"),e(2435,"Identificador da coluna."),t()()()(),o(2436,"br"),i(2437,"table",63)(2438,"tr",19)(2439,"th",64)(2440,"div",21)(2441,"h4")(2442,"span",22),e(2443," selectRowItem "),t()()()()(),i(2444,"tr",26)(2445,"td",26)(2446,"p"),e(2447,"Seleciona um item do grid."),t()()()(),i(2448,"h5")(2449,"b"),e(2450,"Par\xE2metros"),t()(),i(2451,"table",16)(2452,"tr",17)(2453,"th",18),e(2454,"Nome"),t(),i(2455,"th",18),e(2456,"Tipo"),t(),i(2457,"th",18),e(2458,"Descri\xE7\xE3o"),t()(),i(2459,"tr",19)(2460,"td",20),e(2461," item"),t(),i(2462,"td",23)(2463,"code",67),e(2464," { key: value } "),t(),i(2465,"code",27),e(2466," Function "),t()(),i(2467,"td",26)(2468,"p"),e(2469,"Item ou fun\xE7\xE3o que recebe como par\xE2metro o item e retorna um boolean."),t()()()(),o(2470,"br"),i(2471,"table",63)(2472,"tr",19)(2473,"th",64)(2474,"div",21)(2475,"h4")(2476,"span",22),e(2477," unselectRowItem "),t()()()()(),i(2478,"tr",26)(2479,"td",26)(2480,"p"),e(2481,"Desmarca o item que est\xE1 selecionado."),t()()()(),i(2482,"h5")(2483,"b"),e(2484,"Par\xE2metros"),t()(),i(2485,"table",16)(2486,"tr",17)(2487,"th",18),e(2488,"Nome"),t(),i(2489,"th",18),e(2490,"Tipo"),t(),i(2491,"th",18),e(2492,"Descri\xE7\xE3o"),t()(),i(2493,"tr",19)(2494,"td",20),e(2495," item"),t(),i(2496,"td",23)(2497,"code",67),e(2498," { key: value } "),t(),i(2499,"code",27),e(2500," Function "),t()(),i(2501,"td",26)(2502,"p"),e(2503,"Item ou fun\xE7\xE3o que recebe como par\xE2metro o item e retorna um boolean."),t()()()(),o(2504,"br"),i(2505,"table",63)(2506,"tr",19)(2507,"th",64)(2508,"div",21)(2509,"h4")(2510,"span",22),e(2511," applyFilters "),t()()()()(),i(2512,"tr",26)(2513,"td",26)(2514,"p"),e(2515,"M\xE9todo respons\xE1vel por realizar busca no servi\xE7o de dados podendo informar filtros e com o retorno, atualiza o grid."),t(),i(2516,"p"),e(2517,"Caso n\xE3o seja informado par\xE2metro, nada ser\xE1 adicionado ao GET, conforme abaixo:"),t(),i(2518,"pre")(2519,"code"),e(2520,"url + ?page=1&pageSize=10"),t()(),i(2521,"blockquote")(2522,"p"),e(2523,"Obs: os par\xE2metros "),i(2524,"code"),e(2525,"page"),t(),e(2526," e "),i(2527,"code"),e(2528,"pageSize"),t(),e(2529," sempre ser\xE3o chamados independente de ser enviados outros par\xE2metros."),t()(),i(2530,"p"),e(2531,"Caso sejam informados os par\xE2metros "),i(2532,"code"),e(2533,"{ name: 'JOHN', age: '23' }"),t(),e(2534,", todos ser\xE3o adicionados ao GET, conforme abaixo:"),t(),i(2535,"pre")(2536,"code"),e(2537,"url + ?page=1&pageSize=10&name=JOHN&age=23"),t()()()()(),i(2538,"h5")(2539,"b"),e(2540,"Par\xE2metros"),t()(),i(2541,"table",16)(2542,"tr",17)(2543,"th",18),e(2544,"Nome"),t(),i(2545,"th",18),e(2546,"Tipo"),t(),i(2547,"th",18),e(2548,"Descri\xE7\xE3o"),t()(),i(2549,"tr",19)(2550,"td",20),e(2551," queryParams"),t(),i(2552,"td",23)(2553,"code",67),e(2554," { key: value } "),t()(),i(2555,"td",26)(2556,"p"),e(2557,"Formato do objeto a ser enviado."),t(),i(2558,"blockquote")(2559,"p"),e(2560,"Pode ser utilizada qualquer string como key, e qualquer string ou number como value."),t()()()()(),o(2561,"br"),i(2562,"table",63)(2563,"tr",19)(2564,"th",64)(2565,"div",21)(2566,"h4")(2567,"span",22),e(2568," calculateHeightDynamically "),t()()()()(),i(2569,"tr",26)(2570,"td",26)(2571,"p"),e(2572,"Mant\xE9m compatibilidade com vers\xF5es anteriores, chamando "),i(2573,"code"),e(2574,"calculateDynamicSize"),t(),e(2575," com a propriedade "),i(2576,"code"),e(2577,"'height'"),t(),e(2578,"."),t()()()(),i(2579,"h5")(2580,"b"),e(2581,"Par\xE2metros"),t()(),i(2582,"table",16)(2583,"tr",17)(2584,"th",18),e(2585,"Nome"),t(),i(2586,"th",18),e(2587,"Tipo"),t(),i(2588,"th",18),e(2589,"Descri\xE7\xE3o"),t()(),i(2590,"tr",19)(2591,"td",20),e(2592," callRowHeight"),t(),o(2593,"td",23),i(2594,"td",26)(2595,"p"),e(2596,"Define se o "),i(2597,"code"),e(2598,"calculateRowHeight"),t(),e(2599," deve ser chamado ap\xF3s o c\xE1lculo do tamanho."),t()()()(),o(2600,"br"),i(2601,"table",63)(2602,"tr",19)(2603,"th",64)(2604,"div",21)(2605,"h4")(2606,"span",22),e(2607," removeItem "),t()()()()(),i(2608,"tr",26)(2609,"td",26)(2610,"p"),e(2611,"Remove um item localmente do grid."),t()()()(),i(2612,"h5")(2613,"b"),e(2614,"Par\xE2metros"),t()(),i(2615,"table",16)(2616,"tr",17)(2617,"th",18),e(2618,"Nome"),t(),i(2619,"th",18),e(2620,"Tipo"),t(),i(2621,"th",18),e(2622,"Descri\xE7\xE3o"),t()(),i(2623,"tr",19)(2624,"td",20),e(2625," item"),t(),i(2626,"td",23)(2627,"code",52),e(2628," number "),t(),i(2629,"code",67),e(2630," { key: value } "),t()(),i(2631,"td",26)(2632,"p"),e(2633,"\xCDndice ou item que ser\xE1 removido."),t(),i(2634,"blockquote")(2635,"p"),e(2636,"Ao remover o item, a linha que o representa ser\xE1 removida do grid."),t()()()()(),o(2637,"br"),i(2638,"table",63)(2639,"tr",19)(2640,"th",64)(2641,"div",21)(2642,"h4")(2643,"span",22),e(2644," unselectRows "),t()()()()(),i(2645,"tr",26)(2646,"td",26)(2647,"p"),e(2648,"M\xE9todo respons\xE1vel por desmarcar as linhas que est\xE3o selecionadas."),t()()()(),o(2649,"br"),i(2650,"table",63)(2651,"tr",19)(2652,"th",64)(2653,"div",21)(2654,"h4")(2655,"span",22),e(2656," getInfoProperties "),t()()()()(),i(2657,"tr",26)(2658,"td",26)(2659,"p"),e(2660,"M\xE9todo que retorna informa\xE7\xF5es sobre os itens atuais da tabela."),t(),i(2661,"p"),e(2662,"Inclui:"),t(),i(2663,"ul")(2664,"li")(2665,"code"),e(2666,"items"),t(),e(2667,": lista de itens atualmente carregados na tabela."),t(),i(2668,"li")(2669,"code"),e(2670,"total"),t(),e(2671,": total de itens informado pela API atrav\xE9s da propriedade "),i(2672,"code"),e(2673,"total"),t(),e(2674,"; pode ser "),i(2675,"code"),e(2676,"undefined"),t(),e(2677," caso a API n\xE3o informe."),t(),i(2678,"li")(2679,"code"),e(2680,"page"),t(),e(2681,": n\xFAmero da p\xE1gina atual informado pela API ("),i(2682,"code"),e(2683,"itemsByApi.page"),t(),e(2684,"); se n\xE3o existir, utiliza a propriedade local "),i(2685,"code"),e(2686,"page"),t(),e(2687,"."),t(),i(2688,"li")(2689,"code"),e(2690,"pageSize"),t(),e(2691,": quantidade de itens por p\xE1gina informada pela API ("),i(2692,"code"),e(2693,"itemsByApi.pageSize"),t(),e(2694,"); se n\xE3o existir, utiliza a propriedade local "),i(2695,"code"),e(2696,"pageSize"),t(),e(2697,"."),t()()()()(),o(2698,"br"),i(2699,"table",63)(2700,"tr",19)(2701,"th",64)(2702,"div",21)(2703,"h4")(2704,"span",22),e(2705," updateItem "),t()()()()(),i(2706,"tr",26)(2707,"td",26)(2708,"p"),e(2709,"Atualiza um item do grid quando utilizado "),i(2710,"strong"),e(2711,"t-itens"),t(),e(2712,"."),t()()()(),i(2713,"h5")(2714,"b"),e(2715,"Par\xE2metros"),t()(),i(2716,"table",16)(2717,"tr",17)(2718,"th",18),e(2719,"Nome"),t(),i(2720,"th",18),e(2721,"Tipo"),t(),i(2722,"th",18),e(2723,"Descri\xE7\xE3o"),t()(),i(2724,"tr",19)(2725,"td",20),e(2726," item"),t(),i(2727,"td",23)(2728,"code",52),e(2729," number "),t(),i(2730,"code",67),e(2731," { key: value } "),t()(),i(2732,"td",26)(2733,"p"),e(2734,"\xCDndice ou o item que ser\xE1 atualizado."),t()()(),i(2735,"tr",19)(2736,"td",20),e(2737," updatedItem"),t(),i(2738,"td",23)(2739,"code",67),e(2740," { key: value } "),t()(),i(2741,"td",26)(2742,"p"),e(2743,"Item que foi atualizado."),t(),i(2744,"blockquote")(2745,"p"),e(2746,"Ao atualizar o item, a informa\xE7\xE3o ser\xE1 alterada no grid."),t()()()()(),o(2747,"br"),i(2748,"table",63)(2749,"tr",19)(2750,"th",64)(2751,"div",21)(2752,"h4")(2753,"span",22),e(2754," calculateDynamicSize "),t()()()()(),i(2755,"tr",26)(2756,"td",26)(2757,"p"),e(2758,"calcula dinamicamente o tamanho da grid com base na porcentagem definida nas propriedades "),i(2759,"strong"),e(2760,"t-height"),t(),e(2761,`,
`),i(2762,"strong"),e(2763,"t-min-height"),t(),e(2764," e "),i(2765,"strong"),e(2766,"t-max-height"),t(),e(2767,"."),t(),i(2768,"p"),e(2769,`Caso a grid esteja dentro de um componente ou elemento que altere sua visibilidade,
\xE9 necess\xE1rio chamar esta fun\xE7\xE3o para garantir um c\xE1lculo correto. Exemplo:`),t(),i(2770,"pre")(2771,"code",28),e(2772,`<po-tabs>
 <po-tab (p-click)="emitClickTab()" p-label="PO Tabs">
   <thf-grid #thfGrid> </thf-grid>
 </po-tab>
</po-tabs>`),t()(),i(2773,"pre")(2774,"code",31),e(2775,`@ViewChild('thfGrid') thfGrid: ThfGridComponent;

emitClickTab() {
 // Time-out necess\xE1rio para garantir que o DOM foi atualizado antes do c\xE1lculo da altura.
 setTimeout(() => {
   this.thfGrid.calculateDynamicSize('height', true);
 }, 100);
}`),t()()()()(),i(2776,"h5")(2777,"b"),e(2778,"Par\xE2metros"),t()(),i(2779,"table",16)(2780,"tr",17)(2781,"th",18),e(2782,"Nome"),t(),i(2783,"th",18),e(2784,"Tipo"),t(),i(2785,"th",18),e(2786,"Descri\xE7\xE3o"),t()(),i(2787,"tr",19)(2788,"td",20),e(2789," property"),t(),o(2790,"td",23),i(2791,"td",26)(2792,"p"),e(2793,"Define qual propriedade ser\xE1 calculada: "),i(2794,"code"),e(2795,"'height'"),t(),e(2796,", "),i(2797,"code"),e(2798,"'minHeight'"),t(),e(2799," ou "),i(2800,"code"),e(2801,"'maxHeight'"),t(),e(2802,"."),t()()(),i(2803,"tr",19)(2804,"td",20),e(2805," callRowHeight"),t(),o(2806,"td",23),i(2807,"td",26)(2808,"p"),e(2809,"Define se o m\xE9todo "),i(2810,"code"),e(2811,"calculateRowHeight"),t(),e(2812," deve ser chamado ap\xF3s o c\xE1lculo do tamanho."),t()()()(),o(2813,"br"),t()()(),y(2814,2),t(),i(2815,"po-tab",68),y(2816,3),i(2817,"po-container",5)(2818,"po-accordion",6)(2819,"po-accordion-item",69)(2820,"h4",9)(2821,"code"),e(2822,"ThfTableAction"),t()(),i(2823,"div",10)(2824,"p"),e(2825," Interface para configura\xE7\xE3o das a\xE7\xF5es."),t()(),i(2826,"h4",15),e(2827,"Propriedades"),t(),i(2828,"table",16)(2829,"tr",17)(2830,"th",18),e(2831,"Nome"),t(),i(2832,"th",18),e(2833,"Tipo"),t(),i(2834,"th",18),e(2835,"Descri\xE7\xE3o"),t()(),i(2836,"tr",19)(2837,"td",20)(2838,"div",21)(2839,"span",22),e(2840," action"),o(2841,"br"),t()()(),i(2842,"td",23)(2843,"code",27),e(2844,"Function"),t()(),i(2845,"td",26)(2846,"em")(2847,"strong"),e(2848,"(opcional)"),t()(),i(2849,"p"),e(2850,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),i(2851,"blockquote")(2852,"p"),e(2853,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),i(2854,"em"),e(2855,"bind"),t(),e(2856,"."),t()(),i(2857,"p"),e(2858,"Exemplo: "),i(2859,"code"),e(2860,"action: this.myFunction.bind(this)"),t()()()(),i(2861,"tr",19)(2862,"td",20)(2863,"div",21)(2864,"span",22),e(2865," disabled"),o(2866,"br"),t()()(),i(2867,"td",23)(2868,"code",24),e(2869,"boolean "),t(),i(2870,"code",27),e(2871," Function"),t()(),i(2872,"td",26)(2873,"em")(2874,"strong"),e(2875,"(opcional)"),t()(),i(2876,"p"),e(2877,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),i(2878,"p"),e(2879,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),i(2880,"tr",19)(2881,"td",20)(2882,"div",21)(2883,"span",22),e(2884," fixed"),o(2885,"br"),t()()(),i(2886,"td",23)(2887,"code",24),e(2888,"boolean"),t()(),i(2889,"td",26)(2890,"em")(2891,"strong"),e(2892,"(opcional)"),t()(),i(2893,"p"),e(2894,"Propriedade para fixar a a\xE7\xE3o"),t()()(),i(2895,"tr",19)(2896,"td",20)(2897,"div",21)(2898,"span",22),e(2899," icon"),o(2900,"br"),t()()(),i(2901,"td",23)(2902,"code",40),e(2903,"string "),t(),i(2904,"code",51),e(2905," TemplateRef<void>"),t()(),i(2906,"td",26)(2907,"em")(2908,"strong"),e(2909,"(opcional)"),t()(),i(2910,"p"),e(2911,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),i(2912,"p"),e(2913,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),i(2914,"a",70),e(2915,"Biblioteca de \xEDcones"),t(),e(2916,". conforme exemplo abaixo:"),t(),i(2917,"pre")(2918,"code"),e(2919,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>`),t()(),i(2920,"p"),e(2921,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),i(2922,"pre")(2923,"code"),e(2924,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>`),t()(),i(2925,"p"),e(2926,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),i(2927,"code"),e(2928,"TemplateRef"),t(),e(2929,`, conforme exemplo abaixo:
component.html:`),t(),i(2930,"pre")(2931,"code"),e(2932,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>`),t()(),i(2933,"p"),e(2934,"component.ts:"),t(),i(2935,"pre")(2936,"code"),e(2937,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];`),t()()()(),i(2938,"tr",19)(2939,"td",20)(2940,"div",21)(2941,"span",22),e(2942," label"),o(2943,"br"),t()()(),i(2944,"td",23)(2945,"code",40),e(2946,"string"),t()(),i(2947,"td",26)(2948,"p"),e(2949,"R\xF3tulo da a\xE7\xE3o."),t()()(),i(2950,"tr",19)(2951,"td",20)(2952,"div",21)(2953,"span",22),e(2954," selected"),o(2955,"br"),t()()(),i(2956,"td",23)(2957,"code",24),e(2958,"boolean"),t()(),i(2959,"td",26)(2960,"em")(2961,"strong"),e(2962,"(opcional)"),t()(),i(2963,"p"),e(2964,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),i(2965,"tr",19)(2966,"td",20)(2967,"div",21)(2968,"span",22),e(2969," separator"),o(2970,"br"),t()()(),i(2971,"td",23)(2972,"code",24),e(2973,"boolean"),t()(),i(2974,"td",26)(2975,"em")(2976,"strong"),e(2977,"(opcional)"),t()(),i(2978,"p"),e(2979,"Atribui uma linha separadora acima do item."),t()()(),i(2980,"tr",19)(2981,"td",20)(2982,"div",21)(2983,"span",22),e(2984," type"),o(2985,"br"),t()()(),i(2986,"td",23)(2987,"code",40),e(2988,"string"),t()(),i(2989,"td",26)(2990,"em")(2991,"strong"),e(2992,"(opcional)"),t()(),i(2993,"p"),e(2994,"Define a cor do item, sendo "),i(2995,"code"),e(2996,"default"),t(),e(2997," o padr\xE3o."),t(),i(2998,"p"),e(2999,"Valores v\xE1lidos:"),t(),i(3e3,"ul")(3001,"li")(3002,"code"),e(3003,"default"),t()(),i(3004,"li")(3005,"code"),e(3006,"danger"),t(),e(3007," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),i(3008,"tr",19)(3009,"td",20)(3010,"div",21)(3011,"span",22),e(3012," url"),o(3013,"br"),t()()(),i(3014,"td",23)(3015,"code",40),e(3016,"string"),t()(),i(3017,"td",26)(3018,"em")(3019,"strong"),e(3020,"(opcional)"),t()(),i(3021,"p"),e(3022,"URL utilizada no redirecionamento das p\xE1ginas."),t()()(),i(3023,"tr",19)(3024,"td",20)(3025,"div",21)(3026,"span",22),e(3027," visible"),o(3028,"br"),t()()(),i(3029,"td",23)(3030,"code",24),e(3031,"boolean "),t(),i(3032,"code",27),e(3033," Function"),t()(),i(3034,"td",26)(3035,"em")(3036,"strong"),e(3037,"(opcional)"),t()(),i(3038,"p"),e(3039,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),i(3040,"blockquote")(3041,"p"),e(3042,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),i(3043,"p"),e(3044,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),i(3045,"ul")(3046,"li")(3047,"p"),e(3048,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),i(3049,"li")(3050,"p"),e(3051,"Informar diretamente um valor booleano."),t()()()()()()(),i(3052,"po-accordion-item",71)(3053,"h4",9)(3054,"code"),e(3055,"ThfAggregateDescriptor"),t()(),i(3056,"div",10)(3057,"p"),e(3058,"Recebe um objeto contendo a coluna, uma label e a fun\xE7\xE3o que ser\xE1 aplicada para o c\xE1lculo do totalizador."),t()(),i(3059,"h4",15),e(3060,"Propriedades"),t(),i(3061,"table",16)(3062,"tr",17)(3063,"th",18),e(3064,"Nome"),t(),i(3065,"th",18),e(3066,"Tipo"),t(),i(3067,"th",18),e(3068,"Descri\xE7\xE3o"),t()(),i(3069,"tr",19)(3070,"td",20)(3071,"div",21)(3072,"span",22),e(3073," aggregate"),o(3074,"br"),t()()(),i(3075,"td",23)(3076,"code",72),e(3077,"'sum' "),t(),i(3078,"code",73),e(3079," 'average' "),t(),i(3080,"code",74),e(3081," 'count' "),t(),i(3082,"code",75),e(3083," 'min' "),t(),i(3084,"code",76),e(3085," 'max'"),t()(),i(3086,"td",26)(3087,"p"),e(3088,"Propriedade que recebe a fun\xE7\xE3o para o c\xE1lculo."),t()()(),i(3089,"tr",19)(3090,"td",20)(3091,"div",21)(3092,"span",22),e(3093," field"),o(3094,"br"),t()()(),i(3095,"td",23)(3096,"code",40),e(3097,"string"),t()(),i(3098,"td",26)(3099,"p"),e(3100,"Coluna que ser\xE1 utilizada pelo totalizador."),t()()(),i(3101,"tr",19)(3102,"td",20)(3103,"div",21)(3104,"span",22),e(3105," label"),o(3106,"br"),t()()(),i(3107,"td",23)(3108,"code",40),e(3109,"string"),t()(),i(3110,"td",26)(3111,"em")(3112,"strong"),e(3113,"(opcional)"),t()(),i(3114,"p"),e(3115,"Texto que ser\xE1 exibido junto ao resultado."),t()()()()(),i(3116,"po-accordion-item",77)(3117,"h4",9)(3118,"code"),e(3119,"ThfGridColumnSort"),t()(),i(3120,"div",10)(3121,"p"),e(3122,"Interface para definir a ordena\xE7\xE3o das colunas ("),i(3123,"strong"),e(3124,"t-sort"),t(),e(3125,")."),t()(),i(3126,"h4",15),e(3127,"Propriedades"),t(),i(3128,"table",16)(3129,"tr",17)(3130,"th",18),e(3131,"Nome"),t(),i(3132,"th",18),e(3133,"Tipo"),t(),i(3134,"th",18),e(3135,"Descri\xE7\xE3o"),t()(),i(3136,"tr",19)(3137,"td",20)(3138,"div",21)(3139,"span",22),e(3140," dir"),o(3141,"br"),t()()(),i(3142,"td",23)(3143,"code",78),e(3144,"'asc' "),t(),i(3145,"code",79),e(3146," 'desc'"),t()(),i(3147,"td",26)(3148,"em")(3149,"strong"),e(3150,"(opcional)"),t()(),i(3151,"p"),e(3152,"Dire\xE7\xE3o da coluna:"),t(),i(3153,"ul")(3154,"li")(3155,"code"),e(3156,"asc"),t()(),i(3157,"li")(3158,"code"),e(3159,"desc"),t()()()()(),i(3160,"tr",19)(3161,"td",20)(3162,"div",21)(3163,"span",22),e(3164," field"),o(3165,"br"),t()()(),i(3166,"td",23)(3167,"code",40),e(3168,"string"),t()(),i(3169,"td",26)(3170,"p"),e(3171,"Coluna"),t()()()()(),i(3172,"po-accordion-item",80)(3173,"h4",9)(3174,"code"),e(3175,"ThfGridColumn"),t()(),i(3176,"div",10)(3177,"p"),e(3178,"Interface para configura\xE7\xE3o das colunas ("),i(3179,"strong"),e(3180,"t-columns"),t(),e(3181,")."),t()(),i(3182,"h4",15),e(3183,"Propriedades"),t(),i(3184,"table",16)(3185,"tr",17)(3186,"th",18),e(3187,"Nome"),t(),i(3188,"th",18),e(3189,"Tipo"),t(),i(3190,"th",18),e(3191,"Descri\xE7\xE3o"),t()(),i(3192,"tr",19)(3193,"td",20)(3194,"div",21)(3195,"span",22),e(3196," action"),o(3197,"br"),t()()(),i(3198,"td",23)(3199,"code",27),e(3200,"Function"),t()(),i(3201,"td",26)(3202,"em")(3203,"strong"),e(3204,"(opcional)"),t()(),i(3205,"p"),e(3206,"Define uma a\xE7\xE3o na coluna quando o tipo da coluna for "),i(3207,"code"),e(3208,"link"),t(),e(3209," ou "),i(3210,"code"),e(3211,"icon"),t(),e(3212,"."),t(),i(3213,"blockquote")(3214,"p"),e(3215,"Quando for do tipo "),i(3216,"code"),e(3217,"link"),t(),e(3218,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),t()(),i(3219,"blockquote")(3220,"p"),e(3221,"Quando for do tipo "),i(3222,"code"),e(3223,"icon"),t(),e(3224," enviar\xE1 o objeto completo da linha e o segundo par\xE2metro ser\xE1 a defini\xE7\xE3o da coluna."),t()()()(),i(3225,"tr",19)(3226,"td",20)(3227,"div",21)(3228,"span",22),e(3229," boolean"),o(3230,"br"),t()()(),i(3231,"td",23)(3232,"code",81),e(3233,"PoTableBoolean"),t()(),i(3234,"td",26)(3235,"em")(3236,"strong"),e(3237,"(opcional)"),t()(),i(3238,"p"),e(3239,"Define um objeto do tipo "),i(3240,"code"),e(3241,"PoTableBoolean"),t(),e(3242," para as colunas do tipo "),i(3243,"em"),e(3244,"boolean"),t(),e(3245,". Por exemplo:"),t(),i(3246,"pre")(3247,"code"),e(3248,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}`),t()(),i(3249,"blockquote")(3250,"p"),e(3251,"Caso n\xE3o seja definido um objeto para colunas do tipo "),i(3252,"em"),e(3253,"boolean"),t(),e(3254,`,
esta exibir\xE1 por padr\xE3o `),i(3255,"code"),e(3256,"Sim"),t(),e(3257," e "),i(3258,"code"),e(3259,"N\xE3o"),t(),e(3260," de acordo com os valores "),i(3261,"em"),e(3262,"booleanos"),t(),e(3263,"."),t()()()(),i(3264,"tr",19)(3265,"td",20)(3266,"div",21)(3267,"span",22),e(3268," booleanFalse"),o(3269,"br"),t()()(),i(3270,"td",23)(3271,"code",40),e(3272,"string"),t()(),i(3273,"td",26)(3274,"em")(3275,"strong"),e(3276,"(opcional)"),t()(),i(3277,"p"),e(3278,"Texto exibido quando o valor da coluna for "),i(3279,"em"),e(3280,"false"),t(),e(3281,"."),t()()(),i(3282,"tr",19)(3283,"td",20)(3284,"div",21)(3285,"span",22),e(3286," booleanTrue"),o(3287,"br"),t()()(),i(3288,"td",23)(3289,"code",40),e(3290,"string"),t()(),i(3291,"td",26)(3292,"em")(3293,"strong"),e(3294,"(opcional)"),t()(),i(3295,"p"),e(3296,"Texto exibido quando o valor da coluna for "),i(3297,"em"),e(3298,"true"),t(),e(3299,"."),t()()(),i(3300,"tr",19)(3301,"td",20)(3302,"div",21)(3303,"span",22),e(3304," color"),o(3305,"br"),t()()(),i(3306,"td",23)(3307,"code",40),e(3308,"string "),t(),i(3309,"code",27),e(3310," Function"),t()(),i(3311,"td",26)(3312,"em")(3313,"strong"),e(3314,"(opcional)"),t()(),i(3315,"p"),e(3316,"Define a cor que ser\xE1 aplicada no conte\xFAdo da coluna."),t(),i(3317,"p"),e(3318,"Valores v\xE1lidos:"),t(),i(3319,"ul")(3320,"li"),o(3321,"span",82),i(3322,"code"),e(3323,"color-01"),t()(),i(3324,"li"),o(3325,"span",83),i(3326,"code"),e(3327,"color-02"),t()(),i(3328,"li"),o(3329,"span",84),i(3330,"code"),e(3331,"color-03"),t()(),i(3332,"li"),o(3333,"span",85),i(3334,"code"),e(3335,"color-04"),t()(),i(3336,"li"),o(3337,"span",86),i(3338,"code"),e(3339,"color-05"),t()(),i(3340,"li"),o(3341,"span",87),i(3342,"code"),e(3343,"color-06"),t()(),i(3344,"li"),o(3345,"span",88),i(3346,"code"),e(3347,"color-07"),t()(),i(3348,"li"),o(3349,"span",89),i(3350,"code"),e(3351,"color-08"),t()(),i(3352,"li"),o(3353,"span",90),i(3354,"code"),e(3355,"color-09"),t()(),i(3356,"li"),o(3357,"span",91),i(3358,"code"),e(3359,"color-10"),t()(),i(3360,"li"),o(3361,"span",92),i(3362,"code"),e(3363,"color-11"),t()(),i(3364,"li"),o(3365,"span",93),i(3366,"code"),e(3367,"color-12"),t()()(),i(3368,"blockquote")(3369,"p"),e(3370,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),t()(),i(3371,"pre")(3372,"code"),e(3373,"(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }"),t()(),i(3374,"blockquote")(3375,"p"),e(3376,"\xC9 poss\xEDvel tamb\xE9m us\xE1-la na coluna do tipo "),i(3377,"code"),e(3378,"icons"),t(),e(3379,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),t()(),i(3380,"pre")(3381,"code"),e(3382,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},`),t()()()(),i(3383,"tr",19)(3384,"td",20)(3385,"div",21)(3386,"span",22),e(3387," detail"),o(3388,"br"),t()()(),i(3389,"td",23)(3390,"code",94),e(3391,"PoTableDetail"),t()(),i(3392,"td",26)(3393,"em")(3394,"strong"),e(3395,"(opcional)"),t()(),i(3396,"p"),e(3397,"Define um objeto que segue a interface "),i(3398,"code"),e(3399,"PoTableDetail"),t(),e(3400,", para as colunas de detalhes. Por exemplo:"),t(),i(3401,"pre")(3402,"code"),e(3403,"{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }"),t()()()(),i(3404,"tr",19)(3405,"td",20)(3406,"div",21)(3407,"span",22),e(3408," disabled"),o(3409,"br"),t()()(),i(3410,"td",23)(3411,"code",27),e(3412,"Function"),t()(),i(3413,"td",26)(3414,"em")(3415,"strong"),e(3416,"(opcional)"),t()(),i(3417,"p"),e(3418,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),i(3419,"em"),e(3420,"link"),t(),e(3421," e sua a\xE7\xE3o."),t(),i(3422,"blockquote")(3423,"p"),e(3424,"Propriedade dispon\xEDvel nas colunas do tipo "),i(3425,"code"),e(3426,"link"),t(),e(3427,"."),t()()()(),i(3428,"tr",19)(3429,"td",20)(3430,"div",21)(3431,"span",22),e(3432," editProperties"),o(3433,"br"),t()()(),i(3434,"td",23)(3435,"code",95),e(3436,"CustomEditProperties"),t()(),i(3437,"td",26)(3438,"em")(3439,"strong"),e(3440,"(opcional)"),t()(),i(3441,"p"),e(3442,"Propriedade para customizar as colunas edit\xE1veis"),t()()(),i(3443,"tr",19)(3444,"td",20)(3445,"div",21)(3446,"span",22),e(3447," fixed"),o(3448,"br"),t()()(),i(3449,"td",23)(3450,"code",24),e(3451,"boolean"),t()(),i(3452,"td",26)(3453,"em")(3454,"strong"),e(3455,"(opcional)"),t()(),i(3456,"p"),e(3457,"Propriedade para fixar a coluna inicialmente."),t(),i(3458,"blockquote")(3459,"p"),e(3460,`No momento, \xE9 poss\xEDvel fixar apenas 2 colunas e garantir o funcionamento correto.
Caso a coluna de a\xE7\xF5es esteja fixa, \xE9 poss\xEDvel fixar somente 1 coluna corretamente.`),t()()()(),i(3461,"tr",19)(3462,"td",20)(3463,"div",21)(3464,"span",22),e(3465," format"),o(3466,"br"),t()()(),i(3467,"td",23)(3468,"code",40),e(3469,"string"),t()(),i(3470,"td",26)(3471,"em")(3472,"strong"),e(3473,"(opcional)"),t()(),i(3474,"p"),e(3475,"Formato de exibi\xE7\xE3o do valor da coluna."),t(),i(3476,"table")(3477,"thead")(3478,"tr")(3479,"th"),e(3480,"Formata\xE7\xE3o"),t(),i(3481,"th"),e(3482,"Type da Coluna"),t(),i(3483,"th"),e(3484,"Descri\xE7\xE3o"),t(),i(3485,"th"),e(3486,"Exemplos"),t()()(),i(3487,"tbody")(3488,"tr")(3489,"td"),e(3490,"Monet\xE1rio"),t(),i(3491,"td")(3492,"code"),e(3493,"currency"),t()(),i(3494,"td"),e(3495,"Formato para valores monet\xE1rios. Espera um c\xF3digo de moeda no padr\xE3o ISO 4217, e caso n\xE3o informado, ser\xE1 utilizado "),i(3496,"code"),e(3497,"'USD'"),t(),e(3498," por padr\xE3o"),t(),i(3499,"td")(3500,"code"),e(3501,"'BRL'"),t(),e(3502,", "),i(3503,"code"),e(3504,"'USD'"),t(),e(3505,", "),i(3506,"code"),e(3507,"'EUR'"),t(),e(3508,", "),i(3509,"code"),e(3510,"'RUB'"),t()()(),i(3511,"tr")(3512,"td"),e(3513,"Data"),t(),i(3514,"td")(3515,"code"),e(3516,"date"),t()(),i(3517,"td"),e(3518,"Aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy), caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'"),t(),i(3519,"td")(3520,"code"),e(3521,"'dd/MM/yyyy'"),t(),e(3522,", "),i(3523,"code"),e(3524,"'dd-MM-yy'"),t(),e(3525,", "),i(3526,"code"),e(3527,"'mm/dd/yyyy'"),t()()(),i(3528,"tr")(3529,"td"),e(3530,"Hora"),t(),i(3531,"td")(3532,"code"),e(3533,"time"),t()(),i(3534,"td"),e(3535,"Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1 'HH:mm:ss'"),t(),i(3536,"td")(3537,"code"),e(3538,"'HH:mm'"),t(),e(3539,", "),i(3540,"code"),e(3541,"'HH:mm:ss.ffffff'"),t(),e(3542,", "),i(3543,"code"),e(3544,"'HH:mm:ss.ff'"),t(),e(3545,", "),i(3546,"code"),e(3547,"'mm:ss.fff'"),t()()(),i(3548,"tr")(3549,"td"),e(3550,"N\xFAmero"),t(),i(3551,"td")(3552,"code"),e(3553,"number"),t()(),i(3554,"td"),e(3555,"Aceita um valor seguindo o padr\xE3o "),i(3556,"a",96)(3557,"strong"),e(3558,"DecimalPipe"),t()(),e(3559," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original."),t(),i(3560,"td")(3561,"code"),e(3562,"'1.2-5'"),t(),e(3563," (ex.: "),i(3564,"code"),e(3565,"50"),t(),e(3566," \u2192 "),i(3567,"code"),e(3568,"50.00"),t(),e(3569,")"),t()()()(),i(3570,"p"),e(3571,"Observa\xE7\xE3o: caso n\xE3o seja informado um formato, o valor ser\xE1 exibido em sua forma original."),t(),i(3572,"blockquote")(3573,"p"),e(3574,`Na formata\xE7\xE3o do tipo currency, caso o valor informado seja diferente do padr\xE3o ISO 4217, ser\xE1 exibido o alerta "Currency formatting failed. Using fallback." no console do navegador.
Exemplos de formato inv\xE1lido: 'ABCD', '123'.`),t()()()(),i(3575,"tr",19)(3576,"td",20)(3577,"div",21)(3578,"span",22),e(3579," icons"),o(3580,"br"),t()()(),i(3581,"td",23)(3582,"code",97),e(3583,"Array<PoTableColumnIcon>"),t()(),i(3584,"td",26)(3585,"em")(3586,"strong"),e(3587,"(opcional)"),t()(),i(3588,"p"),e(3589,"Define um "),i(3590,"em"),e(3591,"array"),t(),e(3592," de objetos para colunas de \xEDcones que ir\xE1 sobrepor os valores como "),i(3593,"code"),e(3594,"action"),t(),e(3595," e "),i(3596,"code"),e(3597,"color"),t(),e(3598,`
definidos na coluna, \xE0 partir do `),i(3599,"em"),e(3600,"value"),t(),e(3601," da "),i(3602,"a",98)(3603,"code"),e(3604,"PoTableColumnIcon"),t()(),e(3605,", por exemplo:"),t(),i(3606,"pre")(3607,"code"),e(3608,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},`),t()(),i(3609,"pre")(3610,"code"),e(3611,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...`),t()()()(),i(3612,"tr",19)(3613,"td",20)(3614,"div",21)(3615,"span",22),e(3616," key"),o(3617,"br"),t()()(),i(3618,"td",23)(3619,"code",24),e(3620,"boolean "),t(),i(3621,"code",52),e(3622," number"),t()(),i(3623,"td",26)(3624,"em")(3625,"strong"),e(3626,"(opcional)"),t()(),i(3627,"p"),e(3628,`Indica se a coluna faz parte da chave composta para exclus\xE3o de registros.
Pode ser do tipo num\xE9rico ou booleano. Os valores num\xE9ricos sempre ser\xE3o priorizados em rela\xE7\xE3o aos booleanos.
Para a exclus\xE3o, \xE9 necess\xE1rio que a `),i(3629,"code"),e(3630,"API"),t(),e(3631," esteja preparada para receber uma ou mais "),i(3632,"code"),e(3633,"keys"),t(),e(3634," concatenadas com pipe '|' para identifica\xE7\xE3o do registro. ex.: DELETE {end-point}/{keys}"),t(),i(3635,"blockquote")(3636,"p"),e(3637,`Exemplo de keys: [{ property: 'id', key: 1 }, { property: 'name', key: true }, { property: 'email', key: 2 }].
Resposta do exemplo: 'valor de id|valor de email|valor de name'`),t()()()(),i(3638,"tr",19)(3639,"td",20)(3640,"div",21)(3641,"span",22),e(3642," label"),o(3643,"br"),t()()(),i(3644,"td",23)(3645,"code",40),e(3646,"string"),t()(),i(3647,"td",26)(3648,"em")(3649,"strong"),e(3650,"(opcional)"),t()(),i(3651,"p"),e(3652,"Texto para t\xEDtulo da coluna."),t(),i(3653,"p"),e(3654,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(3655,"em"),e(3656,"label"),t(),e(3657," o valor da propriedade "),i(3658,"em"),e(3659,"property"),t(),e(3660," com a primeira letra em mai\xFAsculo."),t()()(),i(3661,"tr",19)(3662,"td",20)(3663,"div",21)(3664,"span",22),e(3665," labels"),o(3666,"br"),t()()(),i(3667,"td",23)(3668,"code",99),e(3669,"Array<PoTableColumnLabel>"),t()(),i(3670,"td",26)(3671,"em")(3672,"strong"),e(3673,"(opcional)"),t()(),i(3674,"p"),e(3675,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(3676,"code"),e(3677,"PoTableColumnLabel"),t(),e(3678," na qual devem ser definidas os labels. Por exemplo:"),t(),i(3679,"pre")(3680,"code"),e(3681,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}`),t()()()(),i(3682,"tr",19)(3683,"td",20)(3684,"div",21)(3685,"span",22),e(3686," link"),o(3687,"br"),t()()(),i(3688,"td",23)(3689,"code",40),e(3690,"string"),t()(),i(3691,"td",26)(3692,"em")(3693,"strong"),e(3694,"(opcional)"),t()(),i(3695,"p"),e(3696,"Define o nome da propriedade que conter\xE1 o "),i(3697,"code"),e(3698,"link"),t(),e(3699," a ser redirecionado."),t()()(),i(3700,"tr",19)(3701,"td",20)(3702,"div",21)(3703,"span",22),e(3704," locale"),o(3705,"br"),t()()(),i(3706,"td",23)(3707,"code",40),e(3708,"string"),t()(),i(3709,"td",26)(3710,"em")(3711,"strong"),e(3712,"(opcional)"),t()(),i(3713,"p"),e(3714,`Define a localidade a ser utilizada no modo de exibi\xE7\xE3o e edi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(3715,"a",100)(3716,"code"),e(3717,"I18n"),t()()(),i(3718,"p"),e(3719,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(3720,"pre")(3721,"code"),e(3722,`columnWithItems: Array<ThfGridColumn> = [
{
   property: 'currency',
   type: 'currency',
   locale: 'en'
},`),t()(),i(3723,"blockquote")(3724,"p"),e(3725,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(3726,"p"),e(3727,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(3728,"p"),e(3729,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(3730,"a",100)(3731,"code"),e(3732,"I18n"),t()()()(),i(3733,"p"),e(3734,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(3735,"pre")(3736,"code"),e(3737,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}`),t()(),i(3738,"blockquote")(3739,"p"),e(3740,"No modo de vis\xE3o, \xE9 compat\xEDvel com colunas dos tipos "),i(3741,"code"),e(3742,"number"),t(),e(3743," e "),i(3744,"code"),e(3745,"currency"),t(),e(3746,"."),t()(),i(3747,"blockquote")(3748,"p"),e(3749,"No modo edi\xE7\xE3o, a propriedade ser\xE1 repassada para os componentes que suportam a mesma."),t(),i(3750,"p")(3751,"strong"),e(3752,"Componentes compat\xEDveis"),t(),e(3753,": "),i(3754,"code"),e(3755,"decimal"),t()()()()(),i(3756,"tr",19)(3757,"td",20)(3758,"div",21)(3759,"span",22),e(3760," mask"),o(3761,"br"),t()()(),i(3762,"td",23)(3763,"code",40),e(3764,"string"),t()(),i(3765,"td",26)(3766,"em")(3767,"strong"),e(3768,"(opcional)"),t()(),i(3769,"p"),e(3770,`Indica uma m\xE1scara para a coluna
Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
Aplic\xE1vel nas colunas do tipo `),i(3771,"code"),e(3772,"number"),t(),e(3773," e "),i(3774,"code"),e(3775,"string"),t(),e(3776,`
Nas colunas do tipo `),i(3777,"code"),e(3778,"number"),t(),e(3779," a propriedade "),i(3780,"code"),e(3781,"mask"),t(),e(3782," ter\xE1 prioridade sob "),i(3783,"code"),e(3784,"format"),t()()()(),i(3785,"tr",19)(3786,"td",20)(3787,"div",21)(3788,"span",22),e(3789," property"),o(3790,"br"),t()()(),i(3791,"td",23)(3792,"code",40),e(3793,"string"),t()(),i(3794,"td",26)(3795,"p"),e(3796,"Identificador da coluna."),t()()(),i(3797,"tr",19)(3798,"td",20)(3799,"div",21)(3800,"span",22),e(3801," resizable"),o(3802,"br"),t()()(),i(3803,"td",23)(3804,"code",24),e(3805,"boolean"),t()(),i(3806,"td",26)(3807,"em")(3808,"strong"),e(3809,"(opcional)"),t()(),i(3810,"p"),e(3811,"Define se a coluna pode ser redimensionada pelo usu\xE1rio."),t()()(),i(3812,"tr",19)(3813,"td",20)(3814,"div",21)(3815,"span",22),e(3816," sortable"),o(3817,"br"),t()()(),i(3818,"td",23)(3819,"code",24),e(3820,"boolean"),t()(),i(3821,"td",26)(3822,"em")(3823,"strong"),e(3824,"(opcional)"),t()(),i(3825,"p"),e(3826,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),t()()(),i(3827,"tr",19)(3828,"td",20)(3829,"div",21)(3830,"span",22),e(3831," subtitles"),o(3832,"br"),t()()(),i(3833,"td",23)(3834,"code",101),e(3835,"Array<PoTableSubtitleColumn>"),t()(),i(3836,"td",26)(3837,"em")(3838,"strong"),e(3839,"(opcional)"),t()(),i(3840,"p"),e(3841,"Define um array de objetos para as colunas de legenda. Onde, "),i(3842,"code"),e(3843,"subtitles"),t(),e(3844,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),t(),i(3845,"pre")(3846,"code"),e(3847,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', content: '2' }
}`),t()(),i(3848,"p"),e(3849,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),t()()(),i(3850,"tr",19)(3851,"td",20)(3852,"div",21)(3853,"span",22),e(3854," tooltip"),o(3855,"br"),t()()(),i(3856,"td",23)(3857,"code",40),e(3858,"string"),t()(),i(3859,"td",26)(3860,"em")(3861,"strong"),e(3862,"(opcional)"),t()(),i(3863,"p"),e(3864,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),i(3865,"em"),e(3866,"mouse"),t(),e(3867," sobre um texto."),t(),i(3868,"blockquote")(3869,"p"),e(3870,"O tooltip s\xF3 ser\xE1 vis\xEDvel se for uma coluna do tipo "),i(3871,"em"),e(3872,"link"),t(),e(3873,"."),t()(),i(3874,"blockquote")(3875,"p"),e(3876,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),i(3877,"em"),e(3878,"tooltip"),t(),e(3879," e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula."),t()()()(),i(3880,"tr",19)(3881,"td",20)(3882,"div",21)(3883,"span",22),e(3884," type"),o(3885,"br"),t()()(),i(3886,"td",23)(3887,"code",40),e(3888,"string"),t()(),i(3889,"td",26)(3890,"em")(3891,"strong"),e(3892,"(opcional)"),t()(),i(3893,"p"),e(3894,"Tipo da coluna."),t(),i(3895,"p"),e(3896,"Valores v\xE1lidos:"),t(),i(3897,"ul")(3898,"li")(3899,"p")(3900,"code"),e(3901,"boolean"),t(),e(3902,": Exibir\xE1 por padr\xE3o "),i(3903,"code"),e(3904,"Sim"),t(),e(3905," e "),i(3906,"code"),e(3907,"N\xE3o"),t(),e(3908," de acordo com os valores "),i(3909,"em"),e(3910,"booleanos"),t(),e(3911,"."),t(),i(3912,"blockquote")(3913,"p"),e(3914,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),i(3915,"code"),e(3916,"boolean"),t(),e(3917," desta interface."),t()()(),i(3918,"li")(3919,"p")(3920,"code"),e(3921,"currency"),t(),e(3922,": valores monet\xE1rios."),t()(),i(3923,"li")(3924,"p")(3925,"code"),e(3926,"date"),t(),e(3927,": valor de datas."),t(),i(3928,"ul")(3929,"li"),e(3930,"Aceita os tipos "),i(3931,"em"),e(3932,"string"),t(),e(3933," e "),i(3934,"em"),e(3935,"Date"),t(),e(3936,` padr\xE3o do Javascript,
por exemplo: `),i(3937,"code"),e(3938,"'2017-11-28'"),t(),e(3939," ou "),i(3940,"code"),e(3941,"new Date(2017, 10, 28)"),t(),e(3942,"."),t()()(),i(3943,"li")(3944,"p")(3945,"code"),e(3946,"dateTime"),t(),e(3947,": valor de data com hor\xE1rio."),t(),i(3948,"ul")(3949,"li"),e(3950,"Aceita o tipo "),i(3951,"em"),e(3952,"string"),t(),e(3953," no formato "),i(3954,"strong"),e(3955,"ISO-8601"),t(),e(3956," extendido "),i(3957,"strong"),e(3958,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(3959,`
e o tipo `),i(3960,"em"),e(3961,"Date"),t(),e(3962," padr\xE3o do Javascript, por exemplo: "),i(3963,"code"),e(3964,"'2017-11-28T00:00:00-02:00'"),t(),e(3965," ou "),i(3966,"code"),e(3967,"new Date(2017, 10, 28)"),t(),e(3968,"."),t()()(),i(3969,"li")(3970,"p")(3971,"code"),e(3972,"detail"),t(),e(3973,": array de objetos para o master-detail."),t(),i(3974,"ul")(3975,"li"),e(3976,"Incompat\xEDvel com "),i(3977,"code"),e(3978,"virtual-scroll"),t(),e(3979,", que requer altura fixa nas linhas."),t()()(),i(3980,"li")(3981,"p")(3982,"code"),e(3983,"icon"),t(),e(3984,": "),i(3985,"em"),e(3986,"array"),t(),e(3987," de "),i(3988,"em"),e(3989,"string"),t(),e(3990," ou objetos para a coluna de \xEDcones."),t()(),i(3991,"li")(3992,"p")(3993,"code"),e(3994,"label"),t(),e(3995,": texto com destaque."),t()(),i(3996,"li")(3997,"p")(3998,"code"),e(3999,"link"),t(),e(4e3,": habilita link na coluna para a\xE7\xE3o ou navega\xE7\xE3o."),t()(),i(4001,"li")(4002,"p")(4003,"code"),e(4004,"number"),t(),e(4005,": valores num\xE9ricos."),t()(),i(4006,"li")(4007,"p")(4008,"code"),e(4009,"string"),t(),e(4010,": textos."),t()(),i(4011,"li")(4012,"p")(4013,"code"),e(4014,"subtitle"),t(),e(4015,": array de objetos para a coluna de legenda."),t()(),i(4016,"li")(4017,"p")(4018,"code"),e(4019,"time"),t(),e(4020,": valor de hor\xE1rio."),t(),i(4021,"ul")(4022,"li"),e(4023,"Aceita o tipo "),i(4024,"em"),e(4025,"string"),t(),e(4026," nos formatos "),i(4027,"strong"),e(4028,"'HH:mm:ss'"),t(),e(4029," ou "),i(4030,"strong"),e(4031,"'HH:mm:ss.ffffff'"),t(),e(4032,", por exemplo: "),i(4033,"code"),e(4034,"'23:12:45'"),t(),e(4035,"."),t()()(),i(4036,"li")(4037,"p")(4038,"code"),e(4039,"cellTemplate"),t(),e(4040,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),i(4041,"a",102),e(4042,"PoTableCellTemplate"),t(),e(4043,"."),t()(),i(4044,"li")(4045,"p")(4046,"code"),e(4047,"columnTemplate"),t(),e(4048,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),i(4049,"a",103),e(4050,"PoTableColumnTemplate"),t(),e(4051,"."),t()()()()(),i(4052,"tr",19)(4053,"td",20)(4054,"div",21)(4055,"span",22),e(4056," visible"),o(4057,"br"),t()()(),i(4058,"td",23)(4059,"code",24),e(4060,"boolean"),t()(),i(4061,"td",26)(4062,"em")(4063,"strong"),e(4064,"(opcional)"),t()(),i(4065,"p"),e(4066,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(4067,"strong"),e(4068,"gerenciador de colunas"),t(),e(4069,"."),t(),i(4070,"blockquote")(4071,"p"),e(4072,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(4073,"code"),e(4074,"p-max-columns"),t(),e(4075,"."),t()()()(),i(4076,"tr",19)(4077,"td",20)(4078,"div",21)(4079,"span",22),e(4080," width"),o(4081,"br"),t()()(),i(4082,"td",23)(4083,"code",52),e(4084,"number "),t(),i(4085,"code",40),e(4086," string"),t()(),i(4087,"td",26)(4088,"em")(4089,"strong"),e(4090,"(opcional)"),t()(),i(4091,"p"),e(4092,"Caso seja passado o formato "),i(4093,"code"),e(4094,"number"),t(),e(4095,`, ser\xE1 aplicado em pixels.
A largura da coluna pode ser informada em pixels ou porcentagem.`),t(),i(4096,"blockquote")(4097,"p"),e(4098,`Exemplo Pixel: 100.
Exemplo Porcentagem: '100%'.
Apesar de atribuir largura as colunas da grid \xE9 importante ressaltar
que o componente recalcula as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis na grid,
podendo alterar as dimens\xF5es passadas proporcionalmente.`),t()()()()()(),i(4099,"po-accordion-item",104)(4100,"h4",9)(4101,"code"),e(4102,"CustomEditProperties"),t()(),i(4103,"div",10)(4104,"p"),e(4105,"Interface para configura\xE7\xE3o das colunas edit\xE1veis ("),i(4106,"strong"),e(4107,"editProperties"),t(),e(4108,`).
Al\xE9m dessas propriedades, herda as defini\xE7\xF5es da interface
`),i(4109,"a",105),e(4110,"PoDynamicFormField"),t(),e(4111,`,
permitindo definir campos de entrada que ser\xE3o criados dinamicamente.`),t()(),i(4112,"h4",15),e(4113,"Propriedades"),t(),i(4114,"table",16)(4115,"tr",17)(4116,"th",18),e(4117,"Nome"),t(),i(4118,"th",18),e(4119,"Tipo"),t(),i(4120,"th",18),e(4121,"Descri\xE7\xE3o"),t()(),i(4122,"tr",19)(4123,"td",20)(4124,"div",21)(4125,"span",22),e(4126," componentEditable"),o(4127,"br"),t()()(),i(4128,"td",23)(4129,"code",106),e(4130,"'input' "),t(),i(4131,"code",107),e(4132," 'number' "),t(),i(4133,"code",108),e(4134," 'select' "),t(),i(4135,"code",109),e(4136," 'datepicker' "),t(),i(4137,"code",110),e(4138," 'switch' "),t(),i(4139,"code",111),e(4140," 'combo' "),t(),i(4141,"code",112),e(4142," 'multiselect' "),t(),i(4143,"code",113),e(4144," 'decimal' "),t(),i(4145,"code",114),e(4146," 'checkbox' "),t(),i(4147,"code",115),e(4148," 'lookup'"),t()(),i(4149,"td",26)(4150,"em")(4151,"strong"),e(4152,"(opcional)"),t()(),i(4153,"p"),e(4154,"Propriedade para escolher qual componente ser\xE1 exibido para editar."),t(),i(4155,"blockquote")(4156,"p"),e(4157,"O valor padr\xE3o \xE9 "),i(4158,"code"),e(4159,"input"),t(),e(4160,"."),t()()()(),i(4161,"tr",19)(4162,"td",20)(4163,"div",21)(4164,"span",22),e(4165," componentSize"),o(4166,"br"),t()()(),i(4167,"td",23)(4168,"code",116),e(4169,"'small' "),t(),i(4170,"code",117),e(4171," 'medium' "),t(),i(4172,"code",118),e(4173," 'large'"),t()(),i(4174,"td",26)(4175,"em")(4176,"strong"),e(4177,"(opcional)"),t()(),i(4178,"p"),e(4179,"Define o tamanho dos componentes de formul\xE1rio no grid conforme suas respectivas documenta\xE7\xF5es:"),t(),i(4180,"ul")(4181,"li")(4182,"code"),e(4183,"small"),t(),e(4184,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(4185,"li")(4186,"code"),e(4187,"medium"),t(),e(4188,": aplica a medida medium de cada componente."),t(),i(4189,"li")(4190,"code"),e(4191,"large"),t(),e(4192,": aplica a medida large de cada componente (dispon\xEDvel para "),i(4193,"code"),e(4194,"po-checkbox"),t(),e(4195," e "),i(4196,"code"),e(4197,"po-radio-group"),t(),e(4198,")."),i(4199,"blockquote")(4200,"p"),e(4201,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(4202,"code"),e(4203,"medium"),t(),e(4204,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(4205,"a",41),e(4206,"po-theme"),t(),e(4207,"."),t()()()()()(),i(4208,"tr",19)(4209,"td",20)(4210,"div",21)(4211,"span",22),e(4212," controlValueWithLabel"),o(4213,"br"),t()()(),i(4214,"td",23)(4215,"code",24),e(4216,"boolean"),t()(),i(4217,"td",26)(4218,"em")(4219,"strong"),e(4220,"(opcional)"),t()(),i(4221,"p"),e(4222,"Determina se os componentes "),i(4223,"code"),e(4224,"select"),t(),e(4225,", "),i(4226,"code"),e(4227,"combo"),t(),e(4228,", "),i(4229,"code"),e(4230,"multiselect"),t(),e(4231," e "),i(4232,"code"),e(4233,"thf-lookup"),t(),e(4234,`
devem exibir o `),i(4235,"code"),e(4236,"label"),t(),e(4237," ao inv\xE9s de "),i(4238,"code"),e(4239,"value"),t(),e(4240," na grid"),t()()(),i(4241,"tr",19)(4242,"td",20)(4243,"div",21)(4244,"span",22),e(4245," disabled"),o(4246,"br"),t()()(),i(4247,"td",23)(4248,"code",24),e(4249,"boolean "),t(),i(4250,"code",119),e(4251," ((rowData: any, column?: ThfGridColumn) => boolean)"),t()(),i(4252,"td",26)(4253,"em")(4254,"strong"),e(4255,"(opcional)"),t()(),i(4256,"p"),e(4257,`Desabilita o campo. Pode ser um valor booleano fixo ou uma fun\xE7\xE3o din\xE2mica
que recebe os dados da linha e retorna um booleano`),t()()(),i(4258,"tr",19)(4259,"td",20)(4260,"div",21)(4261,"span",22),e(4262," fieldFormat"),o(4263,"br"),t()()(),i(4264,"td",23)(4265,"code",49),e(4266,"Array<string> "),t(),i(4267,"code",120),e(4268," ((item: any) => string)"),t()(),i(4269,"td",26)(4270,"em")(4271,"strong"),e(4272,"(opcional)"),t()(),i(4273,"p"),e(4274,"Formato de exibi\xE7\xE3o do campo."),t(),i(4275,"p"),e(4276,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(4277,"em"),e(4278,"string"),t(),e(4279," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(4280,"pre")(4281,"code",31),e(4282,`fieldFormat(obj) {
  return \`\${obj.id} (\${obj.name})\`;
}


Ou pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo.
Nessa caso, ser\xE1 utilizado \` - \` como separador, por exemplo:

\`\`\`typescript
 fieldFormat]="['id','nickname']"`),t()(),i(4283,"blockquote")(4284,"p"),e(4285,"Componente compat\xEDvel: "),i(4286,"code"),e(4287,"thf-lookup"),t(),e(4288,"."),t()()()(),i(4289,"tr",19)(4290,"td",20)(4291,"div",21)(4292,"span",22),e(4293," filterSearchSelect"),o(4294,"br"),t()()(),i(4295,"td",23)(4296,"code",121),e(4297,"Array<ThfLookupFilterSearchSelect>"),t()(),i(4298,"td",26)(4299,"em")(4300,"strong"),e(4301,"(opcional)"),t()(),i(4302,"p"),e(4303,"Propriedade para listar as op\xE7\xF5es de filtro do po-search no modal."),t(),i(4304,"blockquote")(4305,"p"),e(4306,"Componente compat\xEDvel: "),i(4307,"code"),e(4308,"thf-lookup"),t(),e(4309,"."),t()()()(),i(4310,"tr",19)(4311,"td",20)(4312,"div",21)(4313,"span",22),e(4314," keysLabel"),o(4315,"br"),t()()(),i(4316,"td",23)(4317,"code",122),e(4318,"Array<ThfLookupKeysLabel>"),t()(),i(4319,"td",26)(4320,"em")(4321,"strong"),e(4322,"(opcional)"),t()(),i(4323,"p"),e(4324,"Propriedade para exibir at\xE9 3 propriedades por valor no listbox."),t(),i(4325,"blockquote")(4326,"p"),e(4327,"Componente compat\xEDvel: "),i(4328,"code"),e(4329,"thf-lookup"),t(),e(4330,"."),t()()()(),i(4331,"tr",19)(4332,"td",20)(4333,"div",21)(4334,"span",22),e(4335," locale"),o(4336,"br"),t()()(),i(4337,"td",23)(4338,"code",40),e(4339,"string"),t()(),i(4340,"td",26)(4341,"em")(4342,"strong"),e(4343,"(opcional)"),t()(),i(4344,"p"),e(4345,`Define a localidade a ser utilizada no modo de edi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(4346,"a",100)(4347,"code"),e(4348,"I18n"),t()()(),i(4349,"p"),e(4350,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(4351,"pre")(4352,"code"),e(4353,`columnWithItems: Array<ThfGridColumn> = [
 {
   property: 'currency',
   type: 'currency',
   editProperties: {
     componentEditable: 'decimal',
     locale: 'en'
   },
},`),t()(),i(4354,"blockquote")(4355,"p"),e(4356,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(4357,"p"),e(4358,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(4359,"p"),e(4360,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(4361,"a",100)(4362,"code"),e(4363,"I18n"),t()()()(),i(4364,"p"),e(4365,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(4366,"pre")(4367,"code"),e(4368,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}`),t()(),i(4369,"blockquote")(4370,"p"),e(4371,"A propriedade ser\xE1 repassada para os componentes que suportam a mesma."),t(),i(4372,"p")(4373,"strong"),e(4374,"Componentes compat\xEDveis"),t(),e(4375,": "),i(4376,"code"),e(4377,"decimal"),t()()(),i(4378,"blockquote")(4379,"p"),e(4380,"Caso seja definida em conjunto com a propriedade "),i(4381,"code"),e(4382,"locale"),t(),e(4383," da coluna, o "),i(4384,"code"),e(4385,"editProperties.locale"),t(),e(4386," ter\xE1 prioridade ao habilitar a edi\xE7\xE3o de uma linha e o "),i(4387,"code"),e(4388,"locale"),t(),e(4389," da coluna ser\xE1 utilizado apenas para exibi\xE7\xE3o."),t()()()(),i(4390,"tr",19)(4391,"td",20)(4392,"div",21)(4393,"span",22),e(4394," lookupGridProperties"),o(4395,"br"),t()()(),i(4396,"td",23)(4397,"code",123),e(4398,"ThfLookupGridProperties"),t()(),i(4399,"td",26)(4400,"em")(4401,"strong"),e(4402,"(opcional)"),t()(),i(4403,"p"),e(4404,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup."),t(),i(4405,"blockquote")(4406,"p")(4407,"strong"),e(4408,"Componentes compat\xEDveis"),t(),e(4409,": thf-lookup`"),t()()()(),i(4410,"tr",19)(4411,"td",20)(4412,"div",21)(4413,"span",22),e(4414," onBlur"),o(4415,"br"),t()()(),i(4416,"td",23)(4417,"code",27),e(4418,"Function"),t()(),i(4419,"td",26)(4420,"em")(4421,"strong"),e(4422,"(opcional)"),t()(),i(4423,"p"),e(4424,"Evento disparado ao sair do campo."),t(),i(4425,"blockquote")(4426,"p")(4427,"strong"),e(4428,"Componentes compat\xEDveis"),t(),e(4429,": "),i(4430,"code"),e(4431,"po-input"),t(),e(4432,", "),i(4433,"code"),e(4434,"po-number"),t(),e(4435,", "),i(4436,"code"),e(4437,"po-decimal"),t(),e(4438,", "),i(4439,"code"),e(4440,"po-datepicker"),t(),e(4441,", "),i(4442,"code"),e(4443,"po-select"),t(),e(4444,", "),i(4445,"code"),e(4446,"po-combo"),t(),e(4447,", "),i(4448,"code"),e(4449,"po-multiselect"),t(),e(4450,", "),i(4451,"code"),e(4452,"po-checkbox"),t()()()()(),i(4453,"tr",19)(4454,"td",20)(4455,"div",21)(4456,"span",22),e(4457," onChange"),o(4458,"br"),t()()(),i(4459,"td",23)(4460,"code",124),e(4461,"(value: any) => void"),t()(),i(4462,"td",26)(4463,"em")(4464,"strong"),e(4465,"(opcional)"),t()(),i(4466,"p"),e(4467,"Evento disparado ao alterar valor e deixar o campo."),t(),i(4468,"blockquote")(4469,"p")(4470,"strong"),e(4471,"Componentes compat\xEDveis"),t(),e(4472,": "),i(4473,"code"),e(4474,"po-input"),t(),e(4475,", "),i(4476,"code"),e(4477,"po-number"),t(),e(4478,", "),i(4479,"code"),e(4480,"po-decimal"),t(),e(4481,", "),i(4482,"code"),e(4483,"po-datepicker"),t(),e(4484,", "),i(4485,"code"),e(4486,"po-select"),t(),e(4487,", "),i(4488,"code"),e(4489,"po-switch"),t(),e(4490,", "),i(4491,"code"),e(4492,"po-combo"),t(),e(4493,", "),i(4494,"code"),e(4495,"po-multiselect"),t(),e(4496,", "),i(4497,"code"),e(4498,"po-checkbox"),t(),e(4499,", "),i(4500,"code"),e(4501,"thf-lookup"),t()()()()(),i(4502,"tr",19)(4503,"td",20)(4504,"div",21)(4505,"span",22),e(4506," onChangeModel"),o(4507,"br"),t()()(),i(4508,"td",23)(4509,"code",125),e(4510,"(model: any) => void"),t()(),i(4511,"td",26)(4512,"em")(4513,"strong"),e(4514,"(opcional)"),t()(),i(4515,"p"),e(4516,"Evento disparado ao alterar valor do model."),t(),i(4517,"blockquote")(4518,"p")(4519,"strong"),e(4520,"Componentes compat\xEDveis"),t(),e(4521,": "),i(4522,"code"),e(4523,"po-input"),t(),e(4524,", "),i(4525,"code"),e(4526,"po-number"),t(),e(4527,", "),i(4528,"code"),e(4529,"po-decimal"),t(),e(4530,", "),i(4531,"code"),e(4532,"po-select"),t(),e(4533,", "),i(4534,"code"),e(4535,"po-combo"),t(),e(4536,", "),i(4537,"code"),e(4538,"thf-lookup"),t()()()()(),i(4539,"tr",19)(4540,"td",20)(4541,"div",21)(4542,"span",22),e(4543," onEnter"),o(4544,"br"),t()()(),i(4545,"td",23)(4546,"code",27),e(4547,"Function"),t()(),i(4548,"td",26)(4549,"em")(4550,"strong"),e(4551,"(opcional)"),t()(),i(4552,"p"),e(4553,"Evento disparado ao entrar no campo."),t(),i(4554,"blockquote")(4555,"p")(4556,"strong"),e(4557,"Componentes compat\xEDveis"),t(),e(4558,": "),i(4559,"code"),e(4560,"po-input"),t(),e(4561,", "),i(4562,"code"),e(4563,"po-number"),t(),e(4564,", "),i(4565,"code"),e(4566,"po-decimal"),t()()()()(),i(4567,"tr",19)(4568,"td",20)(4569,"div",21)(4570,"span",22),e(4571," onError"),o(4572,"br"),t()()(),i(4573,"td",23)(4574,"code",126),e(4575,"(error: HttpErrorResponse) => void"),t()(),i(4576,"td",26)(4577,"em")(4578,"strong"),e(4579,"(opcional)"),t()(),i(4580,"p"),e(4581,"Callback disparado quando ocorre erro na requisi\xE7\xE3o de busca."),t(),i(4582,"blockquote")(4583,"p")(4584,"strong"),e(4585,"Componente compat\xEDvel"),t(),e(4586,": "),i(4587,"code"),e(4588,"thf-lookup"),t()()()()(),i(4589,"tr",19)(4590,"td",20)(4591,"div",21)(4592,"span",22),e(4593," onFocus"),o(4594,"br"),t()()(),i(4595,"td",23)(4596,"code",27),e(4597,"Function"),t()(),i(4598,"td",26)(4599,"em")(4600,"strong"),e(4601,"(opcional)"),t()(),i(4602,"p"),e(4603,"Callback disparado quando o campo recebe foco."),t(),i(4604,"blockquote")(4605,"p")(4606,"strong"),e(4607,"Componente compat\xEDvel"),t(),e(4608,": "),i(4609,"code"),e(4610,"thf-lookup"),t()()()()(),i(4611,"tr",19)(4612,"td",20)(4613,"div",21)(4614,"span",22),e(4615," onInputChange"),o(4616,"br"),t()()(),i(4617,"td",23)(4618,"code",124),e(4619,"(value: any) => void"),t()(),i(4620,"td",26)(4621,"em")(4622,"strong"),e(4623,"(opcional)"),t()(),i(4624,"p"),e(4625,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no campo de busca do componente. A fun\xE7\xE3o receber\xE1 como argumento o valor modificado."),t(),i(4626,"blockquote")(4627,"p")(4628,"strong"),e(4629,"Componente compat\xEDvel"),t(),e(4630,": "),i(4631,"code"),e(4632,"po-combo"),t()()()()(),i(4633,"tr",19)(4634,"td",20)(4635,"div",21)(4636,"span",22),e(4637," onSelected"),o(4638,"br"),t()()(),i(4639,"td",23)(4640,"code",127),e(4641,"(selection: any "),t(),i(4642,"code",128),e(4643," Array<any>) => void"),t()(),i(4644,"td",26)(4645,"em")(4646,"strong"),e(4647,"(opcional)"),t()(),i(4648,"p"),e(4649,"Callback disparado ao selecionar item(s)."),t(),i(4650,"blockquote")(4651,"p")(4652,"strong"),e(4653,"Componente compat\xEDvel"),t(),e(4654,": "),i(4655,"code"),e(4656,"thf-lookup"),t()()()()(),i(4657,"tr",19)(4658,"td",20)(4659,"div",21)(4660,"span",22),e(4661," readonly"),o(4662,"br"),t()()(),i(4663,"td",23)(4664,"code",24),e(4665,"boolean "),t(),i(4666,"code",119),e(4667," ((rowData: any, column?: ThfGridColumn) => boolean)"),t()(),i(4668,"td",26)(4669,"em")(4670,"strong"),e(4671,"(opcional)"),t()(),i(4672,"p"),e(4673,`Indica que o campo ser\xE1 somente leitura. Pode ser um valor booleano fixo
ou uma fun\xE7\xE3o din\xE2mica que recebe os dados da linha e retorna um booleano`),t()()(),i(4674,"tr",19)(4675,"td",20)(4676,"div",21)(4677,"span",22),e(4678," size"),o(4679,"br"),t()()(),i(4680,"td",23)(4681,"code",129),e(4682,"'sm' "),t(),i(4683,"code",130),e(4684," 'md' "),t(),i(4685,"code",131),e(4686," 'lg' "),t(),i(4687,"code",132),e(4688," 'xl' "),t(),i(4689,"code",133),e(4690," 'auto'"),t()(),i(4691,"td",26)(4692,"em")(4693,"strong"),e(4694,"(opcional)"),t()(),i(4695,"p"),e(4696,"Propriedade para definir o tamanho do modal."),t(),i(4697,"blockquote")(4698,"p"),e(4699,"Componente compat\xEDvel: "),i(4700,"code"),e(4701,"thf-lookup"),t(),e(4702,"."),t()()()()()(),i(4703,"po-accordion-item",134)(4704,"h4",9)(4705,"code"),e(4706,"ThfGridDeleteService"),t()(),i(4707,"div",10)(4708,"p"),e(4709,"Interface para excluir algum item via servi\xE7o."),t()(),i(4710,"table",63)(4711,"tr",19)(4712,"th",64)(4713,"div",21)(4714,"h4")(4715,"span",22),e(4716," deleteItem "),t()()()()(),i(4717,"tr",26)(4718,"td",26)(4719,"p"),e(4720,`M\xE9todo que ser\xE1 disparado ao excluir algum item, deve-se retornar
um `),i(4721,"em"),e(4722,"Observable"),t(),e(4723,"."),t()()()(),i(4724,"h5")(4725,"b"),e(4726,"Par\xE2metros"),t()(),i(4727,"table",16)(4728,"tr",17)(4729,"th",18),e(4730,"Nome"),t(),i(4731,"th",18),e(4732,"Tipo"),t(),i(4733,"th",18),e(4734,"Descri\xE7\xE3o"),t()(),i(4735,"tr",19)(4736,"td",20),e(4737," selectedRow"),t(),i(4738,"td",23)(4739,"code",65),e(4740," any "),t()(),i(4741,"td",26)(4742,"p"),e(4743,"Par\xE2metro com o valor do atual item selecionado."),t()()(),i(4744,"tr",19)(4745,"td",20),e(4746," filterParams"),t(),i(4747,"td",23)(4748,"code",65),e(4749," any "),t()(),i(4750,"td",26)(4751,"p"),e(4752,"Valor informado atrav\xE9s da propriedade "),i(4753,"code"),e(4754,"t-param-delete-api"),t(),e(4755,"."),t()()(),i(4756,"tr",19)(4757,"td",20),e(4758," keyValue"),t(),i(4759,"td",23)(4760,"code",65),e(4761," string "),t()(),i(4762,"td",26)(4763,"p"),e(4764,"Valor informado caso tenha alguma coluna com a propriedade "),i(4765,"code"),e(4766,"key"),t(),e(4767," ativa ou o valor da propriedade "),i(4768,"code"),e(4769,"id"),t(),e(4770,"."),t()()()(),o(4771,"br"),i(4772,"table",63)(4773,"tr",19)(4774,"th",64)(4775,"div",21)(4776,"h4")(4777,"span",22),e(4778," deleteBatchItems "),t()()()()(),i(4779,"tr",26)(4780,"td",26)(4781,"p"),e(4782,"M\xE9todo que ser\xE1 disparado ao excluir itens quando o THF-GRID estiver com a propriedade "),i(4783,"code"),e(4784,"t-allow-batch-delete"),t(),e(4785,` habilitada, deve-se retornar
um `),i(4786,"em"),e(4787,"Observable"),t(),e(4788,"."),t(),i(4789,"p"),e(4790,"Ao habilitar a propriedade "),i(4791,"code"),e(4792,"t-allow-batch-delete"),t(),e(4793,", este m\xE9todo sempre ser\xE1 chamado, exluindo um ou v\xE1rios itens."),t()()()(),i(4794,"h5")(4795,"b"),e(4796,"Par\xE2metros"),t()(),i(4797,"table",16)(4798,"tr",17)(4799,"th",18),e(4800,"Nome"),t(),i(4801,"th",18),e(4802,"Tipo"),t(),i(4803,"th",18),e(4804,"Descri\xE7\xE3o"),t()(),i(4805,"tr",19)(4806,"td",20),e(4807," selectedRows"),t(),i(4808,"td",23)(4809,"code",65),e(4810," any "),t()(),i(4811,"td",26)(4812,"p"),e(4813,"Par\xE2metro com os valores dos itens selecionados."),t()()(),i(4814,"tr",19)(4815,"td",20),e(4816," paramDelete"),t(),i(4817,"td",23)(4818,"code",65),e(4819," any "),t()(),i(4820,"td",26)(4821,"p"),e(4822,"Valor informado atrav\xE9s da propriedade "),i(4823,"code"),e(4824,"t-param-delete-api"),t(),e(4825,"."),t()()(),i(4826,"tr",19)(4827,"td",20),e(4828," keys"),t(),i(4829,"td",23)(4830,"code",65),e(4831," string "),t()(),i(4832,"td",26)(4833,"p"),e(4834,"Valor informado caso tenha alguma coluna com a propriedade "),i(4835,"code"),e(4836,"key"),t(),e(4837," ativa ou o valor da propriedade "),i(4838,"code"),e(4839,"id"),t(),e(4840,"."),t()()()(),o(4841,"br"),t(),i(4842,"po-accordion-item",135)(4843,"h4",9)(4844,"code"),e(4845,"ThfGridEditProperties"),t()(),i(4846,"div",10)(4847,"p"),e(4848,"Interface para configura\xE7\xE3o da edi\xE7\xE3o em linha ("),i(4849,"strong"),e(4850,"t-edit-properties"),t(),e(4851,")."),t()(),i(4852,"h4",15),e(4853,"Propriedades"),t(),i(4854,"table",16)(4855,"tr",17)(4856,"th",18),e(4857,"Nome"),t(),i(4858,"th",18),e(4859,"Tipo"),t(),i(4860,"th",18),e(4861,"Descri\xE7\xE3o"),t()(),i(4862,"tr",19)(4863,"td",20)(4864,"div",21)(4865,"span",22),e(4866," actionEdit"),o(4867,"br"),t()()(),i(4868,"td",23)(4869,"code",136),e(4870,"(param: any) => FormGroup"),t()(),i(4871,"td",26)(4872,"p"),e(4873,`M\xE9todo executado ao iniciar o modo edi\xE7\xE3o.
\xC9 passado um par\xE2metro com os valores respectivos de cada coluna.
\xC9 obrigat\xF3rio retornar o formul\xE1rio. Cada FormControl deve estar com o mesmo nome da `),i(4874,"code"),e(4875,"property"),t(),e(4876," da coluna desejada."),t(),i(4877,"p"),e(4878,"Exemplo de envio para a API:"),t(),i(4879,"pre")(4880,"code",28),e(4881,`<thf-grid
  t-service-api="https://po-sample-api.onrender.com/v1/people"
  [t-columns]="columns"
  [t-edit-properties]="editProperties"
>
</thf-grid>`),t()(),i(4882,"pre")(4883,"code",31),e(4884,`form: FormGroup;
editProperties: ThfGridEditProperties;

ngOnInit() {
  this.editProperties = {
    actionEdit: this.setFormGroup.bind(this),
    validate: this.changeValueForm.bind(this) // PROPRIEDADE OPCIONAL
  };
}

setFormGroup(dataItem) {
  const genreDescription = this.columns1.find(column => column.property === 'genreDescription');
  genreDescription.editProperties.disabled = true;
  genreDescription.editProperties.options = this.appService.getCity(dataItem.genre);
  this.form = new FormGroup({
    id: new FormControl(dataItem.id, [Validators.required]) // ID \xC9 OBRIGAT\xD3RIO,
    city: new FormControl(dataItem.city),
    email: new FormControl(dataItem.email),
    birthdate: new FormControl(dataItem.birthdate),
    genre: new FormControl(dataItem.genre),
    status: new FormControl(dataItem.status),
    genreDescription: new FormControl(dataItem.genreDescription, [Validators.required])
  });
  return this.form;
};`),t()()()(),i(4885,"tr",19)(4886,"td",20)(4887,"div",21)(4888,"span",22),e(4889," validate"),o(4890,"br"),t()()(),i(4891,"td",23)(4892,"code",137),e(4893,"(data: any, columnProperty: string) => FormGroup"),t()(),i(4894,"td",26)(4895,"em")(4896,"strong"),e(4897,"(opcional)"),t()(),i(4898,"p"),e(4899,`M\xE9todo executado ao alterar o valor de algum campo do formul\xE1rio.
O primeiro par\xE2metro s\xE3o os valores respectivos de cada coluna.
O segundo par\xE2metro \xE9 indicando a `),i(4900,"code"),e(4901,"property"),t(),e(4902,` da coluna que teve o valor alterado
\xC9 obrigat\xF3rio retornar o formul\xE1rio. Cada FormControl deve estar com o mesmo nome da `),i(4903,"code"),e(4904,"property"),t(),e(4905," da coluna desejada."),t()()()()(),i(4906,"po-accordion-item",138)(4907,"h4",9)(4908,"code"),e(4909,"ThfGridLiterals"),t()(),i(4910,"div",10)(4911,"p"),e(4912,"Interface para customizar literais ("),i(4913,"strong"),e(4914,"t-literals"),t(),e(4915,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(4916,"h4",15),e(4917,"Propriedades"),t(),i(4918,"table",16)(4919,"tr",17)(4920,"th",18),e(4921,"Nome"),t(),i(4922,"th",18),e(4923,"Tipo"),t(),i(4924,"th",18),e(4925,"Descri\xE7\xE3o"),t()(),i(4926,"tr",19)(4927,"td",20)(4928,"div",21)(4929,"span",22),e(4930," advancedSearch"),o(4931,"br"),t()()(),i(4932,"td",23)(4933,"code",40),e(4934,"string"),t()(),i(4935,"td",26)(4936,"em")(4937,"strong"),e(4938,"(opcional)"),t()(),i(4939,"p"),e(4940,"T\xEDtulo do modal Filtros"),t()()(),i(4941,"tr",19)(4942,"td",20)(4943,"div",21)(4944,"span",22),e(4945," bodyDelete"),o(4946,"br"),t()()(),i(4947,"td",23)(4948,"code",40),e(4949,"string"),t()(),i(4950,"td",26)(4951,"em")(4952,"strong"),e(4953,"(opcional)"),t()(),i(4954,"p"),e(4955,"Conte\xFAdo do modal Excluir"),t()()(),i(4956,"tr",19)(4957,"td",20)(4958,"div",21)(4959,"span",22),e(4960," bodyDeleteBatch"),o(4961,"br"),t()()(),i(4962,"td",23)(4963,"code",40),e(4964,"string"),t()(),i(4965,"td",26)(4966,"em")(4967,"strong"),e(4968,"(opcional)"),t()(),i(4969,"p"),e(4970,"Conte\xFAdo do modal Excluir configurado para excluir em lote"),t()()(),i(4971,"tr",19)(4972,"td",20)(4973,"div",21)(4974,"span",22),e(4975," cancel"),o(4976,"br"),t()()(),i(4977,"td",23)(4978,"code",40),e(4979,"string"),t()(),i(4980,"td",26)(4981,"em")(4982,"strong"),e(4983,"(opcional)"),t()(),i(4984,"p"),e(4985,"Label do bot\xE3o Cancelar"),t()()(),i(4986,"tr",19)(4987,"td",20)(4988,"div",21)(4989,"span",22),e(4990," columnsManager"),o(4991,"br"),t()()(),i(4992,"td",23)(4993,"code",40),e(4994,"string"),t()(),i(4995,"td",26)(4996,"em")(4997,"strong"),e(4998,"(opcional)"),t()(),i(4999,"p"),e(5e3,"T\xEDtulo do page-slide Gerenciar Tabela"),t()()(),i(5001,"tr",19)(5002,"td",20)(5003,"div",21)(5004,"span",22),e(5005," compact"),o(5006,"br"),t()()(),i(5007,"td",23)(5008,"code",40),e(5009,"string"),t()(),i(5010,"td",26)(5011,"em")(5012,"strong"),e(5013,"(opcional)"),t()(),i(5014,"p"),e(5015,"Label do radio de densidade Compacto no Gerenciar Tabela"),t()()(),i(5016,"tr",19)(5017,"td",20)(5018,"div",21)(5019,"span",22),e(5020," confirm"),o(5021,"br"),t()()(),i(5022,"td",23)(5023,"code",40),e(5024,"string"),t()(),i(5025,"td",26)(5026,"em")(5027,"strong"),e(5028,"(opcional)"),t()(),i(5029,"p"),e(5030,"Label do bot\xE3o Confirmar"),t()()(),i(5031,"tr",19)(5032,"td",20)(5033,"div",21)(5034,"span",22),e(5035," default"),o(5036,"br"),t()()(),i(5037,"td",23)(5038,"code",40),e(5039,"string"),t()(),i(5040,"td",26)(5041,"em")(5042,"strong"),e(5043,"(opcional)"),t()(),i(5044,"p"),e(5045,"Label do radio de densidade Espa\xE7oso no Gerenciar Tabela"),t()()(),i(5046,"tr",19)(5047,"td",20)(5048,"div",21)(5049,"span",22),e(5050," delete"),o(5051,"br"),t()()(),i(5052,"td",23)(5053,"code",40),e(5054,"string"),t()(),i(5055,"td",26)(5056,"em")(5057,"strong"),e(5058,"(opcional)"),t()(),i(5059,"p"),e(5060,"Label do bot\xE3o Excluir"),t()()(),i(5061,"tr",19)(5062,"td",20)(5063,"div",21)(5064,"span",22),e(5065," deleteApiError"),o(5066,"br"),t()()(),i(5067,"td",23)(5068,"code",40),e(5069,"string"),t()(),i(5070,"td",26)(5071,"em")(5072,"strong"),e(5073,"(opcional)"),t()(),i(5074,"p"),e(5075,"Resposta de erro da requisi\xE7\xE3o delete no popup"),t()()(),i(5076,"tr",19)(5077,"td",20)(5078,"div",21)(5079,"span",22),e(5080," deleteItem"),o(5081,"br"),t()()(),i(5082,"td",23)(5083,"code",40),e(5084,"string"),t()(),i(5085,"td",26)(5086,"em")(5087,"strong"),e(5088,"(opcional)"),t()(),i(5089,"p"),e(5090,"T\xEDtulo do modal Excluir"),t()()(),i(5091,"tr",19)(5092,"td",20)(5093,"div",21)(5094,"span",22),e(5095," density"),o(5096,"br"),t()()(),i(5097,"td",23)(5098,"code",40),e(5099,"string"),t()(),i(5100,"td",26)(5101,"em")(5102,"strong"),e(5103,"(opcional)"),t()(),i(5104,"p"),e(5105,'T\xEDtulo da sess\xE3o "Densidade" no Gerenciar Tabela'),t()()(),i(5106,"tr",19)(5107,"td",20)(5108,"div",21)(5109,"span",22),e(5110," draggable"),o(5111,"br"),t()()(),i(5112,"td",23)(5113,"code",40),e(5114,"string"),t()(),i(5115,"td",26)(5116,"em")(5117,"strong"),e(5118,"(opcional)"),t()(),i(5119,"p"),e(5120,'Label da op\xE7\xE3o "Draggable" na sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(5121,"tr",19)(5122,"td",20)(5123,"div",21)(5124,"span",22),e(5125," edit"),o(5126,"br"),t()()(),i(5127,"td",23)(5128,"code",40),e(5129,"string"),t()(),i(5130,"td",26)(5131,"em")(5132,"strong"),e(5133,"(opcional)"),t()(),i(5134,"p"),e(5135,"Label do bot\xE3o Editar"),t()()(),i(5136,"tr",19)(5137,"td",20)(5138,"div",21)(5139,"span",22),e(5140," editRow"),o(5141,"br"),t()()(),i(5142,"td",23)(5143,"code",40),e(5144,"string"),t()(),i(5145,"td",26)(5146,"em")(5147,"strong"),e(5148,"(opcional)"),t()(),i(5149,"p"),e(5150,"T\xEDtulo das a\xE7\xF5es quando Edi\xE7\xE3o em linha."),t()()(),i(5151,"tr",19)(5152,"td",20)(5153,"div",21)(5154,"span",22),e(5155," export"),o(5156,"br"),t()()(),i(5157,"td",23)(5158,"code",40),e(5159,"string"),t()(),i(5160,"td",26)(5161,"em")(5162,"strong"),e(5163,"(opcional)"),t()(),i(5164,"p"),e(5165,"Label do bot\xE3o Exportar"),t()()(),i(5166,"tr",19)(5167,"td",20)(5168,"div",21)(5169,"span",22),e(5170," exportExcel"),o(5171,"br"),t()()(),i(5172,"td",23)(5173,"code",40),e(5174,"string"),t()(),i(5175,"td",26)(5176,"em")(5177,"strong"),e(5178,"(opcional)"),t()(),i(5179,"p"),e(5180,"Label do bot\xE3o Exportar Excel"),t()()(),i(5181,"tr",19)(5182,"td",20)(5183,"div",21)(5184,"span",22),e(5185," exportPDF"),o(5186,"br"),t()()(),i(5187,"td",23)(5188,"code",40),e(5189,"string"),t()(),i(5190,"td",26)(5191,"em")(5192,"strong"),e(5193,"(opcional)"),t()(),i(5194,"p"),e(5195,"Label do bot\xE3o Exportar PDF"),t()()(),i(5196,"tr",19)(5197,"td",20)(5198,"div",21)(5199,"span",22),e(5200," extraCompact"),o(5201,"br"),t()()(),i(5202,"td",23)(5203,"code",40),e(5204,"string"),t()(),i(5205,"td",26)(5206,"em")(5207,"strong"),e(5208,"(opcional)"),t()(),i(5209,"p"),e(5210,"Label do radio de densidade Extra Compacto no Gerenciar Tabela"),t()()(),i(5211,"tr",19)(5212,"td",20)(5213,"div",21)(5214,"span",22),e(5215," filters"),o(5216,"br"),t()()(),i(5217,"td",23)(5218,"code",40),e(5219,"string"),t()(),i(5220,"td",26)(5221,"em")(5222,"strong"),e(5223,"(opcional)"),t()(),i(5224,"p"),e(5225,"Label do bot\xE3o Filtros"),t()()(),i(5226,"tr",19)(5227,"td",20)(5228,"div",21)(5229,"span",22),e(5230," fixed"),o(5231,"br"),t()()(),i(5232,"td",23)(5233,"code",40),e(5234,"string"),t()(),i(5235,"td",26)(5236,"em")(5237,"strong"),e(5238,"(opcional)"),t()(),i(5239,"p"),e(5240,'T\xEDtulo da sess\xE3o "Fixo" no Gerenciar Tabela'),t()()(),i(5241,"tr",19)(5242,"td",20)(5243,"div",21)(5244,"span",22),e(5245," gridRowActionsConfirmAddCancelButton"),o(5246,"br"),t()()(),i(5247,"td",23)(5248,"code",40),e(5249,"string"),t()(),i(5250,"td",26)(5251,"em")(5252,"strong"),e(5253,"(opcional)"),t()(),i(5254,"p"),e(5255,'Label do bot\xE3o "Cancelar" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(5256,"tr",19)(5257,"td",20)(5258,"div",21)(5259,"span",22),e(5260," gridRowActionsConfirmAddConfirmButton"),o(5261,"br"),t()()(),i(5262,"td",23)(5263,"code",40),e(5264,"string"),t()(),i(5265,"td",26)(5266,"em")(5267,"strong"),e(5268,"(opcional)"),t()(),i(5269,"p"),e(5270,'Label do bot\xE3o "Confirmar" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(5271,"tr",19)(5272,"td",20)(5273,"div",21)(5274,"span",22),e(5275," gridRowActionsConfirmAddTitle"),o(5276,"br"),t()()(),i(5277,"td",23)(5278,"code",40),e(5279,"string"),t()(),i(5280,"td",26)(5281,"em")(5282,"strong"),e(5283,"(opcional)"),t()(),i(5284,"p"),e(5285,'T\xEDtulo do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(5286,"tr",19)(5287,"td",20)(5288,"div",21)(5289,"span",22),e(5290," groupable"),o(5291,"br"),t()()(),i(5292,"td",23)(5293,"code",40),e(5294,"string"),t()(),i(5295,"td",26)(5296,"em")(5297,"strong"),e(5298,"(opcional)"),t()(),i(5299,"p"),e(5300,'Label da op\xE7\xE3o "Groupable" na sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(5301,"tr",19)(5302,"td",20)(5303,"div",21)(5304,"span",22),e(5305," groupableText"),o(5306,"br"),t()()(),i(5307,"td",23)(5308,"code",40),e(5309,"string"),t()(),i(5310,"td",26)(5311,"em")(5312,"strong"),e(5313,"(opcional)"),t()(),i(5314,"p"),e(5315,"Texto do cabe\xE7alho onde se deve soltar as colunas que devem ser agrupadas."),t()()(),i(5316,"tr",19)(5317,"td",20)(5318,"div",21)(5319,"span",22),e(5320," legendListOptions"),o(5321,"br"),t()()(),i(5322,"td",23)(5323,"code",40),e(5324,"string"),t()(),i(5325,"td",26)(5326,"em")(5327,"strong"),e(5328,"(opcional)"),t()(),i(5329,"p"),e(5330,'T\xEDtulo da sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(5331,"tr",19)(5332,"td",20)(5333,"div",21)(5334,"span",22),e(5335," loadMoreData"),o(5336,"br"),t()()(),i(5337,"td",23)(5338,"code",40),e(5339,"string"),t()(),i(5340,"td",26)(5341,"em")(5342,"strong"),e(5343,"(opcional)"),t()(),i(5344,"p"),e(5345,"Label do bot\xE3o Carregar mais resultados"),t()()(),i(5346,"tr",19)(5347,"td",20)(5348,"div",21)(5349,"span",22),e(5350," loadingData"),o(5351,"br"),t()()(),i(5352,"td",23)(5353,"code",40),e(5354,"string"),t()(),i(5355,"td",26)(5356,"em")(5357,"strong"),e(5358,"(opcional)"),t()(),i(5359,"p"),e(5360,"Texto do modal Carregando..."),t()()(),i(5361,"tr",19)(5362,"td",20)(5363,"div",21)(5364,"span",22),e(5365," manageTable"),o(5366,"br"),t()()(),i(5367,"td",23)(5368,"code",40),e(5369,"string"),t()(),i(5370,"td",26)(5371,"em")(5372,"strong"),e(5373,"(opcional)"),t()(),i(5374,"p"),e(5375,"Label do bot\xE3o Gerenciar Tabela"),t()()(),i(5376,"tr",19)(5377,"td",20)(5378,"div",21)(5379,"span",22),e(5380," moreActions"),o(5381,"br"),t()()(),i(5382,"td",23)(5383,"code",40),e(5384,"string"),t()(),i(5385,"td",26)(5386,"em")(5387,"strong"),e(5388,"(opcional)"),t()(),i(5389,"p"),e(5390,"Label do bot\xE3o Mais a\xE7\xF5es"),t()()(),i(5391,"tr",19)(5392,"td",20)(5393,"div",21)(5394,"span",22),e(5395," multipleItems"),o(5396,"br"),t()()(),i(5397,"td",23)(5398,"code",40),e(5399,"string"),t()(),i(5400,"td",26)(5401,"em")(5402,"strong"),e(5403,"(opcional)"),t()(),i(5404,"p"),e(5405,"Texto auxiliar ao selecionar muitos itens exibido nas a\xE7\xF5es em lote."),t()()(),i(5406,"tr",19)(5407,"td",20)(5408,"div",21)(5409,"span",22),e(5410," noColumns"),o(5411,"br"),t()()(),i(5412,"td",23)(5413,"code",40),e(5414,"string"),t()(),i(5415,"td",26)(5416,"em")(5417,"strong"),e(5418,"(opcional)"),t()(),i(5419,"p"),e(5420,"Mensagem exibida quando n\xE3o existem colunas definidas."),t()()(),i(5421,"tr",19)(5422,"td",20)(5423,"div",21)(5424,"span",22),e(5425," noData"),o(5426,"br"),t()()(),i(5427,"td",23)(5428,"code",40),e(5429,"string"),t()(),i(5430,"td",26)(5431,"em")(5432,"strong"),e(5433,"(opcional)"),t()(),i(5434,"p"),e(5435,"Mensagem exibida quando n\xE3o existem itens para serem exibidos."),t()()(),i(5436,"tr",19)(5437,"td",20)(5438,"div",21)(5439,"span",22),e(5440," noItem"),o(5441,"br"),t()()(),i(5442,"td",23)(5443,"code",40),e(5444,"string"),t()(),i(5445,"td",26)(5446,"em")(5447,"strong"),e(5448,"(opcional)"),t()(),i(5449,"p"),e(5450,"Mensagem exibida quando nenhum item est\xE1 selecionado."),t()()(),i(5451,"tr",19)(5452,"td",20)(5453,"div",21)(5454,"span",22),e(5455," oneItem"),o(5456,"br"),t()()(),i(5457,"td",23)(5458,"code",40),e(5459,"string"),t()(),i(5460,"td",26)(5461,"em")(5462,"strong"),e(5463,"(opcional)"),t()(),i(5464,"p"),e(5465,"Texto ao selecionar um \xFAnico item exibido nas a\xE7\xF5es em lote."),t()()(),i(5466,"tr",19)(5467,"td",20)(5468,"div",21)(5469,"span",22),e(5470," otherColumns"),o(5471,"br"),t()()(),i(5472,"td",23)(5473,"code",40),e(5474,"string"),t()(),i(5475,"td",26)(5476,"em")(5477,"strong"),e(5478,"(opcional)"),t()(),i(5479,"p"),e(5480,'T\xEDtulo da sess\xE3o "Outras colunas" no Gerenciar Tabela'),t()()(),i(5481,"tr",19)(5482,"td",20)(5483,"div",21)(5484,"span",22),e(5485," placeholderSearchInput"),o(5486,"br"),t()()(),i(5487,"td",23)(5488,"code",40),e(5489,"string"),t()(),i(5490,"td",26)(5491,"em")(5492,"strong"),e(5493,"(opcional)"),t()(),i(5494,"p"),e(5495,"Placeholder do campo Buscar na tabela"),t()()(),i(5496,"tr",19)(5497,"td",20)(5498,"div",21)(5499,"span",22),e(5500," restoreDefault"),o(5501,"br"),t()()(),i(5502,"td",23)(5503,"code",40),e(5504,"string"),t()(),i(5505,"td",26)(5506,"em")(5507,"strong"),e(5508,"(opcional)"),t()(),i(5509,"p"),e(5510,'Label do bot\xE3o "Restaurar padr\xE3o" no Gerenciar Tabela'),t()()(),i(5511,"tr",19)(5512,"td",20)(5513,"div",21)(5514,"span",22),e(5515," resultsByPage"),o(5516,"br"),t()()(),i(5517,"td",23)(5518,"code",40),e(5519,"string"),t()(),i(5520,"td",26)(5521,"em")(5522,"strong"),e(5523,"(opcional)"),t()(),i(5524,"p"),e(5525,'Label "Resultados por p\xE1gina" no Gerenciar Tabela.'),t()()(),i(5526,"tr",19)(5527,"td",20)(5528,"div",21)(5529,"span",22),e(5530," save"),o(5531,"br"),t()()(),i(5532,"td",23)(5533,"code",40),e(5534,"string"),t()(),i(5535,"td",26)(5536,"em")(5537,"strong"),e(5538,"(opcional)"),t()(),i(5539,"p"),e(5540,"Label do bot\xE3o Salvar"),t()()(),i(5541,"tr",19)(5542,"td",20)(5543,"div",21)(5544,"span",22),e(5545," warningColumnsRequired"),o(5546,"br"),t()()(),i(5547,"td",23)(5548,"code",40),e(5549,"string"),t()(),i(5550,"td",26)(5551,"em")(5552,"strong"),e(5553,"(opcional)"),t()(),i(5554,"p"),e(5555,'Mensagem do modal "Exclus\xE3o dos dados inseridos".'),t()()()()(),i(5556,"po-accordion-item",139)(5557,"h4",9)(5558,"code"),e(5559,"ThfGridOptionPaging"),t()(),i(5560,"div",10)(5561,"p"),e(5562,"Interface para configura\xE7\xE3o das op\xE7\xF5es de pagina\xE7\xE3o ("),i(5563,"strong"),e(5564,"t-options-paging"),t(),e(5565,")."),t()(),i(5566,"h4",15),e(5567,"Propriedades"),t(),i(5568,"table",16)(5569,"tr",17)(5570,"th",18),e(5571,"Nome"),t(),i(5572,"th",18),e(5573,"Tipo"),t(),i(5574,"th",18),e(5575,"Descri\xE7\xE3o"),t()(),i(5576,"tr",19)(5577,"td",20)(5578,"div",21)(5579,"span",22),e(5580," label"),o(5581,"br"),t()()(),i(5582,"td",23)(5583,"code",40),e(5584,"string"),t()(),i(5585,"td",26)(5586,"p"),e(5587,"Label correspondente a quantidade de itens"),t()()(),i(5588,"tr",19)(5589,"td",20)(5590,"div",21)(5591,"span",22),e(5592," value"),o(5593,"br"),t()()(),i(5594,"td",23)(5595,"code",52),e(5596,"number"),t()(),i(5597,"td",26)(5598,"p"),e(5599,"Quantidade de itens por p\xE1gina"),t()()()()(),i(5600,"po-accordion-item",140)(5601,"h4",9)(5602,"code"),e(5603,"ThfGridOptions"),t()(),i(5604,"div",10)(5605,"p"),e(5606,"Interface para as propriedades que permitem personalizar dinamicamente o comportamento do componente."),t()(),i(5607,"h4",15),e(5608,"Propriedades"),t(),i(5609,"table",16)(5610,"tr",17)(5611,"th",18),e(5612,"Nome"),t(),i(5613,"th",18),e(5614,"Tipo"),t(),i(5615,"th",18),e(5616,"Descri\xE7\xE3o"),t()(),i(5617,"tr",19)(5618,"td",20)(5619,"div",21)(5620,"span",22),e(5621," actions"),o(5622,"br"),t()()(),i(5623,"td",23)(5624,"code",29),e(5625,"Array<ThfTableAction>"),t()(),i(5626,"td",26)(5627,"em")(5628,"strong"),e(5629,"(opcional)"),t()(),i(5630,"p"),e(5631,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar no grid atrav\xE9s de bot\xF5es."),t()()(),i(5632,"tr",19)(5633,"td",20)(5634,"div",21)(5635,"span",22),e(5636," columns"),o(5637,"br"),t()()(),i(5638,"td",23)(5639,"code",37),e(5640,"Array<ThfGridColumn>"),t()(),i(5641,"td",26)(5642,"em")(5643,"strong"),e(5644,"(opcional)"),t()(),i(5645,"p"),e(5646,`Lista das colunas usadas no grid e busca avan\xE7ada.
Caso precise alterar uma coluna que j\xE1 exista deve ser passado o atributo `),i(5647,"code"),e(5648,"property"),t(),e(5649," com o mesmo conte\xFAdo do original."),t()()(),i(5650,"tr",19)(5651,"td",20)(5652,"div",21)(5653,"span",22),e(5654," customActions"),o(5655,"br"),t()()(),i(5656,"td",23)(5657,"code",42),e(5658,"Array<PoDropdownAction>"),t()(),i(5659,"td",26)(5660,"em")(5661,"strong"),e(5662,"(opcional)"),t()(),i(5663,"p"),e(5664,"Lista de a\xE7\xF5es customizadas do grid que ser\xE3o incorporadas \xE0s a\xE7\xF5es informadas atrav\xE9s da propriedade "),i(5665,"code"),e(5666,"actions"),t(),e(5667,"."),t(),i(5668,"pre")(5669,"code",31),e(5670,`// Exemplo de uso:
[
 { label: 'Apply Discount', action: this.applyDiscount.bind(this) },
 { label: 'Details', action: this.details.bind(this) }
];`),t()()()()()(),i(5671,"po-accordion-item",141)(5672,"h4",9)(5673,"code"),e(5674,"ThfGridRowActions"),t()(),i(5675,"div",10)(5676,"p"),e(5677,"Interface para configura\xE7\xE3o da edi\xE7\xE3o flu\xEDda ("),i(5678,"strong"),e(5679,"t-grid-row-actions"),t(),e(5680,`).
Essas a\xE7\xF5es permitem manipular o comportamento de edi\xE7\xE3o, inser\xE7\xE3o e remo\xE7\xE3o de dados no grid.`),t()(),i(5681,"h4",15),e(5682,"Propriedades"),t(),i(5683,"table",16)(5684,"tr",17)(5685,"th",18),e(5686,"Nome"),t(),i(5687,"th",18),e(5688,"Tipo"),t(),i(5689,"th",18),e(5690,"Descri\xE7\xE3o"),t()(),i(5691,"tr",19)(5692,"td",20)(5693,"div",21)(5694,"span",22),e(5695," actionEdit"),o(5696,"br"),t()()(),i(5697,"td",23)(5698,"code",142),e(5699,"(param: any, mode: 'edit' "),t(),i(5700,"code",143),e(5701," 'include') => FormGroup "),t(),i(5702,"code",144),e(5703," Observable<FormGroup>"),t()(),i(5704,"td",26)(5705,"p"),e(5706,`Fun\xE7\xE3o respons\xE1vel por iniciar o modo de edi\xE7\xE3o ou inclus\xE3o de uma linha no grid.
O m\xE9todo recebe os dados da linha selecionada ou um objeto vazio no modo de inclus\xE3o.
Deve retornar um `),i(5707,"code"),e(5708,"FormGroup"),t(),e(5709," que ser\xE1 utilizado para controlar os valores das colunas edit\xE1veis."),t(),i(5710,"pre")(5711,"code",31),e(5712,`// Exemplo de uso:

actionEdit: (param, mode) => new FormGroup({
  name: new FormControl(param.name),
  age: new FormControl(param.age)
})`),t()(),i(5713,"p"),e(5714,"ou"),t(),i(5715,"pre")(5716,"code",31),e(5717,`actionEdit: (dataItem, mode) => {
return this.appService
 .listItems('https://po-sample-api.onrender.com/v1/heroes', { name: 'Robert Bruce Banner' })
  .pipe(
     map(items => {
       return new FormGroup({
         name: new FormControl(items.name),
         age: new FormControl(items.age)
       })
     }
   )
 }`),t()()()(),i(5718,"tr",19)(5719,"td",20)(5720,"div",21)(5721,"span",22),e(5722," afterRemove"),o(5723,"br"),t()()(),i(5724,"td",23)(5725,"code",145),e(5726,"(row: any) => void"),t()(),i(5727,"td",26)(5728,"em")(5729,"strong"),e(5730,"(opcional)"),t()(),i(5731,"p"),e(5732,`Fun\xE7\xE3o opcional executada ap\xF3s a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s a remo\xE7\xE3o de dados, como exibir notifica\xE7\xF5es.`),t()()(),i(5733,"tr",19)(5734,"td",20)(5735,"div",21)(5736,"span",22),e(5737," afterSave"),o(5738,"br"),t()()(),i(5739,"td",23)(5740,"code",145),e(5741,"(row: any) => void"),t()(),i(5742,"td",26)(5743,"em")(5744,"strong"),e(5745,"(opcional)"),t()(),i(5746,"p"),e(5747,`Fun\xE7\xE3o opcional executada ap\xF3s o salvamento de uma linha editada.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s a conclus\xE3o de uma edi\xE7\xE3o.`),t()()(),i(5748,"tr",19)(5749,"td",20)(5750,"div",21)(5751,"span",22),e(5752," afterUndoRemove"),o(5753,"br"),t()()(),i(5754,"td",23)(5755,"code",145),e(5756,"(row: any) => void"),t()(),i(5757,"td",26)(5758,"em")(5759,"strong"),e(5760,"(opcional)"),t()(),i(5761,"p"),e(5762,`Fun\xE7\xE3o opcional executada ap\xF3s desfazer a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s desfazer a remo\xE7\xE3o de dados, como exibir notifica\xE7\xF5es.`),t()()(),i(5763,"tr",19)(5764,"td",20)(5765,"div",21)(5766,"span",22),e(5767," beforeInsert"),o(5768,"br"),t()()(),i(5769,"td",23)(5770,"code",146),e(5771,"(row: any) => boolean "),t(),i(5772,"code",147),e(5773," Observable<boolean>"),t()(),i(5774,"td",26)(5775,"em")(5776,"strong"),e(5777,"(opcional)"),t()(),i(5778,"p"),e(5779,`Fun\xE7\xE3o opcional executada antes de inserir uma nova linha no grid.
Pode ser usada para validar ou modificar os dados antes da inclus\xE3o.`),t()()(),i(5780,"tr",19)(5781,"td",20)(5782,"div",21)(5783,"span",22),e(5784," beforeRemove"),o(5785,"br"),t()()(),i(5786,"td",23)(5787,"code",146),e(5788,"(row: any) => boolean "),t(),i(5789,"code",147),e(5790," Observable<boolean>"),t()(),i(5791,"td",26)(5792,"em")(5793,"strong"),e(5794,"(opcional)"),t()(),i(5795,"p"),e(5796,`Fun\xE7\xE3o opcional executada antes de remover uma linha do grid.
Pode ser usada para validar ou confirmar a remo\xE7\xE3o da linha.`),t()()(),i(5797,"tr",19)(5798,"td",20)(5799,"div",21)(5800,"span",22),e(5801," beforeSave"),o(5802,"br"),t()()(),i(5803,"td",23)(5804,"code",148),e(5805,"(updatedRow: any, originalRow: any) => boolean "),t(),i(5806,"code",147),e(5807," Observable<boolean>"),t()(),i(5808,"td",26)(5809,"em")(5810,"strong"),e(5811,"(opcional)"),t()(),i(5812,"p"),e(5813,`Fun\xE7\xE3o opcional executada antes de salvar as altera\xE7\xF5es de uma linha editada.
Pode ser usada para validar ou modificar os dados antes de confirmar a edi\xE7\xE3o.`),t()()(),i(5814,"tr",19)(5815,"td",20)(5816,"div",21)(5817,"span",22),e(5818," beforeUndoRemove"),o(5819,"br"),t()()(),i(5820,"td",23)(5821,"code",146),e(5822,"(row: any) => boolean "),t(),i(5823,"code",147),e(5824," Observable<boolean>"),t()(),i(5825,"td",26)(5826,"em")(5827,"strong"),e(5828,"(opcional)"),t()(),i(5829,"p"),e(5830,`Fun\xE7\xE3o opcional executada antes de desfazer a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para validar ou confirmar o desfazer da remo\xE7\xE3o da linha.`),t()()(),i(5831,"tr",19)(5832,"td",20)(5833,"div",21)(5834,"span",22),e(5835," change"),o(5836,"br"),t()()(),i(5837,"td",23)(5838,"code",149),e(5839,"(updatedRows: Array<any>) => void"),t()(),i(5840,"td",26)(5841,"em")(5842,"strong"),e(5843,"(opcional)"),t()(),i(5844,"p"),e(5845,`Fun\xE7\xE3o opcional que retorna a lista atualizada sempre que ocorre edi\xE7\xE3o, inclus\xE3o ou remo\xE7\xE3o.
Facilita o monitoramento das mudan\xE7as feitas, permitindo que se veja rapidamente o que foi alterado no grid.
Ser\xE1 disparado apenas durante a\xE7\xF5es de edi\xE7\xE3o flu\xEDda, sem compatibilidade com outros eventos.`),t()()(),i(5846,"tr",19)(5847,"td",20)(5848,"div",21)(5849,"span",22),e(5850," hiddenGrid"),o(5851,"br"),t()()(),i(5852,"td",23)(5853,"code",24),e(5854,"boolean"),t()(),i(5855,"td",26)(5856,"em")(5857,"strong"),e(5858,"(opcional)"),t()(),i(5859,"p"),e(5860,"Propriedade opcional utilizada para determinar se a grid deve ser ocultada quando n\xE3o houver registros."),t()()(),i(5861,"tr",19)(5862,"td",20)(5863,"div",21)(5864,"span",22),e(5865," noPermission"),o(5866,"br"),t()()(),i(5867,"td",23)(5868,"code",150),e(5869,"Array<ThfGridEditModeActionType>"),t()(),i(5870,"td",26)(5871,"em")(5872,"strong"),e(5873,"(opcional)"),t()(),i(5874,"p"),e(5875,`Propriedade opcional que permite remover e desabilitar as a\xE7\xF5es no grid.
Os valores permitidos no array s\xE3o definidos pelo enum `),i(5876,"strong"),e(5877,"ThfGridEditModeActionType"),t(),e(5878,":"),t(),i(5879,"pre")(5880,"code",31),e(5881,`// Exemplo de uso:

gridRowActions: ThfGridRowActions = {
 noPermission: [
   ThfGridEditModeActionType.Replace,
   ThfGridEditModeActionType.Add,
   ThfGridEditModeActionType.Remove] // Desabilita edi\xE7\xE3o, inclus\xE3o e remo\xE7\xE3o
  // outras a\xE7\xF5es...
};`),t()()()(),i(5882,"tr",19)(5883,"td",20)(5884,"div",21)(5885,"span",22),e(5886," title"),o(5887,"br"),t()()(),i(5888,"td",23)(5889,"code",40),e(5890,"string"),t()(),i(5891,"td",26)(5892,"em")(5893,"strong"),e(5894,"(opcional)"),t()(),i(5895,"p"),e(5896,"T\xEDtulo opcional que pode ser usado para exibir um cabe\xE7alho ou descri\xE7\xE3o na interface."),t()()(),i(5897,"tr",19)(5898,"td",20)(5899,"div",21)(5900,"span",22),e(5901," validateField"),o(5902,"br"),t()()(),i(5903,"td",23)(5904,"code",151),e(5905,"(updatedField: any, columnProperty: string) => boolean "),t(),i(5906,"code",147),e(5907," Observable<boolean>"),t()(),i(5908,"td",26)(5909,"em")(5910,"strong"),e(5911,"(opcional)"),t()(),i(5912,"p"),e(5913,`Fun\xE7\xE3o opcional executada quando algum campo \xE9 alterado.
Pode ser usada para validar ou modificar dados baseados no valor alterado.`),t(),i(5914,"pre")(5915,"code",31),e(5916,`// Exemplo de uso:

onValidate(updatedField, property) {

 if(property === 'pais') {
     this.myForm?.controls['capital'].setValue(null); // valor da capital modificado para nulo
     const valuePais = this.myForm.controls[property].value;
     const capital = this.columnWithItems.find(column => column.property === 'capital');
      if (valuePais === 'Brasil') {
         capital.editProperties.disabled = false;
         this.form?.controls['capital'].setValue('Brasilia'); // Modificado o valor do campo "capital" baseado no valor do campo "pais"
      } else if (valuePais === 'Portugal') {
          capital.editProperties.disabled = false;
          this.form?.controls['capital'].setValue('Lisboa');
      } else {
        capital.editProperties.disabled = true;
        this.form?.controls['capital'].setValue('');
     }

   return true;
 }
}`),t()()()()()()()(),y(5917,4),t(),i(5918,"po-tab",152),y(5919,5),i(5920,"po-container",5)(5921,"po-accordion",6)(5922,"po-accordion-item",153)(5923,"h4",9)(5924,"code"),e(5925,"ThfColumnSpacing"),t()(),i(5926,"h4",15),e(5927,"Propriedades"),t(),i(5928,"table",16)(5929,"tr",17)(5930,"th",18),e(5931,"Nome"),t(),i(5932,"th",18),e(5933,"Descri\xE7\xE3o"),t()(),i(5934,"tr",19)(5935,"td",20)(5936,"div",21)(5937,"span",22),e(5938," ExtraSmall"),o(5939,"br"),t()()(),i(5940,"td",26)(5941,"p"),e(5942,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),t()()(),i(5943,"tr",19)(5944,"td",20)(5945,"div",21)(5946,"span",22),e(5947," Large"),o(5948,"br"),t()()(),i(5949,"td",26)(5950,"p"),e(5951,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),t()()(),i(5952,"tr",19)(5953,"td",20)(5954,"div",21)(5955,"span",22),e(5956," Medium"),o(5957,"br"),t()()(),i(5958,"td",26)(5959,"p"),e(5960,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),t()()(),i(5961,"tr",19)(5962,"td",20)(5963,"div",21)(5964,"span",22),e(5965," Small"),o(5966,"br"),t()()(),i(5967,"td",26)(5968,"p"),e(5969,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),t()()()()(),i(5970,"po-accordion-item",154)(5971,"h4",9)(5972,"code"),e(5973,"ThfGridEditModeActionType"),t()(),i(5974,"h4",15),e(5975,"Propriedades"),t(),i(5976,"table",16)(5977,"tr",17)(5978,"th",18),e(5979,"Nome"),t(),i(5980,"th",18),e(5981,"Descri\xE7\xE3o"),t()(),i(5982,"tr",19)(5983,"td",20)(5984,"div",21)(5985,"span",22),e(5986," Add"),o(5987,"br"),t()()(),i(5988,"td",26)(5989,"p"),e(5990,"A\xE7\xE3o de inclus\xE3o"),t()()(),i(5991,"tr",19)(5992,"td",20)(5993,"div",21)(5994,"span",22),e(5995," Remove"),o(5996,"br"),t()()(),i(5997,"td",26)(5998,"p"),e(5999,"A\xE7\xE3o de remo\xE7\xE3o"),t()()(),i(6e3,"tr",19)(6001,"td",20)(6002,"div",21)(6003,"span",22),e(6004," Replace"),o(6005,"br"),t()()(),i(6006,"td",26)(6007,"p"),e(6008,"A\xE7\xE3o de edi\xE7\xE3o"),t()()()()()()(),y(6009,6),t(),i(6010,"po-tab",155),y(6011,7),i(6012,"po-container",5)(6013,"po-accordion",6)(6014,"po-accordion-item",156)(6015,"h4",9)(6016,"code"),e(6017,"ThfGridCellTemplateDirective"),t()(),i(6018,"div",10)(6019,"p"),e(6020,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),t(),i(6021,"p"),e(6022,"Em seu uso, deve-se apenas adicionar a diretiva "),i(6023,"strong"),e(6024,"t-grid-cell-template"),t(),e(6025," \xE0 tag "),i(6026,"code"),e(6027,"ng-template"),t(),e(6028,"."),t(),i(6029,"p"),e(6030,"Retorno:"),t(),i(6031,"ul")(6032,"li")(6033,"code"),e(6034,"column"),t(),e(6035,": conte\xFAdo da coluna corrente."),t(),i(6036,"li")(6037,"code"),e(6038,"row"),t(),e(6039,": conte\xFAdo da linha corrente"),t()(),i(6040,"p"),e(6041,"Modo de uso:"),t(),i(6042,"pre")(6043,"code"),e(6044,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com"
  >
    <ng-template t-grid-cell-template let-column="column" let-row="row">
     <div *ngIf="column.property === 'status' && row.status === 'CANCELED'">
       <h1 [style.background]="'red'">CANCELADA</h1>
       <span (click)="onClick()"><small>clique aqui</small></span>
     </div>
     <h1 *ngIf="column.property === 'status' && row.status === 'FINISHED'" [style.background]="'green'">FINALIZADA</h1>
     <h1 *ngIf="column.property === 'status' && row.status === 'OPENED'" [style.background]="'orange'">ABERTA</h1>
     <h1 *ngIf="column.property === 'status2'">Conte\xFAdo do status 2</h1>
     <h1 *ngIf="column.property === 'status3'">Conte\xFAdo do status 3</h1>
   </ng-template>
...`),t()(),i(6045,"blockquote")(6046,"p"),e(6047,"No exemplo acima, o usu\xE1rio tem como retorno "),i(6048,"code"),e(6049,"row"),t(),e(6050," e a "),i(6051,"code"),e(6052,"column"),t(),e(6053," corrente, neste caso ele tem total liberdade para manipular os objetos."),t()(),i(6054,"p"),e(6055,"Abaixo, a declara\xE7\xE3o dos dados de entrada do THF-GRID para o uso da directiva."),t(),i(6056,"pre")(6057,"code"),e(6058,`...
export class AppComponent {

   columns = [
      { property: 'code', label: 'ID' },
      { property: 'product', label: 'PRODUTO' },
      { property: 'status', label: 'STATUS', type: 'cellTemplate' },
      { property: 'status2', label: 'STATUS 2', type: 'cellTemplate' },
      { property: 'status3', label: 'STATUS 3', type: 'cellTemplate' }
   ];
}
...`),t()(),i(6059,"blockquote")(6060,"p"),e(6061,"Observa\xE7\xE3o: Sempre adicionar o "),i(6062,"strong"),e(6063,"type"),t(),e(6064," da coluna que deseja manipular com a directiva como "),i(6065,"code"),e(6066,"cellTemplate"),t()()()(),i(6067,"div",11)(6068,"h4",12),e(6069,"Seletor"),t(),i(6070,"pre",13),e(6071,`<[t-grid-cell-template] >
</[t-grid-cell-template]>
`),t()()(),i(6072,"po-accordion-item",157)(6073,"h4",9)(6074,"code"),e(6075,"ThfGridColumnTemplateDirective"),t()(),i(6076,"div",10)(6077,"p"),e(6078,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),t(),i(6079,"p"),e(6080,"Em seu uso, deve-se utilizar como par\xE2metro de entrada o input "),i(6081,"strong"),e(6082,"[t-property]"),t(),e(6083,`, o qual \xE9 respons\xE1vel por informar ao THF-GRID qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),t(),i(6084,"p"),e(6085,"Retorno:"),t(),i(6086,"ul")(6087,"li"),e(6088,"value: valor referente ao conte\xFAdo da linha corrente."),t()(),i(6089,"p"),e(6090,"Modo de uso:"),t(),i(6091,"pre")(6092,"code",28),e(6093,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com">
  <ng-template t-grid-column-template [t-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</thf-grid>
...`),t()(),i(6094,"blockquote")(6095,"p"),e(6096,"No exemplo acima, todas as c\xE9lulas correspondentes a coluna "),i(6097,"code"),e(6098,"status"),t(),e(6099," ter\xE3o o conte\xFAdo alterado para "),i(6100,"code"),e(6101,"<h1>${value}</h1>"),t(),e(6102,`,
sendo que `),i(6103,"code"),e(6104,"value"),t(),e(6105," refere-se ao conte\xFAdo da linha."),t()(),i(6106,"pre")(6107,"code",28),e(6108,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com">
  <ng-template  t-grid-column-template [t-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</thf-grid>
...`),t()(),i(6109,"blockquote")(6110,"p"),e(6111,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),t()(),i(6112,"p"),e(6113,"Abaixo, a declara\xE7\xE3o dos dados de entrada do THF-GRID para o uso da directiva."),t(),i(6114,"pre")(6115,"code",31),e(6116,`...
export class AppComponent {

   targetProperty= 'status';

   columns = [
     { property: 'code', label: 'ID' },
     { property: 'product', label: 'PRODUTO' },
     { property: 'status', label: 'STATUS', type: 'columnTemplate' }
   ];
}
...`),t()(),i(6117,"blockquote")(6118,"p"),e(6119,"Observa\xE7\xE3o: Sempre adicionar o "),i(6120,"strong"),e(6121,"type"),t(),e(6122," da coluna que deseja manipular com a directiva como "),i(6123,"code"),e(6124,"columnTemplate"),t()()()(),i(6125,"div",11)(6126,"h4",12),e(6127,"Seletor"),t(),i(6128,"pre",13),e(6129,`<[t-grid-column-template] >
</[t-grid-column-template]>
`),t()()()()(),y(6130,8),t(),i(6131,"po-tab",158)(6132,"po-container",5),y(6133,9),i(6134,"h3",159),e(6135,"Tokens customiz\xE1veis"),t(),i(6136,"p"),e(6137,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(6138,"blockquote")(6139,"p"),e(6140,"Para maiores informa\xE7\xF5es, acesse o guia "),i(6141,"a",160),e(6142,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(6143,"."),t()(),i(6144,"table")(6145,"thead")(6146,"tr")(6147,"th"),e(6148,"Propriedade"),t(),i(6149,"th"),e(6150,"Descri\xE7\xE3o"),t(),i(6151,"th"),e(6152,"Valor Padr\xE3o"),t()()(),i(6153,"tbody")(6154,"tr")(6155,"td")(6156,"strong"),e(6157,"Default Values"),t()(),o(6158,"td")(6159,"td"),t(),i(6160,"tr")(6161,"td")(6162,"code"),e(6163,"--font-family"),t()(),i(6164,"td"),e(6165,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(6166,"td")(6167,"code"),e(6168,"var(--font-family-theme)"),t()()(),i(6169,"tr")(6170,"td")(6171,"code"),e(6172,"--background-color"),t()(),i(6173,"td"),e(6174,"Cor de background"),t(),i(6175,"td")(6176,"code"),e(6177,"var(--color-neutral-light-00)"),t()()(),i(6178,"tr")(6179,"td")(6180,"code"),e(6181,"--color"),t()(),i(6182,"td"),e(6183,"Cor principal da table"),t(),i(6184,"td")(6185,"code"),e(6186,"var(--color-neutral-dark-95)"),t()()(),i(6187,"tr")(6188,"td")(6189,"code"),e(6190,"--background-striped-color"),t()(),i(6191,"td"),e(6192,"Cor do background quando striped"),t(),i(6193,"td")(6194,"code"),e(6195,"var(--color-neutral-light-05)"),t()()(),i(6196,"tr")(6197,"td")(6198,"code"),e(6199,"--color-line"),t()(),i(6200,"td"),e(6201,"Cor das linhas"),t(),i(6202,"td")(6203,"code"),e(6204,"var(--color-neutral-mid-40)"),t()()(),i(6205,"tr")(6206,"td")(6207,"strong"),e(6208,"Hover"),t()(),o(6209,"td")(6210,"td"),t(),i(6211,"tr")(6212,"td")(6213,"code"),e(6214,"--color-hover"),t()(),i(6215,"td"),e(6216,"Cor principal no estado hover"),t(),i(6217,"td")(6218,"code"),e(6219,"var(--color-action-hover)"),t()()(),i(6220,"tr")(6221,"td")(6222,"code"),e(6223,"--background-color-hover"),t()(),i(6224,"td"),e(6225,"Cor de background no estado hover"),t(),i(6226,"td")(6227,"code"),e(6228,"var(--color-brand-01-lighter)"),t()()(),i(6229,"tr")(6230,"td")(6231,"strong"),e(6232,"Focused"),t()(),o(6233,"td")(6234,"td"),t(),i(6235,"tr")(6236,"td")(6237,"code"),e(6238,"--outline-color-focused"),t()(),i(6239,"td"),e(6240,"Cor do outline do estado de focus"),t(),i(6241,"td")(6242,"code"),e(6243,"var(--color-action-focus)"),t()()(),i(6244,"tr")(6245,"td")(6246,"strong"),e(6247,"Disabled"),t()(),o(6248,"td")(6249,"td"),t(),i(6250,"tr")(6251,"td")(6252,"code"),e(6253,"--color-disabled"),t()(),i(6254,"td"),e(6255,"Cor principal no estado disabled"),t(),i(6256,"td")(6257,"code"),e(6258,"var(--color-neutral-mid-40)"),t()()(),i(6259,"tr")(6260,"td")(6261,"strong"),e(6262,"Headline"),t()(),o(6263,"td")(6264,"td"),t(),i(6265,"tr")(6266,"td")(6267,"code"),e(6268,"--background-color-headline"),t()(),i(6269,"td"),e(6270,"Cor do cabe\xE7alho"),t(),i(6271,"td")(6272,"code"),e(6273,"var(--color-neutral-light-10)"),t()()(),i(6274,"tr")(6275,"td")(6276,"code"),e(6277,"--font-weight-headline"),t()(),i(6278,"td"),e(6279,"Peso da fonte do cabe\xE7alho"),t(),i(6280,"td")(6281,"code"),e(6282,"var(--font-weight-bold)"),t()()(),i(6283,"tr")(6284,"td")(6285,"strong"),e(6286,"Selected"),t()(),o(6287,"td")(6288,"td"),t(),i(6289,"tr")(6290,"td")(6291,"code"),e(6292,"--background-color-selected"),t()(),i(6293,"td"),e(6294,"Cor de background no estado de selecionado"),t(),i(6295,"td")(6296,"code"),e(6297,"var(--color-brand-01-lightest)"),t()()(),i(6298,"tr")(6299,"td")(6300,"code"),e(6301,"--color-actived"),t()(),i(6302,"td"),e(6303,"Cor do texto no estado de selecionado"),t(),i(6304,"td")(6305,"code"),e(6306,"var(--color-neutral-dark-90)"),t()()(),i(6307,"tr")(6308,"td")(6309,"strong"),e(6310,"Pressed"),t()(),o(6311,"td")(6312,"td"),t(),i(6313,"tr")(6314,"td")(6315,"code"),e(6316,"--background-color-actived"),t()(),i(6317,"td"),e(6318,"Cor de background da a\xE7\xE3o quando pressionada"),t(),i(6319,"td")(6320,"code"),e(6321,"var(--color-brand-01-light)"),t()()(),i(6322,"tr"),o(6323,"td")(6324,"td")(6325,"td"),t(),i(6326,"tr")(6327,"td")(6328,"strong"),e(6329,"Toolbar Title"),t()(),o(6330,"td")(6331,"td"),t(),i(6332,"tr")(6333,"td")(6334,"code"),e(6335,"--font-size-toolbar-title"),t()(),i(6336,"td"),e(6337,"Tamanho da fonte do Titulo da toolbar da Grid"),t(),i(6338,"td"),e(6339,"1.125rem"),t()(),i(6340,"tr")(6341,"td")(6342,"code"),e(6343,"--letter-spacing-toolbar-title"),t()(),i(6344,"td"),e(6345,"Espa\xE7amento entre letras do Titulo da toolbar da Grid"),t(),i(6346,"td"),e(6347,"0.017rem"),t()()()()(),y(6348,10),t(),i(6349,"po-tab",161),y(6350,11),t()()())},dependencies:[L,U,v,Te,Y,j],encapsulation:2})}}return d})();var ni=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],oi=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],ft=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let C=E.querySelector(".po-tab-button-label");C&&C?.textContent?.trim().toLowerCase()===a&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(G(J))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-lookup"]],viewQuery:function(r,n){if(r&1&&(w(j,5),w(L,5)),r&2){let l;D(l=A())&&(n.tabs=l.first),D(l=A())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:oi,decls:2598,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","Array<ThfLookupColumn>"],[1,"language-html"],[1,"language-typescript"],["p-type","success","p-value","since 19.8.0"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","((item:","any)","=>","string)"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<ThfLookupFilterSearchSelect>"],["pan","",1,"docs-api-property-type","ThfLookupFilter"],["href","https://po-ui.io/guides/api"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","ThfLookupGridProperties"],["pan","",1,"docs-api-property-type","Array<ThfLookupKeysLabel>"],["pan","",1,"docs-api-property-type","ThfLookupLiterals"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","'equal'"],["pan","",1,"docs-api-property-type","'include'"],["p-label","M\xE9todos"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["p-label","Interfaces"],["p-label","ThfLookupColumn"],["pan","",1,"docs-api-property-type","PoTableBoolean"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["href","https://po-ui.io/documentation/po-i18n"],["p-label","ThfLookupFilterSearchSelect"],["p-label","ThfLookupFilter"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","Array<any>"],["p-label","ThfLookupFilteredItemsParams"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","number"],["p-label","ThfLookupGridProperties"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","Array<{","field:","string;","dir:","'asc'"],["pan","",1,"docs-api-property-type","'desc';","}>"],["pan","",1,"docs-api-property-type","'extraSmall'"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["p-label","ThfLookupKeysLabel"],["p-label","ThfLookupLiterals"],["p-label","ThfLookupResponseApi"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&($(ni),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),y(4),t(),i(5,"po-tab",4),y(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfLookupComponent"),t()(),i(16,"div",10)(17,"p"),e(18,`Componente utilizado para abrir um modal de busca com um grid que lista dados de um servi\xE7o.
Neste modal \xE9 poss\xEDvel buscar e selecionar um ou mais registros que ser\xE3o enviados para o campo.
O `),i(19,"code"),e(20,"thf-lookup"),t(),e(21," permite que o usu\xE1rio digite um valor e pressione a tecla TAB para buscar um registro."),t(),i(22,"p"),e(23,"\xC9 possivel realizar a importa\xE7\xE3o individual do "),i(24,"code"),e(25,"THF-Lookup"),t(),e(26,` no seu m\xF3dulo ou componente(caso esteja utilizando standalone):
`),i(27,"code"),e(28,"import { ThfLookupComponent } from '@totvs/thf-components';"),t()()(),i(29,"div",11)(30,"h4",12),e(31,"Seletor"),t(),i(32,"pre",13),e(33,`<thf-lookup
  t-additional-help="EventEmitter"
  t-additional-help-tooltip="string"
  t-append-in-body="boolean"
  t-auto-focus="boolean"
  t-auto-height="boolean"
  (t-change)="EventEmitter"
  (t-change-model)="EventEmitter"
  t-clean="boolean"
  t-columns="Array<ThfLookupColumn>"
  t-size="string"
  t-disabled="boolean"
  t-error-limit="boolean"
  t-field-error-message="string"
  t-field-format="Array<string> | ((item: any) => string)"
  t-field-label="string"
  t-field-value="string"
  t-filter-params="any"
  t-filter-search-select="Array<ThfLookupFilterSearchSelect>"
  t-filter-service="ThfLookupFilter | string"
  t-grid-properties="ThfLookupGridProperties"
  t-help="string"
  (t-focus)="EventEmitter"
  t-key-last-search="string"
  (t-keydown)="EventEmitter"
  t-keys-label="Array<ThfLookupKeysLabel>"
  t-label="string"
  t-label-text-wrap="boolean"
  t-literals="ThfLookupLiterals"
  t-multiple="boolean"
  t-no-autocomplete="boolean"
  (t-error)="EventEmitter"
  t-optional="boolean"
  t-placeholder="string"
  t-helper="PoHelperOptions"
  t-required="boolean"
  t-search-on-enter="'equal' | 'include'"
  (t-selected)="EventEmitter"
  t-show-required="boolean"
  t-modal-size="string" >
</thf-lookup>
`),t()()(),i(34,"po-accordion-item",14)(35,"h4",15),e(36,"Propriedades"),t(),i(37,"table",16)(38,"tr",17)(39,"th",18),e(40,"Nome"),t(),i(41,"th",18),e(42,"Tipo"),t(),i(43,"th",18),e(44,"Padr\xE3o"),t(),i(45,"th",18),e(46,"Descri\xE7\xE3o"),t()(),i(47,"tr",19)(48,"td",20)(49,"div",21)(50,"span",22),e(51,"t-additional-help"),o(52,"br"),t()(),i(53,"div",23),e(54,"Deprecated"),t()(),i(55,"td",24)(56,"code",25),e(57,"EventEmitter"),t()(),i(58,"td",26),e(59,"-"),t(),i(60,"td",27)(61,"em")(62,"strong"),e(63,"(opcional)"),t()(),i(64,"p"),e(65,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),i(66,"blockquote")(67,"p"),e(68,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade t-helper que oferece mais recursos e flexibilidade."),t()()()(),i(69,"tr",19)(70,"td",20)(71,"div",21)(72,"span",22),e(73,"t-additional-help-tooltip"),o(74,"br"),t()(),i(75,"div",23),e(76,"Deprecated"),t()(),i(77,"td",24)(78,"code",28),e(79,"string"),t()(),i(80,"td",26),e(81,"-"),t(),i(82,"td",27)(83,"em")(84,"strong"),e(85,"(opcional)"),t()(),i(86,"p"),e(87,"Exibe um \xEDcone de ajuda adicional, om o texto desta propriedade sendo passado para o popover do componente "),i(88,"code"),e(89,"po-helper"),t(),e(90,`.
`),i(91,"strong"),e(92,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(93,"blockquote")(94,"p"),e(95,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),i(96,"blockquote")(97,"p"),e(98,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade t-helper que oferece mais recursos e flexibilidade."),t()()()(),i(99,"tr",19)(100,"td",20)(101,"div",21)(102,"span",22),e(103," t-append-in-body"),o(104,"br"),t()()(),i(105,"td",24)(106,"code",29),e(107,"boolean"),t()(),i(108,"td",26)(109,"p")(110,"code"),e(111,"false"),t()()(),i(112,"td",27)(113,"em")(114,"strong"),e(115,"(opcional)"),t()(),i(116,"p"),e(117,"Define que o "),i(118,"code"),e(119,"listbox"),t(),e(120," e/ou popover ("),i(121,"code"),e(122,"t-helper"),t(),e(123," e/ou "),i(124,"code"),e(125,"t-error-limit"),t(),e(126,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),i(127,"blockquote")(128,"p"),e(129,"Quando utilizado com "),i(130,"code"),e(131,"t-helper"),t(),e(132,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),i(133,"tr",19)(134,"td",20)(135,"div",21)(136,"span",22),e(137,"t-auto-focus"),o(138,"br"),t()()(),i(139,"td",24)(140,"code",29),e(141,"boolean"),t()(),i(142,"td",26)(143,"p")(144,"code"),e(145,"false"),t()()(),i(146,"td",27)(147,"em")(148,"strong"),e(149,"(opcional)"),t()(),i(150,"p"),e(151,"Aplica foco no elemento ao ser iniciado."),t(),i(152,"blockquote")(153,"p"),e(154,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),i(155,"tr",19)(156,"td",20)(157,"div",21)(158,"span",22),e(159,"t-auto-height"),o(160,"br"),t()()(),i(161,"td",24)(162,"code",29),e(163,"boolean"),t()(),i(164,"td",26)(165,"p")(166,"code"),e(167,"false"),t()()(),i(168,"td",27)(169,"em")(170,"strong"),e(171,"(opcional)"),t()(),i(172,"p"),e(173,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, com altura m\xEDnima fixa e altura m\xE1xima de acordo
com o n\xFAmero de itens selecionados, mantendo-os sempre vis\xEDveis.`),t()()(),i(174,"tr",19)(175,"td",20)(176,"div",30)(177,"span",31),e(178," (t-change)"),o(179,"br"),t()()(),i(180,"td",24)(181,"code",25),e(182,"EventEmitter"),t()(),i(183,"td",26),e(184,"-"),t(),i(185,"td",27)(186,"em")(187,"strong"),e(188,"(opcional)"),t()(),i(189,"p"),e(190,"Evento disparado quando ocorre mudan\xE7as de valor realizadas pelo usu\xE1rio."),t()()(),i(191,"tr",19)(192,"td",20)(193,"div",30)(194,"span",31),e(195," (t-change-model)"),o(196,"br"),t()()(),i(197,"td",24)(198,"code",25),e(199,"EventEmitter"),t()(),i(200,"td",26),e(201,"-"),t(),i(202,"td",27)(203,"em")(204,"strong"),e(205,"(opcional)"),t()(),i(206,"p"),e(207,"Evento disparado quando ocorre mudan\xE7as de valor no campo realizados pelo usu\xE1rio ou altera\xE7\xF5es de valores de forma din\xE2mica."),t()()(),i(208,"tr",19)(209,"td",20)(210,"div",21)(211,"span",22),e(212,"t-clean"),o(213,"br"),t()()(),i(214,"td",24)(215,"code",29),e(216,"boolean"),t()(),i(217,"td",26)(218,"p")(219,"code"),e(220,"false"),t()()(),i(221,"td",27)(222,"em")(223,"strong"),e(224,"(opcional)"),t()(),i(225,"p"),e(226,"Exibe um \xEDcone que permite limpar o campo. No caso de sele\xE7\xE3o m\xFAltipla, esta op\xE7\xE3o sempre ser\xE1 "),i(227,"code"),e(228,"true"),t(),e(229,"."),t()()(),i(230,"tr",19)(231,"td",20)(232,"div",21)(233,"span",22),e(234,"t-columns"),o(235,"br"),t()()(),i(236,"td",24)(237,"code",32),e(238,"Array<ThfLookupColumn>"),t()(),i(239,"td",26),e(240,"-"),t(),i(241,"td",27)(242,"em")(243,"strong"),e(244,"(opcional)"),t()(),i(245,"p"),e(246,"Permite definir e configurar as colunas do grid dentro do modal de busca avan\xE7ada por meio da interface "),i(247,"strong"),e(248,"ThfLookupColumn"),t(),e(249,"."),t(),i(250,"pre")(251,"code",33),e(252,`// Exemplo de uso:
<thf-lookup
 ...
 [t-columns]="columns"
></thf-lookup>`),t()(),i(253,"pre")(254,"code",34),e(255,`columns: Array<ThfLookupColumn> = [
 { property: 'id', label: 'C\xF3digo' },
 { property: 'name', label: 'Nome' },
}`),t()()()(),i(256,"tr",19)(257,"td",20)(258,"div",21)(259,"span",22),e(260," t-size"),o(261,"br"),t(),o(262,"po-tag",35),t()(),i(263,"td",24)(264,"code",28),e(265,"string"),t()(),i(266,"td",26)(267,"p")(268,"code"),e(269,"medium"),t()()(),i(270,"td",27)(271,"em")(272,"strong"),e(273,"(opcional)"),t()(),i(274,"p"),e(275,"Define o tamanho do componente:"),t(),i(276,"ul")(277,"li")(278,"code"),e(279,"small"),t(),e(280,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(281,"li")(282,"code"),e(283,"medium"),t(),e(284,": altura do input como 44px."),t()(),i(285,"blockquote")(286,"p"),e(287,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(288,"code"),e(289,"medium"),t(),e(290,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(291,"a",36),e(292,"po-theme"),t(),e(293,"."),t()()()(),i(294,"tr",19)(295,"td",20)(296,"div",21)(297,"span",22),e(298,"t-disabled"),o(299,"br"),t()()(),i(300,"td",24)(301,"code",29),e(302,"boolean"),t()(),i(303,"td",26)(304,"p")(305,"code"),e(306,"false"),t()()(),i(307,"td",27)(308,"em")(309,"strong"),e(310,"(opcional)"),t()(),i(311,"p"),e(312,"Desabilita o campo."),t()()(),i(313,"tr",19)(314,"td",20)(315,"div",21)(316,"span",22),e(317,"t-error-limit"),o(318,"br"),t()()(),i(319,"td",24)(320,"code",29),e(321,"boolean"),t()(),i(322,"td",26)(323,"p")(324,"code"),e(325,"false"),t()()(),i(326,"td",27)(327,"em")(328,"strong"),e(329,"(opcional)"),t()(),i(330,"p"),e(331,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(332,"blockquote")(333,"p"),e(334,"Caso essa propriedade seja definida como "),i(335,"code"),e(336,"true"),t(),e(337,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(338,"tr",19)(339,"td",20)(340,"div",21)(341,"span",22),e(342,"t-field-error-message"),o(343,"br"),t()()(),i(344,"td",24)(345,"code",28),e(346,"string"),t()(),i(347,"td",26),e(348,"-"),t(),i(349,"td",27)(350,"em")(351,"strong"),e(352,"(opcional)"),t()(),i(353,"p"),e(354,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),i(355,"blockquote")(356,"p"),e(357,"Necess\xE1rio que a propriedade "),i(358,"code"),e(359,"t-required"),t(),e(360," esteja habilitada."),t()()()(),i(361,"tr",19)(362,"td",20)(363,"div",21)(364,"span",22),e(365," t-field-format"),o(366,"br"),t()()(),i(367,"td",24)(368,"code",37),e(369,"Array<string> "),t(),i(370,"code",38),e(371," ((item: any) => string)"),t()(),i(372,"td",26),e(373,"-"),t(),i(374,"td",27)(375,"em")(376,"strong"),e(377,"(opcional)"),t()(),i(378,"p"),e(379,"Formato de exibi\xE7\xE3o do campo."),t(),i(380,"p"),e(381,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(382,"em"),e(383,"string"),t(),e(384," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(385,"pre")(386,"code",34),e(387,"fieldFormat(obj) {\n  return `${obj.id} (${obj.name})`;\n}"),t()(),i(388,"pre")(389,"code",33),e(390,`<thf-lookup
  ...
  [t-field-format]="fieldFormat"
  ...
></thf-lookup>
<!-- Apresenta\xE7\xE3o no campo: 123 (Goku)  -->`),t()(),i(391,"p"),e(392,`Ou pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo.
Nessa caso, ser\xE1 utilizado `),i(393,"code"),e(394,"-"),t(),e(395,` como separador.
Por exemplo:`),t(),i(396,"pre")(397,"code",33),e(398,`<thf-lookup
  ...
  [t-field-format]="['id','nickname']"
  ...
></thf-lookup>
<!-- Apresenta\xE7\xE3o no campo: 123 - Goku  -->`),t()(),i(399,"blockquote")(400,"p"),e(401,"Esta propriedade sobrep\xF5e a "),i(402,"code"),e(403,"t-keys-label"),t(),e(404," como formata\xE7\xE3o do campo."),t()()()(),i(405,"tr",19)(406,"td",20)(407,"div",21)(408,"span",22),e(409,"t-field-label"),o(410,"br"),t()()(),i(411,"td",24)(412,"code",28),e(413,"string"),t()(),i(414,"td",26),e(415,"-"),t(),i(416,"td",27)(417,"p"),e(418,`Define a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e do filtro selecionado dentro do modal de busca avan\xE7ada.
Propriedade obrigat\xF3ria.`),t()()(),i(419,"tr",19)(420,"td",20)(421,"div",21)(422,"span",22),e(423,"t-field-value"),o(424,"br"),t()()(),i(425,"td",24)(426,"code",28),e(427,"string"),t()(),i(428,"td",26),e(429,"-"),t(),i(430,"td",27)(431,"p"),e(432,"Define a coluna que ser\xE1 utilizada como valor do campo. Propriedade obrigat\xF3ria."),t(),i(433,"blockquote")(434,"p"),e(435,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),i(436,"tr",19)(437,"td",20)(438,"div",21)(439,"span",22),e(440,"t-filter-params"),o(441,"br"),t()()(),i(442,"td",24)(443,"code",39),e(444,"any"),t()(),i(445,"td",26),e(446,"-"),t(),i(447,"td",27)(448,"em")(449,"strong"),e(450,"(opcional)"),t()(),i(451,"p"),e(452,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou ao servi\xE7o que implementa a interface "),i(453,"strong"),e(454,"ThfLookupFilter"),t(),e(455,"."),t()()(),i(456,"tr",19)(457,"td",20)(458,"div",21)(459,"span",22),e(460,"t-filter-search-select"),o(461,"br"),t()()(),i(462,"td",24)(463,"code",40),e(464,"Array<ThfLookupFilterSearchSelect>"),t()(),i(465,"td",26),e(466,"-"),t(),i(467,"td",27)(468,"em")(469,"strong"),e(470,"(opcional)"),t()(),i(471,"p"),e(472,`Permite definir quais colunas ser\xE3o op\xE7\xF5es de filtro dentro do modal de busca avan\xE7ada. Deve implementar a interface
`),i(473,"strong"),e(474,"ThfLookupFilterSearchSelect"),t(),e(475,"."),t(),i(476,"pre")(477,"code",33),e(478,`// Exemplo de uso:
<thf-lookup
 ...
 [t-filter-search-select]="filterSelect"
></thf-lookup>`),t()(),i(479,"pre")(480,"code",34),e(481,`filterSelect: Array<ThfLookupFilterSearchSelect> = [
 { label: 'Nome', value: 'name' },
 { label: 'Nickname', value: 'nickname' },
 { label: 'Email', value: 'email' }
];`),t()()()(),i(482,"tr",19)(483,"td",20)(484,"div",21)(485,"span",22),e(486,"t-filter-service"),o(487,"br"),t()()(),i(488,"td",24)(489,"code",41),e(490,"ThfLookupFilter "),t(),i(491,"code",28),e(492," string"),t()(),i(493,"td",26),e(494,"-"),t(),i(495,"td",27)(496,"p"),e(497,`Respons\xE1vel por buscar os dados exibidos no grid dentro do modal de busca avan\xE7ada. Aceita um servi\xE7o que implementa a interface
`),i(498,"strong"),e(499,"ThfLookupFilter"),t(),e(500," ou uma URL."),t(),i(501,"p"),e(502,`Quando uma URL \xE9 definida:
Se houver filtro, \xE9 adicionado o par\xE2metro `),i(503,"code"),e(504,"filter"),t(),e(505," com o valor da busca:"),t(),i(506,"pre")(507,"code"),e(508,"url + ?page=1&pageSize=20&filter=Peter"),t()(),i(509,"p"),e(510,"Se houver ordena\xE7\xE3o, \xE9 adicionado o par\xE2metro "),i(511,"code"),e(512,"order"),t(),e(513,` com o valor da coluna.
Exemplo de busca com ordena\xE7\xE3o decrescente:`),t(),i(514,"pre")(515,"code"),e(516,"url + ?page=1&pageSize=20&filter=Peter&order=-name"),t()(),i(517,"p"),e(518,"Exemplo de busca com ordena\xE7\xE3o crescente:"),t(),i(519,"pre")(520,"code"),e(521,"url + ?page=1&pageSize=20&filter=Peter&order=name"),t()(),i(522,"p"),e(523,"Se definido "),i(524,"strong"),e(525,"t-filter-params"),t(),e(526,`, seu valor tamb\xE9m ser\xE1 concatenado.
Exemplo com `),i(527,"code"),e(528,"{ age: 23 }"),t(),e(529,":"),t(),i(530,"pre")(531,"code"),e(532,"url + ?page=1&pageSize=20&age=23&filter=Peter"),t()(),i(533,"p"),e(534,`Se o campo precisar iniciar com valores, os registros s\xE3o buscados das seguintes formas:
Exemplo com a sele\xE7\xE3o \xFAnica:`),t(),i(535,"pre")(536,"code"),e(537,`model = 1234;

GET url/1234`),t()(),i(538,"p"),e(539,"Exemplo com a sele\xE7\xE3o m\xFAltipla:"),t(),i(540,"pre")(541,"code"),e(542,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678`),t()(),i(543,"blockquote")(544,"p"),e(545,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(546,"a",42),e(547,"API do PO UI"),t(),e(548,` e utilizar
os valores definidos nas propriedades `),i(549,"strong"),e(550,"t-field-label"),t(),e(551," e "),i(552,"strong"),e(553,"t-field-value"),t(),e(554," para a constru\xE7\xE3o do "),i(555,"strong"),e(556,"thf-lookup"),t(),e(557,"."),t()(),i(558,"p"),e(559,"Caso a busca tenha ocorrido pressionando a tecla "),i(560,"em"),e(561,"TAB"),t(),e(562,`, o filtro ser\xE1 codificado atrav\xE9s da fun\xE7\xE3o
`),i(563,"a",43),e(564,"encodeURIComponent"),t(),e(565,`, e portanto concatenado
na URL da seguinte forma:`),t(),i(566,"pre")(567,"code"),e(568,"url/valor%20que%20se%20deseja%20filtrar"),t()(),i(569,"blockquote")(570,"p"),e(571,"Caso utilize um servi\xE7o "),i(572,"strong"),e(573,"ThfLookupFilter"),t(),e(574,`, o tratamento de encoding do valor fica sob a responsabilidade do
desenvolvedor.`),t()()()(),i(575,"tr",19)(576,"td",20)(577,"div",21)(578,"span",22),e(579,"t-grid-properties"),o(580,"br"),t()()(),i(581,"td",24)(582,"code",44),e(583,"ThfLookupGridProperties"),t()(),i(584,"td",26),e(585,"-"),t(),i(586,"td",27)(587,"em")(588,"strong"),e(589,"(opcional)"),t()(),i(590,"p"),e(591,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup."),t(),i(592,"p"),e(593,"// Exemplo de uso:"),t(),i(594,"pre")(595,"code",33),e(596,`<thf-lookup
...
[t-grid-properties]="gridProperties"
></thf-lookup>`),t()(),i(597,"pre")(598,"code",34),e(599,`gridProperties: ThfLookupGridProperties = {
resizable: true,
autoSize: true,
autoSizeOnScroll: true,
virtualScroll: true,
}`),t()()()(),i(600,"tr",19)(601,"td",20)(602,"div",21)(603,"span",22),e(604,"t-help"),o(605,"br"),t()()(),i(606,"td",24)(607,"code",28),e(608,"string"),t()(),i(609,"td",26),e(610,"-"),t(),i(611,"td",27)(612,"em")(613,"strong"),e(614,"(opcional)"),t()(),i(615,"p"),e(616,"Texto de apoio do campo."),t()()(),i(617,"tr",19)(618,"td",20)(619,"div",30)(620,"span",31),e(621," (t-focus)"),o(622,"br"),t()()(),i(623,"td",24)(624,"code",25),e(625,"EventEmitter"),t()(),i(626,"td",26),e(627,"-"),t(),i(628,"td",27)(629,"em")(630,"strong"),e(631,"(opcional)"),t()(),i(632,"p"),e(633,"Evento emitido quando o campo de entrada (input) recebe foco."),t(),i(634,"p"),e(635,"Esse evento pode ser utilizado para realizar a\xE7\xF5es espec\xEDficas no momento em que o foco \xE9 aplicado ao input."),t()()(),i(636,"tr",19)(637,"td",20)(638,"div",21)(639,"span",22),e(640,"t-key-last-search"),o(641,"br"),t()()(),i(642,"td",24)(643,"code",28),e(644,"string"),t()(),i(645,"td",26),e(646,"-"),t(),i(647,"td",27)(648,"em")(649,"strong"),e(650,"(opcional)"),t()(),i(651,"p"),e(652,"Define um identificador \xFAnico para o campo. Marca\xE7\xE3o necess\xE1ria quando h\xE1 hist\xF3rico de \xFAltimas pesquisas."),t()()(),i(653,"tr",19)(654,"td",20)(655,"div",30)(656,"span",31),e(657," (t-keydown)"),o(658,"br"),t()()(),i(659,"td",24)(660,"code",25),e(661,"EventEmitter"),t()(),i(662,"td",26),e(663,"-"),t(),i(664,"td",27)(665,"em")(666,"strong"),e(667,"(opcional)"),t()(),i(668,"p"),e(669,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no campo.
Retorna um objeto `),i(670,"code"),e(671,"KeyboardEvent"),t(),e(672," com informa\xE7\xF5es sobre a tecla."),t()()(),i(673,"tr",19)(674,"td",20)(675,"div",21)(676,"span",22),e(677,"t-keys-label"),o(678,"br"),t()()(),i(679,"td",24)(680,"code",45),e(681,"Array<ThfLookupKeysLabel>"),t()(),i(682,"td",26),e(683,"-"),t(),i(684,"td",27)(685,"em")(686,"strong"),e(687,"(opcional)"),t()(),i(688,"p"),e(689,"Permite definir at\xE9 3 propriedades do item selecionado que ficar\xE3o vis\xEDveis no campo."),t(),i(690,"pre")(691,"code",33),e(692,`<thf-lookup
 ...
 [t-keys-label]="keysLabel"
></thf-lookup>`),t()(),i(693,"pre")(694,"code",34),e(695,`keysLabel: Array<ThfLookupKeysLabel> = [
 { label: 'Nome', value: 'name' },
 { label: 'Email', value: 'email' }
];`),t()(),i(696,"pre")(697,"code"),e(698,`// sa\xEDda no campo:
Robert Bruce Banner-hulksmash@marvel.com`),t()()()(),i(699,"tr",19)(700,"td",20)(701,"div",21)(702,"span",22),e(703,"t-label"),o(704,"br"),t()()(),i(705,"td",24)(706,"code",28),e(707,"string"),t()(),i(708,"td",26),e(709,"-"),t(),i(710,"td",27)(711,"em")(712,"strong"),e(713,"(opcional)"),t()(),i(714,"p"),e(715,"Label do campo. Tamb\xE9m usado como t\xEDtulo do modal de busca avan\xE7ada, se "),i(716,"code"),e(717,"modalTitle"),t(),e(718," n\xE3o estiver definido em "),i(719,"strong"),e(720,"t-literals"),t(),e(721,"."),t()()(),i(722,"tr",19)(723,"td",20)(724,"div",21)(725,"span",22),e(726," t-label-text-wrap"),o(727,"br"),t()()(),i(728,"td",24)(729,"code",29),e(730,"boolean"),t()(),i(731,"td",26)(732,"p")(733,"code"),e(734,"false"),t()()(),i(735,"td",27)(736,"em")(737,"strong"),e(738,"(opcional)"),t()(),i(739,"p"),e(740,"Habilita a quebra autom\xE1tica do texto da propriedade "),i(741,"code"),e(742,"t-label"),t(),e(743,". Quando "),i(744,"code"),e(745,"t-label-text-wrap"),t(),e(746,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),i(747,"tr",19)(748,"td",20)(749,"div",21)(750,"span",22),e(751,"t-literals"),o(752,"br"),t()()(),i(753,"td",24)(754,"code",46),e(755,"ThfLookupLiterals"),t()(),i(756,"td",26),e(757,"-"),t(),i(758,"td",27)(759,"em")(760,"strong"),e(761,"(opcional)"),t()(),i(762,"p"),e(763,"Permite definir literais personalizados para o componente, conforme a interface "),i(764,"strong"),e(765,"ThfLookupLiterals"),t(),e(766,"."),t(),i(767,"pre")(768,"code",33),e(769,`// Exemplo de uso:
<thf-lookup
 ...
 [t-literals]="customLiterals"
></thf-lookup>`),t()(),i(770,"pre")(771,"code",34),e(772,"customLiterals: ThfLookupLiterals = { modalTitle: 'Busca avan\xE7ada' };"),t()()()(),i(773,"tr",19)(774,"td",20)(775,"div",21)(776,"span",22),e(777,"t-multiple"),o(778,"br"),t()()(),i(779,"td",24)(780,"code",29),e(781,"boolean"),t()(),i(782,"td",26)(783,"p")(784,"code"),e(785,"false"),t()()(),i(786,"td",27)(787,"em")(788,"strong"),e(789,"(opcional)"),t()(),i(790,"p"),e(791,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(792,"blockquote")(793,"p"),e(794,"Quando habilitado, o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(795,"code"),e(796,"[ 12345, 67890 ]"),t()()()()(),i(797,"tr",19)(798,"td",20)(799,"div",21)(800,"span",22),e(801,"t-no-autocomplete"),o(802,"br"),t()()(),i(803,"td",24)(804,"code",29),e(805,"boolean"),t()(),i(806,"td",26)(807,"p")(808,"code"),e(809,"false"),t()()(),i(810,"td",27)(811,"em")(812,"strong"),e(813,"(opcional)"),t()(),i(814,"p"),e(815,"Desabilita o "),i(816,"code"),e(817,"autocomplete"),t(),e(818," (propriedade nativa) do campo."),t()()(),i(819,"tr",19)(820,"td",20)(821,"div",30)(822,"span",31),e(823," (t-error)"),o(824,"br"),t()()(),i(825,"td",24)(826,"code",25),e(827,"EventEmitter"),t()(),i(828,"td",26),e(829,"-"),t(),i(830,"td",27)(831,"em")(832,"strong"),e(833,"(opcional)"),t()(),i(834,"p"),e(835,`Evento disparado quando ocorre algum erro na requisi\xE7\xE3o de busca.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(836,"tr",19)(837,"td",20)(838,"div",21)(839,"span",22),e(840,"t-optional"),o(841,"br"),t()()(),i(842,"td",24)(843,"code",29),e(844,"boolean"),t()(),i(845,"td",26)(846,"p")(847,"code"),e(848,"false"),t()()(),i(849,"td",27)(850,"em")(851,"strong"),e(852,"(opcional)"),t()(),i(853,"p"),e(854,"Exibe um indicador opcional no campo. Requer que "),i(855,"strong"),e(856,"t-label"),t(),e(857," esteja definido e "),i(858,"strong"),e(859,"t-required"),t(),e(860," desabilitado."),t()()(),i(861,"tr",19)(862,"td",20)(863,"div",21)(864,"span",22),e(865,"t-placeholder"),o(866,"br"),t()()(),i(867,"td",24)(868,"code",28),e(869,"string"),t()(),i(870,"td",26),e(871,"-"),t(),i(872,"td",27)(873,"em")(874,"strong"),e(875,"(opcional)"),t()(),i(876,"p"),e(877,"Texto exibido enquanto o campo estiver vazio."),t()()(),i(878,"tr",19)(879,"td",20)(880,"div",21)(881,"span",22),e(882," t-helper"),o(883,"br"),t()()(),i(884,"td",24)(885,"code",47),e(886,"PoHelperOptions"),t()(),i(887,"td",26),e(888,"-"),t(),i(889,"td",27)(890,"em")(891,"strong"),e(892,"(opcional)"),t()(),i(893,"p"),e(894,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),i(895,"p"),e(896,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),i(897,"code"),e(898,"t-additional-help-tooltip"),t(),e(899," e "),i(900,"code"),e(901,"t-additional-help"),t(),e(902,") ser\xE1 ignorado."),t()()(),i(903,"tr",19)(904,"td",20)(905,"div",21)(906,"span",22),e(907,"t-required"),o(908,"br"),t()()(),i(909,"td",24)(910,"code",29),e(911,"boolean"),t()(),i(912,"td",26)(913,"p")(914,"code"),e(915,"false"),t()()(),i(916,"td",27)(917,"em")(918,"strong"),e(919,"(opcional)"),t()(),i(920,"p"),e(921,"Define o campo como obrigat\xF3rio. Caso "),i(922,"strong"),e(923,"t-disabled"),t(),e(924," esteja habilitado, a obrigatoriedade ser\xE1 ignorada."),t()()(),i(925,"tr",19)(926,"td",20)(927,"div",21)(928,"span",22),e(929,"t-search-on-enter"),o(930,"br"),t()()(),i(931,"td",24)(932,"code",48),e(933,"'equal' "),t(),i(934,"code",49),e(935," 'include'"),t()(),i(936,"td",26)(937,"p")(938,"code"),e(939,"equal"),t()()(),i(940,"td",27)(941,"em")(942,"strong"),e(943,"(opcional)"),t()(),i(944,"p"),e(945,"Realiza busca do item ao pressionar a tecla Enter."),t(),i(946,"blockquote")(947,"p"),e(948,"Caso essa propriedade seja definida como "),i(949,"code"),e(950,"equal"),t(),e(951,`, a busca ser\xE1 realizada quando o valor do campo for exatamente igual ao valor do item.
Caso seja definida como `),i(952,"code"),e(953,"include"),t(),e(954,", a busca retornar\xE1 o primeiro item que contenha o valor do campo."),t()()()(),i(955,"tr",19)(956,"td",20)(957,"div",30)(958,"span",31),e(959," (t-selected)"),o(960,"br"),t()()(),i(961,"td",24)(962,"code",25),e(963,"EventEmitter"),t()(),i(964,"td",26),e(965,"-"),t(),i(966,"td",27)(967,"em")(968,"strong"),e(969,"(opcional)"),t()(),i(970,"p"),e(971,`Evento disparado ao selecionar um item.
Para sele\xE7\xE3o m\xFAltipla, retorna a lista de itens selecionados contendo os valores da coluna definida em `),i(972,"strong"),e(973,"t-field-value"),t(),e(974,`.
Para sele\xE7\xE3o \xFAnica retorna o objeto do item.`),t()()(),i(975,"tr",19)(976,"td",20)(977,"div",21)(978,"span",22),e(979,"t-show-required"),o(980,"br"),t()()(),i(981,"td",24)(982,"code",29),e(983,"boolean"),t()(),i(984,"td",26)(985,"p")(986,"code"),e(987,"false"),t()()(),i(988,"td",27)(989,"em")(990,"strong"),e(991,"(opcional)"),t()(),i(992,"p"),e(993,"Exibe um indicador de obrigatoriedade no campo. Requer que "),i(994,"strong"),e(995,"t-required"),t(),e(996," esteja habilitado e "),i(997,"strong"),e(998,"t-label"),t(),e(999," definido."),t()()(),i(1e3,"tr",19)(1001,"td",20)(1002,"div",21)(1003,"span",22),e(1004," t-modal-size"),o(1005,"br"),t()()(),i(1006,"td",24)(1007,"code",28),e(1008,"string"),t()(),i(1009,"td",26)(1010,"p")(1011,"code"),e(1012,"lg"),t()()(),i(1013,"td",27)(1014,"em")(1015,"strong"),e(1016,"(opcional)"),t()(),i(1017,"p"),e(1018,"Define o tamanho do modal."),t(),i(1019,"p"),e(1020,"Valores v\xE1lidos:"),t(),i(1021,"ul")(1022,"li")(1023,"code"),e(1024,"sm"),t(),e(1025," (pequeno)"),t(),i(1026,"li")(1027,"code"),e(1028,"md"),t(),e(1029," (m\xE9dio)"),t(),i(1030,"li")(1031,"code"),e(1032,"lg"),t(),e(1033," (grande)"),t(),i(1034,"li")(1035,"code"),e(1036,"xl"),t(),e(1037," (extra grande)"),t(),i(1038,"li")(1039,"code"),e(1040,"auto"),t(),e(1041," (autom\xE1tico)"),t()(),i(1042,"blockquote")(1043,"p"),e(1044,"Quando informado "),i(1045,"code"),e(1046,"auto"),t(),e(1047,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),i(1048,"code"),e(1049,"lg"),t(),e(1050,"."),t()()()()()(),i(1051,"po-accordion-item",50)(1052,"table",51)(1053,"tr",19)(1054,"th",52)(1055,"div",21)(1056,"h4")(1057,"span",22),e(1058," showAdditionalHelp "),t()()()()(),i(1059,"tr",27)(1060,"td",27)(1061,"p"),e(1062,"M\xE9todo que exibe "),i(1063,"code"),e(1064,"t-helper"),t(),e(1065," ou executa a a\xE7\xE3o definida em "),i(1066,"code"),e(1067,"t-helper{eventOnClick}"),t(),e(1068," ou em "),i(1069,"code"),e(1070,"t-additionalHelp"),t(),e(1071,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(1072,"code"),e(1073,"t-keydown"),t(),e(1074,"."),t(),i(1075,"pre")(1076,"code"),e(1077,`<thf-lookup
 #lookup
 ...
 t-helper="Mensagem de ajuda complementar"
 (t-keydown)="onKeyDown($event, lookup)"
></thf-lookup>`),t()(),i(1078,"pre")(1079,"code"),e(1080,`...
onKeyDown(event: KeyboardEvent, inp: ThfLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}`),t()()()()(),o(1081,"br"),t()()(),y(1082,2),t(),i(1083,"po-tab",53),y(1084,3),i(1085,"po-container",5)(1086,"po-accordion",6)(1087,"po-accordion-item",54)(1088,"h4",9)(1089,"code"),e(1090,"ThfLookupColumn"),t()(),i(1091,"div",10)(1092,"p"),e(1093,"Interface para configura\xE7\xE3o das colunas ("),i(1094,"strong"),e(1095,"t-columns"),t(),e(1096,")."),t()(),i(1097,"h4",15),e(1098,"Propriedades"),t(),i(1099,"table",16)(1100,"tr",17)(1101,"th",18),e(1102,"Nome"),t(),i(1103,"th",18),e(1104,"Tipo"),t(),i(1105,"th",18),e(1106,"Descri\xE7\xE3o"),t()(),i(1107,"tr",19)(1108,"td",20)(1109,"div",21)(1110,"span",22),e(1111," boolean"),o(1112,"br"),t()()(),i(1113,"td",24)(1114,"code",55),e(1115,"PoTableBoolean"),t()(),i(1116,"td",27)(1117,"em")(1118,"strong"),e(1119,"(opcional)"),t()(),i(1120,"p"),e(1121,"Define um objeto do tipo "),i(1122,"code"),e(1123,"PoTableBoolean"),t(),e(1124," para as colunas do tipo "),i(1125,"em"),e(1126,"boolean"),t(),e(1127,". Por exemplo:"),t(),i(1128,"pre")(1129,"code"),e(1130,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}`),t()(),i(1131,"blockquote")(1132,"p"),e(1133,"Caso n\xE3o seja definido um objeto para colunas do tipo "),i(1134,"em"),e(1135,"boolean"),t(),e(1136,`,
esta exibir\xE1 por padr\xE3o `),i(1137,"code"),e(1138,"Sim"),t(),e(1139," e "),i(1140,"code"),e(1141,"N\xE3o"),t(),e(1142," de acordo com os valores "),i(1143,"em"),e(1144,"booleanos"),t(),e(1145,"."),t()()()(),i(1146,"tr",19)(1147,"td",20)(1148,"div",21)(1149,"span",22),e(1150," booleanFalse"),o(1151,"br"),t()()(),i(1152,"td",24)(1153,"code",28),e(1154,"string"),t()(),i(1155,"td",27)(1156,"em")(1157,"strong"),e(1158,"(opcional)"),t()(),i(1159,"p"),e(1160,"Texto exibido quando o valor da coluna for "),i(1161,"em"),e(1162,"false"),t(),e(1163,"."),t()()(),i(1164,"tr",19)(1165,"td",20)(1166,"div",21)(1167,"span",22),e(1168," booleanTrue"),o(1169,"br"),t()()(),i(1170,"td",24)(1171,"code",28),e(1172,"string"),t()(),i(1173,"td",27)(1174,"em")(1175,"strong"),e(1176,"(opcional)"),t()(),i(1177,"p"),e(1178,"Texto exibido quando o valor da coluna for "),i(1179,"em"),e(1180,"true"),t(),e(1181,"."),t()()(),i(1182,"tr",19)(1183,"td",20)(1184,"div",21)(1185,"span",22),e(1186," disabled"),o(1187,"br"),t()()(),i(1188,"td",24)(1189,"code",56),e(1190,"Function"),t()(),i(1191,"td",27)(1192,"em")(1193,"strong"),e(1194,"(opcional)"),t()(),i(1195,"p"),e(1196,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),i(1197,"em"),e(1198,"link"),t(),e(1199," e sua a\xE7\xE3o."),t(),i(1200,"blockquote")(1201,"p"),e(1202,"Propriedade dispon\xEDvel nas colunas do tipo "),i(1203,"code"),e(1204,"link"),t(),e(1205,"."),t()()()(),i(1206,"tr",19)(1207,"td",20)(1208,"div",21)(1209,"span",22),e(1210," format"),o(1211,"br"),t()()(),i(1212,"td",24)(1213,"code",28),e(1214,"string"),t()(),i(1215,"td",27)(1216,"em")(1217,"strong"),e(1218,"(opcional)"),t()(),i(1219,"p"),e(1220,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(1221,"ul")(1222,"li"),e(1223,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(1224,"li"),e(1225,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(1226,"tr",19)(1227,"td",20)(1228,"div",21)(1229,"span",22),e(1230," label"),o(1231,"br"),t()()(),i(1232,"td",24)(1233,"code",28),e(1234,"string"),t()(),i(1235,"td",27)(1236,"em")(1237,"strong"),e(1238,"(opcional)"),t()(),i(1239,"p"),e(1240,"Texto para t\xEDtulo da coluna."),t(),i(1241,"p"),e(1242,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(1243,"em"),e(1244,"label"),t(),e(1245," o valor da propriedade "),i(1246,"em"),e(1247,"property"),t(),e(1248," com a primeira letra em mai\xFAsculo."),t()()(),i(1249,"tr",19)(1250,"td",20)(1251,"div",21)(1252,"span",22),e(1253," labels"),o(1254,"br"),t()()(),i(1255,"td",24)(1256,"code",57),e(1257,"Array<PoTableColumnLabel>"),t()(),i(1258,"td",27)(1259,"em")(1260,"strong"),e(1261,"(opcional)"),t()(),i(1262,"p"),e(1263,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(1264,"code"),e(1265,"PoTableColumnLabel"),t(),e(1266," na qual devem ser definidas os labels. Por exemplo:"),t(),i(1267,"pre")(1268,"code"),e(1269,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}`),t()()()(),i(1270,"tr",19)(1271,"td",20)(1272,"div",21)(1273,"span",22),e(1274," locale"),o(1275,"br"),t()()(),i(1276,"td",24)(1277,"code",28),e(1278,"string"),t()(),i(1279,"td",27)(1280,"em")(1281,"strong"),e(1282,"(opcional)"),t()(),i(1283,"p"),e(1284,`Define a localidade a ser utilizada no modo de exibi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(1285,"a",58)(1286,"code"),e(1287,"I18n"),t()()(),i(1288,"p"),e(1289,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(1290,"pre")(1291,"code"),e(1292,`columnWithItems: Array<ThfGridColumn> = [
{
   property: 'currency',
   type: 'currency',
   locale: 'en'
},`),t()(),i(1293,"blockquote")(1294,"p"),e(1295,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(1296,"p"),e(1297,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(1298,"p"),e(1299,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(1300,"a",58)(1301,"code"),e(1302,"I18n"),t()()()(),i(1303,"p"),e(1304,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(1305,"pre")(1306,"code"),e(1307,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}`),t()(),i(1308,"blockquote")(1309,"p"),e(1310,"No modo de vis\xE3o, \xE9 compat\xEDvel com colunas dos tipos "),i(1311,"code"),e(1312,"number"),t(),e(1313," e "),i(1314,"code"),e(1315,"currency"),t(),e(1316,"."),t()()()(),i(1317,"tr",19)(1318,"td",20)(1319,"div",21)(1320,"span",22),e(1321," property"),o(1322,"br"),t()()(),i(1323,"td",24)(1324,"code",28),e(1325,"string"),t()(),i(1326,"td",27)(1327,"em")(1328,"strong"),e(1329,"(opcional)"),t()(),i(1330,"p"),e(1331,"Nome identificador da coluna."),t()()(),i(1332,"tr",19)(1333,"td",20)(1334,"div",21)(1335,"span",22),e(1336," type"),o(1337,"br"),t()()(),i(1338,"td",24)(1339,"code",28),e(1340,"string"),t()(),i(1341,"td",27)(1342,"em")(1343,"strong"),e(1344,"(opcional)"),t()(),i(1345,"p"),e(1346,"Tipo da coluna:"),t(),i(1347,"ul")(1348,"li"),e(1349,"string (padr\xE3o): textos"),t(),i(1350,"li"),e(1351,"number: valores num\xE9ricos"),t(),i(1352,"li"),e(1353,"date: data"),t(),i(1354,"li"),e(1355,"currency: valores monet\xE1rios"),t(),i(1356,"li"),e(1357,"dateTime: data e hora"),t()()()(),i(1358,"tr",19)(1359,"td",20)(1360,"div",21)(1361,"span",22),e(1362," visible"),o(1363,"br"),t()()(),i(1364,"td",24)(1365,"code",29),e(1366,"boolean"),t()(),i(1367,"td",27)(1368,"em")(1369,"strong"),e(1370,"(opcional)"),t()(),i(1371,"p"),e(1372,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(1373,"strong"),e(1374,"gerenciador de colunas"),t(),e(1375,"."),t(),i(1376,"blockquote")(1377,"p"),e(1378,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(1379,"code"),e(1380,"p-max-columns"),t(),e(1381,"."),t()()()(),i(1382,"tr",19)(1383,"td",20)(1384,"div",21)(1385,"span",22),e(1386," width"),o(1387,"br"),t()()(),i(1388,"td",24)(1389,"code",28),e(1390,"string"),t()(),i(1391,"td",27)(1392,"em")(1393,"strong"),e(1394,"(opcional)"),t()(),i(1395,"p"),e(1396,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()()(),i(1397,"po-accordion-item",59)(1398,"h4",9)(1399,"code"),e(1400,"ThfLookupFilterSearchSelect"),t()(),i(1401,"div",10)(1402,"p"),e(1403,"Interface que define as colunas para busca ("),i(1404,"strong"),e(1405,"t-filter-search-select"),t(),e(1406,")"),t()(),i(1407,"h4",15),e(1408,"Propriedades"),t(),i(1409,"table",16)(1410,"tr",17)(1411,"th",18),e(1412,"Nome"),t(),i(1413,"th",18),e(1414,"Tipo"),t(),i(1415,"th",18),e(1416,"Descri\xE7\xE3o"),t()(),i(1417,"tr",19)(1418,"td",20)(1419,"div",21)(1420,"span",22),e(1421," label"),o(1422,"br"),t()()(),i(1423,"td",24)(1424,"code",28),e(1425,"string"),t()(),i(1426,"td",27)(1427,"p"),e(1428,"R\xF3tulo da coluna"),t()()(),i(1429,"tr",19)(1430,"td",20)(1431,"div",21)(1432,"span",22),e(1433," value"),o(1434,"br"),t()()(),i(1435,"td",24)(1436,"code",28),e(1437,"string"),t()(),i(1438,"td",27)(1439,"p"),e(1440,"Coluna"),t()()()()(),i(1441,"po-accordion-item",60)(1442,"h4",9)(1443,"code"),e(1444,"ThfLookupFilter"),t()(),i(1445,"div",10)(1446,"p"),e(1447,"Interface para definir o tipo de busca via servi\xE7o."),t()(),i(1448,"table",51)(1449,"tr",19)(1450,"th",52)(1451,"div",21)(1452,"h4")(1453,"span",22),e(1454," fetchItems "),t()()()()(),i(1455,"tr",27)(1456,"td",27)(1457,"p"),e(1458,`M\xE9todo que ser\xE1 disparado ao digitar no campo do componente, deve-se retornar
um `),i(1459,"em"),e(1460,"Observable"),t(),e(1461," com a resposta da API no formato { items: [] }."),t()()()(),i(1462,"h5")(1463,"b"),e(1464,"Par\xE2metros"),t()(),i(1465,"table",16)(1466,"tr",17)(1467,"th",18),e(1468,"Nome"),t(),i(1469,"th",18),e(1470,"Tipo"),t(),i(1471,"th",18),e(1472,"Descri\xE7\xE3o"),t()(),i(1473,"tr",19)(1474,"td",20),e(1475," query"),t(),i(1476,"td",24)(1477,"code",61),e(1478," string "),t()(),i(1479,"td",27)(1480,"p"),e(1481,"Par\xE2metro com o valor que est\xE1 sendo digitado no campo do lookup"),t()()(),i(1482,"tr",19)(1483,"td",20),e(1484," filterParams"),t(),i(1485,"td",24)(1486,"code",61),e(1487," any "),t()(),i(1488,"td",27)(1489,"p"),e(1490,"Valor informado atrav\xE9s da propriedade "),i(1491,"strong"),e(1492,"t-filter-params"),t(),e(1493,"."),t()()()(),o(1494,"br"),i(1495,"table",51)(1496,"tr",19)(1497,"th",52)(1498,"div",21)(1499,"h4")(1500,"span",22),e(1501," getFilteredItems "),t()()()()(),i(1502,"tr",27)(1503,"td",27)(1504,"p"),e(1505,`M\xE9todo que ser\xE1 disparado ao filtrar no grid ou carregar mais resultados no componente, deve-se retornar
um `),i(1506,"em"),e(1507,"Observable"),t(),e(1508," com a resposta da API no formato da interface "),i(1509,"strong"),e(1510,"ThfLookupResponseApi"),t(),e(1511,"."),t()()()(),i(1512,"h5")(1513,"b"),e(1514,"Par\xE2metros"),t()(),i(1515,"table",16)(1516,"tr",17)(1517,"th",18),e(1518,"Nome"),t(),i(1519,"th",18),e(1520,"Tipo"),t(),i(1521,"th",18),e(1522,"Descri\xE7\xE3o"),t()(),i(1523,"tr",19)(1524,"td",20),e(1525," params"),t(),i(1526,"td",24)(1527,"code",61),e(1528," ThfLookupFilteredItemsParams "),t()(),i(1529,"td",27)(1530,"p"),e(1531,"Objeto enviado por par\xE2metro que implementa a interface "),i(1532,"strong"),e(1533,"ThfLookupFilteredItemsParams"),t(),e(1534,"."),t()()()(),o(1535,"br"),i(1536,"table",51)(1537,"tr",19)(1538,"th",52)(1539,"div",21)(1540,"h4")(1541,"span",22),e(1542," getObjectByValue "),t()()()()(),i(1543,"tr",27)(1544,"td",27)(1545,"p"),e(1546,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(1547,"p"),e(1548,"Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o esteja habilitada, o par\xE2metro "),i(1549,"code"),e(1550,"value"),t(),e(1551,` ser\xE1 enviado como uma lista de valores
e o `),i(1552,"em"),e(1553,"Observable"),t(),e(1554," deve retornar uma lista de objetos."),t()()()(),i(1555,"h5")(1556,"b"),e(1557,"Par\xE2metros"),t()(),i(1558,"table",16)(1559,"tr",17)(1560,"th",18),e(1561,"Nome"),t(),i(1562,"th",18),e(1563,"Tipo"),t(),i(1564,"th",18),e(1565,"Descri\xE7\xE3o"),t()(),i(1566,"tr",19)(1567,"td",20),e(1568," value"),t(),i(1569,"td",24)(1570,"code",28),e(1571," string "),t(),i(1572,"code",62),e(1573," Array<any> "),t()(),i(1574,"td",27)(1575,"p"),e(1576,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(1577,"tr",19)(1578,"td",20),e(1579," filterParams"),t(),i(1580,"td",24)(1581,"code",61),e(1582," any "),t()(),i(1583,"td",27)(1584,"p"),e(1585,"Valor informado atrav\xE9s da propriedade "),i(1586,"strong"),e(1587,"t-filter-params"),t(),e(1588,"."),t()()()(),o(1589,"br"),t(),i(1590,"po-accordion-item",63)(1591,"h4",9)(1592,"code"),e(1593,"ThfLookupFilteredItemsParams"),t()(),i(1594,"div",10)(1595,"p"),e(1596,"Interface do objeto enviado como par\xE2metro do m\xE9todo privado "),i(1597,"strong"),e(1598,"getFilteredItems"),t(),e(1599,"."),t()(),i(1600,"h4",15),e(1601,"Propriedades"),t(),i(1602,"table",16)(1603,"tr",17)(1604,"th",18),e(1605,"Nome"),t(),i(1606,"th",18),e(1607,"Tipo"),t(),i(1608,"th",18),e(1609,"Descri\xE7\xE3o"),t()(),i(1610,"tr",19)(1611,"td",20)(1612,"div",21)(1613,"span",22),e(1614," filter"),o(1615,"br"),t()()(),i(1616,"td",24)(1617,"code",64),e(1618,`{ [key: string]: any;
}`),t()(),i(1619,"td",27)(1620,"em")(1621,"strong"),e(1622,"(opcional)"),t()(),i(1623,"p"),e(1624,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(1625,"tr",19)(1626,"td",20)(1627,"div",21)(1628,"span",22),e(1629," filterParams"),o(1630,"br"),t()()(),i(1631,"td",24)(1632,"code",39),e(1633,"any"),t()(),i(1634,"td",27)(1635,"em")(1636,"strong"),e(1637,"(opcional)"),t()(),i(1638,"p"),e(1639,"Valor informado atrav\xE9s da propriedade "),i(1640,"code"),e(1641,"t-filter-params"),t(),e(1642,"."),t()()(),i(1643,"tr",19)(1644,"td",20)(1645,"div",21)(1646,"span",22),e(1647," order"),o(1648,"br"),t()()(),i(1649,"td",24)(1650,"code",28),e(1651,"string"),t()(),i(1652,"td",27)(1653,"em")(1654,"strong"),e(1655,"(opcional)"),t()(),i(1656,"p"),e(1657,"Coluna que est\xE1 sendo ordenada na grid."),t(),i(1658,"ul")(1659,"li"),e(1660,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(1661,"code"),e(1662,"-<colunaOrdenada>"),t(),e(1663,", por exemplo "),i(1664,"code"),e(1665,"-name"),t(),e(1666,"."),t(),i(1667,"li"),e(1668,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(1669,"code"),e(1670,"<colunaOrdenada>"),t(),e(1671,", por exemplo "),i(1672,"code"),e(1673,"name"),t(),e(1674,"."),t()()()(),i(1675,"tr",19)(1676,"td",20)(1677,"div",21)(1678,"span",22),e(1679," page"),o(1680,"br"),t()()(),i(1681,"td",24)(1682,"code",65),e(1683,"number"),t()(),i(1684,"td",27)(1685,"em")(1686,"strong"),e(1687,"(opcional)"),t()(),i(1688,"p"),e(1689,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(1690,"tr",19)(1691,"td",20)(1692,"div",21)(1693,"span",22),e(1694," pageSize"),o(1695,"br"),t()()(),i(1696,"td",24)(1697,"code",65),e(1698,"number"),t()(),i(1699,"td",27)(1700,"em")(1701,"strong"),e(1702,"(opcional)"),t()(),i(1703,"p"),e(1704,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()()(),i(1705,"po-accordion-item",66)(1706,"h4",9)(1707,"code"),e(1708,"ThfLookupGridProperties"),t()(),i(1709,"div",10)(1710,"p"),e(1711,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup."),t()(),i(1712,"h4",15),e(1713,"Propriedades"),t(),i(1714,"table",16)(1715,"tr",17)(1716,"th",18),e(1717,"Nome"),t(),i(1718,"th",18),e(1719,"Tipo"),t(),i(1720,"th",18),e(1721,"Descri\xE7\xE3o"),t()(),i(1722,"tr",19)(1723,"td",20)(1724,"div",21)(1725,"span",22),e(1726," autoSize"),o(1727,"br"),t()()(),i(1728,"td",24)(1729,"code",29),e(1730,"boolean"),t()(),i(1731,"td",27)(1732,"em")(1733,"strong"),e(1734,"(opcional)"),t()(),i(1735,"p"),e(1736,`Ajusta automaticamente a largura das colunas vis\xEDveis no grid. O ajuste autom\xE1tico \xE9 realizado durante a
inicializa\xE7\xE3o. Requer que a propriedade `),i(1737,"strong"),e(1738,"resizable"),t(),e(1739," esteja habilitada."),t(),i(1740,"blockquote")(1741,"p"),e(1742,`Apesar de atribuir largura \xE0s colunas do grid, \xE9 importante ressaltar que o componente recalcula
as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis no grid, podendo alterar as
dimens\xF5es passadas proporcionalmente.`),t()()()(),i(1743,"tr",19)(1744,"td",20)(1745,"div",21)(1746,"span",22),e(1747," autoSizeOnScroll"),o(1748,"br"),t()()(),i(1749,"td",24)(1750,"code",29),e(1751,"boolean"),t()(),i(1752,"td",27)(1753,"em")(1754,"strong"),e(1755,"(opcional)"),t()(),i(1756,"p"),e(1757,"Ativa o redimensionamento autom\xE1tico das colunas durante a rolagem virtual."),t(),i(1758,"p"),e(1759,`Quando habilitado, a grid recalcula automaticamente as larguras das colunas
conforme novos dados s\xE3o carregados durante a rolagem, garantindo que o
conte\xFAdo seja exibido corretamente sem truncamento indesejado.`),t(),i(1760,"p"),e(1761,`O redimensionamento ocorre a cada mudan\xE7a de p\xE1gina virtual, controlada pela
propriedade `),i(1762,"code"),e(1763,"t-page-size-virtual"),t(),e(1764," (valor padr\xE3o: 60 itens por p\xE1gina)."),t(),i(1765,"blockquote")(1766,"p")(1767,"strong"),e(1768,"Pr\xE9-requisitos"),t(),e(1769,": Requer que as propriedades "),i(1770,"code"),e(1771,"autoSize"),t(),e(1772,", "),i(1773,"code"),e(1774,"resizable"),t(),e(1775,`
e `),i(1776,"code"),e(1777,"virtualScroll"),t(),e(1778," estejam habilitadas."),t()(),i(1779,"blockquote")(1780,"p")(1781,"strong"),e(1782,"Incompatibilidade"),t(),e(1783,": N\xE3o funciona com "),i(1784,"code"),e(1785,"t-grid-row-actions"),t(),e(1786," habilitado;"),t()(),i(1787,"p")(1788,"strong"),e(1789,"Exemplo de uso:"),t()(),i(1790,"pre")(1791,"code",33),e(1792,`<thf-grid
  ...
  [t-auto-size]="true"
  [t-auto-size-on-scroll]="true"
  [t-resizable]="true"
  [t-virtual-scroll]="true"
/>`),t()()()(),i(1793,"tr",19)(1794,"td",20)(1795,"div",21)(1796,"span",22),e(1797," draggable"),o(1798,"br"),t()()(),i(1799,"td",24)(1800,"code",29),e(1801,"boolean"),t()(),i(1802,"td",27)(1803,"em")(1804,"strong"),e(1805,"(opcional)"),t()(),i(1806,"p"),e(1807,"Habilita o Drag and Drop nas colunas."),t()()(),i(1808,"tr",19)(1809,"td",20)(1810,"div",21)(1811,"span",22),e(1812," group"),o(1813,"br"),t()()(),i(1814,"td",24)(1815,"code",37),e(1816,"Array<string>"),t()(),i(1817,"td",27)(1818,"em")(1819,"strong"),e(1820,"(opcional)"),t()(),i(1821,"p"),e(1822,"Lista das colunas que devem iniciar agrupadas. Requer que a propriedade "),i(1823,"strong"),e(1824,"groupable"),t(),e(1825," esteja habilitada."),t()()(),i(1826,"tr",19)(1827,"td",20)(1828,"div",21)(1829,"span",22),e(1830," groupable"),o(1831,"br"),t()()(),i(1832,"td",24)(1833,"code",29),e(1834,"boolean "),t(),i(1835,"code",67),e(1836," GroupableSettings"),t()(),i(1837,"td",27)(1838,"em")(1839,"strong"),e(1840,"(opcional)"),t()(),i(1841,"p"),e(1842,"Habilita a ordena\xE7\xE3o por grupo atrav\xE9s da coluna."),t()()(),i(1843,"tr",19)(1844,"td",20)(1845,"div",21)(1846,"span",22),e(1847," hideSelectAll"),o(1848,"br"),t()()(),i(1849,"td",24)(1850,"code",29),e(1851,"boolean"),t()(),i(1852,"td",27)(1853,"em")(1854,"strong"),e(1855,"(opcional)"),t()(),i(1856,"p"),e(1857,"Permite ocultar o checkbox de selecionar todos os itens."),t()()(),i(1858,"tr",19)(1859,"td",20)(1860,"div",21)(1861,"span",22),e(1862," resizable"),o(1863,"br"),t()()(),i(1864,"td",24)(1865,"code",29),e(1866,"boolean"),t()(),i(1867,"td",27)(1868,"em")(1869,"strong"),e(1870,"(opcional)"),t()(),i(1871,"p"),e(1872,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do grid,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(1873,"tr",19)(1874,"td",20)(1875,"div",21)(1876,"span",22),e(1877," selectableEntireLine"),o(1878,"br"),t()()(),i(1879,"td",24)(1880,"code",29),e(1881,"boolean"),t()(),i(1882,"td",27)(1883,"em")(1884,"strong"),e(1885,"(opcional)"),t()(),i(1886,"p"),e(1887,"Permite selecionar o item ao clicar na linha."),t()()(),i(1888,"tr",19)(1889,"td",20)(1890,"div",21)(1891,"span",22),e(1892," showDraggableIcon"),o(1893,"br"),t()()(),i(1894,"td",24)(1895,"code",29),e(1896,"boolean"),t()(),i(1897,"td",27)(1898,"em")(1899,"strong"),e(1900,"(opcional)"),t()(),i(1901,"p"),e(1902,"Exibe o \xEDcone de draggable nas respectivas colunas."),t()()(),i(1903,"tr",19)(1904,"td",20)(1905,"div",21)(1906,"span",22),e(1907," showMoreDisabled"),o(1908,"br"),t()()(),i(1909,"td",24)(1910,"code",29),e(1911,"boolean"),t()(),i(1912,"td",27)(1913,"em")(1914,"strong"),e(1915,"(opcional)"),t()(),i(1916,"p"),e(1917,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(1918,"tr",19)(1919,"td",20)(1920,"div",21)(1921,"span",22),e(1922," showMoreVisible"),o(1923,"br"),t()()(),i(1924,"td",24)(1925,"code",29),e(1926,"boolean"),t()(),i(1927,"td",27)(1928,"em")(1929,"strong"),e(1930,"(opcional)"),t()(),i(1931,"p"),e(1932,"Controla a exibi\xE7\xE3o do bot\xE3o 'Carregar mais resultados'. Requer que a propriedade "),i(1933,"strong"),e(1934,"pageable"),t(),e(1935," esteja habilitada."),t(),i(1936,"blockquote")(1937,"p"),e(1938,"Caso seja utilizado em conjunto com "),i(1939,"strong"),e(1940,"showMoreDisabled"),t(),e(1941,", a propriedade "),i(1942,"strong"),e(1943,"showMoreVisible"),t(),e(1944," ter\xE1 prioridade."),t()()()(),i(1945,"tr",19)(1946,"td",20)(1947,"div",21)(1948,"span",22),e(1949," sort"),o(1950,"br"),t()()(),i(1951,"td",24)(1952,"code",68),e(1953,"Array<{ field: string; dir: 'asc' "),t(),i(1954,"code",69),e(1955,` 'desc';
}>`),t()(),i(1956,"td",27)(1957,"em")(1958,"strong"),e(1959,"(opcional)"),t()(),i(1960,"p"),e(1961,"Define a ordena\xE7\xE3o (sort) crescente (asc) ou decrescente (desc) por coluna."),t(),i(1962,"pre")(1963,"code",34),e(1964,"sort: Array<ThfGridColumnSort> = [{ field: 'name', dir: 'desc'}];"),t()()()(),i(1965,"tr",19)(1966,"td",20)(1967,"div",21)(1968,"span",22),e(1969," sortable"),o(1970,"br"),t()()(),i(1971,"td",24)(1972,"code",29),e(1973,"boolean"),t()(),i(1974,"td",27)(1975,"em")(1976,"strong"),e(1977,"(opcional)"),t()(),i(1978,"p"),e(1979,"Habilita a ordena\xE7\xE3o (sort) crescente ou decrescente em todas as colunas do grid."),t()()(),i(1980,"tr",19)(1981,"td",20)(1982,"div",21)(1983,"span",22),e(1984," spacing"),o(1985,"br"),t()()(),i(1986,"td",24)(1987,"code",70),e(1988,"'extraSmall' "),t(),i(1989,"code",71),e(1990," 'small' "),t(),i(1991,"code",72),e(1992," 'medium' "),t(),i(1993,"code",73),e(1994," 'large'"),t()(),i(1995,"td",27)(1996,"em")(1997,"strong"),e(1998,"(opcional)"),t()(),i(1999,"p"),e(2e3,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do grid. Os valores
permitidos s\xE3o definidos pelo enum `),i(2001,"strong"),e(2002,"ThfColumnSpacing"),t(),e(2003,"."),t()()(),i(2004,"tr",19)(2005,"td",20)(2006,"div",21)(2007,"span",22),e(2008," striped"),o(2009,"br"),t()()(),i(2010,"td",24)(2011,"code",29),e(2012,"boolean"),t()(),i(2013,"td",27)(2014,"em")(2015,"strong"),e(2016,"(opcional)"),t()(),i(2017,"p"),e(2018,"Define o estilo listrado no grid (striped)."),t()()(),i(2019,"tr",19)(2020,"td",20)(2021,"div",21)(2022,"span",22),e(2023," virtualScroll"),o(2024,"br"),t()()(),i(2025,"td",24)(2026,"code",29),e(2027,"boolean"),t()(),i(2028,"td",27)(2029,"em")(2030,"strong"),e(2031,"(opcional)"),t()(),i(2032,"p"),e(2033,"Define o uso do virtual scroll no grid para melhorar a performance com grandes volumes de dados."),t()()()()(),i(2034,"po-accordion-item",74)(2035,"h4",9)(2036,"code"),e(2037,"ThfLookupKeysLabel"),t()(),i(2038,"div",10)(2039,"p"),e(2040,"Interface para definir as propriedades vis\xEDveis do item selecionado ("),i(2041,"strong"),e(2042,"t-keys-label"),t(),e(2043,")."),t()(),i(2044,"h4",15),e(2045,"Propriedades"),t(),i(2046,"table",16)(2047,"tr",17)(2048,"th",18),e(2049,"Nome"),t(),i(2050,"th",18),e(2051,"Tipo"),t(),i(2052,"th",18),e(2053,"Descri\xE7\xE3o"),t()(),i(2054,"tr",19)(2055,"td",20)(2056,"div",21)(2057,"span",22),e(2058," label"),o(2059,"br"),t()()(),i(2060,"td",24)(2061,"code",28),e(2062,"string"),t()(),i(2063,"td",27)(2064,"p"),e(2065,"Texto exibido"),t()()(),i(2066,"tr",19)(2067,"td",20)(2068,"div",21)(2069,"span",22),e(2070," value"),o(2071,"br"),t()()(),i(2072,"td",24)(2073,"code",28),e(2074,"string"),t()(),i(2075,"td",27)(2076,"p"),e(2077,"Coluna"),t()()()()(),i(2078,"po-accordion-item",75)(2079,"h4",9)(2080,"code"),e(2081,"ThfLookupLiterals"),t()(),i(2082,"div",10)(2083,"p"),e(2084,"Interface para customizar literais ("),i(2085,"strong"),e(2086,"t-literals"),t(),e(2087,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(2088,"h4",15),e(2089,"Propriedades"),t(),i(2090,"table",16)(2091,"tr",17)(2092,"th",18),e(2093,"Nome"),t(),i(2094,"th",18),e(2095,"Tipo"),t(),i(2096,"th",18),e(2097,"Descri\xE7\xE3o"),t()(),i(2098,"tr",19)(2099,"td",20)(2100,"div",21)(2101,"span",22),e(2102," confirmBodyDelete"),o(2103,"br"),t()()(),i(2104,"td",24)(2105,"code",28),e(2106,"string"),t()(),i(2107,"td",27)(2108,"em")(2109,"strong"),e(2110,"(opcional)"),t()(),i(2111,"p"),e(2112,"Texto do corpo do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2113,"tr",19)(2114,"td",20)(2115,"div",21)(2116,"span",22),e(2117," confirmCancelDelete"),o(2118,"br"),t()()(),i(2119,"td",24)(2120,"code",28),e(2121,"string"),t()(),i(2122,"td",27)(2123,"em")(2124,"strong"),e(2125,"(opcional)"),t()(),i(2126,"p"),e(2127,"Texto do bot\xE3o de cancelar do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2128,"tr",19)(2129,"td",20)(2130,"div",21)(2131,"span",22),e(2132," confirmRemoveDelete"),o(2133,"br"),t()()(),i(2134,"td",24)(2135,"code",28),e(2136,"string"),t()(),i(2137,"td",27)(2138,"em")(2139,"strong"),e(2140,"(opcional)"),t()(),i(2141,"p"),e(2142,"Texto do bot\xE3o de remover do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2143,"tr",19)(2144,"td",20)(2145,"div",21)(2146,"span",22),e(2147," confirmTitleDelete"),o(2148,"br"),t()()(),i(2149,"td",24)(2150,"code",28),e(2151,"string"),t()(),i(2152,"td",27)(2153,"em")(2154,"strong"),e(2155,"(opcional)"),t()(),i(2156,"p"),e(2157,"T\xEDtulo do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2158,"tr",19)(2159,"td",20)(2160,"div",21)(2161,"span",22),e(2162," lastSearch"),o(2163,"br"),t()()(),i(2164,"td",24)(2165,"code",28),e(2166,"string"),t()(),i(2167,"td",27)(2168,"em")(2169,"strong"),e(2170,"(opcional)"),t()(),i(2171,"p"),e(2172,"Texto exibido no listbox quando estiver exibindo as ultimas pesquisas."),t()()(),i(2173,"tr",19)(2174,"td",20)(2175,"div",21)(2176,"span",22),e(2177," listNotFound"),o(2178,"br"),t()()(),i(2179,"td",24)(2180,"code",28),e(2181,"string"),t()(),i(2182,"td",27)(2183,"em")(2184,"strong"),e(2185,"(opcional)"),t()(),i(2186,"p"),e(2187,"Texto exibido no listbox quando nenhum resultado for encontrado."),t()()(),i(2188,"tr",19)(2189,"td",20)(2190,"div",21)(2191,"span",22),e(2192," modalPlaceholder"),o(2193,"br"),t()()(),i(2194,"td",24)(2195,"code",28),e(2196,"string"),t()(),i(2197,"td",27)(2198,"em")(2199,"strong"),e(2200,"(opcional)"),t()(),i(2201,"p"),e(2202,"Texto exibido no placeholder do input da modal."),t()()(),i(2203,"tr",19)(2204,"td",20)(2205,"div",21)(2206,"span",22),e(2207," modalPrimaryActionLabel"),o(2208,"br"),t()()(),i(2209,"td",24)(2210,"code",28),e(2211,"string"),t()(),i(2212,"td",27)(2213,"em")(2214,"strong"),e(2215,"(opcional)"),t()(),i(2216,"p"),e(2217,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),t()()(),i(2218,"tr",19)(2219,"td",20)(2220,"div",21)(2221,"span",22),e(2222," modalSecondaryActionLabel"),o(2223,"br"),t()()(),i(2224,"td",24)(2225,"code",28),e(2226,"string"),t()(),i(2227,"td",27)(2228,"em")(2229,"strong"),e(2230,"(opcional)"),t()(),i(2231,"p"),e(2232,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),t()()(),i(2233,"tr",19)(2234,"td",20)(2235,"div",21)(2236,"span",22),e(2237," modalTableLoadMoreData"),o(2238,"br"),t()()(),i(2239,"td",24)(2240,"code",28),e(2241,"string"),t()(),i(2242,"td",27)(2243,"em")(2244,"strong"),e(2245,"(opcional)"),t()(),i(2246,"p"),e(2247,"Label do "),i(2248,"code"),e(2249,"button"),t(),e(2250," que deve carregar mais resultados no grid, ou seja, exibir mais itens."),t()()(),i(2251,"tr",19)(2252,"td",20)(2253,"div",21)(2254,"span",22),e(2255," modalTableLoadingData"),o(2256,"br"),t()()(),i(2257,"td",24)(2258,"code",28),e(2259,"string"),t()(),i(2260,"td",27)(2261,"em")(2262,"strong"),e(2263,"(opcional)"),t()(),i(2264,"p"),e(2265,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na grid."),t()()(),i(2266,"tr",19)(2267,"td",20)(2268,"div",21)(2269,"span",22),e(2270," modalTableNoColumns"),o(2271,"br"),t()()(),i(2272,"td",24)(2273,"code",28),e(2274,"string"),t()(),i(2275,"td",27)(2276,"em")(2277,"strong"),e(2278,"(opcional)"),t()(),i(2279,"p"),e(2280,"Texto exibido quando n\xE3o existem colunas definidas no grid."),t()()(),i(2281,"tr",19)(2282,"td",20)(2283,"div",21)(2284,"span",22),e(2285," modalTableNoData"),o(2286,"br"),t()()(),i(2287,"td",24)(2288,"code",28),e(2289,"string"),t()(),i(2290,"td",27)(2291,"em")(2292,"strong"),e(2293,"(opcional)"),t()(),i(2294,"p"),e(2295,"Texto exibido quando n\xE3o existem itens para serem exibidos no grid."),t()()(),i(2296,"tr",19)(2297,"td",20)(2298,"div",21)(2299,"span",22),e(2300," modalTitle"),o(2301,"br"),t()()(),i(2302,"td",24)(2303,"code",28),e(2304,"string"),t()(),i(2305,"td",27)(2306,"em")(2307,"strong"),e(2308,"(opcional)"),t()(),i(2309,"p"),e(2310,"Texto exibido no t\xEDtulo da modal."),t()()(),i(2311,"tr",19)(2312,"td",20)(2313,"div",21)(2314,"span",22),e(2315," multipleItems"),o(2316,"br"),t()()(),i(2317,"td",24)(2318,"code",28),e(2319,"string"),t()(),i(2320,"td",27)(2321,"em")(2322,"strong"),e(2323,"(opcional)"),t()(),i(2324,"p"),e(2325,"Frase exibida no accordion quando possui mais de um item selecionado."),t()()(),i(2326,"tr",19)(2327,"td",20)(2328,"div",21)(2329,"span",22),e(2330," oneItem"),o(2331,"br"),t()()(),i(2332,"td",24)(2333,"code",28),e(2334,"string"),t()(),i(2335,"td",27)(2336,"em")(2337,"strong"),e(2338,"(opcional)"),t()(),i(2339,"p"),e(2340,"Frase exibida no accordion quando possui apenas um item selecionado."),t()()(),i(2341,"tr",19)(2342,"td",20)(2343,"div",21)(2344,"span",22),e(2345," or"),o(2346,"br"),t()()(),i(2347,"td",24)(2348,"code",28),e(2349,"string"),t()(),i(2350,"td",27)(2351,"em")(2352,"strong"),e(2353,"(opcional)"),t()(),i(2354,"p"),e(2355,"Palavra 'ou' que \xE9 exibida dentro do listbox."),t()()(),i(2356,"tr",19)(2357,"td",20)(2358,"div",21)(2359,"span",22),e(2360," searchAdvanced"),o(2361,"br"),t()()(),i(2362,"td",24)(2363,"code",28),e(2364,"string"),t()(),i(2365,"td",27)(2366,"em")(2367,"strong"),e(2368,"(opcional)"),t()(),i(2369,"p"),e(2370,"Texto exibido no listbox para fazer busca avan\xE7ada."),t()()(),i(2371,"tr",19)(2372,"td",20)(2373,"div",21)(2374,"span",22),e(2375," searchBy"),o(2376,"br"),t()()(),i(2377,"td",24)(2378,"code",28),e(2379,"string"),t()(),i(2380,"td",27)(2381,"em")(2382,"strong"),e(2383,"(opcional)"),t()(),i(2384,"p"),e(2385,"Texto exibido para indicar os campos filtrados."),t()()()()(),i(2386,"po-accordion-item",76)(2387,"h4",9)(2388,"code"),e(2389,"ThfLookupResponseApi"),t()(),i(2390,"div",10)(2391,"p"),e(2392,"Interface que representa a estrutura de uma resposta de sucesso HTTP."),t(),i(2393,"blockquote")(2394,"p"),e(2395,"Utilizada apenas quando a resposta incluir uma cole\xE7\xE3o de itens. "),t()()(),i(2396,"h4",15),e(2397,"Propriedades"),t(),i(2398,"table",16)(2399,"tr",17)(2400,"th",18),e(2401,"Nome"),t(),i(2402,"th",18),e(2403,"Tipo"),t(),i(2404,"th",18),e(2405,"Descri\xE7\xE3o"),t()(),i(2406,"tr",19)(2407,"td",20)(2408,"div",21)(2409,"span",22),e(2410," hasNext"),o(2411,"br"),t()()(),i(2412,"td",24)(2413,"code",29),e(2414,"boolean"),t()(),i(2415,"td",27)(2416,"p"),e(2417,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(2418,"tr",19)(2419,"td",20)(2420,"div",21)(2421,"span",22),e(2422," items"),o(2423,"br"),t()()(),i(2424,"td",24)(2425,"code",62),e(2426,"Array<any>"),t()(),i(2427,"td",27)(2428,"p"),e(2429,"Lista de itens retornados."),t()()()()()()(),y(2430,4),t(),i(2431,"po-tab",77)(2432,"po-container",5),y(2433,5),i(2434,"h3",78),e(2435,"Tokens customiz\xE1veis"),t(),i(2436,"p"),e(2437,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(2438,"blockquote")(2439,"p"),e(2440,"Para maiores informa\xE7\xF5es, acesse o guia "),i(2441,"a",79),e(2442,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(2443,"."),t()(),i(2444,"table")(2445,"thead")(2446,"tr")(2447,"th"),e(2448,"Propriedade"),t(),i(2449,"th"),e(2450,"Descri\xE7\xE3o"),t(),i(2451,"th"),e(2452,"Valor Padr\xE3o"),t()()(),i(2453,"tbody")(2454,"tr")(2455,"td")(2456,"strong"),e(2457,"Default Values"),t()(),o(2458,"td")(2459,"td"),t(),i(2460,"tr")(2461,"td")(2462,"code"),e(2463,"--font-family"),t()(),i(2464,"td"),e(2465,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(2466,"td")(2467,"code"),e(2468,"var(--font-family-theme)"),t()()(),i(2469,"tr")(2470,"td")(2471,"code"),e(2472,"--font-size"),t()(),i(2473,"td"),e(2474,"Tamanho da fonte"),t(),i(2475,"td")(2476,"code"),e(2477,"var(--font-size)"),t()()(),i(2478,"tr")(2479,"td")(2480,"code"),e(2481,"--text-color-placeholder"),t()(),i(2482,"td"),e(2483,"Cor do texto no placeholder"),t(),i(2484,"td")(2485,"code"),e(2486,"var(--color-neutral-light-30)"),t()()(),i(2487,"tr")(2488,"td")(2489,"code"),e(2490,"--color"),t()(),i(2491,"td"),e(2492,"Cor principal do campo"),t(),i(2493,"td")(2494,"code"),e(2495,"var(--color-neutral-dark-70)"),t()()(),i(2496,"tr")(2497,"td")(2498,"code"),e(2499,"--background"),t()(),i(2500,"td"),e(2501,"Cor de background"),t(),i(2502,"td")(2503,"code"),e(2504,"var(--color-neutral-light-00)"),t()()(),i(2505,"tr")(2506,"td")(2507,"code"),e(2508,"--text-color"),t()(),i(2509,"td"),e(2510,"Cor do texto"),t(),i(2511,"td")(2512,"code"),e(2513,"var(--color-neutral-mid-60)"),t()()(),i(2514,"tr")(2515,"td")(2516,"strong"),e(2517,"Hover"),t()(),o(2518,"td")(2519,"td"),t(),i(2520,"tr")(2521,"td")(2522,"code"),e(2523,"--color-hover"),t()(),i(2524,"td"),e(2525,"Cor principal do campo no estado hover"),t(),i(2526,"td")(2527,"code"),e(2528,"var(--color-brand-01-dark)"),t()()(),i(2529,"tr")(2530,"td")(2531,"code"),e(2532,"--background-hover"),t()(),i(2533,"td"),e(2534,"Cor de background no estado hover"),t(),i(2535,"td")(2536,"code"),e(2537,"var(--color-brand-01-lightest)"),t()()(),i(2538,"tr")(2539,"td")(2540,"strong"),e(2541,"Focused"),t()(),o(2542,"td")(2543,"td"),t(),i(2544,"tr")(2545,"td")(2546,"code"),e(2547,"--color-focused"),t()(),i(2548,"td"),e(2549,"Cor principal do campo no estado de focus"),t(),i(2550,"td")(2551,"code"),e(2552,"var(--color-action-default)"),t()()(),i(2553,"tr")(2554,"td")(2555,"code"),e(2556,"--outline-color-focused"),t()(),i(2557,"td"),e(2558,"Cor do outline no estado de focus"),t(),i(2559,"td")(2560,"code"),e(2561,"var(--color-action-focus)"),t()()(),i(2562,"tr")(2563,"td")(2564,"strong"),e(2565,"Disabled"),t()(),o(2566,"td")(2567,"td"),t(),i(2568,"tr")(2569,"td")(2570,"code"),e(2571,"--color-disabled"),t()(),i(2572,"td"),e(2573,"Cor principal do campo no estado disabled"),t(),i(2574,"td")(2575,"code"),e(2576,"var(--color-neutral-light-30)"),t()()(),i(2577,"tr")(2578,"td")(2579,"code"),e(2580,"--background-disabled"),t()(),i(2581,"td"),e(2582,"Cor de background no estado disabled"),t(),i(2583,"td")(2584,"code"),e(2585,"var(--color-neutral-light-05)"),t()()(),i(2586,"tr")(2587,"td")(2588,"code"),e(2589,"--text-color-disabled"),t()(),i(2590,"td"),e(2591,"Cor do texto no estado disabled"),t(),i(2592,"td")(2593,"code"),e(2594,"var(--color-neutral-dark-70)"),t()()()()()(),y(2595,6),t(),i(2596,"po-tab",80),y(2597,7),t()()())},dependencies:[L,U,v,Te,Y,j],encapsulation:2})}}return d})();var ri=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],li=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],vt=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let C=E.querySelector(".po-tab-button-label");C&&C?.textContent?.trim().toLowerCase()===a&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(G(J))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-lookup-data"]],viewQuery:function(r,n){if(r&1&&(w(j,5),w(L,5)),r&2){let l;D(l=A())&&(n.tabs=l.first),D(l=A())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:li,decls:1744,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","Array<ThfLookupDataColumn>"],[1,"language-html"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<ThfLookupDataFilterSearchSelect>"],["pan","",1,"docs-api-property-type","ThfLookupDataFilter"],["href","https://po-ui.io/guides/api"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","ThfLookupDataGridProperties"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","Array<ThfLookupDataKeysLabel>"],["pan","",1,"docs-api-property-type","ThfLookupDataLiterals"],["href","https://po-ui.io/documentation/po-theme"],["p-label","Interfaces"],["p-label","ThfLookupDataColumn"],["pan","",1,"docs-api-property-type","PoTableBoolean"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["href","https://po-ui.io/documentation/po-i18n"],["p-label","ThfLookupDataFilterSearchSelect"],["p-label","ThfLookupDataFilter"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","Array<any>"],["p-label","ThfLookupDataFilteredItemsParams"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["p-label","ThfLookupDataGridProperties"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","Array<{","field:","string;","dir:","'asc'"],["pan","",1,"docs-api-property-type","'desc';","}>"],["pan","",1,"docs-api-property-type","'extraSmall'"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["p-label","ThfLookupDataKeysLabel"],["p-label","ThfLookupDataLiterals"],["p-label","ThfLookupDataResponseApi"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["href","https://po-ui.io/documentation/po-search"],["href","https://thf.totvs.app/v19/documentation/thf-grid"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&($(ri),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),y(4),t(),i(5,"po-tab",4),y(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfLookupDataComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"Componente de busca com um grid que lista dados de um servi\xE7o."),t(),i(19,"p"),e(20,"\xC9 possivel realizar a importa\xE7\xE3o individual do "),i(21,"code"),e(22,"THF-Lookup-Data"),t(),e(23,` no seu m\xF3dulo ou componente(caso esteja utilizando standalone):
`),i(24,"code"),e(25,"import { ThfLookupDataComponent } from '@totvs/thf-components';"),t()()(),i(26,"div",11)(27,"h4",12),e(28,"Seletor"),t(),i(29,"pre",13),e(30,`<thf-lookup-grid
  (t-change)="EventEmitter"
  (t-change-model)="EventEmitter"
  t-columns="Array<ThfLookupDataColumn>"
  t-disabled="boolean"
  t-field-label="string"
  t-field-value="string"
  t-filter-params="any"
  t-filter-search-select="Array<ThfLookupDataFilterSearchSelect>"
  t-filter-service="ThfLookupDataFilter | string"
  t-grid-properties="ThfLookupDataGridProperties"
  t-height="number"
  (t-focus)="EventEmitter"
  (t-keydown)="EventEmitter"
  t-keys-label="Array<ThfLookupDataKeysLabel>"
  t-literals="ThfLookupDataLiterals"
  t-multiple="boolean"
  (t-error)="EventEmitter"
  (t-selected)="EventEmitter"
  t-size="string" >
</thf-lookup-grid>
`),t()()(),i(31,"po-accordion-item",14)(32,"h4",15),e(33,"Propriedades"),t(),i(34,"table",16)(35,"tr",17)(36,"th",18),e(37,"Nome"),t(),i(38,"th",18),e(39,"Tipo"),t(),i(40,"th",18),e(41,"Padr\xE3o"),t(),i(42,"th",18),e(43,"Descri\xE7\xE3o"),t()(),i(44,"tr",19)(45,"td",20)(46,"div",21)(47,"span",22),e(48," (t-change)"),o(49,"br"),t()()(),i(50,"td",23)(51,"code",24),e(52,"EventEmitter"),t()(),i(53,"td",25),e(54,"-"),t(),i(55,"td",26)(56,"em")(57,"strong"),e(58,"(opcional)"),t()(),i(59,"p"),e(60,"Evento disparado quando ocorre mudan\xE7as de valor realizadas pelo usu\xE1rio."),t()()(),i(61,"tr",19)(62,"td",20)(63,"div",21)(64,"span",22),e(65," (t-change-model)"),o(66,"br"),t()()(),i(67,"td",23)(68,"code",24),e(69,"EventEmitter"),t()(),i(70,"td",25),e(71,"-"),t(),i(72,"td",26)(73,"em")(74,"strong"),e(75,"(opcional)"),t()(),i(76,"p"),e(77,"Evento disparado quando ocorre mudan\xE7as de valor no campo realizados pelo usu\xE1rio ou altera\xE7\xF5es de valores de forma din\xE2mica."),t()()(),i(78,"tr",19)(79,"td",20)(80,"div",27)(81,"span",28),e(82,"t-columns"),o(83,"br"),t()()(),i(84,"td",23)(85,"code",29),e(86,"Array<ThfLookupDataColumn>"),t()(),i(87,"td",25),e(88,"-"),t(),i(89,"td",26)(90,"em")(91,"strong"),e(92,"(opcional)"),t()(),i(93,"p"),e(94,"Permite definir e configurar as colunas do grid por meio da interface "),i(95,"strong"),e(96,"ThfLookupDataColumn"),t(),e(97,"."),t(),i(98,"pre")(99,"code",30),e(100,`// Exemplo de uso:
<thf-lookup
 ...
 [t-columns]="columns"
></thf-lookup>`),t()(),i(101,"pre")(102,"code",31),e(103,`columns: Array<ThfLookupDataColumn> = [
 { property: 'id', label: 'C\xF3digo' },
 { property: 'name', label: 'Nome' },
}`),t()()()(),i(104,"tr",19)(105,"td",20)(106,"div",27)(107,"span",28),e(108,"t-disabled"),o(109,"br"),t()()(),i(110,"td",23)(111,"code",32),e(112,"boolean"),t()(),i(113,"td",25)(114,"p")(115,"code"),e(116,"false"),t()()(),i(117,"td",26)(118,"em")(119,"strong"),e(120,"(opcional)"),t()(),i(121,"p"),e(122,'Desabilita a sele\xE7\xE3o na grid, o campo de busca e o bot\xE3o "Carregar mais resultados" do componente.'),t()()(),i(123,"tr",19)(124,"td",20)(125,"div",27)(126,"span",28),e(127,"t-field-label"),o(128,"br"),t()()(),i(129,"td",23)(130,"code",33),e(131,"string"),t()(),i(132,"td",25),e(133,"-"),t(),i(134,"td",26)(135,"p"),e(136,`Define a coluna que ser\xE1 utilizada como descri\xE7\xE3o.
Propriedade obrigat\xF3ria.`),t()()(),i(137,"tr",19)(138,"td",20)(139,"div",27)(140,"span",28),e(141,"t-field-value"),o(142,"br"),t()()(),i(143,"td",23)(144,"code",33),e(145,"string"),t()(),i(146,"td",25),e(147,"-"),t(),i(148,"td",26)(149,"p"),e(150,"Define a coluna que ser\xE1 utilizada como valor do campo. Propriedade obrigat\xF3ria."),t(),i(151,"blockquote")(152,"p"),e(153,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),i(154,"tr",19)(155,"td",20)(156,"div",27)(157,"span",28),e(158,"t-filter-params"),o(159,"br"),t()()(),i(160,"td",23)(161,"code",34),e(162,"any"),t()(),i(163,"td",25),e(164,"-"),t(),i(165,"td",26)(166,"em")(167,"strong"),e(168,"(opcional)"),t()(),i(169,"p"),e(170,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou ao servi\xE7o que implementa a interface "),i(171,"strong"),e(172,"ThfLookupDataFilter"),t(),e(173,"."),t()()(),i(174,"tr",19)(175,"td",20)(176,"div",27)(177,"span",28),e(178,"t-filter-search-select"),o(179,"br"),t()()(),i(180,"td",23)(181,"code",35),e(182,"Array<ThfLookupDataFilterSearchSelect>"),t()(),i(183,"td",25),e(184,"-"),t(),i(185,"td",26)(186,"em")(187,"strong"),e(188,"(opcional)"),t()(),i(189,"p"),e(190,"Permite definir quais colunas ser\xE3o op\xE7\xF5es de filtro. Deve implementar a interface "),i(191,"strong"),e(192,"ThfLookupDataFilterSearchSelect"),t(),e(193,"."),t(),i(194,"pre")(195,"code",30),e(196,`// Exemplo de uso:
<thf-lookup
 ...
 [t-filter-search-select]="filterSelect"
></thf-lookup>`),t()(),i(197,"pre")(198,"code",31),e(199,`filterSelect: Array<ThfLookupDataFilterSearchSelect> = [
 { label: 'Nome', value: 'name' },
 { label: 'Nickname', value: 'nickname' },
 { label: 'Email', value: 'email' }
];`),t()()()(),i(200,"tr",19)(201,"td",20)(202,"div",27)(203,"span",28),e(204,"t-filter-service"),o(205,"br"),t()()(),i(206,"td",23)(207,"code",36),e(208,"ThfLookupDataFilter "),t(),i(209,"code",33),e(210," string"),t()(),i(211,"td",25),e(212,"-"),t(),i(213,"td",26)(214,"p"),e(215,`Respons\xE1vel por buscar os dados exibidos no grid dentro do modal de busca avan\xE7ada. Aceita um servi\xE7o que implementa a interface
`),i(216,"strong"),e(217,"ThfLookupDataFilter"),t(),e(218," ou uma URL."),t(),i(219,"p"),e(220,`Quando uma URL \xE9 definida:
Se houver filtro, \xE9 adicionado o par\xE2metro `),i(221,"code"),e(222,"filter"),t(),e(223," com o valor da busca:"),t(),i(224,"pre")(225,"code"),e(226,"url + ?page=1&pageSize=20&filter=Peter"),t()(),i(227,"p"),e(228,"Se houver ordena\xE7\xE3o, \xE9 adicionado o par\xE2metro "),i(229,"code"),e(230,"order"),t(),e(231,` com o valor da coluna.
Exemplo de busca com ordena\xE7\xE3o decrescente:`),t(),i(232,"pre")(233,"code"),e(234,"url + ?page=1&pageSize=20&filter=Peter&order=-name"),t()(),i(235,"p"),e(236,"Exemplo de busca com ordena\xE7\xE3o crescente:"),t(),i(237,"pre")(238,"code"),e(239,"url + ?page=1&pageSize=20&filter=Peter&order=name"),t()(),i(240,"p"),e(241,"Se definido "),i(242,"strong"),e(243,"t-filter-params"),t(),e(244,`, seu valor tamb\xE9m ser\xE1 concatenado.
Exemplo com `),i(245,"code"),e(246,"{ age: 23 }"),t(),e(247,":"),t(),i(248,"pre")(249,"code"),e(250,"url + ?page=1&pageSize=20&age=23&filter=Peter"),t()(),i(251,"p"),e(252,`Se o campo precisar iniciar com valores, os registros s\xE3o buscados das seguintes formas:
Exemplo com a sele\xE7\xE3o \xFAnica:`),t(),i(253,"pre")(254,"code"),e(255,`model = 1234;

GET url/1234`),t()(),i(256,"p"),e(257,"Exemplo com a sele\xE7\xE3o m\xFAltipla:"),t(),i(258,"pre")(259,"code"),e(260,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678`),t()(),i(261,"blockquote")(262,"p"),e(263,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(264,"a",37),e(265,"API do PO UI"),t(),e(266,` e utilizar
os valores definidos nas propriedades `),i(267,"strong"),e(268,"t-field-label"),t(),e(269," e "),i(270,"strong"),e(271,"t-field-value"),t(),e(272," para a constru\xE7\xE3o do "),i(273,"strong"),e(274,"thf-lookup"),t(),e(275,"."),t()(),i(276,"p"),e(277,"Caso a busca tenha ocorrido pressionando a tecla "),i(278,"em"),e(279,"TAB"),t(),e(280,`, o filtro ser\xE1 codificado atrav\xE9s da fun\xE7\xE3o
`),i(281,"a",38),e(282,"encodeURIComponent"),t(),e(283,`, e portanto concatenado
na URL da seguinte forma:`),t(),i(284,"pre")(285,"code"),e(286,"url/valor%20que%20se%20deseja%20filtrar"),t()(),i(287,"blockquote")(288,"p"),e(289,"Caso utilize um servi\xE7o "),i(290,"strong"),e(291,"ThfLookupDataFilter"),t(),e(292,`, o tratamento de encoding do valor fica sob a responsabilidade do
desenvolvedor.`),t()()()(),i(293,"tr",19)(294,"td",20)(295,"div",27)(296,"span",28),e(297,"t-grid-properties"),o(298,"br"),t()()(),i(299,"td",23)(300,"code",39),e(301,"ThfLookupDataGridProperties"),t()(),i(302,"td",25),e(303,"-"),t(),i(304,"td",26)(305,"em")(306,"strong"),e(307,"(opcional)"),t()(),i(308,"p"),e(309,"Propriedades para configura\xE7\xE3o do "),i(310,"code"),e(311,"THF-Grid"),t(),e(312,"."),t(),i(313,"p"),e(314,"// Exemplo de uso:"),t(),i(315,"pre")(316,"code",30),e(317,`<thf-lookup
...
[t-grid-properties]="gridProperties"
></thf-lookup>`),t()(),i(318,"pre")(319,"code",31),e(320,`gridProperties: ThfLookupDataGridProperties = {
resizable: true,
autoSize: true,
autoSizeOnScroll: true,
virtualScroll: true,
}`),t()()()(),i(321,"tr",19)(322,"td",20)(323,"div",27)(324,"span",28),e(325,"t-height"),o(326,"br"),t()()(),i(327,"td",23)(328,"code",40),e(329,"number"),t()(),i(330,"td",25),e(331,"-"),t(),i(332,"td",26)(333,"em")(334,"strong"),e(335,"(opcional)"),t()(),i(336,"p"),e(337,"Define a altura do componente em pixels."),t(),i(338,"blockquote")(339,"p"),e(340,"Recomenda-se definir um valor acima de 368px para garantir uma boa visualiza\xE7\xE3o do componente."),t()(),i(341,"blockquote")(342,"p"),e(343,'A altura m\xEDnima do componente corresponde \xE0 soma da altura do campo de busca com a altura do bot\xE3o "Carregar mais resultados".'),t()()()(),i(344,"tr",19)(345,"td",20)(346,"div",21)(347,"span",22),e(348," (t-focus)"),o(349,"br"),t()()(),i(350,"td",23)(351,"code",24),e(352,"EventEmitter"),t()(),i(353,"td",25),e(354,"-"),t(),i(355,"td",26)(356,"em")(357,"strong"),e(358,"(opcional)"),t()(),i(359,"p"),e(360,"Evento emitido quando o campo de entrada (input) recebe foco."),t(),i(361,"p"),e(362,"Esse evento pode ser utilizado para realizar a\xE7\xF5es espec\xEDficas no momento em que o foco \xE9 aplicado ao input."),t()()(),i(363,"tr",19)(364,"td",20)(365,"div",21)(366,"span",22),e(367," (t-keydown)"),o(368,"br"),t()()(),i(369,"td",23)(370,"code",24),e(371,"EventEmitter"),t()(),i(372,"td",25),e(373,"-"),t(),i(374,"td",26)(375,"em")(376,"strong"),e(377,"(opcional)"),t()(),i(378,"p"),e(379,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no campo.
Retorna um objeto `),i(380,"code"),e(381,"KeyboardEvent"),t(),e(382," com informa\xE7\xF5es sobre a tecla."),t()()(),i(383,"tr",19)(384,"td",20)(385,"div",27)(386,"span",28),e(387,"t-keys-label"),o(388,"br"),t()()(),i(389,"td",23)(390,"code",41),e(391,"Array<ThfLookupDataKeysLabel>"),t()(),i(392,"td",25),e(393,"-"),t(),i(394,"td",26)(395,"em")(396,"strong"),e(397,"(opcional)"),t()(),i(398,"p"),e(399,"Permite definir at\xE9 3 propriedades do item selecionado que ficar\xE3o vis\xEDveis no "),i(400,"code"),e(401,"accordion"),t(),e(402,"."),t(),i(403,"pre")(404,"code",30),e(405,`<thf-lookup
 ...
 [t-keys-label]="keysLabel"
></thf-lookup>`),t()(),i(406,"pre")(407,"code",31),e(408,`keysLabel: Array<ThfLookupDataKeysLabel> = [
 { label: 'Nome', value: 'name' },
 { label: 'Email', value: 'email' }
];`),t()(),i(409,"pre")(410,"code"),e(411,`// sa\xEDda no campo:
Robert Bruce Banner-hulksmash@marvel.com`),t()()()(),i(412,"tr",19)(413,"td",20)(414,"div",27)(415,"span",28),e(416,"t-literals"),o(417,"br"),t()()(),i(418,"td",23)(419,"code",42),e(420,"ThfLookupDataLiterals"),t()(),i(421,"td",25),e(422,"-"),t(),i(423,"td",26)(424,"em")(425,"strong"),e(426,"(opcional)"),t()(),i(427,"p"),e(428,"Permite definir literais personalizados para o componente, conforme a interface "),i(429,"strong"),e(430,"ThfLookupDataLiterals"),t(),e(431,"."),t(),i(432,"pre")(433,"code",30),e(434,`// Exemplo de uso:
<thf-lookup
 ...
 [t-literals]="customLiterals"
></thf-lookup>`),t()(),i(435,"pre")(436,"code",31),e(437,"customLiterals: ThfLookupDataLiterals = { noData: 'Nenhum dado encontrado' };"),t()()()(),i(438,"tr",19)(439,"td",20)(440,"div",27)(441,"span",28),e(442,"t-multiple"),o(443,"br"),t()()(),i(444,"td",23)(445,"code",32),e(446,"boolean"),t()(),i(447,"td",25)(448,"p")(449,"code"),e(450,"false"),t()()(),i(451,"td",26)(452,"em")(453,"strong"),e(454,"(opcional)"),t()(),i(455,"p"),e(456,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(457,"blockquote")(458,"p"),e(459,"Quando habilitado, o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(460,"code"),e(461,"[ 12345, 67890 ]"),t()()()()(),i(462,"tr",19)(463,"td",20)(464,"div",21)(465,"span",22),e(466," (t-error)"),o(467,"br"),t()()(),i(468,"td",23)(469,"code",24),e(470,"EventEmitter"),t()(),i(471,"td",25),e(472,"-"),t(),i(473,"td",26)(474,"em")(475,"strong"),e(476,"(opcional)"),t()(),i(477,"p"),e(478,`Evento disparado quando ocorre algum erro na requisi\xE7\xE3o de busca.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(479,"tr",19)(480,"td",20)(481,"div",21)(482,"span",22),e(483," (t-selected)"),o(484,"br"),t()()(),i(485,"td",23)(486,"code",24),e(487,"EventEmitter"),t()(),i(488,"td",25),e(489,"-"),t(),i(490,"td",26)(491,"em")(492,"strong"),e(493,"(opcional)"),t()(),i(494,"p"),e(495,`Evento disparado ao selecionar um item.
Para sele\xE7\xE3o m\xFAltipla, retorna a lista de itens selecionados contendo os valores da coluna definida em `),i(496,"strong"),e(497,"t-field-value"),t(),e(498,`.
Para sele\xE7\xE3o \xFAnica retorna o objeto do item.`),t()()(),i(499,"tr",19)(500,"td",20)(501,"div",27)(502,"span",28),e(503," t-size"),o(504,"br"),t()()(),i(505,"td",23)(506,"code",33),e(507,"string"),t()(),i(508,"td",25)(509,"p")(510,"code"),e(511,"medium"),t()()(),i(512,"td",26)(513,"em")(514,"strong"),e(515,"(opcional)"),t()(),i(516,"p"),e(517,"Define o tamanho do componente:"),t(),i(518,"ul")(519,"li")(520,"code"),e(521,"small"),t()(),i(522,"li")(523,"code"),e(524,"medium"),t()()(),i(525,"blockquote")(526,"p"),e(527,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(528,"code"),e(529,"medium"),t(),e(530,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(531,"a",43),e(532,"po-theme"),t(),e(533,"."),t()()()()()()()(),y(534,2),t(),i(535,"po-tab",44),y(536,3),i(537,"po-container",5)(538,"po-accordion",6)(539,"po-accordion-item",45)(540,"h4",9)(541,"code"),e(542,"ThfLookupDataColumn"),t()(),i(543,"div",10)(544,"p"),e(545,"Interface para configura\xE7\xE3o das colunas ("),i(546,"strong"),e(547,"t-columns"),t(),e(548,"). "),t()(),i(549,"h4",15),e(550,"Propriedades"),t(),i(551,"table",16)(552,"tr",17)(553,"th",18),e(554,"Nome"),t(),i(555,"th",18),e(556,"Tipo"),t(),i(557,"th",18),e(558,"Descri\xE7\xE3o"),t()(),i(559,"tr",19)(560,"td",20)(561,"div",27)(562,"span",28),e(563," boolean"),o(564,"br"),t()()(),i(565,"td",23)(566,"code",46),e(567,"PoTableBoolean"),t()(),i(568,"td",26)(569,"em")(570,"strong"),e(571,"(opcional)"),t()(),i(572,"p"),e(573,"Define um objeto do tipo "),i(574,"code"),e(575,"PoTableBoolean"),t(),e(576," para as colunas do tipo "),i(577,"em"),e(578,"boolean"),t(),e(579,". Por exemplo:"),t(),i(580,"pre")(581,"code"),e(582,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}`),t()(),i(583,"blockquote")(584,"p"),e(585,"Caso n\xE3o seja definido um objeto para colunas do tipo "),i(586,"em"),e(587,"boolean"),t(),e(588,`,
esta exibir\xE1 por padr\xE3o `),i(589,"code"),e(590,"Sim"),t(),e(591," e "),i(592,"code"),e(593,"N\xE3o"),t(),e(594," de acordo com os valores "),i(595,"em"),e(596,"booleanos"),t(),e(597,"."),t()()()(),i(598,"tr",19)(599,"td",20)(600,"div",27)(601,"span",28),e(602," booleanFalse"),o(603,"br"),t()()(),i(604,"td",23)(605,"code",33),e(606,"string"),t()(),i(607,"td",26)(608,"em")(609,"strong"),e(610,"(opcional)"),t()(),i(611,"p"),e(612,"Texto exibido quando o valor da coluna for "),i(613,"em"),e(614,"false"),t(),e(615,"."),t()()(),i(616,"tr",19)(617,"td",20)(618,"div",27)(619,"span",28),e(620," booleanTrue"),o(621,"br"),t()()(),i(622,"td",23)(623,"code",33),e(624,"string"),t()(),i(625,"td",26)(626,"em")(627,"strong"),e(628,"(opcional)"),t()(),i(629,"p"),e(630,"Texto exibido quando o valor da coluna for "),i(631,"em"),e(632,"true"),t(),e(633,"."),t()()(),i(634,"tr",19)(635,"td",20)(636,"div",27)(637,"span",28),e(638," disabled"),o(639,"br"),t()()(),i(640,"td",23)(641,"code",47),e(642,"Function"),t()(),i(643,"td",26)(644,"em")(645,"strong"),e(646,"(opcional)"),t()(),i(647,"p"),e(648,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),i(649,"em"),e(650,"link"),t(),e(651," e sua a\xE7\xE3o."),t(),i(652,"blockquote")(653,"p"),e(654,"Propriedade dispon\xEDvel nas colunas do tipo "),i(655,"code"),e(656,"link"),t(),e(657,"."),t()()()(),i(658,"tr",19)(659,"td",20)(660,"div",27)(661,"span",28),e(662," format"),o(663,"br"),t()()(),i(664,"td",23)(665,"code",33),e(666,"string"),t()(),i(667,"td",26)(668,"em")(669,"strong"),e(670,"(opcional)"),t()(),i(671,"p"),e(672,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(673,"ul")(674,"li"),e(675,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(676,"li"),e(677,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(678,"tr",19)(679,"td",20)(680,"div",27)(681,"span",28),e(682," label"),o(683,"br"),t()()(),i(684,"td",23)(685,"code",33),e(686,"string"),t()(),i(687,"td",26)(688,"em")(689,"strong"),e(690,"(opcional)"),t()(),i(691,"p"),e(692,"Texto para t\xEDtulo da coluna."),t(),i(693,"p"),e(694,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(695,"em"),e(696,"label"),t(),e(697," o valor da propriedade "),i(698,"em"),e(699,"property"),t(),e(700," com a primeira letra em mai\xFAsculo."),t()()(),i(701,"tr",19)(702,"td",20)(703,"div",27)(704,"span",28),e(705," labels"),o(706,"br"),t()()(),i(707,"td",23)(708,"code",48),e(709,"Array<PoTableColumnLabel>"),t()(),i(710,"td",26)(711,"em")(712,"strong"),e(713,"(opcional)"),t()(),i(714,"p"),e(715,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(716,"code"),e(717,"PoTableColumnLabel"),t(),e(718," na qual devem ser definidas os labels. Por exemplo:"),t(),i(719,"pre")(720,"code"),e(721,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}`),t()()()(),i(722,"tr",19)(723,"td",20)(724,"div",27)(725,"span",28),e(726," locale"),o(727,"br"),t()()(),i(728,"td",23)(729,"code",33),e(730,"string"),t()(),i(731,"td",26)(732,"em")(733,"strong"),e(734,"(opcional)"),t()(),i(735,"p"),e(736,`Define a localidade a ser utilizada no modo de exibi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(737,"a",49)(738,"code"),e(739,"I18n"),t()()(),i(740,"p"),e(741,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(742,"pre")(743,"code"),e(744,`columnWithItems: Array<ThfGridColumn> = [
{
   property: 'currency',
   type: 'currency',
   locale: 'en'
},`),t()(),i(745,"blockquote")(746,"p"),e(747,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(748,"p"),e(749,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(750,"p"),e(751,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(752,"a",49)(753,"code"),e(754,"I18n"),t()()()(),i(755,"p"),e(756,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(757,"pre")(758,"code"),e(759,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}`),t()(),i(760,"blockquote")(761,"p"),e(762,"No modo de vis\xE3o, \xE9 compat\xEDvel com colunas dos tipos "),i(763,"code"),e(764,"number"),t(),e(765," e "),i(766,"code"),e(767,"currency"),t(),e(768,"."),t()()()(),i(769,"tr",19)(770,"td",20)(771,"div",27)(772,"span",28),e(773," property"),o(774,"br"),t()()(),i(775,"td",23)(776,"code",33),e(777,"string"),t()(),i(778,"td",26)(779,"em")(780,"strong"),e(781,"(opcional)"),t()(),i(782,"p"),e(783,"Nome identificador da coluna."),t()()(),i(784,"tr",19)(785,"td",20)(786,"div",27)(787,"span",28),e(788," type"),o(789,"br"),t()()(),i(790,"td",23)(791,"code",33),e(792,"string"),t()(),i(793,"td",26)(794,"em")(795,"strong"),e(796,"(opcional)"),t()(),i(797,"p"),e(798,"Tipo da coluna:"),t(),i(799,"ul")(800,"li"),e(801,"string (padr\xE3o): textos"),t(),i(802,"li"),e(803,"number: valores num\xE9ricos"),t(),i(804,"li"),e(805,"date: data"),t(),i(806,"li"),e(807,"currency: valores monet\xE1rios"),t(),i(808,"li"),e(809,"dateTime: data e hora"),t()()()(),i(810,"tr",19)(811,"td",20)(812,"div",27)(813,"span",28),e(814," visible"),o(815,"br"),t()()(),i(816,"td",23)(817,"code",32),e(818,"boolean"),t()(),i(819,"td",26)(820,"em")(821,"strong"),e(822,"(opcional)"),t()(),i(823,"p"),e(824,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(825,"strong"),e(826,"gerenciador de colunas"),t(),e(827,"."),t(),i(828,"blockquote")(829,"p"),e(830,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(831,"code"),e(832,"p-max-columns"),t(),e(833,"."),t()()()(),i(834,"tr",19)(835,"td",20)(836,"div",27)(837,"span",28),e(838," width"),o(839,"br"),t()()(),i(840,"td",23)(841,"code",33),e(842,"string"),t()(),i(843,"td",26)(844,"em")(845,"strong"),e(846,"(opcional)"),t()(),i(847,"p"),e(848,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()()(),i(849,"po-accordion-item",50)(850,"h4",9)(851,"code"),e(852,"ThfLookupDataFilterSearchSelect"),t()(),i(853,"div",10)(854,"p"),e(855,"Interface que define as colunas para busca ("),i(856,"strong"),e(857,"t-filter-search-select"),t(),e(858,") "),t()(),i(859,"h4",15),e(860,"Propriedades"),t(),i(861,"table",16)(862,"tr",17)(863,"th",18),e(864,"Nome"),t(),i(865,"th",18),e(866,"Tipo"),t(),i(867,"th",18),e(868,"Descri\xE7\xE3o"),t()(),i(869,"tr",19)(870,"td",20)(871,"div",27)(872,"span",28),e(873," label"),o(874,"br"),t()()(),i(875,"td",23)(876,"code",33),e(877,"string"),t()(),i(878,"td",26)(879,"p"),e(880,"R\xF3tulo da coluna"),t()()(),i(881,"tr",19)(882,"td",20)(883,"div",27)(884,"span",28),e(885," value"),o(886,"br"),t()()(),i(887,"td",23)(888,"code",33),e(889,"string"),t()(),i(890,"td",26)(891,"p"),e(892,"Coluna"),t()()()()(),i(893,"po-accordion-item",51)(894,"h4",9)(895,"code"),e(896,"ThfLookupDataFilter"),t()(),i(897,"div",10)(898,"p"),e(899,"Interface para definir o tipo de busca via servi\xE7o. "),t()(),i(900,"table",52)(901,"tr",19)(902,"th",53)(903,"div",27)(904,"h4")(905,"span",28),e(906," fetchItems "),t()()()()(),i(907,"tr",26)(908,"td",26)(909,"p"),e(910,`M\xE9todo que ser\xE1 disparado ao digitar no campo do componente, deve-se retornar
um `),i(911,"em"),e(912,"Observable"),t(),e(913," com a resposta da API no formato { items: [] }."),t()()()(),i(914,"h5")(915,"b"),e(916,"Par\xE2metros"),t()(),i(917,"table",16)(918,"tr",17)(919,"th",18),e(920,"Nome"),t(),i(921,"th",18),e(922,"Tipo"),t(),i(923,"th",18),e(924,"Descri\xE7\xE3o"),t()(),i(925,"tr",19)(926,"td",20),e(927," query"),t(),i(928,"td",23)(929,"code",54),e(930," string "),t()(),i(931,"td",26)(932,"p"),e(933,"Par\xE2metro com o valor que est\xE1 sendo digitado no campo do lookup"),t()()(),i(934,"tr",19)(935,"td",20),e(936," filterParams"),t(),i(937,"td",23)(938,"code",54),e(939," any "),t()(),i(940,"td",26)(941,"p"),e(942,"Valor informado atrav\xE9s da propriedade "),i(943,"strong"),e(944,"t-filter-params"),t(),e(945,"."),t()()()(),o(946,"br"),i(947,"table",52)(948,"tr",19)(949,"th",53)(950,"div",27)(951,"h4")(952,"span",28),e(953," getFilteredItems "),t()()()()(),i(954,"tr",26)(955,"td",26)(956,"p"),e(957,`M\xE9todo que ser\xE1 disparado ao filtrar no grid ou carregar mais resultados no componente, deve-se retornar
um `),i(958,"em"),e(959,"Observable"),t(),e(960," com a resposta da API no formato da interface "),i(961,"strong"),e(962,"ThfLookupResponseApi"),t(),e(963,"."),t()()()(),i(964,"h5")(965,"b"),e(966,"Par\xE2metros"),t()(),i(967,"table",16)(968,"tr",17)(969,"th",18),e(970,"Nome"),t(),i(971,"th",18),e(972,"Tipo"),t(),i(973,"th",18),e(974,"Descri\xE7\xE3o"),t()(),i(975,"tr",19)(976,"td",20),e(977," params"),t(),i(978,"td",23)(979,"code",54),e(980," ThfLookupFilteredItemsParams "),t()(),i(981,"td",26)(982,"p"),e(983,"Objeto enviado por par\xE2metro que implementa a interface "),i(984,"strong"),e(985,"ThfLookupFilteredItemsParams"),t(),e(986,"."),t()()()(),o(987,"br"),i(988,"table",52)(989,"tr",19)(990,"th",53)(991,"div",27)(992,"h4")(993,"span",28),e(994," getObjectByValue "),t()()()()(),i(995,"tr",26)(996,"td",26)(997,"p"),e(998,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(999,"p"),e(1e3,"Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o esteja habilitada, o par\xE2metro "),i(1001,"code"),e(1002,"value"),t(),e(1003,` ser\xE1 enviado como uma lista de valores
e o `),i(1004,"em"),e(1005,"Observable"),t(),e(1006," deve retornar uma lista de objetos."),t()()()(),i(1007,"h5")(1008,"b"),e(1009,"Par\xE2metros"),t()(),i(1010,"table",16)(1011,"tr",17)(1012,"th",18),e(1013,"Nome"),t(),i(1014,"th",18),e(1015,"Tipo"),t(),i(1016,"th",18),e(1017,"Descri\xE7\xE3o"),t()(),i(1018,"tr",19)(1019,"td",20),e(1020," value"),t(),i(1021,"td",23)(1022,"code",33),e(1023," string "),t(),i(1024,"code",55),e(1025," Array<any> "),t()(),i(1026,"td",26)(1027,"p"),e(1028,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(1029,"tr",19)(1030,"td",20),e(1031," filterParams"),t(),i(1032,"td",23)(1033,"code",54),e(1034," any "),t()(),i(1035,"td",26)(1036,"p"),e(1037,"Valor informado atrav\xE9s da propriedade "),i(1038,"strong"),e(1039,"t-filter-params"),t(),e(1040,"."),t()()()(),o(1041,"br"),t(),i(1042,"po-accordion-item",56)(1043,"h4",9)(1044,"code"),e(1045,"ThfLookupDataFilteredItemsParams"),t()(),i(1046,"div",10)(1047,"p"),e(1048,"Interface do objeto enviado como par\xE2metro do m\xE9todo privado "),i(1049,"strong"),e(1050,"getFilteredItems"),t(),e(1051,". "),t()(),i(1052,"h4",15),e(1053,"Propriedades"),t(),i(1054,"table",16)(1055,"tr",17)(1056,"th",18),e(1057,"Nome"),t(),i(1058,"th",18),e(1059,"Tipo"),t(),i(1060,"th",18),e(1061,"Descri\xE7\xE3o"),t()(),i(1062,"tr",19)(1063,"td",20)(1064,"div",27)(1065,"span",28),e(1066," filter"),o(1067,"br"),t()()(),i(1068,"td",23)(1069,"code",57),e(1070,`{ [key: string]: any;
}`),t()(),i(1071,"td",26)(1072,"em")(1073,"strong"),e(1074,"(opcional)"),t()(),i(1075,"p"),e(1076,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(1077,"tr",19)(1078,"td",20)(1079,"div",27)(1080,"span",28),e(1081," filterParams"),o(1082,"br"),t()()(),i(1083,"td",23)(1084,"code",34),e(1085,"any"),t()(),i(1086,"td",26)(1087,"em")(1088,"strong"),e(1089,"(opcional)"),t()(),i(1090,"p"),e(1091,"Valor informado atrav\xE9s da propriedade "),i(1092,"code"),e(1093,"t-filter-params"),t(),e(1094,"."),t()()(),i(1095,"tr",19)(1096,"td",20)(1097,"div",27)(1098,"span",28),e(1099," order"),o(1100,"br"),t()()(),i(1101,"td",23)(1102,"code",33),e(1103,"string"),t()(),i(1104,"td",26)(1105,"em")(1106,"strong"),e(1107,"(opcional)"),t()(),i(1108,"p"),e(1109,"Coluna que est\xE1 sendo ordenada na grid."),t(),i(1110,"ul")(1111,"li"),e(1112,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(1113,"code"),e(1114,"-<colunaOrdenada>"),t(),e(1115,", por exemplo "),i(1116,"code"),e(1117,"-name"),t(),e(1118,"."),t(),i(1119,"li"),e(1120,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(1121,"code"),e(1122,"<colunaOrdenada>"),t(),e(1123,", por exemplo "),i(1124,"code"),e(1125,"name"),t(),e(1126,"."),t()()()(),i(1127,"tr",19)(1128,"td",20)(1129,"div",27)(1130,"span",28),e(1131," page"),o(1132,"br"),t()()(),i(1133,"td",23)(1134,"code",40),e(1135,"number"),t()(),i(1136,"td",26)(1137,"em")(1138,"strong"),e(1139,"(opcional)"),t()(),i(1140,"p"),e(1141,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(1142,"tr",19)(1143,"td",20)(1144,"div",27)(1145,"span",28),e(1146," pageSize"),o(1147,"br"),t()()(),i(1148,"td",23)(1149,"code",40),e(1150,"number"),t()(),i(1151,"td",26)(1152,"em")(1153,"strong"),e(1154,"(opcional)"),t()(),i(1155,"p"),e(1156,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()()(),i(1157,"po-accordion-item",58)(1158,"h4",9)(1159,"code"),e(1160,"ThfLookupDataGridProperties"),t()(),i(1161,"div",10)(1162,"p"),e(1163,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup. "),t()(),i(1164,"h4",15),e(1165,"Propriedades"),t(),i(1166,"table",16)(1167,"tr",17)(1168,"th",18),e(1169,"Nome"),t(),i(1170,"th",18),e(1171,"Tipo"),t(),i(1172,"th",18),e(1173,"Descri\xE7\xE3o"),t()(),i(1174,"tr",19)(1175,"td",20)(1176,"div",27)(1177,"span",28),e(1178," autoSize"),o(1179,"br"),t()()(),i(1180,"td",23)(1181,"code",32),e(1182,"boolean"),t()(),i(1183,"td",26)(1184,"em")(1185,"strong"),e(1186,"(opcional)"),t()(),i(1187,"p"),e(1188,`Ajusta automaticamente a largura das colunas vis\xEDveis no grid. O ajuste autom\xE1tico \xE9 realizado durante a
inicializa\xE7\xE3o. Requer que a propriedade `),i(1189,"strong"),e(1190,"resizable"),t(),e(1191," esteja habilitada."),t(),i(1192,"blockquote")(1193,"p"),e(1194,`Apesar de atribuir largura \xE0s colunas do grid, \xE9 importante ressaltar que o componente recalcula
as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis no grid, podendo alterar as
dimens\xF5es passadas proporcionalmente.`),t()()()(),i(1195,"tr",19)(1196,"td",20)(1197,"div",27)(1198,"span",28),e(1199," autoSizeOnScroll"),o(1200,"br"),t()()(),i(1201,"td",23)(1202,"code",32),e(1203,"boolean"),t()(),i(1204,"td",26)(1205,"em")(1206,"strong"),e(1207,"(opcional)"),t()(),i(1208,"p"),e(1209,"Ativa o redimensionamento autom\xE1tico das colunas durante a rolagem virtual."),t(),i(1210,"p"),e(1211,`Quando habilitado, a grid recalcula automaticamente as larguras das colunas
conforme novos dados s\xE3o carregados durante a rolagem, garantindo que o
conte\xFAdo seja exibido corretamente sem truncamento indesejado.`),t(),i(1212,"p"),e(1213,`O redimensionamento ocorre a cada mudan\xE7a de p\xE1gina virtual, controlada pela
propriedade `),i(1214,"code"),e(1215,"t-page-size-virtual"),t(),e(1216," (valor padr\xE3o: 60 itens por p\xE1gina)."),t(),i(1217,"blockquote")(1218,"p")(1219,"strong"),e(1220,"Pr\xE9-requisitos"),t(),e(1221,": Requer que as propriedades "),i(1222,"code"),e(1223,"autoSize"),t(),e(1224,", "),i(1225,"code"),e(1226,"resizable"),t(),e(1227,`
e `),i(1228,"code"),e(1229,"virtualScroll"),t(),e(1230," estejam habilitadas."),t()(),i(1231,"blockquote")(1232,"p")(1233,"strong"),e(1234,"Incompatibilidade"),t(),e(1235,": N\xE3o funciona com "),i(1236,"code"),e(1237,"t-grid-row-actions"),t(),e(1238," habilitado;"),t()(),i(1239,"p")(1240,"strong"),e(1241,"Exemplo de uso:"),t()(),i(1242,"pre")(1243,"code",30),e(1244,`<thf-grid
  ...
  [t-auto-size]="true"
  [t-auto-size-on-scroll]="true"
  [t-resizable]="true"
  [t-virtual-scroll]="true"
/>`),t()()()(),i(1245,"tr",19)(1246,"td",20)(1247,"div",27)(1248,"span",28),e(1249," draggable"),o(1250,"br"),t()()(),i(1251,"td",23)(1252,"code",32),e(1253,"boolean"),t()(),i(1254,"td",26)(1255,"em")(1256,"strong"),e(1257,"(opcional)"),t()(),i(1258,"p"),e(1259,"Habilita o Drag and Drop nas colunas."),t()()(),i(1260,"tr",19)(1261,"td",20)(1262,"div",27)(1263,"span",28),e(1264," group"),o(1265,"br"),t()()(),i(1266,"td",23)(1267,"code",59),e(1268,"Array<string>"),t()(),i(1269,"td",26)(1270,"em")(1271,"strong"),e(1272,"(opcional)"),t()(),i(1273,"p"),e(1274,"Lista das colunas que devem iniciar agrupadas. Requer que a propriedade "),i(1275,"strong"),e(1276,"groupable"),t(),e(1277," esteja habilitada."),t()()(),i(1278,"tr",19)(1279,"td",20)(1280,"div",27)(1281,"span",28),e(1282," groupable"),o(1283,"br"),t()()(),i(1284,"td",23)(1285,"code",32),e(1286,"boolean "),t(),i(1287,"code",60),e(1288," GroupableSettings"),t()(),i(1289,"td",26)(1290,"em")(1291,"strong"),e(1292,"(opcional)"),t()(),i(1293,"p"),e(1294,"Habilita a ordena\xE7\xE3o por grupo atrav\xE9s da coluna."),t()()(),i(1295,"tr",19)(1296,"td",20)(1297,"div",27)(1298,"span",28),e(1299," hideSelectAll"),o(1300,"br"),t()()(),i(1301,"td",23)(1302,"code",32),e(1303,"boolean"),t()(),i(1304,"td",26)(1305,"em")(1306,"strong"),e(1307,"(opcional)"),t()(),i(1308,"p"),e(1309,"Permite ocultar o checkbox de selecionar todos os itens."),t()()(),i(1310,"tr",19)(1311,"td",20)(1312,"div",27)(1313,"span",28),e(1314," resizable"),o(1315,"br"),t()()(),i(1316,"td",23)(1317,"code",32),e(1318,"boolean"),t()(),i(1319,"td",26)(1320,"em")(1321,"strong"),e(1322,"(opcional)"),t()(),i(1323,"p"),e(1324,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do grid,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(1325,"tr",19)(1326,"td",20)(1327,"div",27)(1328,"span",28),e(1329," selectableEntireLine"),o(1330,"br"),t()()(),i(1331,"td",23)(1332,"code",32),e(1333,"boolean"),t()(),i(1334,"td",26)(1335,"em")(1336,"strong"),e(1337,"(opcional)"),t()(),i(1338,"p"),e(1339,"Permite selecionar o item ao clicar na linha."),t()()(),i(1340,"tr",19)(1341,"td",20)(1342,"div",27)(1343,"span",28),e(1344," showDraggableIcon"),o(1345,"br"),t()()(),i(1346,"td",23)(1347,"code",32),e(1348,"boolean"),t()(),i(1349,"td",26)(1350,"em")(1351,"strong"),e(1352,"(opcional)"),t()(),i(1353,"p"),e(1354,"Exibe o \xEDcone de draggable nas respectivas colunas."),t()()(),i(1355,"tr",19)(1356,"td",20)(1357,"div",27)(1358,"span",28),e(1359," showMoreDisabled"),o(1360,"br"),t()()(),i(1361,"td",23)(1362,"code",32),e(1363,"boolean"),t()(),i(1364,"td",26)(1365,"em")(1366,"strong"),e(1367,"(opcional)"),t()(),i(1368,"p"),e(1369,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(1370,"tr",19)(1371,"td",20)(1372,"div",27)(1373,"span",28),e(1374," showMoreVisible"),o(1375,"br"),t()()(),i(1376,"td",23)(1377,"code",32),e(1378,"boolean"),t()(),i(1379,"td",26)(1380,"em")(1381,"strong"),e(1382,"(opcional)"),t()(),i(1383,"p"),e(1384,"Controla a exibi\xE7\xE3o do bot\xE3o 'Carregar mais resultados'. Requer que a propriedade "),i(1385,"strong"),e(1386,"pageable"),t(),e(1387," esteja habilitada."),t(),i(1388,"blockquote")(1389,"p"),e(1390,"Caso seja utilizado em conjunto com "),i(1391,"strong"),e(1392,"showMoreDisabled"),t(),e(1393,", a propriedade "),i(1394,"strong"),e(1395,"showMoreVisible"),t(),e(1396," ter\xE1 prioridade."),t()()()(),i(1397,"tr",19)(1398,"td",20)(1399,"div",27)(1400,"span",28),e(1401," sort"),o(1402,"br"),t()()(),i(1403,"td",23)(1404,"code",61),e(1405,"Array<{ field: string; dir: 'asc' "),t(),i(1406,"code",62),e(1407,` 'desc';
}>`),t()(),i(1408,"td",26)(1409,"em")(1410,"strong"),e(1411,"(opcional)"),t()(),i(1412,"p"),e(1413,"Define a ordena\xE7\xE3o (sort) crescente (asc) ou decrescente (desc) por coluna."),t(),i(1414,"pre")(1415,"code",31),e(1416,"sort: Array<ThfGridColumnSort> = [{ field: 'name', dir: 'desc'}];"),t()()()(),i(1417,"tr",19)(1418,"td",20)(1419,"div",27)(1420,"span",28),e(1421," sortable"),o(1422,"br"),t()()(),i(1423,"td",23)(1424,"code",32),e(1425,"boolean"),t()(),i(1426,"td",26)(1427,"em")(1428,"strong"),e(1429,"(opcional)"),t()(),i(1430,"p"),e(1431,"Habilita a ordena\xE7\xE3o (sort) crescente ou decrescente em todas as colunas do grid."),t()()(),i(1432,"tr",19)(1433,"td",20)(1434,"div",27)(1435,"span",28),e(1436," spacing"),o(1437,"br"),t()()(),i(1438,"td",23)(1439,"code",63),e(1440,"'extraSmall' "),t(),i(1441,"code",64),e(1442," 'small' "),t(),i(1443,"code",65),e(1444," 'medium' "),t(),i(1445,"code",66),e(1446," 'large'"),t()(),i(1447,"td",26)(1448,"em")(1449,"strong"),e(1450,"(opcional)"),t()(),i(1451,"p"),e(1452,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do grid. Os valores
permitidos s\xE3o definidos pelo enum `),i(1453,"strong"),e(1454,"ThfColumnSpacing"),t(),e(1455,"."),t()()(),i(1456,"tr",19)(1457,"td",20)(1458,"div",27)(1459,"span",28),e(1460," striped"),o(1461,"br"),t()()(),i(1462,"td",23)(1463,"code",32),e(1464,"boolean"),t()(),i(1465,"td",26)(1466,"em")(1467,"strong"),e(1468,"(opcional)"),t()(),i(1469,"p"),e(1470,"Define o estilo listrado no grid (striped)."),t()()(),i(1471,"tr",19)(1472,"td",20)(1473,"div",27)(1474,"span",28),e(1475," virtualScroll"),o(1476,"br"),t()()(),i(1477,"td",23)(1478,"code",32),e(1479,"boolean"),t()(),i(1480,"td",26)(1481,"em")(1482,"strong"),e(1483,"(opcional)"),t()(),i(1484,"p"),e(1485,"Define o uso do virtual scroll no grid para melhorar a performance com grandes volumes de dados."),t()()()()(),i(1486,"po-accordion-item",67)(1487,"h4",9)(1488,"code"),e(1489,"ThfLookupDataKeysLabel"),t()(),i(1490,"div",10)(1491,"p"),e(1492,"Interface para definir as propriedades vis\xEDveis do item selecionado ("),i(1493,"strong"),e(1494,"t-keys-label"),t(),e(1495,"). "),t()(),i(1496,"h4",15),e(1497,"Propriedades"),t(),i(1498,"table",16)(1499,"tr",17)(1500,"th",18),e(1501,"Nome"),t(),i(1502,"th",18),e(1503,"Tipo"),t(),i(1504,"th",18),e(1505,"Descri\xE7\xE3o"),t()(),i(1506,"tr",19)(1507,"td",20)(1508,"div",27)(1509,"span",28),e(1510," label"),o(1511,"br"),t()()(),i(1512,"td",23)(1513,"code",33),e(1514,"string"),t()(),i(1515,"td",26)(1516,"p"),e(1517,"Texto exibido"),t()()(),i(1518,"tr",19)(1519,"td",20)(1520,"div",27)(1521,"span",28),e(1522," value"),o(1523,"br"),t()()(),i(1524,"td",23)(1525,"code",33),e(1526,"string"),t()(),i(1527,"td",26)(1528,"p"),e(1529,"Coluna"),t()()()()(),i(1530,"po-accordion-item",68)(1531,"h4",9)(1532,"code"),e(1533,"ThfLookupDataLiterals"),t()(),i(1534,"div",10)(1535,"p"),e(1536,"Interface para customizar literais ("),i(1537,"strong"),e(1538,"t-literals"),t(),e(1539,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(1540,"h4",15),e(1541,"Propriedades"),t(),i(1542,"table",16)(1543,"tr",17)(1544,"th",18),e(1545,"Nome"),t(),i(1546,"th",18),e(1547,"Tipo"),t(),i(1548,"th",18),e(1549,"Descri\xE7\xE3o"),t()(),i(1550,"tr",19)(1551,"td",20)(1552,"div",27)(1553,"span",28),e(1554," loadMoreData"),o(1555,"br"),t()()(),i(1556,"td",23)(1557,"code",33),e(1558,"string"),t()(),i(1559,"td",26)(1560,"em")(1561,"strong"),e(1562,"(opcional)"),t()(),i(1563,"p"),e(1564,"Label do "),i(1565,"code"),e(1566,"button"),t(),e(1567," que deve carregar mais resultados no grid, ou seja, exibir mais itens."),t()()(),i(1568,"tr",19)(1569,"td",20)(1570,"div",27)(1571,"span",28),e(1572," loadingData"),o(1573,"br"),t()()(),i(1574,"td",23)(1575,"code",33),e(1576,"string"),t()(),i(1577,"td",26)(1578,"em")(1579,"strong"),e(1580,"(opcional)"),t()(),i(1581,"p"),e(1582,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na grid."),t()()(),i(1583,"tr",19)(1584,"td",20)(1585,"div",27)(1586,"span",28),e(1587," multipleItems"),o(1588,"br"),t()()(),i(1589,"td",23)(1590,"code",33),e(1591,"string"),t()(),i(1592,"td",26)(1593,"em")(1594,"strong"),e(1595,"(opcional)"),t()(),i(1596,"p"),e(1597,"Frase exibida no accordion quando possui mais de um item selecionado."),t()()(),i(1598,"tr",19)(1599,"td",20)(1600,"div",27)(1601,"span",28),e(1602," noColumns"),o(1603,"br"),t()()(),i(1604,"td",23)(1605,"code",33),e(1606,"string"),t()(),i(1607,"td",26)(1608,"em")(1609,"strong"),e(1610,"(opcional)"),t()(),i(1611,"p"),e(1612,"Texto exibido quando n\xE3o existem colunas definidas no grid."),t()()(),i(1613,"tr",19)(1614,"td",20)(1615,"div",27)(1616,"span",28),e(1617," noData"),o(1618,"br"),t()()(),i(1619,"td",23)(1620,"code",33),e(1621,"string"),t()(),i(1622,"td",26)(1623,"em")(1624,"strong"),e(1625,"(opcional)"),t()(),i(1626,"p"),e(1627,"Texto exibido quando n\xE3o existem itens para serem exibidos no grid."),t()()(),i(1628,"tr",19)(1629,"td",20)(1630,"div",27)(1631,"span",28),e(1632," oneItem"),o(1633,"br"),t()()(),i(1634,"td",23)(1635,"code",33),e(1636,"string"),t()(),i(1637,"td",26)(1638,"em")(1639,"strong"),e(1640,"(opcional)"),t()(),i(1641,"p"),e(1642,"Frase exibida no accordion quando possui apenas um item selecionado."),t()()(),i(1643,"tr",19)(1644,"td",20)(1645,"div",27)(1646,"span",28),e(1647," placeholder"),o(1648,"br"),t()()(),i(1649,"td",23)(1650,"code",33),e(1651,"string"),t()(),i(1652,"td",26)(1653,"em")(1654,"strong"),e(1655,"(opcional)"),t()(),i(1656,"p"),e(1657,"Texto exibido no placeholder do input."),t()()()()(),i(1658,"po-accordion-item",69)(1659,"h4",9)(1660,"code"),e(1661,"ThfLookupDataResponseApi"),t()(),i(1662,"div",10)(1663,"p"),e(1664,"Interface que representa a estrutura de uma resposta de sucesso HTTP."),t(),i(1665,"blockquote")(1666,"p"),e(1667,"Utilizada apenas quando a resposta incluir uma cole\xE7\xE3o de itens. "),t()()(),i(1668,"h4",15),e(1669,"Propriedades"),t(),i(1670,"table",16)(1671,"tr",17)(1672,"th",18),e(1673,"Nome"),t(),i(1674,"th",18),e(1675,"Tipo"),t(),i(1676,"th",18),e(1677,"Descri\xE7\xE3o"),t()(),i(1678,"tr",19)(1679,"td",20)(1680,"div",27)(1681,"span",28),e(1682," hasNext"),o(1683,"br"),t()()(),i(1684,"td",23)(1685,"code",32),e(1686,"boolean"),t()(),i(1687,"td",26)(1688,"p"),e(1689,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(1690,"tr",19)(1691,"td",20)(1692,"div",27)(1693,"span",28),e(1694," items"),o(1695,"br"),t()()(),i(1696,"td",23)(1697,"code",55),e(1698,"Array<any>"),t()(),i(1699,"td",26)(1700,"p"),e(1701,"Lista de itens retornados."),t()()()()()()(),y(1702,4),t(),i(1703,"po-tab",70)(1704,"po-container",5),y(1705,5),i(1706,"h3",71),e(1707,"Tokens customiz\xE1veis"),t(),i(1708,"p"),e(1709,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(1710,"blockquote")(1711,"p"),e(1712,"Para maiores informa\xE7\xF5es, acesse o guia "),i(1713,"a",72),e(1714,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(1715,"."),t()(),i(1716,"p"),e(1717,"O componente "),i(1718,"strong"),e(1719,"THF-Lookup-Data"),t(),e(1720," \xE9 composto pelos componentes "),i(1721,"strong"),e(1722,"PO-Search"),t(),e(1723," e "),i(1724,"strong"),e(1725,"THF-Grid"),t(),e(1726,"."),t(),i(1727,"p"),e(1728,"Verifique os tokens dispon\xEDveis para customiza\xE7\xE3o em:"),t(),i(1729,"p")(1730,"strong"),e(1731,"- PO-Search:"),t(),e(1732," \xA0"),i(1733,"a",73),e(1734,"https://po-ui.io/documentation/po-search"),t()(),i(1735,"p")(1736,"strong"),e(1737,"- THF-Grid:"),t(),e(1738," \xA0"),i(1739,"a",74),e(1740,"https://thf.totvs.app/v19/documentation/thf-grid"),t()()(),y(1741,6),t(),i(1742,"po-tab",75),y(1743,7),t()()())},dependencies:[L,U,v,Y,j],encapsulation:2})}}return d})();var mi=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","labs",""]]],si=["[overview]","[especificacao-before]","[especificacao-after]","[labs]"],gt=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let C=E.querySelector(".po-tab-button-label");C&&C?.textContent?.trim().toLowerCase()===a&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(G(J))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-splitter-pane"]],viewQuery:function(r,n){if(r&1&&(w(j,5),w(L,5)),r&2){let l;D(l=A())&&(n.tabs=l.first),D(l=A())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:si,decls:140,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"language-html"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean,","any"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&($(mi),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),y(4),t(),i(5,"po-tab",4),y(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfSplitterModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfSplitterPaneComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"O componente "),i(19,"code"),e(20,"thf-splitter-pane"),t(),e(21," representa uma das se\xE7\xF5es que comp\xF5em o "),i(22,"code"),e(23,"thf-splitter"),t(),e(24,"."),t(),i(25,"p"),e(26,"Devem ser utilizados "),i(27,"strong"),e(28,"exatamente dois panes"),t(),e(29," por splitter; panes adicionais ser\xE3o ignorados."),t(),i(30,"p"),e(31,"Cada "),i(32,"code"),e(33,"pane"),t(),e(34," se ajusta dinamicamente conforme o redimensionamento."),t(),i(35,"pre")(36,"code",11),e(37,`<thf-splitter>
 <thf-splitter-pane [(t-size)]="50%">
   Conte\xFAdo do painel
 </thf-splitter-pane>
 ...
</thf-splitter>`),t()()(),i(38,"div",12)(39,"h4",13),e(40,"Seletor"),t(),i(41,"pre",14),e(42,`<thf-splitter-pane
  t-scrollable="boolean, any"
  t-size="string"
  (t-size-change)="EventEmitter" >
</thf-splitter-pane>
`),t()()(),i(43,"po-accordion-item",15)(44,"h4",16),e(45,"Propriedades"),t(),i(46,"table",17)(47,"tr",18)(48,"th",19),e(49,"Nome"),t(),i(50,"th",19),e(51,"Tipo"),t(),i(52,"th",19),e(53,"Padr\xE3o"),t(),i(54,"th",19),e(55,"Descri\xE7\xE3o"),t()(),i(56,"tr",20)(57,"td",21)(58,"div",22)(59,"span",23),e(60," t-scrollable"),o(61,"br"),t()()(),i(62,"td",24)(63,"code",25),e(64,"boolean, any"),t()(),i(65,"td",26)(66,"p"),e(67,"false"),t()(),i(68,"td",27)(69,"p"),e(70,`Habilita a rolagem horizontal/vertical do pane quando o conte\xFAdo exceder o valor de tamanho definido. A rolagem \xE9 aplicada
somente se o tamanho m\xEDnimo for atingido durante o redimensionamento.`),t()()(),i(71,"tr",20)(72,"td",21)(73,"div",22)(74,"span",23),e(75," t-size"),o(76,"br"),t()()(),i(77,"td",24)(78,"code",28),e(79,"string"),t()(),i(80,"td",26),e(81,"-"),t(),i(82,"td",27)(83,"p"),e(84,"Define o tamanho inicial do pane (% ou px), respeitando os limites entre "),i(85,"strong"),e(86,"30% e 70%"),t(),e(87,` do tamanho total
do splitter.`),t(),i(88,"p"),e(89,"Suporta two-way binding com "),i(90,"code"),e(91,"t-size-change"),t(),e(92,"."),t(),i(93,"blockquote")(94,"p"),e(95,"Apenas um pane pode definir "),i(96,"code"),e(97,"t-size"),t(),e(98,`; caso contr\xE1rio, ser\xE1 exibido um erro no console.
Quando o valor definido em `),i(99,"code"),e(100,"px"),t(),e(101,` estiver fora dos limites percentuais, ao realizar o redimensionamento os limites de 30% a 70% ser\xE3o aplicados automaticamente.
O uso de `),i(102,"code"),e(103,"px"),t(),e(104," \xE9 \xFAtil para cen\xE1rios onde o "),i(105,"code"),e(106,"thf-splitter"),t(),e(107," est\xE1 com "),i(108,"code"),e(109,"t-disabled"),t(),e(110," habilitado, pois o tamanho fixo n\xE3o ser\xE1 alterado."),t()(),i(111,"pre")(112,"code",11),e(113,`<!-- One-way -->
<thf-splitter-pane [t-size]="'50%'">

<!-- Two-way -->
<thf-splitter-pane [(t-size)]="variavel">`),t()()()(),i(114,"tr",20)(115,"td",21)(116,"div",29)(117,"span",30),e(118," (t-size-change)"),o(119,"br"),t()()(),i(120,"td",24)(121,"code",31),e(122,"EventEmitter"),t()(),i(123,"td",26),e(124,"-"),t(),i(125,"td",27)(126,"p"),e(127,"Evento emitido quando o tamanho do pane que possui "),i(128,"code"),e(129,"t-size"),t(),e(130," \xE9 modificada. Caso nenhum pane possua "),i(131,"code"),e(132,"t-size"),t(),e(133,`, o
evento n\xE3o ser\xE1 disparado.`),t(),i(134,"pre")(135,"code",11),e(136,'<thf-splitter-pane (t-size-change)="onSizeChange($event)">'),t()()()()()()()(),y(137,2),t(),i(138,"po-tab",32),y(139,3),t()()())},dependencies:[L,U,v,Y,j],encapsulation:2})}}return d})();var ci=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","enums-before",""]],[["","enums-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],ui=["[overview]","[especificacao-before]","[especificacao-after]","[enums-before]","[enums-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],yt=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let C=E.querySelector(".po-tab-button-label");C&&C?.textContent?.trim().toLowerCase()===a&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(G(J))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-splitter"]],viewQuery:function(r,n){if(r&1&&(w(j,5),w(L,5)),r&2){let l;D(l=A())&&(n.tabs=l.first),D(l=A())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:ui,decls:326,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],["id","boas-pr\xE1ticas"],[1,"language-html"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean,","any"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","ThfSplitterOrientation,","string"],[1,"language-typescript"],["p-label","Enums"],["p-label","ThfSplitterOrientation"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&($(ci),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),y(4),t(),i(5,"po-tab",4),y(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfSplitterModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfSplitterComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"O componente "),i(19,"code"),e(20,"thf-splitter"),t(),e(21,` \xE9 respons\xE1vel por dividir visualmente a tela em duas se\xE7\xF5es, com suporte a
redimensionamento entre elas. \xC9 ideal para estruturar interfaces com pain\xE9is laterais e conte\xFAdos principais de forma
flex\xEDvel.`),t(),i(22,"p"),e(23,"O redimensionamento \xE9 realizado por meio de um "),i(24,"em"),e(25,"trigger"),t(),e(26,` interativo, que pode ser manipulado com o mouse ou pelo
teclado, utilizando as teclas `),i(27,"code"),e(28,"\u2190"),t(),e(29," e "),i(30,"code"),e(31,"\u2192"),t(),e(32," na orienta\xE7\xE3o "),i(33,"code"),e(34,"horizontal"),t(),e(35,", e "),i(36,"code"),e(37,"\u2191"),t(),e(38," e "),i(39,"code"),e(40,"\u2193"),t(),e(41," na orienta\xE7\xE3o "),i(42,"code"),e(43,"vertical"),t(),e(44,". O "),i(45,"em"),e(46,"trigger"),t(),e(47," recebe foco ao navegar com "),i(48,"code"),e(49,"TAB"),t(),e(50,"."),t(),i(51,"p"),e(52,"Cada "),i(53,"code"),e(54,"pane"),t(),e(55," respeita limites de largura entre "),i(56,"strong"),e(57,"30% e 70%"),t(),e(58,". O "),i(59,"em"),e(60,"trigger"),t(),e(61,` ser\xE1 automaticamente bloqueado ao tentar
ultrapassar esses limites.`),t(),i(62,"h4",11),e(63,"Boas pr\xE1ticas"),t(),i(64,"ul")(65,"li"),e(66,"Evite usar o "),i(67,"code"),e(68,"thf-splitter"),t(),e(69," dentro de um modal ou componentes semelhantes que possam comprometer a usabilidade."),t()(),i(70,"pre")(71,"code",12),e(72,`<thf-splitter>
  <thf-splitter-pane [t-size]="'30%'">
    Conte\xFAdo do Painel Esquerdo
  </thf-splitter-pane>
  <thf-splitter-pane>
    Conte\xFAdo do Painel Direito (ocupa espa\xE7o restante)
  </thf-splitter-pane>
</thf-splitter>`),t()()(),i(73,"div",13)(74,"h4",14),e(75,"Seletor"),t(),i(76,"pre",15),e(77,`<thf-splitter
  t-disabled="boolean, any"
  (t-layout-change)="EventEmitter"
  t-orientation="ThfSplitterOrientation, string" >
</thf-splitter>
`),t()()(),i(78,"po-accordion-item",16)(79,"h4",17),e(80,"Propriedades"),t(),i(81,"table",18)(82,"tr",19)(83,"th",20),e(84,"Nome"),t(),i(85,"th",20),e(86,"Tipo"),t(),i(87,"th",20),e(88,"Padr\xE3o"),t(),i(89,"th",20),e(90,"Descri\xE7\xE3o"),t()(),i(91,"tr",21)(92,"td",22)(93,"div",23)(94,"span",24),e(95," t-disabled"),o(96,"br"),t()()(),i(97,"td",25)(98,"code",26),e(99,"boolean, any"),t()(),i(100,"td",27)(101,"p"),e(102,"false"),t()(),i(103,"td",28)(104,"p"),e(105,"Desabilita o redimensionamento entre os panes, ocultando a intera\xE7\xE3o via trigger."),t()()(),i(106,"tr",21)(107,"td",22)(108,"div",29)(109,"span",30),e(110," (t-layout-change)"),o(111,"br"),t()()(),i(112,"td",25)(113,"code",31),e(114,"EventEmitter"),t()(),i(115,"td",27),e(116,"-"),t(),i(117,"td",28)(118,"p"),e(119,"Evento emitido sempre que houver altera\xE7\xE3o de layout provocada por redimensionamento. Quando "),i(120,"code"),e(121,"t-disabled"),t(),e(122,` estiver
ativado, este evento n\xE3o ser\xE1 disparado.`),t(),i(123,"pre")(124,"code",12),e(125,'<thf-splitter (t-layout-change)="onLayoutChange($event)">'),t()()()(),i(126,"tr",21)(127,"td",22)(128,"div",23)(129,"span",24),e(130," t-orientation"),o(131,"br"),t()()(),i(132,"td",25)(133,"code",32),e(134,"ThfSplitterOrientation, string"),t()(),i(135,"td",27)(136,"p"),e(137,"'horizontal'"),t()(),i(138,"td",28)(139,"p"),e(140,`Define a orienta\xE7\xE3o dos pain\xE9is do splitter.
Valores aceitos: `),i(141,"code"),e(142,"'horizontal'"),t(),e(143," ou "),i(144,"code"),e(145,"'vertical'"),t(),e(146,"."),t(),i(147,"pre")(148,"code",12),e(149,'<thf-splitter t-orientation="vertical"> ...'),t()(),i(150,"p"),e(151,"ou"),t(),i(152,"pre")(153,"code",33),e(154,"orientation = ThfSplitterOrientation.Vertical;"),t()(),i(155,"pre")(156,"code",12),e(157,'<thf-splitter [t-orientation]="orientation"> ...'),t()()()()()()()(),y(158,2),t(),i(159,"po-tab",34),y(160,3),i(161,"po-container",5)(162,"po-accordion",6)(163,"po-accordion-item",35)(164,"h4",9)(165,"code"),e(166,"ThfSplitterOrientation"),t()(),i(167,"h4",17),e(168,"Propriedades"),t(),i(169,"table",18)(170,"tr",19)(171,"th",20),e(172,"Nome"),t(),i(173,"th",20),e(174,"Descri\xE7\xE3o"),t()(),i(175,"tr",21)(176,"td",22)(177,"div",23)(178,"span",24),e(179," Horizontal"),o(180,"br"),t()()(),i(181,"td",28)(182,"p"),e(183,"Divide o espa\xE7o na "),i(184,"strong"),e(185,"horizontal"),t(),e(186," (esquerda/direita)"),t()()(),i(187,"tr",21)(188,"td",22)(189,"div",23)(190,"span",24),e(191," Vertical"),o(192,"br"),t()()(),i(193,"td",28)(194,"p"),e(195,"Divide o espa\xE7o na "),i(196,"strong"),e(197,"vertical"),t(),e(198," (cima/baixo)"),t()()()()()()(),y(199,4),t(),i(200,"po-tab",36)(201,"po-container",5),y(202,5),i(203,"h3",37),e(204,"Tokens customiz\xE1veis"),t(),i(205,"p"),e(206,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(207,"blockquote")(208,"p"),e(209,"Para maiores informa\xE7\xF5es, acesse o guia "),i(210,"a",38),e(211,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(212,"."),t()(),i(213,"table")(214,"thead")(215,"tr")(216,"th"),e(217,"Propriedade"),t(),i(218,"th"),e(219,"Descri\xE7\xE3o"),t(),i(220,"th"),e(221,"Valor Padr\xE3o"),t()()(),i(222,"tbody")(223,"tr")(224,"td")(225,"strong"),e(226,"Splitter Track"),t()(),o(227,"td")(228,"td"),t(),i(229,"tr")(230,"td")(231,"code"),e(232,"--background-track"),t()(),i(233,"td"),e(234,"Cor de background do Track apresentado no Splitter"),t(),i(235,"td")(236,"code"),e(237,"var(--color-neutral-light-10)"),t()()(),i(238,"tr"),o(239,"td")(240,"td")(241,"td"),t(),i(242,"tr")(243,"td")(244,"strong"),e(245,"Splitter Trigger"),t()(),o(246,"td")(247,"td"),t(),i(248,"tr")(249,"td")(250,"code"),e(251,"--box-shadow"),t()(),i(252,"td"),e(253,"Sombra aplicado no bot\xE3o do trigger"),t(),i(254,"td")(255,"code"),e(256,"var(--shadow-sm)"),t()()(),i(257,"tr")(258,"td")(259,"code"),e(260,"--background-color"),t()(),i(261,"td"),e(262,"Cor de background"),t(),i(263,"td")(264,"code"),e(265,"var(--color-neutral-light-00)"),t()()(),i(266,"tr")(267,"td")(268,"code"),e(269,"--color"),t()(),i(270,"td"),e(271,"Cor do \xEDcone"),t(),i(272,"td")(273,"code"),e(274,"var(--color-action-default)"),t()()(),i(275,"tr")(276,"td")(277,"strong"),e(278,"Hover"),t()(),o(279,"td")(280,"td"),t(),i(281,"tr")(282,"td")(283,"code"),e(284,"--background-color-hover"),t()(),i(285,"td"),e(286,"Cor de background no estado hover"),t(),i(287,"td")(288,"code"),e(289,"var(--color-brand-01-lighter)"),t()()(),i(290,"tr")(291,"td")(292,"code"),e(293,"--color-hover"),t()(),i(294,"td"),e(295,"Cor do \xEDcone no estado hover"),t(),i(296,"td")(297,"code"),e(298,"var(--color-brand-01-darkest)"),t()()(),i(299,"tr")(300,"td")(301,"strong"),e(302,"Pressed"),t()(),o(303,"td")(304,"td"),t(),i(305,"tr")(306,"td")(307,"code"),e(308,"--background-color-pressed"),t()(),i(309,"td"),e(310,"Cor de background quando pressionada"),t(),i(311,"td")(312,"code"),e(313,"var(--color-brand-01-ligh)"),t()()(),i(314,"tr")(315,"td")(316,"code"),e(317,"--color-pressed"),t()(),i(318,"td"),e(319,"Cor de \xEDcone quando pressionado"),t(),i(320,"td")(321,"code"),e(322,"var(--color-brand-01-darkest)"),t()()()()()(),y(323,6),t(),i(324,"po-tab",39),y(325,7),t()()())},dependencies:[L,U,v,Y,j],encapsulation:2})}}return d})();var Ct=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275mod=de({type:d})}static{this.\u0275inj=le({imports:[ye,ke]})}}return d})();var Ie=[{id:11234,initials:"BR",country:"Brazil",value:1e3,date:"2018-10-09",returnDate:"2018-11-01",class:"Economic",onBoardService:!1,destination:"Rio de Janeiro",airline:"Azul",status:"available",region:"Latin America"},{id:22467,initials:"FR",country:"France",value:5e3,date:"2019-12-13",returnDate:"2019-12-31",class:"Economic",onBoardService:!1,destination:"Paris",airline:"British Airways",status:"closed",region:"Alps"},{id:40670,initials:"SN",country:"Senegal",value:3200,date:"2017-11-22",returnDate:"2018-12-01",class:"Economic",onBoardService:!1,destination:"Dakar",airline:"Iberia",status:"closed",region:"Western Africa"},{id:34679,initials:"PT",country:"Portugal",value:5500,date:"2017-10-10",returnDate:"2018-10-20",class:"Economic",onBoardService:!1,destination:"Lisbon",airline:"Air Europa",status:"closed",region:"Mediterranean"},{id:48999,initials:"RU",country:"Russia",value:6700,date:"2019-01-17",returnDate:"2019-02-20",class:"First Class",onBoardService:!0,destination:"Moscow",airline:"Lufthansa",status:"reserved",region:"Caucasus"},{id:48998,initials:"US",country:"United States",value:2700.49,date:"2018-10-17",returnDate:"2018-10-29",class:"Economic",onBoardService:!1,destination:"Los Angeles",airline:"American Airlines",status:"reserved",region:"North America"},{id:54563,initials:"CL",country:"Chile",value:2e3,date:"2018-10-20",returnDate:"2018-11-01",destination:"Cusco",class:"Economic",onBoardService:!1,airline:"LATAM",status:"available",region:"Latin America"},{id:64568,initials:"MX",country:"Mexico",value:2100,date:"2018-03-10",returnDate:"2018-05-09",destination:"Mexico City",class:"Economic",onBoardService:!1,airline:"Aero M\xE9xico",status:"available",region:"Latin America"},{id:75456,initials:"IE",country:"Ireland",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Cork",class:"First Class",onBoardService:!0,airline:"Lufthansa",status:"reserved",region:"British Isle"},{id:23445,initials:"ZA",country:"South Africa",value:1900,date:"2018-12-10",returnDate:"2018-12-25",destination:"Cape Town",class:"Economic",onBoardService:!1,airline:"South African Airways",status:"available",region:"Southern Africa"},{id:19238,initials:"AU",country:"Australia",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Sydney",class:"First Class",onBoardService:!0,airline:"Jetstar Airways",status:"reserved",region:"Australasia"},{id:85456,initials:"JP",country:"Japan",value:5900,date:"2018-10-25",returnDate:"2018-11-10",destination:"Tokio",class:"Executive",onBoardService:!0,airline:"Japan Airlines",status:"available",region:"East Asia"},{id:94565,initials:"CN",country:"China",value:2900,date:"2018-10-10",returnDate:"2018-10-25",destination:"Beijing",class:"Economic",onBoardService:!1,airline:"Malaysia Airlines",status:"available",region:"East Asia"},{id:32330,initials:"UK",country:"England",value:2090.5,date:"2018-10-07",returnDate:"2018-11-15",destination:"London",class:"Executive",onBoardService:!0,airline:"British Airways",status:"available",region:"British Isle"},{id:14560,initials:"CA",country:"Canada",value:2090.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Quebec",class:"Economic",onBoardService:!1,airline:"American Airlines",status:"available",region:"North America"},{id:93800,initials:"IS",country:"Iceland",value:6300,date:"2018-10-12",returnDate:"2018-10-27",destination:"Reykjav\xEDk",class:"Economic",onBoardService:!1,airline:"Star Alliance",status:"available",region:"Nordics"},{id:34239,initials:"DE",country:"Germany",value:3070.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Berlin",class:"Executive",onBoardService:!0,airline:"LATAM",status:"available",region:"Danube"},{id:45611,initials:"AR",country:"Argentina",value:3500.5,date:"2018-12-07",returnDate:"2018-12-29",destination:"Ushuaia",class:"Economic",onBoardService:!1,airline:"LATAM",status:"reserved",region:"Latin America"}],Pt=`export const DATA = ${JSON.stringify(Ie,null,2)};`;function xi(d,q){}function Si(d,q){d&1&&F(0,xi,0,0,"ng-template")}function bi(d,q){if(d&1&&(i(0,"po-accordion-item",7),F(1,Si,1,0,null,8),t()),d&2){let a=u();m(),s("ngTemplateOutlet",a.dynamicTemplate)}}function hi(d,q){if(d&1&&o(0,"po-code-editor",9),d&2){let a=u();s("p-readonly",!0)("ngModel",a.htmlCode)("p-theme",a.themeActive===1?"vs-dark":"vs")}}function fi(d,q){if(d&1&&o(0,"po-code-editor",10),d&2){let a=u();s("p-readonly",!0)("p-theme",a.themeActive===1?"vs-dark":"vs")("ngModel",a.tsCode)}}function vi(d,q){if(d&1&&o(0,"po-code-editor",10),d&2){let a=u();s("p-readonly",!0)("p-theme",a.themeActive===1?"vs-dark":"vs")("ngModel",a.serviceCode)}}function gi(d,q){if(d&1&&o(0,"po-code-editor",10),d&2){let a=u();s("p-readonly",!0)("p-theme",a.themeActive===1?"vs-dark":"vs")("ngModel",a.othersCode==null?null:a.othersCode.body)}}var T=(()=>{class d{constructor(a){this.sharedService=a,this.htmlCode="",this.marginTopClass="po-mt-3",this.properties=!1,this.serviceCode="",this.showOthersCodeButton=!1,this.showServiceButton=!1,this.tsCode="",this.buttons=[],this.selectedCode="html"}ngOnInit(){this.buttons=[{label:"HTML",selected:!0,action:()=>this.selectedCode="html"},{label:"TS",action:()=>this.selectedCode="ts"}],this.showServiceButton&&this.buttons.push({label:"Service",action:()=>this.selectedCode="service"}),this.showOthersCodeButton&&this.buttons.push({label:this.othersCode.label,action:()=>this.selectedCode="othersCode"}),this.sharedService.getThemeActive().subscribe(a=>{this.themeActive=a.type||0})}static{this.\u0275fac=function(r){return new(r||d)(G(xt))}}static{this.\u0275cmp=x({type:d,selectors:[["app-code-accordion-doc"]],inputs:{dynamicTemplate:"dynamicTemplate",htmlCode:"htmlCode",marginTopClass:"marginTopClass",othersCode:"othersCode",properties:"properties",serviceCode:"serviceCode",showOthersCodeButton:"showOthersCodeButton",showServiceButton:"showServiceButton",tsCode:"tsCode"},standalone:!1,decls:10,vars:8,consts:[[3,"ngClass"],["p-label","Propriedades",4,"ngIf"],["p-label","Fontes"],[1,"po-pt-1"],["p-toggle","single","ngDefaultControl","",3,"ngModelChange","p-buttons","ngModel"],["class","po-pt-2","p-height","350","p-language","html","ngDefaultControl","",3,"p-readonly","ngModel","p-theme",4,"ngIf"],["class","po-pt-2","p-height","350","p-language","typescript","ngDefaultControl","",3,"p-readonly","p-theme","ngModel",4,"ngIf"],["p-label","Propriedades"],[4,"ngTemplateOutlet"],["p-height","350","p-language","html","ngDefaultControl","",1,"po-pt-2",3,"p-readonly","ngModel","p-theme"],["p-height","350","p-language","typescript","ngDefaultControl","",1,"po-pt-2",3,"p-readonly","p-theme","ngModel"]],template:function(r,n){r&1&&(i(0,"div",0)(1,"po-accordion"),F(2,bi,2,1,"po-accordion-item",1),i(3,"po-accordion-item",2)(4,"div",3)(5,"po-button-group",4),h("ngModelChange",function(E){return b(n.selectedCode,E)||(n.selectedCode=E),E}),t(),F(6,hi,1,3,"po-code-editor",5)(7,fi,1,3,"po-code-editor",6)(8,vi,1,3,"po-code-editor",6)(9,gi,1,3,"po-code-editor",6),t()()()()),r&2&&(s("ngClass",n.marginTopClass),m(2),s("ngIf",n.properties),m(3),s("p-buttons",n.buttons),S("ngModel",n.selectedCode),m(),s("ngIf",n.selectedCode==="html"),m(),s("ngIf",n.selectedCode==="ts"),m(),s("ngIf",n.selectedCode==="service"),m(),s("ngIf",n.selectedCode==="othersCode"))},dependencies:[Je,se,Ze,et,Q,Z,L,U,mt,at],encapsulation:2})}}return d})();var Tt=(()=>{class d{constructor(){this.htmlCode=`<thf-grid
    [t-actions-filter]="true"
    [t-columns]="columnsTotalizador"
    [t-resizable]="true"
    [t-groupable]="true"
    [t-draggable]="true"
    [t-items]="itemsTotalizador"
    [t-selectable]="true"
    [t-show-densification-configuration]="true"
    [t-aggregates]="aggregatesDescriptor"
    [t-show-footer-aggregates]="true"
    [t-height]="450"
  />
  `,this.tsCode=`import { Component } from '@angular/core';
import { ThfAggregateDescriptor, ThfGridColumn } from '@totvs/thf-components';
import { DATA, DATA_STRING } from './data';
  
@Component({
  selector: 'app-thf-grid-aggregates-doc',
  templateUrl: './thf-grid-aggregates-doc.component.html',
  styleUrl: './thf-grid-aggregates-doc.component.css',
})
export class ThfGridAggregateDocComponent {
  columnsTotalizador: Array<ThfGridColumn> = [
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 'available', color: 'color-11', label: 'Available' },
        { value: 'reserved', color: 'color-08', label: 'Reserved' },
        { value: 'closed', color: 'color-07', label: 'Closed' },
      ],
    },
    { property: 'region', label: 'Region' },
    { property: 'country', label: 'Country' },
    { property: 'destination', label: 'Destination' },
    { property: 'value', type: 'currency', label: 'Value', format: 'BRL' },
  ];

  aggregatesDescriptor: Array<ThfAggregateDescriptor> = [
    { field: 'value', aggregate: 'sum', label: 'Totalx' },
    { field: 'country', aggregate: 'count', label: 'Contagem' },
  ];
  itemsTotalizador = DATA;
}
  `,this.tsOthersCode={label:"Data",body:Pt},this.columnsTotalizador=[{property:"status",label:"Status",type:"label",labels:[{value:"available",color:"color-11",label:"Available"},{value:"reserved",color:"color-08",label:"Reserved"},{value:"closed",color:"color-07",label:"Closed"}]},{property:"region",label:"Region"},{property:"country",label:"Country"},{property:"destination",label:"Destination"},{property:"value",type:"currency",label:"Value",format:"BRL"}],this.aggregatesDescriptor=[{field:"value",aggregate:"sum",label:"Total"},{field:"country",aggregate:"count",label:"Contagem"}],this.itemsTotalizador=Ie}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-aggregates-doc"]],standalone:!1,decls:6,vars:15,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-actions-filter","t-columns","t-resizable","t-groupable","t-draggable","t-items","t-selectable","t-show-densification-configuration","t-aggregates","t-show-footer-aggregates","t-height"],[3,"htmlCode","tsCode","othersCode","showOthersCodeButton"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Totalizador por Colunas"),t(),o(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-actions-filter",!0)("t-columns",n.columnsTotalizador)("t-resizable",!0)("t-groupable",!0)("t-draggable",!0)("t-items",n.itemsTotalizador)("t-selectable",!0)("t-show-densification-configuration",!0)("t-aggregates",n.aggregatesDescriptor)("t-show-footer-aggregates",!0)("t-height",450),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)("othersCode",n.tsOthersCode)("showOthersCodeButton",!0))},dependencies:[v,P,M,T],encapsulation:2})}}return d})();var wt=(()=>{class d{constructor(){this.htmlCode=`<thf-grid
  t-service-api="https://po-sample-api.onrender.com/v1/heroes"
  [t-columns]="column"
  [t-height]="400"
/>
  `,this.tsCode=`import { Component } from '@angular/core';
import { ThfGridColumn } from '@totvs/thf-components';
  
@Component({
  selector: 'app-thf-grid-basic-doc',
  templateUrl: './thf-grid-basic-doc.component.html',
  styleUrl: './thf-grid-basic-doc.component.css',
})
export class ThfGridBasicDocComponent {
  column: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id', visible: false },
    { property: 'label', label: 'Label', visible: false },
    { property: 'value', label: 'Code' },
    { property: 'name', label: 'Nome' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail', width: 100 },
  ];
}
  `,this.column=[{property:"id",label:"Id",visible:!1},{property:"label",label:"Label",visible:!1},{property:"value",label:"Code"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail",width:100}]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-basic-doc"]],standalone:!1,decls:6,vars:4,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/heroes",3,"t-columns","t-height"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Service"),t(),o(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-columns",n.column)("t-height",400),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,M,T],encapsulation:2})}}return d})();var _e=(()=>{class d{constructor(a){this.httpClient=a}deleteItem(a,r,n){return this.httpClient.delete("https://po-sample-api.onrender.com/v1/people"+"/"+n)}static{this.\u0275fac=function(r){return new(r||d)(ze(Ye))}}static{this.\u0275prov=je({token:d,factory:d.\u0275fac,providedIn:"root"})}}return d})();var Dt=(()=>{class d{constructor(a){this.serviceDeleteApi=a,this.htmlCode=`<thf-grid
    t-service-api="https://po-sample-api.onrender.com/v1/people"
    [t-action-delete]="true"
    [t-columns]="column"
    [t-height]="400"
    [t-literals]="literals"
    [t-selectable]="true"
    [t-service-delete-api]="serviceDeleteApi"
    (t-selected)="selectedItem($event)"
  />
  `,this.tsCode=`import { Component } from '@angular/core';
import { ThfGridColumn, ThfGridLiterals } from '@totvs/thf-components';
import { ThfDeleteService } from './thf-grid-delete-service-doc.service';
  
@Component({
  selector: 'app-thf-grid-delete-service-doc',
  templateUrl: './thf-grid-delete-service-doc.component.html',
  styleUrl: './thf-grid-delete-service-doc.component.css',
  providers: [ThfDeleteService],
})
export class ThfGridDeleteServiceDocComponent {
  literals!: ThfGridLiterals;
  column: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id', visible: false },
    { property: 'label', label: 'Label', visible: false },
    { property: 'name', label: 'Nome' },
    { property: 'cityName', label: 'Cidade' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail', width: 100 },
  ];

  constructor(protected serviceDeleteApi: ThfDeleteService) {}

  selectedItem(event: any) {
    this.literals = {
      bodyDelete: \`Tem certeza que deseja excluir \${event.name}?\`,
    };
  }
}
  `,this.serviceCode=`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ThfGridDeleteService } from '@totvs/thf-components';

import { Observable } from 'rxjs';
  
@Injectable({
  providedIn: 'root',
})
export class ThfDeleteService implements ThfGridDeleteService {
  constructor(private httpClient: HttpClient) {}

  deleteItem(
    selectedRow: any,
    filterParams?: any,
    keyValue?: any
  ): Observable<any> {
    const urlDelete = 'https://po-sample-api.onrender.com/v1/people';
    return this.httpClient.delete(urlDelete + '/' + keyValue);
  }
}
  `,this.column=[{property:"id",label:"Id",visible:!1},{property:"label",label:"Label",visible:!1},{property:"name",label:"Nome"},{property:"cityName",label:"Cidade"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail",width:100}]}selectedItem(a){this.literals={bodyDelete:"Tem certeza que deseja excluir "+a.name+"?"}}static{this.\u0275fac=function(r){return new(r||d)(G(_e))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-delete-service-doc"]],standalone:!1,features:[Be([_e])],decls:6,vars:10,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/people",3,"t-selected","t-action-delete","t-columns","t-height","t-literals","t-selectable","t-service-delete-api"],[3,"htmlCode","tsCode","serviceCode","showServiceButton"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Grid Dele\xE7\xE3o com Servi\xE7o Customizado"),t(),o(3,"po-divider",1),i(4,"thf-grid",2),g("t-selected",function(E){return n.selectedItem(E)}),t(),o(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-action-delete",!0)("t-columns",n.column)("t-height",400)("t-literals",n.literals)("t-selectable",!0)("t-service-delete-api",n.serviceDeleteApi),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)("serviceCode",n.serviceCode)("showServiceButton",!0))},dependencies:[v,P,M,T],encapsulation:2})}}return d})();var wi=()=>[];function Di(d,q){if(d&1){let a=I();i(0,"div",7)(1,"po-container",8)(2,"po-checkbox-group",9),h("ngModelChange",function(n){p(a);let l=u();return b(l.columnsName,n)||(l.columnsName=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.updateColumns())}),t()(),i(3,"po-container",8)(4,"po-checkbox-group",10),h("ngModelChange",function(n){p(a);let l=u();return b(l.selection,n)||(l.selection=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.changeSelectionOptions())}),t()(),i(5,"po-container",8)(6,"po-checkbox-group",11),h("ngModelChange",function(n){p(a);let l=u();return b(l.otherProperties,n)||(l.otherProperties=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.changeOtherProperties())}),t()(),i(7,"po-container",8)(8,"po-radio-group",12),h("ngModelChange",function(n){p(a);let l=u();return b(l.spacing,n)||(l.spacing=n),c(n)}),t()(),i(9,"po-container",8)(10,"po-radio-group",13),h("ngModelChange",function(n){p(a);let l=u();return b(l.componentsSize,n)||(l.componentsSize=n),c(n)}),t(),i(11,"po-radio-group",14),h("ngModelChange",function(n){p(a);let l=u();return b(l.filterinputModeValue,n)||(l.filterinputModeValue=n),c(n)}),t()(),i(12,"po-container",15)(13,"po-number",16),h("ngModelChange",function(n){p(a);let l=u();return b(l.minResizableValue,n)||(l.minResizableValue=n),c(n)}),t(),i(14,"po-number",17),h("ngModelChange",function(n){p(a);let l=u();return b(l.maxResizableValue,n)||(l.maxResizableValue=n),c(n)}),t()(),i(15,"po-container",15)(16,"po-number",18),h("ngModelChange",function(n){p(a);let l=u();return b(l.height,n)||(l.height=n),c(n)}),t(),i(17,"po-number",19),h("ngModelChange",function(n){p(a);let l=u();return b(l.maxHeight,n)||(l.maxHeight=n),c(n)}),t(),i(18,"po-number",20),h("ngModelChange",function(n){p(a);let l=u();return b(l.minHeight,n)||(l.minHeight=n),c(n)}),t()(),i(19,"po-container",15)(20,"po-textarea",21),h("ngModelChange",function(n){p(a);let l=u();return b(l.literals,n)||(l.literals=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeLiterals())}),t()(),i(21,"po-container",15)(22,"po-textarea",22),h("ngModelChange",function(n){p(a);let l=u();return b(l.sort,n)||(l.sort=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeSort())}),t()(),i(23,"po-container",23)(24,"div",24)(25,"po-checkbox-group",25),h("ngModelChange",function(n){p(a);let l=u();return b(l.pagination,n)||(l.pagination=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.changePagination())}),t(),i(26,"po-textarea",26),h("ngModelChange",function(n){p(a);let l=u();return b(l.optionsPage,n)||(l.optionsPage=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeOptionsPage())}),t()()()(),i(27,"div",27)(28,"po-button",28),g("p-click",function(){p(a);let n=u();return c(n.restore())}),t()()}if(d&2){let a=u();m(2),S("ngModel",a.columnsName),s("p-options",a.columnsOptions),m(2),s("p-options",a.selectionOptions),S("ngModel",a.selection),m(2),s("p-columns",4)("p-options",a.otherPropertiesOptions),S("ngModel",a.otherProperties),m(2),s("p-columns",4)("p-options",a.spacingOptions),S("ngModel",a.spacing),m(2),S("ngModel",a.componentsSize),s("p-options",a.componentsSizeOptions),m(),S("ngModel",a.filterinputModeValue),s("p-options",a.filterModeOptions),m(2),S("ngModel",a.minResizableValue),s("disabled",!a.resizable),m(),S("ngModel",a.maxResizableValue),s("disabled",!a.resizable),m(2),S("ngModel",a.height),m(),S("ngModel",a.maxHeight),m(),S("ngModel",a.minHeight),m(2),S("ngModel",a.literals),m(2),S("ngModel",a.sort),m(3),s("p-options",a.paginationOptions),S("ngModel",a.pagination),m(),S("ngModel",a.optionsPage),s("disabled",!a.pagination.includes("pageable"))}}var At=(()=>{class d{constructor(a){this.poNotification=a,this.htmlCode=`<po-container>
  <span class="po-font-text-large-bold">Labs</span>
  <po-divider class="po-divider-mb-0"></po-divider>
  <thf-grid
    [t-action-delete]="selection.includes('actionDelete')"
    [t-action-edit]="selection.includes('actionEdit')"
    [t-action-excel]="selection.includes('actionExcel')"
    [t-action-pdf]="selection.includes('actionPdf')"
    [t-actions]="actions || []"
    [t-actions-filter]="otherProperties.includes('actionsFilter')"
    [t-actions-right]="otherProperties.includes('actionRight')"
    [t-columns]="columns"
    [t-components-size]="componentsSize"
    [t-draggable]="otherProperties.includes('draggable')"
    [t-filter-input-mode]="filterinputModeValue"
    [t-groupable]="otherProperties.includes('groupable')"
    [t-height]="height"
    [t-max-height]="maxHeight"
    [t-min-height]="minHeight"
    [t-hide-columns-manager]="otherProperties.includes('hideColumnsManager')"
    [t-hide-action-fixed-columns]="
      otherProperties.includes('hideActionFixedColumns')
    "
    [t-hide-batch-actions]="selection.includes('hideBatchActions')"
    [t-hide-select-all]="selection.includes('hideSelectAll')"
    [t-hide-table-search]="otherProperties.includes('hideTableSearch')"
    [t-literals]="literalsCustom"
    [t-loading]="otherProperties.includes('loading')"
    [t-max-resizable-width]="maxResizableValue"
    [t-min-resizable-width]="minResizableValue"
    [t-options-paging]="customOptionsPage"
    [t-pageable]="pagination.includes('pageable')"
    t-param-delete-api="value"
    [t-resizable]="resizable"
    [t-selectable]="selection.includes('selectable')"
    [t-selectable-entire-line]="selection.includes('selectableEntireLine')"
    [t-show-densification-configuration]="
      otherProperties.includes('showDensificationConfiguration')
    "
    [t-show-draggable-icon]="otherProperties.includes('showDraggableIcon')"
    [t-show-more-disabled]="pagination.includes('showMoreDisabled')"
    [t-show-more-visible]="pagination.includes('showMoreVisible')"
    [t-single-select]="selection.includes('singleSelect')"
    [t-sort]="customSort"
    [t-sortable]="otherProperties.includes('sortable')"
    [t-spacing]="spacing"
    [t-striped]="otherProperties.includes('striped')"
    [t-text-wrap]="otherProperties.includes('textWrap')"
    [t-virtual-scroll]="otherProperties.includes('virtualScroll')"
    [t-items]="items"
    (t-change-fixed-columns)="changeEvent('t-change-fixed-columns')"
    (t-change-order-column)="changeEvent('t-change-order-column')"
    (t-change-page-size)="changeEvent('t-change-page-size')"
    (t-change-sort-column)="changeEvent('t-change-sort-column')"
    (t-change-visible-columns)="changeEvent('t-change-visible-columns')"
    (t-change-options-column-manager)="
      changeEvent('t-change-options-column-manager')
    "
    (t-changed-density)="changeEvent('t-changed-density')"
    (t-delete-item)="changeEvent('t-delete-item')"
    (t-delete-items)="changeEvent('t-delete-items')"
    (t-delete-item-error)="changeEvent('t-delete-item-error')"
    (t-filter-item-error)="changeEvent('t-filter-item-error')"
    (t-restore-column-manager)="changeEvent('t-restore-column-manager')"
    (t-selected)="changeEvent('t-selected')"
    (t-all-selected)="changeEvent('t-all-selected')"
    (t-unselected)="changeEvent('t-unselected')"
    (t-all-unselected)="changeEvent('t-all-unselected')"
    (t-change-group)="changeEvent('t-change-group')"
    (t-rows-selected)="changeEvent('t-rows-selected')"
  />

  <po-container class="po-mt-2" style="display: flex">
    <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
  </po-container>

  <div class="po-row po-mt-2 po-mb-2" style="display: block">
      <po-container class="po-mb-2" style="display: flex">
        <po-checkbox-group
          name="columnsName"
          [(ngModel)]="columnsName"
          p-columns="4"
          p-label="Columns"
          [p-options]="columnsOptions"
          (p-change)="updateColumns()"
        >
        </po-checkbox-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-checkbox-group
          name="selection"
          p-label="Selection"
          p-columns="4"
          [p-options]="selectionOptions"
          [(ngModel)]="selection"
          (p-change)="changeSelectionOptions()"
        ></po-checkbox-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-checkbox-group
          name="otherProperties"
          p-label="Other Properties"
          [p-columns]="4"
          [p-options]="otherPropertiesOptions"
          [(ngModel)]="otherProperties"
          (p-change)="changeOtherProperties()"
        >
        </po-checkbox-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-radio-group
          name="spacing"
          p-help="Para aplicar o tamanho Extra Small, defina o n\xEDvel de acessibilidade como AA no navbar."
          p-label="Spacing"
          [p-columns]="4"
          [p-options]="spacingOptions"
          [(ngModel)]="spacing"
        ></po-radio-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-radio-group
          class="po-lg-6"
          name="componentsSize"
          [(ngModel)]="componentsSize"
          p-label="Components size"
          p-help="Para aplicar o tamanho small, defina o n\xEDvel de acessibilidade como AA no navbar."
          [p-options]="componentsSizeOptions"
        >
        </po-radio-group>

        <po-radio-group
          class="po-lg-6"
          name="filterinputModeValue"
          p-label="Filter Input Mode"
          [(ngModel)]="filterinputModeValue"
          [p-options]="filterModeOptions"
        ></po-radio-group>
      </po-container>

      <po-container class="po-mb-2 po-lg-6" style="display: flex">
        <po-number
          class="po-md-6"
          p-label="Min Resizable Width"
          [(ngModel)]="minResizableValue"
          [disabled]="!resizable"
        ></po-number>
        <po-number
          class="po-md-6"
          p-label="Max Resizable Width"
          [(ngModel)]="maxResizableValue"
          [disabled]="!resizable"
        ></po-number>
      </po-container>

      <po-container class="po-mb-2 po-lg-6" style="display: flex">
        <po-number
          class="po-md-6 po-lg-4"
          p-label="Height"
          [(ngModel)]="height"
        ></po-number>
        <po-number
          class="po-md-6 po-lg-4"
          p-label="Max Height"
          [(ngModel)]="maxHeight"
        ></po-number>
        <po-number
          class="po-md-6 po-lg-4"
          p-label="Min Height"
          [(ngModel)]="minHeight"
        ></po-number>
      </po-container>

      <po-container class="po-mb-2 po-lg-6" style="display: flex">
        <po-textarea
          name="literals"
          p-label="Literals"
          p-help='{"noData": "Sem dados a serem exibidos"}'
          [(ngModel)]="literals"
          (p-change-model)="changeLiterals()"
        ></po-textarea>
      </po-container>

      <po-container class="po-mb-2 po-lg-6" style="display: flex">
        <po-textarea
          name="sort"
          p-label="Sort"
          p-help='[{ "field":"name", "dir":"asc" }]'
          [(ngModel)]="sort"
          (p-change-model)="changeSort()"
        ></po-textarea>
      </po-container>

      <po-container class="po-mb-2 po-lg-12" style="display: flex">
        <div style="display: flex; flex-wrap: wrap">
          <po-checkbox-group
            class="po-lg-6"
            name="pagination"
            p-label="Pagination"
            [p-options]="paginationOptions"
            [(ngModel)]="pagination"
            (p-change)="changePagination()"
          ></po-checkbox-group>

          <po-textarea
            class="po-lg-6"
            name="optionsPage"
            p-label="Options Page"
            p-help='[{ "value":"25", "label":"25" }, { "value":"50", "label":"50" }]'
            [(ngModel)]="optionsPage"
            (p-change-model)="changeOptionsPage()"
            [disabled]="!pagination.includes('pageable')"
          ></po-textarea>
        </div>
      </po-container>
    </div>

    <div class="po-row">
      <po-button
        class="po-lg-3 po-md-6"
        p-label="Restore"
        (p-click)="restore()"
      >
      </po-button>
    </div>
</po-container>
`,this.tsCode=`import { Component } from '@angular/core';
import {
  PoCheckboxGroupOption,
  PoNotificationService,
  PoRadioGroupOption,
} from '@po-ui/ng-components';
import {
  ThfColumnSpacing,
  ThfGridColumn,
  ThfGridColumnSort,
  ThfGridLiterals,
  ThfTableAction,
} from '@totvs/thf-components';
import { ThfGridOptionPaging } from '@totvs/thf-components/lib/components/thf-grid-lookup/thf-grid/interfaces/thf-grid-option-paging.interface';

@Component({
  selector: 'app-thf-grid-labs-doc',
  templateUrl: './thf-grid-labs-doc.component.html',
  styleUrls: ['./thf-grid-labs-doc.component.css'],
})
export class ThfGridLabsDocComponent {
  actions: Array<ThfTableAction> | undefined = undefined;
  columnsName: Array<string> = ['id', 'name', 'birthdate', 'email'];
  componentsSize: string = 'medium';
  customOptionsPage: Array<ThfGridOptionPaging> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 50, label: '50' },
    { value: 100, label: '100' },
    { value: 1000, label: '1000' }
  ];
  customSort: Array<ThfGridColumnSort> = [
    {
      field: '',
      dir: 'asc'
    }
  ];
  event: string = '';
  filterinputModeValue: string = 'basic';
  height = 400;
  minHeight = undefined;
  maxHeight = undefined;
  literals: string = '';
  literalsCustom: ThfGridLiterals = {};
  maxResizableValue: number = 300;
  minResizableValue: number = 10;
  optionsPage: string = \`[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]\`;
  pagination: Array<string> = [];
  properties: Array<string> = [];
  resizable: boolean = false;
  selection: Array<string> = ['selectableEntireLine'];
  sort: string = '[{"field": "", "dir": "asc"}]';
  spacing: ThfColumnSpacing = ThfColumnSpacing.Medium;
  otherProperties: Array<string> = ['actionsFilter', 'draggable', 'groupable', 'sortable', 'striped', 'virtualScroll'];

  customAction: Array<ThfTableAction> = [
    {
      label: '',
      action: (e: any) => {
        this.poNotification.information(\`\${e.id} - \${e.name}\`);
      },
      icon: 'ICON_MENU_OPEN',
      fixed: true
    }
  ];

  componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  selectionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Selectable', value: 'selectable' },
    { label: 'Single', value: 'singleSelect', disabled: true },
    { label: 'Entire Line', value: 'selectableEntireLine', disabled: true },
    { label: 'Hide Select All', value: 'hideSelectAll', disabled: true },
    { label: 'Action Delete', value: 'actionDelete', disabled: true },
    { label: 'Action Edit', value: 'actionEdit', disabled: true },
    { label: 'Action Excel', value: 'actionExcel', disabled: true },
    { label: 'Action PDF', value: 'actionPdf', disabled: true },
    { label: 'Hide Batch Actions', value: 'hideBatchActions', disabled: true }
  ];
  spacingOptions: Array<PoRadioGroupOption> = [
    { label: 'extraSmall', value: ThfColumnSpacing.ExtraSmall },
    { label: 'Small', value: ThfColumnSpacing.Small },
    { label: 'Medium', value: ThfColumnSpacing.Medium },
    { label: 'Large', value: ThfColumnSpacing.Large }
  ];
  filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Basic', value: 'basic' },
    { label: 'Service', value: 'service' }
  ];
  otherPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Actions', value: 'actions' },
    { label: 'Actions Filter', value: 'actionsFilter' },
    { label: 'Action Right', value: 'actionRight' },
    { label: 'Draggable', value: 'draggable' },
    { label: 'Groupable', value: 'groupable' },
    { label: 'Hide Columns Manager', value: 'hideColumnsManager' },
    { label: 'Hide Actions Fixed Columns', value: 'hideActionFixedColumns' },
    { label: 'Hide Table Search', value: 'hideTableSearch' },
    { label: 'Loading', value: 'loading' },
    { label: 'Resizable', value: 'resizable' },
    {
      label: 'Show Densification Configuration',
      value: 'showDensificationConfiguration'
    },
    { label: 'Show Draggable Icon', value: 'showDraggableIcon' },
    { label: 'Sortable', value: 'sortable' },
    { label: 'Striped', value: 'striped' },
    { label: 'Text Wrap', value: 'textWrap', disabled: false },
    { label: 'Virtual Scroll', value: 'virtualScroll' }
  ];
  paginationOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Pageable', value: 'pageable' },
    { label: 'Show More Disabled', value: 'showMoreDisabled', disabled: false },
    { label: 'Show More Visible', value: 'showMoreVisible', disabled: false }
  ];

  items = [
    {
      id: 1,
      name: 'Jo\xE3o Silva',
      birthdate: '1990-05-15',
      lastLogin: '2024-02-14T15:30:00Z',
      active: true,
      email: 'joao.silva@example.com'
    },
    {
      id: 2,
      name: 'Maria Souza',
      birthdate: '1985-10-23',
      lastLogin: '2024-02-13T08:45:00Z',
      active: false,
      email: 'maria.souza@example.com'
    },
    {
      id: 3,
      name: 'Carlos Almeida',
      birthdate: '1998-07-09',
      lastLogin: '2024-02-14T20:15:00Z',
      active: true,
      email: 'carlos.almeida@example.com'
    },
    {
      id: 4,
      name: 'Fernanda Costa',
      birthdate: '1992-03-12',
      lastLogin: '2024-02-12T18:00:00Z',
      active: false,
      email: 'fernanda.costa@example.com'
    },
    {
      id: 5,
      name: 'Ricardo Lima',
      birthdate: '1980-11-30',
      lastLogin: '2024-02-11T07:25:00Z',
      active: true,
      email: 'ricardo.lima@example.com'
    },
    {
      id: 6,
      name: 'Ana Pereira',
      birthdate: '1995-09-18',
      lastLogin: '2024-02-10T14:10:00Z',
      active: true,
      email: 'ana.pereira@example.com'
    },
    {
      id: 7,
      name: 'Pedro Henrique',
      birthdate: '1993-06-25',
      lastLogin: '2024-02-09T12:30:00Z',
      active: false,
      email: 'pedro.henrique@example.com'
    },
    {
      id: 8,
      name: 'Beatriz Ramos',
      birthdate: '1999-04-03',
      lastLogin: '2024-02-08T09:15:00Z',
      active: true,
      email: 'beatriz.ramos@example.com'
    },
    {
      id: 9,
      name: 'Lucas Oliveira',
      birthdate: '1987-07-22',
      lastLogin: '2024-02-07T16:45:00Z',
      active: false,
      email: 'lucas.oliveira@example.com'
    },
    {
      id: 10,
      name: 'Juliana Martins',
      birthdate: '1996-01-05',
      lastLogin: '2024-02-06T11:00:00Z',
      active: true,
      email: 'juliana.martins@example.com'
    },
    {
      id: 11,
      name: 'Eduardo Nunes',
      birthdate: '1982-08-17',
      lastLogin: '2024-02-05T17:20:00Z',
      active: false,
      email: 'eduardo.nunes@example.com'
    },
    {
      id: 12,
      name: 'Camila Ferreira',
      birthdate: '2000-12-29',
      lastLogin: '2024-02-04T13:40:00Z',
      active: true,
      email: 'camila.ferreira@example.com'
    }
  ];

  columns: Array<ThfGridColumn> = [
    { property: 'id', label: 'Number' },
    { property: 'name', label: 'Text' },
    { property: 'birthdate', label: 'Date', type: 'date' },
    {
      property: 'email',
      label: 'Link',
      type: 'link',
      action: this.openEmail.bind(this)
    }
  ];

  readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Number' },
    { value: 'name', label: 'Text' },
    { value: 'birthdate', label: 'Date' },
    { value: 'lastLogin', label: 'DateTime' },
    { value: 'active', label: 'Boolean' },
    { value: 'email', label: 'Link' }
  ];

  private readonly columnsDefinition: any = {
    id: <ThfGridColumn>{ property: 'id', label: 'Number' },
    name: <ThfGridColumn>{ property: 'name', label: 'Text' },
    birthdate: <ThfGridColumn>{
      property: 'birthdate',
      label: 'Date',
      type: 'date'
    },
    lastLogin: <ThfGridColumn>{
      property: 'lastLogin',
      label: 'DateTime',
      type: 'dateTime'
    },
    active: <ThfGridColumn>{ property: 'active', label: 'Boolean' },
    email: <ThfGridColumn>{
      property: 'email',
      label: 'Link',
      type: 'link',
      action: this.openEmail.bind(this)
    }
  };

  constructor(private readonly poNotification: PoNotificationService) {}

  ngAfterViewInit() {
    this.restore();
  }

  changeEvent(eventDescription: any) {
    this.event = eventDescription;
  }

  changeLiterals() {
    try {
      this.literalsCustom = JSON.parse(this.literals);
    } catch {
      this.literalsCustom = {};
    }
  }

  changeOptionsPage() {
    try {
      this.customOptionsPage = JSON.parse(this.optionsPage);
    } catch {
      this.customOptionsPage = [
        { value: 10, label: '10' },
        { value: 20, label: '20' },
        { value: 50, label: '50' },
        { value: 100, label: '100' },
        { value: 1000, label: '1000' }
      ];
    }
  }

  changeOtherProperties() {
    this.actions = this.otherProperties.includes('actions') ? this.customAction : [];

    const isVirtualScrollEnabled = this.otherProperties.includes('virtualScroll');
    const isResizableEnabled = this.otherProperties.includes('resizable');

    this.otherPropertiesOptions = this.otherPropertiesOptions.map(option => {
      if (option.value === 'textWrap') {
        return { ...option, disabled: isVirtualScrollEnabled };
      }
      return option;
    });

    if (isVirtualScrollEnabled && this.otherProperties.includes('textWrap')) {
      this.otherProperties = this.otherProperties.filter(prop => prop !== 'textWrap');
    }

    this.resizable = isResizableEnabled;
  }

  changePagination() {
    const pageable = this.pagination.includes('pageable');

    this.paginationOptions[1].disabled = !pageable;
    this.paginationOptions[2].disabled = !pageable;
    this.paginationOptions = [...this.paginationOptions];
  }

  changeSelectionOptions() {
    const selectable = this.selection.includes('selectable');

    this.selectionOptions[1].disabled = !selectable;
    this.selectionOptions[2].disabled = !selectable;
    this.selectionOptions[3].disabled = !selectable;
    this.selectionOptions[4].disabled = !selectable;
    this.selectionOptions[5].disabled = !selectable;
    this.selectionOptions[6].disabled = !selectable;
    this.selectionOptions[7].disabled = !selectable;
    this.selectionOptions[8].disabled = !selectable;
    this.selectionOptions = [...this.selectionOptions];
  }

  changeSort() {
    try {
      this.customSort = JSON.parse(this.sort);
    } catch {
      this.customSort = [
        {
          field: '',
          dir: 'asc'
        }
      ];
    }
  }

  openEmail(email: string) {
    window.open(\`mailto:\${email}\`, '_blank');
  }

  restore() {
    this.actions = undefined;
    this.columnsName = ['id', 'name', 'birthdate', 'email'];
    this.componentsSize = 'medium';
    this.event = '';
    this.filterinputModeValue = 'basic';
    this.literals = '';
    this.literalsCustom = {};
    this.maxResizableValue = 300;
    this.minResizableValue = 10;
    this.height = 400;
    this.minHeight = undefined;
    this.maxHeight = undefined;
    this.optionsPage = \`[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]\`;
    this.pagination = ['showMoreVisible'];
    this.properties = [];
    this.resizable = false;
    this.selection = ['selectableEntireLine'];
    this.sort = '[{"field": "", "dir": "asc"}]';
    this.spacing = ThfColumnSpacing.Medium;
    this.otherProperties = ['actionsFilter', 'draggable', 'groupable', 'sortable', 'striped', 'virtualScroll'];

    this.updateColumns();
    this.changeLiterals();
    this.changeSort();
    this.changePagination();
    this.changeSelectionOptions();
    this.changeOtherProperties();
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach(column => this.columns.push(this.columnsDefinition[column]));
  }
}
  `,this.actions=void 0,this.columnsName=["id","name","birthdate","email"],this.componentsSize="medium",this.customOptionsPage=[{value:10,label:"10"},{value:20,label:"20"},{value:50,label:"50"},{value:100,label:"100"},{value:1e3,label:"1000"}],this.customSort=[{field:"",dir:"asc"}],this.event="",this.filterinputModeValue="basic",this.height=400,this.minHeight=void 0,this.maxHeight=void 0,this.literals="",this.literalsCustom={},this.maxResizableValue=300,this.minResizableValue=10,this.optionsPage='[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]',this.pagination=[],this.properties=[],this.resizable=!1,this.selection=["selectableEntireLine"],this.sort='[{"field": "", "dir": "asc"}]',this.spacing=re.Medium,this.otherProperties=["actionsFilter","draggable","groupable","sortable","striped","virtualScroll"],this.customAction=[{label:"",action:r=>{this.poNotification.information(`${r.id} - ${r.name}`)},icon:"ICON_MENU_OPEN",fixed:!0}],this.componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.selectionOptions=[{label:"Selectable",value:"selectable"},{label:"Single",value:"singleSelect",disabled:!0},{label:"Entire Line",value:"selectableEntireLine",disabled:!0},{label:"Hide Select All",value:"hideSelectAll",disabled:!0},{label:"Action Delete",value:"actionDelete",disabled:!0},{label:"Action Edit",value:"actionEdit",disabled:!0},{label:"Action Excel",value:"actionExcel",disabled:!0},{label:"Action PDF",value:"actionPdf",disabled:!0},{label:"Hide Batch Actions",value:"hideBatchActions",disabled:!0}],this.spacingOptions=[{label:"extraSmall",value:re.ExtraSmall},{label:"Small",value:re.Small},{label:"Medium",value:re.Medium},{label:"Large",value:re.Large}],this.filterModeOptions=[{label:"Basic",value:"basic"},{label:"Service",value:"service"}],this.otherPropertiesOptions=[{label:"Actions",value:"actions"},{label:"Actions Filter",value:"actionsFilter"},{label:"Action Right",value:"actionRight"},{label:"Draggable",value:"draggable"},{label:"Groupable",value:"groupable"},{label:"Hide Columns Manager",value:"hideColumnsManager"},{label:"Hide Actions Fixed Columns",value:"hideActionFixedColumns"},{label:"Hide Table Search",value:"hideTableSearch"},{label:"Loading",value:"loading"},{label:"Resizable",value:"resizable"},{label:"Show Densification Configuration",value:"showDensificationConfiguration"},{label:"Show Draggable Icon",value:"showDraggableIcon"},{label:"Sortable",value:"sortable"},{label:"Striped",value:"striped"},{label:"Text Wrap",value:"textWrap",disabled:!1},{label:"Virtual Scroll",value:"virtualScroll"}],this.paginationOptions=[{label:"Pageable",value:"pageable"},{label:"Show More Disabled",value:"showMoreDisabled",disabled:!1},{label:"Show More Visible",value:"showMoreVisible",disabled:!1}],this.items=[{id:1,name:"Jo\xE3o Silva",birthdate:"1990-05-15",lastLogin:"2024-02-14T15:30:00Z",active:!0,email:"joao.silva@example.com"},{id:2,name:"Maria Souza",birthdate:"1985-10-23",lastLogin:"2024-02-13T08:45:00Z",active:!1,email:"maria.souza@example.com"},{id:3,name:"Carlos Almeida",birthdate:"1998-07-09",lastLogin:"2024-02-14T20:15:00Z",active:!0,email:"carlos.almeida@example.com"},{id:4,name:"Fernanda Costa",birthdate:"1992-03-12",lastLogin:"2024-02-12T18:00:00Z",active:!1,email:"fernanda.costa@example.com"},{id:5,name:"Ricardo Lima",birthdate:"1980-11-30",lastLogin:"2024-02-11T07:25:00Z",active:!0,email:"ricardo.lima@example.com"},{id:6,name:"Ana Pereira",birthdate:"1995-09-18",lastLogin:"2024-02-10T14:10:00Z",active:!0,email:"ana.pereira@example.com"},{id:7,name:"Pedro Henrique",birthdate:"1993-06-25",lastLogin:"2024-02-09T12:30:00Z",active:!1,email:"pedro.henrique@example.com"},{id:8,name:"Beatriz Ramos",birthdate:"1999-04-03",lastLogin:"2024-02-08T09:15:00Z",active:!0,email:"beatriz.ramos@example.com"},{id:9,name:"Lucas Oliveira",birthdate:"1987-07-22",lastLogin:"2024-02-07T16:45:00Z",active:!1,email:"lucas.oliveira@example.com"},{id:10,name:"Juliana Martins",birthdate:"1996-01-05",lastLogin:"2024-02-06T11:00:00Z",active:!0,email:"juliana.martins@example.com"},{id:11,name:"Eduardo Nunes",birthdate:"1982-08-17",lastLogin:"2024-02-05T17:20:00Z",active:!1,email:"eduardo.nunes@example.com"},{id:12,name:"Camila Ferreira",birthdate:"2000-12-29",lastLogin:"2024-02-04T13:40:00Z",active:!0,email:"camila.ferreira@example.com"}],this.columns=[{property:"id",label:"Number"},{property:"name",label:"Text"},{property:"birthdate",label:"Date",type:"date"},{property:"email",label:"Link",type:"link",action:this.openEmail.bind(this)}],this.columnsOptions=[{value:"id",label:"Number"},{value:"name",label:"Text"},{value:"birthdate",label:"Date"},{value:"lastLogin",label:"DateTime"},{value:"active",label:"Boolean"},{value:"email",label:"Link"}],this.columnsDefinition={id:{property:"id",label:"Number"},name:{property:"name",label:"Text"},birthdate:{property:"birthdate",label:"Date",type:"date"},lastLogin:{property:"lastLogin",label:"DateTime",type:"dateTime"},active:{property:"active",label:"Boolean"},email:{property:"email",label:"Link",type:"link",action:this.openEmail.bind(this)}}}ngAfterViewInit(){this.restore()}changeEvent(a){this.event=a}changeLiterals(){try{this.literalsCustom=JSON.parse(this.literals)}catch{this.literalsCustom={}}}changeOptionsPage(){try{this.customOptionsPage=JSON.parse(this.optionsPage)}catch{this.customOptionsPage=[{value:10,label:"10"},{value:20,label:"20"},{value:50,label:"50"},{value:100,label:"100"},{value:1e3,label:"1000"}]}}changeOtherProperties(){this.actions=this.otherProperties.includes("actions")?this.customAction:[];let a=this.otherProperties.includes("virtualScroll"),r=this.otherProperties.includes("resizable");this.otherPropertiesOptions=this.otherPropertiesOptions.map(n=>n.value==="textWrap"?O(V({},n),{disabled:a}):n),a&&this.otherProperties.includes("textWrap")&&(this.otherProperties=this.otherProperties.filter(n=>n!=="textWrap")),this.resizable=r}changePagination(){let a=this.pagination.includes("pageable");this.paginationOptions[1].disabled=!a,this.paginationOptions[2].disabled=!a,this.paginationOptions=[...this.paginationOptions]}changeSelectionOptions(){let a=this.selection.includes("selectable");this.selectionOptions[1].disabled=!a,this.selectionOptions[2].disabled=!a,this.selectionOptions[3].disabled=!a,this.selectionOptions[4].disabled=!a,this.selectionOptions[5].disabled=!a,this.selectionOptions[6].disabled=!a,this.selectionOptions[7].disabled=!a,this.selectionOptions[8].disabled=!a,this.selectionOptions=[...this.selectionOptions]}changeSort(){try{this.customSort=JSON.parse(this.sort)}catch{this.customSort=[{field:"",dir:"asc"}]}}openEmail(a){window.open(`mailto:${a}`,"_blank")}restore(){this.actions=void 0,this.columnsName=["id","name","birthdate","email"],this.componentsSize="medium",this.event="",this.filterinputModeValue="basic",this.literals="",this.literalsCustom={},this.maxResizableValue=300,this.minResizableValue=10,this.height=400,this.minHeight=void 0,this.maxHeight=void 0,this.optionsPage='[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]',this.pagination=["showMoreVisible"],this.properties=[],this.resizable=!1,this.selection=["selectableEntireLine"],this.sort='[{"field": "", "dir": "asc"}]',this.spacing=re.Medium,this.otherProperties=["actionsFilter","draggable","groupable","sortable","striped","virtualScroll"],this.updateColumns(),this.changeLiterals(),this.changeSort(),this.changePagination(),this.changeSelectionOptions(),this.changeOtherProperties()}updateColumns(){this.columns=[],this.columnsName.forEach(a=>this.columns.push(this.columnsDefinition[a]))}static{this.\u0275fac=function(r){return new(r||d)(G(pt))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-labs-doc"]],standalone:!1,decls:10,vars:47,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-param-delete-api","value",3,"t-change-fixed-columns","t-change-order-column","t-change-page-size","t-change-sort-column","t-change-visible-columns","t-change-options-column-manager","t-changed-density","t-delete-item","t-delete-items","t-delete-item-error","t-filter-item-error","t-restore-column-manager","t-selected","t-all-selected","t-unselected","t-all-unselected","t-change-group","t-rows-selected","t-action-delete","t-action-edit","t-action-excel","t-action-pdf","t-actions","t-actions-filter","t-actions-right","t-components-size","t-columns","t-draggable","t-filter-input-mode","t-groupable","t-height","t-max-height","t-min-height","t-hide-columns-manager","t-hide-action-fixed-columns","t-hide-batch-actions","t-hide-select-all","t-hide-table-search","t-literals","t-loading","t-max-resizable-width","t-min-resizable-width","t-options-paging","t-pageable","t-resizable","t-selectable","t-selectable-entire-line","t-show-densification-configuration","t-show-draggable-icon","t-show-more-disabled","t-show-more-visible","t-single-select","t-sort","t-sortable","t-spacing","t-striped","t-text-wrap","t-virtual-scroll","t-items"],[1,"po-mt-2",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","columnsName","p-columns","4","p-label","Columns",3,"ngModelChange","p-change","ngModel","p-options"],["name","selection","p-label","Selection","p-columns","4",3,"ngModelChange","p-change","p-options","ngModel"],["name","otherProperties","p-label","Other Properties",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","spacing","p-help","Para aplicar o tamanho Extra Small, defina o n\xEDvel de acessibilidade como AA no navbar.","p-label","Spacing",3,"ngModelChange","p-columns","p-options","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, defina o n\xEDvel de acessibilidade como AA no navbar.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterinputModeValue","p-label","Filter Input Mode",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],[1,"po-mb-2","po-lg-6",2,"display","flex"],["p-label","Min Resizable Width",1,"po-md-6",3,"ngModelChange","ngModel","disabled"],["p-label","Max Resizable Width",1,"po-md-6",3,"ngModelChange","ngModel","disabled"],["p-label","Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["p-label","Max Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["p-label","Min Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","literals","p-label","Literals","p-help",'{"noData": "Sem dados a serem exibidos"}',3,"ngModelChange","p-change-model","ngModel"],["name","sort","p-label","Sort","p-help",'[{ "field":"name", "dir":"asc" }]',3,"ngModelChange","p-change-model","ngModel"],[1,"po-mb-2","po-lg-12",2,"display","flex"],[2,"display","flex","flex-wrap","wrap"],["name","pagination","p-label","Pagination",1,"po-lg-6",3,"ngModelChange","p-change","p-options","ngModel"],["name","optionsPage","p-label","Options Page","p-help",'[{ "value":"25", "label":"25" }, { "value":"50", "label":"50" }]',1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel","disabled"],[1,"po-row"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let l=I();i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),o(3,"po-divider",2),i(4,"thf-grid",3),g("t-change-fixed-columns",function(){return p(l),c(n.changeEvent("t-change-fixed-columns"))})("t-change-order-column",function(){return p(l),c(n.changeEvent("t-change-order-column"))})("t-change-page-size",function(){return p(l),c(n.changeEvent("t-change-page-size"))})("t-change-sort-column",function(){return p(l),c(n.changeEvent("t-change-sort-column"))})("t-change-visible-columns",function(){return p(l),c(n.changeEvent("t-change-visible-columns"))})("t-change-options-column-manager",function(){return p(l),c(n.changeEvent("t-change-options-column-manager"))})("t-changed-density",function(){return p(l),c(n.changeEvent("t-changed-density"))})("t-delete-item",function(){return p(l),c(n.changeEvent("t-delete-item"))})("t-delete-items",function(){return p(l),c(n.changeEvent("t-delete-items"))})("t-delete-item-error",function(){return p(l),c(n.changeEvent("t-delete-item-error"))})("t-filter-item-error",function(){return p(l),c(n.changeEvent("t-filter-item-error"))})("t-restore-column-manager",function(){return p(l),c(n.changeEvent("t-restore-column-manager"))})("t-selected",function(){return p(l),c(n.changeEvent("t-selected"))})("t-all-selected",function(){return p(l),c(n.changeEvent("t-all-selected"))})("t-unselected",function(){return p(l),c(n.changeEvent("t-unselected"))})("t-all-unselected",function(){return p(l),c(n.changeEvent("t-all-unselected"))})("t-change-group",function(){return p(l),c(n.changeEvent("t-change-group"))})("t-rows-selected",function(){return p(l),c(n.changeEvent("t-rows-selected"))}),t(),i(5,"po-container",4),o(6,"po-info",5),t(),o(7,"app-code-accordion-doc",6),F(8,Di,29,27,"ng-template",null,0,K),t()}if(r&2){let l=W(9);m(4),s("t-action-delete",n.selection.includes("actionDelete"))("t-action-edit",n.selection.includes("actionEdit"))("t-action-excel",n.selection.includes("actionExcel"))("t-action-pdf",n.selection.includes("actionPdf"))("t-actions",n.actions||ee(46,wi))("t-actions-filter",n.otherProperties.includes("actionsFilter"))("t-actions-right",n.otherProperties.includes("actionRight"))("t-components-size",n.componentsSize)("t-columns",n.columns)("t-draggable",n.otherProperties.includes("draggable"))("t-filter-input-mode",n.filterinputModeValue)("t-groupable",n.otherProperties.includes("groupable"))("t-height",n.height)("t-max-height",n.maxHeight)("t-min-height",n.minHeight)("t-hide-columns-manager",n.otherProperties.includes("hideColumnsManager"))("t-hide-action-fixed-columns",n.otherProperties.includes("hideActionFixedColumns"))("t-hide-batch-actions",n.selection.includes("hideBatchActions"))("t-hide-select-all",n.selection.includes("hideSelectAll"))("t-hide-table-search",n.otherProperties.includes("hideTableSearch"))("t-literals",n.literalsCustom)("t-loading",n.otherProperties.includes("loading"))("t-max-resizable-width",n.maxResizableValue)("t-min-resizable-width",n.minResizableValue)("t-options-paging",n.customOptionsPage)("t-pageable",n.pagination.includes("pageable"))("t-resizable",n.resizable)("t-selectable",n.selection.includes("selectable"))("t-selectable-entire-line",n.selection.includes("selectableEntireLine"))("t-show-densification-configuration",n.otherProperties.includes("showDensificationConfiguration"))("t-show-draggable-icon",n.otherProperties.includes("showDraggableIcon"))("t-show-more-disabled",n.pagination.includes("showMoreDisabled"))("t-show-more-visible",n.pagination.includes("showMoreVisible"))("t-single-select",n.selection.includes("singleSelect"))("t-sort",n.customSort)("t-sortable",n.otherProperties.includes("sortable"))("t-spacing",n.spacing)("t-striped",n.otherProperties.includes("striped"))("t-text-wrap",n.otherProperties.includes("textWrap"))("t-virtual-scroll",n.otherProperties.includes("virtualScroll"))("t-items",n.items),m(2),s("p-value",n.event),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[Q,Z,H,v,P,ue,te,ut,xe,ie,M,T],encapsulation:2})}}return d})();var ki=["gridComponent"],kt=(()=>{class d{constructor(){this.htmlCode=`<thf-grid
  #gridComponent
  t-service-api="https://po-sample-api.onrender.com/v1/people"
  [t-auto-size]="true"
  [t-columns]="columns"
  [t-actions-filter]="true"
  [t-selectable]="true"
  [t-actions-right]="true"
  [t-draggable]="true"
  [t-groupable]="true"
  [t-height]="400"
  [t-edit-properties]="editProperties"
/>
  `,this.tsCode=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThfGridColumn, ThfGridComponent, ThfGridEditProperties } from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-editing-inline-doc',
  templateUrl: './thf-grid-editing-inline-doc.component.html',
  styleUrls: ['./thf-grid-editing-inline-doc.component.css'],
  standalone: false,
})
export class ThfGridEditingInlineDocComponent {
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

  columns: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id', editProperties: { disabled: true } },
    { property: 'name', label: 'Nome' },
    {
      property: 'birthdate',
      label: 'Data de  nascimento',
      type: 'date',
      editProperties: {
        componentEditable: 'datepicker',
        clean: true,
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        additionalHelpTooltip: 'Informe a data de nascimento no formato DDMMAAAA ou selecione no calend\xE1rio.',
        keydown: this.onKeyDown.bind(this, 'birthdate')
      }
    },
    {
      property: 'city',
      label: 'Cidade',
      editProperties: {
        componentEditable: 'combo',
        options: [
          { value: '4201307', label: 'Araquari' },
          { value: '1501402', label: 'Bel\xE9m' },
          { value: '3509502', label: 'Campinas' },
          { value: '4106902', label: 'Curitiba' },
          { value: '4209102', label: 'Joinville' },
          { value: '3534401', label: 'Osasco' },
          { value: '3304557', label: 'Rio de Janeiro' },
          { value: '4215802', label: 'S\xE3o Bento do Sul' },
          { value: '4216206', label: 'S\xE3o Francisco do Sul' },
          { value: '3550308', label: 'S\xE3o Paulo' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        removeInitialFilter: true,
        controlValueWithLabel: true,
      },
    },
  ];

  form!: FormGroup;
  editProperties!: ThfGridEditProperties;

  ngOnInit() {
    this.editProperties = {
      actionEdit: this.setFormGroup.bind(this),
    };
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  setFormGroup(dataItem: any) {
    this.form = new FormGroup({
      id: new FormControl(dataItem.id, [Validators.required]),
      name: new FormControl(dataItem.name),
      city: new FormControl(dataItem.city),
      birthdate: new FormControl(dataItem.birthdate),
    });
    return this.form;
  }
}
  `,this.columns=[{property:"id",label:"Id",editProperties:{disabled:!0}},{property:"name",label:"Nome"},{property:"birthdate",label:"Data de  nascimento",type:"date",editProperties:{componentEditable:"datepicker",clean:!0,required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,additionalHelpTooltip:"Informe a data de nascimento no formato DDMMAAAA ou selecione no calend\xE1rio.",keydown:this.onKeyDown.bind(this,"birthdate")}},{property:"city",label:"Cidade",editProperties:{componentEditable:"combo",options:[{value:"4201307",label:"Araquari"},{value:"1501402",label:"Bel\xE9m"},{value:"3509502",label:"Campinas"},{value:"4106902",label:"Curitiba"},{value:"4209102",label:"Joinville"},{value:"3534401",label:"Osasco"},{value:"3304557",label:"Rio de Janeiro"},{value:"4215802",label:"S\xE3o Bento do Sul"},{value:"4216206",label:"S\xE3o Francisco do Sul"},{value:"3550308",label:"S\xE3o Paulo"}],fieldLabel:"label",fieldValue:"value",removeInitialFilter:!0,controlValueWithLabel:!0}}]}ngOnInit(){this.editProperties={actionEdit:this.setFormGroup.bind(this)}}onKeyDown(a,r){r.code==="F9"&&this.thfGrid.showAdditionalHelp(a)}setFormGroup(a){return this.form=new B({id:new f(a.id,[R.required]),name:new f(a.name),city:new f(a.city),birthdate:new f(a.birthdate)}),this.form}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-editing-inline-doc"]],viewQuery:function(r,n){if(r&1&&w(ki,5),r&2){let l;D(l=A())&&(n.thfGrid=l.first)}},standalone:!1,decls:7,vars:11,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/people",3,"t-auto-size","t-columns","t-actions-filter","t-selectable","t-actions-right","t-draggable","t-groupable","t-height","t-edit-properties"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",1),e(2,"Edi\xE7\xE3o em linha"),t(),o(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("t-auto-size",!0)("t-columns",n.columns)("t-actions-filter",!0)("t-selectable",!0)("t-actions-right",!0)("t-draggable",!0)("t-groupable",!0)("t-height",400)("t-edit-properties",n.editProperties),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,M,T],encapsulation:2})}}return d})();var _i=["modal"],Fi=["gridComponent"],Ii=["multiselect"],Li=["input"],Mi=(d,q)=>({name:d,perfil:q}),Ri=()=>({value:1,label:"RH"}),Vi=()=>({value:2,label:"Almoxarifado"}),ji=()=>({value:3,label:"Vendedor"}),zi=(d,q,a)=>[d,q,a];function Oi(d,q){if(d&1){let a=I();i(0,"po-input",13,4),g("p-keydown",function(n){p(a);let l=u();return c(l.onKeyDown("name",n))}),t()}if(d&2){let a=q.formControl;s("formControl",a)("p-error-pattern","Obrigat\xF3rio")("p-required",!0)("p-required-field-error-message",!0)}}function Gi(d,q){if(d&1){let a=I();i(0,"po-multiselect",14,5),g("p-keydown",function(n){p(a);let l=u();return c(l.onKeyDown("otherStatus",n))}),t()}if(d&2){let a=q.formControl;s("formControl",a)("p-field-error-message","Obrigat\xF3rio")("p-required",!0)("p-additional-help-tooltip","Marque um ou mais status, conforme necess\xE1rio.")("p-options",He(11,zi,ee(8,Ri),ee(9,Vi),ee(10,ji)))("p-field-label","label")("p-field-value","value")("p-control-value-with-label",!0)}}function Ni(d,q){if(d&1&&(i(0,"div",15)(1,"pre"),e(2),t()()),d&2){let a=u();m(2),me(a.getLabelChangedItems())}}var qt=(()=>{class d{constructor(){this.htmlCode=`
  <po-button
    class="po-mr-2"
    p-label="Finaliza modo edi\xE7\xE3o"
    (p-click)="finishEditMode()"
  ></po-button>
  <po-button
    p-label="Get itens alterados"
    [p-disabled]="getChangedItems()?.length === 0"
    (p-click)="poModal.open()"
  ></po-button>

  <thf-grid
    #gridComponent
    [t-height]="400"
    [t-selectable]="true"
    [t-single-select]="true"
    [t-items]="items"
    [t-columns]="columnWithItems"
    [t-grid-row-actions]="gridRowsActionsWithItems"
    [t-actions-right]="true"
    [t-sortable]="true"
    [t-custom-templates]="{ name: nameTemplate, perfil: perfilTemplate }"
  />

  <ng-template #nameTemplate let-formControl="formControl">
    <po-input
      #input
      p-additional-help-tooltip="Informe pelo menos o primeiro nome."
      p-placeholder="Informe o nome"
      [formControl]="formControl"
      [p-error-pattern]="'Obrigat\xF3rio'"
      [p-required]="true"
      [p-required-field-error-message]="true"
      (p-keydown)="onKeyDown('name', $event)"
    ></po-input>
  </ng-template>
  <ng-template #perfilTemplate let-formControl="formControl">
    <po-multiselect
      #multiselect
      [formControl]="formControl"
      [p-field-error-message]="'Obrigat\xF3rio'"
      [p-required]="true"
      [p-additional-help-tooltip]="
        'Marque um ou mais status, conforme necess\xE1rio.'
      "
      [p-options]="[
        { value: 1, label: 'RH' },
        { value: 2, label: 'Almoxarifado' },
        { value: 3, label: 'Vendedor' }
      ]"
      [p-field-label]="'label'"
      [p-field-value]="'value'"
      [p-control-value-with-label]="true"
      (p-keydown)="onKeyDown('otherStatus', $event)"
    ></po-multiselect>
  </ng-template>

  <po-modal #modal p-title="Itens que foram alterados">
    <div class="code" *ngIf="getChangedItems()?.length">
      <pre>{{ getLabelChangedItems() }}</pre>
    </div>
  </po-modal>
`,this.tsCode=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  PoInputComponent,
  PoModalComponent,
  PoMultiselectComponent,
} from '@po-ui/ng-components';
import {
  ThfGridColumn,
  ThfGridComponent,
  ThfGridRowActions,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-row-actions-doc',
  templateUrl: './thf-grid-grid-row-actions-doc.component.html',
  styleUrls: ['./thf-grid-grid-row-actions-doc.component.css'],
  standalone: false,
})
export class ThfGridRowActionsDocComponent {
  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;
  @ViewChild('multiselect', { static: false })
  multiselect!: PoMultiselectComponent;
  @ViewChild('input', { static: false }) input!: PoInputComponent;

  items = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      status: 1,
      values: [1495831666871],
      perfil: [1],
      state: { value: 'SC', label: 'Santa Catarina' },
      city: 'Lages',
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      status: 2,
      values: [1495831698598],
      perfil: [2],
      state: { value: 'SC', label: 'Santa Catarina' },
      city: 'Brusque',
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      values: [1495832652942],
      perfil: [3],
      state: { value: 'SP', label: 'S\xE3o Paulo' },
      city: 'Guarulhos',
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      values: [1495832683682],
      perfil: [3],
      state: { value: 'SP', label: 'S\xE3o Paulo' },
      city: 'Campinas',
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      values: [1495833068596],
      perfil: [2],
      state: { value: 'RJ', label: 'Rio de Janeiro' },
      city: null,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      values: [1495833068597],
      perfil: [1],
      state: null,
      city: null,
    },
  ];
  currentIdItem: any;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
    },
    {
      property: 'name',
      label: 'Nome',
      editProperties: {
        componentEditable: 'input',
      },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 1, color: 'color-11', label: 'Ativo' },
        { value: 2, color: 'color-08', label: 'Inativo' },
      ],
      editProperties: {
        componentEditable: 'combo',
        disabledInitFilter: true,
        options: [
          { value: 1, label: 'Ativo' },
          { value: 2, label: 'Inativo' },
          { value: 0, label: 'Other' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
      },
    },
    {
      property: 'values',
      label: 'Values',
      editProperties: {
        componentEditable: 'lookup',
        searchService: 'https://po-sample-api.onrender.com/v1/heroes',
        fieldValue: 'value',
        fieldLabel: 'label',
        multiple: true,
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        additionalHelpTooltip:
          'Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.',
        keydown: this.onKeyDown.bind(this, 'values'),
      },
    },
    {
      property: 'perfil',
      label: 'Perfil',
      editProperties: {
        componentEditable: 'multiselect',
        options: [
          { value: 1, label: 'RH' },
          { value: 2, label: 'Almoxarifado' },
          { value: 3, label: 'Vendedor' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        controlValueWithLabel: true,
      },
    },
    {
      property: 'state',
      label: 'Estado',
      editProperties: {
        componentEditable: 'combo',
        required: false,
        removeInitialFilter: true,
        options: [
          { value: 'MG', label: 'Minas Gerais' },
          { value: 'RJ', label: 'Rio de Janeiro' },
          { value: 'SC', label: 'Santa Catarina' },
          { value: 'SP', label: 'S\xE3o Paulo' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        controlValueWithLabel: true,
      },
    },
    {
      property: 'city',
      label: 'cidade',
      editProperties: {
        componentEditable: 'combo',
        required: false,
        removeInitialFilter: true,
        disabled: false,
        fieldLabel: 'value',
        fieldValue: 'value',
      },
    },
  ];

  itemsUpdated: Array<any> = [];
  disabledIncludeButton!: boolean;
  gridRowsActionsWithItems!: ThfGridRowActions;
  myForm!: FormGroup;

  ngOnInit() {
    this.gridRowsActionsWithItems = {
      title: 'Items',
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          this.disabledIncludeButton = true;
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.dependents = [];
          this.currentIdItem = dataItem.id;
        }
        this.myForm = new FormGroup({
          name: new FormControl(dataItem.name),
          status: new FormControl(dataItem.status, [Validators.min(1)]),
          values: new FormControl(dataItem.values, [Validators.required]),
          perfil: new FormControl(dataItem.perfil, [Validators.required]),
          state: new FormControl(dataItem.state),
          city: new FormControl(dataItem.city),
        });
        this.handleStateAndCity(this.myForm?.controls['state'].value);
        return this.myForm;
      },
      afterSave: this.onAfterSave.bind(this),
      beforeSave: this.onBeforeSave.bind(this),
      beforeInsert: this.onBeforeInsert.bind(this),
      beforeRemove: this.onBeforeRemove.bind(this),
      afterRemove: this.onAfterRemove.bind(this),
      validateField: this.onValidate.bind(this),
    };

    this.itemsUpdated = [...this.items];
  }

  onAfterSave(row: any) {
    console.log('onAfterSave(new): ', row);
    const city = this.columnWithItems.find(
      (column) => column.property === 'city'
    );
    if (city?.editProperties) {
      city.editProperties.disabled = true;
    }
  }

  onBeforeSave(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeInsert(newValue: any) {
    console.log('before insert new value: ', newValue);
    this.disabledIncludeButton = false;
    this.itemsUpdated = [...this.itemsUpdated, newValue];
    const city = this.columnWithItems.find(
      (column) => column.property === 'city'
    );
    if (city?.editProperties) {
      city.editProperties.disabled = true;
    }
    return true;
  }

  onValidate(value: any, columnProperty: any) {
    console.log('onValidateField:', value, columnProperty);

    if (columnProperty === 'state') {
      this.myForm?.controls['city'].setValue(null);
      const stateValue = this.myForm.controls['state'].value;
      const cityColumn = this.columnWithItems.find(
        (column) => column.property === 'city'
      );

      if (!cityColumn?.editProperties) {
        return true;
      }

      if (!stateValue) {
        cityColumn.editProperties.disabled = true;
      } else {
        cityColumn.editProperties.disabled = false;
        cityColumn.editProperties.options = this.getCity(stateValue.value);

        this.myForm?.controls['city'].setValue('');
      }
    }

    return true;
  }

  handleStateAndCity(value: any) {
    const cityColumn = this.columnWithItems.find(
      (column) => column.property === 'city'
    );
    if (!cityColumn?.editProperties) {
      return;
    }
    if (value) {
      cityColumn.editProperties.options = this.getCity(value);
      cityColumn.editProperties.disabled = false;
    } else {
      cityColumn.editProperties.disabled = true;
    }
  }

  onBeforeRemove(row: { id: any }) {
    return true;
  }

  onAfterRemove(row: any) {
    console.log('afterRemove: ', row);
    return true;
  }

  getChangedItems() {
    return this.thfGrid?.getChangedItems() || [];
  }

  getLabelChangedItems() {
    return JSON.stringify(this.thfGrid?.getChangedItems() || [], null, 2);
  }

  finishEditMode() {
    this.thfGrid.cleanRowActionsMode();
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      if (property === 'otherStatus') {
        this.multiselect.showAdditionalHelp();
        return;
      } else if (property === 'name') {
        this.input.showAdditionalHelp();
        return;
      }
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  private getCity(state: string) {
    const city = {
      MG: [
        { value: 'Belo Horizonte' },
        { value: 'Contagem' },
        { value: 'Juiz de Fora' },
        { value: 'Uberl\xE2ndia' },
      ],
      RJ: [
        { value: 'Duque de Caxias' },
        { value: 'Nova Igua\xE7u' },
        { value: 'Rio de Janeiro' },
        { value: 'S\xE3o Gon\xE7alo' },
      ],
      SP: [
        { value: 'Campinas' },
        { value: 'Guarulhos' },
        { value: 'S\xE3o Bernardo do Campo' },
        { value: 'S\xE3o Paulo' },
      ],
      SC: [
        { value: 'Balne\xE1rio Cambori\xFA' },
        { value: 'Brusque' },
        { value: 'Lages' },
        { value: 'Palho\xE7a' },
      ],
    };

    return city[state as keyof typeof city] || [];
  }
}
`,this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],perfil:[1],state:{value:"SC",label:"Santa Catarina"},city:"Lages"},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],perfil:[2],state:{value:"SC",label:"Santa Catarina"},city:"Brusque"},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],perfil:[3],state:{value:"SP",label:"S\xE3o Paulo"},city:"Guarulhos"},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],perfil:[3],state:{value:"SP",label:"S\xE3o Paulo"},city:"Campinas"},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],perfil:[2],state:{value:"RJ",label:"Rio de Janeiro"},city:null},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],perfil:[1],state:null,city:null}],this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome",editProperties:{componentEditable:"input"}},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:1,label:"Ativo"},{value:2,label:"Inativo"},{value:0,label:"Other"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}},{property:"values",label:"Values",editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!0,errorMessage:"Obrigat\xF3rio",additionalHelpTooltip:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",keydown:this.onKeyDown.bind(this,"values")}},{property:"perfil",label:"Perfil",editProperties:{componentEditable:"multiselect",options:[{value:1,label:"RH"},{value:2,label:"Almoxarifado"},{value:3,label:"Vendedor"}],fieldLabel:"label",fieldValue:"value",controlValueWithLabel:!0}},{property:"state",label:"Estado",editProperties:{componentEditable:"combo",required:!1,removeInitialFilter:!0,options:[{value:"MG",label:"Minas Gerais"},{value:"RJ",label:"Rio de Janeiro"},{value:"SC",label:"Santa Catarina"},{value:"SP",label:"S\xE3o Paulo"}],fieldLabel:"label",fieldValue:"value",controlValueWithLabel:!0}},{property:"city",label:"cidade",editProperties:{componentEditable:"combo",required:!1,removeInitialFilter:!0,disabled:!1,fieldLabel:"value",fieldValue:"value"}}],this.itemsUpdated=[]}ngOnInit(){this.gridRowsActionsWithItems={title:"Items",actionEdit:(a,r)=>(r==="include"&&!a.id&&(console.log("mode: ",r),this.disabledIncludeButton=!0,a.id=a.$uuidThfIncluded,a.dependents=[],this.currentIdItem=a.id),this.myForm=new B({name:new f(a.name),status:new f(a.status,[R.min(1)]),values:new f(a.values,[R.required]),perfil:new f(a.perfil,[R.required]),state:new f(a.state),city:new f(a.city)}),this.handleStateAndCity(this.myForm?.controls.state.value),this.myForm),afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this),validateField:this.onValidate.bind(this)},this.itemsUpdated=[...this.items]}onAfterSave(a){console.log("onAfterSave(new): ",a);let r=this.columnWithItems.find(n=>n.property==="city");r?.editProperties&&(r.editProperties.disabled=!0)}onBeforeSave(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeInsert(a){console.log("before insert new value: ",a),this.disabledIncludeButton=!1,this.itemsUpdated=[...this.itemsUpdated,a];let r=this.columnWithItems.find(n=>n.property==="city");return r?.editProperties&&(r.editProperties.disabled=!0),!0}onValidate(a,r){if(console.log("onValidateField:",a,r),r==="state"){this.myForm?.controls.city.setValue(null);let n=this.myForm.controls.state.value,l=this.columnWithItems.find(E=>E.property==="city");if(!l?.editProperties)return!0;n?(l.editProperties.disabled=!1,l.editProperties.options=this.getCity(n.value),this.myForm?.controls.city.setValue("")):l.editProperties.disabled=!0}return!0}handleStateAndCity(a){let r=this.columnWithItems.find(n=>n.property==="city");r?.editProperties&&(a?(r.editProperties.options=this.getCity(a),r.editProperties.disabled=!1):r.editProperties.disabled=!0)}onBeforeRemove(a){return!0}onAfterRemove(a){return console.log("afterRemove: ",a),!0}getChangedItems(){return this.thfGrid?.getChangedItems()||[]}getLabelChangedItems(){return JSON.stringify(this.thfGrid?.getChangedItems()||[],null,2)}finishEditMode(){this.thfGrid.cleanRowActionsMode()}onKeyDown(a,r){if(r.code==="F9"){if(a==="otherStatus"){this.multiselect.showAdditionalHelp();return}else if(a==="name"){this.input.showAdditionalHelp();return}this.thfGrid.showAdditionalHelp(a)}}getCity(a){return{MG:[{value:"Belo Horizonte"},{value:"Contagem"},{value:"Juiz de Fora"},{value:"Uberl\xE2ndia"}],RJ:[{value:"Duque de Caxias"},{value:"Nova Igua\xE7u"},{value:"Rio de Janeiro"},{value:"S\xE3o Gon\xE7alo"}],SP:[{value:"Campinas"},{value:"Guarulhos"},{value:"S\xE3o Bernardo do Campo"},{value:"S\xE3o Paulo"}],SC:[{value:"Balne\xE1rio Cambori\xFA"},{value:"Brusque"},{value:"Lages"},{value:"Palho\xE7a"}]}[a]||[]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-row-actions-doc"]],viewQuery:function(r,n){if(r&1&&(w(_i,7),w(Fi,5),w(Ii,5),w(Li,5)),r&2){let l;D(l=A())&&(n.poModal=l.first),D(l=A())&&(n.thfGrid=l.first),D(l=A())&&(n.multiselect=l.first),D(l=A())&&(n.input=l.first)}},standalone:!1,decls:16,vars:16,consts:[["gridComponent",""],["nameTemplate",""],["perfilTemplate",""],["modal",""],["input",""],["multiselect",""],[1,"po-font-text-large-bold"],["p-label","Finaliza modo edi\xE7\xE3o",1,"po-mr-2",3,"p-click"],["p-label","Get itens alterados",3,"p-click","p-disabled"],[3,"t-height","t-selectable","t-single-select","t-items","t-columns","t-grid-row-actions","t-actions-right","t-sortable","t-custom-templates"],["p-title","Itens que foram alterados"],["class","code",4,"ngIf"],[3,"htmlCode","tsCode"],["p-additional-help-tooltip","Informe pelo menos o primeiro nome.","p-placeholder","Informe o nome",3,"p-keydown","formControl","p-error-pattern","p-required","p-required-field-error-message"],[3,"p-keydown","formControl","p-field-error-message","p-required","p-additional-help-tooltip","p-options","p-field-label","p-field-value","p-control-value-with-label"],[1,"code"]],template:function(r,n){if(r&1){let l=I();i(0,"po-container")(1,"span",6),e(2,"Edi\xE7\xE3o flu\xEDda"),t(),o(3,"po-divider"),i(4,"po-button",7),g("p-click",function(){return p(l),c(n.finishEditMode())}),t(),i(5,"po-button",8),g("p-click",function(){return p(l),c(n.poModal.open())}),t(),o(6,"thf-grid",9,0),F(8,Oi,2,4,"ng-template",null,1,K)(10,Gi,2,15,"ng-template",null,2,K),i(12,"po-modal",10,3),F(14,Ni,3,1,"div",11),t(),o(15,"app-code-accordion-doc",12),t()}if(r&2){let l,E,C=W(9),Yt=W(11);m(5),s("p-disabled",((l=n.getChangedItems())==null?null:l.length)===0),m(),s("t-height",400)("t-selectable",!0)("t-single-select",!0)("t-items",n.items)("t-columns",n.columnWithItems)("t-grid-row-actions",n.gridRowsActionsWithItems)("t-actions-right",!0)("t-sortable",!0)("t-custom-templates",ge(13,Mi,C,Yt)),m(8),s("ngIf",(E=n.getChangedItems())==null?null:E.length),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[se,Q,it,H,v,P,Ee,ct,we,M,T],styles:[".code[_ngcontent-%COMP%]{padding:1rem;background-color:#000;color:#adff2f;margin-top:.5rem;margin-left:2rem;border-radius:.5rem}"]})}}return d})();var Bi=["modal"],Hi=["gridComponent"];function Wi(d,q){if(d&1&&(i(0,"div",9)(1,"pre"),e(2),t()()),d&2){let a=u();m(2),me(a.getLabelChangedItems())}}var _t=(()=>{class d{constructor(){this.htmlCode=`<po-button
  class="po-mr-2"
  p-label="Finaliza modo edi\xE7\xE3o"
  (p-click)="finishEditMode()"
></po-button>
<po-button
  p-label="Get itens alterados"
  [p-disabled]="getChangedItems()?.length === 0"
  (p-click)="poModal.open()"
></po-button>

<thf-grid
  #gridComponent
  [t-height]="400"
  [t-selectable]="true"
  [t-single-select]="true"
  [t-items]="items"
  [t-columns]="columnWithItems"
  [t-grid-row-actions]="gridRowsActionsWithItems"
  [t-aggregates]="aggregatesDescriptor"
  [t-show-footer-aggregates]="true"
  [t-actions-right]="true"
  [t-sortable]="true"
/>

<po-modal #modal p-title="Itens que foram alterados">
  <div class="code" *ngIf="getChangedItems()?.length">
    <pre>{{ getLabelChangedItems() }}</pre>
  </div>
</po-modal>
`,this.tsCode=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PoModalComponent } from '@po-ui/ng-components';
import {
  ThfAggregateDescriptor,
  ThfGridColumn,
  ThfGridComponent,
  ThfGridRowActions,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-editing-fluid-currency-doc',
  templateUrl: './thf-grid-editing-fluid-currency-doc.component.html',
  styleUrls: ['./thf-grid-editing-fluid-currency-doc.component.css'],
  standalone: false,
})
export class ThfGridEditingFluidCurrencyDocComponent {
  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

  items = [
    {
      id: 11234,
      country: 'Brazil',
      value: 1000.0,
      value_pt: 1000.0,
      value_en: 1000.0,
      value_ru: 1000.0,
      value_es: 1000.0,
      destination: 'Rio de Janeiro',
      status: 'available',
      region: 'Latin America',
    },
    {
      id: 22467,
      country: 'France',
      value: 5000.0,
      value_pt: 5000.0,
      value_en: 5000.0,
      value_ru: 5000.0,
      value_es: 5000.0,
      destination: 'Paris',
      status: 'closed',
      region: 'Alps',
    },
    {
      id: 40670,
      country: 'Senegal',
      value: 3200.0,
      value_pt: 3200.0,
      value_en: 3200.0,
      value_ru: 3200.0,
      value_es: 3200.0,
      destination: 'Dakar',
      status: 'closed',
      region: 'Western Africa',
    },
    {
      id: 34679,
      country: 'Portugal',
      value: 5500.0,
      value_pt: 5500.0,
      value_en: 5500.0,
      value_ru: 5500.0,
      value_es: 5500.0,
      destination: 'Lisbon',
      status: 'closed',
      region: 'Mediterranean',
    },
    {
      id: 48999,
      country: 'Russia',
      value: 6700.0,
      value_pt: 6700.0,
      value_en: 6700.0,
      value_ru: 6700.0,
      value_es: 6700.0,
      destination: 'Moscow',
      status: 'reserved',
      region: 'Caucasus',
    },
    {
      id: 48999,
      country: 'United States',
      value: 2700.49,
      value_pt: 2700.49,
      value_en: 2700.49,
      value_ru: 2700.49,
      value_es: 2700.49,
      destination: 'Los Angeles',
      status: 'reserved',
      region: 'North America',
    },
    {
      id: 54563,
      country: 'Chile',
      value: 2000.0,
      value_pt: 2000.0,
      value_en: 2000.0,
      value_ru: 2000.0,
      value_es: 2000.0,
      destination: 'Cusco',
      status: 'available',
      region: 'Latin America',
    },
    {
      id: 64568,
      country: 'Mexico',
      value: 2100.0,
      value_pt: 2100.0,
      value_en: 2100.0,
      value_ru: 2100.0,
      value_es: 2100.0,
      destination: 'Mexico City',
      status: 'available',
      region: 'Latin America',
    },
    {
      id: 75456,
      country: 'Ireland',
      value: 6300.0,
      value_pt: 6300.0,
      value_en: 6300.0,
      value_ru: 6300.0,
      value_es: 6300.0,
      destination: 'Cork',
      status: 'reserved',
      region: 'British Isle',
    },
    {
      id: 23445,
      country: 'South Africa',
      value: 1900.0,
      value_pt: 1900.0,
      value_en: 1900.0,
      value_ru: 1900.0,
      value_es: 1900.0,
      destination: 'Cape Town',
      status: 'available',
      region: 'Southern Africa',
    },
    {
      id: 19238,
      country: 'Australia',
      value: 6300.0,
      value_pt: 6300.0,
      value_en: 6300.0,
      value_ru: 6300.0,
      value_es: 6300.0,
      destination: 'Sydney',
      status: 'reserved',
      region: 'Australasia',
    },
    {
      id: 85456,
      country: 'Japan',
      value: 5900.0,
      value_pt: 5900.0,
      value_en: 5900.0,
      value_ru: 5900.0,
      value_es: 5900.0,
      destination: 'Tokio',
      status: 'available',
      region: 'East Asia',
    },
    {
      id: 94565,
      country: 'China',
      value: 2900.0,
      value_pt: 2900.0,
      value_en: 2900.0,
      value_ru: 2900.0,
      value_es: 2900.0,
      destination: 'Beijing',
      status: 'available',
      region: 'East Asia',
    },
    {
      id: 32330,
      country: 'England',
      value: 2090.5,
      value_pt: 2090.5,
      value_en: 2090.5,
      value_ru: 2090.5,
      value_es: 2090.5,
      destination: 'London',
      status: 'available',
      region: 'British Isle',
    },
    {
      id: 14560,
      country: 'Canada',
      value: 2090.5,
      value_pt: 2090.5,
      value_en: 2090.5,
      value_ru: 2090.5,
      value_es: 2090.5,
      destination: 'Quebec',
      status: 'available',
      region: 'North America',
    },
    {
      id: 93800,
      country: 'Iceland',
      value: 6300.0,
      value_pt: 6300.0,
      value_en: 6300.0,
      value_ru: 6300.0,
      value_es: 6300.0,
      destination: 'Reykjav\xEDk',
      status: 'available',
      region: 'Nordics',
    },
    {
      id: 34239,
      country: 'Germany',
      value: 3070.5,
      value_pt: 3070.5,
      value_en: 3070.5,
      value_ru: 3070.5,
      value_es: 3070.5,
      destination: 'Berlin',
      status: 'available',
      region: 'Danube',
    },
    {
      id: 45611,
      country: 'Argentina',
      value: 3500.5,
      value_pt: 3500.5,
      value_en: 3500.5,
      value_ru: 3500.5,
      value_es: 3500.5,
      destination: 'Ushuaia',
      status: 'reserved',
      region: 'Latin America',
    },
  ];
  currentIdItem: any;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 'available', color: 'color-11', label: 'Available' },
        { value: 'reserved', color: 'color-08', label: 'Reserved' },
        { value: 'closed', color: 'color-07', label: 'Closed' },
      ],
      editProperties: {
        componentEditable: 'combo',
        disabledInitFilter: true,
        options: [
          { value: 'available', label: 'Available' },
          { value: 'reserved', label: 'Reserved' },
          { value: 'closed', label: 'Closed' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
      },
    },
    {
      property: 'region',
      label: 'Region',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        additionalHelpTooltip: 'Informe a regi\xE3o referida.',
        keydown: this.onKeyDown.bind(this, 'region'),
      },
    },
    {
      property: 'country',
      label: 'Country',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        additionalHelpTooltip: 'Informe o pa\xEDs referido.',
        keydown: this.onKeyDown.bind(this, 'country'),
      },
    },
    {
      property: 'destination',
      label: 'Destination',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        additionalHelpTooltip: 'Informe o destino dentro do pa\xEDs informado.',
        keydown: this.onKeyDown.bind(this, 'destination'),
      },
    },
    {
      property: 'value',
      label: 'Value',
      type: 'currency',
      format: 'USD',
      width: 220,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
    {
      property: 'value_en',
      label: 'Value (en)',
      type: 'currency',
      format: 'USD',
      width: 220,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
        locale: 'en'
      },
    },
    {
      property: 'value_pt',
      label: 'Value (pt)',
      type: 'currency',
      format: 'USD',
      width: 220,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
        locale: 'pt'
      },
    },
    {
      property: 'value_ru',
      label: 'Value (ru)',
      type: 'currency',
      format: 'USD',
      width: 220,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
        locale: 'ru'
      },
    },
    {
      property: 'value_es',
      label: 'Value (es)',
      type: 'currency',
      format: 'USD',
      width: 220,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
        locale: 'es'
      },
    },
  ];

  aggregatesDescriptor: Array<ThfAggregateDescriptor> = [
    { field: 'value', aggregate: 'sum', label: 'Total' },
    { field: 'value_en', aggregate: 'sum', label: 'Total (en)' },
    { field: 'value_pt', aggregate: 'sum', label: 'Total (pt)' },
    { field: 'value_ru', aggregate: 'sum', label: 'Total (ru)' },
    { field: 'value_es', aggregate: 'sum', label: 'Total (es)' },
  ];

  itemsUpdated: Array<any> = [];
  disabledIncludeButton!: boolean;
  gridRowsActionsWithItems!: ThfGridRowActions;

  ngOnInit() {
    this.gridRowsActionsWithItems = {
      title: 'Items',
      hiddenGrid: true,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          this.disabledIncludeButton = true;
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.dependents = [];
          this.currentIdItem = dataItem.id;
        }
        return new FormGroup({
          status: new FormControl(dataItem.status, [Validators.min(1)]),
          region: new FormControl(dataItem.region, [Validators.required]),
          country: new FormControl(dataItem.country, [Validators.required]),
          destination: new FormControl(dataItem.destination, [Validators.required]),
          value: new FormControl(dataItem.value, [Validators.required]),
          value_en: new FormControl(dataItem.value_en, [Validators.required]),
          value_pt: new FormControl(dataItem.value_pt, [Validators.required]),
          value_ru: new FormControl(dataItem.value_ru, [Validators.required]),
          value_es: new FormControl(dataItem.value_es, [Validators.required]),
        });
      },
      afterSave: this.onAfterSave.bind(this),
      beforeSave: this.onBeforeSave.bind(this),
      beforeInsert: this.onBeforeInsert.bind(this),
      beforeRemove: this.onBeforeRemove.bind(this),
      afterRemove: this.onAfterRemove.bind(this),
    };

    this.itemsUpdated = [...this.items];
  }

  onAfterSave(row: any) {
    console.log('onAfterSave(new): ', row);
  }

  onBeforeSave(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeSaveSubItems(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeInsert(newValue: any) {
    console.log('before insert new value: ', newValue);
    this.disabledIncludeButton = false;
    this.itemsUpdated = [...this.itemsUpdated, newValue];
    return true;
  }

  onBeforeInsertSubItems(newValue: { id: any; $uuidThfIncluded: any }) {
    newValue.id = newValue.$uuidThfIncluded;
    const item = this.itemsUpdated.find(
      (item) => item.id === this.currentIdItem
    );
    item.dependents = item.dependents
      ? [...item.dependents, newValue]
      : [newValue];
    return true;
  }

  onBeforeRemove(row: { id: any }) {
    return true;
  }

  onAfterRemove(row: any) {
    console.log('afterRemove: ', row);
    return true;
  }

  getChangedItems() {
    return this.thfGrid?.getChangedItems() || [];
  }

  getLabelChangedItems() {
    return JSON.stringify(this.thfGrid?.getChangedItems() || [], null, 2);
  }

  finishEditMode() {
    this.thfGrid.cleanRowActionsMode();
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.thfGrid.showAdditionalHelp(property);
    }
  }
}

  `,this.items=[{id:11234,country:"Brazil",value:1e3,value_pt:1e3,value_en:1e3,value_ru:1e3,value_es:1e3,destination:"Rio de Janeiro",status:"available",region:"Latin America"},{id:22467,country:"France",value:5e3,value_pt:5e3,value_en:5e3,value_ru:5e3,value_es:5e3,destination:"Paris",status:"closed",region:"Alps"},{id:40670,country:"Senegal",value:3200,value_pt:3200,value_en:3200,value_ru:3200,value_es:3200,destination:"Dakar",status:"closed",region:"Western Africa"},{id:34679,country:"Portugal",value:5500,value_pt:5500,value_en:5500,value_ru:5500,value_es:5500,destination:"Lisbon",status:"closed",region:"Mediterranean"},{id:48999,country:"Russia",value:6700,value_pt:6700,value_en:6700,value_ru:6700,value_es:6700,destination:"Moscow",status:"reserved",region:"Caucasus"},{id:48999,country:"United States",value:2700.49,value_pt:2700.49,value_en:2700.49,value_ru:2700.49,value_es:2700.49,destination:"Los Angeles",status:"reserved",region:"North America"},{id:54563,country:"Chile",value:2e3,value_pt:2e3,value_en:2e3,value_ru:2e3,value_es:2e3,destination:"Cusco",status:"available",region:"Latin America"},{id:64568,country:"Mexico",value:2100,value_pt:2100,value_en:2100,value_ru:2100,value_es:2100,destination:"Mexico City",status:"available",region:"Latin America"},{id:75456,country:"Ireland",value:6300,value_pt:6300,value_en:6300,value_ru:6300,value_es:6300,destination:"Cork",status:"reserved",region:"British Isle"},{id:23445,country:"South Africa",value:1900,value_pt:1900,value_en:1900,value_ru:1900,value_es:1900,destination:"Cape Town",status:"available",region:"Southern Africa"},{id:19238,country:"Australia",value:6300,value_pt:6300,value_en:6300,value_ru:6300,value_es:6300,destination:"Sydney",status:"reserved",region:"Australasia"},{id:85456,country:"Japan",value:5900,value_pt:5900,value_en:5900,value_ru:5900,value_es:5900,destination:"Tokio",status:"available",region:"East Asia"},{id:94565,country:"China",value:2900,value_pt:2900,value_en:2900,value_ru:2900,value_es:2900,destination:"Beijing",status:"available",region:"East Asia"},{id:32330,country:"England",value:2090.5,value_pt:2090.5,value_en:2090.5,value_ru:2090.5,value_es:2090.5,destination:"London",status:"available",region:"British Isle"},{id:14560,country:"Canada",value:2090.5,value_pt:2090.5,value_en:2090.5,value_ru:2090.5,value_es:2090.5,destination:"Quebec",status:"available",region:"North America"},{id:93800,country:"Iceland",value:6300,value_pt:6300,value_en:6300,value_ru:6300,value_es:6300,destination:"Reykjav\xEDk",status:"available",region:"Nordics"},{id:34239,country:"Germany",value:3070.5,value_pt:3070.5,value_en:3070.5,value_ru:3070.5,value_es:3070.5,destination:"Berlin",status:"available",region:"Danube"},{id:45611,country:"Argentina",value:3500.5,value_pt:3500.5,value_en:3500.5,value_ru:3500.5,value_es:3500.5,destination:"Ushuaia",status:"reserved",region:"Latin America"}],this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"status",label:"Status",type:"label",labels:[{value:"available",color:"color-11",label:"Available"},{value:"reserved",color:"color-08",label:"Reserved"},{value:"closed",color:"color-07",label:"Closed"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:"available",label:"Available"},{value:"reserved",label:"Reserved"},{value:"closed",label:"Closed"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}},{property:"region",label:"Region",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",additionalHelpTooltip:"Informe a regi\xE3o referida.",keydown:this.onKeyDown.bind(this,"region")}},{property:"country",label:"Country",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",additionalHelpTooltip:"Informe o pa\xEDs referido.",keydown:this.onKeyDown.bind(this,"country")}},{property:"destination",label:"Destination",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",additionalHelpTooltip:"Informe o destino dentro do pa\xEDs informado.",keydown:this.onKeyDown.bind(this,"destination")}},{property:"value",label:"Value",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_en",label:"Value (en)",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"en"}},{property:"value_pt",label:"Value (pt)",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"pt"}},{property:"value_ru",label:"Value (ru)",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"ru"}},{property:"value_es",label:"Value (es)",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"es"}}],this.aggregatesDescriptor=[{field:"value",aggregate:"sum",label:"Total"},{field:"value_en",aggregate:"sum",label:"Total (en)"},{field:"value_pt",aggregate:"sum",label:"Total (pt)"},{field:"value_ru",aggregate:"sum",label:"Total (ru)"},{field:"value_es",aggregate:"sum",label:"Total (es)"}],this.itemsUpdated=[]}ngOnInit(){this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!0,actionEdit:(a,r)=>(r==="include"&&!a.id&&(console.log("mode: ",r),this.disabledIncludeButton=!0,a.id=a.$uuidThfIncluded,a.dependents=[],this.currentIdItem=a.id),new B({status:new f(a.status,[R.min(1)]),region:new f(a.region,[R.required]),country:new f(a.country,[R.required]),destination:new f(a.destination,[R.required]),value:new f(a.value,[R.required]),value_en:new f(a.value_en,[R.required]),value_pt:new f(a.value_pt,[R.required]),value_ru:new f(a.value_ru,[R.required]),value_es:new f(a.value_es,[R.required])})),afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this)},this.itemsUpdated=[...this.items]}onAfterSave(a){console.log("onAfterSave(new): ",a)}onBeforeSave(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeSaveSubItems(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeInsert(a){return console.log("before insert new value: ",a),this.disabledIncludeButton=!1,this.itemsUpdated=[...this.itemsUpdated,a],!0}onBeforeInsertSubItems(a){a.id=a.$uuidThfIncluded;let r=this.itemsUpdated.find(n=>n.id===this.currentIdItem);return r.dependents=r.dependents?[...r.dependents,a]:[a],!0}onBeforeRemove(a){return!0}onAfterRemove(a){return console.log("afterRemove: ",a),!0}getChangedItems(){return this.thfGrid?.getChangedItems()||[]}getLabelChangedItems(){return JSON.stringify(this.thfGrid?.getChangedItems()||[],null,2)}finishEditMode(){this.thfGrid.cleanRowActionsMode()}onKeyDown(a,r){r.code==="F9"&&this.thfGrid.showAdditionalHelp(a)}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-editing-fluid-currency-doc"]],viewQuery:function(r,n){if(r&1&&(w(Bi,7),w(Hi,5)),r&2){let l;D(l=A())&&(n.poModal=l.first),D(l=A())&&(n.thfGrid=l.first)}},standalone:!1,decls:12,vars:14,consts:[["gridComponent",""],["modal",""],[1,"po-font-text-large-bold"],["p-label","Finaliza modo edi\xE7\xE3o",1,"po-mr-2",3,"p-click"],["p-label","Get itens alterados",3,"p-click","p-disabled"],[3,"t-height","t-selectable","t-single-select","t-items","t-columns","t-grid-row-actions","t-aggregates","t-show-footer-aggregates","t-actions-right","t-sortable"],["p-title","Itens que foram alterados"],["class","code",4,"ngIf"],[3,"htmlCode","tsCode"],[1,"code"]],template:function(r,n){if(r&1){let l=I();i(0,"po-container")(1,"span",2),e(2,"Edi\xE7\xE3o com Padroniza\xE7\xE3o do N\xFAmero de Casas Decimais"),t(),o(3,"po-divider"),i(4,"po-button",3),g("p-click",function(){return p(l),c(n.finishEditMode())}),t(),i(5,"po-button",4),g("p-click",function(){return p(l),c(n.poModal.open())}),t(),o(6,"thf-grid",5,0),i(8,"po-modal",6,1),F(10,Wi,3,1,"div",7),t(),o(11,"app-code-accordion-doc",8),t()}if(r&2){let l,E;m(5),s("p-disabled",((l=n.getChangedItems())==null?null:l.length)===0),m(),s("t-height",400)("t-selectable",!0)("t-single-select",!0)("t-items",n.items)("t-columns",n.columnWithItems)("t-grid-row-actions",n.gridRowsActionsWithItems)("t-aggregates",n.aggregatesDescriptor)("t-show-footer-aggregates",!0)("t-actions-right",!0)("t-sortable",!0),m(4),s("ngIf",(E=n.getChangedItems())==null?null:E.length),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[se,H,v,P,we,M,T],encapsulation:2})}}return d})();var Ft=(()=>{class d{constructor(){this.htmlCode=`<thf-grid
  [t-items]="products"
  [t-columns]="columns"
  [t-grid-row-actions]="gridRowActions"
  [t-auto-size]="true"
  [t-actions-right]="true"
/>`,this.tsCode=`import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ThfGridColumn,
  ThfGridRowActions
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-dynamic-properties',
  templateUrl: './thf-grid-dynamic-properties.component.html',
  standalone: false,
})
export class ThfGridEditingInlineDocComponent {
  gridRowActions: ThfGridRowActions;
  editForm!: FormGroup;

  products = [
    { 
      id: 1, 
      status: { value: 'active', label: 'Ativo' },
      name: 'Smartphone', 
      price: 999.99, 
      discount: 0, 
    },
    { 
      id: 2, 
      status: { value: 'inactive', label: 'Inativo' },
      name: 'Tablet', 
      price: 499.99, 
      discount: 50, 
    },
    { 
      id: 3, 
      status: { value: 'active', label: 'Ativo' },
      name: 'Office Chair', 
      price: 299.99, 
      discount: 10, 
    }
  ];

  columns: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'ID',
      editProperties: {
        disabled: true
      }
    },
    {
      property: 'status',
      label: 'Status',
      editProperties: {
        componentEditable: 'combo',
        options: [
          { value: 'active', label: 'Ativo' },
          { value: 'inactive', label: 'Inativo' }
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        removeInitialFilter: true,
        controlValueWithLabel: true,
      }
    },
    {
      property: 'name',
      label: 'Nome do Produto',
      editProperties: {
        readonly: (rowData) => rowData.status === 'inactive'
      }
    },
    {
      property: 'price',
      label: 'Pre\xE7o',
      editProperties: {
        readonly: true
      }
    },
    {
      property: 'discount',
      label: 'Desconto (%)',
      editProperties: {
        disabled: (rowData) => rowData.status === 'inactive'
      }
    },
  ];

  constructor() {
    this.gridRowActions = {
      title: 'Produtos',
      actionEdit: this.onEdit.bind(this),
      validateField: this.onValidate.bind(this),
    };
  }

  onEdit(dataItem: any, mode: string) {
    console.log('Editando produto:', dataItem, 'Modo:', mode);

    this.editForm = new FormGroup({
      id: new FormControl(dataItem.id),
      name: new FormControl(dataItem.name),
      price: new FormControl(dataItem.price),
      discount: new FormControl(dataItem.discount),
      status: new FormControl(dataItem.status),
    });

    return this.editForm;
  }

  onValidate(updatedField: any, columnProperty: any) {
    console.log('onValidateField:', updatedField, columnProperty);
    return true;
  }
}`,this.products=[{id:1,status:{value:"active",label:"Ativo"},name:"Smartphone",price:999.99,discount:0},{id:2,status:{value:"inactive",label:"Inativo"},name:"Tablet",price:499.99,discount:50},{id:3,status:{value:"active",label:"Ativo"},name:"Office Chair",price:299.99,discount:10}],this.columns=[{property:"id",label:"ID",editProperties:{disabled:!0}},{property:"status",label:"Status",editProperties:{componentEditable:"combo",options:[{value:"active",label:"Ativo"},{value:"inactive",label:"Inativo"}],fieldLabel:"label",fieldValue:"value",removeInitialFilter:!0,controlValueWithLabel:!0}},{property:"name",label:"Nome do Produto",editProperties:{readonly:a=>a.status==="inactive"}},{property:"price",label:"Pre\xE7o",editProperties:{readonly:!0}},{property:"discount",label:"Desconto (%)",editProperties:{disabled:a=>a.status==="inactive"}}],this.gridRowActions={title:"Produtos",actionEdit:this.onEdit.bind(this),validateField:this.onValidate.bind(this)}}onEdit(a,r){return console.log("Editando produto:",a,"Modo:",r),this.editForm=new B({id:new f(a.id),name:new f(a.name),price:new f(a.price),discount:new f(a.discount),status:new f(a.status)}),this.editForm}onValidate(a,r){return console.log("onValidateField:",a,r),!0}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-dynamic-properties"]],standalone:!1,decls:6,vars:7,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-items","t-columns","t-grid-row-actions","t-auto-size","t-actions-right"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Edi\xE7\xE3o com Propriedades din\xE2micas"),t(),o(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-items",n.products)("t-columns",n.columns)("t-grid-row-actions",n.gridRowActions)("t-auto-size",!0)("t-actions-right",!0),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,M,T],encapsulation:2})}}return d})();var Ji=["gridComponent"],It=(()=>{class d{constructor(){this.htmlCode=`<thf-grid
      #gridComponent
      t-spacing="extraSmall"
      t-components-size="small"
      [t-columns]="columnWithItems"a
      [t-items]="items"
      [t-height]="500"
      [t-page-size-virtual]="20"
      [t-virtual-scroll]="true"
      [t-resizable]="true"
      [t-auto-size]="true"
      [t-auto-size-on-scroll]="true"
    />`,this.tsCode=`import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ThfGridColumn,
  ThfGridComponent
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-auto-fit-scroll',
  templateUrl: './thf-grid-auto-fit-scroll.component.html',
  standalone: false,
})
export class ThfGridAutoFitScrollComponent implements OnInit {
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
    },
    {
      property: 'name',
      label: 'Nome',
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 1, color: 'color-11', label: 'Ativo' },
        { value: 2, color: 'color-08', label: 'Inativo' },
      ],
    },
    {
      property: 'values',
      label: 'Values',
    },

    {
      property: 'number',
      label: 'Number',
      type: 'number',
    },
    {
      property: 'datepicker',
      label: 'datepicker',
    },
    {
      property: 'otherStatus',
      label: 'Outro Status',
    },
    {
      property: 'select',
      label: 'select',
    },
    {
      property: 'switch',
      label: 'switch',
    },
    {
      property: 'decimal',
      label: 'decimal',
      type: 'currency',
    },
    {
      property: 'checkbox',
      label: 'checkbox',
    },
    {
      property: 'valuesx',
      label: 'Valuesx',
    },
  ];

  items: any[] = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      status: 1,
      values: [1495831666871],
      valuesx: [1495831666871],
      otherStatus: [233],
      number: 1,
      datepicker: '1980-11-01',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      status: 2,
      values: [1495831698598],
      valuesx: [1495831698598],
      otherStatus: [233],
      number: 2,
      datepicker: '1980-11-02',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      values: [1495832652942],
      valuesx: [1495832652942],
      otherStatus: [3],
      number: 3,
      datepicker: '1980-11-03',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      values: [1495832683682],
      valuesx: [1495832683682],
      otherStatus: [3],
      number: 4,
      datepicker: '1980-11-04',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      values: [1495833068596],
      valuesx: [1495833068596],
      otherStatus: [233],
      number: 5,
      datepicker: '1980-11-05',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      values: [1495833068597],
      valuesx: [1495833068597],
      otherStatus: [233],
      number: 6,
      datepicker: '1980-11-06',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
  ];

  ngOnInit() {
    for (let i = 1; i <= 600; i++) {
      const prop = 'property' + i;
      this.columnWithItems.push({
        property: prop,
        label: 'Dynamic' + i,
        editProperties: { disabled: false },
      });
    }

    let itemsUpdatedNew = [];

    const baseItem = this.items[0];
    for (let i = 1; i <= 10000; i++) {
      const randomId = Date.now() + i;
      const newItem = {
        ...baseItem,
        id: randomId + i,
        name: baseItem.name +  i,
      };
      for (let j = 1; j <= 600; j++) {
        newItem['property'+j] = 'Valor'+j;
      }

      itemsUpdatedNew.push(newItem);
    }

    this.items = itemsUpdatedNew;
  }
}`,this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome"},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}]},{property:"values",label:"Values"},{property:"number",label:"Number",type:"number"},{property:"datepicker",label:"datepicker"},{property:"otherStatus",label:"Outro Status"},{property:"select",label:"select"},{property:"switch",label:"switch"},{property:"decimal",label:"decimal",type:"currency"},{property:"checkbox",label:"checkbox"},{property:"valuesx",label:"Valuesx"}],this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],valuesx:[1495831666871],otherStatus:[233],number:1,datepicker:"1980-11-01",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],valuesx:[1495831698598],otherStatus:[233],number:2,datepicker:"1980-11-02",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],valuesx:[1495832652942],otherStatus:[3],number:3,datepicker:"1980-11-03",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],valuesx:[1495832683682],otherStatus:[3],number:4,datepicker:"1980-11-04",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],valuesx:[1495833068596],otherStatus:[233],number:5,datepicker:"1980-11-05",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],valuesx:[1495833068597],otherStatus:[233],number:6,datepicker:"1980-11-06",select:"3",switch:!0,decimal:123.45,checkbox:!0}]}ngOnInit(){let a=[],r=this.items[0];for(let n=1;n<=100;n++){let l=Date.now()+n,E=O(V({},r),{id:l+n,name:`${r.name} ${n}${n}`});a.push(E)}this.items=a}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-auto-fit-scroll"]],viewQuery:function(r,n){if(r&1&&w(Ji,5),r&2){let l;D(l=A())&&(n.thfGrid=l.first)}},standalone:!1,decls:7,vars:10,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-spacing","extraSmall","t-components-size","small",3,"t-columns","t-items","t-height","t-page-size-virtual","t-virtual-scroll","t-resizable","t-auto-size","t-auto-size-on-scroll"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",1),e(2,"Grid utilizando auto-size e auto-fit-on-scroll"),t(),o(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("t-columns",n.columnWithItems)("t-items",n.items)("t-height",500)("t-page-size-virtual",20)("t-virtual-scroll",!0)("t-resizable",!0)("t-auto-size",!0)("t-auto-size-on-scroll",!0),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,M,T],encapsulation:2})}}return d})();var Zi=["gridComponent"],Lt=(()=>{class d{constructor(){this.htmlCode=`
   <thf-grid
      #gridComponent
      t-spacing="small"
      [t-selectable]="true"
      [t-single-select]="true"
      [t-columns]="columnWithItems"
      [t-items]="items"
      [t-grid-row-actions]="gridRowsActionsWithItems"
      [t-actions-right]="true"
      [t-auto-size]="false"
      [t-height]="500"
      [t-virtual-columns]="true"
      [t-virtual-scroll]="true"
    />
  `,this.tsCode=`
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ThfGridColumn,
  ThfGridComponent,
  ThfGridEditProperties,
  ThfGridRowActions,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-virtual-doc',
  templateUrl: './thf-grid-virtual-doc.component.html',
  styleUrl: './thf-grid-virtual-doc.component.css',
  standalone: false,
})
export class ThfGridVirtualDocComponent implements OnInit {
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;
  gridRowsActionsWithItems!: ThfGridRowActions;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
    },
    {
      property: 'name',
      label: 'Nome',
      editProperties: {
        required: true,
        componentEditable: 'input',
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        additionalHelpTooltip: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
        keydown: this.onKeyDown.bind(this, 'name'),
      },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 1, color: 'color-11', label: 'Ativo' },
        { value: 2, color: 'color-08', label: 'Inativo' },
      ],
      editProperties: {
        componentEditable: 'combo',
        required: true,
        disabledInitFilter: true,
        options: [
          { value: 1, label: 'Ativo' },
          { value: 2, label: 'Inativo' },
          { value: 0, label: 'Other' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
        additionalHelpTooltip: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'values',
      label: 'Values',
      editProperties: {
        componentEditable: 'lookup',
        searchService: 'https://po-sample-api.onrender.com/v1/heroes',
        fieldValue: 'value',
        fieldLabel: 'label',
        multiple: true,
        required: false,
        errorMessage: 'Obrigat\xF3rio',
        additionalHelpTooltip:
          'Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.',
        help: 'Input lookup',
        keydown: this.onKeyDown.bind(this, 'values'),
        controlValueWithLabel: true,
      },
    },

    {
      property: 'number',
      label: 'Number',
      type: 'number',
      editProperties: {
        componentEditable: 'number',
        errorMessage: 'Number \xE9 obrigat\xF3rio',
        help: 'Input number',
        additionalHelpTooltip: 'Digite um n\xFAmero aqui',
      },
    },
    {
      property: 'datepicker',
      label: 'datepicker',
      editProperties: {
        componentEditable: 'datepicker',
        errorMessage: 'Datepicker \xE9 obrigat\xF3rio',
        help: 'Entre com a data',
        additionalHelpTooltip: 'Valor do tipo date',
      },
    },
    {
      property: 'otherStatus',
      label: 'Outro Status',
      editProperties: {
        componentEditable: 'multiselect',
        options: [
          { value: 123, label: 'Ativo' },
          { value: 233, label: 'Inativo' },
          { value: 3, label: 'Other' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        errorMessage: 'Obrigat\xF3rio',
        additionalHelpTooltip: 'Marque um ou mais status, conforme necess\xE1rio.',
        help: 'status',
        keydown: this.onKeyDown.bind(this, 'otherStatus'),
        controlValueWithLabel: true,
      },
    },
    {
      property: 'select',
      label: 'select',
      editProperties: {
        componentEditable: 'select',
        options: [
          { value: 123, label: 'Ativo' },
          { value: 233, label: 'Inativo' },
          { value: 3, label: 'Other' },
        ],
        errorMessage: 'select \xE9 obrigat\xF3rio',
        additionalHelpTooltip: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'switch',
      label: 'switch',
      editProperties: {
        componentEditable: 'switch',
        hideLabelStatus: false,
        additionalHelpTooltip: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'decimal',
      label: 'decimal',
      type: 'currency',
      editProperties: {
        componentEditable: 'decimal',
        additionalHelpTooltip: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'checkbox',
      label: 'checkbox',
      editProperties: {
        componentEditable: 'checkbox',
        disabled: false,
        help: 'lorem impsum',
        additionalHelpTooltip: ' ok ok ok',
      },
    },
    {
      property: 'valuesx',
      label: 'Valuesx',
      editProperties: {
        componentEditable: 'lookup',
        searchService: 'https://po-sample-api.onrender.com/v1/heroes',
        fieldValue: 'value',
        fieldLabel: 'label',
        multiple: true,
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        additionalHelpTooltip:
          'Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.',
        help: 'Input lookup',
        keydown: this.onKeyDown.bind(this, 'valuesx'),
        controlValueWithLabel: true,
      },
    },
  ];

  items: any[] = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      status: 1,
      values: [1495831666871],
      valuesx: [1495831666871],
      otherStatus: [233],
      number: 1,
      datepicker: '1980-11-01',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      status: 2,
      values: [1495831698598],
      valuesx: [1495831698598],
      otherStatus: [233],
      number: 2,
      datepicker: '1980-11-02',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      values: [1495832652942],
      valuesx: [1495832652942],
      otherStatus: [3],
      number: 3,
      datepicker: '1980-11-03',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      values: [1495832683682],
      valuesx: [1495832683682],
      otherStatus: [3],
      number: 4,
      datepicker: '1980-11-04',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      values: [1495833068596],
      valuesx: [1495833068596],
      otherStatus: [233],
      number: 5,
      datepicker: '1980-11-05',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      values: [1495833068597],
      valuesx: [1495833068597],
      otherStatus: [233],
      number: 6,
      datepicker: '1980-11-06',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
  ];

  form!: FormGroup;
  itemsUpdated: Array<any> = [];
  editProperties!: ThfGridEditProperties;
  currentIdItem: any;

  ngOnInit() {
    this.editProperties = {
      actionEdit: this.setFormGroup.bind(this),
    };

    for (let i = 1; i <= 600; i++) {
      const prop = 'property' + i;
      this.columnWithItems.push({
        property: prop,
        label: 'Dynamic' + i,
        editProperties: { disabled: false },
      });
    }

    let itemsUpdatedNew = [];

    const baseItem = this.items[0];
    for (let i = 1; i <= 10000; i++) {
      const randomId = Date.now() + i;
      const newItem = {
        ...baseItem,
        id: randomId + i,
        name: baseItem.name +  i,
      };
      for (let j = 1; j <= 600; j++) {
        newItem['property'+j] = 'Valor'+j;
      }

      itemsUpdatedNew.push(newItem);
    }

    this.items = itemsUpdatedNew;

    this.gridRowsActionsWithItems = {
      title: 'Items',
      hiddenGrid: true,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.dependents = [];
          this.currentIdItem = dataItem.id;
        }
        let group: any = {
          name: new FormControl(dataItem.name),
          status: new FormControl(dataItem.status, [Validators.min(1)]),
          values: new FormControl(dataItem.values, [Validators.required]),
          valuesx: new FormControl(dataItem.values, [Validators.required]),
          otherStatus: new FormControl(dataItem.otherStatus),
          number: new FormControl(dataItem.number),
          datepicker: new FormControl(dataItem.datepicker),
          select: new FormControl(dataItem.select),
          switch: new FormControl(dataItem.switch),
          decimal: new FormControl(dataItem.decimal),
          checkbox: new FormControl(dataItem.checkbox),
        };
        for (let i = 1; i <= 600; i++) {
          group['property'+i] = new FormControl(dataItem['property'+i]);
        }

        this.form = new FormGroup(group);
        return this.form;
      },
      afterSave: this.onAfterSave.bind(this),
      beforeSave: this.onBeforeSave.bind(this),
      beforeInsert: this.onBeforeInsert.bind(this),
      beforeRemove: this.onBeforeRemove.bind(this),
      afterRemove: this.onAfterRemove.bind(this),
    };

    this.itemsUpdated = [...this.items];
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  onBeforeSave(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeSaveSubItems(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeInsert(newValue: any) {
    console.log('before insert new value: ', newValue);
    this.itemsUpdated = [...this.itemsUpdated, newValue];
    return true;
  }

  onBeforeInsertSubItems(newValue: { id: any; $uuidThfIncluded: any }) {
    newValue.id = newValue.$uuidThfIncluded;
    const item = this.itemsUpdated.find(
      (item) => item.id === this.currentIdItem
    );
    item.dependents = item.dependents
      ? [...item.dependents, newValue]
      : [newValue];
    return true;
  }

  onBeforeRemove(row: { id: any }) {
    return true;
  }

  onAfterSave(row: any) {
    console.log('onAfterSave(new): ', row);
  }

  onAfterRemove(row: any) {
    console.log('afterRemove: ', row);
    return true;
  }

  setFormGroup(dataItem: any) {
    this.form = new FormGroup({
      id: new FormControl(dataItem.id, [Validators.required]),
      name: new FormControl(dataItem.name),
      city: new FormControl(dataItem.city),
      birthdate: new FormControl(dataItem.birthdate),
      status: new FormControl(dataItem.status),
      email: new FormControl(dataItem.email),
    });
    return this.form;
  }
}
  `,this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome",editProperties:{required:!0,componentEditable:"input",errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,additionalHelpTooltip:"Informe pelo menos o primeiro nome.",help:"Input text",keydown:this.onKeyDown.bind(this,"name")}},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}],editProperties:{componentEditable:"combo",required:!0,disabledInitFilter:!0,options:[{value:1,label:"Ativo"},{value:2,label:"Inativo"},{value:0,label:"Other"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value",additionalHelpTooltip:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"values",label:"Values",editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!1,errorMessage:"Obrigat\xF3rio",additionalHelpTooltip:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",help:"Input lookup",keydown:this.onKeyDown.bind(this,"values"),controlValueWithLabel:!0}},{property:"number",label:"Number",type:"number",editProperties:{componentEditable:"number",errorMessage:"Number \xE9 obrigat\xF3rio",help:"Input number",additionalHelpTooltip:"Digite um n\xFAmero aqui"}},{property:"datepicker",label:"datepicker",editProperties:{componentEditable:"datepicker",errorMessage:"Datepicker \xE9 obrigat\xF3rio",help:"Entre com a data",additionalHelpTooltip:"Valor do tipo date"}},{property:"otherStatus",label:"Outro Status",editProperties:{componentEditable:"multiselect",options:[{value:123,label:"Ativo"},{value:233,label:"Inativo"},{value:3,label:"Other"}],fieldLabel:"label",fieldValue:"value",errorMessage:"Obrigat\xF3rio",additionalHelpTooltip:"Marque um ou mais status, conforme necess\xE1rio.",help:"status",keydown:this.onKeyDown.bind(this,"otherStatus"),controlValueWithLabel:!0}},{property:"select",label:"select",editProperties:{componentEditable:"select",options:[{value:123,label:"Ativo"},{value:233,label:"Inativo"},{value:3,label:"Other"}],errorMessage:"select \xE9 obrigat\xF3rio",additionalHelpTooltip:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"switch",label:"switch",editProperties:{componentEditable:"switch",hideLabelStatus:!1,additionalHelpTooltip:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"decimal",label:"decimal",type:"currency",editProperties:{componentEditable:"decimal",additionalHelpTooltip:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"checkbox",label:"checkbox",editProperties:{componentEditable:"checkbox",disabled:!1,help:"lorem impsum",additionalHelpTooltip:" ok ok ok"}},{property:"valuesx",label:"Valuesx",editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!0,errorMessage:"Obrigat\xF3rio",additionalHelpTooltip:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",help:"Input lookup",keydown:this.onKeyDown.bind(this,"valuesx"),controlValueWithLabel:!0}}],this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],valuesx:[1495831666871],otherStatus:[233],number:1,datepicker:"1980-11-01",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],valuesx:[1495831698598],otherStatus:[233],number:2,datepicker:"1980-11-02",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],valuesx:[1495832652942],otherStatus:[3],number:3,datepicker:"1980-11-03",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],valuesx:[1495832683682],otherStatus:[3],number:4,datepicker:"1980-11-04",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],valuesx:[1495833068596],otherStatus:[233],number:5,datepicker:"1980-11-05",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],valuesx:[1495833068597],otherStatus:[233],number:6,datepicker:"1980-11-06",select:"3",switch:!0,decimal:123.45,checkbox:!0}],this.itemsUpdated=[]}ngOnInit(){this.editProperties={actionEdit:this.setFormGroup.bind(this)};for(let n=1;n<=600;n++){let l=`property${n}`;this.columnWithItems.push({property:l,label:`Dynamic ${n}`,editProperties:{disabled:!1}})}let a=[],r=this.items[0];for(let n=1;n<=1e4;n++){let l=Date.now()+n,E=O(V({},r),{id:l+n,name:`${r.name} ${n}`});for(let C=1;C<=600;C++)E[`property${C}`]=`Valor ${C}`;a.push(E)}this.items=a,this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!0,actionEdit:(n,l)=>{l==="include"&&!n.id&&(console.log("mode: ",l),n.id=n.$uuidThfIncluded,n.dependents=[],this.currentIdItem=n.id);let E={name:new f(n.name),status:new f(n.status,[R.min(1)]),values:new f(n.values,[R.required]),valuesx:new f(n.values,[R.required]),otherStatus:new f(n.otherStatus),number:new f(n.number),datepicker:new f(n.datepicker),select:new f(n.select),switch:new f(n.switch),decimal:new f(n.decimal),checkbox:new f(n.checkbox)};for(let C=1;C<=600;C++)E[`property${C}`]=new f(n[`property${C}`]);return this.form=new B(E),this.form},afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this)},this.itemsUpdated=[...this.items]}onKeyDown(a,r){r.code==="F9"&&this.thfGrid.showAdditionalHelp(a)}onBeforeSave(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeSaveSubItems(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeInsert(a){return console.log("before insert new value: ",a),this.itemsUpdated=[...this.itemsUpdated,a],!0}onBeforeInsertSubItems(a){a.id=a.$uuidThfIncluded;let r=this.itemsUpdated.find(n=>n.id===this.currentIdItem);return r.dependents=r.dependents?[...r.dependents,a]:[a],!0}onBeforeRemove(a){return!0}onAfterSave(a){console.log("onAfterSave(new): ",a)}onAfterRemove(a){return console.log("afterRemove: ",a),!0}setFormGroup(a){return this.form=new B({id:new f(a.id,[R.required]),name:new f(a.name),city:new f(a.city),birthdate:new f(a.birthdate),status:new f(a.status),email:new f(a.email)}),this.form}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-virtual-doc"]],viewQuery:function(r,n){if(r&1&&w(Zi,5),r&2){let l;D(l=A())&&(n.thfGrid=l.first)}},standalone:!1,decls:7,vars:12,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-spacing","small",3,"t-selectable","t-single-select","t-columns","t-items","t-grid-row-actions","t-actions-right","t-auto-size","t-height","t-virtual-columns","t-virtual-scroll"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",1),e(2,"Grid utilizando virtual-columns e virtual-scroll"),t(),o(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("t-selectable",!0)("t-single-select",!0)("t-columns",n.columnWithItems)("t-items",n.items)("t-grid-row-actions",n.gridRowsActionsWithItems)("t-actions-right",!0)("t-auto-size",!1)("t-height",500)("t-virtual-columns",!0)("t-virtual-scroll",!0),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,M,T],encapsulation:2})}}return d})();var Mt=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid"]],standalone:!1,decls:14,vars:0,consts:[["p-title","THF-Grid","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview","",1,"samples-container"],["labs","",1,"samples-container"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-grid")(2,"div",1),o(3,"app-thf-grid-basic-doc")(4,"app-thf-grid-editing-inline-doc")(5,"app-thf-grid-row-actions-doc")(6,"app-thf-grid-aggregates-doc")(7,"app-thf-grid-editing-fluid-currency-doc")(8,"app-thf-grid-delete-service-doc")(9,"app-thf-grid-virtual-doc")(10,"app-thf-grid-dynamic-properties")(11,"app-thf-grid-auto-fit-scroll"),t(),i(12,"div",2),o(13,"app-thf-grid-labs-doc"),t()()())},dependencies:[X,ht,Tt,wt,Dt,At,kt,qt,_t,Ft,It,Lt],encapsulation:2})}}return d})();function Yi(d,q){if(d&1){let a=I();i(0,"div",7)(1,"po-container",8)(2,"po-input",9),h("ngModelChange",function(n){p(a);let l=u();return b(l.label,n)||(l.label=n),c(n)}),t(),i(3,"po-input",10),h("ngModelChange",function(n){p(a);let l=u();return b(l.help,n)||(l.help=n),c(n)}),t(),i(4,"po-input",11),h("ngModelChange",function(n){p(a);let l=u();return b(l.additionalHelpTooltip,n)||(l.additionalHelpTooltip=n),c(n)}),t(),i(5,"po-input",12),h("ngModelChange",function(n){p(a);let l=u();return b(l.placeholder,n)||(l.placeholder=n),c(n)}),t(),i(6,"po-input",13),h("ngModelChange",function(n){p(a);let l=u();return b(l.fieldErrorMessage,n)||(l.fieldErrorMessage=n),c(n)}),t(),i(7,"po-select",14),h("ngModelChange",function(n){p(a);let l=u();return b(l.fieldLabel,n)||(l.fieldLabel=n),c(n)}),t(),i(8,"po-select",15),h("ngModelChange",function(n){p(a);let l=u();return b(l.fieldValue,n)||(l.fieldValue=n),c(n)}),t(),i(9,"po-input",16),h("ngModelChange",function(n){p(a);let l=u();return b(l.fieldFormat,n)||(l.fieldFormat=n),c(n)}),g("p-change",function(n){p(a);let l=u();return c(l.onFieldFormatChange(n))}),t()(),i(10,"po-container",8)(11,"po-checkbox-group",17),h("ngModelChange",function(n){p(a);let l=u();return b(l.columnsName,n)||(l.columnsName=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.updateColumns())}),t(),i(12,"po-checkbox-group",18),h("ngModelChange",function(n){p(a);let l=u();return b(l.gridPropertiesName,n)||(l.gridPropertiesName=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.updateGridProperties())}),t()(),i(13,"po-container",8)(14,"po-checkbox-group",19),h("ngModelChange",function(n){p(a);let l=u();return b(l.otherProperties,n)||(l.otherProperties=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.changeOtherPropertiesOptions())}),t()(),i(15,"po-container",8)(16,"po-radio-group",20),h("ngModelChange",function(n){p(a);let l=u();return b(l.lookupModalSize,n)||(l.lookupModalSize=n),c(n)}),t(),i(17,"po-radio-group",21),h("ngModelChange",function(n){p(a);let l=u();return b(l.searchOnEnter,n)||(l.searchOnEnter=n),c(n)}),t()(),i(18,"po-container",8)(19,"po-radio-group",22),h("ngModelChange",function(n){p(a);let l=u();return b(l.size,n)||(l.size=n),c(n)}),t(),i(20,"po-textarea",23),h("ngModelChange",function(n){p(a);let l=u();return b(l.literals,n)||(l.literals=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeLiterals())}),t(),i(21,"po-textarea",24),h("ngModelChange",function(n){p(a);let l=u();return b(l.filterSearchSelect,n)||(l.filterSearchSelect=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeFilterSearchSelects())}),t(),i(22,"po-textarea",25),h("ngModelChange",function(n){p(a);let l=u();return b(l.keysLabel,n)||(l.keysLabel=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeKeysLabel())}),t()()(),i(23,"div",26)(24,"po-button",27),g("p-click",function(){p(a);let n=u();return c(n.restore())}),t()()}if(d&2){let a=u();m(2),S("ngModel",a.label),m(),S("ngModel",a.help),m(),S("ngModel",a.additionalHelpTooltip),m(),S("ngModel",a.placeholder),m(),S("ngModel",a.fieldErrorMessage),m(),S("ngModel",a.fieldLabel),s("p-options",a.fieldLabelOptions),m(),S("ngModel",a.fieldValue),s("p-options",a.fieldValueOptions),m(),S("ngModel",a.fieldFormat),m(2),S("ngModel",a.columnsName),s("p-columns",4)("p-options",a.columnsOptions),m(),S("ngModel",a.gridPropertiesName),s("p-columns",4)("p-options",a.gridPropertiesOptions),m(2),s("p-columns",4)("p-options",a.otherPropertiesOptions),S("ngModel",a.otherProperties),m(2),s("p-columns",3)("p-options",a.lookupModalSizeOptions),S("ngModel",a.lookupModalSize),m(),S("ngModel",a.searchOnEnter),s("p-options",a.searchOnEnterOptions),m(2),S("ngModel",a.size),s("p-options",a.sizesOptions),m(),S("ngModel",a.literals),m(),S("ngModel",a.filterSearchSelect),m(),S("ngModel",a.keysLabel)}}var Rt=(()=>{class d{constructor(){this.htmlCode=`<po-container>
  <span class="po-font-text-large-bold">Labs</span>
  <po-divider class="po-divider-mb-0-75"></po-divider>

  <thf-lookup
    name="lookup"
    t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    [t-additional-help-tooltip]="additionalHelpTooltip"
    [t-auto-height]="otherProperties.includes('autoHeight')"
    [t-clean]="otherProperties.includes('clean')"
    [t-columns]="columns"
    [t-disabled]="otherProperties.includes('disabled')"
    [t-error-limit]="otherProperties.includes('fieldErrorLimit')"
    [t-field-error-message]="fieldErrorMessage"
    [t-field-format]="fieldFormat"
    [t-field-label]="fieldLabel"
    [t-field-value]="fieldValue"
    [t-field-error-message]="fieldErrorMessage"
    [t-filter-search-select]="customFilterSearchSelect"
    [t-grid-properties]="gridProperties"
    [t-help]="help"
    [t-keys-label]="customKeysLabel"
    [t-label]="label"
    [t-literals]="customLiterals"
    [t-modal-size]="lookupModalSize"
    [t-multiple]="otherProperties.includes('multiple')"
    [t-no-autocomplete]="otherProperties.includes('noAutoComplete')"
    [t-optional]="otherProperties.includes('optional')"
    [t-placeholder]="placeholder"
    [t-required]="otherProperties.includes('required')"
    [t-show-required]="otherProperties.includes('showRequired')"
    [t-search-on-enter]="searchOnEnter"
    [t-size]="size"
    [t-label-text-wrap]="otherProperties?.includes('labelTextWrap')"
    (t-change)="changeEvent('t-change')"
    (t-error)="changeEvent('t-error')"
    (t-selected)="changeEvent('t-selected')"
    (t-focus)="changeEvent('t-focus')"
    (t-keydown)="changeEvent('t-keydown')"
    (t-rows-selected)="changeEvent('t-rows-selected')"
    [(ngModel)]="lookupSingle"
  ></thf-lookup>

  <po-container class="po-mt-1" style="display: flex">
    <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
  </po-container>

    <div class="po-row po-mt-2 po-mb-2" style="display: block">
      <po-container class="po-mb-2" style="display: flex">
        <po-input
          class="po-md-6"
          name="label"
          [(ngModel)]="label"
          p-clean
          p-label="Label"
        ></po-input>
        <po-input
          class="po-md-6"
          name="help"
          [(ngModel)]="help"
          p-clean
          p-label="Help"
        ></po-input>
        <po-input
          class="po-md-6"
          name="additionalHelpTooltip"
          [(ngModel)]="additionalHelpTooltip"
          p-clean
          p-label="Additional Help"
        >
        </po-input>
        <po-input
          class="po-md-6"
          name="placeholder"
          [(ngModel)]="placeholder"
          p-clean
          p-label="Placeholder"
        ></po-input>

        <po-input
          class="po-md-6"
          name="fieldErrorMessage"
          [(ngModel)]="fieldErrorMessage"
          p-clean
          p-label="Field Error Message"
        ></po-input>

        <po-select
          class="po-md-6 po-lg-3"
          name="fieldLabel"
          [(ngModel)]="fieldLabel"
          p-label="Field Label"
          p-required
          [p-options]="fieldLabelOptions"
        ></po-select>

        <po-select
          class="po-md-6 po-lg-3"
          name="fieldValue"
          [(ngModel)]="fieldValue"
          p-label="Field Value"
          p-required
          [p-options]="fieldValueOptions"
        ></po-select>

        <po-input
          name="formatField"
          [(ngModel)]="fieldFormat"
          class="po-md-6"
          p-label="Field Format"
          p-help='Ex.: ["id", "name"]'
          (p-change)="onFieldFormatChange($event)"
        >
        </po-input>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-checkbox-group
          name="columnsName"
          [(ngModel)]="columnsName"
          [p-columns]="4"
          p-label="Columns"
          [p-options]="columnsOptions"
          (p-change)="updateColumns()"
        ></po-checkbox-group>
        <po-checkbox-group
          name="gridPropertiesName"
          [(ngModel)]="gridPropertiesName"
          [p-columns]="4"
          p-label="Grid Properties"
          [p-options]="gridPropertiesOptions"
          (p-change)="updateGridProperties()"
        ></po-checkbox-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-checkbox-group
          name="otherProperties"
          p-label="Other Properties"
          [p-columns]="4"
          [p-options]="otherPropertiesOptions"
          [(ngModel)]="otherProperties"
          (p-change)="changeOtherPropertiesOptions()"
        ></po-checkbox-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-radio-group
          class="po-lg-6"
          name="lookupModalSize"
          p-label="Modal Size"
          [p-columns]="3"
          [p-options]="lookupModalSizeOptions"
          [(ngModel)]="lookupModalSize"
        ></po-radio-group>

        <po-radio-group
          class="po-lg-6"
          name="searchOnEnter"
          [(ngModel)]="searchOnEnter"
          p-label="SearchOnEnter"
          [p-options]="searchOnEnterOptions"
        >
        </po-radio-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-radio-group
          class="po-lg-6"
          name="size"
          [(ngModel)]="size"
          p-label="Size"
          p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA."
          [p-options]="sizesOptions"
        >
        </po-radio-group>

        <po-textarea
          class="po-lg-6"
          name="literals"
          p-label="Literals"
          p-help='{ "modalTitle": "Busca avan\xE7ada" }'
          [(ngModel)]="literals"
          (p-change-model)="changeLiterals()"
        ></po-textarea>

        <po-textarea
          class="po-lg-6"
          name="filterSearchSelect"
          [(ngModel)]="filterSearchSelect"
          (p-change-model)="changeFilterSearchSelects()"
          p-help='[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]'
          p-label="Filter Search Select"
        ></po-textarea>

        <po-textarea
          class="po-lg-6"
          name="keysLabel"
          [(ngModel)]="keysLabel"
          (p-change-model)="changeKeysLabel()"
          p-help='[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]'
          p-label="Keys Label"
        ></po-textarea>
      </po-container>
    </div>

    <div class="po-row">
      <po-button
        class="po-lg-3 po-md-6"
        p-label="Restore"
        (p-click)="restore()"
      >
      </po-button>
    </div>
</po-container>
  `,this.tsCode=`import { Component } from '@angular/core';
import {
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSelectOption,
} from '@po-ui/ng-components';
import {
  ThfLookupColumn,
  ThfLookupFilterSearchSelect,
  ThfLookupGridProperties,
  ThfLookupKeysLabel,
  ThfLookupLiterals,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-lookup-labs-doc',
  templateUrl: './thf-lookup-labs-doc.component.html',
  styleUrl: './thf-lookup-labs-doc.component.css',
  standalone: false,
})
export class ThfLookupLabsDocComponent {
  additionalHelpTooltip: string = '';
  columnsName: Array<string> = ['id', 'name', 'nickname', 'email'];
  gridPropertiesName: Array<string> = ['selectableEntireLine', 'showMoreVisible', 'striped', 'sortable', 'virtualScroll'];
  customFilterSearchSelect: Array<ThfLookupFilterSearchSelect> = [];
  customKeysLabel: Array<ThfLookupKeysLabel> = [];
  customLiterals: ThfLookupLiterals = {};
  event: string = '';
  fieldLabel: string = 'name';
  fieldValue: string = 'value';
  filterSearchSelect: string = '';
  help: string = '';
  keysLabel: string = '';
  label: string = '';
  literals: string = '';
  fieldErrorMessage: string = '';
  lookupSingle: any;
  otherProperties: Array<string> = [];
  placeholder: string = '';
  fieldFormat: Array<string> | undefined;
  lookupModalSize: string = 'lg';
  size: string = 'medium';
  searchOnEnter: 'include' | 'equal' = 'equal';

  columns: Array<ThfLookupColumn> = [
    { property: 'id', label: 'Id' },
    { property: 'name', label: 'Nome' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail' },
  ];

  gridProperties!: ThfLookupGridProperties;

  lookupModalSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' },
    { label: 'xl', value: 'xl' },
    { label: 'auto', value: 'auto' },
  ];

  otherPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Auto Height', value: 'autoHeight' },
    { label: 'Clean', value: 'clean', disabled: false },
    { label: 'Disabled', value: 'disabled' },
    { label: 'Multiple', value: 'multiple' },
    { label: 'No Autocomplete', value: 'noAutoComplete' },
    { label: 'Optional', value: 'optional', disabled: false },
    { label: 'Required', value: 'required' },
    { label: 'Show Required', value: 'showRequired', disabled: true },
    { value: 'fieldErrorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' }
  ];

  searchOnEnterOptions: Array<PoRadioGroupOption> = [
    { label: 'equal', value: 'equal' },
    { label: 'include', value: 'include' },
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
  ];

  readonly gridPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'autoSize', label: 'AutoSize' },
    { value: 'autoSizeOnScroll', label: 'AutoSizeOnScroll' },
    { value: 'draggable', label: 'Draggable' },
    { value: 'groupable', label: 'Groupable' },
    { value: 'hideSelectAll', label: 'HideSelectAll' },
    { value: 'resizable', label: 'Resizable' },
    { value: 'selectableEntireLine', label: 'SelectableEntireLine' },
    { value: 'striped', label: 'Striped' },
    { value: 'showDraggableIcon', label: 'ShowDraggableIcon' },
    { value: 'showMoreDisabled', label: 'ShowMoreDisabled' },
    { value: 'showMoreVisible', label: 'ShowMoreVisible' },
    { value: 'sortable', label: 'Sortable' },
    { value: 'virtualScroll', label: 'VirtualScroll' },
  ];

  readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Nome' },
    { value: 'nickname', label: 'Apelido' },
    { value: 'email', label: 'E-mail' },
  ];

  readonly fieldLabelOptions: Array<PoSelectOption> = [
    { value: 'name', label: 'Name' },
    ...this.columnsOptions,
  ];

  readonly fieldValueOptions: Array<PoSelectOption> = [
    { value: 'value', label: 'Value' },
    ...this.columnsOptions,
  ];

  private readonly columnsDefinition: any = {
    id: <ThfLookupColumn>{ property: 'id', label: 'Id' },
    name: <ThfLookupColumn>{ property: 'name', label: 'Nome' },
    nickname: <ThfLookupColumn>{ property: 'nickname', label: 'Apelido' },
    email: <ThfLookupColumn>{ property: 'email', label: 'E-mail' },
  };

  ngOnInit() {
    this.restore();
  }

  changeEvent(eventDescription: any) {
    this.event = eventDescription;
  }

  changeFilterSearchSelects() {
    try {
      this.customFilterSearchSelect = JSON.parse(this.filterSearchSelect);
    } catch {
      this.customFilterSearchSelect = [];
    }
  }

  changeKeysLabel() {
    try {
      this.customKeysLabel = JSON.parse(this.keysLabel);
    } catch {
      this.customKeysLabel = [];
    }
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = {};
    }
  }

  changeOtherPropertiesOptions() {
    const multiple = this.otherProperties.includes('multiple');
    const required = this.otherProperties.includes('required');

    this.otherPropertiesOptions[1].disabled = multiple;
    this.otherPropertiesOptions[7].disabled = !required;
    this.otherPropertiesOptions[5].disabled = required;
    this.otherPropertiesOptions = [...this.otherPropertiesOptions];
  }

  onFieldFormatChange(event: any) {
    try {
      this.fieldFormat = JSON.parse(event);
    } catch {
      this.fieldFormat = undefined;
    }
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.columnsName = ['id', 'name', 'nickname', 'email'];
    this.gridPropertiesName = [
      'selectableEntireLine',
      'showMoreVisible',
      'striped',
      'sortable',
      'virtualScroll',
    ];
    this.customFilterSearchSelect = [];
    this.customKeysLabel = [];
    this.customLiterals = {};
    this.event = '';
    this.fieldErrorMessage = '';
    this.fieldLabel = 'name';
    this.fieldValue = 'value';
    this.filterSearchSelect = '';
    this.help = '';
    this.keysLabel = '';
    this.label = '';
    this.literals = '';
    this.lookupSingle = undefined;
    this.otherProperties = [];
    this.placeholder = '';
    this.fieldFormat = undefined;
    this.size = 'medium';
    this.searchOnEnter = 'equal';
    this.changeFilterSearchSelects();
    this.changeKeysLabel();
    this.changeLiterals();
    this.changeOtherPropertiesOptions();
    this.updateColumns();
    this.updateGridProperties();
    this.lookupModalSize = 'lg';
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach((column) =>
      this.columns.push(this.columnsDefinition[column])
    );
  }

  updateGridProperties() {
    this.gridProperties = {};

    this.gridPropertiesName.forEach((properties) => {
      this.gridProperties = {
        ...this.gridProperties,
        [properties]: true,
      };
    });

    if (!this.gridPropertiesName.includes('sortable')) {
      this.gridProperties = {
        ...this.gridProperties,
        sortable: false,
      };
    }

    if (!this.gridPropertiesName.includes('striped')) {
      this.gridProperties = {
        ...this.gridProperties,
        striped: false,
      };
    }

    if (!this.gridPropertiesName.includes('selectableEntireLine')) {
      this.gridProperties = {
        ...this.gridProperties,
        selectableEntireLine: false,
      };
    }

    if (!this.gridPropertiesName.includes('showMoreVisible')) {
      this.gridProperties = {
        ...this.gridProperties,
        showMoreVisible: false,
      };
    }
  }
}
  `,this.additionalHelpTooltip="",this.columnsName=["id","name","nickname","email"],this.gridPropertiesName=["selectableEntireLine","showMoreVisible","striped","sortable","virtualScroll"],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.event="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.help="",this.keysLabel="",this.label="",this.literals="",this.fieldErrorMessage="",this.otherProperties=[],this.placeholder="",this.lookupModalSize="lg",this.size="medium",this.searchOnEnter="equal",this.columns=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail"}],this.lookupModalSizeOptions=[{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"},{label:"xl",value:"xl"},{label:"auto",value:"auto"}],this.otherPropertiesOptions=[{label:"Auto Height",value:"autoHeight"},{label:"Clean",value:"clean",disabled:!1},{label:"Disabled",value:"disabled"},{label:"Multiple",value:"multiple"},{label:"No Autocomplete",value:"noAutoComplete"},{label:"Optional",value:"optional",disabled:!1},{label:"Required",value:"required"},{label:"Show Required",value:"showRequired",disabled:!0},{value:"fieldErrorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}],this.searchOnEnterOptions=[{label:"equal",value:"equal"},{label:"include",value:"include"}],this.sizesOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.gridPropertiesOptions=[{value:"autoSize",label:"AutoSize"},{value:"autoSizeOnScroll",label:"AutoSizeOnScroll"},{value:"draggable",label:"Draggable"},{value:"groupable",label:"Groupable"},{value:"hideSelectAll",label:"HideSelectAll"},{value:"resizable",label:"Resizable"},{value:"selectableEntireLine",label:"SelectableEntireLine"},{value:"striped",label:"Striped"},{value:"showDraggableIcon",label:"ShowDraggableIcon"},{value:"showMoreDisabled",label:"ShowMoreDisabled"},{value:"showMoreVisible",label:"ShowMoreVisible"},{value:"sortable",label:"Sortable"},{value:"virtualScroll",label:"VirtualScroll"}],this.columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Nome"},{value:"nickname",label:"Apelido"},{value:"email",label:"E-mail"}],this.fieldLabelOptions=[{value:"name",label:"Name"},...this.columnsOptions],this.fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions],this.columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Nome"},nickname:{property:"nickname",label:"Apelido"},email:{property:"email",label:"E-mail"}}}ngOnInit(){this.restore()}changeEvent(a){this.event=a}changeFilterSearchSelects(){try{this.customFilterSearchSelect=JSON.parse(this.filterSearchSelect)}catch{this.customFilterSearchSelect=[]}}changeKeysLabel(){try{this.customKeysLabel=JSON.parse(this.keysLabel)}catch{this.customKeysLabel=[]}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals={}}}changeOtherPropertiesOptions(){let a=this.otherProperties.includes("multiple"),r=this.otherProperties.includes("required");this.otherPropertiesOptions[1].disabled=a,this.otherPropertiesOptions[7].disabled=!r,this.otherPropertiesOptions[5].disabled=r,this.otherPropertiesOptions=[...this.otherPropertiesOptions]}onFieldFormatChange(a){try{this.fieldFormat=JSON.parse(a)}catch{this.fieldFormat=void 0}}restore(){this.additionalHelpTooltip="",this.columnsName=["id","name","nickname","email"],this.gridPropertiesName=["selectableEntireLine","showMoreVisible","striped","sortable","virtualScroll"],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.event="",this.fieldErrorMessage="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.help="",this.keysLabel="",this.label="",this.literals="",this.lookupSingle=void 0,this.otherProperties=[],this.placeholder="",this.fieldFormat=void 0,this.size="medium",this.searchOnEnter="equal",this.changeFilterSearchSelects(),this.changeKeysLabel(),this.changeLiterals(),this.changeOtherPropertiesOptions(),this.updateColumns(),this.updateGridProperties(),this.lookupModalSize="lg"}updateColumns(){this.columns=[],this.columnsName.forEach(a=>this.columns.push(this.columnsDefinition[a]))}updateGridProperties(){this.gridProperties={},this.gridPropertiesName.forEach(a=>{this.gridProperties=O(V({},this.gridProperties),{[a]:!0})}),this.gridPropertiesName.includes("sortable")||(this.gridProperties=O(V({},this.gridProperties),{sortable:!1})),this.gridPropertiesName.includes("striped")||(this.gridProperties=O(V({},this.gridProperties),{striped:!1})),this.gridPropertiesName.includes("selectableEntireLine")||(this.gridProperties=O(V({},this.gridProperties),{selectableEntireLine:!1})),this.gridPropertiesName.includes("showMoreVisible")||(this.gridProperties=O(V({},this.gridProperties),{showMoreVisible:!1}))}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-labs-doc"]],standalone:!1,decls:10,vars:33,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookup","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-change","t-error","t-selected","t-focus","t-keydown","t-rows-selected","ngModelChange","t-additional-help-tooltip","t-auto-height","t-clean","t-columns","t-disabled","t-error-limit","t-field-error-message","t-field-format","t-field-label","t-field-value","t-filter-search-select","t-grid-properties","t-help","t-keys-label","t-label","t-literals","t-modal-size","t-multiple","t-no-autocomplete","t-optional","t-placeholder","t-required","t-show-required","t-search-on-enter","t-size","t-label-text-wrap","ngModel"],[1,"po-mt-1",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","columnsName","p-label","Columns",3,"ngModelChange","p-change","ngModel","p-columns","p-options"],["name","gridPropertiesName","p-label","Grid Properties",3,"ngModelChange","p-change","ngModel","p-columns","p-options"],["name","otherProperties","p-label","Other Properties",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","lookupModalSize","p-label","Modal Size",1,"po-lg-6",3,"ngModelChange","p-columns","p-options","ngModel"],["name","searchOnEnter","p-label","SearchOnEnter",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","literals","p-label","Literals","p-help",'{ "modalTitle": "Busca avan\xE7ada" }',1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","filterSearchSelect","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]',"p-label","Filter Search Select",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","keysLabel","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]',"p-label","Keys Label",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],[1,"po-row"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let l=I();i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),o(3,"po-divider",2),i(4,"thf-lookup",3),g("t-change",function(){return p(l),c(n.changeEvent("t-change"))})("t-error",function(){return p(l),c(n.changeEvent("t-error"))})("t-selected",function(){return p(l),c(n.changeEvent("t-selected"))})("t-focus",function(){return p(l),c(n.changeEvent("t-focus"))})("t-keydown",function(){return p(l),c(n.changeEvent("t-keydown"))})("t-rows-selected",function(){return p(l),c(n.changeEvent("t-rows-selected"))}),h("ngModelChange",function(C){return p(l),b(n.lookupSingle,C)||(n.lookupSingle=C),c(C)}),t(),i(5,"po-container",4),o(6,"po-info",5),t(),o(7,"app-code-accordion-doc",6),F(8,Yi,25,29,"ng-template",null,0,K),t()}if(r&2){let l=W(9);m(4),s("t-additional-help-tooltip",n.additionalHelpTooltip)("t-auto-height",n.otherProperties.includes("autoHeight"))("t-clean",n.otherProperties.includes("clean"))("t-columns",n.columns)("t-disabled",n.otherProperties.includes("disabled"))("t-error-limit",n.otherProperties.includes("fieldErrorLimit"))("t-field-error-message",n.fieldErrorMessage)("t-field-format",n.fieldFormat)("t-field-label",n.fieldLabel)("t-field-value",n.fieldValue)("t-field-error-message",n.fieldErrorMessage)("t-filter-search-select",n.customFilterSearchSelect)("t-grid-properties",n.gridProperties)("t-help",n.help)("t-keys-label",n.customKeysLabel)("t-label",n.label)("t-literals",n.customLiterals)("t-modal-size",n.lookupModalSize)("t-multiple",n.otherProperties.includes("multiple"))("t-no-autocomplete",n.otherProperties.includes("noAutoComplete"))("t-optional",n.otherProperties.includes("optional"))("t-placeholder",n.placeholder)("t-required",n.otherProperties.includes("required"))("t-show-required",n.otherProperties.includes("showRequired"))("t-search-on-enter",n.searchOnEnter)("t-size",n.size)("t-label-text-wrap",n.otherProperties==null?null:n.otherProperties.includes("labelTextWrap")),S("ngModel",n.lookupSingle),m(2),s("p-value",n.event),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[Q,Z,H,v,P,ue,te,Ee,Ae,xe,ie,he,T],styles:[".po-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:16px}.containerProperties[_ngcontent-%COMP%]{flex:1 1 100%}"]})}}return d})();var Vt=(()=>{class d{constructor(){this.htmlCode=`<form [formGroup]="formMission">
  <thf-lookup
    formControlName="lookup2"
    name="lookupMultiple"
    t-field-label="name"
    t-field-value="value"
    t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    t-key-last-search="lookupMultiple"
    t-label="Her\xF3is"
    t-placeholder="Placeholder multiple"
    [t-columns]="columns"
    [t-grid-properties]="gridProperties"
    [t-keys-label]="keysLabel"
    [t-multiple]="true"
    [t-filter-search-select]="filterSelect"
  ></thf-lookup>
</form>
  `,this.tsCode=`import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-thf-lookup-form-doc',
  templateUrl: './thf-lookup-form-doc.component.html',
  styleUrl: './thf-lookup-form-doc.component.css',
})
export class ThfLookupFormDocComponent {
  formMission = new FormGroup({
    lookup2: new FormControl(['1495831666871']),
  });

  gridProperties: ThfLookupGridProperties = {
    autoSize: true,
    autoSizeOnScroll: true,
    resizable: true,
    groupable: true,
    draggable: true,
    hideSelectAll: true,
  };

  columns = [
    { property: 'name', label: 'Name' },
    { property: 'nickname', label: 'Nickname' },
    { property: 'email', label: 'Email' },
    { property: 'id', label: 'Id' },
  ];

  keysLabel = [
    { label: 'Nome', value: 'name' },
    { label: 'Email', value: 'email' },
  ];

  filterSelect = [
    { label: 'Nome', value: 'name' },
    { label: 'Nickname', value: 'nickname' },
    { label: 'Email', value: 'email' },
  ];
}
  `,this.formMission=new B({lookup2:new f(["1495831666871"])}),this.gridProperties={autoSize:!0,autoSizeOnScroll:!0,resizable:!0,groupable:!0,draggable:!0,hideSelectAll:!0},this.columns=[{property:"name",label:"Name"},{property:"nickname",label:"Nickname"},{property:"email",label:"Email"},{property:"id",label:"Id"}],this.keysLabel=[{label:"Nome",value:"name"},{label:"Email",value:"email"}],this.filterSelect=[{label:"Nome",value:"name"},{label:"Nickname",value:"nickname"},{label:"Email",value:"email"}]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-form-doc"]],standalone:!1,decls:7,vars:8,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],[3,"formGroup"],["formControlName","lookup2","name","lookupMultiple","t-field-label","name","t-field-value","value","t-filter-service","https://po-sample-api.onrender.com/v1/heroes","t-key-last-search","lookupMultiple","t-label","Her\xF3is","t-placeholder","Placeholder multiple",3,"t-columns","t-grid-properties","t-keys-label","t-multiple","t-filter-search-select"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Multiple Reactive Form"),t(),o(3,"po-divider",1),i(4,"form",2),o(5,"thf-lookup",3),t(),o(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("formGroup",n.formMission),m(),s("t-columns",n.columns)("t-grid-properties",n.gridProperties)("t-keys-label",n.keysLabel)("t-multiple",!0)("t-filter-search-select",n.filterSelect),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[ce,Q,pe,Ce,Pe,v,P,he,T],encapsulation:2})}}return d})();var jt=(()=>{class d{constructor(){this.htmlCode=`<thf-lookup
  name="lookupSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
></thf-lookup>
  `,this.tsCode=`import { Component } from '@angular/core';

@Component({
  selector: 'app-thf-lookup-basic-doc',
  templateUrl: './thf-lookup-basic-doc.component.html',
  styleUrl: './thf-lookup-basic-doc.component.css'
})
export class ThfLookupBasicDocComponent {}`}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-basic-doc"]],standalone:!1,decls:7,vars:2,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupSingle","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Single"),t(),o(3,"po-divider",1),i(4,"form"),o(5,"thf-lookup",2),t(),o(6,"app-code-accordion-doc",3),t()),r&2&&(m(6),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[ce,pe,tt,v,P,he,T],encapsulation:2})}}return d})();var zt=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup"]],standalone:!1,decls:8,vars:0,consts:[["p-title","THF-Lookup","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],[1,"samples-container"],["labs","",1,"samples-container"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-lookup")(2,"div",1)(3,"div",2),o(4,"app-thf-lookup-basic-doc")(5,"app-thf-lookup-form-doc"),t()(),i(6,"div",3),o(7,"app-thf-lookup-labs-doc"),t()()())},dependencies:[X,ft,Rt,Vt,jt],encapsulation:2})}}return d})();var Ot=`<thf-lookup-data
  name="lookupDataSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  [t-height]="320"
/>`,Gt=`import { Component } from '@angular/core';

@Component({
  selector: 'app-thf-lookup-data-basic-doc',
  templateUrl: './thf-lookup-data-basic-doc.component.html',
  standalone: false,
})
export class ThfLookupDataBasicDocComponent {}`;var Le=(()=>{class d{constructor(){this.htmlCode=Ot,this.tsCode=Gt}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-data-basic-doc"]],standalone:!1,decls:6,vars:3,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupDataSingle","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-height"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Single"),t(),o(3,"po-divider",1)(4,"thf-lookup-data",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-height",320),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,be,T],encapsulation:2})}}return d})();var Nt=`<form [formGroup]="form">
  <thf-lookup-data
    formControlName="lookupData"
    name="lookupDataSingle"
    t-field-label="nickname"
    t-field-value="value"
    t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    [t-columns]="columns"
    [t-grid-properties]="gridProperties"
    [t-keys-label]="keysLabel"
    [t-multiple]="true"
    [t-filter-search-select]="filterSelect"
  />
</form>

<div>
  <p>Valor do Formul\xE1rio:<br />{{ form.value | json }}</p>
</div>

<div>
  @if (!disabledFom) {
  <po-button
    p-label="Desabilitar via FormControl"
    (p-click)="disableEnabledFom()"
  />
  } @else {
  <po-button
    p-label="Habilitar via FormControl"
    (p-click)="disableEnabledFom()"
  />
  }
</div>
`,Qt=`import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ThfLookupDataGridProperties } from '@totvs/thf-components';

@Component({
  selector: 'app-thf-lookup-data-form-doc',
  templateUrl: './thf-lookup-data-form-doc.component.html',
  standalone: false,
})
export class ThfLookupDataFormDocComponent {
  disabledFom = false;

  form = new FormGroup({
    lookupData: new FormControl(['1495831666871']),
  });

  gridProperties: ThfLookupDataGridProperties = {
    autoSize: true,
    draggable: true,
    hideSelectAll: true,
    resizable: true,
  };

  columns = [
    { property: 'name', label: 'Name' },
    { property: 'nickname', label: 'Nickname' },
    { property: 'email', label: 'Email' },
  ];

  keysLabel = [
    { label: 'Nome', value: 'name' },
    { label: 'Email', value: 'email' },
  ];

  filterSelect = [
    { label: 'Nome', value: 'name' },
    { label: 'Nickname', value: 'nickname' },
    { label: 'Email', value: 'email' },
  ];

  disableEnabledFom() {
    const lookupData = this.form.get('lookupData');
    this.disabledFom = !this.disabledFom;

    this.disabledFom ? lookupData?.disable() : lookupData?.enable();
  }
}`;function an(d,q){if(d&1){let a=I();i(0,"po-button",7),g("p-click",function(){p(a);let n=u();return c(n.disableEnabledFom())}),t()}}function rn(d,q){if(d&1){let a=I();i(0,"po-button",8),g("p-click",function(){p(a);let n=u();return c(n.disableEnabledFom())}),t()}}var Me=(()=>{class d{constructor(){this.htmlCode=Nt,this.tsCode=Qt,this.disabledFom=!1,this.form=new B({lookupData:new f(["1495831666871"])}),this.gridProperties={autoSize:!0,draggable:!0,hideSelectAll:!0,resizable:!0},this.columns=[{property:"name",label:"Name"},{property:"nickname",label:"Nickname"},{property:"email",label:"Email"}],this.keysLabel=[{label:"Nome",value:"name"},{label:"Email",value:"email"}],this.filterSelect=[{label:"Nome",value:"name"},{label:"Nickname",value:"nickname"},{label:"Email",value:"email"}]}disableEnabledFom(){let a=this.form.get("lookupData");this.disabledFom=!this.disabledFom,this.disabledFom?a?.disable():a?.enable()}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-data-form-doc"]],standalone:!1,decls:16,vars:12,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],[3,"formGroup"],["formControlName","lookupData","name","lookupDataSingle","t-field-label","nickname","t-field-value","value","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-columns","t-grid-properties","t-keys-label","t-multiple","t-filter-search-select"],["p-label","Desabilitar via FormControl"],["p-label","Habilitar via FormControl"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"],["p-label","Desabilitar via FormControl",3,"p-click"],["p-label","Habilitar via FormControl",3,"p-click"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Multiple Reactive Form"),t(),o(3,"po-divider",1),i(4,"form",2),o(5,"thf-lookup-data",3),t(),i(6,"div")(7,"p"),e(8,"Valor do Formul\xE1rio:"),o(9,"br"),e(10),We(11,"json"),t()(),i(12,"div"),F(13,an,1,0,"po-button",4)(14,rn,1,0,"po-button",5),t(),o(15,"app-code-accordion-doc",6),t()),r&2&&(m(4),s("formGroup",n.form),m(),s("t-columns",n.columns)("t-grid-properties",n.gridProperties)("t-keys-label",n.keysLabel)("t-multiple",!0)("t-filter-search-select",n.filterSelect),m(5),me(Ue(11,10,n.form.value)),m(3),ve(n.disabledFom?14:13),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[ce,Q,pe,Ce,Pe,H,v,P,be,T,Xe],encapsulation:2})}}return d})();var Bt=`<thf-lookup-data
  [t-columns]="columns"
  [t-disabled]="disabled"
  [t-field-label]="fieldLabel"
  [t-field-value]="fieldValue"
  [t-filter-search-select]="customFilterSearchSelect"
  [t-grid-properties]="gridProperties"
  [t-height]="height"
  [t-keys-label]="customKeysLabel"
  [t-literals]="customLiterals"
  [t-multiple]="multiple"
  [t-size]="size"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  (t-change)="changeEvent('t-change', $event)"
  (t-change-model)="changeEvent('t-change-model', $event)"
  (t-error)="changeEvent('t-error', $event)"
  (t-focus)="changeEvent('t-focus', '')"
  (t-keydown)="changeEvent('t-keydown', $event)"
  (t-selected)="changeEvent('t-selected', $event)"
/>

<po-container class="po-mt-1" style="display: flex">
  <span class="po-font-text-large-bold">Events</span>
  <po-divider class="po-divider-mb-0-75"></po-divider>
  <div style="max-height: 150px" [innerHTML]="event"></div>
</po-container>

<div class="po-row po-mt-2 po-mb-2" style="display: block">
  <po-container class="po-mb-2" style="display: flex">
    <po-select
      class="po-md-4 po-lg-4"
      name="fieldValue"
      [(ngModel)]="fieldValue"
      p-label="Field Value"
      p-required
      [p-options]="fieldValueOptions"
    />

    <po-select
      class="po-md-4 po-lg-4"
      name="fieldLabel"
      [(ngModel)]="fieldLabel"
      p-label="Field Label"
      p-required
      [p-options]="fieldLabelOptions"
    />

    <po-input
      class="po-md-4 po-lg-4"
      name="heigth"
      [(ngModel)]="height"
      p-label="Height"
    />

    <div class="po-row">
      <po-switch
        class="po-md-6 po-lg-3"
        name="disabled"
        p-label="Disabled"
        [(ngModel)]="disabled"
      />

      <po-switch
        class="po-md-6 po-lg-3"
        name="Multiple"
        p-label="Multiple"
        [(ngModel)]="multiple"
      />

      <po-radio-group
        class="po-lg-6"
        name="size"
        [(ngModel)]="size"
        p-label="Size"
        p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA."
        [p-options]="sizesOptions"
      />
    </div>

    <div class="po-row">
      <po-textarea
        class="po-lg-6"
        name="filterSearchSelect"
        [(ngModel)]="filterSearchSelect"
        (p-change-model)="changeFilterSearchSelects()"
        p-help='[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]'
        p-label="Filter Search Select"
      />

      <po-textarea
        class="po-lg-6"
        name="keysLabel"
        [(ngModel)]="keysLabel"
        (p-change-model)="changeKeysLabel()"
        p-help='[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]'
        p-label="Keys Label"
      />
    </div>

    <po-textarea
      class="po-lg-6"
      name="literals"
      p-label="Literals"
      p-help='{ "placeholder": "Busca avan\xE7ada" }'
      [p-rows]="2"
      [(ngModel)]="literals"
      (p-change-model)="changeLiterals()"
    />
  </po-container>

  <po-container class="po-mb-2" style="display: flex">
    <po-checkbox-group
      name="gridPropertiesName"
      [(ngModel)]="gridPropertiesName"
      [p-columns]="4"
      p-label="Grid Properties"
      [p-options]="gridPropertiesOptions"
      (p-change)="updateGridProperties()"
    />
  </po-container>
</div>
`,Ht=`import { Component } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSelectOption,
} from '@po-ui/ng-components';
import {
  ThfLookupDataColumn,
  ThfLookupDataFilterSearchSelect,
  ThfLookupDataGridProperties,
  ThfLookupDataKeysLabel,
  ThfLookupDataLiterals,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-lookup-data-labs-doc',
  templateUrl: './thf-lookup-data-labs-doc.component.html',
  standalone: false,
})
export class ThfLookupDataLabsDocComponent {
  columns: Array<ThfLookupDataColumn> = [
    { property: 'id', label: 'Id' },
    { property: 'name', label: 'Nome' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail' },
  ];
  customFilterSearchSelect: Array<ThfLookupDataFilterSearchSelect> = [];
  customKeysLabel: Array<ThfLookupDataKeysLabel> = [];
  customLiterals: ThfLookupDataLiterals = {};
  disabled = false;
  event: string = '';
  fieldLabel: string = 'name';
  fieldValue: string = 'value';
  filterSearchSelect: string = '';
  gridProperties!: ThfLookupDataGridProperties;
  height = 450;
  keysLabel: string = '';
  literals: string = '';
  multiple = true;
  size: string = 'medium';

  readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Nome' },
    { value: 'nickname', label: 'Apelido' },
    { value: 'email', label: 'E-mail' },
  ];

  readonly gridPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'autoSize', label: 'AutoSize' },
    { value: 'autoSizeOnScroll', label: 'AutoSizeOnScroll' },
    { value: 'draggable', label: 'Draggable' },
    { value: 'groupable', label: 'Groupable' },
    { value: 'hideSelectAll', label: 'HideSelectAll' },
    { value: 'resizable', label: 'Resizable' },
    { value: 'selectableEntireLine', label: 'SelectableEntireLine' },
    { value: 'striped', label: 'Striped' },
    { value: 'showDraggableIcon', label: 'ShowDraggableIcon' },
    { value: 'showMoreDisabled', label: 'ShowMoreDisabled' },
    { value: 'showMoreVisible', label: 'ShowMoreVisible' },
    { value: 'sortable', label: 'Sortable' },
    { value: 'virtualScroll', label: 'VirtualScroll' },
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
  ];

  readonly fieldLabelOptions: Array<PoSelectOption> = [
    { value: 'name', label: 'Name' },
    ...this.columnsOptions,
  ];

  readonly fieldValueOptions: Array<PoSelectOption> = [
    { value: 'value', label: 'Value' },
    ...this.columnsOptions,
  ];

  readonly gridPropertiesName: Array<string> = [
    'selectableEntireLine',
    'showMoreVisible',
    'striped',
    'sortable',
    'virtualScroll',
  ];

  changeEvent(eventDescription: any, value: any) {
    if (value instanceof KeyboardEvent) {
      value = {
        key: value.key,
        code: value.code,
        altKey: value.altKey,
        ctrlKey: value.ctrlKey,
        shiftKey: value.shiftKey,
      };
    }

    this.event =
      \`<p>\${eventDescription} - \${value ? JSON.stringify(value) : ''}</p>\` +
      this.event;
  }

  changeFilterSearchSelects() {
    try {
      this.customFilterSearchSelect = JSON.parse(this.filterSearchSelect);
    } catch {
      this.customFilterSearchSelect = [];
    }
  }

  changeKeysLabel() {
    try {
      this.customKeysLabel = JSON.parse(this.keysLabel);
    } catch {
      this.customKeysLabel = [];
    }
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = {};
    }
  }

  updateGridProperties() {
    let gridProperties = {};

    this.gridPropertiesName.forEach((properties) => {
      gridProperties = {
        ...gridProperties,
        [properties]: true,
      };
    });

    if (!this.gridPropertiesName.includes('sortable')) {
      gridProperties = {
        ...gridProperties,
        sortable: false,
      };
    }

    if (!this.gridPropertiesName.includes('striped')) {
      gridProperties = {
        ...gridProperties,
        striped: false,
      };
    }

    if (!this.gridPropertiesName.includes('selectableEntireLine')) {
      gridProperties = {
        ...gridProperties,
        selectableEntireLine: false,
      };
    }

    if (!this.gridPropertiesName.includes('showMoreVisible')) {
      gridProperties = {
        ...gridProperties,
        showMoreVisible: false,
      };
    }

    if (!this.gridPropertiesName.includes('groupable')) {
      gridProperties = {
        ...gridProperties,
        groupable: false,
      };
    }

    this.gridProperties = { ...gridProperties };
  }
}`;function dn(d,q){if(d&1){let a=I();i(0,"div",7)(1,"po-container",8)(2,"po-select",9),h("ngModelChange",function(n){p(a);let l=u();return b(l.fieldValue,n)||(l.fieldValue=n),c(n)}),t(),i(3,"po-select",10),h("ngModelChange",function(n){p(a);let l=u();return b(l.fieldLabel,n)||(l.fieldLabel=n),c(n)}),t(),i(4,"po-input",11),h("ngModelChange",function(n){p(a);let l=u();return b(l.height,n)||(l.height=n),c(n)}),t(),i(5,"div",12)(6,"po-switch",13),h("ngModelChange",function(n){p(a);let l=u();return b(l.disabled,n)||(l.disabled=n),c(n)}),t(),i(7,"po-switch",14),h("ngModelChange",function(n){p(a);let l=u();return b(l.multiple,n)||(l.multiple=n),c(n)}),t(),i(8,"po-radio-group",15),h("ngModelChange",function(n){p(a);let l=u();return b(l.size,n)||(l.size=n),c(n)}),t()(),i(9,"div",12)(10,"po-textarea",16),h("ngModelChange",function(n){p(a);let l=u();return b(l.filterSearchSelect,n)||(l.filterSearchSelect=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeFilterSearchSelects())}),t(),i(11,"po-textarea",17),h("ngModelChange",function(n){p(a);let l=u();return b(l.keysLabel,n)||(l.keysLabel=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeKeysLabel())}),t()(),i(12,"po-textarea",18),h("ngModelChange",function(n){p(a);let l=u();return b(l.literals,n)||(l.literals=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeLiterals())}),t()(),i(13,"po-container",8)(14,"po-checkbox-group",19),h("ngModelChange",function(n){p(a);let l=u();return b(l.gridPropertiesName,n)||(l.gridPropertiesName=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.updateGridProperties())}),t()()()}if(d&2){let a=u();m(2),S("ngModel",a.fieldValue),s("p-options",a.fieldValueOptions),m(),S("ngModel",a.fieldLabel),s("p-options",a.fieldLabelOptions),m(),S("ngModel",a.height),m(2),S("ngModel",a.disabled),m(),S("ngModel",a.multiple),m(),S("ngModel",a.size),s("p-options",a.sizesOptions),m(2),S("ngModel",a.filterSearchSelect),m(),S("ngModel",a.keysLabel),m(),s("p-rows",2),S("ngModel",a.literals),m(2),S("ngModel",a.gridPropertiesName),s("p-columns",4)("p-options",a.gridPropertiesOptions)}}var Re=(()=>{class d{constructor(){this.htmlCode=Bt,this.tsCode=Ht,this.columns=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail"}],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.disabled=!1,this.event="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.height=450,this.keysLabel="",this.literals="",this.multiple=!0,this.size="medium",this.columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Nome"},{value:"nickname",label:"Apelido"},{value:"email",label:"E-mail"}],this.gridPropertiesOptions=[{value:"autoSize",label:"AutoSize"},{value:"autoSizeOnScroll",label:"AutoSizeOnScroll"},{value:"draggable",label:"Draggable"},{value:"groupable",label:"Groupable"},{value:"hideSelectAll",label:"HideSelectAll"},{value:"resizable",label:"Resizable"},{value:"selectableEntireLine",label:"SelectableEntireLine"},{value:"striped",label:"Striped"},{value:"showDraggableIcon",label:"ShowDraggableIcon"},{value:"showMoreDisabled",label:"ShowMoreDisabled"},{value:"showMoreVisible",label:"ShowMoreVisible"},{value:"sortable",label:"Sortable"},{value:"virtualScroll",label:"VirtualScroll"}],this.sizesOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.fieldLabelOptions=[{value:"name",label:"Name"},...this.columnsOptions],this.fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions],this.gridPropertiesName=["selectableEntireLine","showMoreVisible","striped","sortable","virtualScroll"]}changeEvent(a,r){r instanceof KeyboardEvent&&(r={key:r.key,code:r.code,altKey:r.altKey,ctrlKey:r.ctrlKey,shiftKey:r.shiftKey}),this.event=`<p>${a} - ${r?JSON.stringify(r):""}</p>`+this.event}changeFilterSearchSelects(){try{this.customFilterSearchSelect=JSON.parse(this.filterSearchSelect)}catch{this.customFilterSearchSelect=[]}}changeKeysLabel(){try{this.customKeysLabel=JSON.parse(this.keysLabel)}catch{this.customKeysLabel=[]}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals={}}}updateGridProperties(){let a={};this.gridPropertiesName.forEach(r=>{a=O(V({},a),{[r]:!0})}),this.gridPropertiesName.includes("sortable")||(a=O(V({},a),{sortable:!1})),this.gridPropertiesName.includes("striped")||(a=O(V({},a),{striped:!1})),this.gridPropertiesName.includes("selectableEntireLine")||(a=O(V({},a),{selectableEntireLine:!1})),this.gridPropertiesName.includes("showMoreVisible")||(a=O(V({},a),{showMoreVisible:!1})),this.gridPropertiesName.includes("groupable")||(a=O(V({},a),{groupable:!1})),this.gridProperties=V({},a)}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-data-labs-doc"]],standalone:!1,decls:13,vars:16,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-change","t-change-model","t-error","t-focus","t-keydown","t-selected","t-columns","t-disabled","t-field-label","t-field-value","t-filter-search-select","t-grid-properties","t-height","t-keys-label","t-literals","t-multiple","t-size"],[1,"po-mt-1",2,"display","flex"],[2,"max-height","150px",3,"innerHTML"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","heigth","p-label","Height",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel"],[1,"po-row"],["name","disabled","p-label","Disabled",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","Multiple","p-label","Multiple",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterSearchSelect","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]',"p-label","Filter Search Select",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","keysLabel","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]',"p-label","Keys Label",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","literals","p-label","Literals","p-help",'{ "placeholder": "Busca avan\xE7ada" }',1,"po-lg-6",3,"ngModelChange","p-change-model","p-rows","ngModel"],["name","gridPropertiesName","p-label","Grid Properties",3,"ngModelChange","p-change","ngModel","p-columns","p-options"]],template:function(r,n){if(r&1){let l=I();i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),o(3,"po-divider",2),i(4,"thf-lookup-data",3),g("t-change",function(C){return p(l),c(n.changeEvent("t-change",C))})("t-change-model",function(C){return p(l),c(n.changeEvent("t-change-model",C))})("t-error",function(C){return p(l),c(n.changeEvent("t-error",C))})("t-focus",function(){return p(l),c(n.changeEvent("t-focus",""))})("t-keydown",function(C){return p(l),c(n.changeEvent("t-keydown",C))})("t-selected",function(C){return p(l),c(n.changeEvent("t-selected",C))}),t(),i(5,"po-container",4)(6,"span",1),e(7,"Events"),t(),o(8,"po-divider",2)(9,"div",5),t(),o(10,"app-code-accordion-doc",6),F(11,dn,15,16,"ng-template",null,0,K),t()}if(r&2){let l=W(12);m(4),s("t-columns",n.columns)("t-disabled",n.disabled)("t-field-label",n.fieldLabel)("t-field-value",n.fieldValue)("t-filter-search-select",n.customFilterSearchSelect)("t-grid-properties",n.gridProperties)("t-height",n.height)("t-keys-label",n.customKeysLabel)("t-literals",n.customLiterals)("t-multiple",n.multiple)("t-size",n.size),m(5),s("innerHTML",n.event,Oe),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[Q,Z,v,P,ue,te,Ee,Ae,xe,De,be,T],encapsulation:2})}}return d})();var Ve=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-data"]],standalone:!1,decls:8,vars:0,consts:[["p-title","THF-Lookup-Data","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],[1,"samples-container"],["labs","",1,"samples-container"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-lookup-data")(2,"div",1)(3,"div",2),o(4,"app-thf-lookup-data-basic-doc")(5,"app-thf-lookup-data-form-doc"),t()(),i(6,"div",3),o(7,"app-thf-lookup-data-labs-doc"),t()()())},dependencies:[X,vt,Le,Me,Re],encapsulation:2})}}return d})();var sn=["splitter"],pn=["paneForm"],cn=()=>({label:"horizontal",value:"horizontal"}),un=()=>({label:"vertical",value:"vertical"}),En=(d,q)=>[d,q];function xn(d,q){if(d&1){let a=I();i(0,"thf-splitter-pane",10),g("t-size-change",function(){p(a);let n=u();return c(n.changeEvent("(t-size-change)"))}),i(1,"div",11)(2,"po-widget",12),g("p-primary-action",function(){let n=p(a).index,l=u();return c(l.removePane(n))}),i(3,"div",13),e(4),t()()()()}if(d&2){let a=q.$implicit,r=q.index;s("t-resizable",a.resizable)("t-scrollable",a.scrollable)("t-size",a.size),m(4),Qe(" Pane Content ",r," ")}}function Sn(d,q){if(d&1){let a=I();i(0,"div",14)(1,"po-container",15),o(2,"po-dynamic-form",16,2),i(4,"div",17)(5,"po-button",18),g("p-click",function(){p(a);let n=W(3),l=u();return c(l.addPane(n.form.value))}),t()()(),i(6,"po-container",15)(7,"po-switch",19),h("ngModelChange",function(n){p(a);let l=u();return b(l.disabled,n)||(l.disabled=n),c(n)}),t(),i(8,"po-radio-group",20),h("ngModelChange",function(n){p(a);let l=u();return b(l.orientation,n)||(l.orientation=n),c(n)}),t()()(),i(9,"div",17)(10,"po-button",21),g("p-click",function(){p(a);let n=u();return c(n.restore())}),t()()}if(d&2){let a=W(3),r=u();m(2),s("p-fields",r.panesFieldsForm)("p-value",r.pane),m(3),s("p-disabled",a.form.invalid),m(2),S("ngModel",r.disabled),m(),S("ngModel",r.orientation),s("p-options",ge(8,En,ee(6,cn),ee(7,un)))}}var Wt=(()=>{class d{constructor(){this.event="",this.panes=[],this.pane={},this.disabled=!1,this.orientation="horizontal",this.panesFieldsForm=[{property:"size",gridColumns:6,type:"number",maxValue:100,minValue:0,maxLength:3,step:5,help:"Valor em porc (%)"},{property:"scrollable",type:"boolean",gridColumns:3}],this.htmlCode=`<thf-splitter
  #splitter
  name="splitter"
  [t-disabled]="disabled"
  [t-orientation]="orientation"
  (t-layout-change)="changeEvent('(t-layout-change)')"
>
  <thf-splitter-pane
    *ngFor="let pane of panes; let i = index"
    (t-size-change)="changeEvent('(t-size-change)')"
    [t-resizable]="pane.resizable"
    [t-scrollable]="pane.scrollable"
    [t-size]="pane.size"
  >
    <div class="po-m-2">
      <po-widget p-title="Title Pane" p-primary-label="Close" (p-primary-action)="removePane(i)">
        <div class="po-font-subtitle po-text-center">Pane Content {{ i }}</div>
      </po-widget>
    </div>
  </thf-splitter-pane>
</thf-splitter>

<po-container class="po-mt-1" style="display: flex">
  <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
</po-container>

<div class="po-row po-mt-2 po-mb-2" style="display: block">
  <po-container class="po-mb-2" style="display: flex">
    <po-dynamic-form #paneForm [p-fields]="panesFieldsForm" [p-value]="pane"> </po-dynamic-form>
    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Add Pane"
        [p-disabled]="paneForm.form.invalid"
        (p-click)="addPane(paneForm.form.value)"
      />
    </div>
  </po-container>

  <po-container class="po-mb-2" style="display: flex">
    <po-switch class="po-md-6" name="disabled" p-label="Disabled" [(ngModel)]="disabled" />

    <po-radio-group
      class="po-md-6"
      name="orientation"
      p-label="orientation"
      [(ngModel)]="orientation"
      [p-options]="[
        { label: 'horizontal', value: 'horizontal' },
        { label: 'vertical', value: 'vertical' }
      ]"
    />
  </po-container>
</div>

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Restore" (p-click)="restore()"> </po-button>
</div>
`,this.tsCode=`import { Component, OnInit, ViewChild } from '@angular/core';
import {
  PoDynamicFormComponent,
  PoDynamicFormField,
} from '@po-ui/ng-components';
import {
  ThfSplitterComponent,
  ThfSplitterPaneComponent,
} from '@totvs/thf-components';
 
@Component({
  selector: 'app-thf-splitter-labs-doc',
  templateUrl: './thf-splitter-labs-doc.component.html',
  styleUrl: './thf-splitter-labs-doc.component.css',
  standalone: false,
})
  export class ThfSplitterLabsDocComponent implements OnInit {
@ViewChild('splitter', { static: true }) splitter!: ThfSplitterComponent;
  @ViewChild('paneForm', { static: true }) paneForm!: PoDynamicFormComponent;

  event: string = '';
  panes: Array<ThfSplitterPaneComponent> = [];
  pane = {};
  disabled = false;
  orientation = 'horizontal';

  panesFieldsForm: Array<PoDynamicFormField> = [
    {
      property: 'size',
      gridColumns: 6,
      type: 'number',
      maxValue: 100,
      minValue: 0,
      maxLength: 3,
      step: 5,
      help: 'Valor em porc (%)'
    },
    { property: 'scrollable', type: 'boolean', gridColumns: 3 }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(eventDescription: any) {
    this.event = eventDescription;
  }

  restore() {
    this.event = '';
    this.panes = [];
    this.pane = {
      size: '50',
      scrollable: false
    };
  }

  addPane(_pane: any) {
    const newPane = Object.assign({}, _pane);
    newPane.size += '%';
    this.panes.push(newPane);
    this.pane = {
      size: '50',
      scrollable: false
    };
  }

  removePane(idx: number) {
    this.panes.splice(idx, 1);
  }
}`}ngOnInit(){this.restore()}changeEvent(a){this.event=a}restore(){this.event="",this.panes=[],this.pane={size:"50",scrollable:!1}}addPane(a){let r=Object.assign({},a);r.size+="%",this.panes.push(r),this.pane={size:"50",scrollable:!1}}removePane(a){this.panes.splice(a,1)}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-labs-doc"]],viewQuery:function(r,n){if(r&1&&(w(sn,7),w(pn,7)),r&2){let l;D(l=A())&&(n.splitter=l.first),D(l=A())&&(n.paneForm=l.first)}},standalone:!1,decls:12,vars:8,consts:[["splitter",""],["customTemplate",""],["paneForm",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","splitter",3,"t-layout-change","t-disabled","t-orientation"],[3,"t-resizable","t-scrollable","t-size","t-size-change",4,"ngFor","ngForOf"],[1,"po-mt-1",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[3,"t-size-change","t-resizable","t-scrollable","t-size"],[1,"po-m-2"],["p-title","Title Pane","p-primary-label","Close",3,"p-primary-action"],[1,"po-font-subtitle","po-text-center"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],[3,"p-fields","p-value"],[1,"po-row"],["p-label","Add Pane",1,"po-md-3",3,"p-click","p-disabled"],["name","disabled","p-label","Disabled",1,"po-md-6",3,"ngModelChange","ngModel"],["name","orientation","p-label","orientation",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let l=I();i(0,"po-container")(1,"span",3),e(2,"Labs"),t(),o(3,"po-divider",4),i(4,"thf-splitter",5,0),g("t-layout-change",function(){return p(l),c(n.changeEvent("(t-layout-change)"))}),F(6,xn,5,4,"thf-splitter-pane",6),t(),i(7,"po-container",7),o(8,"po-info",8),t(),o(9,"app-code-accordion-doc",9),F(10,Sn,11,11,"ng-template",null,1,K),t()}if(r&2){let l=W(11);m(4),s("t-disabled",n.disabled)("t-orientation",n.orientation),m(2),s("ngForOf",n.panes),m(2),s("p-value",n.event),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[$e,Q,Z,H,v,P,Et,te,De,ie,Se,oe,ne,T],encapsulation:2})}}return d})();var hn=["gridComponent"];function fn(d,q){if(d&1){let a=I();i(0,"thf-splitter-pane",9)(1,"po-widget",11),g("p-primary-action",function(){p(a);let n=u();return c(n.closePane())}),i(2,"div",12),o(3,"po-info",13),t(),i(4,"div",12),o(5,"po-info",14),t(),i(6,"div",12),o(7,"po-info",15),t(),i(8,"div",12),o(9,"po-info",16),t()()()}if(d&2){let a=u();s("t-size","30%"),m(3),s("p-value",a.selectedHero.name),m(2),s("p-value",a.selectedHero.nickname),m(2),s("p-value",a.selectedHero.email),m(2),s("p-value",a.selectedHero.city)}}var Ut=(()=>{class d{constructor(a,r){this.router=a,this.changeDetector=r,this.showHeroPane=!1,this.selectedHero=null,this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",email:"hulksmash@marvel.com",status:1,city:"Lages"},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",email:"spvalueerman@marvel.com",status:2,city:"Brusque"},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,email:"goku@dbz.com",city:"Guarulhos"},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,email:"hawkeye@marvel.com",city:"Campinas"},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,email:"nickfuckingfury@marvel.com",city:null},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,email:"gohan@dbz.com",city:null}],this.column=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}]},{property:"city",label:"Cidade"}],this.htmlCode=`  <thf-splitter t-disabled>
    <thf-splitter-pane>
      <div class="po-lg-12 po-pt-2 po-pb-2">
        <div
          class="po-row"
          style="justify-content: space-between; align-items: center"
        >
          <p class="po-font-subtitle">Controle de Her\xF3is</p>
          <po-button
            p-icon="an an-star"
            p-label="Star"
            (p-click)="openExternalLink()"
          ></po-button>
        </div>
        <thf-grid
          #gridComponent
          [t-height]="300"
          [t-selectable]="true"
          [t-single-select]="true"
          [t-items]="items"
          [t-columns]="column"
          [t-sortable]="true"
          (t-selected)="selectItem($event)"
          (t-unselected)="closePane()"
        />
      </div>
    </thf-splitter-pane>

    @if (showHeroPane) {
    <thf-splitter-pane [t-size]="'30%'">
      <po-widget
        p-title="Her\xF3i Selecionado"
        p-primary-label="Fechar Painel"
        (p-primary-action)="closePane()"
      >
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Name"
            [p-value]="selectedHero.name"
          />
        </div>
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Apelido"
            [p-value]="selectedHero.nickname"
          />
        </div>
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Contato"
            [p-value]="selectedHero.email"
          />
        </div>
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Reside em"
            [p-value]="selectedHero.city"
          />
        </div>
      </po-widget>
    </thf-splitter-pane>
    }
  </thf-splitter>
`,this.tsCode=`import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ThfGridColumn, ThfGridComponent } from '@totvs/thf-components';

@Component({
  selector: 'app-thf-splitter-grid-doc',
  templateUrl: './thf-splitter-grid-doc.component.html',
  styleUrl: './thf-splitter-grid-doc.component.css',
  standalone: false,
})
export class ThfSplitterGridDocComponent implements AfterViewInit {
  @ViewChild('gridComponent', { static: true })
  grid!: ThfGridComponent;

  showHeroPane = false;
  selectedHero: any = null;

  items = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      email: 'hulksmash@marvel.com',
      status: 1,
      city: 'Lages',
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      email: 'spvalueerman@marvel.com',
      status: 2,
      city: 'Brusque',
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      email: 'goku@dbz.com',
      city: 'Guarulhos',
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      email: 'hawkeye@marvel.com',
      city: 'Campinas',
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      email: 'nickfuckingfury@marvel.com',
      city: null,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      email: 'gohan@dbz.com',
      city: null,
    },
  ];

  column: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id' },
    { property: 'name', label: 'Nome' },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 1, color: 'color-11', label: 'Ativo' },
        { value: 2, color: 'color-08', label: 'Inativo' },
      ],
    },
    { property: 'city', label: 'Cidade' },
  ];

  constructor(
    protected router: Router,
    protected changeDetector: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.grid.selectRowItem(this.items[0]);
    this.selectItem(this.items[0]);

    this.changeDetector.detectChanges();
  }

  openExternalLink() {
    window.open('https://github.com/po-ui/po-angular');
  }

  selectItem(hero: any) {
    if (!hero) {
      this.closePane();
      return;
    }
    this.selectedHero = {
      id: hero.id || '',
      name: hero.name || '',
      nickname: hero.nickname || '',
      email: hero.email || '',
      city: hero.city || '',
    };
    this.showHeroPane = true;
  }

  closePane() {
    this.showHeroPane = false;
    this.selectedHero = null;
    this.grid.unselectRows();
  }
}`}ngAfterViewInit(){this.grid.selectRowItem(this.items[0]),this.selectItem(this.items[0]),this.changeDetector.detectChanges()}openExternalLink(){window.open("https://github.com/po-ui/po-angular")}selectItem(a){if(!a){this.closePane();return}this.selectedHero={id:a.id||"",name:a.name||"",nickname:a.nickname||"",email:a.email||"",city:a.city||""},this.showHeroPane=!0}closePane(){this.showHeroPane=!1,this.selectedHero=null,this.grid.unselectRows()}static{this.\u0275fac=function(r){return new(r||d)(G(lt),G(Ke))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-grid-doc"]],viewQuery:function(r,n){if(r&1&&w(hn,7),r&2){let l;D(l=A())&&(n.grid=l.first)}},standalone:!1,decls:15,vars:9,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["t-disabled",""],[1,"po-lg-12","po-pt-2","po-pb-2"],[1,"po-row",2,"justify-content","space-between","align-items","center"],[1,"po-font-subtitle"],["p-icon","an an-star","p-label","Star",3,"p-click"],[3,"t-selected","t-unselected","t-height","t-selectable","t-single-select","t-items","t-columns","t-sortable"],[3,"t-size"],[3,"htmlCode","tsCode"],["p-title","Her\xF3i Selecionado","p-primary-label","Fechar Painel",3,"p-primary-action"],[1,"po-row"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Apelido",1,"po-md-12",3,"p-value"],["p-label","Contato",1,"po-md-12",3,"p-value"],["p-label","Reside em",1,"po-md-12",3,"p-value"]],template:function(r,n){if(r&1){let l=I();i(0,"po-container")(1,"span",1),e(2,"Divis\xE3o din\xE2mica"),t(),o(3,"po-divider",2),i(4,"thf-splitter",3)(5,"thf-splitter-pane")(6,"div",4)(7,"div",5)(8,"p",6),e(9,"Controle de Her\xF3is"),t(),i(10,"po-button",7),g("p-click",function(){return p(l),c(n.openExternalLink())}),t()(),i(11,"thf-grid",8,0),g("t-selected",function(C){return p(l),c(n.selectItem(C))})("t-unselected",function(){return p(l),c(n.closePane())}),t()()(),F(13,fn,10,5,"thf-splitter-pane",9),t(),o(14,"app-code-accordion-doc",10),t()}r&2&&(m(11),s("t-height",300)("t-selectable",!0)("t-single-select",!0)("t-items",n.items)("t-columns",n.column)("t-sortable",!0),m(2),ve(n.showHeroPane?13:-1),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[H,v,P,ie,Se,M,oe,ne,T],encapsulation:2})}}return d})();var Kt=(()=>{class d{constructor(){this.optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7},rendererOption:"svg"},this.optionsPie={rendererOption:"svg"},this.categoriesColumn=["coffee","chocolate","tea"],this.evolutionOfCoffeeAndSomeCompetitors=[{label:"2014",data:[91,40,42],type:fe.Column},{label:"2017",data:[93,52,18],type:fe.Column},{label:"2020",data:[95,21,-17],type:fe.Column},{label:"Coffee consumption in Brazil",data:[34,27,79],type:fe.Line,color:"color-10"}],this.coffeeProduction=[{label:"Brazil",data:2796,tooltip:"Brazil (South America)",color:"color-10"},{label:"Vietnam",data:1076,tooltip:"Vietnam (Asia)"},{label:"Colombia",data:688,tooltip:"Colombia (South America)"},{label:"Indonesia",data:682,tooltip:"Indonesia (Asia/Oceania)"},{label:"Peru",data:273,tooltip:"Peru (South America)"}],this.htmlCode=`<thf-splitter>
  <thf-splitter-pane>
    <po-widget p-title="Chart type column with line">
      <po-chart
        p-title="Evolution of coffee and some competitors - %"
        [p-options]="optionsColumn"
        [p-categories]="categoriesColumn"
        [p-series]="evolutionOfCoffeeAndSomeCompetitors"
      >
      </po-chart>
    </po-widget>
  </thf-splitter-pane>
  <thf-splitter-pane [t-size]="'50%'">
    <po-widget p-title="Chart type pizza">
      <po-chart p-title="Top 5 coffee producing countries (in tons)" [p-series]="coffeeProduction"> </po-chart>
    </po-widget>
  </thf-splitter-pane>
</thf-splitter>
`,this.tsCode=`import { Component } from '@angular/core';
import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'app-thf-splitter-chart-doc',
  templateUrl: './thf-splitter-chart-doc.component.html',
  styleUrl: './thf-splitter-chart-doc.component.css',
  standalone: false,
})
export class ThfSplitterChartDocComponent {
    optionsColumn: PoChartOptions = {
    axis: {
      minRange: -20,
      maxRange: 100,
      gridLines: 7,
    },
    rendererOption: 'svg',
  };
  optionsPie: PoChartOptions = {
    rendererOption: 'svg',
  };

  categoriesColumn: Array<string> = ['coffee', 'chocolate', 'tea'];
  evolutionOfCoffeeAndSomeCompetitors: Array<PoChartSerie> = [
    { label: '2014', data: [91, 40, 42], type: PoChartType.Column },
    { label: '2017', data: [93, 52, 18], type: PoChartType.Column },
    { label: '2020', data: [95, 21, -17], type: PoChartType.Column },
    {
      label: 'Coffee consumption in Brazil',
      data: [34, 27, 79],
      type: PoChartType.Line,
      color: 'color-10',
    },
  ];
  coffeeProduction: Array<PoChartSerie> = [
    {
      label: 'Brazil',
      data: 2796,
      tooltip: 'Brazil (South America)',
      color: 'color-10',
    },
    { label: 'Vietnam', data: 1076, tooltip: 'Vietnam (Asia)' },
    { label: 'Colombia', data: 688, tooltip: 'Colombia (South America)' },
    { label: 'Indonesia', data: 682, tooltip: 'Indonesia (Asia/Oceania)' },
    { label: 'Peru', data: 273, tooltip: 'Peru (South America)' },
  ];
}
`}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-chart-doc"]],standalone:!1,decls:12,vars:8,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["p-title","Chart type column with line"],["p-title","Evolution of coffee and some competitors - %",3,"p-options","p-categories","p-series"],[3,"t-size"],["p-title","Chart type pizza"],["p-title","Top 5 coffee producing countries (in tons)",3,"p-series","p-options"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Divis\xE3o com gr\xE1ficos din\xE2micos"),t(),o(3,"po-divider",1),i(4,"thf-splitter")(5,"thf-splitter-pane")(6,"po-widget",2),o(7,"po-chart",3),t()(),i(8,"thf-splitter-pane",4)(9,"po-widget",5),o(10,"po-chart",6),t()()(),o(11,"app-code-accordion-doc",7),t()),r&2&&(m(7),s("p-options",n.optionsColumn)("p-categories",n.categoriesColumn)("p-series",n.evolutionOfCoffeeAndSomeCompetitors),m(),s("t-size","50%"),m(2),s("p-series",n.coffeeProduction)("p-options",n.optionsPie),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[st,v,P,Se,oe,ne,T],encapsulation:2})}}return d})();var Jt=(()=>{class d{constructor(){this.htmlCode=`<thf-splitter>
          <thf-splitter-pane>
            <h4>Pane 1</h4>
          </thf-splitter-pane>

          <thf-splitter-pane>
            <thf-splitter [t-orientation]="'vertical'">
              <thf-splitter-pane>
                <h4>Pane 2</h4>
              </thf-splitter-pane>
              <thf-splitter-pane>
                <h4>Pane 3</h4>
              </thf-splitter-pane>
            </thf-splitter>
          </thf-splitter-pane>
        </thf-splitter>
`,this.tsCode=`import { Component } from '@angular/core';
  
@Component({
  selector: 'app-thf-splitter-basic-doc',
  standalone: false,
  templateUrl: './thf-thf-splitter-basic-doc.html',
})
export class ThfSplitterBasicDocComponent {
}
  `}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-basic-doc"]],standalone:!1,decls:17,vars:3,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-orientation"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic"),t(),o(3,"po-divider",1),i(4,"thf-splitter")(5,"thf-splitter-pane")(6,"h4"),e(7,"Pane 1"),t()(),i(8,"thf-splitter-pane")(9,"thf-splitter",2)(10,"thf-splitter-pane")(11,"h4"),e(12,"Pane 2"),t()(),i(13,"thf-splitter-pane")(14,"h4"),e(15,"Pane 3"),t()()()()(),o(16,"app-code-accordion-doc",3),t()),r&2&&(m(9),s("t-orientation","vertical"),m(7),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,oe,ne,T],encapsulation:2})}}return d})();var Cn=()=>[Ut,Kt,Jt];function Pn(d,q){d&1&&(i(0,"div",3),o(1,"app-thf-splitter-basic-doc")(2,"app-thf-splitter-grid-doc")(3,"app-thf-splitter-chart-doc"),t())}function Tn(d,q){d&1&&o(0,"po-loading-overlay",4),d&2&&s("p-screen-lock",!1)}var $t=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter"]],standalone:!1,decls:9,vars:0,consts:[["p-title","THF-Splitter","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],["labs","",1,"samples-container"],[1,"samples-container"],[3,"p-screen-lock"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-splitter")(2,"div",1),F(3,Pn,4,0)(4,Tn,1,1),Ge(5,3,Cn,null,4),Ne(),t(),i(7,"div",2),o(8,"app-thf-splitter-labs-doc"),t()()())},dependencies:[dt,X,yt,Wt],encapsulation:2})}}return d})();var Zt=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-pane"]],standalone:!1,decls:2,vars:0,consts:[["p-title","THF-Splitter-Pane","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"]],template:function(r,n){r&1&&(i(0,"po-page-default",0),o(1,"api-thf-splitter-pane"),t())},dependencies:[X,gt],encapsulation:2})}}return d})();var wn=[{path:"thf-grid",component:Mt},{path:"thf-lookup",component:zt},{path:"thf-lookup-data",component:Ve},{path:"thf-splitter",component:$t},{path:"thf-splitter-pane",component:Zt}],Xt=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275mod=de({type:d})}static{this.\u0275inj=le({imports:[Fe.forChild(wn),Fe]})}}return d})();var jm=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275mod=de({type:d})}static{this.\u0275inj=le({imports:[ye,nt,ot,ke,St,bt,Ct,Xt,rt]})}}return d})();export{jm as DocumentationModule};
