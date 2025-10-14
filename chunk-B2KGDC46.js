import{a as rt}from"./chunk-KXBEWMZZ.js";import{a as Ke,b as Je}from"./chunk-4XQAF23K.js";import{a as oe,b as se,c as F,d as ie,e as ne,g as lt}from"./chunk-XIJKEJF4.js";import"./chunk-PKI3BALL.js";import"./chunk-LE6RLARK.js";import{a as dt}from"./chunk-QXBOJ6EY.js";import{$ as p,$b as Me,$c as Ue,$f as me,Cc as Oe,Cf as Y,Da as x,Db as f,Ea as re,Eb as v,Ef as at,Fb as g,Gb as Le,Hb as K,Ia as I,Id as he,Jb as Ee,Jc as Qe,Ka as ke,Kb as Re,La as _e,Lc as L,Md as U,Na as s,Nc as B,Nd as M,Oc as Se,Pc as Q,Pf as ee,Qc as Ge,Rc as S,Sc as X,Tc as be,Td as Ze,U as Ae,Ua as Fe,Ud as H,V as ae,Vc as Ne,Wc as Be,X as qe,Xb as J,Xc as He,Xf as te,Ya as i,Yf as z,Za as t,_a as o,_c as We,a as G,aa as c,af as et,b as N,bf as tt,cb as R,cg as Ce,hc as je,he as Xe,ib as h,ic as Ve,ja as $,jb as u,jc as le,kb as Z,ke as ce,lb as y,le as Ye,me as b,nf as ge,qb as T,qc as ze,qf as it,rb as w,rd as $e,rf as nt,sa as m,sb as D,td as Te,ue as fe,ve as de,wb as W,wc as xe,wf as ot,xa as j,xb as e,xd as C,xf as ye,yb as ue,zb as Ie,ze as ve}from"./chunk-7QTEBBNI.js";var Vt=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","enums-before",""]],[["","enums-after",""]],[["","templates-before",""]],[["","templates-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],zt=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[enums-before]","[enums-after]","[templates-before]","[templates-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],mt=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let A=E.querySelector(".po-tab-button-label");A&&A?.textContent?.trim().toLowerCase()===a&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(j($))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-grid"]],viewQuery:function(r,n){if(r&1&&(T(z,5),T(M,5)),r&2){let l;w(l=D())&&(n.tabs=l.first),w(l=D())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:zt,decls:6286,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","Function"],[1,"language-html"],["pan","",1,"docs-api-property-type","Array<ThfTableAction>"],["href","/guides/icons"],[1,"language-typescript"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<ThfAggregateDescriptor>"],["p-type","success","p-value","since 19.19.0"],["pan","",1,"docs-api-property-type","Array<ThfGridColumn>"],[1,"docs-api-deprecated-marker"],["p-type","success","p-value","since 19.8.0"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDropdownAction>"],["pan","",1,"docs-api-property-type","{","[key:","string]:","TemplateRef<any>;","}"],["pan","",1,"docs-api-property-type","ThfGridEditProperties"],["pan","",1,"docs-api-property-type","Array<PoPageDynamicSearchFilters>"],["pan","",1,"docs-api-property-type","'basic'"],["pan","",1,"docs-api-property-type","'service'"],["pan","",1,"docs-api-property-type","ThfGridRowActions"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","null"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","ThfGridLiterals"],["pan","",1,"docs-api-property-type","(()","=>","ThfGridOptions)"],["pan","",1,"docs-api-property-type","Array<ThfGridOptionPaging>"],[1,"language-json"],["pan","",1,"docs-api-property-type","ThfGridDeleteService"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","Array<ThfGridColumnSort>"],["p-label","M\xE9todos"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],["href","https://tdn.totvs.com/pages/releaseview.action?pageId=871520382"],["pan","",1,"docs-api-property-type","{","key:","value","}"],["p-label","Interfaces"],["p-label","ThfTableAction"],["href","https://po-ui.io/icons"],["p-label","ThfAggregateDescriptor"],["pan","",1,"docs-api-property-type","'sum'"],["pan","",1,"docs-api-property-type","'average'"],["pan","",1,"docs-api-property-type","'count'"],["pan","",1,"docs-api-property-type","'min'"],["pan","",1,"docs-api-property-type","'max'"],["p-label","ThfGridColumnSort"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["p-label","ThfGridColumn"],["pan","",1,"docs-api-property-type","PoTableBoolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","PoTableDetail"],["pan","",1,"docs-api-property-type","CustomEditProperties"],["href","https://angular.dev/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnIcon>"],["href","documentation/po-table#tableColumnIcon"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["pan","",1,"docs-api-property-type","Array<PoTableSubtitleColumn>"],["href","/documentation/po-table-cell-template"],["href","/documentation/po-table-column-template"],["p-label","CustomEditProperties"],["href","https://po-ui.io/documentation/po-dynamic-form"],["pan","",1,"docs-api-property-type","'input'"],["pan","",1,"docs-api-property-type","'number'"],["pan","",1,"docs-api-property-type","'select'"],["pan","",1,"docs-api-property-type","'datepicker'"],["pan","",1,"docs-api-property-type","'switch'"],["pan","",1,"docs-api-property-type","'combo'"],["pan","",1,"docs-api-property-type","'multiselect'"],["pan","",1,"docs-api-property-type","'decimal'"],["pan","",1,"docs-api-property-type","'checkbox'"],["pan","",1,"docs-api-property-type","'lookup'"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["pan","",1,"docs-api-property-type","((rowData:","any,","column?:","ThfGridColumn)","=>","boolean)"],["pan","",1,"docs-api-property-type","((item:","any)","=>","string)"],["pan","",1,"docs-api-property-type","Array<ThfLookupFilterSearchSelect>"],["pan","",1,"docs-api-property-type","Array<ThfLookupKeysLabel>"],["href","https://po-ui.io/documentation/po-i18n"],["pan","",1,"docs-api-property-type","ThfLookupGridProperties"],["pan","",1,"docs-api-property-type","(value:","any)","=>","void"],["pan","",1,"docs-api-property-type","(model:","any)","=>","void"],["pan","",1,"docs-api-property-type","(error:","HttpErrorResponse)","=>","void"],["pan","",1,"docs-api-property-type","(selection:","any"],["pan","",1,"docs-api-property-type","Array<any>)","=>","void"],["pan","",1,"docs-api-property-type","'sm'"],["pan","",1,"docs-api-property-type","'md'"],["pan","",1,"docs-api-property-type","'lg'"],["pan","",1,"docs-api-property-type","'xl'"],["pan","",1,"docs-api-property-type","'auto'"],["p-label","ThfGridDeleteService"],["p-label","ThfGridEditProperties"],["pan","",1,"docs-api-property-type","(param:","any)","=>","FormGroup"],["pan","",1,"docs-api-property-type","(data:","any,","columnProperty:","string)","=>","FormGroup"],["p-label","ThfGridLiterals"],["p-label","ThfGridOptionPaging"],["p-label","ThfGridOptions"],["p-label","ThfGridRowActions"],["pan","",1,"docs-api-property-type","(param:","any,","mode:","'edit'"],["pan","",1,"docs-api-property-type","'include')","=>","FormGroup"],["pan","",1,"docs-api-property-type","Observable<FormGroup>"],["pan","",1,"docs-api-property-type","(row:","any)","=>","void"],["pan","",1,"docs-api-property-type","(row:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","Observable<boolean>"],["pan","",1,"docs-api-property-type","(updatedRow:","any,","originalRow:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","(updatedRows:","Array<any>)","=>","void"],["pan","",1,"docs-api-property-type","Array<ThfGridEditModeActionType>"],["pan","",1,"docs-api-property-type","(updatedField:","any,","columnProperty:","string)","=>","boolean"],["p-label","Enums"],["p-label","ThfColumnSpacing"],["p-label","ThfGridEditModeActionType"],["p-label","Templates"],["p-label","ThfGridCellTemplateDirective"],["p-label","ThfGridColumnTemplateDirective"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(Z(Vt),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),y(4),t(),i(5,"po-tab",4),y(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfGridComponent"),t()(),i(16,"div",10)(17,"p"),e(18,`O grid foi criado para que voc\xEA tenha um controle de alto desempenho, oferecendo uma performance extremamente r\xE1pida,
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
// Sa\xEDda esperada: [{ id: 1, name: 'Item 1', op: 'replace' }, { id: 2, name: 'Item 2', op: 'remove' }]`),t()()()()(),i(2352,"h5")(2353,"b"),e(2354,"Retorno"),t()(),i(2355,"table",16)(2356,"tr",17)(2357,"th",18),e(2358,"Tipo"),t(),i(2359,"th",18),e(2360,"Descri\xE7\xE3o"),t()(),i(2361,"tr",19)(2362,"td",23)(2363,"code",65),e(2364,"Array<any>"),t()(),i(2365,"td",26)(2366,"p"),e(2367,"Uma lista de objetos representando os itens modificados. Cada objeto ter\xE1 a propriedade "),i(2368,"code"),e(2369,"op"),t(),e(2370," que indica a a\xE7\xE3o realizada"),t()()()(),o(2371,"br"),i(2372,"table",63)(2373,"tr",19)(2374,"th",64)(2375,"div",21)(2376,"h4")(2377,"span",22),e(2378," getSelectedRows "),t()()()()(),i(2379,"tr",26)(2380,"td",26)(2381,"p"),e(2382,"Respons\xE1vel por retornar os itens do grid que est\xE3o selecionadas."),t()()()(),o(2383,"br"),i(2384,"table",63)(2385,"tr",19)(2386,"th",64)(2387,"div",21)(2388,"h4")(2389,"span",22),e(2390," showAdditionalHelp "),t()()()()(),i(2391,"tr",26)(2392,"td",26)(2393,"p"),e(2394,"Exibe "),i(2395,"code"),e(2396,"additionalHelpTooltip"),t(),e(2397," ou executa a a\xE7\xE3o definida em "),i(2398,"code"),e(2399,"additionalHelp"),t(),e(2400,` de um campo durante a
edi\xE7\xE3o (`),i(2401,"code"),e(2402,"t-edit-properties"),t(),e(2403," ou "),i(2404,"code"),e(2405,"t-grid-row-actions"),t(),e(2406,`) do grid. Para isso, ser\xE1 necess\xE1rio ter uma inst\xE2ncia do
componente no DOM e configurar uma tecla de atalho utilizando o evento `),i(2407,"code"),e(2408,"t-keydown"),t(),e(2409,"."),t(),i(2410,"pre")(2411,"code"),e(2412,`import { ThfGridComponent } from '@totvs/thf-components';
...
@ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

columns: Array<ThfGridColumn> = [
 ...
 {
   property: 'name',
   label: 'Nome',
   editProperties: {
     componentEditable: 'input',
     additionalHelpTooltip: 'Nome completo',
     keydown: this.onkeydown.bind(this, 'name')
    }
 },
]

onkeydown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.thfGrid.showAdditionalHelp(property);
 }
}`),t()(),i(2413,"blockquote")(2414,"p"),e(2415,`Com t-grid-row-actions: Alguns atalhos j\xE1 est\xE3o em uso, ent\xE3o, evite sobrescrev\xEA-los. Para mais detalhes,
consulte o `),i(2416,"a",66),e(2417,"TDN"),t(),e(2418,"."),t()()()()(),i(2419,"h5")(2420,"b"),e(2421,"Par\xE2metros"),t()(),i(2422,"table",16)(2423,"tr",17)(2424,"th",18),e(2425,"Nome"),t(),i(2426,"th",18),e(2427,"Tipo"),t(),i(2428,"th",18),e(2429,"Descri\xE7\xE3o"),t()(),i(2430,"tr",19)(2431,"td",20),e(2432," property"),t(),i(2433,"td",23)(2434,"code",65),e(2435," string "),t()(),i(2436,"td",26)(2437,"p"),e(2438,"Identificador da coluna."),t()()()(),o(2439,"br"),i(2440,"table",63)(2441,"tr",19)(2442,"th",64)(2443,"div",21)(2444,"h4")(2445,"span",22),e(2446," selectRowItem "),t()()()()(),i(2447,"tr",26)(2448,"td",26)(2449,"p"),e(2450,"Seleciona um item do grid."),t()()()(),i(2451,"h5")(2452,"b"),e(2453,"Par\xE2metros"),t()(),i(2454,"table",16)(2455,"tr",17)(2456,"th",18),e(2457,"Nome"),t(),i(2458,"th",18),e(2459,"Tipo"),t(),i(2460,"th",18),e(2461,"Descri\xE7\xE3o"),t()(),i(2462,"tr",19)(2463,"td",20),e(2464," item"),t(),i(2465,"td",23)(2466,"code",67),e(2467," { key: value } "),t(),i(2468,"code",27),e(2469," Function "),t()(),i(2470,"td",26)(2471,"p"),e(2472,"Item ou fun\xE7\xE3o que recebe como par\xE2metro o item e retorna um boolean."),t()()()(),o(2473,"br"),i(2474,"table",63)(2475,"tr",19)(2476,"th",64)(2477,"div",21)(2478,"h4")(2479,"span",22),e(2480," unselectRowItem "),t()()()()(),i(2481,"tr",26)(2482,"td",26)(2483,"p"),e(2484,"Desmarca o item que est\xE1 selecionado."),t()()()(),i(2485,"h5")(2486,"b"),e(2487,"Par\xE2metros"),t()(),i(2488,"table",16)(2489,"tr",17)(2490,"th",18),e(2491,"Nome"),t(),i(2492,"th",18),e(2493,"Tipo"),t(),i(2494,"th",18),e(2495,"Descri\xE7\xE3o"),t()(),i(2496,"tr",19)(2497,"td",20),e(2498," item"),t(),i(2499,"td",23)(2500,"code",67),e(2501," { key: value } "),t(),i(2502,"code",27),e(2503," Function "),t()(),i(2504,"td",26)(2505,"p"),e(2506,"Item ou fun\xE7\xE3o que recebe como par\xE2metro o item e retorna um boolean."),t()()()(),o(2507,"br"),i(2508,"table",63)(2509,"tr",19)(2510,"th",64)(2511,"div",21)(2512,"h4")(2513,"span",22),e(2514," applyFilters "),t()()()()(),i(2515,"tr",26)(2516,"td",26)(2517,"p"),e(2518,"M\xE9todo respons\xE1vel por realizar busca no servi\xE7o de dados podendo informar filtros e com o retorno, atualiza o grid."),t(),i(2519,"p"),e(2520,"Caso n\xE3o seja informado par\xE2metro, nada ser\xE1 adicionado ao GET, conforme abaixo:"),t(),i(2521,"pre")(2522,"code"),e(2523,"url + ?page=1&pageSize=10"),t()(),i(2524,"blockquote")(2525,"p"),e(2526,"Obs: os par\xE2metros "),i(2527,"code"),e(2528,"page"),t(),e(2529," e "),i(2530,"code"),e(2531,"pageSize"),t(),e(2532," sempre ser\xE3o chamados independente de ser enviados outros par\xE2metros."),t()(),i(2533,"p"),e(2534,"Caso sejam informados os par\xE2metros "),i(2535,"code"),e(2536,"{ name: 'JOHN', age: '23' }"),t(),e(2537,", todos ser\xE3o adicionados ao GET, conforme abaixo:"),t(),i(2538,"pre")(2539,"code"),e(2540,"url + ?page=1&pageSize=10&name=JOHN&age=23"),t()()()()(),i(2541,"h5")(2542,"b"),e(2543,"Par\xE2metros"),t()(),i(2544,"table",16)(2545,"tr",17)(2546,"th",18),e(2547,"Nome"),t(),i(2548,"th",18),e(2549,"Tipo"),t(),i(2550,"th",18),e(2551,"Descri\xE7\xE3o"),t()(),i(2552,"tr",19)(2553,"td",20),e(2554," queryParams"),t(),i(2555,"td",23)(2556,"code",67),e(2557," { key: value } "),t()(),i(2558,"td",26)(2559,"p"),e(2560,"Formato do objeto a ser enviado."),t(),i(2561,"blockquote")(2562,"p"),e(2563,"Pode ser utilizada qualquer string como key, e qualquer string ou number como value."),t()()()()(),o(2564,"br"),i(2565,"table",63)(2566,"tr",19)(2567,"th",64)(2568,"div",21)(2569,"h4")(2570,"span",22),e(2571," calculateHeightDynamically "),t()()()()(),i(2572,"tr",26)(2573,"td",26)(2574,"p"),e(2575,"Mant\xE9m compatibilidade com vers\xF5es anteriores, chamando "),i(2576,"code"),e(2577,"calculateDynamicSize"),t(),e(2578," com a propriedade "),i(2579,"code"),e(2580,"'height'"),t(),e(2581,"."),t()()()(),i(2582,"h5")(2583,"b"),e(2584,"Par\xE2metros"),t()(),i(2585,"table",16)(2586,"tr",17)(2587,"th",18),e(2588,"Nome"),t(),i(2589,"th",18),e(2590,"Tipo"),t(),i(2591,"th",18),e(2592,"Descri\xE7\xE3o"),t()(),i(2593,"tr",19)(2594,"td",20),e(2595," callRowHeight"),t(),o(2596,"td",23),i(2597,"td",26)(2598,"p"),e(2599,"Define se o "),i(2600,"code"),e(2601,"calculateRowHeight"),t(),e(2602," deve ser chamado ap\xF3s o c\xE1lculo do tamanho."),t()()()(),o(2603,"br"),i(2604,"table",63)(2605,"tr",19)(2606,"th",64)(2607,"div",21)(2608,"h4")(2609,"span",22),e(2610," removeItem "),t()()()()(),i(2611,"tr",26)(2612,"td",26)(2613,"p"),e(2614,"Remove um item localmente do grid."),t()()()(),i(2615,"h5")(2616,"b"),e(2617,"Par\xE2metros"),t()(),i(2618,"table",16)(2619,"tr",17)(2620,"th",18),e(2621,"Nome"),t(),i(2622,"th",18),e(2623,"Tipo"),t(),i(2624,"th",18),e(2625,"Descri\xE7\xE3o"),t()(),i(2626,"tr",19)(2627,"td",20),e(2628," item"),t(),i(2629,"td",23)(2630,"code",52),e(2631," number "),t(),i(2632,"code",67),e(2633," { key: value } "),t()(),i(2634,"td",26)(2635,"p"),e(2636,"\xCDndice ou item que ser\xE1 removido."),t(),i(2637,"blockquote")(2638,"p"),e(2639,"Ao remover o item, a linha que o representa ser\xE1 removida do grid."),t()()()()(),o(2640,"br"),i(2641,"table",63)(2642,"tr",19)(2643,"th",64)(2644,"div",21)(2645,"h4")(2646,"span",22),e(2647," unselectRows "),t()()()()(),i(2648,"tr",26)(2649,"td",26)(2650,"p"),e(2651,"M\xE9todo respons\xE1vel por desmarcar as linhas que est\xE3o selecionadas."),t()()()(),o(2652,"br"),i(2653,"table",63)(2654,"tr",19)(2655,"th",64)(2656,"div",21)(2657,"h4")(2658,"span",22),e(2659," getInfoProperties "),t()()()()(),i(2660,"tr",26)(2661,"td",26)(2662,"p"),e(2663,"M\xE9todo que retorna informa\xE7\xF5es sobre os itens atuais da tabela."),t(),i(2664,"p"),e(2665,"Inclui:"),t(),i(2666,"ul")(2667,"li")(2668,"code"),e(2669,"items"),t(),e(2670,": lista de itens atualmente carregados na tabela."),t(),i(2671,"li")(2672,"code"),e(2673,"total"),t(),e(2674,": total de itens informado pela API atrav\xE9s da propriedade "),i(2675,"code"),e(2676,"total"),t(),e(2677,"; pode ser "),i(2678,"code"),e(2679,"undefined"),t(),e(2680," caso a API n\xE3o informe."),t(),i(2681,"li")(2682,"code"),e(2683,"page"),t(),e(2684,": n\xFAmero da p\xE1gina atual informado pela API ("),i(2685,"code"),e(2686,"itemsByApi.page"),t(),e(2687,"); se n\xE3o existir, utiliza a propriedade local "),i(2688,"code"),e(2689,"page"),t(),e(2690,"."),t(),i(2691,"li")(2692,"code"),e(2693,"pageSize"),t(),e(2694,": quantidade de itens por p\xE1gina informada pela API ("),i(2695,"code"),e(2696,"itemsByApi.pageSize"),t(),e(2697,"); se n\xE3o existir, utiliza a propriedade local "),i(2698,"code"),e(2699,"pageSize"),t(),e(2700,"."),t()()()()(),o(2701,"br"),i(2702,"table",63)(2703,"tr",19)(2704,"th",64)(2705,"div",21)(2706,"h4")(2707,"span",22),e(2708," updateItem "),t()()()()(),i(2709,"tr",26)(2710,"td",26)(2711,"p"),e(2712,"Atualiza um item do grid quando utilizado "),i(2713,"strong"),e(2714,"t-itens"),t(),e(2715,"."),t()()()(),i(2716,"h5")(2717,"b"),e(2718,"Par\xE2metros"),t()(),i(2719,"table",16)(2720,"tr",17)(2721,"th",18),e(2722,"Nome"),t(),i(2723,"th",18),e(2724,"Tipo"),t(),i(2725,"th",18),e(2726,"Descri\xE7\xE3o"),t()(),i(2727,"tr",19)(2728,"td",20),e(2729," item"),t(),i(2730,"td",23)(2731,"code",52),e(2732," number "),t(),i(2733,"code",67),e(2734," { key: value } "),t()(),i(2735,"td",26)(2736,"p"),e(2737,"\xCDndice ou o item que ser\xE1 atualizado."),t()()(),i(2738,"tr",19)(2739,"td",20),e(2740," updatedItem"),t(),i(2741,"td",23)(2742,"code",67),e(2743," { key: value } "),t()(),i(2744,"td",26)(2745,"p"),e(2746,"Item que foi atualizado."),t(),i(2747,"blockquote")(2748,"p"),e(2749,"Ao atualizar o item, a informa\xE7\xE3o ser\xE1 alterada no grid."),t()()()()(),o(2750,"br"),i(2751,"table",63)(2752,"tr",19)(2753,"th",64)(2754,"div",21)(2755,"h4")(2756,"span",22),e(2757," calculateDynamicSize "),t()()()()(),i(2758,"tr",26)(2759,"td",26)(2760,"p"),e(2761,"calcula dinamicamente o tamanho da grid com base na porcentagem definida nas propriedades "),i(2762,"strong"),e(2763,"t-height"),t(),e(2764,`,
`),i(2765,"strong"),e(2766,"t-min-height"),t(),e(2767," e "),i(2768,"strong"),e(2769,"t-max-height"),t(),e(2770,"."),t(),i(2771,"p"),e(2772,`Caso a grid esteja dentro de um componente ou elemento que altere sua visibilidade,
\xE9 necess\xE1rio chamar esta fun\xE7\xE3o para garantir um c\xE1lculo correto. Exemplo:`),t(),i(2773,"pre")(2774,"code",28),e(2775,`<po-tabs>
 <po-tab (p-click)="emitClickTab()" p-label="PO Tabs">
   <thf-grid #thfGrid> </thf-grid>
 </po-tab>
</po-tabs>`),t()(),i(2776,"pre")(2777,"code",31),e(2778,`@ViewChild('thfGrid') thfGrid: ThfGridComponent;

emitClickTab() {
 // Time-out necess\xE1rio para garantir que o DOM foi atualizado antes do c\xE1lculo da altura.
 setTimeout(() => {
   this.thfGrid.calculateDynamicSize('height', true);
 }, 100);
}`),t()()()()(),i(2779,"h5")(2780,"b"),e(2781,"Par\xE2metros"),t()(),i(2782,"table",16)(2783,"tr",17)(2784,"th",18),e(2785,"Nome"),t(),i(2786,"th",18),e(2787,"Tipo"),t(),i(2788,"th",18),e(2789,"Descri\xE7\xE3o"),t()(),i(2790,"tr",19)(2791,"td",20),e(2792," property"),t(),o(2793,"td",23),i(2794,"td",26)(2795,"p"),e(2796,"Define qual propriedade ser\xE1 calculada: "),i(2797,"code"),e(2798,"'height'"),t(),e(2799,", "),i(2800,"code"),e(2801,"'minHeight'"),t(),e(2802," ou "),i(2803,"code"),e(2804,"'maxHeight'"),t(),e(2805,"."),t()()(),i(2806,"tr",19)(2807,"td",20),e(2808," callRowHeight"),t(),o(2809,"td",23),i(2810,"td",26)(2811,"p"),e(2812,"Define se o m\xE9todo "),i(2813,"code"),e(2814,"calculateRowHeight"),t(),e(2815," deve ser chamado ap\xF3s o c\xE1lculo do tamanho."),t()()()(),o(2816,"br"),t()()(),y(2817,2),t(),i(2818,"po-tab",68),y(2819,3),i(2820,"po-container",5)(2821,"po-accordion",6)(2822,"po-accordion-item",69)(2823,"h4",9)(2824,"code"),e(2825,"ThfTableAction"),t()(),i(2826,"div",10)(2827,"p"),e(2828," Interface para configura\xE7\xE3o das a\xE7\xF5es."),t()(),i(2829,"h4",15),e(2830,"Propriedades"),t(),i(2831,"table",16)(2832,"tr",17)(2833,"th",18),e(2834,"Nome"),t(),i(2835,"th",18),e(2836,"Tipo"),t(),i(2837,"th",18),e(2838,"Descri\xE7\xE3o"),t()(),i(2839,"tr",19)(2840,"td",20)(2841,"div",21)(2842,"span",22),e(2843," action"),o(2844,"br"),t()()(),i(2845,"td",23)(2846,"code",27),e(2847,"Function"),t()(),i(2848,"td",26)(2849,"em")(2850,"strong"),e(2851,"(opcional)"),t()(),i(2852,"p"),e(2853,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),i(2854,"blockquote")(2855,"p"),e(2856,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),i(2857,"em"),e(2858,"bind"),t(),e(2859,"."),t()(),i(2860,"p"),e(2861,"Exemplo: "),i(2862,"code"),e(2863,"action: this.myFunction.bind(this)"),t()()()(),i(2864,"tr",19)(2865,"td",20)(2866,"div",21)(2867,"span",22),e(2868," disabled"),o(2869,"br"),t()()(),i(2870,"td",23)(2871,"code",24),e(2872,"boolean "),t(),i(2873,"code",27),e(2874," Function"),t()(),i(2875,"td",26)(2876,"em")(2877,"strong"),e(2878,"(opcional)"),t()(),i(2879,"p"),e(2880,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),i(2881,"p"),e(2882,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),i(2883,"tr",19)(2884,"td",20)(2885,"div",21)(2886,"span",22),e(2887," fixed"),o(2888,"br"),t()()(),i(2889,"td",23)(2890,"code",24),e(2891,"boolean"),t()(),i(2892,"td",26)(2893,"em")(2894,"strong"),e(2895,"(opcional)"),t()(),i(2896,"p"),e(2897,"Propriedade para fixar a a\xE7\xE3o"),t()()(),i(2898,"tr",19)(2899,"td",20)(2900,"div",21)(2901,"span",22),e(2902," icon"),o(2903,"br"),t()()(),i(2904,"td",23)(2905,"code",40),e(2906,"string "),t(),i(2907,"code",51),e(2908," TemplateRef<void>"),t()(),i(2909,"td",26)(2910,"em")(2911,"strong"),e(2912,"(opcional)"),t()(),i(2913,"p"),e(2914,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),i(2915,"p"),e(2916,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),i(2917,"a",70),e(2918,"Biblioteca de \xEDcones"),t(),e(2919,". conforme exemplo abaixo:"),t(),i(2920,"pre")(2921,"code"),e(2922,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>`),t()(),i(2923,"p"),e(2924,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),i(2925,"pre")(2926,"code"),e(2927,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>`),t()(),i(2928,"p"),e(2929,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),i(2930,"code"),e(2931,"TemplateRef"),t(),e(2932,`, conforme exemplo abaixo:
component.html:`),t(),i(2933,"pre")(2934,"code"),e(2935,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>`),t()(),i(2936,"p"),e(2937,"component.ts:"),t(),i(2938,"pre")(2939,"code"),e(2940,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];`),t()()()(),i(2941,"tr",19)(2942,"td",20)(2943,"div",21)(2944,"span",22),e(2945," label"),o(2946,"br"),t()()(),i(2947,"td",23)(2948,"code",40),e(2949,"string"),t()(),i(2950,"td",26)(2951,"p"),e(2952,"R\xF3tulo da a\xE7\xE3o."),t()()(),i(2953,"tr",19)(2954,"td",20)(2955,"div",21)(2956,"span",22),e(2957," selected"),o(2958,"br"),t()()(),i(2959,"td",23)(2960,"code",24),e(2961,"boolean"),t()(),i(2962,"td",26)(2963,"em")(2964,"strong"),e(2965,"(opcional)"),t()(),i(2966,"p"),e(2967,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),i(2968,"tr",19)(2969,"td",20)(2970,"div",21)(2971,"span",22),e(2972," separator"),o(2973,"br"),t()()(),i(2974,"td",23)(2975,"code",24),e(2976,"boolean"),t()(),i(2977,"td",26)(2978,"em")(2979,"strong"),e(2980,"(opcional)"),t()(),i(2981,"p"),e(2982,"Atribui uma linha separadora acima do item."),t()()(),i(2983,"tr",19)(2984,"td",20)(2985,"div",21)(2986,"span",22),e(2987," type"),o(2988,"br"),t()()(),i(2989,"td",23)(2990,"code",40),e(2991,"string"),t()(),i(2992,"td",26)(2993,"em")(2994,"strong"),e(2995,"(opcional)"),t()(),i(2996,"p"),e(2997,"Define a cor do item, sendo "),i(2998,"code"),e(2999,"default"),t(),e(3e3," o padr\xE3o."),t(),i(3001,"p"),e(3002,"Valores v\xE1lidos:"),t(),i(3003,"ul")(3004,"li")(3005,"code"),e(3006,"default"),t()(),i(3007,"li")(3008,"code"),e(3009,"danger"),t(),e(3010," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),i(3011,"tr",19)(3012,"td",20)(3013,"div",21)(3014,"span",22),e(3015," url"),o(3016,"br"),t()()(),i(3017,"td",23)(3018,"code",40),e(3019,"string"),t()(),i(3020,"td",26)(3021,"em")(3022,"strong"),e(3023,"(opcional)"),t()(),i(3024,"p"),e(3025,"URL utilizada no redirecionamento das p\xE1ginas."),t()()(),i(3026,"tr",19)(3027,"td",20)(3028,"div",21)(3029,"span",22),e(3030," visible"),o(3031,"br"),t()()(),i(3032,"td",23)(3033,"code",24),e(3034,"boolean "),t(),i(3035,"code",27),e(3036," Function"),t()(),i(3037,"td",26)(3038,"em")(3039,"strong"),e(3040,"(opcional)"),t()(),i(3041,"p"),e(3042,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),i(3043,"blockquote")(3044,"p"),e(3045,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),i(3046,"p"),e(3047,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),i(3048,"ul")(3049,"li")(3050,"p"),e(3051,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),i(3052,"li")(3053,"p"),e(3054,"Informar diretamente um valor booleano."),t()()()()()()(),i(3055,"po-accordion-item",71)(3056,"h4",9)(3057,"code"),e(3058,"ThfAggregateDescriptor"),t()(),i(3059,"div",10)(3060,"p"),e(3061,"Recebe um objeto contendo a coluna, uma label e a fun\xE7\xE3o que ser\xE1 aplicada para o c\xE1lculo do totalizador."),t()(),i(3062,"h4",15),e(3063,"Propriedades"),t(),i(3064,"table",16)(3065,"tr",17)(3066,"th",18),e(3067,"Nome"),t(),i(3068,"th",18),e(3069,"Tipo"),t(),i(3070,"th",18),e(3071,"Descri\xE7\xE3o"),t()(),i(3072,"tr",19)(3073,"td",20)(3074,"div",21)(3075,"span",22),e(3076," aggregate"),o(3077,"br"),t()()(),i(3078,"td",23)(3079,"code",72),e(3080,"'sum' "),t(),i(3081,"code",73),e(3082," 'average' "),t(),i(3083,"code",74),e(3084," 'count' "),t(),i(3085,"code",75),e(3086," 'min' "),t(),i(3087,"code",76),e(3088," 'max'"),t()(),i(3089,"td",26)(3090,"p"),e(3091,"Propriedade que recebe a fun\xE7\xE3o para o c\xE1lculo."),t()()(),i(3092,"tr",19)(3093,"td",20)(3094,"div",21)(3095,"span",22),e(3096," field"),o(3097,"br"),t()()(),i(3098,"td",23)(3099,"code",40),e(3100,"string"),t()(),i(3101,"td",26)(3102,"p"),e(3103,"Coluna que ser\xE1 utilizada pelo totalizador."),t()()(),i(3104,"tr",19)(3105,"td",20)(3106,"div",21)(3107,"span",22),e(3108," label"),o(3109,"br"),t()()(),i(3110,"td",23)(3111,"code",40),e(3112,"string"),t()(),i(3113,"td",26)(3114,"em")(3115,"strong"),e(3116,"(opcional)"),t()(),i(3117,"p"),e(3118,"Texto que ser\xE1 exibido junto ao resultado."),t()()()()(),i(3119,"po-accordion-item",77)(3120,"h4",9)(3121,"code"),e(3122,"ThfGridColumnSort"),t()(),i(3123,"div",10)(3124,"p"),e(3125,"Interface para definir a ordena\xE7\xE3o das colunas ("),i(3126,"strong"),e(3127,"t-sort"),t(),e(3128,")."),t()(),i(3129,"h4",15),e(3130,"Propriedades"),t(),i(3131,"table",16)(3132,"tr",17)(3133,"th",18),e(3134,"Nome"),t(),i(3135,"th",18),e(3136,"Tipo"),t(),i(3137,"th",18),e(3138,"Descri\xE7\xE3o"),t()(),i(3139,"tr",19)(3140,"td",20)(3141,"div",21)(3142,"span",22),e(3143," dir"),o(3144,"br"),t()()(),i(3145,"td",23)(3146,"code",78),e(3147,"'asc' "),t(),i(3148,"code",79),e(3149," 'desc'"),t()(),i(3150,"td",26)(3151,"em")(3152,"strong"),e(3153,"(opcional)"),t()(),i(3154,"p"),e(3155,"Dire\xE7\xE3o da coluna:"),t(),i(3156,"ul")(3157,"li")(3158,"code"),e(3159,"asc"),t()(),i(3160,"li")(3161,"code"),e(3162,"desc"),t()()()()(),i(3163,"tr",19)(3164,"td",20)(3165,"div",21)(3166,"span",22),e(3167," field"),o(3168,"br"),t()()(),i(3169,"td",23)(3170,"code",40),e(3171,"string"),t()(),i(3172,"td",26)(3173,"p"),e(3174,"Coluna"),t()()()()(),i(3175,"po-accordion-item",80)(3176,"h4",9)(3177,"code"),e(3178,"ThfGridColumn"),t()(),i(3179,"div",10)(3180,"p"),e(3181,"Interface para configura\xE7\xE3o das colunas ("),i(3182,"strong"),e(3183,"t-columns"),t(),e(3184,")."),t()(),i(3185,"h4",15),e(3186,"Propriedades"),t(),i(3187,"table",16)(3188,"tr",17)(3189,"th",18),e(3190,"Nome"),t(),i(3191,"th",18),e(3192,"Tipo"),t(),i(3193,"th",18),e(3194,"Descri\xE7\xE3o"),t()(),i(3195,"tr",19)(3196,"td",20)(3197,"div",21)(3198,"span",22),e(3199," action"),o(3200,"br"),t()()(),i(3201,"td",23)(3202,"code",27),e(3203,"Function"),t()(),i(3204,"td",26)(3205,"em")(3206,"strong"),e(3207,"(opcional)"),t()(),i(3208,"p"),e(3209,"Define uma a\xE7\xE3o na coluna quando o tipo da coluna for "),i(3210,"code"),e(3211,"link"),t(),e(3212," ou "),i(3213,"code"),e(3214,"icon"),t(),e(3215,"."),t(),i(3216,"blockquote")(3217,"p"),e(3218,"Quando for do tipo "),i(3219,"code"),e(3220,"link"),t(),e(3221,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),t()(),i(3222,"blockquote")(3223,"p"),e(3224,"Quando for do tipo "),i(3225,"code"),e(3226,"icon"),t(),e(3227," enviar\xE1 o objeto completo da linha e o segundo par\xE2metro ser\xE1 a defini\xE7\xE3o da coluna."),t()()()(),i(3228,"tr",19)(3229,"td",20)(3230,"div",21)(3231,"span",22),e(3232," boolean"),o(3233,"br"),t()()(),i(3234,"td",23)(3235,"code",81),e(3236,"PoTableBoolean"),t()(),i(3237,"td",26)(3238,"em")(3239,"strong"),e(3240,"(opcional)"),t()(),i(3241,"p"),e(3242,"Define um objeto do tipo "),i(3243,"code"),e(3244,"PoTableBoolean"),t(),e(3245," para as colunas do tipo "),i(3246,"em"),e(3247,"boolean"),t(),e(3248,". Por exemplo:"),t(),i(3249,"pre")(3250,"code"),e(3251,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}`),t()(),i(3252,"blockquote")(3253,"p"),e(3254,"Caso n\xE3o seja definido um objeto para colunas do tipo "),i(3255,"em"),e(3256,"boolean"),t(),e(3257,`,
esta exibir\xE1 por padr\xE3o `),i(3258,"code"),e(3259,"Sim"),t(),e(3260," e "),i(3261,"code"),e(3262,"N\xE3o"),t(),e(3263," de acordo com os valores "),i(3264,"em"),e(3265,"booleanos"),t(),e(3266,"."),t()()()(),i(3267,"tr",19)(3268,"td",20)(3269,"div",21)(3270,"span",22),e(3271," booleanFalse"),o(3272,"br"),t()()(),i(3273,"td",23)(3274,"code",40),e(3275,"string"),t()(),i(3276,"td",26)(3277,"em")(3278,"strong"),e(3279,"(opcional)"),t()(),i(3280,"p"),e(3281,"Texto exibido quando o valor da coluna for "),i(3282,"em"),e(3283,"false"),t(),e(3284,"."),t()()(),i(3285,"tr",19)(3286,"td",20)(3287,"div",21)(3288,"span",22),e(3289," booleanTrue"),o(3290,"br"),t()()(),i(3291,"td",23)(3292,"code",40),e(3293,"string"),t()(),i(3294,"td",26)(3295,"em")(3296,"strong"),e(3297,"(opcional)"),t()(),i(3298,"p"),e(3299,"Texto exibido quando o valor da coluna for "),i(3300,"em"),e(3301,"true"),t(),e(3302,"."),t()()(),i(3303,"tr",19)(3304,"td",20)(3305,"div",21)(3306,"span",22),e(3307," color"),o(3308,"br"),t()()(),i(3309,"td",23)(3310,"code",40),e(3311,"string "),t(),i(3312,"code",27),e(3313," Function"),t()(),i(3314,"td",26)(3315,"em")(3316,"strong"),e(3317,"(opcional)"),t()(),i(3318,"p"),e(3319,"Define a cor que ser\xE1 aplicada no conte\xFAdo da coluna."),t(),i(3320,"p"),e(3321,"Valores v\xE1lidos:"),t(),i(3322,"ul")(3323,"li"),o(3324,"span",82),i(3325,"code"),e(3326,"color-01"),t()(),i(3327,"li"),o(3328,"span",83),i(3329,"code"),e(3330,"color-02"),t()(),i(3331,"li"),o(3332,"span",84),i(3333,"code"),e(3334,"color-03"),t()(),i(3335,"li"),o(3336,"span",85),i(3337,"code"),e(3338,"color-04"),t()(),i(3339,"li"),o(3340,"span",86),i(3341,"code"),e(3342,"color-05"),t()(),i(3343,"li"),o(3344,"span",87),i(3345,"code"),e(3346,"color-06"),t()(),i(3347,"li"),o(3348,"span",88),i(3349,"code"),e(3350,"color-07"),t()(),i(3351,"li"),o(3352,"span",89),i(3353,"code"),e(3354,"color-08"),t()(),i(3355,"li"),o(3356,"span",90),i(3357,"code"),e(3358,"color-09"),t()(),i(3359,"li"),o(3360,"span",91),i(3361,"code"),e(3362,"color-10"),t()(),i(3363,"li"),o(3364,"span",92),i(3365,"code"),e(3366,"color-11"),t()(),i(3367,"li"),o(3368,"span",93),i(3369,"code"),e(3370,"color-12"),t()()(),i(3371,"blockquote")(3372,"p"),e(3373,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),t()(),i(3374,"pre")(3375,"code"),e(3376,"(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }"),t()(),i(3377,"blockquote")(3378,"p"),e(3379,"\xC9 poss\xEDvel tamb\xE9m us\xE1-la na coluna do tipo "),i(3380,"code"),e(3381,"icons"),t(),e(3382,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),t()(),i(3383,"pre")(3384,"code"),e(3385,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},`),t()()()(),i(3386,"tr",19)(3387,"td",20)(3388,"div",21)(3389,"span",22),e(3390," detail"),o(3391,"br"),t()()(),i(3392,"td",23)(3393,"code",94),e(3394,"PoTableDetail"),t()(),i(3395,"td",26)(3396,"em")(3397,"strong"),e(3398,"(opcional)"),t()(),i(3399,"p"),e(3400,"Define um objeto que segue a interface "),i(3401,"code"),e(3402,"PoTableDetail"),t(),e(3403,", para as colunas de detalhes. Por exemplo:"),t(),i(3404,"pre")(3405,"code"),e(3406,"{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }"),t()()()(),i(3407,"tr",19)(3408,"td",20)(3409,"div",21)(3410,"span",22),e(3411," disabled"),o(3412,"br"),t()()(),i(3413,"td",23)(3414,"code",27),e(3415,"Function"),t()(),i(3416,"td",26)(3417,"em")(3418,"strong"),e(3419,"(opcional)"),t()(),i(3420,"p"),e(3421,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),i(3422,"em"),e(3423,"link"),t(),e(3424," e sua a\xE7\xE3o."),t(),i(3425,"blockquote")(3426,"p"),e(3427,"Propriedade dispon\xEDvel nas colunas do tipo "),i(3428,"code"),e(3429,"link"),t(),e(3430,"."),t()()()(),i(3431,"tr",19)(3432,"td",20)(3433,"div",21)(3434,"span",22),e(3435," editProperties"),o(3436,"br"),t()()(),i(3437,"td",23)(3438,"code",95),e(3439,"CustomEditProperties"),t()(),i(3440,"td",26)(3441,"em")(3442,"strong"),e(3443,"(opcional)"),t()(),i(3444,"p"),e(3445,"Propriedade para customizar as colunas edit\xE1veis"),t()()(),i(3446,"tr",19)(3447,"td",20)(3448,"div",21)(3449,"span",22),e(3450," fixed"),o(3451,"br"),t()()(),i(3452,"td",23)(3453,"code",24),e(3454,"boolean"),t()(),i(3455,"td",26)(3456,"em")(3457,"strong"),e(3458,"(opcional)"),t()(),i(3459,"p"),e(3460,"Propriedade para fixar a coluna inicialmente."),t(),i(3461,"blockquote")(3462,"p"),e(3463,`No momento, \xE9 poss\xEDvel fixar apenas 2 colunas e garantir o funcionamento correto.
Caso a coluna de a\xE7\xF5es esteja fixa, \xE9 poss\xEDvel fixar somente 1 coluna corretamente.`),t()()()(),i(3464,"tr",19)(3465,"td",20)(3466,"div",21)(3467,"span",22),e(3468," format"),o(3469,"br"),t()()(),i(3470,"td",23)(3471,"code",40),e(3472,"string"),t()(),i(3473,"td",26)(3474,"em")(3475,"strong"),e(3476,"(opcional)"),t()(),i(3477,"p"),e(3478,"Formato de exibi\xE7\xE3o do valor da coluna."),t(),i(3479,"table")(3480,"thead")(3481,"tr")(3482,"th"),e(3483,"Formata\xE7\xE3o"),t(),i(3484,"th"),e(3485,"Type da Coluna"),t(),i(3486,"th"),e(3487,"Descri\xE7\xE3o"),t(),i(3488,"th"),e(3489,"Exemplos"),t()()(),i(3490,"tbody")(3491,"tr")(3492,"td"),e(3493,"Monet\xE1rio"),t(),i(3494,"td")(3495,"code"),e(3496,"currency"),t()(),i(3497,"td"),e(3498,"Formato para valores monet\xE1rios. Espera um c\xF3digo de moeda no padr\xE3o ISO 4217, e caso n\xE3o informado, ser\xE1 utilizado "),i(3499,"code"),e(3500,"'USD'"),t(),e(3501," por padr\xE3o"),t(),i(3502,"td")(3503,"code"),e(3504,"'BRL'"),t(),e(3505,", "),i(3506,"code"),e(3507,"'USD'"),t(),e(3508,", "),i(3509,"code"),e(3510,"'EUR'"),t(),e(3511,", "),i(3512,"code"),e(3513,"'RUB'"),t()()(),i(3514,"tr")(3515,"td"),e(3516,"Data"),t(),i(3517,"td")(3518,"code"),e(3519,"date"),t()(),i(3520,"td"),e(3521,"Aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy), caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'"),t(),i(3522,"td")(3523,"code"),e(3524,"'dd/MM/yyyy'"),t(),e(3525,", "),i(3526,"code"),e(3527,"'dd-MM-yy'"),t(),e(3528,", "),i(3529,"code"),e(3530,"'mm/dd/yyyy'"),t()()(),i(3531,"tr")(3532,"td"),e(3533,"Hora"),t(),i(3534,"td")(3535,"code"),e(3536,"time"),t()(),i(3537,"td"),e(3538,"Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1 'HH:mm:ss'"),t(),i(3539,"td")(3540,"code"),e(3541,"'HH:mm'"),t(),e(3542,", "),i(3543,"code"),e(3544,"'HH:mm:ss.ffffff'"),t(),e(3545,", "),i(3546,"code"),e(3547,"'HH:mm:ss.ff'"),t(),e(3548,", "),i(3549,"code"),e(3550,"'mm:ss.fff'"),t()()(),i(3551,"tr")(3552,"td"),e(3553,"N\xFAmero"),t(),i(3554,"td")(3555,"code"),e(3556,"number"),t()(),i(3557,"td"),e(3558,"Aceita um valor seguindo o padr\xE3o "),i(3559,"a",96)(3560,"strong"),e(3561,"DecimalPipe"),t()(),e(3562," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original."),t(),i(3563,"td")(3564,"code"),e(3565,"'1.2-5'"),t(),e(3566," (ex.: "),i(3567,"code"),e(3568,"50"),t(),e(3569," \u2192 "),i(3570,"code"),e(3571,"50.00"),t(),e(3572,")"),t()()()(),i(3573,"p"),e(3574,"Observa\xE7\xE3o: caso n\xE3o seja informado um formato, o valor ser\xE1 exibido em sua forma original."),t(),i(3575,"blockquote")(3576,"p"),e(3577,`Na formata\xE7\xE3o do tipo currency, caso o valor informado seja diferente do padr\xE3o ISO 4217, ser\xE1 exibido o alerta "Currency formatting failed. Using fallback." no console do navegador.
Exemplos de formato inv\xE1lido: 'ABCD', '123'.`),t()()()(),i(3578,"tr",19)(3579,"td",20)(3580,"div",21)(3581,"span",22),e(3582," icons"),o(3583,"br"),t()()(),i(3584,"td",23)(3585,"code",97),e(3586,"Array<PoTableColumnIcon>"),t()(),i(3587,"td",26)(3588,"em")(3589,"strong"),e(3590,"(opcional)"),t()(),i(3591,"p"),e(3592,"Define um "),i(3593,"em"),e(3594,"array"),t(),e(3595," de objetos para colunas de \xEDcones que ir\xE1 sobrepor os valores como "),i(3596,"code"),e(3597,"action"),t(),e(3598," e "),i(3599,"code"),e(3600,"color"),t(),e(3601,`
definidos na coluna, \xE0 partir do `),i(3602,"em"),e(3603,"value"),t(),e(3604," da "),i(3605,"a",98)(3606,"code"),e(3607,"PoTableColumnIcon"),t()(),e(3608,", por exemplo:"),t(),i(3609,"pre")(3610,"code"),e(3611,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},`),t()(),i(3612,"pre")(3613,"code"),e(3614,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...`),t()()()(),i(3615,"tr",19)(3616,"td",20)(3617,"div",21)(3618,"span",22),e(3619," key"),o(3620,"br"),t()()(),i(3621,"td",23)(3622,"code",24),e(3623,"boolean "),t(),i(3624,"code",52),e(3625," number"),t()(),i(3626,"td",26)(3627,"em")(3628,"strong"),e(3629,"(opcional)"),t()(),i(3630,"p"),e(3631,`Indica se a coluna faz parte da chave composta para exclus\xE3o de registros.
Pode ser do tipo num\xE9rico ou booleano. Os valores num\xE9ricos sempre ser\xE3o priorizados em rela\xE7\xE3o aos booleanos.
Para a exclus\xE3o, \xE9 necess\xE1rio que a `),i(3632,"code"),e(3633,"API"),t(),e(3634," esteja preparada para receber uma ou mais "),i(3635,"code"),e(3636,"keys"),t(),e(3637," concatenadas com pipe '|' para identifica\xE7\xE3o do registro. ex.: DELETE {end-point}/{keys}"),t(),i(3638,"blockquote")(3639,"p"),e(3640,`Exemplo de keys: [{ property: 'id', key: 1 }, { property: 'name', key: true }, { property: 'email', key: 2 }].
Resposta do exemplo: 'valor de id|valor de email|valor de name'`),t()()()(),i(3641,"tr",19)(3642,"td",20)(3643,"div",21)(3644,"span",22),e(3645," label"),o(3646,"br"),t()()(),i(3647,"td",23)(3648,"code",40),e(3649,"string"),t()(),i(3650,"td",26)(3651,"em")(3652,"strong"),e(3653,"(opcional)"),t()(),i(3654,"p"),e(3655,"Texto para t\xEDtulo da coluna."),t(),i(3656,"p"),e(3657,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(3658,"em"),e(3659,"label"),t(),e(3660," o valor da propriedade "),i(3661,"em"),e(3662,"property"),t(),e(3663," com a primeira letra em mai\xFAsculo."),t()()(),i(3664,"tr",19)(3665,"td",20)(3666,"div",21)(3667,"span",22),e(3668," labels"),o(3669,"br"),t()()(),i(3670,"td",23)(3671,"code",99),e(3672,"Array<PoTableColumnLabel>"),t()(),i(3673,"td",26)(3674,"em")(3675,"strong"),e(3676,"(opcional)"),t()(),i(3677,"p"),e(3678,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(3679,"code"),e(3680,"PoTableColumnLabel"),t(),e(3681," na qual devem ser definidas os labels. Por exemplo:"),t(),i(3682,"pre")(3683,"code"),e(3684,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}`),t()()()(),i(3685,"tr",19)(3686,"td",20)(3687,"div",21)(3688,"span",22),e(3689," link"),o(3690,"br"),t()()(),i(3691,"td",23)(3692,"code",40),e(3693,"string"),t()(),i(3694,"td",26)(3695,"em")(3696,"strong"),e(3697,"(opcional)"),t()(),i(3698,"p"),e(3699,"Define o nome da propriedade que conter\xE1 o "),i(3700,"code"),e(3701,"link"),t(),e(3702," a ser redirecionado."),t()()(),i(3703,"tr",19)(3704,"td",20)(3705,"div",21)(3706,"span",22),e(3707," mask"),o(3708,"br"),t()()(),i(3709,"td",23)(3710,"code",40),e(3711,"string"),t()(),i(3712,"td",26)(3713,"em")(3714,"strong"),e(3715,"(opcional)"),t()(),i(3716,"p"),e(3717,`Indica uma m\xE1scara para a coluna
Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
Aplic\xE1vel nas colunas do tipo `),i(3718,"code"),e(3719,"number"),t(),e(3720," e "),i(3721,"code"),e(3722,"string"),t(),e(3723,`
Nas colunas do tipo `),i(3724,"code"),e(3725,"number"),t(),e(3726," a propriedade "),i(3727,"code"),e(3728,"mask"),t(),e(3729," ter\xE1 prioridade sob "),i(3730,"code"),e(3731,"format"),t()()()(),i(3732,"tr",19)(3733,"td",20)(3734,"div",21)(3735,"span",22),e(3736," property"),o(3737,"br"),t()()(),i(3738,"td",23)(3739,"code",40),e(3740,"string"),t()(),i(3741,"td",26)(3742,"p"),e(3743,"Identificador da coluna."),t()()(),i(3744,"tr",19)(3745,"td",20)(3746,"div",21)(3747,"span",22),e(3748," resizable"),o(3749,"br"),t()()(),i(3750,"td",23)(3751,"code",24),e(3752,"boolean"),t()(),i(3753,"td",26)(3754,"em")(3755,"strong"),e(3756,"(opcional)"),t()(),i(3757,"p"),e(3758,"Define se a coluna pode ser redimensionada pelo usu\xE1rio."),t()()(),i(3759,"tr",19)(3760,"td",20)(3761,"div",21)(3762,"span",22),e(3763," sortable"),o(3764,"br"),t()()(),i(3765,"td",23)(3766,"code",24),e(3767,"boolean"),t()(),i(3768,"td",26)(3769,"em")(3770,"strong"),e(3771,"(opcional)"),t()(),i(3772,"p"),e(3773,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),t()()(),i(3774,"tr",19)(3775,"td",20)(3776,"div",21)(3777,"span",22),e(3778," subtitles"),o(3779,"br"),t()()(),i(3780,"td",23)(3781,"code",100),e(3782,"Array<PoTableSubtitleColumn>"),t()(),i(3783,"td",26)(3784,"em")(3785,"strong"),e(3786,"(opcional)"),t()(),i(3787,"p"),e(3788,"Define um array de objetos para as colunas de legenda. Onde, "),i(3789,"code"),e(3790,"subtitles"),t(),e(3791,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),t(),i(3792,"pre")(3793,"code"),e(3794,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', content: '2' }
}`),t()(),i(3795,"p"),e(3796,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),t()()(),i(3797,"tr",19)(3798,"td",20)(3799,"div",21)(3800,"span",22),e(3801," tooltip"),o(3802,"br"),t()()(),i(3803,"td",23)(3804,"code",40),e(3805,"string"),t()(),i(3806,"td",26)(3807,"em")(3808,"strong"),e(3809,"(opcional)"),t()(),i(3810,"p"),e(3811,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),i(3812,"em"),e(3813,"mouse"),t(),e(3814," sobre um texto."),t(),i(3815,"blockquote")(3816,"p"),e(3817,"O tooltip s\xF3 ser\xE1 vis\xEDvel se for uma coluna do tipo "),i(3818,"em"),e(3819,"link"),t(),e(3820,"."),t()(),i(3821,"blockquote")(3822,"p"),e(3823,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),i(3824,"em"),e(3825,"tooltip"),t(),e(3826," e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula."),t()()()(),i(3827,"tr",19)(3828,"td",20)(3829,"div",21)(3830,"span",22),e(3831," type"),o(3832,"br"),t()()(),i(3833,"td",23)(3834,"code",40),e(3835,"string"),t()(),i(3836,"td",26)(3837,"em")(3838,"strong"),e(3839,"(opcional)"),t()(),i(3840,"p"),e(3841,"Tipo da coluna."),t(),i(3842,"p"),e(3843,"Valores v\xE1lidos:"),t(),i(3844,"ul")(3845,"li")(3846,"p")(3847,"code"),e(3848,"boolean"),t(),e(3849,": Exibir\xE1 por padr\xE3o "),i(3850,"code"),e(3851,"Sim"),t(),e(3852," e "),i(3853,"code"),e(3854,"N\xE3o"),t(),e(3855," de acordo com os valores "),i(3856,"em"),e(3857,"booleanos"),t(),e(3858,"."),t(),i(3859,"blockquote")(3860,"p"),e(3861,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),i(3862,"code"),e(3863,"boolean"),t(),e(3864," desta interface."),t()()(),i(3865,"li")(3866,"p")(3867,"code"),e(3868,"currency"),t(),e(3869,": valores monet\xE1rios."),t()(),i(3870,"li")(3871,"p")(3872,"code"),e(3873,"date"),t(),e(3874,": valor de datas."),t(),i(3875,"ul")(3876,"li"),e(3877,"Aceita os tipos "),i(3878,"em"),e(3879,"string"),t(),e(3880," e "),i(3881,"em"),e(3882,"Date"),t(),e(3883,` padr\xE3o do Javascript,
por exemplo: `),i(3884,"code"),e(3885,"'2017-11-28'"),t(),e(3886," ou "),i(3887,"code"),e(3888,"new Date(2017, 10, 28)"),t(),e(3889,"."),t()()(),i(3890,"li")(3891,"p")(3892,"code"),e(3893,"dateTime"),t(),e(3894,": valor de data com hor\xE1rio."),t(),i(3895,"ul")(3896,"li"),e(3897,"Aceita o tipo "),i(3898,"em"),e(3899,"string"),t(),e(3900," no formato "),i(3901,"strong"),e(3902,"ISO-8601"),t(),e(3903," extendido "),i(3904,"strong"),e(3905,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(3906,`
e o tipo `),i(3907,"em"),e(3908,"Date"),t(),e(3909," padr\xE3o do Javascript, por exemplo: "),i(3910,"code"),e(3911,"'2017-11-28T00:00:00-02:00'"),t(),e(3912," ou "),i(3913,"code"),e(3914,"new Date(2017, 10, 28)"),t(),e(3915,"."),t()()(),i(3916,"li")(3917,"p")(3918,"code"),e(3919,"detail"),t(),e(3920,": array de objetos para o master-detail."),t(),i(3921,"ul")(3922,"li"),e(3923,"Incompat\xEDvel com "),i(3924,"code"),e(3925,"virtual-scroll"),t(),e(3926,", que requer altura fixa nas linhas."),t()()(),i(3927,"li")(3928,"p")(3929,"code"),e(3930,"icon"),t(),e(3931,": "),i(3932,"em"),e(3933,"array"),t(),e(3934," de "),i(3935,"em"),e(3936,"string"),t(),e(3937," ou objetos para a coluna de \xEDcones."),t()(),i(3938,"li")(3939,"p")(3940,"code"),e(3941,"label"),t(),e(3942,": texto com destaque."),t()(),i(3943,"li")(3944,"p")(3945,"code"),e(3946,"link"),t(),e(3947,": habilita link na coluna para a\xE7\xE3o ou navega\xE7\xE3o."),t()(),i(3948,"li")(3949,"p")(3950,"code"),e(3951,"number"),t(),e(3952,": valores num\xE9ricos."),t()(),i(3953,"li")(3954,"p")(3955,"code"),e(3956,"string"),t(),e(3957,": textos."),t()(),i(3958,"li")(3959,"p")(3960,"code"),e(3961,"subtitle"),t(),e(3962,": array de objetos para a coluna de legenda."),t()(),i(3963,"li")(3964,"p")(3965,"code"),e(3966,"time"),t(),e(3967,": valor de hor\xE1rio."),t(),i(3968,"ul")(3969,"li"),e(3970,"Aceita o tipo "),i(3971,"em"),e(3972,"string"),t(),e(3973," nos formatos "),i(3974,"strong"),e(3975,"'HH:mm:ss'"),t(),e(3976," ou "),i(3977,"strong"),e(3978,"'HH:mm:ss.ffffff'"),t(),e(3979,", por exemplo: "),i(3980,"code"),e(3981,"'23:12:45'"),t(),e(3982,"."),t()()(),i(3983,"li")(3984,"p")(3985,"code"),e(3986,"cellTemplate"),t(),e(3987,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),i(3988,"a",101),e(3989,"PoTableCellTemplate"),t(),e(3990,"."),t()(),i(3991,"li")(3992,"p")(3993,"code"),e(3994,"columnTemplate"),t(),e(3995,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),i(3996,"a",102),e(3997,"PoTableColumnTemplate"),t(),e(3998,"."),t()()()()(),i(3999,"tr",19)(4e3,"td",20)(4001,"div",21)(4002,"span",22),e(4003," visible"),o(4004,"br"),t()()(),i(4005,"td",23)(4006,"code",24),e(4007,"boolean"),t()(),i(4008,"td",26)(4009,"em")(4010,"strong"),e(4011,"(opcional)"),t()(),i(4012,"p"),e(4013,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(4014,"strong"),e(4015,"gerenciador de colunas"),t(),e(4016,"."),t(),i(4017,"blockquote")(4018,"p"),e(4019,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(4020,"code"),e(4021,"p-max-columns"),t(),e(4022,"."),t()()()(),i(4023,"tr",19)(4024,"td",20)(4025,"div",21)(4026,"span",22),e(4027," width"),o(4028,"br"),t()()(),i(4029,"td",23)(4030,"code",52),e(4031,"number "),t(),i(4032,"code",40),e(4033," string"),t()(),i(4034,"td",26)(4035,"em")(4036,"strong"),e(4037,"(opcional)"),t()(),i(4038,"p"),e(4039,"Caso seja passado o formato "),i(4040,"code"),e(4041,"number"),t(),e(4042,`, ser\xE1 aplicado em pixels.
A largura da coluna pode ser informada em pixels ou porcentagem.`),t(),i(4043,"blockquote")(4044,"p"),e(4045,`Exemplo Pixel: 100.
Exemplo Porcentagem: '100%'.
Apesar de atribuir largura as colunas da grid \xE9 importante ressaltar
que o componente recalcula as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis na grid,
podendo alterar as dimens\xF5es passadas proporcionalmente.`),t()()()()()(),i(4046,"po-accordion-item",103)(4047,"h4",9)(4048,"code"),e(4049,"CustomEditProperties"),t()(),i(4050,"div",10)(4051,"p"),e(4052,"Interface para configura\xE7\xE3o das colunas edit\xE1veis ("),i(4053,"strong"),e(4054,"editProperties"),t(),e(4055,`).
Al\xE9m dessas propriedades, herda as defini\xE7\xF5es da interface
`),i(4056,"a",104),e(4057,"PoDynamicFormField"),t(),e(4058,`,
permitindo definir campos de entrada que ser\xE3o criados dinamicamente.`),t()(),i(4059,"h4",15),e(4060,"Propriedades"),t(),i(4061,"table",16)(4062,"tr",17)(4063,"th",18),e(4064,"Nome"),t(),i(4065,"th",18),e(4066,"Tipo"),t(),i(4067,"th",18),e(4068,"Descri\xE7\xE3o"),t()(),i(4069,"tr",19)(4070,"td",20)(4071,"div",21)(4072,"span",22),e(4073," componentEditable"),o(4074,"br"),t()()(),i(4075,"td",23)(4076,"code",105),e(4077,"'input' "),t(),i(4078,"code",106),e(4079," 'number' "),t(),i(4080,"code",107),e(4081," 'select' "),t(),i(4082,"code",108),e(4083," 'datepicker' "),t(),i(4084,"code",109),e(4085," 'switch' "),t(),i(4086,"code",110),e(4087," 'combo' "),t(),i(4088,"code",111),e(4089," 'multiselect' "),t(),i(4090,"code",112),e(4091," 'decimal' "),t(),i(4092,"code",113),e(4093," 'checkbox' "),t(),i(4094,"code",114),e(4095," 'lookup'"),t()(),i(4096,"td",26)(4097,"em")(4098,"strong"),e(4099,"(opcional)"),t()(),i(4100,"p"),e(4101,"Propriedade para escolher qual componente ser\xE1 exibido para editar."),t(),i(4102,"blockquote")(4103,"p"),e(4104,"O valor padr\xE3o \xE9 "),i(4105,"code"),e(4106,"input"),t(),e(4107,"."),t()()()(),i(4108,"tr",19)(4109,"td",20)(4110,"div",21)(4111,"span",22),e(4112," componentSize"),o(4113,"br"),t()()(),i(4114,"td",23)(4115,"code",115),e(4116,"'small' "),t(),i(4117,"code",116),e(4118," 'medium' "),t(),i(4119,"code",117),e(4120," 'large'"),t()(),i(4121,"td",26)(4122,"em")(4123,"strong"),e(4124,"(opcional)"),t()(),i(4125,"p"),e(4126,"Define o tamanho dos componentes de formul\xE1rio no grid conforme suas respectivas documenta\xE7\xF5es:"),t(),i(4127,"ul")(4128,"li")(4129,"code"),e(4130,"small"),t(),e(4131,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(4132,"li")(4133,"code"),e(4134,"medium"),t(),e(4135,": aplica a medida medium de cada componente."),t(),i(4136,"li")(4137,"code"),e(4138,"large"),t(),e(4139,": aplica a medida large de cada componente (dispon\xEDvel para "),i(4140,"code"),e(4141,"po-checkbox"),t(),e(4142," e "),i(4143,"code"),e(4144,"po-radio-group"),t(),e(4145,")."),i(4146,"blockquote")(4147,"p"),e(4148,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(4149,"code"),e(4150,"medium"),t(),e(4151,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(4152,"a",41),e(4153,"po-theme"),t(),e(4154,"."),t()()()()()(),i(4155,"tr",19)(4156,"td",20)(4157,"div",21)(4158,"span",22),e(4159," controlValueWithLabel"),o(4160,"br"),t()()(),i(4161,"td",23)(4162,"code",24),e(4163,"boolean"),t()(),i(4164,"td",26)(4165,"em")(4166,"strong"),e(4167,"(opcional)"),t()(),i(4168,"p"),e(4169,"Determina se os componentes "),i(4170,"code"),e(4171,"select"),t(),e(4172,", "),i(4173,"code"),e(4174,"combo"),t(),e(4175,", "),i(4176,"code"),e(4177,"multiselect"),t(),e(4178," e "),i(4179,"code"),e(4180,"thf-lookup"),t(),e(4181,`
devem exibir o `),i(4182,"code"),e(4183,"label"),t(),e(4184," ao inv\xE9s de "),i(4185,"code"),e(4186,"value"),t(),e(4187," na grid"),t()()(),i(4188,"tr",19)(4189,"td",20)(4190,"div",21)(4191,"span",22),e(4192," disabled"),o(4193,"br"),t()()(),i(4194,"td",23)(4195,"code",24),e(4196,"boolean "),t(),i(4197,"code",118),e(4198," ((rowData: any, column?: ThfGridColumn) => boolean)"),t()(),i(4199,"td",26)(4200,"em")(4201,"strong"),e(4202,"(opcional)"),t()(),i(4203,"p"),e(4204,`Desabilita o campo. Pode ser um valor booleano fixo ou uma fun\xE7\xE3o din\xE2mica
que recebe os dados da linha e retorna um booleano`),t()()(),i(4205,"tr",19)(4206,"td",20)(4207,"div",21)(4208,"span",22),e(4209," fieldFormat"),o(4210,"br"),t()()(),i(4211,"td",23)(4212,"code",49),e(4213,"Array<string> "),t(),i(4214,"code",119),e(4215," ((item: any) => string)"),t()(),i(4216,"td",26)(4217,"em")(4218,"strong"),e(4219,"(opcional)"),t()(),i(4220,"p"),e(4221,"Formato de exibi\xE7\xE3o do campo."),t(),i(4222,"p"),e(4223,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(4224,"em"),e(4225,"string"),t(),e(4226," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(4227,"pre")(4228,"code",31),e(4229,`fieldFormat(obj) {
  return \`\${obj.id} (\${obj.name})\`;
}


Ou pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo.
Nessa caso, ser\xE1 utilizado \` - \` como separador, por exemplo:

\`\`\`typescript
 fieldFormat]="['id','nickname']"`),t()(),i(4230,"blockquote")(4231,"p"),e(4232,"Componente compat\xEDvel: "),i(4233,"code"),e(4234,"thf-lookup"),t(),e(4235,"."),t()()()(),i(4236,"tr",19)(4237,"td",20)(4238,"div",21)(4239,"span",22),e(4240," filterSearchSelect"),o(4241,"br"),t()()(),i(4242,"td",23)(4243,"code",120),e(4244,"Array<ThfLookupFilterSearchSelect>"),t()(),i(4245,"td",26)(4246,"em")(4247,"strong"),e(4248,"(opcional)"),t()(),i(4249,"p"),e(4250,"Propriedade para listar as op\xE7\xF5es de filtro do po-search no modal."),t(),i(4251,"blockquote")(4252,"p"),e(4253,"Componente compat\xEDvel: "),i(4254,"code"),e(4255,"thf-lookup"),t(),e(4256,"."),t()()()(),i(4257,"tr",19)(4258,"td",20)(4259,"div",21)(4260,"span",22),e(4261," keysLabel"),o(4262,"br"),t()()(),i(4263,"td",23)(4264,"code",121),e(4265,"Array<ThfLookupKeysLabel>"),t()(),i(4266,"td",26)(4267,"em")(4268,"strong"),e(4269,"(opcional)"),t()(),i(4270,"p"),e(4271,"Propriedade para exibir at\xE9 3 propriedades por valor no listbox."),t(),i(4272,"blockquote")(4273,"p"),e(4274,"Componente compat\xEDvel: "),i(4275,"code"),e(4276,"thf-lookup"),t(),e(4277,"."),t()()()(),i(4278,"tr",19)(4279,"td",20)(4280,"div",21)(4281,"span",22),e(4282," locale"),o(4283,"br"),t()()(),i(4284,"td",23)(4285,"code",40),e(4286,"string"),t()(),i(4287,"td",26)(4288,"em")(4289,"strong"),e(4290,"(opcional)"),t()(),i(4291,"p"),e(4292,`Define a localidade a ser utilizada no modo de exibi\xE7\xE3o e edi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(4293,"a",122)(4294,"code"),e(4295,"I18n"),t()()(),i(4296,"p"),e(4297,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(4298,"pre")(4299,"code"),e(4300,`columnWithItems: Array<ThfGridColumn> = [
 {
   property: 'currency',
   type: 'currency',
   editProperties: {
     componentEditable: 'decimal',
     locale: 'en'
   },
},`),t()(),i(4301,"blockquote")(4302,"p"),e(4303,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(4304,"p"),e(4305,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(4306,"p"),e(4307,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(4308,"a",122)(4309,"code"),e(4310,"I18n"),t()()()(),i(4311,"p"),e(4312,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(4313,"pre")(4314,"code"),e(4315,`const i18nConfig: PoI18nConfig = {
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
export class AppModule {}`),t()(),i(4316,"blockquote")(4317,"p"),e(4318,"A propriedade ser\xE1 repassada para os componentes que suportam a mesma."),t(),i(4319,"p")(4320,"strong"),e(4321,"Componentes compat\xEDveis"),t(),e(4322,": "),i(4323,"code"),e(4324,"decimal"),t()()()()(),i(4325,"tr",19)(4326,"td",20)(4327,"div",21)(4328,"span",22),e(4329," lookupGridProperties"),o(4330,"br"),t()()(),i(4331,"td",23)(4332,"code",123),e(4333,"ThfLookupGridProperties"),t()(),i(4334,"td",26)(4335,"em")(4336,"strong"),e(4337,"(opcional)"),t()(),i(4338,"p"),e(4339,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup."),t(),i(4340,"blockquote")(4341,"p")(4342,"strong"),e(4343,"Componentes compat\xEDveis"),t(),e(4344,": thf-lookup`"),t()()()(),i(4345,"tr",19)(4346,"td",20)(4347,"div",21)(4348,"span",22),e(4349," onBlur"),o(4350,"br"),t()()(),i(4351,"td",23)(4352,"code",27),e(4353,"Function"),t()(),i(4354,"td",26)(4355,"em")(4356,"strong"),e(4357,"(opcional)"),t()(),i(4358,"p"),e(4359,"Evento disparado ao sair do campo."),t(),i(4360,"blockquote")(4361,"p")(4362,"strong"),e(4363,"Componentes compat\xEDveis"),t(),e(4364,": "),i(4365,"code"),e(4366,"po-input"),t(),e(4367,", "),i(4368,"code"),e(4369,"po-number"),t(),e(4370,", "),i(4371,"code"),e(4372,"po-decimal"),t(),e(4373,", "),i(4374,"code"),e(4375,"po-datepicker"),t(),e(4376,", "),i(4377,"code"),e(4378,"po-select"),t(),e(4379,", "),i(4380,"code"),e(4381,"po-combo"),t(),e(4382,", "),i(4383,"code"),e(4384,"po-multiselect"),t(),e(4385,", "),i(4386,"code"),e(4387,"po-checkbox"),t()()()()(),i(4388,"tr",19)(4389,"td",20)(4390,"div",21)(4391,"span",22),e(4392," onChange"),o(4393,"br"),t()()(),i(4394,"td",23)(4395,"code",124),e(4396,"(value: any) => void"),t()(),i(4397,"td",26)(4398,"em")(4399,"strong"),e(4400,"(opcional)"),t()(),i(4401,"p"),e(4402,"Evento disparado ao alterar valor e deixar o campo."),t(),i(4403,"blockquote")(4404,"p")(4405,"strong"),e(4406,"Componentes compat\xEDveis"),t(),e(4407,": "),i(4408,"code"),e(4409,"po-input"),t(),e(4410,", "),i(4411,"code"),e(4412,"po-number"),t(),e(4413,", "),i(4414,"code"),e(4415,"po-decimal"),t(),e(4416,", "),i(4417,"code"),e(4418,"po-datepicker"),t(),e(4419,", "),i(4420,"code"),e(4421,"po-select"),t(),e(4422,", "),i(4423,"code"),e(4424,"po-switch"),t(),e(4425,", "),i(4426,"code"),e(4427,"po-combo"),t(),e(4428,", "),i(4429,"code"),e(4430,"po-multiselect"),t(),e(4431,", "),i(4432,"code"),e(4433,"po-checkbox"),t(),e(4434,", "),i(4435,"code"),e(4436,"thf-lookup"),t()()()()(),i(4437,"tr",19)(4438,"td",20)(4439,"div",21)(4440,"span",22),e(4441," onChangeModel"),o(4442,"br"),t()()(),i(4443,"td",23)(4444,"code",125),e(4445,"(model: any) => void"),t()(),i(4446,"td",26)(4447,"em")(4448,"strong"),e(4449,"(opcional)"),t()(),i(4450,"p"),e(4451,"Evento disparado ao alterar valor do model."),t(),i(4452,"blockquote")(4453,"p")(4454,"strong"),e(4455,"Componentes compat\xEDveis"),t(),e(4456,": "),i(4457,"code"),e(4458,"po-input"),t(),e(4459,", "),i(4460,"code"),e(4461,"po-number"),t(),e(4462,", "),i(4463,"code"),e(4464,"po-decimal"),t(),e(4465,", "),i(4466,"code"),e(4467,"po-select"),t(),e(4468,", "),i(4469,"code"),e(4470,"po-combo"),t(),e(4471,", "),i(4472,"code"),e(4473,"thf-lookup"),t()()()()(),i(4474,"tr",19)(4475,"td",20)(4476,"div",21)(4477,"span",22),e(4478," onEnter"),o(4479,"br"),t()()(),i(4480,"td",23)(4481,"code",27),e(4482,"Function"),t()(),i(4483,"td",26)(4484,"em")(4485,"strong"),e(4486,"(opcional)"),t()(),i(4487,"p"),e(4488,"Evento disparado ao entrar no campo."),t(),i(4489,"blockquote")(4490,"p")(4491,"strong"),e(4492,"Componentes compat\xEDveis"),t(),e(4493,": "),i(4494,"code"),e(4495,"po-input"),t(),e(4496,", "),i(4497,"code"),e(4498,"po-number"),t(),e(4499,", "),i(4500,"code"),e(4501,"po-decimal"),t()()()()(),i(4502,"tr",19)(4503,"td",20)(4504,"div",21)(4505,"span",22),e(4506," onError"),o(4507,"br"),t()()(),i(4508,"td",23)(4509,"code",126),e(4510,"(error: HttpErrorResponse) => void"),t()(),i(4511,"td",26)(4512,"em")(4513,"strong"),e(4514,"(opcional)"),t()(),i(4515,"p"),e(4516,"Callback disparado quando ocorre erro na requisi\xE7\xE3o de busca."),t(),i(4517,"blockquote")(4518,"p")(4519,"strong"),e(4520,"Componente compat\xEDvel"),t(),e(4521,": "),i(4522,"code"),e(4523,"thf-lookup"),t()()()()(),i(4524,"tr",19)(4525,"td",20)(4526,"div",21)(4527,"span",22),e(4528," onFocus"),o(4529,"br"),t()()(),i(4530,"td",23)(4531,"code",27),e(4532,"Function"),t()(),i(4533,"td",26)(4534,"em")(4535,"strong"),e(4536,"(opcional)"),t()(),i(4537,"p"),e(4538,"Callback disparado quando o campo recebe foco."),t(),i(4539,"blockquote")(4540,"p")(4541,"strong"),e(4542,"Componente compat\xEDvel"),t(),e(4543,": "),i(4544,"code"),e(4545,"thf-lookup"),t()()()()(),i(4546,"tr",19)(4547,"td",20)(4548,"div",21)(4549,"span",22),e(4550," onInputChange"),o(4551,"br"),t()()(),i(4552,"td",23)(4553,"code",124),e(4554,"(value: any) => void"),t()(),i(4555,"td",26)(4556,"em")(4557,"strong"),e(4558,"(opcional)"),t()(),i(4559,"p"),e(4560,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no campo de busca do componente. A fun\xE7\xE3o receber\xE1 como argumento o valor modificado."),t(),i(4561,"blockquote")(4562,"p")(4563,"strong"),e(4564,"Componente compat\xEDvel"),t(),e(4565,": "),i(4566,"code"),e(4567,"po-combo"),t()()()()(),i(4568,"tr",19)(4569,"td",20)(4570,"div",21)(4571,"span",22),e(4572," onSelected"),o(4573,"br"),t()()(),i(4574,"td",23)(4575,"code",127),e(4576,"(selection: any "),t(),i(4577,"code",128),e(4578," Array<any>) => void"),t()(),i(4579,"td",26)(4580,"em")(4581,"strong"),e(4582,"(opcional)"),t()(),i(4583,"p"),e(4584,"Callback disparado ao selecionar item(s)."),t(),i(4585,"blockquote")(4586,"p")(4587,"strong"),e(4588,"Componente compat\xEDvel"),t(),e(4589,": "),i(4590,"code"),e(4591,"thf-lookup"),t()()()()(),i(4592,"tr",19)(4593,"td",20)(4594,"div",21)(4595,"span",22),e(4596," readonly"),o(4597,"br"),t()()(),i(4598,"td",23)(4599,"code",24),e(4600,"boolean "),t(),i(4601,"code",118),e(4602," ((rowData: any, column?: ThfGridColumn) => boolean)"),t()(),i(4603,"td",26)(4604,"em")(4605,"strong"),e(4606,"(opcional)"),t()(),i(4607,"p"),e(4608,`Indica que o campo ser\xE1 somente leitura. Pode ser um valor booleano fixo
ou uma fun\xE7\xE3o din\xE2mica que recebe os dados da linha e retorna um booleano`),t()()(),i(4609,"tr",19)(4610,"td",20)(4611,"div",21)(4612,"span",22),e(4613," size"),o(4614,"br"),t()()(),i(4615,"td",23)(4616,"code",129),e(4617,"'sm' "),t(),i(4618,"code",130),e(4619," 'md' "),t(),i(4620,"code",131),e(4621," 'lg' "),t(),i(4622,"code",132),e(4623," 'xl' "),t(),i(4624,"code",133),e(4625," 'auto'"),t()(),i(4626,"td",26)(4627,"em")(4628,"strong"),e(4629,"(opcional)"),t()(),i(4630,"p"),e(4631,"Propriedade para definir o tamanho do modal."),t(),i(4632,"blockquote")(4633,"p"),e(4634,"Componente compat\xEDvel: "),i(4635,"code"),e(4636,"thf-lookup"),t(),e(4637,"."),t()()()()()(),i(4638,"po-accordion-item",134)(4639,"h4",9)(4640,"code"),e(4641,"ThfGridDeleteService"),t()(),i(4642,"div",10)(4643,"p"),e(4644,"Interface para excluir algum item via servi\xE7o."),t()(),i(4645,"table",63)(4646,"tr",19)(4647,"th",64)(4648,"div",21)(4649,"h4")(4650,"span",22),e(4651," deleteItem "),t()()()()(),i(4652,"tr",26)(4653,"td",26)(4654,"p"),e(4655,`M\xE9todo que ser\xE1 disparado ao excluir algum item, deve-se retornar
um `),i(4656,"em"),e(4657,"Observable"),t(),e(4658,"."),t()()()(),i(4659,"h5")(4660,"b"),e(4661,"Par\xE2metros"),t()(),i(4662,"table",16)(4663,"tr",17)(4664,"th",18),e(4665,"Nome"),t(),i(4666,"th",18),e(4667,"Tipo"),t(),i(4668,"th",18),e(4669,"Descri\xE7\xE3o"),t()(),i(4670,"tr",19)(4671,"td",20),e(4672," selectedRow"),t(),i(4673,"td",23)(4674,"code",65),e(4675," any "),t()(),i(4676,"td",26)(4677,"p"),e(4678,"Par\xE2metro com o valor do atual item selecionado."),t()()(),i(4679,"tr",19)(4680,"td",20),e(4681," filterParams"),t(),i(4682,"td",23)(4683,"code",65),e(4684," any "),t()(),i(4685,"td",26)(4686,"p"),e(4687,"Valor informado atrav\xE9s da propriedade "),i(4688,"code"),e(4689,"t-param-delete-api"),t(),e(4690,"."),t()()(),i(4691,"tr",19)(4692,"td",20),e(4693," keyValue"),t(),i(4694,"td",23)(4695,"code",65),e(4696," string "),t()(),i(4697,"td",26)(4698,"p"),e(4699,"Valor informado caso tenha alguma coluna com a propriedade "),i(4700,"code"),e(4701,"key"),t(),e(4702," ativa ou o valor da propriedade "),i(4703,"code"),e(4704,"id"),t(),e(4705,"."),t()()()(),o(4706,"br"),i(4707,"table",63)(4708,"tr",19)(4709,"th",64)(4710,"div",21)(4711,"h4")(4712,"span",22),e(4713," deleteBatchItems "),t()()()()(),i(4714,"tr",26)(4715,"td",26)(4716,"p"),e(4717,"M\xE9todo que ser\xE1 disparado ao excluir itens quando o THF-GRID estiver com a propriedade "),i(4718,"code"),e(4719,"t-allow-batch-delete"),t(),e(4720,` habilitada, deve-se retornar
um `),i(4721,"em"),e(4722,"Observable"),t(),e(4723,"."),t(),i(4724,"p"),e(4725,"Ao habilitar a propriedade "),i(4726,"code"),e(4727,"t-allow-batch-delete"),t(),e(4728,", este m\xE9todo sempre ser\xE1 chamado, exluindo um ou v\xE1rios itens."),t()()()(),i(4729,"h5")(4730,"b"),e(4731,"Par\xE2metros"),t()(),i(4732,"table",16)(4733,"tr",17)(4734,"th",18),e(4735,"Nome"),t(),i(4736,"th",18),e(4737,"Tipo"),t(),i(4738,"th",18),e(4739,"Descri\xE7\xE3o"),t()(),i(4740,"tr",19)(4741,"td",20),e(4742," selectedRows"),t(),i(4743,"td",23)(4744,"code",65),e(4745," any "),t()(),i(4746,"td",26)(4747,"p"),e(4748,"Par\xE2metro com os valores dos itens selecionados."),t()()(),i(4749,"tr",19)(4750,"td",20),e(4751," paramDelete"),t(),i(4752,"td",23)(4753,"code",65),e(4754," any "),t()(),i(4755,"td",26)(4756,"p"),e(4757,"Valor informado atrav\xE9s da propriedade "),i(4758,"code"),e(4759,"t-param-delete-api"),t(),e(4760,"."),t()()(),i(4761,"tr",19)(4762,"td",20),e(4763," keys"),t(),i(4764,"td",23)(4765,"code",65),e(4766," string "),t()(),i(4767,"td",26)(4768,"p"),e(4769,"Valor informado caso tenha alguma coluna com a propriedade "),i(4770,"code"),e(4771,"key"),t(),e(4772," ativa ou o valor da propriedade "),i(4773,"code"),e(4774,"id"),t(),e(4775,"."),t()()()(),o(4776,"br"),t(),i(4777,"po-accordion-item",135)(4778,"h4",9)(4779,"code"),e(4780,"ThfGridEditProperties"),t()(),i(4781,"div",10)(4782,"p"),e(4783,"Interface para configura\xE7\xE3o da edi\xE7\xE3o em linha ("),i(4784,"strong"),e(4785,"t-edit-properties"),t(),e(4786,")."),t()(),i(4787,"h4",15),e(4788,"Propriedades"),t(),i(4789,"table",16)(4790,"tr",17)(4791,"th",18),e(4792,"Nome"),t(),i(4793,"th",18),e(4794,"Tipo"),t(),i(4795,"th",18),e(4796,"Descri\xE7\xE3o"),t()(),i(4797,"tr",19)(4798,"td",20)(4799,"div",21)(4800,"span",22),e(4801," actionEdit"),o(4802,"br"),t()()(),i(4803,"td",23)(4804,"code",136),e(4805,"(param: any) => FormGroup"),t()(),i(4806,"td",26)(4807,"p"),e(4808,`M\xE9todo executado ao iniciar o modo edi\xE7\xE3o.
\xC9 passado um par\xE2metro com os valores respectivos de cada coluna.
\xC9 obrigat\xF3rio retornar o formul\xE1rio. Cada FormControl deve estar com o mesmo nome da `),i(4809,"code"),e(4810,"property"),t(),e(4811," da coluna desejada."),t(),i(4812,"p"),e(4813,"Exemplo de envio para a API:"),t(),i(4814,"pre")(4815,"code",28),e(4816,`<thf-grid
  t-service-api="https://po-sample-api.onrender.com/v1/people"
  [t-columns]="columns"
  [t-edit-properties]="editProperties"
>
</thf-grid>`),t()(),i(4817,"pre")(4818,"code",31),e(4819,`form: FormGroup;
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
};`),t()()()(),i(4820,"tr",19)(4821,"td",20)(4822,"div",21)(4823,"span",22),e(4824," validate"),o(4825,"br"),t()()(),i(4826,"td",23)(4827,"code",137),e(4828,"(data: any, columnProperty: string) => FormGroup"),t()(),i(4829,"td",26)(4830,"em")(4831,"strong"),e(4832,"(opcional)"),t()(),i(4833,"p"),e(4834,`M\xE9todo executado ao alterar o valor de algum campo do formul\xE1rio.
O primeiro par\xE2metro s\xE3o os valores respectivos de cada coluna.
O segundo par\xE2metro \xE9 indicando a `),i(4835,"code"),e(4836,"property"),t(),e(4837,` da coluna que teve o valor alterado
\xC9 obrigat\xF3rio retornar o formul\xE1rio. Cada FormControl deve estar com o mesmo nome da `),i(4838,"code"),e(4839,"property"),t(),e(4840," da coluna desejada."),t()()()()(),i(4841,"po-accordion-item",138)(4842,"h4",9)(4843,"code"),e(4844,"ThfGridLiterals"),t()(),i(4845,"div",10)(4846,"p"),e(4847,"Interface para customizar literais ("),i(4848,"strong"),e(4849,"t-literals"),t(),e(4850,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(4851,"h4",15),e(4852,"Propriedades"),t(),i(4853,"table",16)(4854,"tr",17)(4855,"th",18),e(4856,"Nome"),t(),i(4857,"th",18),e(4858,"Tipo"),t(),i(4859,"th",18),e(4860,"Descri\xE7\xE3o"),t()(),i(4861,"tr",19)(4862,"td",20)(4863,"div",21)(4864,"span",22),e(4865," advancedSearch"),o(4866,"br"),t()()(),i(4867,"td",23)(4868,"code",40),e(4869,"string"),t()(),i(4870,"td",26)(4871,"em")(4872,"strong"),e(4873,"(opcional)"),t()(),i(4874,"p"),e(4875,"T\xEDtulo do modal Filtros"),t()()(),i(4876,"tr",19)(4877,"td",20)(4878,"div",21)(4879,"span",22),e(4880," bodyDelete"),o(4881,"br"),t()()(),i(4882,"td",23)(4883,"code",40),e(4884,"string"),t()(),i(4885,"td",26)(4886,"em")(4887,"strong"),e(4888,"(opcional)"),t()(),i(4889,"p"),e(4890,"Conte\xFAdo do modal Excluir"),t()()(),i(4891,"tr",19)(4892,"td",20)(4893,"div",21)(4894,"span",22),e(4895," bodyDeleteBatch"),o(4896,"br"),t()()(),i(4897,"td",23)(4898,"code",40),e(4899,"string"),t()(),i(4900,"td",26)(4901,"em")(4902,"strong"),e(4903,"(opcional)"),t()(),i(4904,"p"),e(4905,"Conte\xFAdo do modal Excluir configurado para excluir em lote"),t()()(),i(4906,"tr",19)(4907,"td",20)(4908,"div",21)(4909,"span",22),e(4910," cancel"),o(4911,"br"),t()()(),i(4912,"td",23)(4913,"code",40),e(4914,"string"),t()(),i(4915,"td",26)(4916,"em")(4917,"strong"),e(4918,"(opcional)"),t()(),i(4919,"p"),e(4920,"Label do bot\xE3o Cancelar"),t()()(),i(4921,"tr",19)(4922,"td",20)(4923,"div",21)(4924,"span",22),e(4925," columnsManager"),o(4926,"br"),t()()(),i(4927,"td",23)(4928,"code",40),e(4929,"string"),t()(),i(4930,"td",26)(4931,"em")(4932,"strong"),e(4933,"(opcional)"),t()(),i(4934,"p"),e(4935,"T\xEDtulo do page-slide Gerenciar Tabela"),t()()(),i(4936,"tr",19)(4937,"td",20)(4938,"div",21)(4939,"span",22),e(4940," compact"),o(4941,"br"),t()()(),i(4942,"td",23)(4943,"code",40),e(4944,"string"),t()(),i(4945,"td",26)(4946,"em")(4947,"strong"),e(4948,"(opcional)"),t()(),i(4949,"p"),e(4950,"Label do radio de densidade Compacto no Gerenciar Tabela"),t()()(),i(4951,"tr",19)(4952,"td",20)(4953,"div",21)(4954,"span",22),e(4955," confirm"),o(4956,"br"),t()()(),i(4957,"td",23)(4958,"code",40),e(4959,"string"),t()(),i(4960,"td",26)(4961,"em")(4962,"strong"),e(4963,"(opcional)"),t()(),i(4964,"p"),e(4965,"Label do bot\xE3o Confirmar"),t()()(),i(4966,"tr",19)(4967,"td",20)(4968,"div",21)(4969,"span",22),e(4970," default"),o(4971,"br"),t()()(),i(4972,"td",23)(4973,"code",40),e(4974,"string"),t()(),i(4975,"td",26)(4976,"em")(4977,"strong"),e(4978,"(opcional)"),t()(),i(4979,"p"),e(4980,"Label do radio de densidade Espa\xE7oso no Gerenciar Tabela"),t()()(),i(4981,"tr",19)(4982,"td",20)(4983,"div",21)(4984,"span",22),e(4985," delete"),o(4986,"br"),t()()(),i(4987,"td",23)(4988,"code",40),e(4989,"string"),t()(),i(4990,"td",26)(4991,"em")(4992,"strong"),e(4993,"(opcional)"),t()(),i(4994,"p"),e(4995,"Label do bot\xE3o Excluir"),t()()(),i(4996,"tr",19)(4997,"td",20)(4998,"div",21)(4999,"span",22),e(5e3," deleteApiError"),o(5001,"br"),t()()(),i(5002,"td",23)(5003,"code",40),e(5004,"string"),t()(),i(5005,"td",26)(5006,"em")(5007,"strong"),e(5008,"(opcional)"),t()(),i(5009,"p"),e(5010,"Resposta de erro da requisi\xE7\xE3o delete no popup"),t()()(),i(5011,"tr",19)(5012,"td",20)(5013,"div",21)(5014,"span",22),e(5015," deleteItem"),o(5016,"br"),t()()(),i(5017,"td",23)(5018,"code",40),e(5019,"string"),t()(),i(5020,"td",26)(5021,"em")(5022,"strong"),e(5023,"(opcional)"),t()(),i(5024,"p"),e(5025,"T\xEDtulo do modal Excluir"),t()()(),i(5026,"tr",19)(5027,"td",20)(5028,"div",21)(5029,"span",22),e(5030," density"),o(5031,"br"),t()()(),i(5032,"td",23)(5033,"code",40),e(5034,"string"),t()(),i(5035,"td",26)(5036,"em")(5037,"strong"),e(5038,"(opcional)"),t()(),i(5039,"p"),e(5040,'T\xEDtulo da sess\xE3o "Densidade" no Gerenciar Tabela'),t()()(),i(5041,"tr",19)(5042,"td",20)(5043,"div",21)(5044,"span",22),e(5045," draggable"),o(5046,"br"),t()()(),i(5047,"td",23)(5048,"code",40),e(5049,"string"),t()(),i(5050,"td",26)(5051,"em")(5052,"strong"),e(5053,"(opcional)"),t()(),i(5054,"p"),e(5055,'Label da op\xE7\xE3o "Draggable" na sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(5056,"tr",19)(5057,"td",20)(5058,"div",21)(5059,"span",22),e(5060," edit"),o(5061,"br"),t()()(),i(5062,"td",23)(5063,"code",40),e(5064,"string"),t()(),i(5065,"td",26)(5066,"em")(5067,"strong"),e(5068,"(opcional)"),t()(),i(5069,"p"),e(5070,"Label do bot\xE3o Editar"),t()()(),i(5071,"tr",19)(5072,"td",20)(5073,"div",21)(5074,"span",22),e(5075," editRow"),o(5076,"br"),t()()(),i(5077,"td",23)(5078,"code",40),e(5079,"string"),t()(),i(5080,"td",26)(5081,"em")(5082,"strong"),e(5083,"(opcional)"),t()(),i(5084,"p"),e(5085,"T\xEDtulo das a\xE7\xF5es quando Edi\xE7\xE3o em linha."),t()()(),i(5086,"tr",19)(5087,"td",20)(5088,"div",21)(5089,"span",22),e(5090," export"),o(5091,"br"),t()()(),i(5092,"td",23)(5093,"code",40),e(5094,"string"),t()(),i(5095,"td",26)(5096,"em")(5097,"strong"),e(5098,"(opcional)"),t()(),i(5099,"p"),e(5100,"Label do bot\xE3o Exportar"),t()()(),i(5101,"tr",19)(5102,"td",20)(5103,"div",21)(5104,"span",22),e(5105," exportExcel"),o(5106,"br"),t()()(),i(5107,"td",23)(5108,"code",40),e(5109,"string"),t()(),i(5110,"td",26)(5111,"em")(5112,"strong"),e(5113,"(opcional)"),t()(),i(5114,"p"),e(5115,"Label do bot\xE3o Exportar Excel"),t()()(),i(5116,"tr",19)(5117,"td",20)(5118,"div",21)(5119,"span",22),e(5120," exportPDF"),o(5121,"br"),t()()(),i(5122,"td",23)(5123,"code",40),e(5124,"string"),t()(),i(5125,"td",26)(5126,"em")(5127,"strong"),e(5128,"(opcional)"),t()(),i(5129,"p"),e(5130,"Label do bot\xE3o Exportar PDF"),t()()(),i(5131,"tr",19)(5132,"td",20)(5133,"div",21)(5134,"span",22),e(5135," extraCompact"),o(5136,"br"),t()()(),i(5137,"td",23)(5138,"code",40),e(5139,"string"),t()(),i(5140,"td",26)(5141,"em")(5142,"strong"),e(5143,"(opcional)"),t()(),i(5144,"p"),e(5145,"Label do radio de densidade Extra Compacto no Gerenciar Tabela"),t()()(),i(5146,"tr",19)(5147,"td",20)(5148,"div",21)(5149,"span",22),e(5150," filters"),o(5151,"br"),t()()(),i(5152,"td",23)(5153,"code",40),e(5154,"string"),t()(),i(5155,"td",26)(5156,"em")(5157,"strong"),e(5158,"(opcional)"),t()(),i(5159,"p"),e(5160,"Label do bot\xE3o Filtros"),t()()(),i(5161,"tr",19)(5162,"td",20)(5163,"div",21)(5164,"span",22),e(5165," fixed"),o(5166,"br"),t()()(),i(5167,"td",23)(5168,"code",40),e(5169,"string"),t()(),i(5170,"td",26)(5171,"em")(5172,"strong"),e(5173,"(opcional)"),t()(),i(5174,"p"),e(5175,'T\xEDtulo da sess\xE3o "Fixo" no Gerenciar Tabela'),t()()(),i(5176,"tr",19)(5177,"td",20)(5178,"div",21)(5179,"span",22),e(5180," gridRowActionsConfirmAddCancelButton"),o(5181,"br"),t()()(),i(5182,"td",23)(5183,"code",40),e(5184,"string"),t()(),i(5185,"td",26)(5186,"em")(5187,"strong"),e(5188,"(opcional)"),t()(),i(5189,"p"),e(5190,'Label do bot\xE3o "Cancelar" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(5191,"tr",19)(5192,"td",20)(5193,"div",21)(5194,"span",22),e(5195," gridRowActionsConfirmAddConfirmButton"),o(5196,"br"),t()()(),i(5197,"td",23)(5198,"code",40),e(5199,"string"),t()(),i(5200,"td",26)(5201,"em")(5202,"strong"),e(5203,"(opcional)"),t()(),i(5204,"p"),e(5205,'Label do bot\xE3o "Confirmar" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(5206,"tr",19)(5207,"td",20)(5208,"div",21)(5209,"span",22),e(5210," gridRowActionsConfirmAddTitle"),o(5211,"br"),t()()(),i(5212,"td",23)(5213,"code",40),e(5214,"string"),t()(),i(5215,"td",26)(5216,"em")(5217,"strong"),e(5218,"(opcional)"),t()(),i(5219,"p"),e(5220,'T\xEDtulo do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(5221,"tr",19)(5222,"td",20)(5223,"div",21)(5224,"span",22),e(5225," groupable"),o(5226,"br"),t()()(),i(5227,"td",23)(5228,"code",40),e(5229,"string"),t()(),i(5230,"td",26)(5231,"em")(5232,"strong"),e(5233,"(opcional)"),t()(),i(5234,"p"),e(5235,'Label da op\xE7\xE3o "Groupable" na sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(5236,"tr",19)(5237,"td",20)(5238,"div",21)(5239,"span",22),e(5240," groupableText"),o(5241,"br"),t()()(),i(5242,"td",23)(5243,"code",40),e(5244,"string"),t()(),i(5245,"td",26)(5246,"em")(5247,"strong"),e(5248,"(opcional)"),t()(),i(5249,"p"),e(5250,"Texto do cabe\xE7alho onde se deve soltar as colunas que devem ser agrupadas."),t()()(),i(5251,"tr",19)(5252,"td",20)(5253,"div",21)(5254,"span",22),e(5255," legendListOptions"),o(5256,"br"),t()()(),i(5257,"td",23)(5258,"code",40),e(5259,"string"),t()(),i(5260,"td",26)(5261,"em")(5262,"strong"),e(5263,"(opcional)"),t()(),i(5264,"p"),e(5265,'T\xEDtulo da sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(5266,"tr",19)(5267,"td",20)(5268,"div",21)(5269,"span",22),e(5270," loadMoreData"),o(5271,"br"),t()()(),i(5272,"td",23)(5273,"code",40),e(5274,"string"),t()(),i(5275,"td",26)(5276,"em")(5277,"strong"),e(5278,"(opcional)"),t()(),i(5279,"p"),e(5280,"Label do bot\xE3o Carregar mais resultados"),t()()(),i(5281,"tr",19)(5282,"td",20)(5283,"div",21)(5284,"span",22),e(5285," loadingData"),o(5286,"br"),t()()(),i(5287,"td",23)(5288,"code",40),e(5289,"string"),t()(),i(5290,"td",26)(5291,"em")(5292,"strong"),e(5293,"(opcional)"),t()(),i(5294,"p"),e(5295,"Texto do modal Carregando..."),t()()(),i(5296,"tr",19)(5297,"td",20)(5298,"div",21)(5299,"span",22),e(5300," manageTable"),o(5301,"br"),t()()(),i(5302,"td",23)(5303,"code",40),e(5304,"string"),t()(),i(5305,"td",26)(5306,"em")(5307,"strong"),e(5308,"(opcional)"),t()(),i(5309,"p"),e(5310,"Label do bot\xE3o Gerenciar Tabela"),t()()(),i(5311,"tr",19)(5312,"td",20)(5313,"div",21)(5314,"span",22),e(5315," moreActions"),o(5316,"br"),t()()(),i(5317,"td",23)(5318,"code",40),e(5319,"string"),t()(),i(5320,"td",26)(5321,"em")(5322,"strong"),e(5323,"(opcional)"),t()(),i(5324,"p"),e(5325,"Label do bot\xE3o Mais a\xE7\xF5es"),t()()(),i(5326,"tr",19)(5327,"td",20)(5328,"div",21)(5329,"span",22),e(5330," multipleItems"),o(5331,"br"),t()()(),i(5332,"td",23)(5333,"code",40),e(5334,"string"),t()(),i(5335,"td",26)(5336,"em")(5337,"strong"),e(5338,"(opcional)"),t()(),i(5339,"p"),e(5340,"Texto auxiliar ao selecionar muitos itens exibido nas a\xE7\xF5es em lote."),t()()(),i(5341,"tr",19)(5342,"td",20)(5343,"div",21)(5344,"span",22),e(5345," noColumns"),o(5346,"br"),t()()(),i(5347,"td",23)(5348,"code",40),e(5349,"string"),t()(),i(5350,"td",26)(5351,"em")(5352,"strong"),e(5353,"(opcional)"),t()(),i(5354,"p"),e(5355,"Mensagem exibida quando n\xE3o existem colunas definidas."),t()()(),i(5356,"tr",19)(5357,"td",20)(5358,"div",21)(5359,"span",22),e(5360," noData"),o(5361,"br"),t()()(),i(5362,"td",23)(5363,"code",40),e(5364,"string"),t()(),i(5365,"td",26)(5366,"em")(5367,"strong"),e(5368,"(opcional)"),t()(),i(5369,"p"),e(5370,"Mensagem exibida quando n\xE3o existem itens para serem exibidos."),t()()(),i(5371,"tr",19)(5372,"td",20)(5373,"div",21)(5374,"span",22),e(5375," noItem"),o(5376,"br"),t()()(),i(5377,"td",23)(5378,"code",40),e(5379,"string"),t()(),i(5380,"td",26)(5381,"em")(5382,"strong"),e(5383,"(opcional)"),t()(),i(5384,"p"),e(5385,"Mensagem exibida quando nenhum item est\xE1 selecionado."),t()()(),i(5386,"tr",19)(5387,"td",20)(5388,"div",21)(5389,"span",22),e(5390," oneItem"),o(5391,"br"),t()()(),i(5392,"td",23)(5393,"code",40),e(5394,"string"),t()(),i(5395,"td",26)(5396,"em")(5397,"strong"),e(5398,"(opcional)"),t()(),i(5399,"p"),e(5400,"Texto ao selecionar um \xFAnico item exibido nas a\xE7\xF5es em lote."),t()()(),i(5401,"tr",19)(5402,"td",20)(5403,"div",21)(5404,"span",22),e(5405," otherColumns"),o(5406,"br"),t()()(),i(5407,"td",23)(5408,"code",40),e(5409,"string"),t()(),i(5410,"td",26)(5411,"em")(5412,"strong"),e(5413,"(opcional)"),t()(),i(5414,"p"),e(5415,'T\xEDtulo da sess\xE3o "Outras colunas" no Gerenciar Tabela'),t()()(),i(5416,"tr",19)(5417,"td",20)(5418,"div",21)(5419,"span",22),e(5420," placeholderSearchInput"),o(5421,"br"),t()()(),i(5422,"td",23)(5423,"code",40),e(5424,"string"),t()(),i(5425,"td",26)(5426,"em")(5427,"strong"),e(5428,"(opcional)"),t()(),i(5429,"p"),e(5430,"Placeholder do campo Buscar na tabela"),t()()(),i(5431,"tr",19)(5432,"td",20)(5433,"div",21)(5434,"span",22),e(5435," restoreDefault"),o(5436,"br"),t()()(),i(5437,"td",23)(5438,"code",40),e(5439,"string"),t()(),i(5440,"td",26)(5441,"em")(5442,"strong"),e(5443,"(opcional)"),t()(),i(5444,"p"),e(5445,'Label do bot\xE3o "Restaurar padr\xE3o" no Gerenciar Tabela'),t()()(),i(5446,"tr",19)(5447,"td",20)(5448,"div",21)(5449,"span",22),e(5450," resultsByPage"),o(5451,"br"),t()()(),i(5452,"td",23)(5453,"code",40),e(5454,"string"),t()(),i(5455,"td",26)(5456,"em")(5457,"strong"),e(5458,"(opcional)"),t()(),i(5459,"p"),e(5460,'Label "Resultados por p\xE1gina" no Gerenciar Tabela.'),t()()(),i(5461,"tr",19)(5462,"td",20)(5463,"div",21)(5464,"span",22),e(5465," save"),o(5466,"br"),t()()(),i(5467,"td",23)(5468,"code",40),e(5469,"string"),t()(),i(5470,"td",26)(5471,"em")(5472,"strong"),e(5473,"(opcional)"),t()(),i(5474,"p"),e(5475,"Label do bot\xE3o Salvar"),t()()(),i(5476,"tr",19)(5477,"td",20)(5478,"div",21)(5479,"span",22),e(5480," warningColumnsRequired"),o(5481,"br"),t()()(),i(5482,"td",23)(5483,"code",40),e(5484,"string"),t()(),i(5485,"td",26)(5486,"em")(5487,"strong"),e(5488,"(opcional)"),t()(),i(5489,"p"),e(5490,'Mensagem do modal "Exclus\xE3o dos dados inseridos".'),t()()()()(),i(5491,"po-accordion-item",139)(5492,"h4",9)(5493,"code"),e(5494,"ThfGridOptionPaging"),t()(),i(5495,"div",10)(5496,"p"),e(5497,"Interface para configura\xE7\xE3o das op\xE7\xF5es de pagina\xE7\xE3o ("),i(5498,"strong"),e(5499,"t-options-paging"),t(),e(5500,")."),t()(),i(5501,"h4",15),e(5502,"Propriedades"),t(),i(5503,"table",16)(5504,"tr",17)(5505,"th",18),e(5506,"Nome"),t(),i(5507,"th",18),e(5508,"Tipo"),t(),i(5509,"th",18),e(5510,"Descri\xE7\xE3o"),t()(),i(5511,"tr",19)(5512,"td",20)(5513,"div",21)(5514,"span",22),e(5515," label"),o(5516,"br"),t()()(),i(5517,"td",23)(5518,"code",40),e(5519,"string"),t()(),i(5520,"td",26)(5521,"p"),e(5522,"Label correspondente a quantidade de itens"),t()()(),i(5523,"tr",19)(5524,"td",20)(5525,"div",21)(5526,"span",22),e(5527," value"),o(5528,"br"),t()()(),i(5529,"td",23)(5530,"code",52),e(5531,"number"),t()(),i(5532,"td",26)(5533,"p"),e(5534,"Quantidade de itens por p\xE1gina"),t()()()()(),i(5535,"po-accordion-item",140)(5536,"h4",9)(5537,"code"),e(5538,"ThfGridOptions"),t()(),i(5539,"div",10)(5540,"p"),e(5541,"Interface para as propriedades que permitem personalizar dinamicamente o comportamento do componente."),t()(),i(5542,"h4",15),e(5543,"Propriedades"),t(),i(5544,"table",16)(5545,"tr",17)(5546,"th",18),e(5547,"Nome"),t(),i(5548,"th",18),e(5549,"Tipo"),t(),i(5550,"th",18),e(5551,"Descri\xE7\xE3o"),t()(),i(5552,"tr",19)(5553,"td",20)(5554,"div",21)(5555,"span",22),e(5556," actions"),o(5557,"br"),t()()(),i(5558,"td",23)(5559,"code",29),e(5560,"Array<ThfTableAction>"),t()(),i(5561,"td",26)(5562,"em")(5563,"strong"),e(5564,"(opcional)"),t()(),i(5565,"p"),e(5566,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar no grid atrav\xE9s de bot\xF5es."),t()()(),i(5567,"tr",19)(5568,"td",20)(5569,"div",21)(5570,"span",22),e(5571," columns"),o(5572,"br"),t()()(),i(5573,"td",23)(5574,"code",37),e(5575,"Array<ThfGridColumn>"),t()(),i(5576,"td",26)(5577,"em")(5578,"strong"),e(5579,"(opcional)"),t()(),i(5580,"p"),e(5581,`Lista das colunas usadas no grid e busca avan\xE7ada.
Caso precise alterar uma coluna que j\xE1 exista deve ser passado o atributo `),i(5582,"code"),e(5583,"property"),t(),e(5584," com o mesmo conte\xFAdo do original."),t()()(),i(5585,"tr",19)(5586,"td",20)(5587,"div",21)(5588,"span",22),e(5589," customActions"),o(5590,"br"),t()()(),i(5591,"td",23)(5592,"code",42),e(5593,"Array<PoDropdownAction>"),t()(),i(5594,"td",26)(5595,"em")(5596,"strong"),e(5597,"(opcional)"),t()(),i(5598,"p"),e(5599,"Lista de a\xE7\xF5es customizadas do grid que ser\xE3o incorporadas \xE0s a\xE7\xF5es informadas atrav\xE9s da propriedade "),i(5600,"code"),e(5601,"actions"),t(),e(5602,"."),t(),i(5603,"pre")(5604,"code",31),e(5605,`// Exemplo de uso:
[
 { label: 'Apply Discount', action: this.applyDiscount.bind(this) },
 { label: 'Details', action: this.details.bind(this) }
];`),t()()()()()(),i(5606,"po-accordion-item",141)(5607,"h4",9)(5608,"code"),e(5609,"ThfGridRowActions"),t()(),i(5610,"div",10)(5611,"p"),e(5612,"Interface para configura\xE7\xE3o da edi\xE7\xE3o flu\xEDda ("),i(5613,"strong"),e(5614,"t-grid-row-actions"),t(),e(5615,`).
Essas a\xE7\xF5es permitem manipular o comportamento de edi\xE7\xE3o, inser\xE7\xE3o e remo\xE7\xE3o de dados no grid.`),t()(),i(5616,"h4",15),e(5617,"Propriedades"),t(),i(5618,"table",16)(5619,"tr",17)(5620,"th",18),e(5621,"Nome"),t(),i(5622,"th",18),e(5623,"Tipo"),t(),i(5624,"th",18),e(5625,"Descri\xE7\xE3o"),t()(),i(5626,"tr",19)(5627,"td",20)(5628,"div",21)(5629,"span",22),e(5630," actionEdit"),o(5631,"br"),t()()(),i(5632,"td",23)(5633,"code",142),e(5634,"(param: any, mode: 'edit' "),t(),i(5635,"code",143),e(5636," 'include') => FormGroup "),t(),i(5637,"code",144),e(5638," Observable<FormGroup>"),t()(),i(5639,"td",26)(5640,"p"),e(5641,`Fun\xE7\xE3o respons\xE1vel por iniciar o modo de edi\xE7\xE3o ou inclus\xE3o de uma linha no grid.
O m\xE9todo recebe os dados da linha selecionada ou um objeto vazio no modo de inclus\xE3o.
Deve retornar um `),i(5642,"code"),e(5643,"FormGroup"),t(),e(5644," que ser\xE1 utilizado para controlar os valores das colunas edit\xE1veis."),t(),i(5645,"pre")(5646,"code",31),e(5647,`// Exemplo de uso:

actionEdit: (param, mode) => new FormGroup({
  name: new FormControl(param.name),
  age: new FormControl(param.age)
})`),t()(),i(5648,"p"),e(5649,"ou"),t(),i(5650,"pre")(5651,"code",31),e(5652,`actionEdit: (dataItem, mode) => {
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
 }`),t()()()(),i(5653,"tr",19)(5654,"td",20)(5655,"div",21)(5656,"span",22),e(5657," afterRemove"),o(5658,"br"),t()()(),i(5659,"td",23)(5660,"code",145),e(5661,"(row: any) => void"),t()(),i(5662,"td",26)(5663,"em")(5664,"strong"),e(5665,"(opcional)"),t()(),i(5666,"p"),e(5667,`Fun\xE7\xE3o opcional executada ap\xF3s a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s a remo\xE7\xE3o de dados, como exibir notifica\xE7\xF5es.`),t()()(),i(5668,"tr",19)(5669,"td",20)(5670,"div",21)(5671,"span",22),e(5672," afterSave"),o(5673,"br"),t()()(),i(5674,"td",23)(5675,"code",145),e(5676,"(row: any) => void"),t()(),i(5677,"td",26)(5678,"em")(5679,"strong"),e(5680,"(opcional)"),t()(),i(5681,"p"),e(5682,`Fun\xE7\xE3o opcional executada ap\xF3s o salvamento de uma linha editada.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s a conclus\xE3o de uma edi\xE7\xE3o.`),t()()(),i(5683,"tr",19)(5684,"td",20)(5685,"div",21)(5686,"span",22),e(5687," afterUndoRemove"),o(5688,"br"),t()()(),i(5689,"td",23)(5690,"code",145),e(5691,"(row: any) => void"),t()(),i(5692,"td",26)(5693,"em")(5694,"strong"),e(5695,"(opcional)"),t()(),i(5696,"p"),e(5697,`Fun\xE7\xE3o opcional executada ap\xF3s desfazer a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s desfazer a remo\xE7\xE3o de dados, como exibir notifica\xE7\xF5es.`),t()()(),i(5698,"tr",19)(5699,"td",20)(5700,"div",21)(5701,"span",22),e(5702," beforeInsert"),o(5703,"br"),t()()(),i(5704,"td",23)(5705,"code",146),e(5706,"(row: any) => boolean "),t(),i(5707,"code",147),e(5708," Observable<boolean>"),t()(),i(5709,"td",26)(5710,"em")(5711,"strong"),e(5712,"(opcional)"),t()(),i(5713,"p"),e(5714,`Fun\xE7\xE3o opcional executada antes de inserir uma nova linha no grid.
Pode ser usada para validar ou modificar os dados antes da inclus\xE3o.`),t()()(),i(5715,"tr",19)(5716,"td",20)(5717,"div",21)(5718,"span",22),e(5719," beforeRemove"),o(5720,"br"),t()()(),i(5721,"td",23)(5722,"code",146),e(5723,"(row: any) => boolean "),t(),i(5724,"code",147),e(5725," Observable<boolean>"),t()(),i(5726,"td",26)(5727,"em")(5728,"strong"),e(5729,"(opcional)"),t()(),i(5730,"p"),e(5731,`Fun\xE7\xE3o opcional executada antes de remover uma linha do grid.
Pode ser usada para validar ou confirmar a remo\xE7\xE3o da linha.`),t()()(),i(5732,"tr",19)(5733,"td",20)(5734,"div",21)(5735,"span",22),e(5736," beforeSave"),o(5737,"br"),t()()(),i(5738,"td",23)(5739,"code",148),e(5740,"(updatedRow: any, originalRow: any) => boolean "),t(),i(5741,"code",147),e(5742," Observable<boolean>"),t()(),i(5743,"td",26)(5744,"em")(5745,"strong"),e(5746,"(opcional)"),t()(),i(5747,"p"),e(5748,`Fun\xE7\xE3o opcional executada antes de salvar as altera\xE7\xF5es de uma linha editada.
Pode ser usada para validar ou modificar os dados antes de confirmar a edi\xE7\xE3o.`),t()()(),i(5749,"tr",19)(5750,"td",20)(5751,"div",21)(5752,"span",22),e(5753," beforeUndoRemove"),o(5754,"br"),t()()(),i(5755,"td",23)(5756,"code",146),e(5757,"(row: any) => boolean "),t(),i(5758,"code",147),e(5759," Observable<boolean>"),t()(),i(5760,"td",26)(5761,"em")(5762,"strong"),e(5763,"(opcional)"),t()(),i(5764,"p"),e(5765,`Fun\xE7\xE3o opcional executada antes de desfazer a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para validar ou confirmar o desfazer da remo\xE7\xE3o da linha.`),t()()(),i(5766,"tr",19)(5767,"td",20)(5768,"div",21)(5769,"span",22),e(5770," change"),o(5771,"br"),t()()(),i(5772,"td",23)(5773,"code",149),e(5774,"(updatedRows: Array<any>) => void"),t()(),i(5775,"td",26)(5776,"em")(5777,"strong"),e(5778,"(opcional)"),t()(),i(5779,"p"),e(5780,`Fun\xE7\xE3o opcional que retorna a lista atualizada sempre que ocorre edi\xE7\xE3o, inclus\xE3o ou remo\xE7\xE3o.
Facilita o monitoramento das mudan\xE7as feitas, permitindo que se veja rapidamente o que foi alterado no grid.
Ser\xE1 disparado apenas durante a\xE7\xF5es de edi\xE7\xE3o flu\xEDda, sem compatibilidade com outros eventos.`),t()()(),i(5781,"tr",19)(5782,"td",20)(5783,"div",21)(5784,"span",22),e(5785," hiddenGrid"),o(5786,"br"),t()()(),i(5787,"td",23)(5788,"code",24),e(5789,"boolean"),t()(),i(5790,"td",26)(5791,"em")(5792,"strong"),e(5793,"(opcional)"),t()(),i(5794,"p"),e(5795,"Propriedade opcional utilizada para determinar se a grid deve ser ocultada quando n\xE3o houver registros."),t()()(),i(5796,"tr",19)(5797,"td",20)(5798,"div",21)(5799,"span",22),e(5800," noPermission"),o(5801,"br"),t()()(),i(5802,"td",23)(5803,"code",150),e(5804,"Array<ThfGridEditModeActionType>"),t()(),i(5805,"td",26)(5806,"em")(5807,"strong"),e(5808,"(opcional)"),t()(),i(5809,"p"),e(5810,`Propriedade opcional que permite remover e desabilitar as a\xE7\xF5es no grid.
Os valores permitidos no array s\xE3o definidos pelo enum `),i(5811,"strong"),e(5812,"ThfGridEditModeActionType"),t(),e(5813,":"),t(),i(5814,"pre")(5815,"code",31),e(5816,`// Exemplo de uso:

gridRowActions: ThfGridRowActions = {
 noPermission: [
   ThfGridEditModeActionType.Replace,
   ThfGridEditModeActionType.Add,
   ThfGridEditModeActionType.Remove] // Desabilita edi\xE7\xE3o, inclus\xE3o e remo\xE7\xE3o
  // outras a\xE7\xF5es...
};`),t()()()(),i(5817,"tr",19)(5818,"td",20)(5819,"div",21)(5820,"span",22),e(5821," title"),o(5822,"br"),t()()(),i(5823,"td",23)(5824,"code",40),e(5825,"string"),t()(),i(5826,"td",26)(5827,"em")(5828,"strong"),e(5829,"(opcional)"),t()(),i(5830,"p"),e(5831,"T\xEDtulo opcional que pode ser usado para exibir um cabe\xE7alho ou descri\xE7\xE3o na interface."),t()()(),i(5832,"tr",19)(5833,"td",20)(5834,"div",21)(5835,"span",22),e(5836," validateField"),o(5837,"br"),t()()(),i(5838,"td",23)(5839,"code",151),e(5840,"(updatedField: any, columnProperty: string) => boolean "),t(),i(5841,"code",147),e(5842," Observable<boolean>"),t()(),i(5843,"td",26)(5844,"em")(5845,"strong"),e(5846,"(opcional)"),t()(),i(5847,"p"),e(5848,`Fun\xE7\xE3o opcional executada quando algum campo \xE9 alterado.
Pode ser usada para validar ou modificar dados baseados no valor alterado.`),t(),i(5849,"pre")(5850,"code",31),e(5851,`// Exemplo de uso:

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
}`),t()()()()()()()(),y(5852,4),t(),i(5853,"po-tab",152),y(5854,5),i(5855,"po-container",5)(5856,"po-accordion",6)(5857,"po-accordion-item",153)(5858,"h4",9)(5859,"code"),e(5860,"ThfColumnSpacing"),t()(),i(5861,"h4",15),e(5862,"Propriedades"),t(),i(5863,"table",16)(5864,"tr",17)(5865,"th",18),e(5866,"Nome"),t(),i(5867,"th",18),e(5868,"Descri\xE7\xE3o"),t()(),i(5869,"tr",19)(5870,"td",20)(5871,"div",21)(5872,"span",22),e(5873," ExtraSmall"),o(5874,"br"),t()()(),i(5875,"td",26)(5876,"p"),e(5877,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),t()()(),i(5878,"tr",19)(5879,"td",20)(5880,"div",21)(5881,"span",22),e(5882," Large"),o(5883,"br"),t()()(),i(5884,"td",26)(5885,"p"),e(5886,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),t()()(),i(5887,"tr",19)(5888,"td",20)(5889,"div",21)(5890,"span",22),e(5891," Medium"),o(5892,"br"),t()()(),i(5893,"td",26)(5894,"p"),e(5895,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),t()()(),i(5896,"tr",19)(5897,"td",20)(5898,"div",21)(5899,"span",22),e(5900," Small"),o(5901,"br"),t()()(),i(5902,"td",26)(5903,"p"),e(5904,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),t()()()()(),i(5905,"po-accordion-item",154)(5906,"h4",9)(5907,"code"),e(5908,"ThfGridEditModeActionType"),t()(),i(5909,"h4",15),e(5910,"Propriedades"),t(),i(5911,"table",16)(5912,"tr",17)(5913,"th",18),e(5914,"Nome"),t(),i(5915,"th",18),e(5916,"Descri\xE7\xE3o"),t()(),i(5917,"tr",19)(5918,"td",20)(5919,"div",21)(5920,"span",22),e(5921," Add"),o(5922,"br"),t()()(),i(5923,"td",26)(5924,"p"),e(5925,"A\xE7\xE3o de inclus\xE3o"),t()()(),i(5926,"tr",19)(5927,"td",20)(5928,"div",21)(5929,"span",22),e(5930," Remove"),o(5931,"br"),t()()(),i(5932,"td",26)(5933,"p"),e(5934,"A\xE7\xE3o de remo\xE7\xE3o"),t()()(),i(5935,"tr",19)(5936,"td",20)(5937,"div",21)(5938,"span",22),e(5939," Replace"),o(5940,"br"),t()()(),i(5941,"td",26)(5942,"p"),e(5943,"A\xE7\xE3o de edi\xE7\xE3o"),t()()()()()()(),y(5944,6),t(),i(5945,"po-tab",155),y(5946,7),i(5947,"po-container",5)(5948,"po-accordion",6)(5949,"po-accordion-item",156)(5950,"h4",9)(5951,"code"),e(5952,"ThfGridCellTemplateDirective"),t()(),i(5953,"div",10)(5954,"p"),e(5955,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),t(),i(5956,"p"),e(5957,"Em seu uso, deve-se apenas adicionar a diretiva "),i(5958,"strong"),e(5959,"t-grid-cell-template"),t(),e(5960," \xE0 tag "),i(5961,"code"),e(5962,"ng-template"),t(),e(5963,"."),t(),i(5964,"p"),e(5965,"Retorno:"),t(),i(5966,"ul")(5967,"li")(5968,"code"),e(5969,"column"),t(),e(5970,": conte\xFAdo da coluna corrente."),t(),i(5971,"li")(5972,"code"),e(5973,"row"),t(),e(5974,": conte\xFAdo da linha corrente"),t()(),i(5975,"p"),e(5976,"Modo de uso:"),t(),i(5977,"pre")(5978,"code"),e(5979,`...
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
...`),t()(),i(5980,"blockquote")(5981,"p"),e(5982,"No exemplo acima, o usu\xE1rio tem como retorno "),i(5983,"code"),e(5984,"row"),t(),e(5985," e a "),i(5986,"code"),e(5987,"column"),t(),e(5988," corrente, neste caso ele tem total liberdade para manipular os objetos."),t()(),i(5989,"p"),e(5990,"Abaixo, a declara\xE7\xE3o dos dados de entrada do THF-GRID para o uso da directiva."),t(),i(5991,"pre")(5992,"code"),e(5993,`...
export class AppComponent {

   columns = [
      { property: 'code', label: 'ID' },
      { property: 'product', label: 'PRODUTO' },
      { property: 'status', label: 'STATUS', type: 'cellTemplate' },
      { property: 'status2', label: 'STATUS 2', type: 'cellTemplate' },
      { property: 'status3', label: 'STATUS 3', type: 'cellTemplate' }
   ];
}
...`),t()(),i(5994,"blockquote")(5995,"p"),e(5996,"Observa\xE7\xE3o: Sempre adicionar o "),i(5997,"strong"),e(5998,"type"),t(),e(5999," da coluna que deseja manipular com a directiva como "),i(6e3,"code"),e(6001,"cellTemplate"),t()()()(),i(6002,"div",11)(6003,"h4",12),e(6004,"Seletor"),t(),i(6005,"pre",13),e(6006,`<[t-grid-cell-template] >
</[t-grid-cell-template]>
`),t()()(),i(6007,"po-accordion-item",157)(6008,"h4",9)(6009,"code"),e(6010,"ThfGridColumnTemplateDirective"),t()(),i(6011,"div",10)(6012,"p"),e(6013,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),t(),i(6014,"p"),e(6015,"Em seu uso, deve-se utilizar como par\xE2metro de entrada o input "),i(6016,"strong"),e(6017,"[t-property]"),t(),e(6018,`, o qual \xE9 respons\xE1vel por informar ao THF-GRID qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),t(),i(6019,"p"),e(6020,"Retorno:"),t(),i(6021,"ul")(6022,"li"),e(6023,"value: valor referente ao conte\xFAdo da linha corrente."),t()(),i(6024,"p"),e(6025,"Modo de uso:"),t(),i(6026,"pre")(6027,"code",28),e(6028,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com">
  <ng-template t-grid-column-template [t-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</thf-grid>
...`),t()(),i(6029,"blockquote")(6030,"p"),e(6031,"No exemplo acima, todas as c\xE9lulas correspondentes a coluna "),i(6032,"code"),e(6033,"status"),t(),e(6034," ter\xE3o o conte\xFAdo alterado para "),i(6035,"code"),e(6036,"<h1>${value}</h1>"),t(),e(6037,`,
sendo que `),i(6038,"code"),e(6039,"value"),t(),e(6040," refere-se ao conte\xFAdo da linha."),t()(),i(6041,"pre")(6042,"code",28),e(6043,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com">
  <ng-template  t-grid-column-template [t-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</thf-grid>
...`),t()(),i(6044,"blockquote")(6045,"p"),e(6046,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),t()(),i(6047,"p"),e(6048,"Abaixo, a declara\xE7\xE3o dos dados de entrada do THF-GRID para o uso da directiva."),t(),i(6049,"pre")(6050,"code",31),e(6051,`...
export class AppComponent {

   targetProperty= 'status';

   columns = [
     { property: 'code', label: 'ID' },
     { property: 'product', label: 'PRODUTO' },
     { property: 'status', label: 'STATUS', type: 'columnTemplate' }
   ];
}
...`),t()(),i(6052,"blockquote")(6053,"p"),e(6054,"Observa\xE7\xE3o: Sempre adicionar o "),i(6055,"strong"),e(6056,"type"),t(),e(6057," da coluna que deseja manipular com a directiva como "),i(6058,"code"),e(6059,"columnTemplate"),t()()()(),i(6060,"div",11)(6061,"h4",12),e(6062,"Seletor"),t(),i(6063,"pre",13),e(6064,`<[t-grid-column-template] >
</[t-grid-column-template]>
`),t()()()()(),y(6065,8),t(),i(6066,"po-tab",158)(6067,"po-container",5),y(6068,9),i(6069,"h3",159),e(6070,"Tokens customiz\xE1veis"),t(),i(6071,"p"),e(6072,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(6073,"blockquote")(6074,"p"),e(6075,"Para maiores informa\xE7\xF5es, acesse o guia "),i(6076,"a",160),e(6077,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(6078,"."),t()(),i(6079,"table")(6080,"thead")(6081,"tr")(6082,"th"),e(6083,"Propriedade"),t(),i(6084,"th"),e(6085,"Descri\xE7\xE3o"),t(),i(6086,"th"),e(6087,"Valor Padr\xE3o"),t()()(),i(6088,"tbody")(6089,"tr")(6090,"td")(6091,"strong"),e(6092,"Default Values"),t()(),o(6093,"td")(6094,"td"),t(),i(6095,"tr")(6096,"td")(6097,"code"),e(6098,"--font-family"),t()(),i(6099,"td"),e(6100,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(6101,"td")(6102,"code"),e(6103,"var(--font-family-theme)"),t()()(),i(6104,"tr")(6105,"td")(6106,"code"),e(6107,"--background-color"),t()(),i(6108,"td"),e(6109,"Cor de background"),t(),i(6110,"td")(6111,"code"),e(6112,"var(--color-neutral-light-00)"),t()()(),i(6113,"tr")(6114,"td")(6115,"code"),e(6116,"--color"),t()(),i(6117,"td"),e(6118,"Cor principal da table"),t(),i(6119,"td")(6120,"code"),e(6121,"var(--color-neutral-dark-95)"),t()()(),i(6122,"tr")(6123,"td")(6124,"code"),e(6125,"--background-striped-color"),t()(),i(6126,"td"),e(6127,"Cor do background quando striped"),t(),i(6128,"td")(6129,"code"),e(6130,"var(--color-neutral-light-05)"),t()()(),i(6131,"tr")(6132,"td")(6133,"code"),e(6134,"--color-line"),t()(),i(6135,"td"),e(6136,"Cor das linhas"),t(),i(6137,"td")(6138,"code"),e(6139,"var(--color-neutral-mid-40)"),t()()(),i(6140,"tr")(6141,"td")(6142,"strong"),e(6143,"Hover"),t()(),o(6144,"td")(6145,"td"),t(),i(6146,"tr")(6147,"td")(6148,"code"),e(6149,"--color-hover"),t()(),i(6150,"td"),e(6151,"Cor principal no estado hover"),t(),i(6152,"td")(6153,"code"),e(6154,"var(--color-action-hover)"),t()()(),i(6155,"tr")(6156,"td")(6157,"code"),e(6158,"--background-color-hover"),t()(),i(6159,"td"),e(6160,"Cor de background no estado hover"),t(),i(6161,"td")(6162,"code"),e(6163,"var(--color-brand-01-lighter)"),t()()(),i(6164,"tr")(6165,"td")(6166,"strong"),e(6167,"Focused"),t()(),o(6168,"td")(6169,"td"),t(),i(6170,"tr")(6171,"td")(6172,"code"),e(6173,"--outline-color-focused"),t()(),i(6174,"td"),e(6175,"Cor do outline do estado de focus"),t(),i(6176,"td")(6177,"code"),e(6178,"var(--color-action-focus)"),t()()(),i(6179,"tr")(6180,"td")(6181,"strong"),e(6182,"Disabled"),t()(),o(6183,"td")(6184,"td"),t(),i(6185,"tr")(6186,"td")(6187,"code"),e(6188,"--color-disabled"),t()(),i(6189,"td"),e(6190,"Cor principal no estado disabled"),t(),i(6191,"td")(6192,"code"),e(6193,"var(--color-neutral-mid-40)"),t()()(),i(6194,"tr")(6195,"td")(6196,"strong"),e(6197,"Headline"),t()(),o(6198,"td")(6199,"td"),t(),i(6200,"tr")(6201,"td")(6202,"code"),e(6203,"--background-color-headline"),t()(),i(6204,"td"),e(6205,"Cor do cabe\xE7alho"),t(),i(6206,"td")(6207,"code"),e(6208,"var(--color-neutral-light-10)"),t()()(),i(6209,"tr")(6210,"td")(6211,"code"),e(6212,"--font-weight-headline"),t()(),i(6213,"td"),e(6214,"Peso da fonte do cabe\xE7alho"),t(),i(6215,"td")(6216,"code"),e(6217,"var(--font-weight-bold)"),t()()(),i(6218,"tr")(6219,"td")(6220,"strong"),e(6221,"Selected"),t()(),o(6222,"td")(6223,"td"),t(),i(6224,"tr")(6225,"td")(6226,"code"),e(6227,"--background-color-selected"),t()(),i(6228,"td"),e(6229,"Cor de background no estado de selecionado"),t(),i(6230,"td")(6231,"code"),e(6232,"var(--color-brand-01-lightest)"),t()()(),i(6233,"tr")(6234,"td")(6235,"code"),e(6236,"--color-actived"),t()(),i(6237,"td"),e(6238,"Cor do texto no estado de selecionado"),t(),i(6239,"td")(6240,"code"),e(6241,"var(--color-neutral-dark-90)"),t()()(),i(6242,"tr")(6243,"td")(6244,"strong"),e(6245,"Pressed"),t()(),o(6246,"td")(6247,"td"),t(),i(6248,"tr")(6249,"td")(6250,"code"),e(6251,"--background-color-actived"),t()(),i(6252,"td"),e(6253,"Cor de background da a\xE7\xE3o quando pressionada"),t(),i(6254,"td")(6255,"code"),e(6256,"var(--color-brand-01-light)"),t()()(),i(6257,"tr"),o(6258,"td")(6259,"td")(6260,"td"),t(),i(6261,"tr")(6262,"td")(6263,"strong"),e(6264,"Toolbar Title"),t()(),o(6265,"td")(6266,"td"),t(),i(6267,"tr")(6268,"td")(6269,"code"),e(6270,"--font-size-toolbar-title"),t()(),i(6271,"td"),e(6272,"Tamanho da fonte do Titulo da toolbar da Grid"),t(),i(6273,"td"),e(6274,"1.125rem"),t()(),i(6275,"tr")(6276,"td")(6277,"code"),e(6278,"--letter-spacing-toolbar-title"),t()(),i(6279,"td"),e(6280,"Espa\xE7amento entre letras do Titulo da toolbar da Grid"),t(),i(6281,"td"),e(6282,"0.017rem"),t()()()()(),y(6283,10),t(),i(6284,"po-tab",161),y(6285,11),t()()())},dependencies:[M,U,b,he,te,z],encapsulation:2})}}return d})();var Qt=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],Gt=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],st=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let A=E.querySelector(".po-tab-button-label");A&&A?.textContent?.trim().toLowerCase()===a&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(j($))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-lookup"]],viewQuery:function(r,n){if(r&1&&(T(z,5),T(M,5)),r&2){let l;w(l=D())&&(n.tabs=l.first),w(l=D())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:Gt,decls:2400,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","Array<ThfLookupColumn>"],[1,"language-html"],[1,"language-typescript"],["p-type","success","p-value","since 19.8.0"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","((item:","any)","=>","string)"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<ThfLookupFilterSearchSelect>"],["pan","",1,"docs-api-property-type","ThfLookupFilter"],["href","https://po-ui.io/guides/api"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","ThfLookupGridProperties"],["pan","",1,"docs-api-property-type","Array<ThfLookupKeysLabel>"],["pan","",1,"docs-api-property-type","ThfLookupLiterals"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","'equal'"],["pan","",1,"docs-api-property-type","'include'"],["p-label","M\xE9todos"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["p-label","Interfaces"],["p-label","ThfLookupColumn"],["p-label","ThfLookupFilterSearchSelect"],["p-label","ThfLookupFilter"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","Array<any>"],["p-label","ThfLookupFilteredItemsParams"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","number"],["p-label","ThfLookupGridProperties"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","Array<{","field:","string;","dir:","'asc'"],["pan","",1,"docs-api-property-type","'desc';","}>"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["p-label","ThfLookupKeysLabel"],["p-label","ThfLookupLiterals"],["p-label","ThfLookupResponseApi"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(Z(Qt),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),y(4),t(),i(5,"po-tab",4),y(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfLookupComponent"),t()(),i(16,"div",10)(17,"p"),e(18,`Componente utilizado para abrir um modal de busca com um grid que lista dados de um servi\xE7o.
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
  ="boolean"
  t-literals="ThfLookupLiterals"
  t-multiple="boolean"
  t-no-autocomplete="boolean"
  (t-error)="EventEmitter"
  t-optional="boolean"
  t-placeholder="string"
  ="PoHelperOptions"
  t-required="boolean"
  t-search-on-enter="'equal' | 'include'"
  (t-selected)="EventEmitter"
  t-show-required="boolean"
  t-modal-size="string" >
</thf-lookup>
`),t()()(),i(34,"po-accordion-item",14)(35,"h4",15),e(36,"Propriedades"),t(),i(37,"table",16)(38,"tr",17)(39,"th",18),e(40,"Nome"),t(),i(41,"th",18),e(42,"Tipo"),t(),i(43,"th",18),e(44,"Padr\xE3o"),t(),i(45,"th",18),e(46,"Descri\xE7\xE3o"),t()(),i(47,"tr",19)(48,"td",20)(49,"div",21)(50,"span",22),e(51,"t-additional-help"),o(52,"br"),t()()(),i(53,"td",23)(54,"code",24),e(55,"EventEmitter"),t()(),i(56,"td",25),e(57,"-"),t(),i(58,"td",26)(59,"em")(60,"strong"),e(61,"(opcional)"),t()(),i(62,"p"),e(63,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),i(64,"code"),e(65,"t-help"),t(),e(66,"."),t()()(),i(67,"tr",19)(68,"td",20)(69,"div",21)(70,"span",22),e(71,"t-additional-help-tooltip"),o(72,"br"),t()()(),i(73,"td",23)(74,"code",27),e(75,"string"),t()(),i(76,"td",25),e(77,"-"),t(),i(78,"td",26)(79,"em")(80,"strong"),e(81,"(opcional)"),t()(),i(82,"p"),e(83,"Exibe um \xEDcone de ajuda adicional ao "),i(84,"code"),e(85,"t-help"),t(),e(86,`, com o texto desta propriedade no tooltip.
Se o evento `),i(87,"code"),e(88,"t-additional-help"),t(),e(89,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),i(90,"strong"),e(91,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(92,"blockquote")(93,"p"),e(94,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),i(95,"tr",19)(96,"td",20)(97,"div",21)(98,"span",22),e(99," t-append-in-body"),o(100,"br"),t()()(),i(101,"td",23)(102,"code",28),e(103,"boolean"),t()(),i(104,"td",25)(105,"p")(106,"code"),e(107,"false"),t()()(),i(108,"td",26)(109,"em")(110,"strong"),e(111,"(opcional)"),t()(),i(112,"p"),e(113,"Define que o "),i(114,"code"),e(115,"listbox"),t(),e(116," e/ou tooltip ("),i(117,"code"),e(118,"t-additional-help-tooltip"),t(),e(119," e/ou "),i(120,"code"),e(121,"t-error-limit"),t(),e(122,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),i(123,"blockquote")(124,"p"),e(125,"Quando utilizado com "),i(126,"code"),e(127,"t-additional-help-tooltip"),t(),e(128,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),i(129,"tr",19)(130,"td",20)(131,"div",21)(132,"span",22),e(133,"t-auto-focus"),o(134,"br"),t()()(),i(135,"td",23)(136,"code",28),e(137,"boolean"),t()(),i(138,"td",25)(139,"p")(140,"code"),e(141,"false"),t()()(),i(142,"td",26)(143,"em")(144,"strong"),e(145,"(opcional)"),t()(),i(146,"p"),e(147,"Aplica foco no elemento ao ser iniciado."),t(),i(148,"blockquote")(149,"p"),e(150,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),i(151,"tr",19)(152,"td",20)(153,"div",21)(154,"span",22),e(155,"t-auto-height"),o(156,"br"),t()()(),i(157,"td",23)(158,"code",28),e(159,"boolean"),t()(),i(160,"td",25)(161,"p")(162,"code"),e(163,"false"),t()()(),i(164,"td",26)(165,"em")(166,"strong"),e(167,"(opcional)"),t()(),i(168,"p"),e(169,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, com altura m\xEDnima fixa e altura m\xE1xima de acordo
com o n\xFAmero de itens selecionados, mantendo-os sempre vis\xEDveis.`),t()()(),i(170,"tr",19)(171,"td",20)(172,"div",29)(173,"span",30),e(174," (t-change)"),o(175,"br"),t()()(),i(176,"td",23)(177,"code",24),e(178,"EventEmitter"),t()(),i(179,"td",25),e(180,"-"),t(),i(181,"td",26)(182,"em")(183,"strong"),e(184,"(opcional)"),t()(),i(185,"p"),e(186,"Evento disparado quando ocorre mudan\xE7as de valor realizadas pelo usu\xE1rio."),t()()(),i(187,"tr",19)(188,"td",20)(189,"div",29)(190,"span",30),e(191," (t-change-model)"),o(192,"br"),t()()(),i(193,"td",23)(194,"code",24),e(195,"EventEmitter"),t()(),i(196,"td",25),e(197,"-"),t(),i(198,"td",26)(199,"em")(200,"strong"),e(201,"(opcional)"),t()(),i(202,"p"),e(203,"Evento disparado quando ocorre mudan\xE7as de valor no campo realizados pelo usu\xE1rio ou altera\xE7\xF5es de valores de forma din\xE2mica."),t()()(),i(204,"tr",19)(205,"td",20)(206,"div",21)(207,"span",22),e(208,"t-clean"),o(209,"br"),t()()(),i(210,"td",23)(211,"code",28),e(212,"boolean"),t()(),i(213,"td",25)(214,"p")(215,"code"),e(216,"false"),t()()(),i(217,"td",26)(218,"em")(219,"strong"),e(220,"(opcional)"),t()(),i(221,"p"),e(222,"Exibe um \xEDcone que permite limpar o campo. No caso de sele\xE7\xE3o m\xFAltipla, esta op\xE7\xE3o sempre ser\xE1 "),i(223,"code"),e(224,"true"),t(),e(225,"."),t()()(),i(226,"tr",19)(227,"td",20)(228,"div",21)(229,"span",22),e(230,"t-columns"),o(231,"br"),t()()(),i(232,"td",23)(233,"code",31),e(234,"Array<ThfLookupColumn>"),t()(),i(235,"td",25),e(236,"-"),t(),i(237,"td",26)(238,"em")(239,"strong"),e(240,"(opcional)"),t()(),i(241,"p"),e(242,"Permite definir e configurar as colunas do grid dentro do modal de busca avan\xE7ada por meio da interface "),i(243,"strong"),e(244,"ThfLookupColumn"),t(),e(245,"."),t(),i(246,"pre")(247,"code",32),e(248,`// Exemplo de uso:
<thf-lookup
 ...
 [t-columns]="columns"
></thf-lookup>`),t()(),i(249,"pre")(250,"code",33),e(251,`columns: Array<ThfLookupColumn> = [
 { property: 'id', label: 'C\xF3digo' },
 { property: 'name', label: 'Nome' },
}`),t()()()(),i(252,"tr",19)(253,"td",20)(254,"div",21)(255,"span",22),e(256," t-size"),o(257,"br"),t(),o(258,"po-tag",34),t()(),i(259,"td",23)(260,"code",27),e(261,"string"),t()(),i(262,"td",25)(263,"p")(264,"code"),e(265,"medium"),t()()(),i(266,"td",26)(267,"em")(268,"strong"),e(269,"(opcional)"),t()(),i(270,"p"),e(271,"Define o tamanho do componente:"),t(),i(272,"ul")(273,"li")(274,"code"),e(275,"small"),t(),e(276,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(277,"li")(278,"code"),e(279,"medium"),t(),e(280,": altura do input como 44px."),t()(),i(281,"blockquote")(282,"p"),e(283,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(284,"code"),e(285,"medium"),t(),e(286,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(287,"a",35),e(288,"po-theme"),t(),e(289,"."),t()()()(),i(290,"tr",19)(291,"td",20)(292,"div",21)(293,"span",22),e(294,"t-disabled"),o(295,"br"),t()()(),i(296,"td",23)(297,"code",28),e(298,"boolean"),t()(),i(299,"td",25)(300,"p")(301,"code"),e(302,"false"),t()()(),i(303,"td",26)(304,"em")(305,"strong"),e(306,"(opcional)"),t()(),i(307,"p"),e(308,"Desabilita o campo."),t()()(),i(309,"tr",19)(310,"td",20)(311,"div",21)(312,"span",22),e(313,"t-error-limit"),o(314,"br"),t()()(),i(315,"td",23)(316,"code",28),e(317,"boolean"),t()(),i(318,"td",25)(319,"p")(320,"code"),e(321,"false"),t()()(),i(322,"td",26)(323,"em")(324,"strong"),e(325,"(opcional)"),t()(),i(326,"p"),e(327,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(328,"blockquote")(329,"p"),e(330,"Caso essa propriedade seja definida como "),i(331,"code"),e(332,"true"),t(),e(333,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(334,"tr",19)(335,"td",20)(336,"div",21)(337,"span",22),e(338,"t-field-error-message"),o(339,"br"),t()()(),i(340,"td",23)(341,"code",27),e(342,"string"),t()(),i(343,"td",25),e(344,"-"),t(),i(345,"td",26)(346,"em")(347,"strong"),e(348,"(opcional)"),t()(),i(349,"p"),e(350,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),i(351,"blockquote")(352,"p"),e(353,"Necess\xE1rio que a propriedade "),i(354,"code"),e(355,"t-required"),t(),e(356," esteja habilitada."),t()()()(),i(357,"tr",19)(358,"td",20)(359,"div",21)(360,"span",22),e(361," t-field-format"),o(362,"br"),t()()(),i(363,"td",23)(364,"code",36),e(365,"Array<string> "),t(),i(366,"code",37),e(367," ((item: any) => string)"),t()(),i(368,"td",25),e(369,"-"),t(),i(370,"td",26)(371,"em")(372,"strong"),e(373,"(opcional)"),t()(),i(374,"p"),e(375,"Formato de exibi\xE7\xE3o do campo."),t(),i(376,"p"),e(377,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(378,"em"),e(379,"string"),t(),e(380," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(381,"pre")(382,"code",33),e(383,"fieldFormat(obj) {\n  return `${obj.id} (${obj.name})`;\n}"),t()(),i(384,"pre")(385,"code",32),e(386,`<thf-lookup
  ...
  [t-field-format]="fieldFormat"
  ...
></thf-lookup>
<!-- Apresenta\xE7\xE3o no campo: 123 (Goku)  -->`),t()(),i(387,"p"),e(388,`Ou pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo.
Nessa caso, ser\xE1 utilizado `),i(389,"code"),e(390,"-"),t(),e(391,` como separador.
Por exemplo:`),t(),i(392,"pre")(393,"code",32),e(394,`<thf-lookup
  ...
  [t-field-format]="['id','nickname']"
  ...
></thf-lookup>
<!-- Apresenta\xE7\xE3o no campo: 123 - Goku  -->`),t()(),i(395,"blockquote")(396,"p"),e(397,"Esta propriedade sobrep\xF5e a "),i(398,"code"),e(399,"t-keys-label"),t(),e(400," como formata\xE7\xE3o do campo."),t()()()(),i(401,"tr",19)(402,"td",20)(403,"div",21)(404,"span",22),e(405,"t-field-label"),o(406,"br"),t()()(),i(407,"td",23)(408,"code",27),e(409,"string"),t()(),i(410,"td",25),e(411,"-"),t(),i(412,"td",26)(413,"p"),e(414,`Define a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e do filtro selecionado dentro do modal de busca avan\xE7ada.
Propriedade obrigat\xF3ria.`),t()()(),i(415,"tr",19)(416,"td",20)(417,"div",21)(418,"span",22),e(419,"t-field-value"),o(420,"br"),t()()(),i(421,"td",23)(422,"code",27),e(423,"string"),t()(),i(424,"td",25),e(425,"-"),t(),i(426,"td",26)(427,"p"),e(428,"Define a coluna que ser\xE1 utilizada como valor do campo. Propriedade obrigat\xF3ria."),t(),i(429,"blockquote")(430,"p"),e(431,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),i(432,"tr",19)(433,"td",20)(434,"div",21)(435,"span",22),e(436,"t-filter-params"),o(437,"br"),t()()(),i(438,"td",23)(439,"code",38),e(440,"any"),t()(),i(441,"td",25),e(442,"-"),t(),i(443,"td",26)(444,"em")(445,"strong"),e(446,"(opcional)"),t()(),i(447,"p"),e(448,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou ao servi\xE7o que implementa a interface "),i(449,"strong"),e(450,"ThfLookupFilter"),t(),e(451,"."),t()()(),i(452,"tr",19)(453,"td",20)(454,"div",21)(455,"span",22),e(456,"t-filter-search-select"),o(457,"br"),t()()(),i(458,"td",23)(459,"code",39),e(460,"Array<ThfLookupFilterSearchSelect>"),t()(),i(461,"td",25),e(462,"-"),t(),i(463,"td",26)(464,"em")(465,"strong"),e(466,"(opcional)"),t()(),i(467,"p"),e(468,`Permite definir quais colunas ser\xE3o op\xE7\xF5es de filtro dentro do modal de busca avan\xE7ada. Deve implementar a interface
`),i(469,"strong"),e(470,"ThfLookupFilterSearchSelect"),t(),e(471,"."),t(),i(472,"pre")(473,"code",32),e(474,`// Exemplo de uso:
<thf-lookup
 ...
 [t-filter-search-select]="filterSelect"
></thf-lookup>`),t()(),i(475,"pre")(476,"code",33),e(477,`filterSelect: Array<ThfLookupFilterSearchSelect> = [
 { label: 'Nome', value: 'name' },
 { label: 'Nickname', value: 'nickname' },
 { label: 'Email', value: 'email' }
];`),t()()()(),i(478,"tr",19)(479,"td",20)(480,"div",21)(481,"span",22),e(482,"t-filter-service"),o(483,"br"),t()()(),i(484,"td",23)(485,"code",40),e(486,"ThfLookupFilter "),t(),i(487,"code",27),e(488," string"),t()(),i(489,"td",25),e(490,"-"),t(),i(491,"td",26)(492,"p"),e(493,`Respons\xE1vel por buscar os dados exibidos no grid dentro do modal de busca avan\xE7ada. Aceita um servi\xE7o que implementa a interface
`),i(494,"strong"),e(495,"ThfLookupFilter"),t(),e(496," ou uma URL."),t(),i(497,"p"),e(498,`Quando uma URL \xE9 definida:
Se houver filtro, \xE9 adicionado o par\xE2metro `),i(499,"code"),e(500,"filter"),t(),e(501," com o valor da busca:"),t(),i(502,"pre")(503,"code"),e(504,"url + ?page=1&pageSize=20&filter=Peter"),t()(),i(505,"p"),e(506,"Se houver ordena\xE7\xE3o, \xE9 adicionado o par\xE2metro "),i(507,"code"),e(508,"order"),t(),e(509,` com o valor da coluna.
Exemplo de busca com ordena\xE7\xE3o decrescente:`),t(),i(510,"pre")(511,"code"),e(512,"url + ?page=1&pageSize=20&filter=Peter&order=-name"),t()(),i(513,"p"),e(514,"Exemplo de busca com ordena\xE7\xE3o crescente:"),t(),i(515,"pre")(516,"code"),e(517,"url + ?page=1&pageSize=20&filter=Peter&order=name"),t()(),i(518,"p"),e(519,"Se definido "),i(520,"strong"),e(521,"t-filter-params"),t(),e(522,`, seu valor tamb\xE9m ser\xE1 concatenado.
Exemplo com `),i(523,"code"),e(524,"{ age: 23 }"),t(),e(525,":"),t(),i(526,"pre")(527,"code"),e(528,"url + ?page=1&pageSize=20&age=23&filter=Peter"),t()(),i(529,"p"),e(530,`Se o campo precisar iniciar com valores, os registros s\xE3o buscados das seguintes formas:
Exemplo com a sele\xE7\xE3o \xFAnica:`),t(),i(531,"pre")(532,"code"),e(533,`model = 1234;

GET url/1234`),t()(),i(534,"p"),e(535,"Exemplo com a sele\xE7\xE3o m\xFAltipla:"),t(),i(536,"pre")(537,"code"),e(538,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678`),t()(),i(539,"blockquote")(540,"p"),e(541,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(542,"a",41),e(543,"API do PO UI"),t(),e(544,` e utilizar
os valores definidos nas propriedades `),i(545,"strong"),e(546,"t-field-label"),t(),e(547," e "),i(548,"strong"),e(549,"t-field-value"),t(),e(550," para a constru\xE7\xE3o do "),i(551,"strong"),e(552,"thf-lookup"),t(),e(553,"."),t()(),i(554,"p"),e(555,"Caso a busca tenha ocorrido pressionando a tecla "),i(556,"em"),e(557,"TAB"),t(),e(558,`, o filtro ser\xE1 codificado atrav\xE9s da fun\xE7\xE3o
`),i(559,"a",42),e(560,"encodeURIComponent"),t(),e(561,`, e portanto concatenado
na URL da seguinte forma:`),t(),i(562,"pre")(563,"code"),e(564,"url/valor%20que%20se%20deseja%20filtrar"),t()(),i(565,"blockquote")(566,"p"),e(567,"Caso utilize um servi\xE7o "),i(568,"strong"),e(569,"ThfLookupFilter"),t(),e(570,`, o tratamento de encoding do valor fica sob a responsabilidade do
desenvolvedor.`),t()()()(),i(571,"tr",19)(572,"td",20)(573,"div",21)(574,"span",22),e(575,"t-grid-properties"),o(576,"br"),t()()(),i(577,"td",23)(578,"code",43),e(579,"ThfLookupGridProperties"),t()(),i(580,"td",25),e(581,"-"),t(),i(582,"td",26)(583,"em")(584,"strong"),e(585,"(opcional)"),t()(),i(586,"p"),e(587,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup."),t(),i(588,"p"),e(589,"// Exemplo de uso:"),t(),i(590,"pre")(591,"code",32),e(592,`<thf-lookup
...
[t-grid-properties]="gridProperties"
></thf-lookup>`),t()(),i(593,"pre")(594,"code",33),e(595,`gridProperties: ThfLookupGridProperties = {
resizable: true,
autoSize: true,
autoSizeOnScroll: true,
virtualScroll: true,
}`),t()()()(),i(596,"tr",19)(597,"td",20)(598,"div",21)(599,"span",22),e(600,"t-help"),o(601,"br"),t()()(),i(602,"td",23)(603,"code",27),e(604,"string"),t()(),i(605,"td",25),e(606,"-"),t(),i(607,"td",26)(608,"em")(609,"strong"),e(610,"(opcional)"),t()(),i(611,"p"),e(612,"Texto de apoio do campo."),t()()(),i(613,"tr",19)(614,"td",20)(615,"div",29)(616,"span",30),e(617," (t-focus)"),o(618,"br"),t()()(),i(619,"td",23)(620,"code",24),e(621,"EventEmitter"),t()(),i(622,"td",25),e(623,"-"),t(),i(624,"td",26)(625,"em")(626,"strong"),e(627,"(opcional)"),t()(),i(628,"p"),e(629,"Evento emitido quando o campo de entrada (input) recebe foco."),t(),i(630,"p"),e(631,"Esse evento pode ser utilizado para realizar a\xE7\xF5es espec\xEDficas no momento em que o foco \xE9 aplicado ao input."),t()()(),i(632,"tr",19)(633,"td",20)(634,"div",21)(635,"span",22),e(636,"t-key-last-search"),o(637,"br"),t()()(),i(638,"td",23)(639,"code",27),e(640,"string"),t()(),i(641,"td",25),e(642,"-"),t(),i(643,"td",26)(644,"em")(645,"strong"),e(646,"(opcional)"),t()(),i(647,"p"),e(648,"Define um identificador \xFAnico para o campo. Marca\xE7\xE3o necess\xE1ria quando h\xE1 hist\xF3rico de \xFAltimas pesquisas."),t()()(),i(649,"tr",19)(650,"td",20)(651,"div",29)(652,"span",30),e(653," (t-keydown)"),o(654,"br"),t()()(),i(655,"td",23)(656,"code",24),e(657,"EventEmitter"),t()(),i(658,"td",25),e(659,"-"),t(),i(660,"td",26)(661,"em")(662,"strong"),e(663,"(opcional)"),t()(),i(664,"p"),e(665,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no campo.
Retorna um objeto `),i(666,"code"),e(667,"KeyboardEvent"),t(),e(668," com informa\xE7\xF5es sobre a tecla."),t()()(),i(669,"tr",19)(670,"td",20)(671,"div",21)(672,"span",22),e(673,"t-keys-label"),o(674,"br"),t()()(),i(675,"td",23)(676,"code",44),e(677,"Array<ThfLookupKeysLabel>"),t()(),i(678,"td",25),e(679,"-"),t(),i(680,"td",26)(681,"em")(682,"strong"),e(683,"(opcional)"),t()(),i(684,"p"),e(685,"Permite definir at\xE9 3 propriedades do item selecionado que ficar\xE3o vis\xEDveis no campo."),t(),i(686,"pre")(687,"code",32),e(688,`<thf-lookup
 ...
 [t-keys-label]="keysLabel"
></thf-lookup>`),t()(),i(689,"pre")(690,"code",33),e(691,`keysLabel: Array<ThfLookupKeysLabel> = [
 { label: 'Nome', value: 'name' },
 { label: 'Email', value: 'email' }
];`),t()(),i(692,"pre")(693,"code"),e(694,`// sa\xEDda no campo:
Robert Bruce Banner-hulksmash@marvel.com`),t()()()(),i(695,"tr",19)(696,"td",20)(697,"div",21)(698,"span",22),e(699,"t-label"),o(700,"br"),t()()(),i(701,"td",23)(702,"code",27),e(703,"string"),t()(),i(704,"td",25),e(705,"-"),t(),i(706,"td",26)(707,"em")(708,"strong"),e(709,"(opcional)"),t()(),i(710,"p"),e(711,"Label do campo. Tamb\xE9m usado como t\xEDtulo do modal de busca avan\xE7ada, se "),i(712,"code"),e(713,"modalTitle"),t(),e(714," n\xE3o estiver definido em "),i(715,"strong"),e(716,"t-literals"),t(),e(717,"."),t()()(),i(718,"tr",19)(719,"td",20)(720,"div",21)(721,"span",22),o(722,"br"),t()()(),i(723,"td",23)(724,"code",28),e(725,"boolean"),t()(),i(726,"td",25)(727,"p")(728,"code"),e(729,"false"),t()()(),i(730,"td",26)(731,"em")(732,"strong"),e(733,"(opcional)"),t()(),i(734,"p"),e(735,"Habilita a quebra autom\xE1tica do texto da propriedade "),i(736,"code"),e(737,"t-label"),t(),e(738,". Quando "),i(739,"code"),e(740,"t-label-text-wrap"),t(),e(741,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),i(742,"tr",19)(743,"td",20)(744,"div",21)(745,"span",22),e(746,"t-literals"),o(747,"br"),t()()(),i(748,"td",23)(749,"code",45),e(750,"ThfLookupLiterals"),t()(),i(751,"td",25),e(752,"-"),t(),i(753,"td",26)(754,"em")(755,"strong"),e(756,"(opcional)"),t()(),i(757,"p"),e(758,"Permite definir literais personalizados para o componente, conforme a interface "),i(759,"strong"),e(760,"ThfLookupLiterals"),t(),e(761,"."),t(),i(762,"pre")(763,"code",32),e(764,`// Exemplo de uso:
<thf-lookup
 ...
 [t-literals]="customLiterals"
></thf-lookup>`),t()(),i(765,"pre")(766,"code",33),e(767,"customLiterals: ThfLookupLiterals = { modalTitle: 'Busca avan\xE7ada' };"),t()()()(),i(768,"tr",19)(769,"td",20)(770,"div",21)(771,"span",22),e(772,"t-multiple"),o(773,"br"),t()()(),i(774,"td",23)(775,"code",28),e(776,"boolean"),t()(),i(777,"td",25)(778,"p")(779,"code"),e(780,"false"),t()()(),i(781,"td",26)(782,"em")(783,"strong"),e(784,"(opcional)"),t()(),i(785,"p"),e(786,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(787,"blockquote")(788,"p"),e(789,"Quando habilitado, o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(790,"code"),e(791,"[ 12345, 67890 ]"),t()()()()(),i(792,"tr",19)(793,"td",20)(794,"div",21)(795,"span",22),e(796,"t-no-autocomplete"),o(797,"br"),t()()(),i(798,"td",23)(799,"code",28),e(800,"boolean"),t()(),i(801,"td",25)(802,"p")(803,"code"),e(804,"false"),t()()(),i(805,"td",26)(806,"em")(807,"strong"),e(808,"(opcional)"),t()(),i(809,"p"),e(810,"Desabilita o "),i(811,"code"),e(812,"autocomplete"),t(),e(813," (propriedade nativa) do campo."),t()()(),i(814,"tr",19)(815,"td",20)(816,"div",29)(817,"span",30),e(818," (t-error)"),o(819,"br"),t()()(),i(820,"td",23)(821,"code",24),e(822,"EventEmitter"),t()(),i(823,"td",25),e(824,"-"),t(),i(825,"td",26)(826,"em")(827,"strong"),e(828,"(opcional)"),t()(),i(829,"p"),e(830,`Evento disparado quando ocorre algum erro na requisi\xE7\xE3o de busca.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(831,"tr",19)(832,"td",20)(833,"div",21)(834,"span",22),e(835,"t-optional"),o(836,"br"),t()()(),i(837,"td",23)(838,"code",28),e(839,"boolean"),t()(),i(840,"td",25)(841,"p")(842,"code"),e(843,"false"),t()()(),i(844,"td",26)(845,"em")(846,"strong"),e(847,"(opcional)"),t()(),i(848,"p"),e(849,"Exibe um indicador opcional no campo. Requer que "),i(850,"strong"),e(851,"t-label"),t(),e(852," esteja definido e "),i(853,"strong"),e(854,"t-required"),t(),e(855," desabilitado."),t()()(),i(856,"tr",19)(857,"td",20)(858,"div",21)(859,"span",22),e(860,"t-placeholder"),o(861,"br"),t()()(),i(862,"td",23)(863,"code",27),e(864,"string"),t()(),i(865,"td",25),e(866,"-"),t(),i(867,"td",26)(868,"em")(869,"strong"),e(870,"(opcional)"),t()(),i(871,"p"),e(872,"Texto exibido enquanto o campo estiver vazio."),t()()(),i(873,"tr",19)(874,"td",20)(875,"div",21)(876,"span",22),o(877,"br"),t()()(),i(878,"td",23)(879,"code",46),e(880,"PoHelperOptions"),t()(),i(881,"td",25),e(882,"-"),t(),i(883,"td",26)(884,"em")(885,"strong"),e(886,"(opcional)"),t()(),i(887,"p"),e(888,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),i(889,"blockquote")(890,"p"),e(891,"Caso o "),i(892,"code"),e(893,"t-label"),t(),e(894,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),i(895,"code"),e(896,"t-additional-help-tooltip"),t(),e(897," e "),i(898,"code"),e(899,"t-additional-help"),t(),e(900,") ser\xE1 ignorado."),t()()()(),i(901,"tr",19)(902,"td",20)(903,"div",21)(904,"span",22),e(905,"t-required"),o(906,"br"),t()()(),i(907,"td",23)(908,"code",28),e(909,"boolean"),t()(),i(910,"td",25)(911,"p")(912,"code"),e(913,"false"),t()()(),i(914,"td",26)(915,"em")(916,"strong"),e(917,"(opcional)"),t()(),i(918,"p"),e(919,"Define o campo como obrigat\xF3rio. Caso "),i(920,"strong"),e(921,"t-disabled"),t(),e(922," esteja habilitado, a obrigatoriedade ser\xE1 ignorada."),t()()(),i(923,"tr",19)(924,"td",20)(925,"div",21)(926,"span",22),e(927,"t-search-on-enter"),o(928,"br"),t()()(),i(929,"td",23)(930,"code",47),e(931,"'equal' "),t(),i(932,"code",48),e(933," 'include'"),t()(),i(934,"td",25)(935,"p")(936,"code"),e(937,"equal"),t()()(),i(938,"td",26)(939,"em")(940,"strong"),e(941,"(opcional)"),t()(),i(942,"p"),e(943,"Realiza busca do item ao pressionar a tecla Enter."),t(),i(944,"blockquote")(945,"p"),e(946,"Caso essa propriedade seja definida como "),i(947,"code"),e(948,"equal"),t(),e(949,`, a busca ser\xE1 realizada quando o valor do campo for exatamente igual ao valor do item.
Caso seja definida como `),i(950,"code"),e(951,"include"),t(),e(952,", a busca retornar\xE1 o primeiro item que contenha o valor do campo."),t()()()(),i(953,"tr",19)(954,"td",20)(955,"div",29)(956,"span",30),e(957," (t-selected)"),o(958,"br"),t()()(),i(959,"td",23)(960,"code",24),e(961,"EventEmitter"),t()(),i(962,"td",25),e(963,"-"),t(),i(964,"td",26)(965,"em")(966,"strong"),e(967,"(opcional)"),t()(),i(968,"p"),e(969,`Evento disparado ao selecionar um item.
Para sele\xE7\xE3o m\xFAltipla, retorna a lista de itens selecionados contendo os valores da coluna definida em `),i(970,"strong"),e(971,"t-field-value"),t(),e(972,`.
Para sele\xE7\xE3o \xFAnica retorna o objeto do item.`),t()()(),i(973,"tr",19)(974,"td",20)(975,"div",21)(976,"span",22),e(977,"t-show-required"),o(978,"br"),t()()(),i(979,"td",23)(980,"code",28),e(981,"boolean"),t()(),i(982,"td",25)(983,"p")(984,"code"),e(985,"false"),t()()(),i(986,"td",26)(987,"em")(988,"strong"),e(989,"(opcional)"),t()(),i(990,"p"),e(991,"Exibe um indicador de obrigatoriedade no campo. Requer que "),i(992,"strong"),e(993,"t-required"),t(),e(994," esteja habilitado e "),i(995,"strong"),e(996,"t-label"),t(),e(997," definido."),t()()(),i(998,"tr",19)(999,"td",20)(1e3,"div",21)(1001,"span",22),e(1002," t-modal-size"),o(1003,"br"),t()()(),i(1004,"td",23)(1005,"code",27),e(1006,"string"),t()(),i(1007,"td",25)(1008,"p")(1009,"code"),e(1010,"lg"),t()()(),i(1011,"td",26)(1012,"em")(1013,"strong"),e(1014,"(opcional)"),t()(),i(1015,"p"),e(1016,"Define o tamanho do modal."),t(),i(1017,"p"),e(1018,"Valores v\xE1lidos:"),t(),i(1019,"ul")(1020,"li")(1021,"code"),e(1022,"sm"),t(),e(1023," (pequeno)"),t(),i(1024,"li")(1025,"code"),e(1026,"md"),t(),e(1027," (m\xE9dio)"),t(),i(1028,"li")(1029,"code"),e(1030,"lg"),t(),e(1031," (grande)"),t(),i(1032,"li")(1033,"code"),e(1034,"xl"),t(),e(1035," (extra grande)"),t(),i(1036,"li")(1037,"code"),e(1038,"auto"),t(),e(1039," (autom\xE1tico)"),t()(),i(1040,"blockquote")(1041,"p"),e(1042,"Quando informado "),i(1043,"code"),e(1044,"auto"),t(),e(1045,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),i(1046,"code"),e(1047,"lg"),t(),e(1048,"."),t()()()()()(),i(1049,"po-accordion-item",49)(1050,"table",50)(1051,"tr",19)(1052,"th",51)(1053,"div",21)(1054,"h4")(1055,"span",22),e(1056," showAdditionalHelp "),t()()()()(),i(1057,"tr",26)(1058,"td",26)(1059,"p"),e(1060,"M\xE9todo que exibe "),i(1061,"code"),e(1062,"t-additionalHelpTooltip"),t(),e(1063," ou executa a a\xE7\xE3o definida em "),i(1064,"code"),e(1065,"t-additionalHelp"),t(),e(1066,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(1067,"code"),e(1068,"t-keydown"),t(),e(1069,"."),t(),i(1070,"pre")(1071,"code"),e(1072,`<thf-lookup
 #lookup
 ...
 t-additional-help-tooltip="Mensagem de ajuda complementar"
 (t-keydown)="onKeyDown($event, lookup)"
></thf-lookup>`),t()(),i(1073,"pre")(1074,"code"),e(1075,`...
onKeyDown(event: KeyboardEvent, inp: ThfLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}`),t()()()()(),o(1076,"br"),t()()(),y(1077,2),t(),i(1078,"po-tab",52),y(1079,3),i(1080,"po-container",5)(1081,"po-accordion",6)(1082,"po-accordion-item",53)(1083,"h4",9)(1084,"code"),e(1085,"ThfLookupColumn"),t()(),i(1086,"div",10)(1087,"p"),e(1088,"Interface para configura\xE7\xE3o das colunas ("),i(1089,"strong"),e(1090,"t-columns"),t(),e(1091,")."),t()(),i(1092,"h4",15),e(1093,"Propriedades"),t(),i(1094,"table",16)(1095,"tr",17)(1096,"th",18),e(1097,"Nome"),t(),i(1098,"th",18),e(1099,"Tipo"),t(),i(1100,"th",18),e(1101,"Descri\xE7\xE3o"),t()(),i(1102,"tr",19)(1103,"td",20)(1104,"div",21)(1105,"span",22),e(1106," format"),o(1107,"br"),t()()(),i(1108,"td",23)(1109,"code",27),e(1110,"string"),t()(),i(1111,"td",26)(1112,"em")(1113,"strong"),e(1114,"(opcional)"),t()(),i(1115,"p"),e(1116,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(1117,"ul")(1118,"li"),e(1119,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(1120,"li"),e(1121,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(1122,"tr",19)(1123,"td",20)(1124,"div",21)(1125,"span",22),e(1126," label"),o(1127,"br"),t()()(),i(1128,"td",23)(1129,"code",27),e(1130,"string"),t()(),i(1131,"td",26)(1132,"em")(1133,"strong"),e(1134,"(opcional)"),t()(),i(1135,"p"),e(1136,"Texto para t\xEDtulo da coluna."),t(),i(1137,"p"),e(1138,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(1139,"em"),e(1140,"label"),t(),e(1141," o valor da propriedade "),i(1142,"em"),e(1143,"property"),t(),e(1144," com a primeira letra em mai\xFAsculo."),t()()(),i(1145,"tr",19)(1146,"td",20)(1147,"div",21)(1148,"span",22),e(1149," property"),o(1150,"br"),t()()(),i(1151,"td",23)(1152,"code",27),e(1153,"string"),t()(),i(1154,"td",26)(1155,"em")(1156,"strong"),e(1157,"(opcional)"),t()(),i(1158,"p"),e(1159,"Nome identificador da coluna."),t()()(),i(1160,"tr",19)(1161,"td",20)(1162,"div",21)(1163,"span",22),e(1164," type"),o(1165,"br"),t()()(),i(1166,"td",23)(1167,"code",27),e(1168,"string"),t()(),i(1169,"td",26)(1170,"em")(1171,"strong"),e(1172,"(opcional)"),t()(),i(1173,"p"),e(1174,"Tipo da coluna:"),t(),i(1175,"ul")(1176,"li"),e(1177,"string (padr\xE3o): textos"),t(),i(1178,"li"),e(1179,"number: valores num\xE9ricos"),t(),i(1180,"li"),e(1181,"date: data"),t(),i(1182,"li"),e(1183,"currency: valores monet\xE1rios"),t(),i(1184,"li"),e(1185,"dateTime: data e hora"),t()()()(),i(1186,"tr",19)(1187,"td",20)(1188,"div",21)(1189,"span",22),e(1190," width"),o(1191,"br"),t()()(),i(1192,"td",23)(1193,"code",27),e(1194,"string"),t()(),i(1195,"td",26)(1196,"em")(1197,"strong"),e(1198,"(opcional)"),t()(),i(1199,"p"),e(1200,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()()(),i(1201,"po-accordion-item",54)(1202,"h4",9)(1203,"code"),e(1204,"ThfLookupFilterSearchSelect"),t()(),i(1205,"div",10)(1206,"p"),e(1207,"Interface que define as colunas para busca ("),i(1208,"strong"),e(1209,"t-filter-search-select"),t(),e(1210,")"),t()(),i(1211,"h4",15),e(1212,"Propriedades"),t(),i(1213,"table",16)(1214,"tr",17)(1215,"th",18),e(1216,"Nome"),t(),i(1217,"th",18),e(1218,"Tipo"),t(),i(1219,"th",18),e(1220,"Descri\xE7\xE3o"),t()(),i(1221,"tr",19)(1222,"td",20)(1223,"div",21)(1224,"span",22),e(1225," label"),o(1226,"br"),t()()(),i(1227,"td",23)(1228,"code",27),e(1229,"string"),t()(),i(1230,"td",26)(1231,"p"),e(1232,"R\xF3tulo da coluna"),t()()(),i(1233,"tr",19)(1234,"td",20)(1235,"div",21)(1236,"span",22),e(1237," value"),o(1238,"br"),t()()(),i(1239,"td",23)(1240,"code",27),e(1241,"string"),t()(),i(1242,"td",26)(1243,"p"),e(1244,"Coluna"),t()()()()(),i(1245,"po-accordion-item",55)(1246,"h4",9)(1247,"code"),e(1248,"ThfLookupFilter"),t()(),i(1249,"div",10)(1250,"p"),e(1251,"Interface para definir o tipo de busca via servi\xE7o."),t()(),i(1252,"table",50)(1253,"tr",19)(1254,"th",51)(1255,"div",21)(1256,"h4")(1257,"span",22),e(1258," fetchItems "),t()()()()(),i(1259,"tr",26)(1260,"td",26)(1261,"p"),e(1262,`M\xE9todo que ser\xE1 disparado ao digitar no campo do componente, deve-se retornar
um `),i(1263,"em"),e(1264,"Observable"),t(),e(1265," com a resposta da API no formato { items: [] }."),t()()()(),i(1266,"h5")(1267,"b"),e(1268,"Par\xE2metros"),t()(),i(1269,"table",16)(1270,"tr",17)(1271,"th",18),e(1272,"Nome"),t(),i(1273,"th",18),e(1274,"Tipo"),t(),i(1275,"th",18),e(1276,"Descri\xE7\xE3o"),t()(),i(1277,"tr",19)(1278,"td",20),e(1279," query"),t(),i(1280,"td",23)(1281,"code",56),e(1282," string "),t()(),i(1283,"td",26)(1284,"p"),e(1285,"Par\xE2metro com o valor que est\xE1 sendo digitado no campo do lookup"),t()()(),i(1286,"tr",19)(1287,"td",20),e(1288," filterParams"),t(),i(1289,"td",23)(1290,"code",56),e(1291," any "),t()(),i(1292,"td",26)(1293,"p"),e(1294,"Valor informado atrav\xE9s da propriedade "),i(1295,"strong"),e(1296,"t-filter-params"),t(),e(1297,"."),t()()()(),o(1298,"br"),i(1299,"table",50)(1300,"tr",19)(1301,"th",51)(1302,"div",21)(1303,"h4")(1304,"span",22),e(1305," getFilteredItems "),t()()()()(),i(1306,"tr",26)(1307,"td",26)(1308,"p"),e(1309,`M\xE9todo que ser\xE1 disparado ao filtrar no grid ou carregar mais resultados no componente, deve-se retornar
um `),i(1310,"em"),e(1311,"Observable"),t(),e(1312," com a resposta da API no formato da interface "),i(1313,"strong"),e(1314,"ThfLookupResponseApi"),t(),e(1315,"."),t()()()(),i(1316,"h5")(1317,"b"),e(1318,"Par\xE2metros"),t()(),i(1319,"table",16)(1320,"tr",17)(1321,"th",18),e(1322,"Nome"),t(),i(1323,"th",18),e(1324,"Tipo"),t(),i(1325,"th",18),e(1326,"Descri\xE7\xE3o"),t()(),i(1327,"tr",19)(1328,"td",20),e(1329," params"),t(),i(1330,"td",23)(1331,"code",56),e(1332," ThfLookupFilteredItemsParams "),t()(),i(1333,"td",26)(1334,"p"),e(1335,"Objeto enviado por par\xE2metro que implementa a interface "),i(1336,"strong"),e(1337,"ThfLookupFilteredItemsParams"),t(),e(1338,"."),t()()()(),o(1339,"br"),i(1340,"table",50)(1341,"tr",19)(1342,"th",51)(1343,"div",21)(1344,"h4")(1345,"span",22),e(1346," getObjectByValue "),t()()()()(),i(1347,"tr",26)(1348,"td",26)(1349,"p"),e(1350,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(1351,"p"),e(1352,"Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o esteja habilitada, o par\xE2metro "),i(1353,"code"),e(1354,"value"),t(),e(1355,` ser\xE1 enviado como uma lista de valores
e o `),i(1356,"em"),e(1357,"Observable"),t(),e(1358," deve retornar uma lista de objetos."),t()()()(),i(1359,"h5")(1360,"b"),e(1361,"Par\xE2metros"),t()(),i(1362,"table",16)(1363,"tr",17)(1364,"th",18),e(1365,"Nome"),t(),i(1366,"th",18),e(1367,"Tipo"),t(),i(1368,"th",18),e(1369,"Descri\xE7\xE3o"),t()(),i(1370,"tr",19)(1371,"td",20),e(1372," value"),t(),i(1373,"td",23)(1374,"code",27),e(1375," string "),t(),i(1376,"code",57),e(1377," Array<any> "),t()(),i(1378,"td",26)(1379,"p"),e(1380,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(1381,"tr",19)(1382,"td",20),e(1383," filterParams"),t(),i(1384,"td",23)(1385,"code",56),e(1386," any "),t()(),i(1387,"td",26)(1388,"p"),e(1389,"Valor informado atrav\xE9s da propriedade "),i(1390,"strong"),e(1391,"t-filter-params"),t(),e(1392,"."),t()()()(),o(1393,"br"),t(),i(1394,"po-accordion-item",58)(1395,"h4",9)(1396,"code"),e(1397,"ThfLookupFilteredItemsParams"),t()(),i(1398,"div",10)(1399,"p"),e(1400,"Interface do objeto enviado como par\xE2metro do m\xE9todo privado "),i(1401,"strong"),e(1402,"getFilteredItems"),t(),e(1403,"."),t()(),i(1404,"h4",15),e(1405,"Propriedades"),t(),i(1406,"table",16)(1407,"tr",17)(1408,"th",18),e(1409,"Nome"),t(),i(1410,"th",18),e(1411,"Tipo"),t(),i(1412,"th",18),e(1413,"Descri\xE7\xE3o"),t()(),i(1414,"tr",19)(1415,"td",20)(1416,"div",21)(1417,"span",22),e(1418," filter"),o(1419,"br"),t()()(),i(1420,"td",23)(1421,"code",59),e(1422,`{ [key: string]: any;
}`),t()(),i(1423,"td",26)(1424,"em")(1425,"strong"),e(1426,"(opcional)"),t()(),i(1427,"p"),e(1428,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(1429,"tr",19)(1430,"td",20)(1431,"div",21)(1432,"span",22),e(1433," filterParams"),o(1434,"br"),t()()(),i(1435,"td",23)(1436,"code",38),e(1437,"any"),t()(),i(1438,"td",26)(1439,"em")(1440,"strong"),e(1441,"(opcional)"),t()(),i(1442,"p"),e(1443,"Valor informado atrav\xE9s da propriedade "),i(1444,"code"),e(1445,"t-filter-params"),t(),e(1446,"."),t()()(),i(1447,"tr",19)(1448,"td",20)(1449,"div",21)(1450,"span",22),e(1451," order"),o(1452,"br"),t()()(),i(1453,"td",23)(1454,"code",27),e(1455,"string"),t()(),i(1456,"td",26)(1457,"em")(1458,"strong"),e(1459,"(opcional)"),t()(),i(1460,"p"),e(1461,"Coluna que est\xE1 sendo ordenada na grid."),t(),i(1462,"ul")(1463,"li"),e(1464,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(1465,"code"),e(1466,"-<colunaOrdenada>"),t(),e(1467,", por exemplo "),i(1468,"code"),e(1469,"-name"),t(),e(1470,"."),t(),i(1471,"li"),e(1472,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(1473,"code"),e(1474,"<colunaOrdenada>"),t(),e(1475,", por exemplo "),i(1476,"code"),e(1477,"name"),t(),e(1478,"."),t()()()(),i(1479,"tr",19)(1480,"td",20)(1481,"div",21)(1482,"span",22),e(1483," page"),o(1484,"br"),t()()(),i(1485,"td",23)(1486,"code",60),e(1487,"number"),t()(),i(1488,"td",26)(1489,"em")(1490,"strong"),e(1491,"(opcional)"),t()(),i(1492,"p"),e(1493,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(1494,"tr",19)(1495,"td",20)(1496,"div",21)(1497,"span",22),e(1498," pageSize"),o(1499,"br"),t()()(),i(1500,"td",23)(1501,"code",60),e(1502,"number"),t()(),i(1503,"td",26)(1504,"em")(1505,"strong"),e(1506,"(opcional)"),t()(),i(1507,"p"),e(1508,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()()(),i(1509,"po-accordion-item",61)(1510,"h4",9)(1511,"code"),e(1512,"ThfLookupGridProperties"),t()(),i(1513,"div",10)(1514,"p"),e(1515,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup."),t()(),i(1516,"h4",15),e(1517,"Propriedades"),t(),i(1518,"table",16)(1519,"tr",17)(1520,"th",18),e(1521,"Nome"),t(),i(1522,"th",18),e(1523,"Tipo"),t(),i(1524,"th",18),e(1525,"Descri\xE7\xE3o"),t()(),i(1526,"tr",19)(1527,"td",20)(1528,"div",21)(1529,"span",22),e(1530," autoSize"),o(1531,"br"),t()()(),i(1532,"td",23)(1533,"code",28),e(1534,"boolean"),t()(),i(1535,"td",26)(1536,"em")(1537,"strong"),e(1538,"(opcional)"),t()(),i(1539,"p"),e(1540,`Ajusta automaticamente a largura das colunas vis\xEDveis no grid. O ajuste autom\xE1tico \xE9 realizado durante a
inicializa\xE7\xE3o. Requer que a propriedade `),i(1541,"strong"),e(1542,"resizable"),t(),e(1543," esteja habilitada."),t(),i(1544,"blockquote")(1545,"p"),e(1546,`Apesar de atribuir largura \xE0s colunas do grid, \xE9 importante ressaltar que o componente recalcula
as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis no grid, podendo alterar as
dimens\xF5es passadas proporcionalmente.`),t()()()(),i(1547,"tr",19)(1548,"td",20)(1549,"div",21)(1550,"span",22),e(1551," autoSizeOnScroll"),o(1552,"br"),t()()(),i(1553,"td",23)(1554,"code",28),e(1555,"boolean"),t()(),i(1556,"td",26)(1557,"em")(1558,"strong"),e(1559,"(opcional)"),t()(),i(1560,"p"),e(1561,"Ativa o redimensionamento autom\xE1tico das colunas durante a rolagem virtual."),t(),i(1562,"p"),e(1563,`Quando habilitado, a grid recalcula automaticamente as larguras das colunas
conforme novos dados s\xE3o carregados durante a rolagem, garantindo que o
conte\xFAdo seja exibido corretamente sem truncamento indesejado.`),t(),i(1564,"p"),e(1565,`O redimensionamento ocorre a cada mudan\xE7a de p\xE1gina virtual, controlada pela
propriedade `),i(1566,"code"),e(1567,"t-page-size-virtual"),t(),e(1568," (valor padr\xE3o: 60 itens por p\xE1gina)."),t(),i(1569,"blockquote")(1570,"p")(1571,"strong"),e(1572,"Pr\xE9-requisitos"),t(),e(1573,": Requer que as propriedades "),i(1574,"code"),e(1575,"autoSize"),t(),e(1576,", "),i(1577,"code"),e(1578,"resizable"),t(),e(1579,`
e `),i(1580,"code"),e(1581,"virtualScroll"),t(),e(1582," estejam habilitadas."),t()(),i(1583,"blockquote")(1584,"p")(1585,"strong"),e(1586,"Incompatibilidade"),t(),e(1587,": N\xE3o funciona com "),i(1588,"code"),e(1589,"t-grid-row-actions"),t(),e(1590," habilitado;"),t()(),i(1591,"p")(1592,"strong"),e(1593,"Exemplo de uso:"),t()(),i(1594,"pre")(1595,"code",32),e(1596,`<thf-grid
  ...
  [t-auto-size]="true"
  [t-auto-size-on-scroll]="true"
  [t-resizable]="true"
  [t-virtual-scroll]="true"
/>`),t()()()(),i(1597,"tr",19)(1598,"td",20)(1599,"div",21)(1600,"span",22),e(1601," draggable"),o(1602,"br"),t()()(),i(1603,"td",23)(1604,"code",28),e(1605,"boolean"),t()(),i(1606,"td",26)(1607,"em")(1608,"strong"),e(1609,"(opcional)"),t()(),i(1610,"p"),e(1611,"Habilita o Drag and Drop nas colunas."),t()()(),i(1612,"tr",19)(1613,"td",20)(1614,"div",21)(1615,"span",22),e(1616," group"),o(1617,"br"),t()()(),i(1618,"td",23)(1619,"code",36),e(1620,"Array<string>"),t()(),i(1621,"td",26)(1622,"em")(1623,"strong"),e(1624,"(opcional)"),t()(),i(1625,"p"),e(1626,"Lista das colunas que devem iniciar agrupadas. Requer que a propriedade "),i(1627,"strong"),e(1628,"groupable"),t(),e(1629," esteja habilitada."),t()()(),i(1630,"tr",19)(1631,"td",20)(1632,"div",21)(1633,"span",22),e(1634," groupable"),o(1635,"br"),t()()(),i(1636,"td",23)(1637,"code",28),e(1638,"boolean "),t(),i(1639,"code",62),e(1640," GroupableSettings"),t()(),i(1641,"td",26)(1642,"em")(1643,"strong"),e(1644,"(opcional)"),t()(),i(1645,"p"),e(1646,"Habilita a ordena\xE7\xE3o por grupo atrav\xE9s da coluna."),t()()(),i(1647,"tr",19)(1648,"td",20)(1649,"div",21)(1650,"span",22),e(1651," hideSelectAll"),o(1652,"br"),t()()(),i(1653,"td",23)(1654,"code",28),e(1655,"boolean"),t()(),i(1656,"td",26)(1657,"em")(1658,"strong"),e(1659,"(opcional)"),t()(),i(1660,"p"),e(1661,"Permite ocultar o checkbox de selecionar todos os itens."),t()()(),i(1662,"tr",19)(1663,"td",20)(1664,"div",21)(1665,"span",22),e(1666," resizable"),o(1667,"br"),t()()(),i(1668,"td",23)(1669,"code",28),e(1670,"boolean"),t()(),i(1671,"td",26)(1672,"em")(1673,"strong"),e(1674,"(opcional)"),t()(),i(1675,"p"),e(1676,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do grid,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(1677,"tr",19)(1678,"td",20)(1679,"div",21)(1680,"span",22),e(1681," selectableEntireLine"),o(1682,"br"),t()()(),i(1683,"td",23)(1684,"code",28),e(1685,"boolean"),t()(),i(1686,"td",26)(1687,"em")(1688,"strong"),e(1689,"(opcional)"),t()(),i(1690,"p"),e(1691,"Permite selecionar o item ao clicar na linha."),t()()(),i(1692,"tr",19)(1693,"td",20)(1694,"div",21)(1695,"span",22),e(1696," showDraggableIcon"),o(1697,"br"),t()()(),i(1698,"td",23)(1699,"code",28),e(1700,"boolean"),t()(),i(1701,"td",26)(1702,"em")(1703,"strong"),e(1704,"(opcional)"),t()(),i(1705,"p"),e(1706,"Exibe o \xEDcone de draggable nas respectivas colunas."),t()()(),i(1707,"tr",19)(1708,"td",20)(1709,"div",21)(1710,"span",22),e(1711," showMoreDisabled"),o(1712,"br"),t()()(),i(1713,"td",23)(1714,"code",28),e(1715,"boolean"),t()(),i(1716,"td",26)(1717,"em")(1718,"strong"),e(1719,"(opcional)"),t()(),i(1720,"p"),e(1721,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(1722,"tr",19)(1723,"td",20)(1724,"div",21)(1725,"span",22),e(1726," showMoreVisible"),o(1727,"br"),t()()(),i(1728,"td",23)(1729,"code",28),e(1730,"boolean"),t()(),i(1731,"td",26)(1732,"em")(1733,"strong"),e(1734,"(opcional)"),t()(),i(1735,"p"),e(1736,"Controla a exibi\xE7\xE3o do bot\xE3o 'Carregar mais resultados'. Requer que a propriedade "),i(1737,"strong"),e(1738,"pageable"),t(),e(1739," esteja habilitada."),t(),i(1740,"blockquote")(1741,"p"),e(1742,"Caso seja utilizado em conjunto com "),i(1743,"strong"),e(1744,"showMoreDisabled"),t(),e(1745,", a propriedade "),i(1746,"strong"),e(1747,"showMoreVisible"),t(),e(1748," ter\xE1 prioridade."),t()()()(),i(1749,"tr",19)(1750,"td",20)(1751,"div",21)(1752,"span",22),e(1753," sort"),o(1754,"br"),t()()(),i(1755,"td",23)(1756,"code",63),e(1757,"Array<{ field: string; dir: 'asc' "),t(),i(1758,"code",64),e(1759,` 'desc';
}>`),t()(),i(1760,"td",26)(1761,"em")(1762,"strong"),e(1763,"(opcional)"),t()(),i(1764,"p"),e(1765,"Define a ordena\xE7\xE3o (sort) crescente (asc) ou decrescente (desc) por coluna."),t(),i(1766,"pre")(1767,"code",33),e(1768,"sort: Array<ThfGridColumnSort> = [{ field: 'name', dir: 'desc'}];"),t()()()(),i(1769,"tr",19)(1770,"td",20)(1771,"div",21)(1772,"span",22),e(1773," sortable"),o(1774,"br"),t()()(),i(1775,"td",23)(1776,"code",28),e(1777,"boolean"),t()(),i(1778,"td",26)(1779,"em")(1780,"strong"),e(1781,"(opcional)"),t()(),i(1782,"p"),e(1783,"Habilita a ordena\xE7\xE3o (sort) crescente ou decrescente em todas as colunas do grid."),t()()(),i(1784,"tr",19)(1785,"td",20)(1786,"div",21)(1787,"span",22),e(1788," spacing"),o(1789,"br"),t()()(),i(1790,"td",23)(1791,"code",65),e(1792,"'small' "),t(),i(1793,"code",66),e(1794," 'medium' "),t(),i(1795,"code",67),e(1796," 'large'"),t()(),i(1797,"td",26)(1798,"em")(1799,"strong"),e(1800,"(opcional)"),t()(),i(1801,"p"),e(1802,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do grid. Os valores
permitidos s\xE3o definidos pelo enum `),i(1803,"strong"),e(1804,"ThfColumnSpacing"),t(),e(1805,"."),t()()(),i(1806,"tr",19)(1807,"td",20)(1808,"div",21)(1809,"span",22),e(1810," striped"),o(1811,"br"),t()()(),i(1812,"td",23)(1813,"code",28),e(1814,"boolean"),t()(),i(1815,"td",26)(1816,"em")(1817,"strong"),e(1818,"(opcional)"),t()(),i(1819,"p"),e(1820,"Define o estilo listrado no grid (striped)."),t()()(),i(1821,"tr",19)(1822,"td",20)(1823,"div",21)(1824,"span",22),e(1825," virtualScroll"),o(1826,"br"),t()()(),i(1827,"td",23)(1828,"code",28),e(1829,"boolean"),t()(),i(1830,"td",26)(1831,"em")(1832,"strong"),e(1833,"(opcional)"),t()(),i(1834,"p"),e(1835,"Define o uso do virtual scroll no grid para melhorar a performance com grandes volumes de dados."),t()()()()(),i(1836,"po-accordion-item",68)(1837,"h4",9)(1838,"code"),e(1839,"ThfLookupKeysLabel"),t()(),i(1840,"div",10)(1841,"p"),e(1842,"Interface para definir as propriedades vis\xEDveis do item selecionado ("),i(1843,"strong"),e(1844,"t-keys-label"),t(),e(1845,")."),t()(),i(1846,"h4",15),e(1847,"Propriedades"),t(),i(1848,"table",16)(1849,"tr",17)(1850,"th",18),e(1851,"Nome"),t(),i(1852,"th",18),e(1853,"Tipo"),t(),i(1854,"th",18),e(1855,"Descri\xE7\xE3o"),t()(),i(1856,"tr",19)(1857,"td",20)(1858,"div",21)(1859,"span",22),e(1860," label"),o(1861,"br"),t()()(),i(1862,"td",23)(1863,"code",27),e(1864,"string"),t()(),i(1865,"td",26)(1866,"p"),e(1867,"Texto exibido"),t()()(),i(1868,"tr",19)(1869,"td",20)(1870,"div",21)(1871,"span",22),e(1872," value"),o(1873,"br"),t()()(),i(1874,"td",23)(1875,"code",27),e(1876,"string"),t()(),i(1877,"td",26)(1878,"p"),e(1879,"Coluna"),t()()()()(),i(1880,"po-accordion-item",69)(1881,"h4",9)(1882,"code"),e(1883,"ThfLookupLiterals"),t()(),i(1884,"div",10)(1885,"p"),e(1886,"Interface para customizar literais ("),i(1887,"strong"),e(1888,"t-literals"),t(),e(1889,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(1890,"h4",15),e(1891,"Propriedades"),t(),i(1892,"table",16)(1893,"tr",17)(1894,"th",18),e(1895,"Nome"),t(),i(1896,"th",18),e(1897,"Tipo"),t(),i(1898,"th",18),e(1899,"Descri\xE7\xE3o"),t()(),i(1900,"tr",19)(1901,"td",20)(1902,"div",21)(1903,"span",22),e(1904," confirmBodyDelete"),o(1905,"br"),t()()(),i(1906,"td",23)(1907,"code",27),e(1908,"string"),t()(),i(1909,"td",26)(1910,"em")(1911,"strong"),e(1912,"(opcional)"),t()(),i(1913,"p"),e(1914,"Texto do corpo do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(1915,"tr",19)(1916,"td",20)(1917,"div",21)(1918,"span",22),e(1919," confirmCancelDelete"),o(1920,"br"),t()()(),i(1921,"td",23)(1922,"code",27),e(1923,"string"),t()(),i(1924,"td",26)(1925,"em")(1926,"strong"),e(1927,"(opcional)"),t()(),i(1928,"p"),e(1929,"Texto do bot\xE3o de cancelar do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(1930,"tr",19)(1931,"td",20)(1932,"div",21)(1933,"span",22),e(1934," confirmRemoveDelete"),o(1935,"br"),t()()(),i(1936,"td",23)(1937,"code",27),e(1938,"string"),t()(),i(1939,"td",26)(1940,"em")(1941,"strong"),e(1942,"(opcional)"),t()(),i(1943,"p"),e(1944,"Texto do bot\xE3o de remover do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(1945,"tr",19)(1946,"td",20)(1947,"div",21)(1948,"span",22),e(1949," confirmTitleDelete"),o(1950,"br"),t()()(),i(1951,"td",23)(1952,"code",27),e(1953,"string"),t()(),i(1954,"td",26)(1955,"em")(1956,"strong"),e(1957,"(opcional)"),t()(),i(1958,"p"),e(1959,"T\xEDtulo do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(1960,"tr",19)(1961,"td",20)(1962,"div",21)(1963,"span",22),e(1964," lastSearch"),o(1965,"br"),t()()(),i(1966,"td",23)(1967,"code",27),e(1968,"string"),t()(),i(1969,"td",26)(1970,"em")(1971,"strong"),e(1972,"(opcional)"),t()(),i(1973,"p"),e(1974,"Texto exibido no listbox quando estiver exibindo as ultimas pesquisas."),t()()(),i(1975,"tr",19)(1976,"td",20)(1977,"div",21)(1978,"span",22),e(1979," listNotFound"),o(1980,"br"),t()()(),i(1981,"td",23)(1982,"code",27),e(1983,"string"),t()(),i(1984,"td",26)(1985,"em")(1986,"strong"),e(1987,"(opcional)"),t()(),i(1988,"p"),e(1989,"Texto exibido no listbox quando nenhum resultado for encontrado."),t()()(),i(1990,"tr",19)(1991,"td",20)(1992,"div",21)(1993,"span",22),e(1994," modalPlaceholder"),o(1995,"br"),t()()(),i(1996,"td",23)(1997,"code",27),e(1998,"string"),t()(),i(1999,"td",26)(2e3,"em")(2001,"strong"),e(2002,"(opcional)"),t()(),i(2003,"p"),e(2004,"Texto exibido no placeholder do input da modal."),t()()(),i(2005,"tr",19)(2006,"td",20)(2007,"div",21)(2008,"span",22),e(2009," modalPrimaryActionLabel"),o(2010,"br"),t()()(),i(2011,"td",23)(2012,"code",27),e(2013,"string"),t()(),i(2014,"td",26)(2015,"em")(2016,"strong"),e(2017,"(opcional)"),t()(),i(2018,"p"),e(2019,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),t()()(),i(2020,"tr",19)(2021,"td",20)(2022,"div",21)(2023,"span",22),e(2024," modalSecondaryActionLabel"),o(2025,"br"),t()()(),i(2026,"td",23)(2027,"code",27),e(2028,"string"),t()(),i(2029,"td",26)(2030,"em")(2031,"strong"),e(2032,"(opcional)"),t()(),i(2033,"p"),e(2034,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),t()()(),i(2035,"tr",19)(2036,"td",20)(2037,"div",21)(2038,"span",22),e(2039," modalTableLoadMoreData"),o(2040,"br"),t()()(),i(2041,"td",23)(2042,"code",27),e(2043,"string"),t()(),i(2044,"td",26)(2045,"em")(2046,"strong"),e(2047,"(opcional)"),t()(),i(2048,"p"),e(2049,"Label do "),i(2050,"code"),e(2051,"button"),t(),e(2052," que deve carregar mais resultados no grid, ou seja, exibir mais itens."),t()()(),i(2053,"tr",19)(2054,"td",20)(2055,"div",21)(2056,"span",22),e(2057," modalTableLoadingData"),o(2058,"br"),t()()(),i(2059,"td",23)(2060,"code",27),e(2061,"string"),t()(),i(2062,"td",26)(2063,"em")(2064,"strong"),e(2065,"(opcional)"),t()(),i(2066,"p"),e(2067,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na grid."),t()()(),i(2068,"tr",19)(2069,"td",20)(2070,"div",21)(2071,"span",22),e(2072," modalTableNoColumns"),o(2073,"br"),t()()(),i(2074,"td",23)(2075,"code",27),e(2076,"string"),t()(),i(2077,"td",26)(2078,"em")(2079,"strong"),e(2080,"(opcional)"),t()(),i(2081,"p"),e(2082,"Texto exibido quando n\xE3o existem colunas definidas no grid."),t()()(),i(2083,"tr",19)(2084,"td",20)(2085,"div",21)(2086,"span",22),e(2087," modalTableNoData"),o(2088,"br"),t()()(),i(2089,"td",23)(2090,"code",27),e(2091,"string"),t()(),i(2092,"td",26)(2093,"em")(2094,"strong"),e(2095,"(opcional)"),t()(),i(2096,"p"),e(2097,"Texto exibido quando n\xE3o existem itens para serem exibidos no grid."),t()()(),i(2098,"tr",19)(2099,"td",20)(2100,"div",21)(2101,"span",22),e(2102," modalTitle"),o(2103,"br"),t()()(),i(2104,"td",23)(2105,"code",27),e(2106,"string"),t()(),i(2107,"td",26)(2108,"em")(2109,"strong"),e(2110,"(opcional)"),t()(),i(2111,"p"),e(2112,"Texto exibido no t\xEDtulo da modal."),t()()(),i(2113,"tr",19)(2114,"td",20)(2115,"div",21)(2116,"span",22),e(2117," multipleItems"),o(2118,"br"),t()()(),i(2119,"td",23)(2120,"code",27),e(2121,"string"),t()(),i(2122,"td",26)(2123,"em")(2124,"strong"),e(2125,"(opcional)"),t()(),i(2126,"p"),e(2127,"Frase exibida no accordion quando possui mais de um item selecionado."),t()()(),i(2128,"tr",19)(2129,"td",20)(2130,"div",21)(2131,"span",22),e(2132," oneItem"),o(2133,"br"),t()()(),i(2134,"td",23)(2135,"code",27),e(2136,"string"),t()(),i(2137,"td",26)(2138,"em")(2139,"strong"),e(2140,"(opcional)"),t()(),i(2141,"p"),e(2142,"Frase exibida no accordion quando possui apenas um item selecionado."),t()()(),i(2143,"tr",19)(2144,"td",20)(2145,"div",21)(2146,"span",22),e(2147," or"),o(2148,"br"),t()()(),i(2149,"td",23)(2150,"code",27),e(2151,"string"),t()(),i(2152,"td",26)(2153,"em")(2154,"strong"),e(2155,"(opcional)"),t()(),i(2156,"p"),e(2157,"Palavra 'ou' que \xE9 exibida dentro do listbox."),t()()(),i(2158,"tr",19)(2159,"td",20)(2160,"div",21)(2161,"span",22),e(2162," searchAdvanced"),o(2163,"br"),t()()(),i(2164,"td",23)(2165,"code",27),e(2166,"string"),t()(),i(2167,"td",26)(2168,"em")(2169,"strong"),e(2170,"(opcional)"),t()(),i(2171,"p"),e(2172,"Texto exibido no listbox para fazer busca avan\xE7ada."),t()()(),i(2173,"tr",19)(2174,"td",20)(2175,"div",21)(2176,"span",22),e(2177," searchBy"),o(2178,"br"),t()()(),i(2179,"td",23)(2180,"code",27),e(2181,"string"),t()(),i(2182,"td",26)(2183,"em")(2184,"strong"),e(2185,"(opcional)"),t()(),i(2186,"p"),e(2187,"Texto exibido para indicar os campos filtrados."),t()()()()(),i(2188,"po-accordion-item",70)(2189,"h4",9)(2190,"code"),e(2191,"ThfLookupResponseApi"),t()(),i(2192,"div",10)(2193,"p"),e(2194,"Interface que representa a estrutura de uma resposta de sucesso HTTP."),t(),i(2195,"blockquote")(2196,"p"),e(2197,"Utilizada apenas quando a resposta incluir uma cole\xE7\xE3o de itens. "),t()()(),i(2198,"h4",15),e(2199,"Propriedades"),t(),i(2200,"table",16)(2201,"tr",17)(2202,"th",18),e(2203,"Nome"),t(),i(2204,"th",18),e(2205,"Tipo"),t(),i(2206,"th",18),e(2207,"Descri\xE7\xE3o"),t()(),i(2208,"tr",19)(2209,"td",20)(2210,"div",21)(2211,"span",22),e(2212," hasNext"),o(2213,"br"),t()()(),i(2214,"td",23)(2215,"code",28),e(2216,"boolean"),t()(),i(2217,"td",26)(2218,"p"),e(2219,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(2220,"tr",19)(2221,"td",20)(2222,"div",21)(2223,"span",22),e(2224," items"),o(2225,"br"),t()()(),i(2226,"td",23)(2227,"code",57),e(2228,"Array<any>"),t()(),i(2229,"td",26)(2230,"p"),e(2231,"Lista de itens retornados."),t()()()()()()(),y(2232,4),t(),i(2233,"po-tab",71)(2234,"po-container",5),y(2235,5),i(2236,"h3",72),e(2237,"Tokens customiz\xE1veis"),t(),i(2238,"p"),e(2239,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(2240,"blockquote")(2241,"p"),e(2242,"Para maiores informa\xE7\xF5es, acesse o guia "),i(2243,"a",73),e(2244,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(2245,"."),t()(),i(2246,"table")(2247,"thead")(2248,"tr")(2249,"th"),e(2250,"Propriedade"),t(),i(2251,"th"),e(2252,"Descri\xE7\xE3o"),t(),i(2253,"th"),e(2254,"Valor Padr\xE3o"),t()()(),i(2255,"tbody")(2256,"tr")(2257,"td")(2258,"strong"),e(2259,"Default Values"),t()(),o(2260,"td")(2261,"td"),t(),i(2262,"tr")(2263,"td")(2264,"code"),e(2265,"--font-family"),t()(),i(2266,"td"),e(2267,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(2268,"td")(2269,"code"),e(2270,"var(--font-family-theme)"),t()()(),i(2271,"tr")(2272,"td")(2273,"code"),e(2274,"--font-size"),t()(),i(2275,"td"),e(2276,"Tamanho da fonte"),t(),i(2277,"td")(2278,"code"),e(2279,"var(--font-size)"),t()()(),i(2280,"tr")(2281,"td")(2282,"code"),e(2283,"--text-color-placeholder"),t()(),i(2284,"td"),e(2285,"Cor do texto no placeholder"),t(),i(2286,"td")(2287,"code"),e(2288,"var(--color-neutral-light-30)"),t()()(),i(2289,"tr")(2290,"td")(2291,"code"),e(2292,"--color"),t()(),i(2293,"td"),e(2294,"Cor principal do campo"),t(),i(2295,"td")(2296,"code"),e(2297,"var(--color-neutral-dark-70)"),t()()(),i(2298,"tr")(2299,"td")(2300,"code"),e(2301,"--background"),t()(),i(2302,"td"),e(2303,"Cor de background"),t(),i(2304,"td")(2305,"code"),e(2306,"var(--color-neutral-light-00)"),t()()(),i(2307,"tr")(2308,"td")(2309,"code"),e(2310,"--text-color"),t()(),i(2311,"td"),e(2312,"Cor do texto"),t(),i(2313,"td")(2314,"code"),e(2315,"var(--color-neutral-mid-60)"),t()()(),i(2316,"tr")(2317,"td")(2318,"strong"),e(2319,"Hover"),t()(),o(2320,"td")(2321,"td"),t(),i(2322,"tr")(2323,"td")(2324,"code"),e(2325,"--color-hover"),t()(),i(2326,"td"),e(2327,"Cor principal do campo no estado hover"),t(),i(2328,"td")(2329,"code"),e(2330,"var(--color-brand-01-dark)"),t()()(),i(2331,"tr")(2332,"td")(2333,"code"),e(2334,"--background-hover"),t()(),i(2335,"td"),e(2336,"Cor de background no estado hover"),t(),i(2337,"td")(2338,"code"),e(2339,"var(--color-brand-01-lightest)"),t()()(),i(2340,"tr")(2341,"td")(2342,"strong"),e(2343,"Focused"),t()(),o(2344,"td")(2345,"td"),t(),i(2346,"tr")(2347,"td")(2348,"code"),e(2349,"--color-focused"),t()(),i(2350,"td"),e(2351,"Cor principal do campo no estado de focus"),t(),i(2352,"td")(2353,"code"),e(2354,"var(--color-action-default)"),t()()(),i(2355,"tr")(2356,"td")(2357,"code"),e(2358,"--outline-color-focused"),t()(),i(2359,"td"),e(2360,"Cor do outline no estado de focus"),t(),i(2361,"td")(2362,"code"),e(2363,"var(--color-action-focus)"),t()()(),i(2364,"tr")(2365,"td")(2366,"strong"),e(2367,"Disabled"),t()(),o(2368,"td")(2369,"td"),t(),i(2370,"tr")(2371,"td")(2372,"code"),e(2373,"--color-disabled"),t()(),i(2374,"td"),e(2375,"Cor principal do campo no estado disabled"),t(),i(2376,"td")(2377,"code"),e(2378,"var(--color-neutral-light-30)"),t()()(),i(2379,"tr")(2380,"td")(2381,"code"),e(2382,"--background-disabled"),t()(),i(2383,"td"),e(2384,"Cor de background no estado disabled"),t(),i(2385,"td")(2386,"code"),e(2387,"var(--color-neutral-light-05)"),t()()(),i(2388,"tr")(2389,"td")(2390,"code"),e(2391,"--text-color-disabled"),t()(),i(2392,"td"),e(2393,"Cor do texto no estado disabled"),t(),i(2394,"td")(2395,"code"),e(2396,"var(--color-neutral-dark-70)"),t()()()()()(),y(2397,6),t(),i(2398,"po-tab",74),y(2399,7),t()()())},dependencies:[M,U,b,he,te,z],encapsulation:2})}}return d})();var Bt=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","labs",""]]],Ht=["[overview]","[especificacao-before]","[especificacao-after]","[labs]"],pt=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let A=E.querySelector(".po-tab-button-label");A&&A?.textContent?.trim().toLowerCase()===a&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(j($))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-splitter-pane"]],viewQuery:function(r,n){if(r&1&&(T(z,5),T(M,5)),r&2){let l;w(l=D())&&(n.tabs=l.first),w(l=D())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:Ht,decls:140,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"language-html"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean,","any"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(Z(Bt),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),y(4),t(),i(5,"po-tab",4),y(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfSplitterModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfSplitterPaneComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"O componente "),i(19,"code"),e(20,"thf-splitter-pane"),t(),e(21," representa uma das se\xE7\xF5es que comp\xF5em o "),i(22,"code"),e(23,"thf-splitter"),t(),e(24,"."),t(),i(25,"p"),e(26,"Devem ser utilizados "),i(27,"strong"),e(28,"exatamente dois panes"),t(),e(29," por splitter; panes adicionais ser\xE3o ignorados."),t(),i(30,"p"),e(31,"Cada "),i(32,"code"),e(33,"pane"),t(),e(34," se ajusta dinamicamente conforme o redimensionamento."),t(),i(35,"pre")(36,"code",11),e(37,`<thf-splitter>
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
evento n\xE3o ser\xE1 disparado.`),t(),i(134,"pre")(135,"code",11),e(136,'<thf-splitter-pane (t-size-change)="onSizeChange($event)">'),t()()()()()()()(),y(137,2),t(),i(138,"po-tab",32),y(139,3),t()()())},dependencies:[M,U,b,te,z],encapsulation:2})}}return d})();var Ut=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","enums-before",""]],[["","enums-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],Kt=["[overview]","[especificacao-before]","[especificacao-after]","[enums-before]","[enums-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],ct=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let A=E.querySelector(".po-tab-button-label");A&&A?.textContent?.trim().toLowerCase()===a&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(j($))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-splitter"]],viewQuery:function(r,n){if(r&1&&(T(z,5),T(M,5)),r&2){let l;w(l=D())&&(n.tabs=l.first),w(l=D())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:Kt,decls:326,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],["id","boas-pr\xE1ticas"],[1,"language-html"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean,","any"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","ThfSplitterOrientation,","string"],[1,"language-typescript"],["p-label","Enums"],["p-label","ThfSplitterOrientation"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(Z(Ut),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),y(4),t(),i(5,"po-tab",4),y(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfSplitterModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfSplitterComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"O componente "),i(19,"code"),e(20,"thf-splitter"),t(),e(21,` \xE9 respons\xE1vel por dividir visualmente a tela em duas se\xE7\xF5es, com suporte a
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
Valores aceitos: `),i(141,"code"),e(142,"'horizontal'"),t(),e(143," ou "),i(144,"code"),e(145,"'vertical'"),t(),e(146,"."),t(),i(147,"pre")(148,"code",12),e(149,'<thf-splitter t-orientation="vertical"> ...'),t()(),i(150,"p"),e(151,"ou"),t(),i(152,"pre")(153,"code",33),e(154,"orientation = ThfSplitterOrientation.Vertical;"),t()(),i(155,"pre")(156,"code",12),e(157,'<thf-splitter [t-orientation]="orientation"> ...'),t()()()()()()()(),y(158,2),t(),i(159,"po-tab",34),y(160,3),i(161,"po-container",5)(162,"po-accordion",6)(163,"po-accordion-item",35)(164,"h4",9)(165,"code"),e(166,"ThfSplitterOrientation"),t()(),i(167,"h4",17),e(168,"Propriedades"),t(),i(169,"table",18)(170,"tr",19)(171,"th",20),e(172,"Nome"),t(),i(173,"th",20),e(174,"Descri\xE7\xE3o"),t()(),i(175,"tr",21)(176,"td",22)(177,"div",23)(178,"span",24),e(179," Horizontal"),o(180,"br"),t()()(),i(181,"td",28)(182,"p"),e(183,"Divide o espa\xE7o na "),i(184,"strong"),e(185,"horizontal"),t(),e(186," (esquerda/direita)"),t()()(),i(187,"tr",21)(188,"td",22)(189,"div",23)(190,"span",24),e(191," Vertical"),o(192,"br"),t()()(),i(193,"td",28)(194,"p"),e(195,"Divide o espa\xE7o na "),i(196,"strong"),e(197,"vertical"),t(),e(198," (cima/baixo)"),t()()()()()()(),y(199,4),t(),i(200,"po-tab",36)(201,"po-container",5),y(202,5),i(203,"h3",37),e(204,"Tokens customiz\xE1veis"),t(),i(205,"p"),e(206,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(207,"blockquote")(208,"p"),e(209,"Para maiores informa\xE7\xF5es, acesse o guia "),i(210,"a",38),e(211,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(212,"."),t()(),i(213,"table")(214,"thead")(215,"tr")(216,"th"),e(217,"Propriedade"),t(),i(218,"th"),e(219,"Descri\xE7\xE3o"),t(),i(220,"th"),e(221,"Valor Padr\xE3o"),t()()(),i(222,"tbody")(223,"tr")(224,"td")(225,"strong"),e(226,"Splitter Track"),t()(),o(227,"td")(228,"td"),t(),i(229,"tr")(230,"td")(231,"code"),e(232,"--background-track"),t()(),i(233,"td"),e(234,"Cor de background do Track apresentado no Splitter"),t(),i(235,"td")(236,"code"),e(237,"var(--color-neutral-light-10)"),t()()(),i(238,"tr"),o(239,"td")(240,"td")(241,"td"),t(),i(242,"tr")(243,"td")(244,"strong"),e(245,"Splitter Trigger"),t()(),o(246,"td")(247,"td"),t(),i(248,"tr")(249,"td")(250,"code"),e(251,"--box-shadow"),t()(),i(252,"td"),e(253,"Sombra aplicado no bot\xE3o do trigger"),t(),i(254,"td")(255,"code"),e(256,"var(--shadow-sm)"),t()()(),i(257,"tr")(258,"td")(259,"code"),e(260,"--background-color"),t()(),i(261,"td"),e(262,"Cor de background"),t(),i(263,"td")(264,"code"),e(265,"var(--color-neutral-light-00)"),t()()(),i(266,"tr")(267,"td")(268,"code"),e(269,"--color"),t()(),i(270,"td"),e(271,"Cor do \xEDcone"),t(),i(272,"td")(273,"code"),e(274,"var(--color-action-default)"),t()()(),i(275,"tr")(276,"td")(277,"strong"),e(278,"Hover"),t()(),o(279,"td")(280,"td"),t(),i(281,"tr")(282,"td")(283,"code"),e(284,"--background-color-hover"),t()(),i(285,"td"),e(286,"Cor de background no estado hover"),t(),i(287,"td")(288,"code"),e(289,"var(--color-brand-01-lighter)"),t()()(),i(290,"tr")(291,"td")(292,"code"),e(293,"--color-hover"),t()(),i(294,"td"),e(295,"Cor do \xEDcone no estado hover"),t(),i(296,"td")(297,"code"),e(298,"var(--color-brand-01-darkest)"),t()()(),i(299,"tr")(300,"td")(301,"strong"),e(302,"Pressed"),t()(),o(303,"td")(304,"td"),t(),i(305,"tr")(306,"td")(307,"code"),e(308,"--background-color-pressed"),t()(),i(309,"td"),e(310,"Cor de background quando pressionada"),t(),i(311,"td")(312,"code"),e(313,"var(--color-brand-01-ligh)"),t()()(),i(314,"tr")(315,"td")(316,"code"),e(317,"--color-pressed"),t()(),i(318,"td"),e(319,"Cor de \xEDcone quando pressionado"),t(),i(320,"td")(321,"code"),e(322,"var(--color-brand-01-darkest)"),t()()()()()(),y(323,6),t(),i(324,"po-tab",39),y(325,7),t()()())},dependencies:[M,U,b,te,z],encapsulation:2})}}return d})();var ut=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275mod=re({type:d})}static{this.\u0275inj=ae({imports:[xe,Ce]})}}return d})();var we=[{id:11234,initials:"BR",country:"Brazil",value:1e3,date:"2018-10-09",returnDate:"2018-11-01",class:"Economic",onBoardService:!1,destination:"Rio de Janeiro",airline:"Azul",status:"available",region:"Latin America"},{id:22467,initials:"FR",country:"France",value:5e3,date:"2019-12-13",returnDate:"2019-12-31",class:"Economic",onBoardService:!1,destination:"Paris",airline:"British Airways",status:"closed",region:"Alps"},{id:40670,initials:"SN",country:"Senegal",value:3200,date:"2017-11-22",returnDate:"2018-12-01",class:"Economic",onBoardService:!1,destination:"Dakar",airline:"Iberia",status:"closed",region:"Western Africa"},{id:34679,initials:"PT",country:"Portugal",value:5500,date:"2017-10-10",returnDate:"2018-10-20",class:"Economic",onBoardService:!1,destination:"Lisbon",airline:"Air Europa",status:"closed",region:"Mediterranean"},{id:48999,initials:"RU",country:"Russia",value:6700,date:"2019-01-17",returnDate:"2019-02-20",class:"First Class",onBoardService:!0,destination:"Moscow",airline:"Lufthansa",status:"reserved",region:"Caucasus"},{id:48998,initials:"US",country:"United States",value:2700.49,date:"2018-10-17",returnDate:"2018-10-29",class:"Economic",onBoardService:!1,destination:"Los Angeles",airline:"American Airlines",status:"reserved",region:"North America"},{id:54563,initials:"CL",country:"Chile",value:2e3,date:"2018-10-20",returnDate:"2018-11-01",destination:"Cusco",class:"Economic",onBoardService:!1,airline:"LATAM",status:"available",region:"Latin America"},{id:64568,initials:"MX",country:"Mexico",value:2100,date:"2018-03-10",returnDate:"2018-05-09",destination:"Mexico City",class:"Economic",onBoardService:!1,airline:"Aero M\xE9xico",status:"available",region:"Latin America"},{id:75456,initials:"IE",country:"Ireland",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Cork",class:"First Class",onBoardService:!0,airline:"Lufthansa",status:"reserved",region:"British Isle"},{id:23445,initials:"ZA",country:"South Africa",value:1900,date:"2018-12-10",returnDate:"2018-12-25",destination:"Cape Town",class:"Economic",onBoardService:!1,airline:"South African Airways",status:"available",region:"Southern Africa"},{id:19238,initials:"AU",country:"Australia",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Sydney",class:"First Class",onBoardService:!0,airline:"Jetstar Airways",status:"reserved",region:"Australasia"},{id:85456,initials:"JP",country:"Japan",value:5900,date:"2018-10-25",returnDate:"2018-11-10",destination:"Tokio",class:"Executive",onBoardService:!0,airline:"Japan Airlines",status:"available",region:"East Asia"},{id:94565,initials:"CN",country:"China",value:2900,date:"2018-10-10",returnDate:"2018-10-25",destination:"Beijing",class:"Economic",onBoardService:!1,airline:"Malaysia Airlines",status:"available",region:"East Asia"},{id:32330,initials:"UK",country:"England",value:2090.5,date:"2018-10-07",returnDate:"2018-11-15",destination:"London",class:"Executive",onBoardService:!0,airline:"British Airways",status:"available",region:"British Isle"},{id:14560,initials:"CA",country:"Canada",value:2090.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Quebec",class:"Economic",onBoardService:!1,airline:"American Airlines",status:"available",region:"North America"},{id:93800,initials:"IS",country:"Iceland",value:6300,date:"2018-10-12",returnDate:"2018-10-27",destination:"Reykjav\xEDk",class:"Economic",onBoardService:!1,airline:"Star Alliance",status:"available",region:"Nordics"},{id:34239,initials:"DE",country:"Germany",value:3070.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Berlin",class:"Executive",onBoardService:!0,airline:"LATAM",status:"available",region:"Danube"},{id:45611,initials:"AR",country:"Argentina",value:3500.5,date:"2018-12-07",returnDate:"2018-12-29",destination:"Ushuaia",class:"Economic",onBoardService:!1,airline:"LATAM",status:"reserved",region:"Latin America"}],Et=`export const DATA = ${JSON.stringify(we,null,2)};`;function $t(d,k){}function Zt(d,k){d&1&&I(0,$t,0,0,"ng-template")}function Xt(d,k){if(d&1&&(i(0,"po-accordion-item",7),I(1,Zt,1,0,null,8),t()),d&2){let a=u();m(),s("ngTemplateOutlet",a.dynamicTemplate)}}function Yt(d,k){if(d&1&&o(0,"po-code-editor",9),d&2){let a=u();s("p-readonly",!0)("ngModel",a.htmlCode)("p-theme",a.themeActive===1?"vs-dark":"vs")}}function ei(d,k){if(d&1&&o(0,"po-code-editor",10),d&2){let a=u();s("p-readonly",!0)("p-theme",a.themeActive===1?"vs-dark":"vs")("ngModel",a.tsCode)}}function ti(d,k){if(d&1&&o(0,"po-code-editor",10),d&2){let a=u();s("p-readonly",!0)("p-theme",a.themeActive===1?"vs-dark":"vs")("ngModel",a.serviceCode)}}function ii(d,k){if(d&1&&o(0,"po-code-editor",10),d&2){let a=u();s("p-readonly",!0)("p-theme",a.themeActive===1?"vs-dark":"vs")("ngModel",a.othersCode==null?null:a.othersCode.body)}}var P=(()=>{class d{constructor(a){this.sharedService=a,this.htmlCode="",this.marginTopClass="po-mt-3",this.properties=!1,this.serviceCode="",this.showOthersCodeButton=!1,this.showServiceButton=!1,this.tsCode="",this.buttons=[],this.selectedCode="html"}ngOnInit(){this.buttons=[{label:"HTML",selected:!0,action:()=>this.selectedCode="html"},{label:"TS",action:()=>this.selectedCode="ts"}],this.showServiceButton&&this.buttons.push({label:"Service",action:()=>this.selectedCode="service"}),this.showOthersCodeButton&&this.buttons.push({label:this.othersCode.label,action:()=>this.selectedCode="othersCode"}),this.sharedService.getThemeActive().subscribe(a=>{this.themeActive=a.type||0})}static{this.\u0275fac=function(r){return new(r||d)(j(rt))}}static{this.\u0275cmp=x({type:d,selectors:[["app-code-accordion-doc"]],inputs:{dynamicTemplate:"dynamicTemplate",htmlCode:"htmlCode",marginTopClass:"marginTopClass",othersCode:"othersCode",properties:"properties",serviceCode:"serviceCode",showOthersCodeButton:"showOthersCodeButton",showServiceButton:"showServiceButton",tsCode:"tsCode"},standalone:!1,decls:10,vars:8,consts:[[3,"ngClass"],["p-label","Propriedades",4,"ngIf"],["p-label","Fontes"],[1,"po-pt-1"],["p-toggle","single","ngDefaultControl","",3,"ngModelChange","p-buttons","ngModel"],["class","po-pt-2","p-height","350","p-language","html","ngDefaultControl","",3,"p-readonly","ngModel","p-theme",4,"ngIf"],["class","po-pt-2","p-height","350","p-language","typescript","ngDefaultControl","",3,"p-readonly","p-theme","ngModel",4,"ngIf"],["p-label","Propriedades"],[4,"ngTemplateOutlet"],["p-height","350","p-language","html","ngDefaultControl","",1,"po-pt-2",3,"p-readonly","ngModel","p-theme"],["p-height","350","p-language","typescript","ngDefaultControl","",1,"po-pt-2",3,"p-readonly","p-theme","ngModel"]],template:function(r,n){r&1&&(i(0,"div",0)(1,"po-accordion"),I(2,Xt,2,1,"po-accordion-item",1),i(3,"po-accordion-item",2)(4,"div",3)(5,"po-button-group",4),g("ngModelChange",function(E){return v(n.selectedCode,E)||(n.selectedCode=E),E}),t(),I(6,Yt,1,3,"po-code-editor",5)(7,ei,1,3,"po-code-editor",6)(8,ti,1,3,"po-code-editor",6)(9,ii,1,3,"po-code-editor",6),t()()()()),r&2&&(s("ngClass",n.marginTopClass),m(2),s("ngIf",n.properties),m(3),s("p-buttons",n.buttons),f("ngModel",n.selectedCode),m(),s("ngIf",n.selectedCode==="html"),m(),s("ngIf",n.selectedCode==="ts"),m(),s("ngIf",n.selectedCode==="service"),m(),s("ngIf",n.selectedCode==="othersCode"))},dependencies:[je,le,ze,Qe,B,X,M,U,Xe,Ke],encapsulation:2})}}return d})();var xt=(()=>{class d{constructor(){this.htmlCode=`<thf-grid
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
  `,this.tsOthersCode={label:"Data",body:Et},this.columnsTotalizador=[{property:"status",label:"Status",type:"label",labels:[{value:"available",color:"color-11",label:"Available"},{value:"reserved",color:"color-08",label:"Reserved"},{value:"closed",color:"color-07",label:"Closed"}]},{property:"region",label:"Region"},{property:"country",label:"Country"},{property:"destination",label:"Destination"},{property:"value",type:"currency",label:"Value",format:"BRL"}],this.aggregatesDescriptor=[{field:"value",aggregate:"sum",label:"Total"},{field:"country",aggregate:"count",label:"Contagem"}],this.itemsTotalizador=we}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-aggregates-doc"]],standalone:!1,decls:6,vars:15,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-actions-filter","t-columns","t-resizable","t-groupable","t-draggable","t-items","t-selectable","t-show-densification-configuration","t-aggregates","t-show-footer-aggregates","t-height"],[3,"htmlCode","tsCode","othersCode","showOthersCodeButton"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Totalizador por Colunas"),t(),o(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-actions-filter",!0)("t-columns",n.columnsTotalizador)("t-resizable",!0)("t-groupable",!0)("t-draggable",!0)("t-items",n.itemsTotalizador)("t-selectable",!0)("t-show-densification-configuration",!0)("t-aggregates",n.aggregatesDescriptor)("t-show-footer-aggregates",!0)("t-height",450),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)("othersCode",n.tsOthersCode)("showOthersCodeButton",!0))},dependencies:[b,C,F,P],encapsulation:2})}}return d})();var St=(()=>{class d{constructor(){this.htmlCode=`<thf-grid
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
  `,this.column=[{property:"id",label:"Id",visible:!1},{property:"label",label:"Label",visible:!1},{property:"value",label:"Code"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail",width:100}]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-basic-doc"]],standalone:!1,decls:6,vars:4,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/heroes",3,"t-columns","t-height"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Service"),t(),o(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-columns",n.column)("t-height",400),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[b,C,F,P],encapsulation:2})}}return d})();var Pe=(()=>{class d{constructor(a){this.httpClient=a}deleteItem(a,r,n){return this.httpClient.delete("https://po-sample-api.onrender.com/v1/people"+"/"+n)}static{this.\u0275fac=function(r){return new(r||d)(qe(Oe))}}static{this.\u0275prov=Ae({token:d,factory:d.\u0275fac,providedIn:"root"})}}return d})();var bt=(()=>{class d{constructor(a){this.serviceDeleteApi=a,this.htmlCode=`<thf-grid
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
  `,this.column=[{property:"id",label:"Id",visible:!1},{property:"label",label:"Label",visible:!1},{property:"name",label:"Nome"},{property:"cityName",label:"Cidade"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail",width:100}]}selectedItem(a){this.literals={bodyDelete:"Tem certeza que deseja excluir "+a.name+"?"}}static{this.\u0275fac=function(r){return new(r||d)(j(Pe))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-delete-service-doc"]],standalone:!1,features:[Le([Pe])],decls:6,vars:10,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/people",3,"t-selected","t-action-delete","t-columns","t-height","t-literals","t-selectable","t-service-delete-api"],[3,"htmlCode","tsCode","serviceCode","showServiceButton"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Grid Dele\xE7\xE3o com Servi\xE7o Customizado"),t(),o(3,"po-divider",1),i(4,"thf-grid",2),h("t-selected",function(E){return n.selectedItem(E)}),t(),o(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-action-delete",!0)("t-columns",n.column)("t-height",400)("t-literals",n.literals)("t-selectable",!0)("t-service-delete-api",n.serviceDeleteApi),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)("serviceCode",n.serviceCode)("showServiceButton",!0))},dependencies:[b,C,F,P],encapsulation:2})}}return d})();var li=()=>[];function di(d,k){if(d&1){let a=R();i(0,"div",7)(1,"po-container",8)(2,"po-checkbox-group",9),g("ngModelChange",function(n){p(a);let l=u();return v(l.columnsName,n)||(l.columnsName=n),c(n)}),h("p-change",function(){p(a);let n=u();return c(n.updateColumns())}),t()(),i(3,"po-container",8)(4,"po-checkbox-group",10),g("ngModelChange",function(n){p(a);let l=u();return v(l.selection,n)||(l.selection=n),c(n)}),h("p-change",function(){p(a);let n=u();return c(n.changeSelectionOptions())}),t()(),i(5,"po-container",8)(6,"po-checkbox-group",11),g("ngModelChange",function(n){p(a);let l=u();return v(l.otherProperties,n)||(l.otherProperties=n),c(n)}),h("p-change",function(){p(a);let n=u();return c(n.changeOtherProperties())}),t()(),i(7,"po-container",8)(8,"po-radio-group",12),g("ngModelChange",function(n){p(a);let l=u();return v(l.spacing,n)||(l.spacing=n),c(n)}),t()(),i(9,"po-container",8)(10,"po-radio-group",13),g("ngModelChange",function(n){p(a);let l=u();return v(l.componentsSize,n)||(l.componentsSize=n),c(n)}),t(),i(11,"po-radio-group",14),g("ngModelChange",function(n){p(a);let l=u();return v(l.filterinputModeValue,n)||(l.filterinputModeValue=n),c(n)}),t()(),i(12,"po-container",15)(13,"po-number",16),g("ngModelChange",function(n){p(a);let l=u();return v(l.minResizableValue,n)||(l.minResizableValue=n),c(n)}),t(),i(14,"po-number",17),g("ngModelChange",function(n){p(a);let l=u();return v(l.maxResizableValue,n)||(l.maxResizableValue=n),c(n)}),t()(),i(15,"po-container",15)(16,"po-number",18),g("ngModelChange",function(n){p(a);let l=u();return v(l.height,n)||(l.height=n),c(n)}),t(),i(17,"po-number",19),g("ngModelChange",function(n){p(a);let l=u();return v(l.maxHeight,n)||(l.maxHeight=n),c(n)}),t(),i(18,"po-number",20),g("ngModelChange",function(n){p(a);let l=u();return v(l.minHeight,n)||(l.minHeight=n),c(n)}),t()(),i(19,"po-container",15)(20,"po-textarea",21),g("ngModelChange",function(n){p(a);let l=u();return v(l.literals,n)||(l.literals=n),c(n)}),h("p-change-model",function(){p(a);let n=u();return c(n.changeLiterals())}),t()(),i(21,"po-container",15)(22,"po-textarea",22),g("ngModelChange",function(n){p(a);let l=u();return v(l.sort,n)||(l.sort=n),c(n)}),h("p-change-model",function(){p(a);let n=u();return c(n.changeSort())}),t()(),i(23,"po-container",23)(24,"div",24)(25,"po-checkbox-group",25),g("ngModelChange",function(n){p(a);let l=u();return v(l.pagination,n)||(l.pagination=n),c(n)}),h("p-change",function(){p(a);let n=u();return c(n.changePagination())}),t(),i(26,"po-textarea",26),g("ngModelChange",function(n){p(a);let l=u();return v(l.optionsPage,n)||(l.optionsPage=n),c(n)}),h("p-change-model",function(){p(a);let n=u();return c(n.changeOptionsPage())}),t()()()(),i(27,"div",27)(28,"po-button",28),h("p-click",function(){p(a);let n=u();return c(n.restore())}),t()()}if(d&2){let a=u();m(2),f("ngModel",a.columnsName),s("p-options",a.columnsOptions),m(2),s("p-options",a.selectionOptions),f("ngModel",a.selection),m(2),s("p-columns",4)("p-options",a.otherPropertiesOptions),f("ngModel",a.otherProperties),m(2),s("p-columns",4)("p-options",a.spacingOptions),f("ngModel",a.spacing),m(2),f("ngModel",a.componentsSize),s("p-options",a.componentsSizeOptions),m(),f("ngModel",a.filterinputModeValue),s("p-options",a.filterModeOptions),m(2),f("ngModel",a.minResizableValue),s("disabled",!a.resizable),m(),f("ngModel",a.maxResizableValue),s("disabled",!a.resizable),m(2),f("ngModel",a.height),m(),f("ngModel",a.maxHeight),m(),f("ngModel",a.minHeight),m(2),f("ngModel",a.literals),m(2),f("ngModel",a.sort),m(3),s("p-options",a.paginationOptions),f("ngModel",a.pagination),m(),f("ngModel",a.optionsPage),s("disabled",!a.pagination.includes("pageable"))}}var ht=(()=>{class d{constructor(a){this.poNotification=a,this.htmlCode=`<po-container>
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
  `,this.actions=void 0,this.columnsName=["id","name","birthdate","email"],this.componentsSize="medium",this.customOptionsPage=[{value:10,label:"10"},{value:20,label:"20"},{value:50,label:"50"},{value:100,label:"100"},{value:1e3,label:"1000"}],this.customSort=[{field:"",dir:"asc"}],this.event="",this.filterinputModeValue="basic",this.height=400,this.minHeight=void 0,this.maxHeight=void 0,this.literals="",this.literalsCustom={},this.maxResizableValue=300,this.minResizableValue=10,this.optionsPage='[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]',this.pagination=[],this.properties=[],this.resizable=!1,this.selection=["selectableEntireLine"],this.sort='[{"field": "", "dir": "asc"}]',this.spacing=oe.Medium,this.otherProperties=["actionsFilter","draggable","groupable","sortable","striped","virtualScroll"],this.customAction=[{label:"",action:r=>{this.poNotification.information(`${r.id} - ${r.name}`)},icon:"ICON_MENU_OPEN",fixed:!0}],this.componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.selectionOptions=[{label:"Selectable",value:"selectable"},{label:"Single",value:"singleSelect",disabled:!0},{label:"Entire Line",value:"selectableEntireLine",disabled:!0},{label:"Hide Select All",value:"hideSelectAll",disabled:!0},{label:"Action Delete",value:"actionDelete",disabled:!0},{label:"Action Edit",value:"actionEdit",disabled:!0},{label:"Action Excel",value:"actionExcel",disabled:!0},{label:"Action PDF",value:"actionPdf",disabled:!0},{label:"Hide Batch Actions",value:"hideBatchActions",disabled:!0}],this.spacingOptions=[{label:"extraSmall",value:oe.ExtraSmall},{label:"Small",value:oe.Small},{label:"Medium",value:oe.Medium},{label:"Large",value:oe.Large}],this.filterModeOptions=[{label:"Basic",value:"basic"},{label:"Service",value:"service"}],this.otherPropertiesOptions=[{label:"Actions",value:"actions"},{label:"Actions Filter",value:"actionsFilter"},{label:"Action Right",value:"actionRight"},{label:"Draggable",value:"draggable"},{label:"Groupable",value:"groupable"},{label:"Hide Columns Manager",value:"hideColumnsManager"},{label:"Hide Actions Fixed Columns",value:"hideActionFixedColumns"},{label:"Hide Table Search",value:"hideTableSearch"},{label:"Loading",value:"loading"},{label:"Resizable",value:"resizable"},{label:"Show Densification Configuration",value:"showDensificationConfiguration"},{label:"Show Draggable Icon",value:"showDraggableIcon"},{label:"Sortable",value:"sortable"},{label:"Striped",value:"striped"},{label:"Text Wrap",value:"textWrap",disabled:!1},{label:"Virtual Scroll",value:"virtualScroll"}],this.paginationOptions=[{label:"Pageable",value:"pageable"},{label:"Show More Disabled",value:"showMoreDisabled",disabled:!1},{label:"Show More Visible",value:"showMoreVisible",disabled:!1}],this.items=[{id:1,name:"Jo\xE3o Silva",birthdate:"1990-05-15",lastLogin:"2024-02-14T15:30:00Z",active:!0,email:"joao.silva@example.com"},{id:2,name:"Maria Souza",birthdate:"1985-10-23",lastLogin:"2024-02-13T08:45:00Z",active:!1,email:"maria.souza@example.com"},{id:3,name:"Carlos Almeida",birthdate:"1998-07-09",lastLogin:"2024-02-14T20:15:00Z",active:!0,email:"carlos.almeida@example.com"},{id:4,name:"Fernanda Costa",birthdate:"1992-03-12",lastLogin:"2024-02-12T18:00:00Z",active:!1,email:"fernanda.costa@example.com"},{id:5,name:"Ricardo Lima",birthdate:"1980-11-30",lastLogin:"2024-02-11T07:25:00Z",active:!0,email:"ricardo.lima@example.com"},{id:6,name:"Ana Pereira",birthdate:"1995-09-18",lastLogin:"2024-02-10T14:10:00Z",active:!0,email:"ana.pereira@example.com"},{id:7,name:"Pedro Henrique",birthdate:"1993-06-25",lastLogin:"2024-02-09T12:30:00Z",active:!1,email:"pedro.henrique@example.com"},{id:8,name:"Beatriz Ramos",birthdate:"1999-04-03",lastLogin:"2024-02-08T09:15:00Z",active:!0,email:"beatriz.ramos@example.com"},{id:9,name:"Lucas Oliveira",birthdate:"1987-07-22",lastLogin:"2024-02-07T16:45:00Z",active:!1,email:"lucas.oliveira@example.com"},{id:10,name:"Juliana Martins",birthdate:"1996-01-05",lastLogin:"2024-02-06T11:00:00Z",active:!0,email:"juliana.martins@example.com"},{id:11,name:"Eduardo Nunes",birthdate:"1982-08-17",lastLogin:"2024-02-05T17:20:00Z",active:!1,email:"eduardo.nunes@example.com"},{id:12,name:"Camila Ferreira",birthdate:"2000-12-29",lastLogin:"2024-02-04T13:40:00Z",active:!0,email:"camila.ferreira@example.com"}],this.columns=[{property:"id",label:"Number"},{property:"name",label:"Text"},{property:"birthdate",label:"Date",type:"date"},{property:"email",label:"Link",type:"link",action:this.openEmail.bind(this)}],this.columnsOptions=[{value:"id",label:"Number"},{value:"name",label:"Text"},{value:"birthdate",label:"Date"},{value:"lastLogin",label:"DateTime"},{value:"active",label:"Boolean"},{value:"email",label:"Link"}],this.columnsDefinition={id:{property:"id",label:"Number"},name:{property:"name",label:"Text"},birthdate:{property:"birthdate",label:"Date",type:"date"},lastLogin:{property:"lastLogin",label:"DateTime",type:"dateTime"},active:{property:"active",label:"Boolean"},email:{property:"email",label:"Link",type:"link",action:this.openEmail.bind(this)}}}ngAfterViewInit(){this.restore()}changeEvent(a){this.event=a}changeLiterals(){try{this.literalsCustom=JSON.parse(this.literals)}catch{this.literalsCustom={}}}changeOptionsPage(){try{this.customOptionsPage=JSON.parse(this.optionsPage)}catch{this.customOptionsPage=[{value:10,label:"10"},{value:20,label:"20"},{value:50,label:"50"},{value:100,label:"100"},{value:1e3,label:"1000"}]}}changeOtherProperties(){this.actions=this.otherProperties.includes("actions")?this.customAction:[];let a=this.otherProperties.includes("virtualScroll"),r=this.otherProperties.includes("resizable");this.otherPropertiesOptions=this.otherPropertiesOptions.map(n=>n.value==="textWrap"?N(G({},n),{disabled:a}):n),a&&this.otherProperties.includes("textWrap")&&(this.otherProperties=this.otherProperties.filter(n=>n!=="textWrap")),this.resizable=r}changePagination(){let a=this.pagination.includes("pageable");this.paginationOptions[1].disabled=!a,this.paginationOptions[2].disabled=!a,this.paginationOptions=[...this.paginationOptions]}changeSelectionOptions(){let a=this.selection.includes("selectable");this.selectionOptions[1].disabled=!a,this.selectionOptions[2].disabled=!a,this.selectionOptions[3].disabled=!a,this.selectionOptions[4].disabled=!a,this.selectionOptions[5].disabled=!a,this.selectionOptions[6].disabled=!a,this.selectionOptions[7].disabled=!a,this.selectionOptions[8].disabled=!a,this.selectionOptions=[...this.selectionOptions]}changeSort(){try{this.customSort=JSON.parse(this.sort)}catch{this.customSort=[{field:"",dir:"asc"}]}}openEmail(a){window.open(`mailto:${a}`,"_blank")}restore(){this.actions=void 0,this.columnsName=["id","name","birthdate","email"],this.componentsSize="medium",this.event="",this.filterinputModeValue="basic",this.literals="",this.literalsCustom={},this.maxResizableValue=300,this.minResizableValue=10,this.height=400,this.minHeight=void 0,this.maxHeight=void 0,this.optionsPage='[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]',this.pagination=["showMoreVisible"],this.properties=[],this.resizable=!1,this.selection=["selectableEntireLine"],this.sort='[{"field": "", "dir": "asc"}]',this.spacing=oe.Medium,this.otherProperties=["actionsFilter","draggable","groupable","sortable","striped","virtualScroll"],this.updateColumns(),this.changeLiterals(),this.changeSort(),this.changePagination(),this.changeSelectionOptions(),this.changeOtherProperties()}updateColumns(){this.columns=[],this.columnsName.forEach(a=>this.columns.push(this.columnsDefinition[a]))}static{this.\u0275fac=function(r){return new(r||d)(j(tt))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-labs-doc"]],standalone:!1,decls:10,vars:47,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-param-delete-api","value",3,"t-change-fixed-columns","t-change-order-column","t-change-page-size","t-change-sort-column","t-change-visible-columns","t-change-options-column-manager","t-changed-density","t-delete-item","t-delete-items","t-delete-item-error","t-filter-item-error","t-restore-column-manager","t-selected","t-all-selected","t-unselected","t-all-unselected","t-change-group","t-rows-selected","t-action-delete","t-action-edit","t-action-excel","t-action-pdf","t-actions","t-actions-filter","t-actions-right","t-components-size","t-columns","t-draggable","t-filter-input-mode","t-groupable","t-height","t-max-height","t-min-height","t-hide-columns-manager","t-hide-action-fixed-columns","t-hide-batch-actions","t-hide-select-all","t-hide-table-search","t-literals","t-loading","t-max-resizable-width","t-min-resizable-width","t-options-paging","t-pageable","t-resizable","t-selectable","t-selectable-entire-line","t-show-densification-configuration","t-show-draggable-icon","t-show-more-disabled","t-show-more-visible","t-single-select","t-sort","t-sortable","t-spacing","t-striped","t-text-wrap","t-virtual-scroll","t-items"],[1,"po-mt-2",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","columnsName","p-columns","4","p-label","Columns",3,"ngModelChange","p-change","ngModel","p-options"],["name","selection","p-label","Selection","p-columns","4",3,"ngModelChange","p-change","p-options","ngModel"],["name","otherProperties","p-label","Other Properties",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","spacing","p-help","Para aplicar o tamanho Extra Small, defina o n\xEDvel de acessibilidade como AA no navbar.","p-label","Spacing",3,"ngModelChange","p-columns","p-options","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, defina o n\xEDvel de acessibilidade como AA no navbar.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterinputModeValue","p-label","Filter Input Mode",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],[1,"po-mb-2","po-lg-6",2,"display","flex"],["p-label","Min Resizable Width",1,"po-md-6",3,"ngModelChange","ngModel","disabled"],["p-label","Max Resizable Width",1,"po-md-6",3,"ngModelChange","ngModel","disabled"],["p-label","Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["p-label","Max Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["p-label","Min Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","literals","p-label","Literals","p-help",'{"noData": "Sem dados a serem exibidos"}',3,"ngModelChange","p-change-model","ngModel"],["name","sort","p-label","Sort","p-help",'[{ "field":"name", "dir":"asc" }]',3,"ngModelChange","p-change-model","ngModel"],[1,"po-mb-2","po-lg-12",2,"display","flex"],[2,"display","flex","flex-wrap","wrap"],["name","pagination","p-label","Pagination",1,"po-lg-6",3,"ngModelChange","p-change","p-options","ngModel"],["name","optionsPage","p-label","Options Page","p-help",'[{ "value":"25", "label":"25" }, { "value":"50", "label":"50" }]',1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel","disabled"],[1,"po-row"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let l=R();i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),o(3,"po-divider",2),i(4,"thf-grid",3),h("t-change-fixed-columns",function(){return p(l),c(n.changeEvent("t-change-fixed-columns"))})("t-change-order-column",function(){return p(l),c(n.changeEvent("t-change-order-column"))})("t-change-page-size",function(){return p(l),c(n.changeEvent("t-change-page-size"))})("t-change-sort-column",function(){return p(l),c(n.changeEvent("t-change-sort-column"))})("t-change-visible-columns",function(){return p(l),c(n.changeEvent("t-change-visible-columns"))})("t-change-options-column-manager",function(){return p(l),c(n.changeEvent("t-change-options-column-manager"))})("t-changed-density",function(){return p(l),c(n.changeEvent("t-changed-density"))})("t-delete-item",function(){return p(l),c(n.changeEvent("t-delete-item"))})("t-delete-items",function(){return p(l),c(n.changeEvent("t-delete-items"))})("t-delete-item-error",function(){return p(l),c(n.changeEvent("t-delete-item-error"))})("t-filter-item-error",function(){return p(l),c(n.changeEvent("t-filter-item-error"))})("t-restore-column-manager",function(){return p(l),c(n.changeEvent("t-restore-column-manager"))})("t-selected",function(){return p(l),c(n.changeEvent("t-selected"))})("t-all-selected",function(){return p(l),c(n.changeEvent("t-all-selected"))})("t-unselected",function(){return p(l),c(n.changeEvent("t-unselected"))})("t-all-unselected",function(){return p(l),c(n.changeEvent("t-all-unselected"))})("t-change-group",function(){return p(l),c(n.changeEvent("t-change-group"))})("t-rows-selected",function(){return p(l),c(n.changeEvent("t-rows-selected"))}),t(),i(5,"po-container",4),o(6,"po-info",5),t(),o(7,"app-code-accordion-doc",6),I(8,di,29,27,"ng-template",null,0,J),t()}if(r&2){let l=W(9);m(4),s("t-action-delete",n.selection.includes("actionDelete"))("t-action-edit",n.selection.includes("actionEdit"))("t-action-excel",n.selection.includes("actionExcel"))("t-action-pdf",n.selection.includes("actionPdf"))("t-actions",n.actions||K(46,li))("t-actions-filter",n.otherProperties.includes("actionsFilter"))("t-actions-right",n.otherProperties.includes("actionRight"))("t-components-size",n.componentsSize)("t-columns",n.columns)("t-draggable",n.otherProperties.includes("draggable"))("t-filter-input-mode",n.filterinputModeValue)("t-groupable",n.otherProperties.includes("groupable"))("t-height",n.height)("t-max-height",n.maxHeight)("t-min-height",n.minHeight)("t-hide-columns-manager",n.otherProperties.includes("hideColumnsManager"))("t-hide-action-fixed-columns",n.otherProperties.includes("hideActionFixedColumns"))("t-hide-batch-actions",n.selection.includes("hideBatchActions"))("t-hide-select-all",n.selection.includes("hideSelectAll"))("t-hide-table-search",n.otherProperties.includes("hideTableSearch"))("t-literals",n.literalsCustom)("t-loading",n.otherProperties.includes("loading"))("t-max-resizable-width",n.maxResizableValue)("t-min-resizable-width",n.minResizableValue)("t-options-paging",n.customOptionsPage)("t-pageable",n.pagination.includes("pageable"))("t-resizable",n.resizable)("t-selectable",n.selection.includes("selectable"))("t-selectable-entire-line",n.selection.includes("selectableEntireLine"))("t-show-densification-configuration",n.otherProperties.includes("showDensificationConfiguration"))("t-show-draggable-icon",n.otherProperties.includes("showDraggableIcon"))("t-show-more-disabled",n.pagination.includes("showMoreDisabled"))("t-show-more-visible",n.pagination.includes("showMoreVisible"))("t-single-select",n.selection.includes("singleSelect"))("t-sort",n.customSort)("t-sortable",n.otherProperties.includes("sortable"))("t-spacing",n.spacing)("t-striped",n.otherProperties.includes("striped"))("t-text-wrap",n.otherProperties.includes("textWrap"))("t-virtual-scroll",n.otherProperties.includes("virtualScroll"))("t-items",n.items),m(2),s("p-value",n.event),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[B,X,H,b,C,fe,de,nt,ye,Y,F,P],encapsulation:2})}}return d})();var si=["gridComponent"],ft=(()=>{class d{constructor(){this.htmlCode=`<thf-grid
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
  `,this.columns=[{property:"id",label:"Id",editProperties:{disabled:!0}},{property:"name",label:"Nome"},{property:"birthdate",label:"Data de  nascimento",type:"date",editProperties:{componentEditable:"datepicker",clean:!0,required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,additionalHelpTooltip:"Informe a data de nascimento no formato DDMMAAAA ou selecione no calend\xE1rio.",keydown:this.onKeyDown.bind(this,"birthdate")}},{property:"city",label:"Cidade",editProperties:{componentEditable:"combo",options:[{value:"4201307",label:"Araquari"},{value:"1501402",label:"Bel\xE9m"},{value:"3509502",label:"Campinas"},{value:"4106902",label:"Curitiba"},{value:"4209102",label:"Joinville"},{value:"3534401",label:"Osasco"},{value:"3304557",label:"Rio de Janeiro"},{value:"4215802",label:"S\xE3o Bento do Sul"},{value:"4216206",label:"S\xE3o Francisco do Sul"},{value:"3550308",label:"S\xE3o Paulo"}],fieldLabel:"label",fieldValue:"value",removeInitialFilter:!0,controlValueWithLabel:!0}}]}ngOnInit(){this.editProperties={actionEdit:this.setFormGroup.bind(this)}}onKeyDown(a,r){r.code==="F9"&&this.thfGrid.showAdditionalHelp(a)}setFormGroup(a){return this.form=new Q({id:new S(a.id,[L.required]),name:new S(a.name),city:new S(a.city),birthdate:new S(a.birthdate)}),this.form}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-editing-inline-doc"]],viewQuery:function(r,n){if(r&1&&T(si,5),r&2){let l;w(l=D())&&(n.thfGrid=l.first)}},standalone:!1,decls:7,vars:11,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/people",3,"t-auto-size","t-columns","t-actions-filter","t-selectable","t-actions-right","t-draggable","t-groupable","t-height","t-edit-properties"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",1),e(2,"Edi\xE7\xE3o em linha"),t(),o(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("t-auto-size",!0)("t-columns",n.columns)("t-actions-filter",!0)("t-selectable",!0)("t-actions-right",!0)("t-draggable",!0)("t-groupable",!0)("t-height",400)("t-edit-properties",n.editProperties),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[b,C,F,P],encapsulation:2})}}return d})();var ci=["modal"],ui=["gridComponent"],Ei=["multiselect"],xi=["input"],Si=(d,k)=>({name:d,perfil:k}),bi=()=>({value:1,label:"RH"}),hi=()=>({value:2,label:"Almoxarifado"}),fi=()=>({value:3,label:"Vendedor"}),vi=(d,k,a)=>[d,k,a];function gi(d,k){if(d&1){let a=R();i(0,"po-input",13,4),h("p-keydown",function(n){p(a);let l=u();return c(l.onKeyDown("name",n))}),t()}if(d&2){let a=k.formControl;s("formControl",a)("p-error-pattern","Obrigat\xF3rio")("p-required",!0)("p-required-field-error-message",!0)}}function yi(d,k){if(d&1){let a=R();i(0,"po-multiselect",14,5),h("p-keydown",function(n){p(a);let l=u();return c(l.onKeyDown("otherStatus",n))}),t()}if(d&2){let a=k.formControl;s("formControl",a)("p-field-error-message","Obrigat\xF3rio")("p-required",!0)("p-additional-help-tooltip","Marque um ou mais status, conforme necess\xE1rio.")("p-options",Re(11,vi,K(8,bi),K(9,hi),K(10,fi)))("p-field-label","label")("p-field-value","value")("p-control-value-with-label",!0)}}function Ci(d,k){if(d&1&&(i(0,"div",15)(1,"pre"),e(2),t()()),d&2){let a=u();m(2),ue(a.getLabelChangedItems())}}var vt=(()=>{class d{constructor(){this.htmlCode=`
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
`,this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],perfil:[1],state:{value:"SC",label:"Santa Catarina"},city:"Lages"},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],perfil:[2],state:{value:"SC",label:"Santa Catarina"},city:"Brusque"},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],perfil:[3],state:{value:"SP",label:"S\xE3o Paulo"},city:"Guarulhos"},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],perfil:[3],state:{value:"SP",label:"S\xE3o Paulo"},city:"Campinas"},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],perfil:[2],state:{value:"RJ",label:"Rio de Janeiro"},city:null},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],perfil:[1],state:null,city:null}],this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome",editProperties:{componentEditable:"input"}},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:1,label:"Ativo"},{value:2,label:"Inativo"},{value:0,label:"Other"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}},{property:"values",label:"Values",editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!0,errorMessage:"Obrigat\xF3rio",additionalHelpTooltip:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",keydown:this.onKeyDown.bind(this,"values")}},{property:"perfil",label:"Perfil",editProperties:{componentEditable:"multiselect",options:[{value:1,label:"RH"},{value:2,label:"Almoxarifado"},{value:3,label:"Vendedor"}],fieldLabel:"label",fieldValue:"value",controlValueWithLabel:!0}},{property:"state",label:"Estado",editProperties:{componentEditable:"combo",required:!1,removeInitialFilter:!0,options:[{value:"MG",label:"Minas Gerais"},{value:"RJ",label:"Rio de Janeiro"},{value:"SC",label:"Santa Catarina"},{value:"SP",label:"S\xE3o Paulo"}],fieldLabel:"label",fieldValue:"value",controlValueWithLabel:!0}},{property:"city",label:"cidade",editProperties:{componentEditable:"combo",required:!1,removeInitialFilter:!0,disabled:!1,fieldLabel:"value",fieldValue:"value"}}],this.itemsUpdated=[]}ngOnInit(){this.gridRowsActionsWithItems={title:"Items",actionEdit:(a,r)=>(r==="include"&&!a.id&&(console.log("mode: ",r),this.disabledIncludeButton=!0,a.id=a.$uuidThfIncluded,a.dependents=[],this.currentIdItem=a.id),this.myForm=new Q({name:new S(a.name),status:new S(a.status,[L.min(1)]),values:new S(a.values,[L.required]),perfil:new S(a.perfil,[L.required]),state:new S(a.state),city:new S(a.city)}),this.handleStateAndCity(this.myForm?.controls.state.value),this.myForm),afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this),validateField:this.onValidate.bind(this)},this.itemsUpdated=[...this.items]}onAfterSave(a){console.log("onAfterSave(new): ",a);let r=this.columnWithItems.find(n=>n.property==="city");r?.editProperties&&(r.editProperties.disabled=!0)}onBeforeSave(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeInsert(a){console.log("before insert new value: ",a),this.disabledIncludeButton=!1,this.itemsUpdated=[...this.itemsUpdated,a];let r=this.columnWithItems.find(n=>n.property==="city");return r?.editProperties&&(r.editProperties.disabled=!0),!0}onValidate(a,r){if(console.log("onValidateField:",a,r),r==="state"){this.myForm?.controls.city.setValue(null);let n=this.myForm.controls.state.value,l=this.columnWithItems.find(E=>E.property==="city");if(!l?.editProperties)return!0;n?(l.editProperties.disabled=!1,l.editProperties.options=this.getCity(n.value),this.myForm?.controls.city.setValue("")):l.editProperties.disabled=!0}return!0}handleStateAndCity(a){let r=this.columnWithItems.find(n=>n.property==="city");r?.editProperties&&(a?(r.editProperties.options=this.getCity(a),r.editProperties.disabled=!1):r.editProperties.disabled=!0)}onBeforeRemove(a){return!0}onAfterRemove(a){return console.log("afterRemove: ",a),!0}getChangedItems(){return this.thfGrid?.getChangedItems()||[]}getLabelChangedItems(){return JSON.stringify(this.thfGrid?.getChangedItems()||[],null,2)}finishEditMode(){this.thfGrid.cleanRowActionsMode()}onKeyDown(a,r){if(r.code==="F9"){if(a==="otherStatus"){this.multiselect.showAdditionalHelp();return}else if(a==="name"){this.input.showAdditionalHelp();return}this.thfGrid.showAdditionalHelp(a)}}getCity(a){return{MG:[{value:"Belo Horizonte"},{value:"Contagem"},{value:"Juiz de Fora"},{value:"Uberl\xE2ndia"}],RJ:[{value:"Duque de Caxias"},{value:"Nova Igua\xE7u"},{value:"Rio de Janeiro"},{value:"S\xE3o Gon\xE7alo"}],SP:[{value:"Campinas"},{value:"Guarulhos"},{value:"S\xE3o Bernardo do Campo"},{value:"S\xE3o Paulo"}],SC:[{value:"Balne\xE1rio Cambori\xFA"},{value:"Brusque"},{value:"Lages"},{value:"Palho\xE7a"}]}[a]||[]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-row-actions-doc"]],viewQuery:function(r,n){if(r&1&&(T(ci,7),T(ui,5),T(Ei,5),T(xi,5)),r&2){let l;w(l=D())&&(n.poModal=l.first),w(l=D())&&(n.thfGrid=l.first),w(l=D())&&(n.multiselect=l.first),w(l=D())&&(n.input=l.first)}},standalone:!1,decls:16,vars:16,consts:[["gridComponent",""],["nameTemplate",""],["perfilTemplate",""],["modal",""],["input",""],["multiselect",""],[1,"po-font-text-large-bold"],["p-label","Finaliza modo edi\xE7\xE3o",1,"po-mr-2",3,"p-click"],["p-label","Get itens alterados",3,"p-click","p-disabled"],[3,"t-height","t-selectable","t-single-select","t-items","t-columns","t-grid-row-actions","t-actions-right","t-sortable","t-custom-templates"],["p-title","Itens que foram alterados"],["class","code",4,"ngIf"],[3,"htmlCode","tsCode"],["p-additional-help-tooltip","Informe pelo menos o primeiro nome.","p-placeholder","Informe o nome",3,"p-keydown","formControl","p-error-pattern","p-required","p-required-field-error-message"],[3,"p-keydown","formControl","p-field-error-message","p-required","p-additional-help-tooltip","p-options","p-field-label","p-field-value","p-control-value-with-label"],[1,"code"]],template:function(r,n){if(r&1){let l=R();i(0,"po-container")(1,"span",6),e(2,"Edi\xE7\xE3o flu\xEDda"),t(),o(3,"po-divider"),i(4,"po-button",7),h("p-click",function(){return p(l),c(n.finishEditMode())}),t(),i(5,"po-button",8),h("p-click",function(){return p(l),c(n.poModal.open())}),t(),o(6,"thf-grid",9,0),I(8,gi,2,4,"ng-template",null,1,J)(10,yi,2,15,"ng-template",null,2,J),i(12,"po-modal",10,3),I(14,Ci,3,1,"div",11),t(),o(15,"app-code-accordion-doc",12),t()}if(r&2){let l,E,A=W(9),jt=W(11);m(5),s("p-disabled",((l=n.getChangedItems())==null?null:l.length)===0),m(),s("t-height",400)("t-selectable",!0)("t-single-select",!0)("t-items",n.items)("t-columns",n.columnWithItems)("t-grid-row-actions",n.gridRowsActionsWithItems)("t-actions-right",!0)("t-sortable",!0)("t-custom-templates",Ee(13,Si,A,jt)),m(8),s("ngIf",(E=n.getChangedItems())==null?null:E.length),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[le,B,Ne,H,b,C,ge,it,ve,F,P],styles:[".code[_ngcontent-%COMP%]{padding:1rem;background-color:#000;color:#adff2f;margin-top:.5rem;margin-left:2rem;border-radius:.5rem}"]})}}return d})();var Ti=["modal"],wi=["gridComponent"];function Di(d,k){if(d&1&&(i(0,"div",9)(1,"pre"),e(2),t()()),d&2){let a=u();m(2),ue(a.getLabelChangedItems())}}var gt=(()=>{class d{constructor(){this.htmlCode=`<po-button
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

  `,this.items=[{id:11234,country:"Brazil",value:1e3,value_pt:1e3,value_en:1e3,value_ru:1e3,value_es:1e3,destination:"Rio de Janeiro",status:"available",region:"Latin America"},{id:22467,country:"France",value:5e3,value_pt:5e3,value_en:5e3,value_ru:5e3,value_es:5e3,destination:"Paris",status:"closed",region:"Alps"},{id:40670,country:"Senegal",value:3200,value_pt:3200,value_en:3200,value_ru:3200,value_es:3200,destination:"Dakar",status:"closed",region:"Western Africa"},{id:34679,country:"Portugal",value:5500,value_pt:5500,value_en:5500,value_ru:5500,value_es:5500,destination:"Lisbon",status:"closed",region:"Mediterranean"},{id:48999,country:"Russia",value:6700,value_pt:6700,value_en:6700,value_ru:6700,value_es:6700,destination:"Moscow",status:"reserved",region:"Caucasus"},{id:48999,country:"United States",value:2700.49,value_pt:2700.49,value_en:2700.49,value_ru:2700.49,value_es:2700.49,destination:"Los Angeles",status:"reserved",region:"North America"},{id:54563,country:"Chile",value:2e3,value_pt:2e3,value_en:2e3,value_ru:2e3,value_es:2e3,destination:"Cusco",status:"available",region:"Latin America"},{id:64568,country:"Mexico",value:2100,value_pt:2100,value_en:2100,value_ru:2100,value_es:2100,destination:"Mexico City",status:"available",region:"Latin America"},{id:75456,country:"Ireland",value:6300,value_pt:6300,value_en:6300,value_ru:6300,value_es:6300,destination:"Cork",status:"reserved",region:"British Isle"},{id:23445,country:"South Africa",value:1900,value_pt:1900,value_en:1900,value_ru:1900,value_es:1900,destination:"Cape Town",status:"available",region:"Southern Africa"},{id:19238,country:"Australia",value:6300,value_pt:6300,value_en:6300,value_ru:6300,value_es:6300,destination:"Sydney",status:"reserved",region:"Australasia"},{id:85456,country:"Japan",value:5900,value_pt:5900,value_en:5900,value_ru:5900,value_es:5900,destination:"Tokio",status:"available",region:"East Asia"},{id:94565,country:"China",value:2900,value_pt:2900,value_en:2900,value_ru:2900,value_es:2900,destination:"Beijing",status:"available",region:"East Asia"},{id:32330,country:"England",value:2090.5,value_pt:2090.5,value_en:2090.5,value_ru:2090.5,value_es:2090.5,destination:"London",status:"available",region:"British Isle"},{id:14560,country:"Canada",value:2090.5,value_pt:2090.5,value_en:2090.5,value_ru:2090.5,value_es:2090.5,destination:"Quebec",status:"available",region:"North America"},{id:93800,country:"Iceland",value:6300,value_pt:6300,value_en:6300,value_ru:6300,value_es:6300,destination:"Reykjav\xEDk",status:"available",region:"Nordics"},{id:34239,country:"Germany",value:3070.5,value_pt:3070.5,value_en:3070.5,value_ru:3070.5,value_es:3070.5,destination:"Berlin",status:"available",region:"Danube"},{id:45611,country:"Argentina",value:3500.5,value_pt:3500.5,value_en:3500.5,value_ru:3500.5,value_es:3500.5,destination:"Ushuaia",status:"reserved",region:"Latin America"}],this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"status",label:"Status",type:"label",labels:[{value:"available",color:"color-11",label:"Available"},{value:"reserved",color:"color-08",label:"Reserved"},{value:"closed",color:"color-07",label:"Closed"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:"available",label:"Available"},{value:"reserved",label:"Reserved"},{value:"closed",label:"Closed"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}},{property:"region",label:"Region",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",additionalHelpTooltip:"Informe a regi\xE3o referida.",keydown:this.onKeyDown.bind(this,"region")}},{property:"country",label:"Country",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",additionalHelpTooltip:"Informe o pa\xEDs referido.",keydown:this.onKeyDown.bind(this,"country")}},{property:"destination",label:"Destination",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",additionalHelpTooltip:"Informe o destino dentro do pa\xEDs informado.",keydown:this.onKeyDown.bind(this,"destination")}},{property:"value",label:"Value",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_en",label:"Value (en)",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"en"}},{property:"value_pt",label:"Value (pt)",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"pt"}},{property:"value_ru",label:"Value (ru)",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"ru"}},{property:"value_es",label:"Value (es)",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"es"}}],this.aggregatesDescriptor=[{field:"value",aggregate:"sum",label:"Total"},{field:"value_en",aggregate:"sum",label:"Total (en)"},{field:"value_pt",aggregate:"sum",label:"Total (pt)"},{field:"value_ru",aggregate:"sum",label:"Total (ru)"},{field:"value_es",aggregate:"sum",label:"Total (es)"}],this.itemsUpdated=[]}ngOnInit(){this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!0,actionEdit:(a,r)=>(r==="include"&&!a.id&&(console.log("mode: ",r),this.disabledIncludeButton=!0,a.id=a.$uuidThfIncluded,a.dependents=[],this.currentIdItem=a.id),new Q({status:new S(a.status,[L.min(1)]),region:new S(a.region,[L.required]),country:new S(a.country,[L.required]),destination:new S(a.destination,[L.required]),value:new S(a.value,[L.required]),value_en:new S(a.value_en,[L.required]),value_pt:new S(a.value_pt,[L.required]),value_ru:new S(a.value_ru,[L.required]),value_es:new S(a.value_es,[L.required])})),afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this)},this.itemsUpdated=[...this.items]}onAfterSave(a){console.log("onAfterSave(new): ",a)}onBeforeSave(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeSaveSubItems(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeInsert(a){return console.log("before insert new value: ",a),this.disabledIncludeButton=!1,this.itemsUpdated=[...this.itemsUpdated,a],!0}onBeforeInsertSubItems(a){a.id=a.$uuidThfIncluded;let r=this.itemsUpdated.find(n=>n.id===this.currentIdItem);return r.dependents=r.dependents?[...r.dependents,a]:[a],!0}onBeforeRemove(a){return!0}onAfterRemove(a){return console.log("afterRemove: ",a),!0}getChangedItems(){return this.thfGrid?.getChangedItems()||[]}getLabelChangedItems(){return JSON.stringify(this.thfGrid?.getChangedItems()||[],null,2)}finishEditMode(){this.thfGrid.cleanRowActionsMode()}onKeyDown(a,r){r.code==="F9"&&this.thfGrid.showAdditionalHelp(a)}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-editing-fluid-currency-doc"]],viewQuery:function(r,n){if(r&1&&(T(Ti,7),T(wi,5)),r&2){let l;w(l=D())&&(n.poModal=l.first),w(l=D())&&(n.thfGrid=l.first)}},standalone:!1,decls:12,vars:14,consts:[["gridComponent",""],["modal",""],[1,"po-font-text-large-bold"],["p-label","Finaliza modo edi\xE7\xE3o",1,"po-mr-2",3,"p-click"],["p-label","Get itens alterados",3,"p-click","p-disabled"],[3,"t-height","t-selectable","t-single-select","t-items","t-columns","t-grid-row-actions","t-aggregates","t-show-footer-aggregates","t-actions-right","t-sortable"],["p-title","Itens que foram alterados"],["class","code",4,"ngIf"],[3,"htmlCode","tsCode"],[1,"code"]],template:function(r,n){if(r&1){let l=R();i(0,"po-container")(1,"span",2),e(2,"Edi\xE7\xE3o com Padroniza\xE7\xE3o do N\xFAmero de Casas Decimais"),t(),o(3,"po-divider"),i(4,"po-button",3),h("p-click",function(){return p(l),c(n.finishEditMode())}),t(),i(5,"po-button",4),h("p-click",function(){return p(l),c(n.poModal.open())}),t(),o(6,"thf-grid",5,0),i(8,"po-modal",6,1),I(10,Di,3,1,"div",7),t(),o(11,"app-code-accordion-doc",8),t()}if(r&2){let l,E;m(5),s("p-disabled",((l=n.getChangedItems())==null?null:l.length)===0),m(),s("t-height",400)("t-selectable",!0)("t-single-select",!0)("t-items",n.items)("t-columns",n.columnWithItems)("t-grid-row-actions",n.gridRowsActionsWithItems)("t-aggregates",n.aggregatesDescriptor)("t-show-footer-aggregates",!0)("t-actions-right",!0)("t-sortable",!0),m(4),s("ngIf",(E=n.getChangedItems())==null?null:E.length),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[le,H,b,C,ve,F,P],encapsulation:2})}}return d})();var yt=(()=>{class d{constructor(){this.htmlCode=`<thf-grid
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
}`,this.products=[{id:1,status:{value:"active",label:"Ativo"},name:"Smartphone",price:999.99,discount:0},{id:2,status:{value:"inactive",label:"Inativo"},name:"Tablet",price:499.99,discount:50},{id:3,status:{value:"active",label:"Ativo"},name:"Office Chair",price:299.99,discount:10}],this.columns=[{property:"id",label:"ID",editProperties:{disabled:!0}},{property:"status",label:"Status",editProperties:{componentEditable:"combo",options:[{value:"active",label:"Ativo"},{value:"inactive",label:"Inativo"}],fieldLabel:"label",fieldValue:"value",removeInitialFilter:!0,controlValueWithLabel:!0}},{property:"name",label:"Nome do Produto",editProperties:{readonly:a=>a.status==="inactive"}},{property:"price",label:"Pre\xE7o",editProperties:{readonly:!0}},{property:"discount",label:"Desconto (%)",editProperties:{disabled:a=>a.status==="inactive"}}],this.gridRowActions={title:"Produtos",actionEdit:this.onEdit.bind(this),validateField:this.onValidate.bind(this)}}onEdit(a,r){return console.log("Editando produto:",a,"Modo:",r),this.editForm=new Q({id:new S(a.id),name:new S(a.name),price:new S(a.price),discount:new S(a.discount),status:new S(a.status)}),this.editForm}onValidate(a,r){return console.log("onValidateField:",a,r),!0}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-dynamic-properties"]],standalone:!1,decls:6,vars:7,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-items","t-columns","t-grid-row-actions","t-auto-size","t-actions-right"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Edi\xE7\xE3o com Propriedades din\xE2micas"),t(),o(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-items",n.products)("t-columns",n.columns)("t-grid-row-actions",n.gridRowActions)("t-auto-size",!0)("t-actions-right",!0),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[b,C,F,P],encapsulation:2})}}return d})();var ki=["gridComponent"],Ct=(()=>{class d{constructor(){this.htmlCode=`<thf-grid
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
}`,this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome"},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}]},{property:"values",label:"Values"},{property:"number",label:"Number",type:"number"},{property:"datepicker",label:"datepicker"},{property:"otherStatus",label:"Outro Status"},{property:"select",label:"select"},{property:"switch",label:"switch"},{property:"decimal",label:"decimal",type:"currency"},{property:"checkbox",label:"checkbox"},{property:"valuesx",label:"Valuesx"}],this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],valuesx:[1495831666871],otherStatus:[233],number:1,datepicker:"1980-11-01",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],valuesx:[1495831698598],otherStatus:[233],number:2,datepicker:"1980-11-02",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],valuesx:[1495832652942],otherStatus:[3],number:3,datepicker:"1980-11-03",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],valuesx:[1495832683682],otherStatus:[3],number:4,datepicker:"1980-11-04",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],valuesx:[1495833068596],otherStatus:[233],number:5,datepicker:"1980-11-05",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],valuesx:[1495833068597],otherStatus:[233],number:6,datepicker:"1980-11-06",select:"3",switch:!0,decimal:123.45,checkbox:!0}]}ngOnInit(){let a=[],r=this.items[0];for(let n=1;n<=100;n++){let l=Date.now()+n,E=N(G({},r),{id:l+n,name:`${r.name} ${n}${n}`});a.push(E)}this.items=a}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-auto-fit-scroll"]],viewQuery:function(r,n){if(r&1&&T(ki,5),r&2){let l;w(l=D())&&(n.thfGrid=l.first)}},standalone:!1,decls:7,vars:10,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-spacing","extraSmall","t-components-size","small",3,"t-columns","t-items","t-height","t-page-size-virtual","t-virtual-scroll","t-resizable","t-auto-size","t-auto-size-on-scroll"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",1),e(2,"Grid utilizando auto-size e auto-fit-on-scroll"),t(),o(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("t-columns",n.columnWithItems)("t-items",n.items)("t-height",500)("t-page-size-virtual",20)("t-virtual-scroll",!0)("t-resizable",!0)("t-auto-size",!0)("t-auto-size-on-scroll",!0),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[b,C,F,P],encapsulation:2})}}return d})();var Fi=["gridComponent"],Pt=(()=>{class d{constructor(){this.htmlCode=`
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
  `,this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome",editProperties:{required:!0,componentEditable:"input",errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,additionalHelpTooltip:"Informe pelo menos o primeiro nome.",help:"Input text",keydown:this.onKeyDown.bind(this,"name")}},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}],editProperties:{componentEditable:"combo",required:!0,disabledInitFilter:!0,options:[{value:1,label:"Ativo"},{value:2,label:"Inativo"},{value:0,label:"Other"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value",additionalHelpTooltip:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"values",label:"Values",editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!1,errorMessage:"Obrigat\xF3rio",additionalHelpTooltip:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",help:"Input lookup",keydown:this.onKeyDown.bind(this,"values"),controlValueWithLabel:!0}},{property:"number",label:"Number",type:"number",editProperties:{componentEditable:"number",errorMessage:"Number \xE9 obrigat\xF3rio",help:"Input number",additionalHelpTooltip:"Digite um n\xFAmero aqui"}},{property:"datepicker",label:"datepicker",editProperties:{componentEditable:"datepicker",errorMessage:"Datepicker \xE9 obrigat\xF3rio",help:"Entre com a data",additionalHelpTooltip:"Valor do tipo date"}},{property:"otherStatus",label:"Outro Status",editProperties:{componentEditable:"multiselect",options:[{value:123,label:"Ativo"},{value:233,label:"Inativo"},{value:3,label:"Other"}],fieldLabel:"label",fieldValue:"value",errorMessage:"Obrigat\xF3rio",additionalHelpTooltip:"Marque um ou mais status, conforme necess\xE1rio.",help:"status",keydown:this.onKeyDown.bind(this,"otherStatus"),controlValueWithLabel:!0}},{property:"select",label:"select",editProperties:{componentEditable:"select",options:[{value:123,label:"Ativo"},{value:233,label:"Inativo"},{value:3,label:"Other"}],errorMessage:"select \xE9 obrigat\xF3rio",additionalHelpTooltip:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"switch",label:"switch",editProperties:{componentEditable:"switch",hideLabelStatus:!1,additionalHelpTooltip:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"decimal",label:"decimal",type:"currency",editProperties:{componentEditable:"decimal",additionalHelpTooltip:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"checkbox",label:"checkbox",editProperties:{componentEditable:"checkbox",disabled:!1,help:"lorem impsum",additionalHelpTooltip:" ok ok ok"}},{property:"valuesx",label:"Valuesx",editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!0,errorMessage:"Obrigat\xF3rio",additionalHelpTooltip:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",help:"Input lookup",keydown:this.onKeyDown.bind(this,"valuesx"),controlValueWithLabel:!0}}],this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],valuesx:[1495831666871],otherStatus:[233],number:1,datepicker:"1980-11-01",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],valuesx:[1495831698598],otherStatus:[233],number:2,datepicker:"1980-11-02",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],valuesx:[1495832652942],otherStatus:[3],number:3,datepicker:"1980-11-03",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],valuesx:[1495832683682],otherStatus:[3],number:4,datepicker:"1980-11-04",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],valuesx:[1495833068596],otherStatus:[233],number:5,datepicker:"1980-11-05",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],valuesx:[1495833068597],otherStatus:[233],number:6,datepicker:"1980-11-06",select:"3",switch:!0,decimal:123.45,checkbox:!0}],this.itemsUpdated=[]}ngOnInit(){this.editProperties={actionEdit:this.setFormGroup.bind(this)};for(let n=1;n<=600;n++){let l=`property${n}`;this.columnWithItems.push({property:l,label:`Dynamic ${n}`,editProperties:{disabled:!1}})}let a=[],r=this.items[0];for(let n=1;n<=1e4;n++){let l=Date.now()+n,E=N(G({},r),{id:l+n,name:`${r.name} ${n}`});for(let A=1;A<=600;A++)E[`property${A}`]=`Valor ${A}`;a.push(E)}this.items=a,this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!0,actionEdit:(n,l)=>{l==="include"&&!n.id&&(console.log("mode: ",l),n.id=n.$uuidThfIncluded,n.dependents=[],this.currentIdItem=n.id);let E={name:new S(n.name),status:new S(n.status,[L.min(1)]),values:new S(n.values,[L.required]),valuesx:new S(n.values,[L.required]),otherStatus:new S(n.otherStatus),number:new S(n.number),datepicker:new S(n.datepicker),select:new S(n.select),switch:new S(n.switch),decimal:new S(n.decimal),checkbox:new S(n.checkbox)};for(let A=1;A<=600;A++)E[`property${A}`]=new S(n[`property${A}`]);return this.form=new Q(E),this.form},afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this)},this.itemsUpdated=[...this.items]}onKeyDown(a,r){r.code==="F9"&&this.thfGrid.showAdditionalHelp(a)}onBeforeSave(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeSaveSubItems(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeInsert(a){return console.log("before insert new value: ",a),this.itemsUpdated=[...this.itemsUpdated,a],!0}onBeforeInsertSubItems(a){a.id=a.$uuidThfIncluded;let r=this.itemsUpdated.find(n=>n.id===this.currentIdItem);return r.dependents=r.dependents?[...r.dependents,a]:[a],!0}onBeforeRemove(a){return!0}onAfterSave(a){console.log("onAfterSave(new): ",a)}onAfterRemove(a){return console.log("afterRemove: ",a),!0}setFormGroup(a){return this.form=new Q({id:new S(a.id,[L.required]),name:new S(a.name),city:new S(a.city),birthdate:new S(a.birthdate),status:new S(a.status),email:new S(a.email)}),this.form}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-virtual-doc"]],viewQuery:function(r,n){if(r&1&&T(Fi,5),r&2){let l;w(l=D())&&(n.thfGrid=l.first)}},standalone:!1,decls:7,vars:12,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-spacing","small",3,"t-selectable","t-single-select","t-columns","t-items","t-grid-row-actions","t-actions-right","t-auto-size","t-height","t-virtual-columns","t-virtual-scroll"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",1),e(2,"Grid utilizando virtual-columns e virtual-scroll"),t(),o(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("t-selectable",!0)("t-single-select",!0)("t-columns",n.columnWithItems)("t-items",n.items)("t-grid-row-actions",n.gridRowsActionsWithItems)("t-actions-right",!0)("t-auto-size",!1)("t-height",500)("t-virtual-columns",!0)("t-virtual-scroll",!0),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[b,C,F,P],encapsulation:2})}}return d})();var Tt=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid"]],standalone:!1,decls:14,vars:0,consts:[["p-title","THF-Grid","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview","",1,"samples-container"],["labs","",1,"samples-container"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-grid")(2,"div",1),o(3,"app-thf-grid-basic-doc")(4,"app-thf-grid-editing-inline-doc")(5,"app-thf-grid-row-actions-doc")(6,"app-thf-grid-aggregates-doc")(7,"app-thf-grid-editing-fluid-currency-doc")(8,"app-thf-grid-delete-service-doc")(9,"app-thf-grid-virtual-doc")(10,"app-thf-grid-dynamic-properties")(11,"app-thf-grid-auto-fit-scroll"),t(),i(12,"div",2),o(13,"app-thf-grid-labs-doc"),t()()())},dependencies:[ee,mt,xt,St,bt,ht,ft,vt,gt,yt,Ct,Pt],encapsulation:2})}}return d})();function Li(d,k){if(d&1){let a=R();i(0,"div",7)(1,"po-container",8)(2,"po-input",9),g("ngModelChange",function(n){p(a);let l=u();return v(l.label,n)||(l.label=n),c(n)}),t(),i(3,"po-input",10),g("ngModelChange",function(n){p(a);let l=u();return v(l.help,n)||(l.help=n),c(n)}),t(),i(4,"po-input",11),g("ngModelChange",function(n){p(a);let l=u();return v(l.additionalHelpTooltip,n)||(l.additionalHelpTooltip=n),c(n)}),t(),i(5,"po-input",12),g("ngModelChange",function(n){p(a);let l=u();return v(l.placeholder,n)||(l.placeholder=n),c(n)}),t(),i(6,"po-input",13),g("ngModelChange",function(n){p(a);let l=u();return v(l.fieldErrorMessage,n)||(l.fieldErrorMessage=n),c(n)}),t(),i(7,"po-select",14),g("ngModelChange",function(n){p(a);let l=u();return v(l.fieldLabel,n)||(l.fieldLabel=n),c(n)}),t(),i(8,"po-select",15),g("ngModelChange",function(n){p(a);let l=u();return v(l.fieldValue,n)||(l.fieldValue=n),c(n)}),t(),i(9,"po-input",16),g("ngModelChange",function(n){p(a);let l=u();return v(l.fieldFormat,n)||(l.fieldFormat=n),c(n)}),h("p-change",function(n){p(a);let l=u();return c(l.onFieldFormatChange(n))}),t()(),i(10,"po-container",8)(11,"po-checkbox-group",17),g("ngModelChange",function(n){p(a);let l=u();return v(l.columnsName,n)||(l.columnsName=n),c(n)}),h("p-change",function(){p(a);let n=u();return c(n.updateColumns())}),t(),i(12,"po-checkbox-group",18),g("ngModelChange",function(n){p(a);let l=u();return v(l.gridPropertiesName,n)||(l.gridPropertiesName=n),c(n)}),h("p-change",function(){p(a);let n=u();return c(n.updateGridProperties())}),t()(),i(13,"po-container",8)(14,"po-checkbox-group",19),g("ngModelChange",function(n){p(a);let l=u();return v(l.otherProperties,n)||(l.otherProperties=n),c(n)}),h("p-change",function(){p(a);let n=u();return c(n.changeOtherPropertiesOptions())}),t()(),i(15,"po-container",8)(16,"po-radio-group",20),g("ngModelChange",function(n){p(a);let l=u();return v(l.lookupModalSize,n)||(l.lookupModalSize=n),c(n)}),t(),i(17,"po-radio-group",21),g("ngModelChange",function(n){p(a);let l=u();return v(l.searchOnEnter,n)||(l.searchOnEnter=n),c(n)}),t()(),i(18,"po-container",8)(19,"po-radio-group",22),g("ngModelChange",function(n){p(a);let l=u();return v(l.size,n)||(l.size=n),c(n)}),t(),i(20,"po-textarea",23),g("ngModelChange",function(n){p(a);let l=u();return v(l.literals,n)||(l.literals=n),c(n)}),h("p-change-model",function(){p(a);let n=u();return c(n.changeLiterals())}),t(),i(21,"po-textarea",24),g("ngModelChange",function(n){p(a);let l=u();return v(l.filterSearchSelect,n)||(l.filterSearchSelect=n),c(n)}),h("p-change-model",function(){p(a);let n=u();return c(n.changeFilterSearchSelects())}),t(),i(22,"po-textarea",25),g("ngModelChange",function(n){p(a);let l=u();return v(l.keysLabel,n)||(l.keysLabel=n),c(n)}),h("p-change-model",function(){p(a);let n=u();return c(n.changeKeysLabel())}),t()()(),i(23,"div",26)(24,"po-button",27),h("p-click",function(){p(a);let n=u();return c(n.restore())}),t()()}if(d&2){let a=u();m(2),f("ngModel",a.label),m(),f("ngModel",a.help),m(),f("ngModel",a.additionalHelpTooltip),m(),f("ngModel",a.placeholder),m(),f("ngModel",a.fieldErrorMessage),m(),f("ngModel",a.fieldLabel),s("p-options",a.fieldLabelOptions),m(),f("ngModel",a.fieldValue),s("p-options",a.fieldValueOptions),m(),f("ngModel",a.fieldFormat),m(2),f("ngModel",a.columnsName),s("p-columns",4)("p-options",a.columnsOptions),m(),f("ngModel",a.gridPropertiesName),s("p-columns",4)("p-options",a.gridPropertiesOptions),m(2),s("p-columns",4)("p-options",a.otherPropertiesOptions),f("ngModel",a.otherProperties),m(2),s("p-columns",3)("p-options",a.lookupModalSizeOptions),f("ngModel",a.lookupModalSize),m(),f("ngModel",a.searchOnEnter),s("p-options",a.searchOnEnterOptions),m(2),f("ngModel",a.size),s("p-options",a.sizesOptions),m(),f("ngModel",a.literals),m(),f("ngModel",a.filterSearchSelect),m(),f("ngModel",a.keysLabel)}}var wt=(()=>{class d{constructor(){this.htmlCode=`<po-container>
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
  `,this.additionalHelpTooltip="",this.columnsName=["id","name","nickname","email"],this.gridPropertiesName=["selectableEntireLine","showMoreVisible","striped","sortable","virtualScroll"],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.event="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.help="",this.keysLabel="",this.label="",this.literals="",this.fieldErrorMessage="",this.otherProperties=[],this.placeholder="",this.lookupModalSize="lg",this.size="medium",this.searchOnEnter="equal",this.columns=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail"}],this.lookupModalSizeOptions=[{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"},{label:"xl",value:"xl"},{label:"auto",value:"auto"}],this.otherPropertiesOptions=[{label:"Auto Height",value:"autoHeight"},{label:"Clean",value:"clean",disabled:!1},{label:"Disabled",value:"disabled"},{label:"Multiple",value:"multiple"},{label:"No Autocomplete",value:"noAutoComplete"},{label:"Optional",value:"optional",disabled:!1},{label:"Required",value:"required"},{label:"Show Required",value:"showRequired",disabled:!0},{value:"fieldErrorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}],this.searchOnEnterOptions=[{label:"equal",value:"equal"},{label:"include",value:"include"}],this.sizesOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.gridPropertiesOptions=[{value:"autoSize",label:"AutoSize"},{value:"autoSizeOnScroll",label:"AutoSizeOnScroll"},{value:"draggable",label:"Draggable"},{value:"groupable",label:"Groupable"},{value:"hideSelectAll",label:"HideSelectAll"},{value:"resizable",label:"Resizable"},{value:"selectableEntireLine",label:"SelectableEntireLine"},{value:"striped",label:"Striped"},{value:"showDraggableIcon",label:"ShowDraggableIcon"},{value:"showMoreDisabled",label:"ShowMoreDisabled"},{value:"showMoreVisible",label:"ShowMoreVisible"},{value:"sortable",label:"Sortable"},{value:"virtualScroll",label:"VirtualScroll"}],this.columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Nome"},{value:"nickname",label:"Apelido"},{value:"email",label:"E-mail"}],this.fieldLabelOptions=[{value:"name",label:"Name"},...this.columnsOptions],this.fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions],this.columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Nome"},nickname:{property:"nickname",label:"Apelido"},email:{property:"email",label:"E-mail"}}}ngOnInit(){this.restore()}changeEvent(a){this.event=a}changeFilterSearchSelects(){try{this.customFilterSearchSelect=JSON.parse(this.filterSearchSelect)}catch{this.customFilterSearchSelect=[]}}changeKeysLabel(){try{this.customKeysLabel=JSON.parse(this.keysLabel)}catch{this.customKeysLabel=[]}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals={}}}changeOtherPropertiesOptions(){let a=this.otherProperties.includes("multiple"),r=this.otherProperties.includes("required");this.otherPropertiesOptions[1].disabled=a,this.otherPropertiesOptions[7].disabled=!r,this.otherPropertiesOptions[5].disabled=r,this.otherPropertiesOptions=[...this.otherPropertiesOptions]}onFieldFormatChange(a){try{this.fieldFormat=JSON.parse(a)}catch{this.fieldFormat=void 0}}restore(){this.additionalHelpTooltip="",this.columnsName=["id","name","nickname","email"],this.gridPropertiesName=["selectableEntireLine","showMoreVisible","striped","sortable","virtualScroll"],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.event="",this.fieldErrorMessage="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.help="",this.keysLabel="",this.label="",this.literals="",this.lookupSingle=void 0,this.otherProperties=[],this.placeholder="",this.fieldFormat=void 0,this.size="medium",this.searchOnEnter="equal",this.changeFilterSearchSelects(),this.changeKeysLabel(),this.changeLiterals(),this.changeOtherPropertiesOptions(),this.updateColumns(),this.updateGridProperties(),this.lookupModalSize="lg"}updateColumns(){this.columns=[],this.columnsName.forEach(a=>this.columns.push(this.columnsDefinition[a]))}updateGridProperties(){this.gridProperties={},this.gridPropertiesName.forEach(a=>{this.gridProperties=N(G({},this.gridProperties),{[a]:!0})}),this.gridPropertiesName.includes("sortable")||(this.gridProperties=N(G({},this.gridProperties),{sortable:!1})),this.gridPropertiesName.includes("striped")||(this.gridProperties=N(G({},this.gridProperties),{striped:!1})),this.gridPropertiesName.includes("selectableEntireLine")||(this.gridProperties=N(G({},this.gridProperties),{selectableEntireLine:!1})),this.gridPropertiesName.includes("showMoreVisible")||(this.gridProperties=N(G({},this.gridProperties),{showMoreVisible:!1}))}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-labs-doc"]],standalone:!1,decls:10,vars:33,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookup","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-change","t-error","t-selected","t-focus","t-keydown","t-rows-selected","ngModelChange","t-additional-help-tooltip","t-auto-height","t-clean","t-columns","t-disabled","t-error-limit","t-field-error-message","t-field-format","t-field-label","t-field-value","t-filter-search-select","t-grid-properties","t-help","t-keys-label","t-label","t-literals","t-modal-size","t-multiple","t-no-autocomplete","t-optional","t-placeholder","t-required","t-show-required","t-search-on-enter","t-size","t-label-text-wrap","ngModel"],[1,"po-mt-1",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","columnsName","p-label","Columns",3,"ngModelChange","p-change","ngModel","p-columns","p-options"],["name","gridPropertiesName","p-label","Grid Properties",3,"ngModelChange","p-change","ngModel","p-columns","p-options"],["name","otherProperties","p-label","Other Properties",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","lookupModalSize","p-label","Modal Size",1,"po-lg-6",3,"ngModelChange","p-columns","p-options","ngModel"],["name","searchOnEnter","p-label","SearchOnEnter",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","literals","p-label","Literals","p-help",'{ "modalTitle": "Busca avan\xE7ada" }',1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","filterSearchSelect","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]',"p-label","Filter Search Select",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","keysLabel","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]',"p-label","Keys Label",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],[1,"po-row"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let l=R();i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),o(3,"po-divider",2),i(4,"thf-lookup",3),h("t-change",function(){return p(l),c(n.changeEvent("t-change"))})("t-error",function(){return p(l),c(n.changeEvent("t-error"))})("t-selected",function(){return p(l),c(n.changeEvent("t-selected"))})("t-focus",function(){return p(l),c(n.changeEvent("t-focus"))})("t-keydown",function(){return p(l),c(n.changeEvent("t-keydown"))})("t-rows-selected",function(){return p(l),c(n.changeEvent("t-rows-selected"))}),g("ngModelChange",function(A){return p(l),v(n.lookupSingle,A)||(n.lookupSingle=A),c(A)}),t(),i(5,"po-container",4),o(6,"po-info",5),t(),o(7,"app-code-accordion-doc",6),I(8,Li,25,29,"ng-template",null,0,J),t()}if(r&2){let l=W(9);m(4),s("t-additional-help-tooltip",n.additionalHelpTooltip)("t-auto-height",n.otherProperties.includes("autoHeight"))("t-clean",n.otherProperties.includes("clean"))("t-columns",n.columns)("t-disabled",n.otherProperties.includes("disabled"))("t-error-limit",n.otherProperties.includes("fieldErrorLimit"))("t-field-error-message",n.fieldErrorMessage)("t-field-format",n.fieldFormat)("t-field-label",n.fieldLabel)("t-field-value",n.fieldValue)("t-field-error-message",n.fieldErrorMessage)("t-filter-search-select",n.customFilterSearchSelect)("t-grid-properties",n.gridProperties)("t-help",n.help)("t-keys-label",n.customKeysLabel)("t-label",n.label)("t-literals",n.customLiterals)("t-modal-size",n.lookupModalSize)("t-multiple",n.otherProperties.includes("multiple"))("t-no-autocomplete",n.otherProperties.includes("noAutoComplete"))("t-optional",n.otherProperties.includes("optional"))("t-placeholder",n.placeholder)("t-required",n.otherProperties.includes("required"))("t-show-required",n.otherProperties.includes("showRequired"))("t-search-on-enter",n.searchOnEnter)("t-size",n.size)("t-label-text-wrap",n.otherProperties==null?null:n.otherProperties.includes("labelTextWrap")),f("ngModel",n.lookupSingle),m(2),s("p-value",n.event),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[B,X,H,b,C,fe,de,ge,ot,ye,Y,se,P],styles:[".po-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:16px}.containerProperties[_ngcontent-%COMP%]{flex:1 1 100%}"]})}}return d})();var Dt=(()=>{class d{constructor(){this.htmlCode=`<form [formGroup]="formMission">
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
  `,this.formMission=new Q({lookup2:new S(["1495831666871"])}),this.gridProperties={autoSize:!0,autoSizeOnScroll:!0,resizable:!0,groupable:!0,draggable:!0,hideSelectAll:!0},this.columns=[{property:"name",label:"Name"},{property:"nickname",label:"Nickname"},{property:"email",label:"Email"},{property:"id",label:"Id"}],this.keysLabel=[{label:"Nome",value:"name"},{label:"Email",value:"email"}],this.filterSelect=[{label:"Nome",value:"name"},{label:"Nickname",value:"nickname"},{label:"Email",value:"email"}]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-form-doc"]],standalone:!1,decls:7,vars:8,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],[3,"formGroup"],["formControlName","lookup2","name","lookupMultiple","t-field-label","name","t-field-value","value","t-filter-service","https://po-sample-api.onrender.com/v1/heroes","t-key-last-search","lookupMultiple","t-label","Her\xF3is","t-placeholder","Placeholder multiple",3,"t-columns","t-grid-properties","t-keys-label","t-multiple","t-filter-search-select"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Multiple Reactive Form"),t(),o(3,"po-divider",1),i(4,"form",2),o(5,"thf-lookup",3),t(),o(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("formGroup",n.formMission),m(),s("t-columns",n.columns)("t-grid-properties",n.gridProperties)("t-keys-label",n.keysLabel)("t-multiple",!0)("t-filter-search-select",n.filterSelect),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[be,B,Se,Be,He,b,C,se,P],encapsulation:2})}}return d})();var At=(()=>{class d{constructor(){this.htmlCode=`<thf-lookup
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
export class ThfLookupBasicDocComponent {}`}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-basic-doc"]],standalone:!1,decls:7,vars:2,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupSingle","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Single"),t(),o(3,"po-divider",1),i(4,"form"),o(5,"thf-lookup",2),t(),o(6,"app-code-accordion-doc",3),t()),r&2&&(m(6),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[be,Se,Ge,b,C,se,P],encapsulation:2})}}return d})();var qt=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup"]],standalone:!1,decls:8,vars:0,consts:[["p-title","THF-Lookup","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],[1,"samples-container"],["labs","",1,"samples-container"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-lookup")(2,"div",1)(3,"div",2),o(4,"app-thf-lookup-basic-doc")(5,"app-thf-lookup-form-doc"),t()(),i(6,"div",3),o(7,"app-thf-lookup-labs-doc"),t()()())},dependencies:[ee,st,wt,Dt,At],encapsulation:2})}}return d})();var Vi=["splitter"],zi=["paneForm"],Oi=()=>({label:"horizontal",value:"horizontal"}),Qi=()=>({label:"vertical",value:"vertical"}),Gi=(d,k)=>[d,k];function Ni(d,k){if(d&1){let a=R();i(0,"thf-splitter-pane",10),h("t-size-change",function(){p(a);let n=u();return c(n.changeEvent("(t-size-change)"))}),i(1,"div",11)(2,"po-widget",12),h("p-primary-action",function(){let n=p(a).index,l=u();return c(l.removePane(n))}),i(3,"div",13),e(4),t()()()()}if(d&2){let a=k.$implicit,r=k.index;s("t-resizable",a.resizable)("t-scrollable",a.scrollable)("t-size",a.size),m(4),Ie(" Pane Content ",r," ")}}function Bi(d,k){if(d&1){let a=R();i(0,"div",14)(1,"po-container",15),o(2,"po-dynamic-form",16,2),i(4,"div",17)(5,"po-button",18),h("p-click",function(){p(a);let n=W(3),l=u();return c(l.addPane(n.form.value))}),t()()(),i(6,"po-container",15)(7,"po-switch",19),g("ngModelChange",function(n){p(a);let l=u();return v(l.disabled,n)||(l.disabled=n),c(n)}),t(),i(8,"po-radio-group",20),g("ngModelChange",function(n){p(a);let l=u();return v(l.orientation,n)||(l.orientation=n),c(n)}),t()()(),i(9,"div",17)(10,"po-button",21),h("p-click",function(){p(a);let n=u();return c(n.restore())}),t()()}if(d&2){let a=W(3),r=u();m(2),s("p-fields",r.panesFieldsForm)("p-value",r.pane),m(3),s("p-disabled",a.form.invalid),m(2),f("ngModel",r.disabled),m(),f("ngModel",r.orientation),s("p-options",Ee(8,Gi,K(6,Oi),K(7,Qi)))}}var kt=(()=>{class d{constructor(){this.event="",this.panes=[],this.pane={},this.disabled=!1,this.orientation="horizontal",this.panesFieldsForm=[{property:"size",gridColumns:6,type:"number",maxValue:100,minValue:0,maxLength:3,step:5,help:"Valor em porc (%)"},{property:"scrollable",type:"boolean",gridColumns:3}],this.htmlCode=`<thf-splitter
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
}`}ngOnInit(){this.restore()}changeEvent(a){this.event=a}restore(){this.event="",this.panes=[],this.pane={size:"50",scrollable:!1}}addPane(a){let r=Object.assign({},a);r.size+="%",this.panes.push(r),this.pane={size:"50",scrollable:!1}}removePane(a){this.panes.splice(a,1)}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-labs-doc"]],viewQuery:function(r,n){if(r&1&&(T(Vi,7),T(zi,7)),r&2){let l;w(l=D())&&(n.splitter=l.first),w(l=D())&&(n.paneForm=l.first)}},standalone:!1,decls:12,vars:8,consts:[["splitter",""],["customTemplate",""],["paneForm",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","splitter",3,"t-layout-change","t-disabled","t-orientation"],[3,"t-resizable","t-scrollable","t-size","t-size-change",4,"ngFor","ngForOf"],[1,"po-mt-1",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[3,"t-size-change","t-resizable","t-scrollable","t-size"],[1,"po-m-2"],["p-title","Title Pane","p-primary-label","Close",3,"p-primary-action"],[1,"po-font-subtitle","po-text-center"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],[3,"p-fields","p-value"],[1,"po-row"],["p-label","Add Pane",1,"po-md-3",3,"p-click","p-disabled"],["name","disabled","p-label","Disabled",1,"po-md-6",3,"ngModelChange","ngModel"],["name","orientation","p-label","orientation",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let l=R();i(0,"po-container")(1,"span",3),e(2,"Labs"),t(),o(3,"po-divider",4),i(4,"thf-splitter",5,0),h("t-layout-change",function(){return p(l),c(n.changeEvent("(t-layout-change)"))}),I(6,Ni,5,4,"thf-splitter-pane",6),t(),i(7,"po-container",7),o(8,"po-info",8),t(),o(9,"app-code-accordion-doc",9),I(10,Bi,11,11,"ng-template",null,1,J),t()}if(r&2){let l=W(11);m(4),s("t-disabled",n.disabled)("t-orientation",n.orientation),m(2),s("ngForOf",n.panes),m(2),s("p-value",n.event),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[Ve,B,X,H,b,C,at,de,et,Y,me,ne,ie,P],encapsulation:2})}}return d})();var Wi=["gridComponent"];function Ui(d,k){if(d&1){let a=R();i(0,"thf-splitter-pane",9)(1,"po-widget",11),h("p-primary-action",function(){p(a);let n=u();return c(n.closePane())}),i(2,"div",12),o(3,"po-info",13),t(),i(4,"div",12),o(5,"po-info",14),t(),i(6,"div",12),o(7,"po-info",15),t(),i(8,"div",12),o(9,"po-info",16),t()()()}if(d&2){let a=u();s("t-size","30%"),m(3),s("p-value",a.selectedHero.name),m(2),s("p-value",a.selectedHero.nickname),m(2),s("p-value",a.selectedHero.email),m(2),s("p-value",a.selectedHero.city)}}var _t=(()=>{class d{constructor(a,r){this.router=a,this.changeDetector=r,this.showHeroPane=!1,this.selectedHero=null,this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",email:"hulksmash@marvel.com",status:1,city:"Lages"},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",email:"spvalueerman@marvel.com",status:2,city:"Brusque"},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,email:"goku@dbz.com",city:"Guarulhos"},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,email:"hawkeye@marvel.com",city:"Campinas"},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,email:"nickfuckingfury@marvel.com",city:null},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,email:"gohan@dbz.com",city:null}],this.column=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}]},{property:"city",label:"Cidade"}],this.htmlCode=`  <thf-splitter t-disabled>
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
}`}ngAfterViewInit(){this.grid.selectRowItem(this.items[0]),this.selectItem(this.items[0]),this.changeDetector.detectChanges()}openExternalLink(){window.open("https://github.com/po-ui/po-angular")}selectItem(a){if(!a){this.closePane();return}this.selectedHero={id:a.id||"",name:a.name||"",nickname:a.nickname||"",email:a.email||"",city:a.city||""},this.showHeroPane=!0}closePane(){this.showHeroPane=!1,this.selectedHero=null,this.grid.unselectRows()}static{this.\u0275fac=function(r){return new(r||d)(j($e),j(Me))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-grid-doc"]],viewQuery:function(r,n){if(r&1&&T(Wi,7),r&2){let l;w(l=D())&&(n.grid=l.first)}},standalone:!1,decls:15,vars:9,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["t-disabled",""],[1,"po-lg-12","po-pt-2","po-pb-2"],[1,"po-row",2,"justify-content","space-between","align-items","center"],[1,"po-font-subtitle"],["p-icon","an an-star","p-label","Star",3,"p-click"],[3,"t-selected","t-unselected","t-height","t-selectable","t-single-select","t-items","t-columns","t-sortable"],[3,"t-size"],[3,"htmlCode","tsCode"],["p-title","Her\xF3i Selecionado","p-primary-label","Fechar Painel",3,"p-primary-action"],[1,"po-row"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Apelido",1,"po-md-12",3,"p-value"],["p-label","Contato",1,"po-md-12",3,"p-value"],["p-label","Reside em",1,"po-md-12",3,"p-value"]],template:function(r,n){if(r&1){let l=R();i(0,"po-container")(1,"span",1),e(2,"Divis\xE3o din\xE2mica"),t(),o(3,"po-divider",2),i(4,"thf-splitter",3)(5,"thf-splitter-pane")(6,"div",4)(7,"div",5)(8,"p",6),e(9,"Controle de Her\xF3is"),t(),i(10,"po-button",7),h("p-click",function(){return p(l),c(n.openExternalLink())}),t()(),i(11,"thf-grid",8,0),h("t-selected",function(A){return p(l),c(n.selectItem(A))})("t-unselected",function(){return p(l),c(n.closePane())}),t()()(),I(13,Ui,10,5,"thf-splitter-pane",9),t(),o(14,"app-code-accordion-doc",10),t()}r&2&&(m(11),s("t-height",300)("t-selectable",!0)("t-single-select",!0)("t-items",n.items)("t-columns",n.column)("t-sortable",!0),m(2),Fe(n.showHeroPane?13:-1),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[H,b,C,Y,me,F,ne,ie,P],encapsulation:2})}}return d})();var Ft=(()=>{class d{constructor(){this.optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7},rendererOption:"svg"},this.optionsPie={rendererOption:"svg"},this.categoriesColumn=["coffee","chocolate","tea"],this.evolutionOfCoffeeAndSomeCompetitors=[{label:"2014",data:[91,40,42],type:ce.Column},{label:"2017",data:[93,52,18],type:ce.Column},{label:"2020",data:[95,21,-17],type:ce.Column},{label:"Coffee consumption in Brazil",data:[34,27,79],type:ce.Line,color:"color-10"}],this.coffeeProduction=[{label:"Brazil",data:2796,tooltip:"Brazil (South America)",color:"color-10"},{label:"Vietnam",data:1076,tooltip:"Vietnam (Asia)"},{label:"Colombia",data:688,tooltip:"Colombia (South America)"},{label:"Indonesia",data:682,tooltip:"Indonesia (Asia/Oceania)"},{label:"Peru",data:273,tooltip:"Peru (South America)"}],this.htmlCode=`<thf-splitter>
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
`}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-chart-doc"]],standalone:!1,decls:12,vars:8,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["p-title","Chart type column with line"],["p-title","Evolution of coffee and some competitors - %",3,"p-options","p-categories","p-series"],[3,"t-size"],["p-title","Chart type pizza"],["p-title","Top 5 coffee producing countries (in tons)",3,"p-series","p-options"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Divis\xE3o com gr\xE1ficos din\xE2micos"),t(),o(3,"po-divider",1),i(4,"thf-splitter")(5,"thf-splitter-pane")(6,"po-widget",2),o(7,"po-chart",3),t()(),i(8,"thf-splitter-pane",4)(9,"po-widget",5),o(10,"po-chart",6),t()()(),o(11,"app-code-accordion-doc",7),t()),r&2&&(m(7),s("p-options",n.optionsColumn)("p-categories",n.categoriesColumn)("p-series",n.evolutionOfCoffeeAndSomeCompetitors),m(),s("t-size","50%"),m(2),s("p-series",n.coffeeProduction)("p-options",n.optionsPie),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[Ye,b,C,me,ne,ie,P],encapsulation:2})}}return d})();var It=(()=>{class d{constructor(){this.htmlCode=`<thf-splitter>
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
  `}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-basic-doc"]],standalone:!1,decls:17,vars:3,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-orientation"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic"),t(),o(3,"po-divider",1),i(4,"thf-splitter")(5,"thf-splitter-pane")(6,"h4"),e(7,"Pane 1"),t()(),i(8,"thf-splitter-pane")(9,"thf-splitter",2)(10,"thf-splitter-pane")(11,"h4"),e(12,"Pane 2"),t()(),i(13,"thf-splitter-pane")(14,"h4"),e(15,"Pane 3"),t()()()()(),o(16,"app-code-accordion-doc",3),t()),r&2&&(m(9),s("t-orientation","vertical"),m(7),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[b,C,ne,ie,P],encapsulation:2})}}return d})();var Zi=()=>[_t,Ft,It];function Xi(d,k){d&1&&(i(0,"div",3),o(1,"app-thf-splitter-basic-doc")(2,"app-thf-splitter-grid-doc")(3,"app-thf-splitter-chart-doc"),t())}function Yi(d,k){d&1&&o(0,"po-loading-overlay",4),d&2&&s("p-screen-lock",!1)}var Lt=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter"]],standalone:!1,decls:9,vars:0,consts:[["p-title","THF-Splitter","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],["labs","",1,"samples-container"],[1,"samples-container"],[3,"p-screen-lock"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-splitter")(2,"div",1),I(3,Xi,4,0)(4,Yi,1,1),ke(5,3,Zi,null,4),_e(),t(),i(7,"div",2),o(8,"app-thf-splitter-labs-doc"),t()()())},dependencies:[Ze,ee,ct,kt],encapsulation:2})}}return d})();var Rt=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-pane"]],standalone:!1,decls:2,vars:0,consts:[["p-title","THF-Splitter-Pane","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"]],template:function(r,n){r&1&&(i(0,"po-page-default",0),o(1,"api-thf-splitter-pane"),t())},dependencies:[ee,pt],encapsulation:2})}}return d})();var en=[{path:"thf-grid",component:Tt},{path:"thf-lookup",component:qt},{path:"thf-splitter",component:Lt},{path:"thf-splitter-pane",component:Rt}],Mt=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275mod=re({type:d})}static{this.\u0275inj=ae({imports:[Te.forChild(en),Te]})}}return d})();var Kd=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275mod=re({type:d})}static{this.\u0275inj=ae({imports:[xe,We,Ue,Ce,lt,dt,ut,Mt,Je]})}}return d})();export{Kd as DocumentationModule};
