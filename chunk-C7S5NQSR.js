import{a as nt}from"./chunk-2GQVLNE3.js";import{a as He,b as We}from"./chunk-AJCCVM4Y.js";import{a as ee,b as me,c as F,d as X,e as Y,g as ot}from"./chunk-EYEA6GL7.js";import"./chunk-ZCFRB5S7.js";import"./chunk-RNGOVNFY.js";import{a as at}from"./chunk-DDJIZQOV.js";import{$ as p,Af as it,Da as x,Db as f,Ea as oe,Eb as h,Fb as v,Fd as be,Gb as _e,Gc as ze,Hb as se,Ia as _,Ic as j,Jb as Ie,Jd as B,Ka as Ae,Kc as N,Kd as L,La as qe,Lc as xe,Lf as $,Mc as Q,Na as s,Nc as Oe,Oc as S,Pc as K,Qc as Se,Qd as Ke,Tc as Qe,Tf as Z,U as we,Ua as ke,Uc as Ge,Uf as z,V as ne,Wb as ae,X as De,Xc as Ne,Xf as de,Ya as i,Yc as Be,Ye as Ze,Za as t,Zb as Le,Ze as Xe,_a as o,_f as ge,a as te,aa as c,ae as G,b as ie,cb as M,ce as Je,fc as Re,fe as pe,gc as Me,ge as $e,hc as re,he as b,ib as g,ja as H,jb as E,jf as Ye,kb as W,lb as y,nf as et,oc as je,od as Ue,pe as fe,qb as T,qd as Ce,qe as le,rb as w,sa as m,sb as D,sf as tt,tf as ve,uc as Ee,ud as C,ue as he,wb as U,xa as R,xb as e,yb as ue,yf as J,zb as Fe,zc as Ve}from"./chunk-NE4XQCMZ.js";var Lt=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","enums-before",""]],[["","enums-after",""]],[["","templates-before",""]],[["","templates-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],Rt=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[enums-before]","[enums-after]","[templates-before]","[templates-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],rt=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(u=>{let q=u.querySelector(".po-tab-button-label");q&&q?.textContent?.trim().toLowerCase()===a&&u.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(u=>!u.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(R(H))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-grid"]],viewQuery:function(r,n){if(r&1&&(T(z,5),T(L,5)),r&2){let l;w(l=D())&&(n.tabs=l.first),w(l=D())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:Rt,decls:6079,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","Function"],[1,"language-html"],["pan","",1,"docs-api-property-type","Array<ThfTableAction>"],["href","/guides/icons"],[1,"language-typescript"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<ThfAggregateDescriptor>"],["p-type","success","p-value","since 19.19.0"],["pan","",1,"docs-api-property-type","Array<ThfGridColumn>"],[1,"docs-api-deprecated-marker"],["p-type","success","p-value","since 19.8.0"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDropdownAction>"],["pan","",1,"docs-api-property-type","ThfGridEditProperties"],["pan","",1,"docs-api-property-type","Array<PoPageDynamicSearchFilters>"],["pan","",1,"docs-api-property-type","'basic'"],["pan","",1,"docs-api-property-type","'service'"],["pan","",1,"docs-api-property-type","ThfGridRowActions"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","null"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","ThfGridLiterals"],["pan","",1,"docs-api-property-type","(()","=>","ThfGridOptions)"],["pan","",1,"docs-api-property-type","Array<ThfGridOptionPaging>"],[1,"language-json"],["pan","",1,"docs-api-property-type","ThfGridDeleteService"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","Array<ThfGridColumnSort>"],["p-label","M\xE9todos"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],["href","https://tdn.totvs.com/pages/releaseview.action?pageId=871520382"],["pan","",1,"docs-api-property-type","{","key:","value","}"],["p-label","Interfaces"],["p-label","ThfTableAction"],["href","https://po-ui.io/icons"],["p-label","ThfAggregateDescriptor"],["pan","",1,"docs-api-property-type","'sum'"],["pan","",1,"docs-api-property-type","'average'"],["pan","",1,"docs-api-property-type","'count'"],["pan","",1,"docs-api-property-type","'min'"],["pan","",1,"docs-api-property-type","'max'"],["p-label","ThfGridColumnSort"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["p-label","ThfGridColumn"],["pan","",1,"docs-api-property-type","PoTableBoolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","PoTableDetail"],["pan","",1,"docs-api-property-type","CustomEditProperties"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnIcon>"],["href","documentation/po-table#tableColumnIcon"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["pan","",1,"docs-api-property-type","Array<PoTableSubtitleColumn>"],["href","/documentation/po-table-cell-template"],["href","/documentation/po-table-column-template"],["p-label","CustomEditProperties"],["href","https://po-ui.io/documentation/po-dynamic-form"],["pan","",1,"docs-api-property-type","'input'"],["pan","",1,"docs-api-property-type","'number'"],["pan","",1,"docs-api-property-type","'select'"],["pan","",1,"docs-api-property-type","'datepicker'"],["pan","",1,"docs-api-property-type","'switch'"],["pan","",1,"docs-api-property-type","'combo'"],["pan","",1,"docs-api-property-type","'multiselect'"],["pan","",1,"docs-api-property-type","'decimal'"],["pan","",1,"docs-api-property-type","'checkbox'"],["pan","",1,"docs-api-property-type","'lookup'"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["pan","",1,"docs-api-property-type","((rowData:","any,","column?:","ThfGridColumn)","=>","boolean)"],["pan","",1,"docs-api-property-type","((item:","any)","=>","string)"],["pan","",1,"docs-api-property-type","Array<ThfLookupFilterSearchSelect>"],["pan","",1,"docs-api-property-type","Array<ThfLookupKeysLabel>"],["pan","",1,"docs-api-property-type","(value:","any)","=>","void"],["pan","",1,"docs-api-property-type","(model:","any)","=>","void"],["pan","",1,"docs-api-property-type","(error:","HttpErrorResponse)","=>","void"],["pan","",1,"docs-api-property-type","(selection:","any"],["pan","",1,"docs-api-property-type","Array<any>)","=>","void"],["pan","",1,"docs-api-property-type","'sm'"],["pan","",1,"docs-api-property-type","'md'"],["pan","",1,"docs-api-property-type","'lg'"],["pan","",1,"docs-api-property-type","'xl'"],["pan","",1,"docs-api-property-type","'auto'"],["p-label","ThfGridDeleteService"],["p-label","ThfGridEditProperties"],["pan","",1,"docs-api-property-type","(param:","any)","=>","FormGroup"],["pan","",1,"docs-api-property-type","(data:","any,","columnProperty:","string)","=>","FormGroup"],["p-label","ThfGridLiterals"],["p-label","ThfGridOptionPaging"],["p-label","ThfGridOptions"],["p-label","ThfGridRowActions"],["pan","",1,"docs-api-property-type","(param:","any,","mode:","'edit'"],["pan","",1,"docs-api-property-type","'include')","=>","FormGroup"],["pan","",1,"docs-api-property-type","Observable<FormGroup>"],["pan","",1,"docs-api-property-type","(row:","any)","=>","void"],["pan","",1,"docs-api-property-type","(row:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","Observable<boolean>"],["pan","",1,"docs-api-property-type","(updatedRow:","any,","originalRow:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","(updatedRows:","Array<any>)","=>","void"],["pan","",1,"docs-api-property-type","Array<ThfGridEditModeActionType>"],["pan","",1,"docs-api-property-type","(updatedField:","any,","columnProperty:","string)","=>","boolean"],["p-label","Enums"],["p-label","ThfColumnSpacing"],["p-label","ThfGridEditModeActionType"],["p-label","Templates"],["p-label","ThfGridCellTemplateDirective"],["p-label","ThfGridColumnTemplateDirective"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(W(Lt),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),y(4),t(),i(5,"po-tab",4),y(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfGridComponent"),t()(),i(16,"div",10)(17,"p"),e(18,`O grid foi criado para que voc\xEA tenha um controle de alto desempenho, oferecendo uma performance extremamente r\xE1pida,
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
}`),t()()()(),i(596,"tr",19)(597,"td",20)(598,"div",32)(599,"span",33),e(600," (t-custom-filter)"),o(601,"br"),t()()(),i(602,"td",23)(603,"code",34),e(604,"EventEmitter"),t()(),i(605,"td",25),e(606,"-"),t(),i(607,"td",26)(608,"em")(609,"strong"),e(610,"(opcional)"),t()(),i(611,"p"),e(612,"Evento disparado ao clicar no menu Filtros."),t()()(),i(613,"tr",19)(614,"td",20)(615,"div",32)(616,"span",33),e(617," (t-delete-item)"),o(618,"br"),t()()(),i(619,"td",23)(620,"code",34),e(621,"EventEmitter"),t()(),i(622,"td",25),e(623,"-"),t(),i(624,"td",26)(625,"em")(626,"strong"),e(627,"(opcional)"),t()(),i(628,"p"),e(629,"Evento disparado ao excluir um item. Retorna o item exclu\xEDdo."),t()()(),i(630,"tr",19)(631,"td",20)(632,"div",21)(633,"span",22),e(634,"t-disabled-include-button"),o(635,"br"),t()()(),i(636,"td",23)(637,"code",24),e(638,"boolean"),t()(),i(639,"td",25)(640,"p")(641,"code"),e(642,"false"),t()()(),i(643,"td",26)(644,"em")(645,"strong"),e(646,"(opcional)"),t()(),i(647,"p"),e(648,`Desabilita o bot\xE3o de Incluir. Ao definir como true, o bot\xE3o ser\xE1 desabilitado.
Ideal para cen\xE1rios onde a inclus\xE3o de novas linhas deve ser restrita.`),t()()(),i(649,"tr",19)(650,"td",20)(651,"div",21)(652,"span",22),e(653,"t-draggable"),o(654,"br"),t()()(),i(655,"td",23)(656,"code",24),e(657,"boolean"),t()(),i(658,"td",25)(659,"p")(660,"code"),e(661,"false"),t()()(),i(662,"td",26)(663,"em")(664,"strong"),e(665,"(opcional)"),t()(),i(666,"p"),e(667,"Habilita o Drag and Drop nas colunas."),t()()(),i(668,"tr",19)(669,"td",20)(670,"div",21)(671,"span",22),e(672,"t-edit-properties"),o(673,"br"),t()()(),i(674,"td",23)(675,"code",43),e(676,"ThfGridEditProperties"),t()(),i(677,"td",25),e(678,"-"),t(),i(679,"td",26)(680,"em")(681,"strong"),e(682,"(opcional)"),t()(),i(683,"p"),e(684,"Permite configurar a edi\xE7\xE3o em linha, implementando a interface "),i(685,"strong"),e(686,"ThfGridEditProperties"),t(),e(687,`.
Exemplo de uso na aba Interfaces >> ThfGridEditProperties.`),t(),i(688,"blockquote")(689,"p"),e(690,"Para garantir o correto funcionamento da conclus\xE3o da edi\xE7\xE3o dos dados, \xE9 necess\xE1rio que os dados contenham uma coluna de ID ou que pelo menos uma coluna tenha a propriedade KEY definida como true."),t()()()(),i(691,"tr",19)(692,"td",20)(693,"div",32)(694,"span",33),e(695," (t-change-page-size)"),o(696,"br"),t()()(),i(697,"td",23)(698,"code",34),e(699,"EventEmitter"),t()(),i(700,"td",25),e(701,"-"),t(),i(702,"td",26)(703,"em")(704,"strong"),e(705,"(opcional)"),t()(),i(706,"p"),e(707,"Evento disparado ao alterar a quantidade de itens por p\xE1gina. Retorna um objeto com o page-size atual."),t()()(),i(708,"tr",19)(709,"td",20)(710,"div",21)(711,"span",22),e(712,"t-fields"),o(713,"br"),t()()(),i(714,"td",23)(715,"code",44),e(716,"Array<PoPageDynamicSearchFilters>"),t()(),i(717,"td",25),e(718,"-"),t(),i(719,"td",26)(720,"em")(721,"strong"),e(722,"(opcional)"),t()(),i(723,"p"),e(724,"Permite definir os campos filtr\xE1veis na janela 'Filtros', implementando a interface "),i(725,"strong"),e(726,"PoPageDynamicSearchFilters"),t(),e(727,"."),t(),i(728,"pre")(729,"code",28),e(730,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-fields]="customFields"
></thf-grid>`),t()(),i(731,"pre")(732,"code",31),e(733,"customFields: Array<PoPageDynamicSearchFilters> = [{ property: 'name', required: true, showRequired: true }]"),t()()()(),i(734,"tr",19)(735,"td",20)(736,"div",21)(737,"span",22),e(738,"t-filter-input-mode"),o(739,"br"),t()()(),i(740,"td",23)(741,"code",45),e(742,"'basic' "),t(),i(743,"code",46),e(744," 'service'"),t()(),i(745,"td",25)(746,"p")(747,"code"),e(748,"basic"),t()()(),i(749,"td",26)(750,"em")(751,"strong"),e(752,"(opcional)"),t()(),i(753,"p"),e(754,"Define o modo do filtro para o input de pesquisa."),t()()(),i(755,"tr",19)(756,"td",20)(757,"div",21)(758,"span",22),e(759,"t-grid-row-actions"),o(760,"br"),t()()(),i(761,"td",23)(762,"code",47),e(763,"ThfGridRowActions"),t()(),i(764,"td",25),e(765,"-"),t(),i(766,"td",26)(767,"em")(768,"strong"),e(769,"(opcional)"),t()(),i(770,"p"),e(771,"Configura a edi\xE7\xE3o flu\xEDda, implementando a interface "),i(772,"strong"),e(773,"ThfGridRowActions"),t(),e(774,`.
Permite manipular o comportamento das a\xE7\xF5es de linha, como edi\xE7\xE3o, inclus\xE3o e remo\xE7\xE3o de itens.
\xC9 poss\xEDvel definir fun\xE7\xF5es espec\xEDficas para controlar as a\xE7\xF5es antes e depois das opera\xE7\xF5es.
Fundamental para implementar um fluxo de manipula\xE7\xE3o de dados totalmente personalizado.`),t(),i(775,"blockquote")(776,"p"),e(777,`Ao habilitar t-grid-row-actions a propriedade t-auto-size \xE9 desabilitada para manter a padroniza\xE7\xE3o das larguras das colunas edit\xE1veis.
Quando o t-grid-row-actions \xE9 habilitado, a propriedade t-resizable \xE9 ativada automaticamente.`),t()()()(),i(778,"tr",19)(779,"td",20)(780,"div",21)(781,"span",22),e(782," t-group"),o(783,"br"),t()()(),i(784,"td",23)(785,"code",48),e(786,"Array<string>"),t()(),i(787,"td",25),e(788,"-"),t(),i(789,"td",26)(790,"em")(791,"strong"),e(792,"(opcional)"),t()(),i(793,"p"),e(794,"Lista das colunas que devem iniciar agrupadas. Requer que a propriedade "),i(795,"strong"),e(796,"t-groupable"),t(),e(797," esteja habilitada."),t()()(),i(798,"tr",19)(799,"td",20)(800,"div",21)(801,"span",22),e(802,"t-groupable"),o(803,"br"),t()()(),i(804,"td",23)(805,"code",24),e(806,"boolean "),t(),i(807,"code",49),e(808," GroupableSettings"),t()(),i(809,"td",25)(810,"p")(811,"code"),e(812,"false"),t()()(),i(813,"td",26)(814,"em")(815,"strong"),e(816,"(opcional)"),t()(),i(817,"p"),e(818,"Habilita a ordena\xE7\xE3o por grupo atrav\xE9s da coluna."),t()()(),i(819,"tr",19)(820,"td",20)(821,"div",21)(822,"span",22),e(823,"t-header-template"),o(824,"br"),t()()(),i(825,"td",23)(826,"code",50),e(827,"TemplateRef<void>"),t()(),i(828,"td",25),e(829,"-"),t(),i(830,"td",26)(831,"em")(832,"strong"),e(833,"(opcional)"),t()(),i(834,"p"),e(835,"Container aberto para adicionar conte\xFAdo entre o cabe\xE7alho de a\xE7\xF5es e a lista do grid."),t(),i(836,"pre")(837,"code",28),e(838,`// Exemplo de uso:
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
</ng-template>`),t()()()(),i(839,"tr",19)(840,"td",20)(841,"div",21)(842,"span",22),e(843,"t-headline-fixed"),o(844,"br"),t()()(),i(845,"td",23)(846,"code",24),e(847,"boolean"),t()(),i(848,"td",25)(849,"p")(850,"code"),e(851,"false"),t()()(),i(852,"td",26)(853,"em")(854,"strong"),e(855,"(opcional)"),t()(),i(856,"p"),e(857,"Define o cabe\xE7alho do grid como fixo, desde que a altura ("),i(858,"strong"),e(859,"t-height"),t(),e(860,") n\xE3o esteja definida."),t()()(),i(861,"tr",19)(862,"td",20)(863,"div",21)(864,"span",22),e(865,"t-height"),o(866,"br"),t()()(),i(867,"td",23)(868,"code",51),e(869,"number "),t(),i(870,"code",40),e(871," string "),t(),i(872,"code",52),e(873," null"),t()(),i(874,"td",25)(875,"p"),e(876,"100%"),t()(),i(877,"td",26)(878,"em")(879,"strong"),e(880,"(opcional)"),t()(),i(881,"p"),e(882,"Define a altura da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(883,"code"),e(884,'"<n\xFAmero>%"'),t(),e(885,")."),t(),i(886,"ul")(887,"li"),e(888,"Se "),i(889,"strong"),e(890,"n\xE3o informado"),t(),e(891,", a altura da tabela ser\xE1 ajustada automaticamente pela quantidade de itens."),t(),i(892,"li"),e(893,"Caso seja informado um valor inv\xE1lido, ser\xE1 aplicado "),i(894,"strong"),e(895,"100%"),t(),e(896," como padr\xE3o."),t(),i(897,"li"),e(898,"Se "),i(899,"code"),e(900,"t-height"),t(),e(901," for menor que "),i(902,"code"),e(903,"t-min-height"),t(),e(904,", a altura m\xEDnima ser\xE1 aplicada."),t(),i(905,"li"),e(906,"Se "),i(907,"code"),e(908,"t-height"),t(),e(909," for maior que "),i(910,"code"),e(911,"t-max-height"),t(),e(912,", a altura m\xE1xima ser\xE1 aplicada."),t()(),i(913,"blockquote")(914,"p")(915,"strong"),e(916,"Observa\xE7\xE3o:"),t(),e(917," Quando definido, o "),i(918,"strong"),e(919,"virtual scroll"),t(),e(920," ser\xE1 ativado automaticamente. Consulte a documenta\xE7\xE3o da propriedade "),i(921,"strong"),e(922,"t-virtual-scroll"),t(),e(923," para mais detalhes."),t()()()(),i(924,"tr",19)(925,"td",20)(926,"div",21)(927,"span",22),e(928,"t-hide-action-fixed-columns"),o(929,"br"),t()()(),i(930,"td",23)(931,"code",24),e(932,"boolean"),t()(),i(933,"td",25)(934,"p")(935,"code"),e(936,"false"),t()()(),i(937,"td",26)(938,"em")(939,"strong"),e(940,"(opcional)"),t()(),i(941,"p"),e(942,`Controla a visibilidade da op\xE7\xE3o de fixar colunas no Gerenciar Tabela.
Se alguma coluna j\xE1 estiver fixa quando essa propriedade for habilitada,
ela permanecer\xE1 fixa, garantindo que ocultar as op\xE7\xF5es de fixar n\xE3o afete o estado das colunas j\xE1 fixadas.`),t()()(),i(943,"tr",19)(944,"td",20)(945,"div",21)(946,"span",22),e(947," t-hide-batch-actions"),o(948,"br"),t()()(),i(949,"td",23)(950,"code",24),e(951,"boolean"),t()(),i(952,"td",25)(953,"p")(954,"code"),e(955,"false"),t()()(),i(956,"td",26)(957,"em")(958,"strong"),e(959,"(opcional)"),t()(),i(960,"p"),e(961,"Permite ocultar as a\xE7\xF5es em lote, respons\xE1vel por excluir e exibir a quantidade de itens."),t()()(),i(962,"tr",19)(963,"td",20)(964,"div",21)(965,"span",22),e(966,"t-hide-columns-manager"),o(967,"br"),t()()(),i(968,"td",23)(969,"code",24),e(970,"boolean"),t()(),i(971,"td",25)(972,"p")(973,"code"),e(974,"false"),t()()(),i(975,"td",26)(976,"em")(977,"strong"),e(978,"(opcional)"),t()(),i(979,"p"),e(980,"Permite ocultar o bot\xE3o Gerenciar Tabela."),t()()(),i(981,"tr",19)(982,"td",20)(983,"div",21)(984,"span",22),e(985,"t-hide-select-all"),o(986,"br"),t()()(),i(987,"td",23)(988,"code",24),e(989,"boolean"),t()(),i(990,"td",25)(991,"p")(992,"code"),e(993,"false"),t()()(),i(994,"td",26)(995,"em")(996,"strong"),e(997,"(opcional)"),t()(),i(998,"p"),e(999,"Permite ocultar o checkbox de selecionar todos os itens."),t()()(),i(1e3,"tr",19)(1001,"td",20)(1002,"div",21)(1003,"span",22),e(1004,"t-hide-table-search"),o(1005,"br"),t()()(),i(1006,"td",23)(1007,"code",24),e(1008,"boolean"),t()(),i(1009,"td",25)(1010,"p")(1011,"code"),e(1012,"false"),t()()(),i(1013,"td",26)(1014,"em")(1015,"strong"),e(1016,"(opcional)"),t()(),i(1017,"p"),e(1018,"Permite ocultar o campo de pesquisa."),t()()(),i(1019,"tr",19)(1020,"td",20)(1021,"div",21)(1022,"span",22),e(1023," t-loading"),o(1024,"br"),t()()(),i(1025,"td",23)(1026,"code",24),e(1027,"boolean"),t()(),i(1028,"td",25)(1029,"p")(1030,"code"),e(1031,"false"),t()()(),i(1032,"td",26)(1033,"em")(1034,"strong"),e(1035,"(opcional)"),t()(),i(1036,"p"),e(1037,"Bloqueia a intera\xE7\xE3o do usu\xE1rio com os dados do grid."),t()()(),i(1038,"tr",19)(1039,"td",20)(1040,"div",21)(1041,"span",22),e(1042,"t-items"),o(1043,"br"),t()()(),i(1044,"td",23)(1045,"code",53),e(1046,"Array<any>"),t()(),i(1047,"td",25),e(1048,"-"),t(),i(1049,"td",26)(1050,"em")(1051,"strong"),e(1052,"(opcional)"),t()(),i(1053,"p"),e(1054,`Permite listar os itens no grid.
Cada item do array representa uma linha no grid e deve conter as propriedades
que correspondem \xE0s colunas definidas no grid.`),t(),i(1055,"pre")(1056,"code",28),e(1057,`// Exemplo de uso:
<thf-grid
 [t-items]="[{ name: 'M\xF4nica'}, { name: 'Cebolinha'}]"
></thf-grid>`),t()()()(),i(1058,"tr",19)(1059,"td",20)(1060,"div",32)(1061,"span",33),e(1062," (t-items-after-get)"),o(1063,"br"),t()()(),i(1064,"td",23)(1065,"code",34),e(1066,"EventEmitter"),t()(),i(1067,"td",25),e(1068,"-"),t(),i(1069,"td",26)(1070,"em")(1071,"strong"),e(1072,"(opcional)"),t()(),i(1073,"p"),e(1074,`Evento disparado ap\xF3s finaliza\xE7\xE3o das requisi\xE7\xF5es de GET.
Dispara no GET inicial caso esteja utilizando `),i(1075,"strong"),e(1076,"t-service-api"),t(),e(1077,`.
Dispara tamb\xE9m no GET de filtros caso esteja utilizando a propriedade `),i(1078,"strong"),e(1079,"t-actions-filter"),t(),e(1080,`
ou no GET do input de pesquisa quando a propriedade `),i(1081,"strong"),e(1082,"t-filter-input-mode"),t(),e(1083," estiver como "),i(1084,"code"),e(1085,"service"),t(),e(1086,`.
Retorna os itens atuais da tabela, o total de itens, n\xFAmero da p\xE1gina atual e pageSize.`),t()()(),i(1087,"tr",19)(1088,"td",20)(1089,"div",21)(1090,"span",22),e(1091,"t-literals"),o(1092,"br"),t()()(),i(1093,"td",23)(1094,"code",54),e(1095,"ThfGridLiterals"),t()(),i(1096,"td",25),e(1097,"-"),t(),i(1098,"td",26)(1099,"em")(1100,"strong"),e(1101,"(opcional)"),t()(),i(1102,"p"),e(1103,"Permite definir literais personalizados para o componente, conforme a interface "),i(1104,"strong"),e(1105,"ThfGridLiterals"),t(),e(1106,"."),t(),i(1107,"pre")(1108,"code",28),e(1109,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-literals]="customLiterals"
></thf-grid>`),t()(),i(1110,"pre")(1111,"code",31),e(1112,"customLiterals: ThfGridLiterals = { advancedSearch: 'Mais filtros' };"),t()()()(),i(1113,"tr",19)(1114,"td",20)(1115,"div",21)(1116,"span",22),e(1117,"t-max-columns"),o(1118,"br"),t()()(),i(1119,"td",23)(1120,"code",51),e(1121,"number"),t()(),i(1122,"td",25),e(1123,"-"),t(),i(1124,"td",26)(1125,"em")(1126,"strong"),e(1127,"(opcional)"),t()(),i(1128,"p"),e(1129,`Define a quantidade m\xE1xima de colunas que ser\xE3o exibidas no grid.
Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o desabilitadas e
caso houver mais colunas vis\xEDveis do que o permitido, as excedentes ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),t()()(),i(1130,"tr",19)(1131,"td",20)(1132,"div",21)(1133,"span",22),e(1134," t-max-height"),o(1135,"br"),t()()(),i(1136,"td",23)(1137,"code",51),e(1138,"number "),t(),i(1139,"code",40),e(1140," string "),t(),i(1141,"code",52),e(1142," null"),t()(),i(1143,"td",25),e(1144,"-"),t(),i(1145,"td",26)(1146,"em")(1147,"strong"),e(1148,"(opcional)"),t()(),i(1149,"p"),e(1150,"Define a "),i(1151,"strong"),e(1152,"altura m\xE1xima"),t(),e(1153," da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(1154,"code"),e(1155,'"<n\xFAmero>%"'),t(),e(1156,")."),t(),i(1157,"ul")(1158,"li"),e(1159,"Se "),i(1160,"strong"),e(1161,"n\xE3o informado"),t(),e(1162,", a altura m\xE1xima ser\xE1 definida pela propriedade "),i(1163,"code"),e(1164,"t-height"),t(),e(1165,", se existir."),t(),i(1166,"li"),e(1167,"Caso "),i(1168,"code"),e(1169,"t-height"),t(),e(1170," seja "),i(1171,"strong"),e(1172,"maior"),t(),e(1173," que "),i(1174,"code"),e(1175,"t-max-height"),t(),e(1176,", o grid usar\xE1 "),i(1177,"code"),e(1178,"t-max-height"),t(),e(1179," como limite superior."),t(),i(1180,"li"),e(1181,"Caso o valor passado seja inv\xE1lido, "),i(1182,"strong"),e(1183,"nenhuma altura m\xE1xima ser\xE1 aplicada"),t(),e(1184,"."),t()()()(),i(1185,"tr",19)(1186,"td",20)(1187,"div",21)(1188,"span",22),e(1189,"t-max-resizable-width"),o(1190,"br"),t()()(),i(1191,"td",23)(1192,"code",51),e(1193,"number"),t()(),i(1194,"td",25),e(1195,"-"),t(),i(1196,"td",26)(1197,"em")(1198,"strong"),e(1199,"(opcional)"),t()(),i(1200,"p"),e(1201,"Define a largura m\xE1xima para redimensionar uma coluna. Requer que a propriedade "),i(1202,"strong"),e(1203,"t-resizable"),t(),e(1204," esteja habilitada."),t()()(),i(1205,"tr",19)(1206,"td",20)(1207,"div",21)(1208,"span",22),e(1209," t-min-height"),o(1210,"br"),t()()(),i(1211,"td",23)(1212,"code",51),e(1213,"number "),t(),i(1214,"code",40),e(1215," string "),t(),i(1216,"code",52),e(1217," null"),t()(),i(1218,"td",25),e(1219,"-"),t(),i(1220,"td",26)(1221,"em")(1222,"strong"),e(1223,"(opcional)"),t()(),i(1224,"p"),e(1225,"Define a "),i(1226,"strong"),e(1227,"altura m\xEDnima"),t(),e(1228," da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(1229,"code"),e(1230,'"<n\xFAmero>%"'),t(),e(1231,")."),t(),i(1232,"ul")(1233,"li"),e(1234,"Se "),i(1235,"strong"),e(1236,"n\xE3o informado"),t(),e(1237,", a altura m\xEDnima ser\xE1 definida pela propriedade "),i(1238,"code"),e(1239,"t-height"),t(),e(1240,", se existir."),t(),i(1241,"li"),e(1242,"Caso "),i(1243,"code"),e(1244,"t-height"),t(),e(1245," seja "),i(1246,"strong"),e(1247,"menor"),t(),e(1248," que "),i(1249,"code"),e(1250,"t-min-height"),t(),e(1251,", o grid usar\xE1 "),i(1252,"code"),e(1253,"t-min-height"),t(),e(1254," como limite inferior."),t(),i(1255,"li"),e(1256,"Caso o valor passado seja inv\xE1lido, "),i(1257,"strong"),e(1258,"nenhuma altura m\xEDnima ser\xE1 aplicada"),t(),e(1259,"."),t()()()(),i(1260,"tr",19)(1261,"td",20)(1262,"div",21)(1263,"span",22),e(1264,"t-min-resizable-width"),o(1265,"br"),t()()(),i(1266,"td",23)(1267,"code",51),e(1268,"number"),t()(),i(1269,"td",25)(1270,"p")(1271,"code"),e(1272,"10"),t()()(),i(1273,"td",26)(1274,"em")(1275,"strong"),e(1276,"(opcional)"),t()(),i(1277,"p"),e(1278,"Define a largura m\xEDnima para redimensionar uma coluna. Requer que a propriedade "),i(1279,"strong"),e(1280,"t-resizable"),t(),e(1281," esteja habilitada."),t()()(),i(1282,"tr",19)(1283,"td",20)(1284,"div",32)(1285,"span",33),e(1286," (t-change-group)"),o(1287,"br"),t()()(),i(1288,"td",23)(1289,"code",34),e(1290,"EventEmitter"),t()(),i(1291,"td",25),e(1292,"-"),t(),i(1293,"td",26)(1294,"em")(1295,"strong"),e(1296,"(opcional)"),t()(),i(1297,"p"),e(1298,"Evento disparado quando ocorre o agrupamento no grid. Retorna um array de strings das colunas agrupadas."),t()()(),i(1299,"tr",19)(1300,"td",20)(1301,"div",21)(1302,"span",22),e(1303," t-load"),o(1304,"br"),t()()(),i(1305,"td",23)(1306,"code",40),e(1307,"string "),t(),i(1308,"code",55),e(1309," (() => ThfGridOptions)"),t()(),i(1310,"td",25),e(1311,"-"),t(),i(1312,"td",26)(1313,"em")(1314,"strong"),e(1315,"(opcional)"),t()(),i(1316,"p"),e(1317,`Define dinamicamente as colunas e a\xE7\xF5es do grid ap\xF3s o carregamento inicial dos dados.
Pode ser uma URL que retorna a configura\xE7\xE3o via GET ou uma fun\xE7\xE3o que retorna a configura\xE7\xE3o diretamente.
Quando fun\xE7\xE3o, a propriedade deve implementar a interface `),i(1318,"strong"),e(1319,"ThfGridOptions"),t(),e(1320,"."),t()()(),i(1321,"tr",19)(1322,"td",20)(1323,"div",21)(1324,"span",22),e(1325,"t-options-paging"),o(1326,"br"),t()()(),i(1327,"td",23)(1328,"code",56),e(1329,"Array<ThfGridOptionPaging>"),t()(),i(1330,"td",25),e(1331,"-"),t(),i(1332,"td",26)(1333,"em")(1334,"strong"),e(1335,"(opcional)"),t()(),i(1336,"p"),e(1337,"Define as op\xE7\xF5es de itens por p\xE1gina, implementando a interface "),i(1338,"strong"),e(1339,"ThfGridOptionPaging"),t(),e(1340,`.
Requer que a propriedade `),i(1341,"strong"),e(1342,"t-pageable"),t(),e(1343," esteja habilitada."),t()()(),i(1344,"tr",19)(1345,"td",20)(1346,"div",32)(1347,"span",33),e(1348," (t-change-order-column)"),o(1349,"br"),t()()(),i(1350,"td",23)(1351,"code",34),e(1352,"EventEmitter"),t()(),i(1353,"td",25),e(1354,"-"),t(),i(1355,"td",26)(1356,"em")(1357,"strong"),e(1358,"(opcional)"),t()(),i(1359,"p"),e(1360,`Evento disparado quando a ordem das colunas \xE9 alterada atrav\xE9s do Gerenciar Tabela ou pelo Draggable.
Retorna um array de strings.`),t()()(),i(1361,"tr",19)(1362,"td",20)(1363,"div",21)(1364,"span",22),e(1365,"t-page-size"),o(1366,"br"),t()()(),i(1367,"td",23)(1368,"code",51),e(1369,"number"),t()(),i(1370,"td",25)(1371,"p")(1372,"code"),e(1373,"10"),t()()(),i(1374,"td",26)(1375,"em")(1376,"strong"),e(1377,"(opcional)"),t()(),i(1378,"p"),e(1379,"Define a quantidade de itens default na p\xE1gina. Requer que a propriedade "),i(1380,"strong"),e(1381,"t-pageable"),t(),e(1382," esteja habilitada."),t()()(),i(1383,"tr",19)(1384,"td",20)(1385,"div",21)(1386,"span",22),e(1387,"t-page-size-virtual"),o(1388,"br"),t()()(),i(1389,"td",23)(1390,"code",51),e(1391,"number"),t()(),i(1392,"td",25)(1393,"p")(1394,"code"),e(1395,"60"),t()()(),i(1396,"td",26)(1397,"em")(1398,"strong"),e(1399,"(opcional)"),t()(),i(1400,"p"),e(1401,`Necess\xE1rio quando o virtual scroll est\xE1 habilitado para evitar comportamentos inesperados durante a rolagem.
Recomenda-se que o valor seja pelo menos 3 vezes o n\xFAmero de itens vis\xEDveis no grid.`),t()()(),i(1402,"tr",19)(1403,"td",20)(1404,"div",21)(1405,"span",22),e(1406,"t-pageable"),o(1407,"br"),t()()(),i(1408,"td",23)(1409,"code",24),e(1410,"boolean"),t()(),i(1411,"td",25)(1412,"p")(1413,"code"),e(1414,"false"),t()()(),i(1415,"td",26)(1416,"em")(1417,"strong"),e(1418,"(opcional)"),t()(),i(1419,"p"),e(1420,"Exibe o bot\xE3o 'Carregar mais resultados' e habilita a pagina\xE7\xE3o no Gerenciar Tabela."),t()()(),i(1421,"tr",19)(1422,"td",20)(1423,"div",21)(1424,"span",22),e(1425,"t-param-delete-api"),o(1426,"br"),t()()(),i(1427,"td",23)(1428,"code",40),e(1429,"string"),t()(),i(1430,"td",25),e(1431,"-"),t(),i(1432,"td",26)(1433,"em")(1434,"strong"),e(1435,"(opcional)"),t()(),i(1436,"p"),e(1437,"Define o par\xE2metro para a requisi\xE7\xE3o de DELETE ou POST(caso a propriedade "),i(1438,"code"),e(1439,"t-allow-batch-delete"),t(),e(1440," seja definida)."),t(),i(1441,"p"),e(1442,"Quando "),i(1443,"strong"),e(1444,"t-service-delete-api"),t(),e(1445," estiver configurado e o valor de "),i(1446,"strong"),e(1447,"t-param-delete-api"),t(),e(1448,` n\xE3o for informado,
por padr\xE3o, ser\xE1 enviado `),i(1449,"code"),e(1450,"key"),t(),e(1451," (definido ao usar "),i(1452,"strong"),e(1453,"ThfGridColumn"),t(),e(1454,") ou, na aus\xEAncia, "),i(1455,"code"),e(1456,"id"),t(),e(1457,`. Caso
`),i(1458,"strong"),e(1459,"t-service-delete-api"),t(),e(1460," n\xE3o esteja definido, ser\xE1 considerada a URL de "),i(1461,"strong"),e(1462,"t-service-api"),t(),e(1463,"."),t(),i(1464,"blockquote")(1465,"p"),e(1466,"Durante a exclus\xE3o de um \xFAnico item, ele ser\xE1 enviado como par\xE2metro na URL, conforme o exemplo abaixo:"),t(),i(1467,"pre")(1468,"code"),e(1469,`// Considerando t-param-delete-api="email"
DELETE /items?email=email1@example.com`),t()(),i(1470,"p"),e(1471,"Caso o valor n\xE3o seja uma propriedade v\xE1lida do item, o grid ir\xE1 considerar as keys definidas na coluna"),t(),i(1472,"pre")(1473,"code"),e(1474,`// Considerando t-param-delete-api="propriedadeInexistente" e as colunas "id" e "email" com keys definidas
DELETE /items?propriedadeInexistente=1|email1@example.com`),t()(),i(1475,"p"),e(1476,"Na aus\xEAncia do t-param-delete-api e das keys, o grid ir\xE1 considerar o id do item e enviar diretamente como par\xE2metro na URL:"),t(),i(1477,"pre")(1478,"code"),e(1479,`// Considerando t-param-delete-api="email" e sem keys definidas
DELETE /items/1`),t()()(),i(1480,"blockquote")(1481,"p"),e(1482,"Durante a exclus\xE3o em lote, ele ser\xE1 enviado no corpo da requisi\xE7\xE3o POST como o \xEDndice "),i(1483,"code"),e(1484,"paramDelete"),t(),e(1485,", conforme o exemplo abaixo:"),t(),i(1486,"pre")(1487,"code",57),e(1488,`// Considerando t-param-delete-api="email"
{
  items: [
    { id: '1', email: 'email1@example.com' },
    { id: '2', email: 'email2@example.com' }
  ],
  keys: ['email1@example.com', 'email2@example.com'],
  total: 2,
  paramDelete: "email"
}`),t()()()()(),i(1489,"tr",19)(1490,"td",20)(1491,"div",21)(1492,"span",22),e(1493,"t-resizable"),o(1494,"br"),t()()(),i(1495,"td",23)(1496,"code",24),e(1497,"boolean"),t()(),i(1498,"td",25)(1499,"p")(1500,"code"),e(1501,"false"),t()()(),i(1502,"td",26)(1503,"em")(1504,"strong"),e(1505,"(opcional)"),t()(),i(1506,"p"),e(1507,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do grid,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(1508,"tr",19)(1509,"td",20)(1510,"div",21)(1511,"span",22),e(1512,"t-row-height"),o(1513,"br"),t()()(),i(1514,"td",23)(1515,"code",51),e(1516,"number"),t()(),i(1517,"td",25),e(1518,"-"),t(),i(1519,"td",26)(1520,"em")(1521,"strong"),e(1522,"(opcional)"),t()(),i(1523,"p"),e(1524,`Define a altura da linha quando o virtual scroll est\xE1 habilitado.
Necess\xE1ria para calcular corretamente o n\xFAmero de itens vis\xEDveis e evitar comportamentos inesperados durante a rolagem.
Recomenda-se o uso dessa propriedade ao utilizar colunas com templates personalizados
(`),i(1525,"code"),e(1526,"columnTemplate"),t(),e(1527," e "),i(1528,"code"),e(1529,"cellTemplate"),t(),e(1530,")."),t()()(),i(1531,"tr",19)(1532,"td",20)(1533,"div",32)(1534,"span",33),e(1535," (t-rows-selected)"),o(1536,"br"),t()()(),i(1537,"td",23)(1538,"code",34),e(1539,"EventEmitter"),t()(),i(1540,"td",25),e(1541,"-"),t(),i(1542,"td",26)(1543,"p"),e(1544,"Retorna um array indicando quais s\xE3o as linhas selecionadas no momento."),t()()(),i(1545,"tr",19)(1546,"td",20)(1547,"div",21)(1548,"span",22),e(1549,"t-selectable"),o(1550,"br"),t()()(),i(1551,"td",23)(1552,"code",24),e(1553,"boolean"),t()(),i(1554,"td",25)(1555,"p")(1556,"code"),e(1557,"false"),t()()(),i(1558,"td",26)(1559,"em")(1560,"strong"),e(1561,"(opcional)"),t()(),i(1562,"p"),e(1563,`Habilita a sele\xE7\xE3o de itens, adicionando uma coluna com checkbox.
A sele\xE7\xE3o padr\xE3o \xE9 m\xFAltipla, permitindo selecionar v\xE1rios itens ao mesmo tempo.`),t()()(),i(1564,"tr",19)(1565,"td",20)(1566,"div",21)(1567,"span",22),e(1568,"t-selectable-entire-line"),o(1569,"br"),t()()(),i(1570,"td",23)(1571,"code",24),e(1572,"boolean"),t()(),i(1573,"td",25)(1574,"p")(1575,"code"),e(1576,"true"),t()()(),i(1577,"td",26)(1578,"em")(1579,"strong"),e(1580,"(opcional)"),t()(),i(1581,"p"),e(1582,"Permite selecionar o item ao clicar na linha. Requer que a propriedade "),i(1583,"strong"),e(1584,"t-selectable"),t(),e(1585," esteja habilitada."),t()()(),i(1586,"tr",19)(1587,"td",20)(1588,"div",32)(1589,"span",33),e(1590," (t-selected)"),o(1591,"br"),t()()(),i(1592,"td",23)(1593,"code",34),e(1594,"EventEmitter"),t()(),i(1595,"td",25),e(1596,"-"),t(),i(1597,"td",26)(1598,"em")(1599,"strong"),e(1600,"(opcional)"),t()(),i(1601,"p"),e(1602,"Evento disparado quando selecionado um item. Retorna o item selecionado."),t()()(),i(1603,"tr",19)(1604,"td",20)(1605,"div",32)(1606,"span",33),e(1607," (t-all-selected)"),o(1608,"br"),t()()(),i(1609,"td",23)(1610,"code",34),e(1611,"EventEmitter"),t()(),i(1612,"td",25),e(1613,"-"),t(),i(1614,"td",26)(1615,"em")(1616,"strong"),e(1617,"(opcional)"),t()(),i(1618,"p"),e(1619,"Evento disparado quando selecionado todos os itens. Retorna todos os itens selecionados."),t()()(),i(1620,"tr",19)(1621,"td",20)(1622,"div",21)(1623,"span",22),e(1624,"t-service-delete-api"),o(1625,"br"),t()()(),i(1626,"td",23)(1627,"code",40),e(1628,"string "),t(),i(1629,"code",58),e(1630," ThfGridDeleteService"),t()(),i(1631,"td",25),e(1632,"-"),t(),i(1633,"td",26)(1634,"em")(1635,"strong"),e(1636,"(opcional)"),t()(),i(1637,"p"),e(1638,`Respons\xE1vel por excluir o item. Aceita um servi\xE7o que implementa a interface
`),i(1639,"strong"),e(1640,"ThfGridDeleteService"),t(),e(1641," ou uma URL."),t(),i(1642,"p"),e(1643,`Ao selecionar o bot\xE3o de excluir, essa URL ou servi\xE7o ser\xE1 chamado, enviando o par\xE2metro definido na propriedade
`),i(1644,"strong"),e(1645,"t-param-delete-api"),t(),e(1646,". Se configurado e "),i(1647,"strong"),e(1648,"t-param-delete-api"),t(),e(1649," n\xE3o for informado, ser\xE1 enviado "),i(1650,"code"),e(1651,"key"),t(),e(1652,`
(definido ao usar `),i(1653,"strong"),e(1654,"ThfGridColumn"),t(),e(1655,") ou, na aus\xEAncia, "),i(1656,"code"),e(1657,"id"),t(),e(1658,"."),t(),i(1659,"p"),e(1660,"Por padr\xE3o, a exclus\xE3o \xE9 feita item a item. No entanto, ao habilitar a propriedade "),i(1661,"strong"),e(1662,"t-allow-batch-delete"),t(),e(1663,` e utilizar
um servi\xE7o com o m\xE9todo `),i(1664,"code"),e(1665,"deleteBatchItems"),t(),e(1666,", a exclus\xE3o em lote ser\xE1 permitida."),t(),i(1667,"blockquote")(1668,"p"),e(1669,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(1670,"a",59),e(1671,"API do PO UI"),t()()(),i(1672,"blockquote")(1673,"p"),e(1674,"Caso utilize um servi\xE7o "),i(1675,"strong"),e(1676,"ThfGridDeleteService"),t(),e(1677,`, o tratamento de encoding do valor fica sob a responsabilidade do
desenvolvedor.`),t()()()(),i(1678,"tr",19)(1679,"td",20)(1680,"div",21)(1681,"span",22),e(1682," t-service-api"),o(1683,"br"),t()()(),i(1684,"td",23)(1685,"code",40),e(1686,"string"),t()(),i(1687,"td",25),e(1688,"-"),t(),i(1689,"td",26)(1690,"em")(1691,"strong"),e(1692,"(opcional)"),t()(),i(1693,"p"),e(1694,"Define a rota da "),i(1695,"code"),e(1696,"API"),t(),e(1697,` para realizar o GET dos itens e popular o grid.
Para a exclus\xE3o, \xE9 necess\xE1rio que a `),i(1698,"code"),e(1699,"API"),t(),e(1700,` esteja preparada para receber uma ou
mais `),i(1701,"code"),e(1702,"keys"),t(),e(1703," concatenadas para identifica\xE7\xE3o do registro. Caso n\xE3o haja "),i(1704,"code"),e(1705,"keys"),t(),e(1706,`,
que implementa a interface `),i(1707,"strong"),e(1708,"ThfGridColumn"),t(),e(1709,", a requisi\xE7\xE3o de exclus\xE3o ocorrer\xE1 pelo "),i(1710,"code"),e(1711,"id"),t(),e(1712,"."),t()()(),i(1713,"tr",19)(1714,"td",20)(1715,"div",21)(1716,"span",22),e(1717,"t-show-densification-configuration"),o(1718,"br"),t()()(),i(1719,"td",23)(1720,"code",24),e(1721,"boolean"),t()(),i(1722,"td",25)(1723,"p")(1724,"code"),e(1725,"false"),t()()(),i(1726,"td",26)(1727,"em")(1728,"strong"),e(1729,"(opcional)"),t()(),i(1730,"p"),e(1731,"Habilita um atalho para alternar o espa\xE7amento das linhas do grid entre os modos "),i(1732,"code"),e(1733,"Compacto"),t(),e(1734," e "),i(1735,"code"),e(1736,"Espa\xE7oso"),t(),e(1737,` no
Gerenciar Tabela.`),t(),i(1738,"blockquote")(1739,"p"),e(1740,"Em n\xEDvel de acessibilidade "),i(1741,"strong"),e(1742,"AA"),t(),e(1743,", a op\xE7\xE3o "),i(1744,"code"),e(1745,"Extra Compacto"),t(),e(1746," tamb\xE9m \xE9 exibida."),t()()()(),i(1747,"tr",19)(1748,"td",20)(1749,"div",21)(1750,"span",22),e(1751,"t-show-draggable-icon"),o(1752,"br"),t()()(),i(1753,"td",23)(1754,"code",24),e(1755,"boolean"),t()(),i(1756,"td",25)(1757,"p")(1758,"code"),e(1759,"false"),t()()(),i(1760,"td",26)(1761,"em")(1762,"strong"),e(1763,"(opcional)"),t()(),i(1764,"p"),e(1765,"Exibe o \xEDcone de draggable nas respectivas colunas."),t()()(),i(1766,"tr",19)(1767,"td",20)(1768,"div",21)(1769,"span",22),e(1770," t-show-footer-aggregates"),o(1771,"br"),t()()(),i(1772,"td",23)(1773,"code",24),e(1774,"boolean"),t()(),i(1775,"td",25)(1776,"p")(1777,"code"),e(1778,"false"),t()()(),i(1779,"td",26)(1780,"em")(1781,"strong"),e(1782,"(opcional)"),t()(),i(1783,"p"),e(1784,"Quando definido true, exibir\xE1 no rodap\xE9 da tabela os totalizadores que foram definidos na propriedade "),i(1785,"code"),e(1786,"t-aggregates"),t(),e(1787,"."),t()()(),i(1788,"tr",19)(1789,"td",20)(1790,"div",32)(1791,"span",33),e(1792," (t-show-more)"),o(1793,"br"),t()()(),i(1794,"td",23)(1795,"code",34),e(1796,"EventEmitter"),t()(),i(1797,"td",25),e(1798,"-"),t(),i(1799,"td",26)(1800,"em")(1801,"strong"),e(1802,"(opcional)"),t()(),i(1803,"p"),e(1804,"Evento disparado quando pressionado o bot\xE3o 'Carregar mais'. Retorna um array do tipo "),i(1805,"strong"),e(1806,"ThfGridColumnSort"),t(),e(1807,`,
caso existam colunas ordenadas definidas.`),t(),i(1808,"blockquote")(1809,"p"),e(1810,"Caso "),i(1811,"strong"),e(1812,"t-items"),t(),e(1813," esteja definido, o uso desse evento se torna obrigat\xF3rio caso queira exibir o bot\xE3o 'Carregar mais'."),t()()()(),i(1814,"tr",19)(1815,"td",20)(1816,"div",21)(1817,"span",22),e(1818,"t-show-more-disabled"),o(1819,"br"),t()()(),i(1820,"td",23)(1821,"code",24),e(1822,"boolean"),t()(),i(1823,"td",25)(1824,"p")(1825,"code"),e(1826,"false"),t()()(),i(1827,"td",26)(1828,"em")(1829,"strong"),e(1830,"(opcional)"),t()(),i(1831,"p"),e(1832,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(1833,"tr",19)(1834,"td",20)(1835,"div",21)(1836,"span",22),e(1837,"t-show-more-visible"),o(1838,"br"),t()()(),i(1839,"td",23)(1840,"code",24),e(1841,"boolean"),t()(),i(1842,"td",25)(1843,"p")(1844,"code"),e(1845,"true"),t()()(),i(1846,"td",26)(1847,"em")(1848,"strong"),e(1849,"(opcional)"),t()(),i(1850,"p"),e(1851,"Controla a exibi\xE7\xE3o do bot\xE3o 'Carregar mais resultados'. Requer que a propriedade "),i(1852,"strong"),e(1853,"t-pageable"),t(),e(1854," esteja habilitada, ou seja utilizado o evento "),i(1855,"code"),e(1856,"t-show-more"),t(),e(1857," em conjunto com a propriedade "),i(1858,"strong"),e(1859,"t-items"),t(),e(1860,"."),t(),i(1861,"blockquote")(1862,"p"),e(1863,"Caso seja utilizado em conjunto com "),i(1864,"strong"),e(1865,"t-show-more-disabled"),t(),e(1866,", a propriedade "),i(1867,"strong"),e(1868,"t-show-more-visible"),t(),e(1869," ter\xE1 prioridade."),t()()()(),i(1870,"tr",19)(1871,"td",20)(1872,"div",21)(1873,"span",22),e(1874,"t-single-select"),o(1875,"br"),t()()(),i(1876,"td",23)(1877,"code",24),e(1878,"boolean"),t()(),i(1879,"td",25)(1880,"p")(1881,"code"),e(1882,"false"),t()()(),i(1883,"td",26)(1884,"em")(1885,"strong"),e(1886,"(opcional)"),t()(),i(1887,"p"),e(1888,"Define a sele\xE7\xE3o \xFAnica. Requer que a propriedade "),i(1889,"strong"),e(1890,"t-selectable"),t(),e(1891," esteja habilitada."),t()()(),i(1892,"tr",19)(1893,"td",20)(1894,"div",21)(1895,"span",22),e(1896,"t-sort"),o(1897,"br"),t()()(),i(1898,"td",23)(1899,"code",60),e(1900,"Array<ThfGridColumnSort>"),t()(),i(1901,"td",25),e(1902,"-"),t(),i(1903,"td",26)(1904,"em")(1905,"strong"),e(1906,"(opcional)"),t()(),i(1907,"p"),e(1908,"Define a ordena\xE7\xE3o (sort) crescente (asc) ou decrescente (desc) por coluna."),t(),i(1909,"pre")(1910,"code",28),e(1911,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-sort]="sortColumns"
></thf-grid>`),t()(),i(1912,"pre")(1913,"code",31),e(1914,"sortColumns: Array<ThfGridColumnSort> = [{ field: 'name', dir: 'desc'}];"),t()()()(),i(1915,"tr",19)(1916,"td",20)(1917,"div",32)(1918,"span",33),e(1919," (t-change-sort-column)"),o(1920,"br"),t()()(),i(1921,"td",23)(1922,"code",34),e(1923,"EventEmitter"),t()(),i(1924,"td",25),e(1925,"-"),t(),i(1926,"td",26)(1927,"em")(1928,"strong"),e(1929,"(opcional)"),t()(),i(1930,"p"),e(1931,`Evento disparado ao alterar o sort da coluna.
Retorna um array do tipo `),i(1932,"strong"),e(1933,"ThfGridColumnSort"),t(),e(1934," com a regra de sortable e a coluna aplicada."),t()()(),i(1935,"tr",19)(1936,"td",20)(1937,"div",21)(1938,"span",22),e(1939,"t-sortable"),o(1940,"br"),t()()(),i(1941,"td",23)(1942,"code",24),e(1943,"boolean"),t()(),i(1944,"td",25)(1945,"p")(1946,"code"),e(1947,"true"),t()()(),i(1948,"td",26)(1949,"em")(1950,"strong"),e(1951,"(opcional)"),t()(),i(1952,"p"),e(1953,"Habilita a ordena\xE7\xE3o (sort) crescente ou decrescente em todas as colunas do grid."),t()()(),i(1954,"tr",19)(1955,"td",20)(1956,"div",21)(1957,"span",22),e(1958,"t-spacing"),o(1959,"br"),t()()(),i(1960,"td",23)(1961,"code",40),e(1962,"string"),t()(),i(1963,"td",25)(1964,"p")(1965,"code"),e(1966,"medium"),t()()(),i(1967,"td",26)(1968,"em")(1969,"strong"),e(1970,"(opcional)"),t()(),i(1971,"p"),e(1972,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do grid. Os valores
permitidos s\xE3o definidos pelo enum `),i(1973,"strong"),e(1974,"ThfColumnSpacing"),t(),e(1975,"."),t(),i(1976,"blockquote")(1977,"p"),e(1978,"Em n\xEDvel de acessibilidade "),i(1979,"strong"),e(1980,"AA"),t(),e(1981,", caso o valor de "),i(1982,"code"),e(1983,"t-spacing"),t(),e(1984," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),i(1985,"code"),e(1986,"extraSmall"),t(),e(1987,`
nos seguintes cen\xE1rios:`),t(),i(1988,"ul")(1989,"li"),e(1990,"Quando o valor de "),i(1991,"code"),e(1992,"t-components-size"),t(),e(1993," for "),i(1994,"code"),e(1995,"small"),t(),e(1996,";"),t(),i(1997,"li"),e(1998,"Quando o valor padr\xE3o dos componentes for configurado como "),i(1999,"code"),e(2e3,"small"),t(),e(2001,` no
`),i(2002,"a",41),e(2003,"servi\xE7o de tema"),t(),e(2004,"."),t()()()()(),i(2005,"tr",19)(2006,"td",20)(2007,"div",21)(2008,"span",22),e(2009,"t-striped"),o(2010,"br"),t()()(),i(2011,"td",23)(2012,"code",24),e(2013,"boolean"),t()(),i(2014,"td",25)(2015,"p")(2016,"code"),e(2017,"true"),t()()(),i(2018,"td",26)(2019,"em")(2020,"strong"),e(2021,"(opcional)"),t()(),i(2022,"p"),e(2023,"Define o estilo listrado no grid (striped)."),t()()(),i(2024,"tr",19)(2025,"td",20)(2026,"div",21)(2027,"span",22),e(2028,"t-text-wrap"),o(2029,"br"),t()()(),i(2030,"td",23)(2031,"code",24),e(2032,"boolean"),t()(),i(2033,"td",25)(2034,"p")(2035,"code"),e(2036,"false"),t()()(),i(2037,"td",26)(2038,"em")(2039,"strong"),e(2040,"(opcional)"),t()(),i(2041,"p"),e(2042,`Define a quebra autom\xE1tica de texto. Quando ativada, o texto que excede o espa\xE7o dispon\xEDvel \xE9 transferido para a
pr\xF3xima linha em pontos apropriados para uma leitura clara.`),t(),i(2043,"blockquote")(2044,"p"),e(2045,"Propriedade incompat\xEDvel quando "),i(2046,"strong"),e(2047,"t-virtual-scroll"),t(),e(2048," est\xE1 habilitado."),t()()()(),i(2049,"tr",19)(2050,"td",20)(2051,"div",32)(2052,"span",33),e(2053," (t-unselected)"),o(2054,"br"),t()()(),i(2055,"td",23)(2056,"code",34),e(2057,"EventEmitter"),t()(),i(2058,"td",25),e(2059,"-"),t(),i(2060,"td",26)(2061,"em")(2062,"strong"),e(2063,"(opcional)"),t()(),i(2064,"p"),e(2065,"Evento disparado quando desselecionado um item. Retorna o item desselecionado."),t()()(),i(2066,"tr",19)(2067,"td",20)(2068,"div",32)(2069,"span",33),e(2070," (t-all-unselected)"),o(2071,"br"),t()()(),i(2072,"td",23)(2073,"code",34),e(2074,"EventEmitter"),t()(),i(2075,"td",25),e(2076,"-"),t(),i(2077,"td",26)(2078,"em")(2079,"strong"),e(2080,"(opcional)"),t()(),i(2081,"p"),e(2082,"Evento disparado quando desselecionado todos os itens. Retorna um array com todos os itens desselecionados."),t()()(),i(2083,"tr",19)(2084,"td",20)(2085,"div",21)(2086,"span",22),e(2087,"t-virtual-columns"),o(2088,"br"),t()()(),i(2089,"td",23)(2090,"code",24),e(2091,"boolean"),t()(),i(2092,"td",25)(2093,"p")(2094,"code"),e(2095,"false"),t()()(),i(2096,"td",26)(2097,"em")(2098,"strong"),e(2099,"(opcional)"),t()(),i(2100,"p"),e(2101,`Define o uso do virtual columns no grid para melhorar a performance com grande volume de colunas.
Recomendamos a utiliza\xE7\xE3o dessa propriedade somente em caso de perda de performance com grande quantidade de colunas.
Existe incompatibilidade com a propriedade `),i(2102,"strong"),e(2103,"t-auto-size"),t(),e(2104," e m\xE9todo "),i(2105,"strong"),e(2106,"autoFitColumns()"),t(),e(2107,`.
Caso a grid tenha mais de 50 colunas o virtual-columns \xE9 ativado.`),t()()(),i(2108,"tr",19)(2109,"td",20)(2110,"div",21)(2111,"span",22),e(2112,"t-virtual-scroll"),o(2113,"br"),t()()(),i(2114,"td",23)(2115,"code",24),e(2116,"boolean"),t()(),i(2117,"td",25)(2118,"p")(2119,"code"),e(2120,"true"),t()()(),i(2121,"td",26)(2122,"em")(2123,"strong"),e(2124,"(opcional)"),t()(),i(2125,"p"),e(2126,`Define o uso do virtual scroll no grid para melhorar a performance com grandes volumes de dados.
Requer que a propriedade `),i(2127,"strong"),e(2128,"t-height"),t(),e(2129," esteja definida."),t(),i(2130,"blockquote")(2131,"p"),e(2132,"Verificar a documenta\xE7\xE3o das seguintes propriedades: "),i(2133,"strong"),e(2134,"t-text-wrap"),t(),e(2135,", "),i(2136,"strong"),e(2137,"t-row-height"),t(),e(2138," e "),i(2139,"strong"),e(2140,"t-page-size-virtual"),t(),e(2141,"."),t()()()()()(),i(2142,"po-accordion-item",61)(2143,"table",62)(2144,"tr",19)(2145,"th",63)(2146,"div",21)(2147,"h4")(2148,"span",22),e(2149," autoFitColumns "),t()()()()(),i(2150,"tr",26)(2151,"td",26)(2152,"p"),e(2153,"Ajusta automaticamente a largura das colunas com base no conte\xFAdo atual das c\xE9lulas."),t(),i(2154,"p"),e(2155,`Este m\xE9todo calcula a largura ideal para cada coluna considerando o conte\xFAdo textual das c\xE9lulas vis\xEDveis,
cabe\xE7alhos das colunas e configura\xE7\xF5es de redimensionamento e tamanho fixo`),t(),i(2156,"p")(2157,"strong"),e(2158,"Exemplo de uso:"),t()(),i(2159,"pre")(2160,"code",31),e(2161,`// Ajusta colunas e mant\xE9m largura total da tabela
this.gridComponent.autoFitColumns(true);

// Ajusta colunas e permite redimensionamento fluido
this.gridComponent.autoFitColumns();`),t()(),i(2162,"blockquote")(2163,"p"),e(2164,"Este m\xE9todo \xE9 chamado automaticamente quando:"),t(),i(2165,"ul")(2166,"li"),e(2167,"A propriedade "),i(2168,"code"),e(2169,"t-auto-size"),t(),e(2170," \xE9 habilitada"),t(),i(2171,"li"),e(2172,"O evento "),i(2173,"code"),e(2174,"t-auto-size-on-scroll"),t(),e(2175," \xE9 disparado durante scroll virtual"),t()()()()()(),i(2176,"h5")(2177,"b"),e(2178,"Par\xE2metros"),t()(),i(2179,"table",16)(2180,"tr",17)(2181,"th",18),e(2182,"Nome"),t(),i(2183,"th",18),e(2184,"Tipo"),t(),i(2185,"th",18),e(2186,"Descri\xE7\xE3o"),t()(),i(2187,"tr",19)(2188,"td",20),e(2189," recalculate"),t(),i(2190,"td",23)(2191,"code",64),e(2192," boolean "),t()(),i(2193,"td",26)(2194,"p"),e(2195,"Quando "),i(2196,"code"),e(2197,"true"),t(),e(2198,`, mant\xE9m a largura total da tabela ap\xF3s o ajuste.
Quando `),i(2199,"code"),e(2200,"false"),t(),e(2201," ou omitido, limpa a largura fixa da tabela para permitir redimensionamento fluido."),t()()()(),o(2202,"br"),i(2203,"table",62)(2204,"tr",19)(2205,"th",63)(2206,"div",21)(2207,"h4")(2208,"span",22),e(2209," cleanRowActionsMode "),t()()()()(),i(2210,"tr",26)(2211,"td",26)(2212,"p"),e(2213,"Aplica o estado default aos itens editados, inclu\xEDdos e removidos do grid."),t(),i(2214,"p"),e(2215,`Usado para aplicar as altera\xE7\xF5es realizadas nos registros do grid, e tamb\xE9m
para remover os itens marcados para exclus\xE3o, de acordo com os par\xE2metros fornecidos.`),t(),i(2216,"pre")(2217,"code"),e(2218,`// Aplica o estado de edi\xE7\xE3o e inclus\xE3o, removendo os itens com $removed
this.cleanRowActionsMode();

// Aplica apenas as edi\xE7\xF5es, sem alterar as inclus\xF5es e exclus\xF5es
this.cleanRowActionsMode(true, false, false);

// Remove apenas os itens com $removed, sem aplicar edi\xE7\xF5es e inclus\xF5es
this.cleanRowActionsMode(false, false, true);`),t()(),i(2219,"p"),e(2220,`Exemplo de uso:
Se voc\xEA precisa aplicar o estado de todas as a\xE7\xF5es de linha, como edi\xE7\xE3o, inclus\xE3o e
remo\xE7\xE3o, basta chamar esta fun\xE7\xE3o. Por exemplo, se houver uma a\xE7\xE3o de aplicar o grid ao
salvar os dados, voc\xEA pode us\xE1-lo da seguinte forma:`),t(),i(2221,"pre")(2222,"code",31),e(2223,`// Ap\xF3s salvar os dados na API, voc\xEA pode limpar todos os estados de a\xE7\xE3o de linha
this.myService.saveData(this.thfGrid.getChangedItems()).subscribe(() => {
  this.thfGrid.cleanRowActionsMode(); // Limpa todas as a\xE7\xF5es de linha ap\xF3s salvar
  console.log('A\xE7\xF5es de linha limpas.');
});`),t()()()()(),i(2224,"h5")(2225,"b"),e(2226,"Par\xE2metros"),t()(),i(2227,"table",16)(2228,"tr",17)(2229,"th",18),e(2230,"Nome"),t(),i(2231,"th",18),e(2232,"Tipo"),t(),i(2233,"th",18),e(2234,"Descri\xE7\xE3o"),t()(),i(2235,"tr",19)(2236,"td",20),e(2237," edit"),t(),i(2238,"td",23)(2239,"code",64),e(2240," boolean "),t()(),i(2241,"td",26)(2242,"p"),e(2243,"Indica se deve aplicar as edi\xE7\xF5es realizadas nas linhas."),t()()(),i(2244,"tr",19)(2245,"td",20),e(2246," include"),t(),i(2247,"td",23)(2248,"code",64),e(2249," boolean "),t()(),i(2250,"td",26)(2251,"p"),e(2252,"Indica se deve aplicar as inclus\xF5es de novas linhas."),t()()(),i(2253,"tr",19)(2254,"td",20),e(2255," del"),t(),i(2256,"td",23)(2257,"code",64),e(2258," boolean "),t()(),i(2259,"td",26)(2260,"p"),e(2261,"Indica se deve remover as linhas marcadas para exclus\xE3o."),t()()()(),o(2262,"br"),i(2263,"table",62)(2264,"tr",19)(2265,"th",63)(2266,"div",21)(2267,"h4")(2268,"span",22),e(2269," deleteItems "),t()()()()(),i(2270,"tr",26)(2271,"td",26)(2272,"p"),e(2273,"Respons\xE1vel pela exclus\xE3o de itens selecionados."),t(),i(2274,"p"),e(2275,"Quando "),i(2276,"strong"),e(2277,"t-items"),t(),e(2278,` est\xE1 definido, a remo\xE7\xE3o pode ser feita em lote, excluindo todas as linhas selecionadas localmente.
Se utilizado com um servi\xE7o (`),i(2279,"strong"),e(2280,"t-service-api"),t(),e(2281," e/ou "),i(2282,"strong"),e(2283,"t-service-delete-api"),t(),e(2284,"), a exclus\xE3o permitida \xE9 de um item por vez."),t(),i(2285,"blockquote")(2286,"p"),e(2287,'Caso utilizado com a "edi\xE7\xE3o flu\xEDda offline via formul\xE1rio (propriedade '),i(2288,"strong"),e(2289,"t-grid-row-actions"),t(),e(2290,`)" remove localmente
as linhas sinalizadas com `),i(2291,"code"),e(2292,"$removed"),t(),e(2293,"."),t()(),i(2294,"blockquote")(2295,"p"),e(2296,"\xC9 poss\xEDvel habilitar a exclus\xE3o em lote com servi\xE7os remotos utilizando a propriedade "),i(2297,"strong"),e(2298,"t-allow-batch-delete"),t(),e(2299," em conjunto com "),i(2300,"strong"),e(2301,"t-service-api"),t(),e(2302," e/ou "),i(2303,"strong"),e(2304,"t-service-delete-api"),t(),e(2305,"."),t()()()()(),o(2306,"br"),i(2307,"table",62)(2308,"tr",19)(2309,"th",63)(2310,"div",21)(2311,"h4")(2312,"span",22),e(2313," getChangedItems "),t()()()()(),i(2314,"tr",26)(2315,"td",26)(2316,"p"),e(2317,"Retorna uma lista dos itens que foram modificados no grid, com a propriedade "),i(2318,"code"),e(2319,"op"),t(),e(2320,` indicando
a a\xE7\xE3o executada sobre cada item, podendo ser 'remove', 'add' ou 'replace'.`),t(),i(2321,"pre")(2322,"code"),e(2323,`// Exemplo de uso:
const changedItems = this.getChangedItems();
console.log(changedItems);
// Sa\xEDda esperada: [{ id: 1, name: 'Item 1', op: 'replace' }, { id: 2, name: 'Item 2', op: 'remove' }]`),t()()()()(),i(2324,"h5")(2325,"b"),e(2326,"Retorno"),t()(),i(2327,"table",16)(2328,"tr",17)(2329,"th",18),e(2330,"Tipo"),t(),i(2331,"th",18),e(2332,"Descri\xE7\xE3o"),t()(),i(2333,"tr",19)(2334,"td",23)(2335,"code",64),e(2336,"Array<any>"),t()(),i(2337,"td",26)(2338,"p"),e(2339,"Uma lista de objetos representando os itens modificados. Cada objeto ter\xE1 a propriedade "),i(2340,"code"),e(2341,"op"),t(),e(2342," que indica a a\xE7\xE3o realizada"),t()()()(),o(2343,"br"),i(2344,"table",62)(2345,"tr",19)(2346,"th",63)(2347,"div",21)(2348,"h4")(2349,"span",22),e(2350," getSelectedRows "),t()()()()(),i(2351,"tr",26)(2352,"td",26)(2353,"p"),e(2354,"Respons\xE1vel por retornar os itens do grid que est\xE3o selecionadas."),t()()()(),o(2355,"br"),i(2356,"table",62)(2357,"tr",19)(2358,"th",63)(2359,"div",21)(2360,"h4")(2361,"span",22),e(2362," showAdditionalHelp "),t()()()()(),i(2363,"tr",26)(2364,"td",26)(2365,"p"),e(2366,"Exibe "),i(2367,"code"),e(2368,"additionalHelpTooltip"),t(),e(2369," ou executa a a\xE7\xE3o definida em "),i(2370,"code"),e(2371,"additionalHelp"),t(),e(2372,` de um campo durante a
edi\xE7\xE3o (`),i(2373,"code"),e(2374,"t-edit-properties"),t(),e(2375," ou "),i(2376,"code"),e(2377,"t-grid-row-actions"),t(),e(2378,`) do grid. Para isso, ser\xE1 necess\xE1rio ter uma inst\xE2ncia do
componente no DOM e configurar uma tecla de atalho utilizando o evento `),i(2379,"code"),e(2380,"t-keydown"),t(),e(2381,"."),t(),i(2382,"pre")(2383,"code"),e(2384,`import { ThfGridComponent } from '@totvs/thf-components';
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
}`),t()(),i(2385,"blockquote")(2386,"p"),e(2387,`Com t-grid-row-actions: Alguns atalhos j\xE1 est\xE3o em uso, ent\xE3o, evite sobrescrev\xEA-los. Para mais detalhes,
consulte o `),i(2388,"a",65),e(2389,"TDN"),t(),e(2390,"."),t()()()()(),i(2391,"h5")(2392,"b"),e(2393,"Par\xE2metros"),t()(),i(2394,"table",16)(2395,"tr",17)(2396,"th",18),e(2397,"Nome"),t(),i(2398,"th",18),e(2399,"Tipo"),t(),i(2400,"th",18),e(2401,"Descri\xE7\xE3o"),t()(),i(2402,"tr",19)(2403,"td",20),e(2404," property"),t(),i(2405,"td",23)(2406,"code",64),e(2407," string "),t()(),i(2408,"td",26)(2409,"p"),e(2410,"Identificador da coluna."),t()()()(),o(2411,"br"),i(2412,"table",62)(2413,"tr",19)(2414,"th",63)(2415,"div",21)(2416,"h4")(2417,"span",22),e(2418," selectRowItem "),t()()()()(),i(2419,"tr",26)(2420,"td",26)(2421,"p"),e(2422,"Seleciona um item do grid."),t()()()(),i(2423,"h5")(2424,"b"),e(2425,"Par\xE2metros"),t()(),i(2426,"table",16)(2427,"tr",17)(2428,"th",18),e(2429,"Nome"),t(),i(2430,"th",18),e(2431,"Tipo"),t(),i(2432,"th",18),e(2433,"Descri\xE7\xE3o"),t()(),i(2434,"tr",19)(2435,"td",20),e(2436," item"),t(),i(2437,"td",23)(2438,"code",66),e(2439," { key: value } "),t(),i(2440,"code",27),e(2441," Function "),t()(),i(2442,"td",26)(2443,"p"),e(2444,"Item ou fun\xE7\xE3o que recebe como par\xE2metro o item e retorna um boolean."),t()()()(),o(2445,"br"),i(2446,"table",62)(2447,"tr",19)(2448,"th",63)(2449,"div",21)(2450,"h4")(2451,"span",22),e(2452," unselectRowItem "),t()()()()(),i(2453,"tr",26)(2454,"td",26)(2455,"p"),e(2456,"Desmarca o item que est\xE1 selecionado."),t()()()(),i(2457,"h5")(2458,"b"),e(2459,"Par\xE2metros"),t()(),i(2460,"table",16)(2461,"tr",17)(2462,"th",18),e(2463,"Nome"),t(),i(2464,"th",18),e(2465,"Tipo"),t(),i(2466,"th",18),e(2467,"Descri\xE7\xE3o"),t()(),i(2468,"tr",19)(2469,"td",20),e(2470," item"),t(),i(2471,"td",23)(2472,"code",66),e(2473," { key: value } "),t(),i(2474,"code",27),e(2475," Function "),t()(),i(2476,"td",26)(2477,"p"),e(2478,"Item ou fun\xE7\xE3o que recebe como par\xE2metro o item e retorna um boolean."),t()()()(),o(2479,"br"),i(2480,"table",62)(2481,"tr",19)(2482,"th",63)(2483,"div",21)(2484,"h4")(2485,"span",22),e(2486," applyFilters "),t()()()()(),i(2487,"tr",26)(2488,"td",26)(2489,"p"),e(2490,"M\xE9todo respons\xE1vel por realizar busca no servi\xE7o de dados podendo informar filtros e com o retorno, atualiza o grid."),t(),i(2491,"p"),e(2492,"Caso n\xE3o seja informado par\xE2metro, nada ser\xE1 adicionado ao GET, conforme abaixo:"),t(),i(2493,"pre")(2494,"code"),e(2495,"url + ?page=1&pageSize=10"),t()(),i(2496,"blockquote")(2497,"p"),e(2498,"Obs: os par\xE2metros "),i(2499,"code"),e(2500,"page"),t(),e(2501," e "),i(2502,"code"),e(2503,"pageSize"),t(),e(2504," sempre ser\xE3o chamados independente de ser enviados outros par\xE2metros."),t()(),i(2505,"p"),e(2506,"Caso sejam informados os par\xE2metros "),i(2507,"code"),e(2508,"{ name: 'JOHN', age: '23' }"),t(),e(2509,", todos ser\xE3o adicionados ao GET, conforme abaixo:"),t(),i(2510,"pre")(2511,"code"),e(2512,"url + ?page=1&pageSize=10&name=JOHN&age=23"),t()()()()(),i(2513,"h5")(2514,"b"),e(2515,"Par\xE2metros"),t()(),i(2516,"table",16)(2517,"tr",17)(2518,"th",18),e(2519,"Nome"),t(),i(2520,"th",18),e(2521,"Tipo"),t(),i(2522,"th",18),e(2523,"Descri\xE7\xE3o"),t()(),i(2524,"tr",19)(2525,"td",20),e(2526," queryParams"),t(),i(2527,"td",23)(2528,"code",66),e(2529," { key: value } "),t()(),i(2530,"td",26)(2531,"p"),e(2532,"Formato do objeto a ser enviado."),t(),i(2533,"blockquote")(2534,"p"),e(2535,"Pode ser utilizada qualquer string como key, e qualquer string ou number como value."),t()()()()(),o(2536,"br"),i(2537,"table",62)(2538,"tr",19)(2539,"th",63)(2540,"div",21)(2541,"h4")(2542,"span",22),e(2543," calculateHeightDynamically "),t()()()()(),i(2544,"tr",26)(2545,"td",26)(2546,"p"),e(2547,"Mant\xE9m compatibilidade com vers\xF5es anteriores, chamando "),i(2548,"code"),e(2549,"calculateDynamicSize"),t(),e(2550," com a propriedade "),i(2551,"code"),e(2552,"'height'"),t(),e(2553,"."),t()()()(),i(2554,"h5")(2555,"b"),e(2556,"Par\xE2metros"),t()(),i(2557,"table",16)(2558,"tr",17)(2559,"th",18),e(2560,"Nome"),t(),i(2561,"th",18),e(2562,"Tipo"),t(),i(2563,"th",18),e(2564,"Descri\xE7\xE3o"),t()(),i(2565,"tr",19)(2566,"td",20),e(2567," callRowHeight"),t(),o(2568,"td",23),i(2569,"td",26)(2570,"p"),e(2571,"Define se o "),i(2572,"code"),e(2573,"calculateRowHeight"),t(),e(2574," deve ser chamado ap\xF3s o c\xE1lculo do tamanho."),t()()()(),o(2575,"br"),i(2576,"table",62)(2577,"tr",19)(2578,"th",63)(2579,"div",21)(2580,"h4")(2581,"span",22),e(2582," removeItem "),t()()()()(),i(2583,"tr",26)(2584,"td",26)(2585,"p"),e(2586,"Remove um item localmente do grid."),t()()()(),i(2587,"h5")(2588,"b"),e(2589,"Par\xE2metros"),t()(),i(2590,"table",16)(2591,"tr",17)(2592,"th",18),e(2593,"Nome"),t(),i(2594,"th",18),e(2595,"Tipo"),t(),i(2596,"th",18),e(2597,"Descri\xE7\xE3o"),t()(),i(2598,"tr",19)(2599,"td",20),e(2600," item"),t(),i(2601,"td",23)(2602,"code",51),e(2603," number "),t(),i(2604,"code",66),e(2605," { key: value } "),t()(),i(2606,"td",26)(2607,"p"),e(2608,"\xCDndice ou item que ser\xE1 removido."),t(),i(2609,"blockquote")(2610,"p"),e(2611,"Ao remover o item, a linha que o representa ser\xE1 removida do grid."),t()()()()(),o(2612,"br"),i(2613,"table",62)(2614,"tr",19)(2615,"th",63)(2616,"div",21)(2617,"h4")(2618,"span",22),e(2619," unselectRows "),t()()()()(),i(2620,"tr",26)(2621,"td",26)(2622,"p"),e(2623,"M\xE9todo respons\xE1vel por desmarcar as linhas que est\xE3o selecionadas."),t()()()(),o(2624,"br"),i(2625,"table",62)(2626,"tr",19)(2627,"th",63)(2628,"div",21)(2629,"h4")(2630,"span",22),e(2631," getInfoProperties "),t()()()()(),i(2632,"tr",26)(2633,"td",26)(2634,"p"),e(2635,"M\xE9todo que retorna os itens atuais da tabela, o total de itens, n\xFAmero da p\xE1gina atual e pageSize"),t()()()(),o(2636,"br"),i(2637,"table",62)(2638,"tr",19)(2639,"th",63)(2640,"div",21)(2641,"h4")(2642,"span",22),e(2643," updateItem "),t()()()()(),i(2644,"tr",26)(2645,"td",26)(2646,"p"),e(2647,"Atualiza um item do grid quando utilizado "),i(2648,"strong"),e(2649,"t-itens"),t(),e(2650,"."),t()()()(),i(2651,"h5")(2652,"b"),e(2653,"Par\xE2metros"),t()(),i(2654,"table",16)(2655,"tr",17)(2656,"th",18),e(2657,"Nome"),t(),i(2658,"th",18),e(2659,"Tipo"),t(),i(2660,"th",18),e(2661,"Descri\xE7\xE3o"),t()(),i(2662,"tr",19)(2663,"td",20),e(2664," item"),t(),i(2665,"td",23)(2666,"code",51),e(2667," number "),t(),i(2668,"code",66),e(2669," { key: value } "),t()(),i(2670,"td",26)(2671,"p"),e(2672,"\xCDndice ou o item que ser\xE1 atualizado."),t()()(),i(2673,"tr",19)(2674,"td",20),e(2675," updatedItem"),t(),i(2676,"td",23)(2677,"code",66),e(2678," { key: value } "),t()(),i(2679,"td",26)(2680,"p"),e(2681,"Item que foi atualizado."),t(),i(2682,"blockquote")(2683,"p"),e(2684,"Ao atualizar o item, a informa\xE7\xE3o ser\xE1 alterada no grid."),t()()()()(),o(2685,"br"),i(2686,"table",62)(2687,"tr",19)(2688,"th",63)(2689,"div",21)(2690,"h4")(2691,"span",22),e(2692," calculateDynamicSize "),t()()()()(),i(2693,"tr",26)(2694,"td",26)(2695,"p"),e(2696,"calcula dinamicamente o tamanho da grid com base na porcentagem definida nas propriedades "),i(2697,"strong"),e(2698,"t-height"),t(),e(2699,`,
`),i(2700,"strong"),e(2701,"t-min-height"),t(),e(2702," e "),i(2703,"strong"),e(2704,"t-max-height"),t(),e(2705,"."),t(),i(2706,"p"),e(2707,`Caso a grid esteja dentro de um componente ou elemento que altere sua visibilidade,
\xE9 necess\xE1rio chamar esta fun\xE7\xE3o para garantir um c\xE1lculo correto. Exemplo:`),t(),i(2708,"pre")(2709,"code",28),e(2710,`<po-tabs>
 <po-tab (p-click)="emitClickTab()" p-label="PO Tabs">
   <thf-grid #thfGrid> </thf-grid>
 </po-tab>
</po-tabs>`),t()(),i(2711,"pre")(2712,"code",31),e(2713,`@ViewChild('thfGrid') thfGrid: ThfGridComponent;

emitClickTab() {
 // Time-out necess\xE1rio para garantir que o DOM foi atualizado antes do c\xE1lculo da altura.
 setTimeout(() => {
   this.thfGrid.calculateDynamicSize('height', true);
 }, 100);
}`),t()()()()(),i(2714,"h5")(2715,"b"),e(2716,"Par\xE2metros"),t()(),i(2717,"table",16)(2718,"tr",17)(2719,"th",18),e(2720,"Nome"),t(),i(2721,"th",18),e(2722,"Tipo"),t(),i(2723,"th",18),e(2724,"Descri\xE7\xE3o"),t()(),i(2725,"tr",19)(2726,"td",20),e(2727," property"),t(),o(2728,"td",23),i(2729,"td",26)(2730,"p"),e(2731,"Define qual propriedade ser\xE1 calculada: "),i(2732,"code"),e(2733,"'height'"),t(),e(2734,", "),i(2735,"code"),e(2736,"'minHeight'"),t(),e(2737," ou "),i(2738,"code"),e(2739,"'maxHeight'"),t(),e(2740,"."),t()()(),i(2741,"tr",19)(2742,"td",20),e(2743," callRowHeight"),t(),o(2744,"td",23),i(2745,"td",26)(2746,"p"),e(2747,"Define se o m\xE9todo "),i(2748,"code"),e(2749,"calculateRowHeight"),t(),e(2750," deve ser chamado ap\xF3s o c\xE1lculo do tamanho."),t()()()(),o(2751,"br"),t()()(),y(2752,2),t(),i(2753,"po-tab",67),y(2754,3),i(2755,"po-container",5)(2756,"po-accordion",6)(2757,"po-accordion-item",68)(2758,"h4",9)(2759,"code"),e(2760,"ThfTableAction"),t()(),i(2761,"div",10)(2762,"p"),e(2763," Interface para configura\xE7\xE3o das a\xE7\xF5es."),t()(),i(2764,"h4",15),e(2765,"Propriedades"),t(),i(2766,"table",16)(2767,"tr",17)(2768,"th",18),e(2769,"Nome"),t(),i(2770,"th",18),e(2771,"Tipo"),t(),i(2772,"th",18),e(2773,"Descri\xE7\xE3o"),t()(),i(2774,"tr",19)(2775,"td",20)(2776,"div",21)(2777,"span",22),e(2778," action"),o(2779,"br"),t()()(),i(2780,"td",23)(2781,"code",27),e(2782,"Function"),t()(),i(2783,"td",26)(2784,"em")(2785,"strong"),e(2786,"(opcional)"),t()(),i(2787,"p"),e(2788,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),i(2789,"blockquote")(2790,"p"),e(2791,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),i(2792,"em"),e(2793,"bind"),t(),e(2794,"."),t()(),i(2795,"p"),e(2796,"Exemplo: "),i(2797,"code"),e(2798,"action: this.myFunction.bind(this)"),t()()()(),i(2799,"tr",19)(2800,"td",20)(2801,"div",21)(2802,"span",22),e(2803," disabled"),o(2804,"br"),t()()(),i(2805,"td",23)(2806,"code",24),e(2807,"boolean "),t(),i(2808,"code",27),e(2809," Function"),t()(),i(2810,"td",26)(2811,"em")(2812,"strong"),e(2813,"(opcional)"),t()(),i(2814,"p"),e(2815,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),i(2816,"p"),e(2817,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),i(2818,"tr",19)(2819,"td",20)(2820,"div",21)(2821,"span",22),e(2822," fixed"),o(2823,"br"),t()()(),i(2824,"td",23)(2825,"code",24),e(2826,"boolean"),t()(),i(2827,"td",26)(2828,"em")(2829,"strong"),e(2830,"(opcional)"),t()(),i(2831,"p"),e(2832,"Propriedade para fixar a a\xE7\xE3o"),t()()(),i(2833,"tr",19)(2834,"td",20)(2835,"div",21)(2836,"span",22),e(2837," icon"),o(2838,"br"),t()()(),i(2839,"td",23)(2840,"code",40),e(2841,"string "),t(),i(2842,"code",50),e(2843," TemplateRef<void>"),t()(),i(2844,"td",26)(2845,"em")(2846,"strong"),e(2847,"(opcional)"),t()(),i(2848,"p"),e(2849,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),i(2850,"p"),e(2851,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),i(2852,"a",69),e(2853,"Biblioteca de \xEDcones"),t(),e(2854,". conforme exemplo abaixo:"),t(),i(2855,"pre")(2856,"code"),e(2857,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>`),t()(),i(2858,"p"),e(2859,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),i(2860,"pre")(2861,"code"),e(2862,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>`),t()(),i(2863,"p"),e(2864,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),i(2865,"code"),e(2866,"TemplateRef"),t(),e(2867,`, conforme exemplo abaixo:
component.html:`),t(),i(2868,"pre")(2869,"code"),e(2870,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>`),t()(),i(2871,"p"),e(2872,"component.ts:"),t(),i(2873,"pre")(2874,"code"),e(2875,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];`),t()()()(),i(2876,"tr",19)(2877,"td",20)(2878,"div",21)(2879,"span",22),e(2880," label"),o(2881,"br"),t()()(),i(2882,"td",23)(2883,"code",40),e(2884,"string"),t()(),i(2885,"td",26)(2886,"p"),e(2887,"R\xF3tulo da a\xE7\xE3o."),t()()(),i(2888,"tr",19)(2889,"td",20)(2890,"div",21)(2891,"span",22),e(2892," selected"),o(2893,"br"),t()()(),i(2894,"td",23)(2895,"code",24),e(2896,"boolean"),t()(),i(2897,"td",26)(2898,"em")(2899,"strong"),e(2900,"(opcional)"),t()(),i(2901,"p"),e(2902,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),i(2903,"tr",19)(2904,"td",20)(2905,"div",21)(2906,"span",22),e(2907," separator"),o(2908,"br"),t()()(),i(2909,"td",23)(2910,"code",24),e(2911,"boolean"),t()(),i(2912,"td",26)(2913,"em")(2914,"strong"),e(2915,"(opcional)"),t()(),i(2916,"p"),e(2917,"Atribui uma linha separadora acima do item."),t()()(),i(2918,"tr",19)(2919,"td",20)(2920,"div",21)(2921,"span",22),e(2922," type"),o(2923,"br"),t()()(),i(2924,"td",23)(2925,"code",40),e(2926,"string"),t()(),i(2927,"td",26)(2928,"em")(2929,"strong"),e(2930,"(opcional)"),t()(),i(2931,"p"),e(2932,"Define a cor do item, sendo "),i(2933,"code"),e(2934,"default"),t(),e(2935," o padr\xE3o."),t(),i(2936,"p"),e(2937,"Valores v\xE1lidos:"),t(),i(2938,"ul")(2939,"li")(2940,"code"),e(2941,"default"),t()(),i(2942,"li")(2943,"code"),e(2944,"danger"),t(),e(2945," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),i(2946,"tr",19)(2947,"td",20)(2948,"div",21)(2949,"span",22),e(2950," url"),o(2951,"br"),t()()(),i(2952,"td",23)(2953,"code",40),e(2954,"string"),t()(),i(2955,"td",26)(2956,"em")(2957,"strong"),e(2958,"(opcional)"),t()(),i(2959,"p"),e(2960,"URL utilizada no redirecionamento das p\xE1ginas."),t()()(),i(2961,"tr",19)(2962,"td",20)(2963,"div",21)(2964,"span",22),e(2965," visible"),o(2966,"br"),t()()(),i(2967,"td",23)(2968,"code",24),e(2969,"boolean "),t(),i(2970,"code",27),e(2971," Function"),t()(),i(2972,"td",26)(2973,"em")(2974,"strong"),e(2975,"(opcional)"),t()(),i(2976,"p"),e(2977,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),i(2978,"blockquote")(2979,"p"),e(2980,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),i(2981,"p"),e(2982,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),i(2983,"ul")(2984,"li")(2985,"p"),e(2986,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),i(2987,"li")(2988,"p"),e(2989,"Informar diretamente um valor booleano."),t()()()()()()(),i(2990,"po-accordion-item",70)(2991,"h4",9)(2992,"code"),e(2993,"ThfAggregateDescriptor"),t()(),i(2994,"div",10)(2995,"p"),e(2996,"Recebe um objeto contendo a coluna, uma label e a fun\xE7\xE3o que ser\xE1 aplicada para o c\xE1lculo do totalizador."),t()(),i(2997,"h4",15),e(2998,"Propriedades"),t(),i(2999,"table",16)(3e3,"tr",17)(3001,"th",18),e(3002,"Nome"),t(),i(3003,"th",18),e(3004,"Tipo"),t(),i(3005,"th",18),e(3006,"Descri\xE7\xE3o"),t()(),i(3007,"tr",19)(3008,"td",20)(3009,"div",21)(3010,"span",22),e(3011," aggregate"),o(3012,"br"),t()()(),i(3013,"td",23)(3014,"code",71),e(3015,"'sum' "),t(),i(3016,"code",72),e(3017," 'average' "),t(),i(3018,"code",73),e(3019," 'count' "),t(),i(3020,"code",74),e(3021," 'min' "),t(),i(3022,"code",75),e(3023," 'max'"),t()(),i(3024,"td",26)(3025,"p"),e(3026,"Propriedade que recebe a fun\xE7\xE3o para o c\xE1lculo."),t()()(),i(3027,"tr",19)(3028,"td",20)(3029,"div",21)(3030,"span",22),e(3031," field"),o(3032,"br"),t()()(),i(3033,"td",23)(3034,"code",40),e(3035,"string"),t()(),i(3036,"td",26)(3037,"p"),e(3038,"Coluna que ser\xE1 utilizada pelo totalizador."),t()()(),i(3039,"tr",19)(3040,"td",20)(3041,"div",21)(3042,"span",22),e(3043," label"),o(3044,"br"),t()()(),i(3045,"td",23)(3046,"code",40),e(3047,"string"),t()(),i(3048,"td",26)(3049,"em")(3050,"strong"),e(3051,"(opcional)"),t()(),i(3052,"p"),e(3053,"Texto que ser\xE1 exibido junto ao resultado."),t()()()()(),i(3054,"po-accordion-item",76)(3055,"h4",9)(3056,"code"),e(3057,"ThfGridColumnSort"),t()(),i(3058,"div",10)(3059,"p"),e(3060,"Interface para definir a ordena\xE7\xE3o das colunas ("),i(3061,"strong"),e(3062,"t-sort"),t(),e(3063,")."),t()(),i(3064,"h4",15),e(3065,"Propriedades"),t(),i(3066,"table",16)(3067,"tr",17)(3068,"th",18),e(3069,"Nome"),t(),i(3070,"th",18),e(3071,"Tipo"),t(),i(3072,"th",18),e(3073,"Descri\xE7\xE3o"),t()(),i(3074,"tr",19)(3075,"td",20)(3076,"div",21)(3077,"span",22),e(3078," dir"),o(3079,"br"),t()()(),i(3080,"td",23)(3081,"code",77),e(3082,"'asc' "),t(),i(3083,"code",78),e(3084," 'desc'"),t()(),i(3085,"td",26)(3086,"em")(3087,"strong"),e(3088,"(opcional)"),t()(),i(3089,"p"),e(3090,"Dire\xE7\xE3o da coluna:"),t(),i(3091,"ul")(3092,"li")(3093,"code"),e(3094,"asc"),t()(),i(3095,"li")(3096,"code"),e(3097,"desc"),t()()()()(),i(3098,"tr",19)(3099,"td",20)(3100,"div",21)(3101,"span",22),e(3102," field"),o(3103,"br"),t()()(),i(3104,"td",23)(3105,"code",40),e(3106,"string"),t()(),i(3107,"td",26)(3108,"p"),e(3109,"Coluna"),t()()()()(),i(3110,"po-accordion-item",79)(3111,"h4",9)(3112,"code"),e(3113,"ThfGridColumn"),t()(),i(3114,"div",10)(3115,"p"),e(3116,"Interface para configura\xE7\xE3o das colunas ("),i(3117,"strong"),e(3118,"t-columns"),t(),e(3119,")."),t()(),i(3120,"h4",15),e(3121,"Propriedades"),t(),i(3122,"table",16)(3123,"tr",17)(3124,"th",18),e(3125,"Nome"),t(),i(3126,"th",18),e(3127,"Tipo"),t(),i(3128,"th",18),e(3129,"Descri\xE7\xE3o"),t()(),i(3130,"tr",19)(3131,"td",20)(3132,"div",21)(3133,"span",22),e(3134," action"),o(3135,"br"),t()()(),i(3136,"td",23)(3137,"code",27),e(3138,"Function"),t()(),i(3139,"td",26)(3140,"em")(3141,"strong"),e(3142,"(opcional)"),t()(),i(3143,"p"),e(3144,"Define uma a\xE7\xE3o na coluna quando o tipo da coluna for "),i(3145,"code"),e(3146,"link"),t(),e(3147," ou "),i(3148,"code"),e(3149,"icon"),t(),e(3150,"."),t(),i(3151,"blockquote")(3152,"p"),e(3153,"Quando for do tipo "),i(3154,"code"),e(3155,"link"),t(),e(3156,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),t()(),i(3157,"blockquote")(3158,"p"),e(3159,"Quando for do tipo "),i(3160,"code"),e(3161,"icon"),t(),e(3162," enviar\xE1 o objeto completo da linha e o segundo par\xE2metro ser\xE1 a defini\xE7\xE3o da coluna."),t()()()(),i(3163,"tr",19)(3164,"td",20)(3165,"div",21)(3166,"span",22),e(3167," boolean"),o(3168,"br"),t()()(),i(3169,"td",23)(3170,"code",80),e(3171,"PoTableBoolean"),t()(),i(3172,"td",26)(3173,"em")(3174,"strong"),e(3175,"(opcional)"),t()(),i(3176,"p"),e(3177,"Define um objeto do tipo "),i(3178,"code"),e(3179,"PoTableBoolean"),t(),e(3180," para as colunas do tipo "),i(3181,"em"),e(3182,"boolean"),t(),e(3183,". Por exemplo:"),t(),i(3184,"pre")(3185,"code"),e(3186,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}`),t()(),i(3187,"blockquote")(3188,"p"),e(3189,"Caso n\xE3o seja definido um objeto para colunas do tipo "),i(3190,"em"),e(3191,"boolean"),t(),e(3192,`,
esta exibir\xE1 por padr\xE3o `),i(3193,"code"),e(3194,"Sim"),t(),e(3195," e "),i(3196,"code"),e(3197,"N\xE3o"),t(),e(3198," de acordo com os valores "),i(3199,"em"),e(3200,"booleanos"),t(),e(3201,"."),t()()()(),i(3202,"tr",19)(3203,"td",20)(3204,"div",21)(3205,"span",22),e(3206," booleanFalse"),o(3207,"br"),t()()(),i(3208,"td",23)(3209,"code",40),e(3210,"string"),t()(),i(3211,"td",26)(3212,"em")(3213,"strong"),e(3214,"(opcional)"),t()(),i(3215,"p"),e(3216,"Texto exibido quando o valor da coluna for "),i(3217,"em"),e(3218,"false"),t(),e(3219,"."),t()()(),i(3220,"tr",19)(3221,"td",20)(3222,"div",21)(3223,"span",22),e(3224," booleanTrue"),o(3225,"br"),t()()(),i(3226,"td",23)(3227,"code",40),e(3228,"string"),t()(),i(3229,"td",26)(3230,"em")(3231,"strong"),e(3232,"(opcional)"),t()(),i(3233,"p"),e(3234,"Texto exibido quando o valor da coluna for "),i(3235,"em"),e(3236,"true"),t(),e(3237,"."),t()()(),i(3238,"tr",19)(3239,"td",20)(3240,"div",21)(3241,"span",22),e(3242," color"),o(3243,"br"),t()()(),i(3244,"td",23)(3245,"code",40),e(3246,"string "),t(),i(3247,"code",27),e(3248," Function"),t()(),i(3249,"td",26)(3250,"em")(3251,"strong"),e(3252,"(opcional)"),t()(),i(3253,"p"),e(3254,"Define a cor que ser\xE1 aplicada no conte\xFAdo da coluna."),t(),i(3255,"p"),e(3256,"Valores v\xE1lidos:"),t(),i(3257,"ul")(3258,"li"),o(3259,"span",81),i(3260,"code"),e(3261,"color-01"),t()(),i(3262,"li"),o(3263,"span",82),i(3264,"code"),e(3265,"color-02"),t()(),i(3266,"li"),o(3267,"span",83),i(3268,"code"),e(3269,"color-03"),t()(),i(3270,"li"),o(3271,"span",84),i(3272,"code"),e(3273,"color-04"),t()(),i(3274,"li"),o(3275,"span",85),i(3276,"code"),e(3277,"color-05"),t()(),i(3278,"li"),o(3279,"span",86),i(3280,"code"),e(3281,"color-06"),t()(),i(3282,"li"),o(3283,"span",87),i(3284,"code"),e(3285,"color-07"),t()(),i(3286,"li"),o(3287,"span",88),i(3288,"code"),e(3289,"color-08"),t()(),i(3290,"li"),o(3291,"span",89),i(3292,"code"),e(3293,"color-09"),t()(),i(3294,"li"),o(3295,"span",90),i(3296,"code"),e(3297,"color-10"),t()(),i(3298,"li"),o(3299,"span",91),i(3300,"code"),e(3301,"color-11"),t()(),i(3302,"li"),o(3303,"span",92),i(3304,"code"),e(3305,"color-12"),t()()(),i(3306,"blockquote")(3307,"p"),e(3308,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),t()(),i(3309,"pre")(3310,"code"),e(3311,"(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }"),t()(),i(3312,"blockquote")(3313,"p"),e(3314,"\xC9 poss\xEDvel tamb\xE9m us\xE1-la na coluna do tipo "),i(3315,"code"),e(3316,"icons"),t(),e(3317,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),t()(),i(3318,"pre")(3319,"code"),e(3320,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},`),t()()()(),i(3321,"tr",19)(3322,"td",20)(3323,"div",21)(3324,"span",22),e(3325," detail"),o(3326,"br"),t()()(),i(3327,"td",23)(3328,"code",93),e(3329,"PoTableDetail"),t()(),i(3330,"td",26)(3331,"em")(3332,"strong"),e(3333,"(opcional)"),t()(),i(3334,"p"),e(3335,"Define um objeto que segue a interface "),i(3336,"code"),e(3337,"PoTableDetail"),t(),e(3338,", para as colunas de detalhes. Por exemplo:"),t(),i(3339,"pre")(3340,"code"),e(3341,"{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }"),t()()()(),i(3342,"tr",19)(3343,"td",20)(3344,"div",21)(3345,"span",22),e(3346," disabled"),o(3347,"br"),t()()(),i(3348,"td",23)(3349,"code",27),e(3350,"Function"),t()(),i(3351,"td",26)(3352,"em")(3353,"strong"),e(3354,"(opcional)"),t()(),i(3355,"p"),e(3356,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),i(3357,"em"),e(3358,"link"),t(),e(3359," e sua a\xE7\xE3o."),t(),i(3360,"blockquote")(3361,"p"),e(3362,"Propriedade dispon\xEDvel nas colunas do tipo "),i(3363,"code"),e(3364,"link"),t(),e(3365,"."),t()()()(),i(3366,"tr",19)(3367,"td",20)(3368,"div",21)(3369,"span",22),e(3370," editProperties"),o(3371,"br"),t()()(),i(3372,"td",23)(3373,"code",94),e(3374,"CustomEditProperties"),t()(),i(3375,"td",26)(3376,"em")(3377,"strong"),e(3378,"(opcional)"),t()(),i(3379,"p"),e(3380,"Propriedade para customizar as colunas edit\xE1veis"),t()()(),i(3381,"tr",19)(3382,"td",20)(3383,"div",21)(3384,"span",22),e(3385," fixed"),o(3386,"br"),t()()(),i(3387,"td",23)(3388,"code",24),e(3389,"boolean"),t()(),i(3390,"td",26)(3391,"em")(3392,"strong"),e(3393,"(opcional)"),t()(),i(3394,"p"),e(3395,"Propriedade para fixar a coluna inicialmente."),t(),i(3396,"blockquote")(3397,"p"),e(3398,`No momento, \xE9 poss\xEDvel fixar apenas 2 colunas e garantir o funcionamento correto.
Caso a coluna de a\xE7\xF5es esteja fixa, \xE9 poss\xEDvel fixar somente 1 coluna corretamente.`),t()()()(),i(3399,"tr",19)(3400,"td",20)(3401,"div",21)(3402,"span",22),e(3403," format"),o(3404,"br"),t()()(),i(3405,"td",23)(3406,"code",40),e(3407,"string"),t()(),i(3408,"td",26)(3409,"em")(3410,"strong"),e(3411,"(opcional)"),t()(),i(3412,"p"),e(3413,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(3414,"ul")(3415,"li"),e(3416,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(3417,"li"),e(3418,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t(),i(3419,"li"),e(3420,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e
milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),t(),i(3421,"li"),e(3422,"Formato para n\xFAmeros (number): aceita um valor seguindo o padr\xE3o "),i(3423,"a",95)(3424,"strong"),e(3425,"DecimalPipe"),t()(),e(3426,`
para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original. Exemplo:`),i(3427,"ul")(3428,"li"),e(3429,"Com o valor de entrada: "),i(3430,"code"),e(3431,"50"),t(),e(3432," e a valor para formata\xE7\xE3o: "),i(3433,"code"),e(3434,"'1.2-5'"),t(),e(3435," o resultado ser\xE1: "),i(3436,"code"),e(3437,"50.00"),t()()()()()()(),i(3438,"tr",19)(3439,"td",20)(3440,"div",21)(3441,"span",22),e(3442," icons"),o(3443,"br"),t()()(),i(3444,"td",23)(3445,"code",96),e(3446,"Array<PoTableColumnIcon>"),t()(),i(3447,"td",26)(3448,"em")(3449,"strong"),e(3450,"(opcional)"),t()(),i(3451,"p"),e(3452,"Define um "),i(3453,"em"),e(3454,"array"),t(),e(3455," de objetos para colunas de \xEDcones que ir\xE1 sobrepor os valores como "),i(3456,"code"),e(3457,"action"),t(),e(3458," e "),i(3459,"code"),e(3460,"color"),t(),e(3461,`
definidos na coluna, \xE0 partir do `),i(3462,"em"),e(3463,"value"),t(),e(3464," da "),i(3465,"a",97)(3466,"code"),e(3467,"PoTableColumnIcon"),t()(),e(3468,", por exemplo:"),t(),i(3469,"pre")(3470,"code"),e(3471,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},`),t()(),i(3472,"pre")(3473,"code"),e(3474,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...`),t()()()(),i(3475,"tr",19)(3476,"td",20)(3477,"div",21)(3478,"span",22),e(3479," key"),o(3480,"br"),t()()(),i(3481,"td",23)(3482,"code",24),e(3483,"boolean "),t(),i(3484,"code",51),e(3485," number"),t()(),i(3486,"td",26)(3487,"em")(3488,"strong"),e(3489,"(opcional)"),t()(),i(3490,"p"),e(3491,`Indica se a coluna faz parte da chave composta para exclus\xE3o de registros.
Pode ser do tipo num\xE9rico ou booleano. Os valores num\xE9ricos sempre ser\xE3o priorizados em rela\xE7\xE3o aos booleanos.
Para a exclus\xE3o, \xE9 necess\xE1rio que a `),i(3492,"code"),e(3493,"API"),t(),e(3494," esteja preparada para receber uma ou mais "),i(3495,"code"),e(3496,"keys"),t(),e(3497," concatenadas com pipe '|' para identifica\xE7\xE3o do registro. ex.: DELETE {end-point}/{keys}"),t(),i(3498,"blockquote")(3499,"p"),e(3500,`Exemplo de keys: [{ property: 'id', key: 1 }, { property: 'name', key: true }, { property: 'email', key: 2 }].
Resposta do exemplo: 'valor de id|valor de email|valor de name'`),t()()()(),i(3501,"tr",19)(3502,"td",20)(3503,"div",21)(3504,"span",22),e(3505," label"),o(3506,"br"),t()()(),i(3507,"td",23)(3508,"code",40),e(3509,"string"),t()(),i(3510,"td",26)(3511,"em")(3512,"strong"),e(3513,"(opcional)"),t()(),i(3514,"p"),e(3515,"Texto para t\xEDtulo da coluna."),t(),i(3516,"p"),e(3517,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(3518,"em"),e(3519,"label"),t(),e(3520," o valor da propriedade "),i(3521,"em"),e(3522,"property"),t(),e(3523," com a primeira letra em mai\xFAsculo."),t()()(),i(3524,"tr",19)(3525,"td",20)(3526,"div",21)(3527,"span",22),e(3528," labels"),o(3529,"br"),t()()(),i(3530,"td",23)(3531,"code",98),e(3532,"Array<PoTableColumnLabel>"),t()(),i(3533,"td",26)(3534,"em")(3535,"strong"),e(3536,"(opcional)"),t()(),i(3537,"p"),e(3538,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(3539,"code"),e(3540,"PoTableColumnLabel"),t(),e(3541," na qual devem ser definidas os labels. Por exemplo:"),t(),i(3542,"pre")(3543,"code"),e(3544,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}`),t()()()(),i(3545,"tr",19)(3546,"td",20)(3547,"div",21)(3548,"span",22),e(3549," link"),o(3550,"br"),t()()(),i(3551,"td",23)(3552,"code",40),e(3553,"string"),t()(),i(3554,"td",26)(3555,"em")(3556,"strong"),e(3557,"(opcional)"),t()(),i(3558,"p"),e(3559,"Define o nome da propriedade que conter\xE1 o "),i(3560,"code"),e(3561,"link"),t(),e(3562," a ser redirecionado."),t()()(),i(3563,"tr",19)(3564,"td",20)(3565,"div",21)(3566,"span",22),e(3567," mask"),o(3568,"br"),t()()(),i(3569,"td",23)(3570,"code",40),e(3571,"string"),t()(),i(3572,"td",26)(3573,"em")(3574,"strong"),e(3575,"(opcional)"),t()(),i(3576,"p"),e(3577,`Indica uma m\xE1scara para a coluna
Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
Aplic\xE1vel nas colunas do tipo `),i(3578,"code"),e(3579,"number"),t(),e(3580," e "),i(3581,"code"),e(3582,"string"),t(),e(3583,`
Nas colunas do tipo `),i(3584,"code"),e(3585,"number"),t(),e(3586," a propriedade "),i(3587,"code"),e(3588,"mask"),t(),e(3589," ter\xE1 prioridade sob "),i(3590,"code"),e(3591,"format"),t()()()(),i(3592,"tr",19)(3593,"td",20)(3594,"div",21)(3595,"span",22),e(3596," property"),o(3597,"br"),t()()(),i(3598,"td",23)(3599,"code",40),e(3600,"string"),t()(),i(3601,"td",26)(3602,"p"),e(3603,"Identificador da coluna."),t()()(),i(3604,"tr",19)(3605,"td",20)(3606,"div",21)(3607,"span",22),e(3608," resizable"),o(3609,"br"),t()()(),i(3610,"td",23)(3611,"code",24),e(3612,"boolean"),t()(),i(3613,"td",26)(3614,"em")(3615,"strong"),e(3616,"(opcional)"),t()(),i(3617,"p"),e(3618,"Define se a coluna pode ser redimensionada pelo usu\xE1rio."),t()()(),i(3619,"tr",19)(3620,"td",20)(3621,"div",21)(3622,"span",22),e(3623," sortable"),o(3624,"br"),t()()(),i(3625,"td",23)(3626,"code",24),e(3627,"boolean"),t()(),i(3628,"td",26)(3629,"em")(3630,"strong"),e(3631,"(opcional)"),t()(),i(3632,"p"),e(3633,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),t()()(),i(3634,"tr",19)(3635,"td",20)(3636,"div",21)(3637,"span",22),e(3638," subtitles"),o(3639,"br"),t()()(),i(3640,"td",23)(3641,"code",99),e(3642,"Array<PoTableSubtitleColumn>"),t()(),i(3643,"td",26)(3644,"em")(3645,"strong"),e(3646,"(opcional)"),t()(),i(3647,"p"),e(3648,"Define um array de objetos para as colunas de legenda. Onde, "),i(3649,"code"),e(3650,"subtitles"),t(),e(3651,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),t(),i(3652,"pre")(3653,"code"),e(3654,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', content: '2' }
}`),t()(),i(3655,"p"),e(3656,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),t()()(),i(3657,"tr",19)(3658,"td",20)(3659,"div",21)(3660,"span",22),e(3661," tooltip"),o(3662,"br"),t()()(),i(3663,"td",23)(3664,"code",40),e(3665,"string"),t()(),i(3666,"td",26)(3667,"em")(3668,"strong"),e(3669,"(opcional)"),t()(),i(3670,"p"),e(3671,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),i(3672,"em"),e(3673,"mouse"),t(),e(3674," sobre um texto."),t(),i(3675,"blockquote")(3676,"p"),e(3677,"O tooltip s\xF3 ser\xE1 vis\xEDvel se for uma coluna do tipo "),i(3678,"em"),e(3679,"link"),t(),e(3680,"."),t()(),i(3681,"blockquote")(3682,"p"),e(3683,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),i(3684,"em"),e(3685,"tooltip"),t(),e(3686," e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula."),t()()()(),i(3687,"tr",19)(3688,"td",20)(3689,"div",21)(3690,"span",22),e(3691," type"),o(3692,"br"),t()()(),i(3693,"td",23)(3694,"code",40),e(3695,"string"),t()(),i(3696,"td",26)(3697,"em")(3698,"strong"),e(3699,"(opcional)"),t()(),i(3700,"p"),e(3701,"Tipo da coluna."),t(),i(3702,"p"),e(3703,"Valores v\xE1lidos:"),t(),i(3704,"ul")(3705,"li")(3706,"p")(3707,"code"),e(3708,"boolean"),t(),e(3709,": Exibir\xE1 por padr\xE3o "),i(3710,"code"),e(3711,"Sim"),t(),e(3712," e "),i(3713,"code"),e(3714,"N\xE3o"),t(),e(3715," de acordo com os valores "),i(3716,"em"),e(3717,"booleanos"),t(),e(3718,"."),t(),i(3719,"blockquote")(3720,"p"),e(3721,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),i(3722,"code"),e(3723,"boolean"),t(),e(3724," desta interface."),t()()(),i(3725,"li")(3726,"p")(3727,"code"),e(3728,"currency"),t(),e(3729,": valores monet\xE1rios."),t()(),i(3730,"li")(3731,"p")(3732,"code"),e(3733,"date"),t(),e(3734,": valor de datas."),t(),i(3735,"ul")(3736,"li"),e(3737,"Aceita os tipos "),i(3738,"em"),e(3739,"string"),t(),e(3740," e "),i(3741,"em"),e(3742,"Date"),t(),e(3743,` padr\xE3o do Javascript,
por exemplo: `),i(3744,"code"),e(3745,"'2017-11-28'"),t(),e(3746," ou "),i(3747,"code"),e(3748,"new Date(2017, 10, 28)"),t(),e(3749,"."),t()()(),i(3750,"li")(3751,"p")(3752,"code"),e(3753,"dateTime"),t(),e(3754,": valor de data com hor\xE1rio."),t(),i(3755,"ul")(3756,"li"),e(3757,"Aceita o tipo "),i(3758,"em"),e(3759,"string"),t(),e(3760," no formato "),i(3761,"strong"),e(3762,"ISO-8601"),t(),e(3763," extendido "),i(3764,"strong"),e(3765,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(3766,`
e o tipo `),i(3767,"em"),e(3768,"Date"),t(),e(3769," padr\xE3o do Javascript, por exemplo: "),i(3770,"code"),e(3771,"'2017-11-28T00:00:00-02:00'"),t(),e(3772," ou "),i(3773,"code"),e(3774,"new Date(2017, 10, 28)"),t(),e(3775,"."),t()()(),i(3776,"li")(3777,"p")(3778,"code"),e(3779,"detail"),t(),e(3780,": array de objetos para o master-detail."),t(),i(3781,"ul")(3782,"li"),e(3783,"Incompat\xEDvel com "),i(3784,"code"),e(3785,"virtual-scroll"),t(),e(3786,", que requer altura fixa nas linhas."),t()()(),i(3787,"li")(3788,"p")(3789,"code"),e(3790,"icon"),t(),e(3791,": "),i(3792,"em"),e(3793,"array"),t(),e(3794," de "),i(3795,"em"),e(3796,"string"),t(),e(3797," ou objetos para a coluna de \xEDcones."),t()(),i(3798,"li")(3799,"p")(3800,"code"),e(3801,"label"),t(),e(3802,": texto com destaque."),t()(),i(3803,"li")(3804,"p")(3805,"code"),e(3806,"link"),t(),e(3807,": habilita link na coluna para a\xE7\xE3o ou navega\xE7\xE3o."),t()(),i(3808,"li")(3809,"p")(3810,"code"),e(3811,"number"),t(),e(3812,": valores num\xE9ricos."),t()(),i(3813,"li")(3814,"p")(3815,"code"),e(3816,"string"),t(),e(3817,": textos."),t()(),i(3818,"li")(3819,"p")(3820,"code"),e(3821,"subtitle"),t(),e(3822,": array de objetos para a coluna de legenda."),t()(),i(3823,"li")(3824,"p")(3825,"code"),e(3826,"time"),t(),e(3827,": valor de hor\xE1rio."),t(),i(3828,"ul")(3829,"li"),e(3830,"Aceita o tipo "),i(3831,"em"),e(3832,"string"),t(),e(3833," nos formatos "),i(3834,"strong"),e(3835,"'HH:mm:ss'"),t(),e(3836," ou "),i(3837,"strong"),e(3838,"'HH:mm:ss.ffffff'"),t(),e(3839,", por exemplo: "),i(3840,"code"),e(3841,"'23:12:45'"),t(),e(3842,"."),t()()(),i(3843,"li")(3844,"p")(3845,"code"),e(3846,"cellTemplate"),t(),e(3847,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),i(3848,"a",100),e(3849,"PoTableCellTemplate"),t(),e(3850,"."),t()(),i(3851,"li")(3852,"p")(3853,"code"),e(3854,"columnTemplate"),t(),e(3855,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),i(3856,"a",101),e(3857,"PoTableColumnTemplate"),t(),e(3858,"."),t()()()()(),i(3859,"tr",19)(3860,"td",20)(3861,"div",21)(3862,"span",22),e(3863," visible"),o(3864,"br"),t()()(),i(3865,"td",23)(3866,"code",24),e(3867,"boolean"),t()(),i(3868,"td",26)(3869,"em")(3870,"strong"),e(3871,"(opcional)"),t()(),i(3872,"p"),e(3873,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(3874,"strong"),e(3875,"gerenciador de colunas"),t(),e(3876,"."),t(),i(3877,"blockquote")(3878,"p"),e(3879,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(3880,"code"),e(3881,"p-max-columns"),t(),e(3882,"."),t()()()(),i(3883,"tr",19)(3884,"td",20)(3885,"div",21)(3886,"span",22),e(3887," width"),o(3888,"br"),t()()(),i(3889,"td",23)(3890,"code",51),e(3891,"number "),t(),i(3892,"code",40),e(3893," string"),t()(),i(3894,"td",26)(3895,"em")(3896,"strong"),e(3897,"(opcional)"),t()(),i(3898,"p"),e(3899,"Caso seja passado o formato "),i(3900,"code"),e(3901,"number"),t(),e(3902,`, ser\xE1 aplicado em pixels.
A largura da coluna pode ser informada em pixels ou porcentagem.`),t(),i(3903,"blockquote")(3904,"p"),e(3905,`Exemplo Pixel: 100.
Exemplo Porcentagem: '100%'.
Apesar de atribuir largura as colunas da grid \xE9 importante ressaltar
que o componente recalcula as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis na grid,
podendo alterar as dimens\xF5es passadas proporcionalmente.`),t()()()()()(),i(3906,"po-accordion-item",102)(3907,"h4",9)(3908,"code"),e(3909,"CustomEditProperties"),t()(),i(3910,"div",10)(3911,"p"),e(3912,"Interface para configura\xE7\xE3o das colunas edit\xE1veis ("),i(3913,"strong"),e(3914,"editProperties"),t(),e(3915,`).
Al\xE9m dessas propriedades, herda as defini\xE7\xF5es da interface
`),i(3916,"a",103),e(3917,"PoDynamicFormField"),t(),e(3918,`,
permitindo definir campos de entrada que ser\xE3o criados dinamicamente.`),t()(),i(3919,"h4",15),e(3920,"Propriedades"),t(),i(3921,"table",16)(3922,"tr",17)(3923,"th",18),e(3924,"Nome"),t(),i(3925,"th",18),e(3926,"Tipo"),t(),i(3927,"th",18),e(3928,"Descri\xE7\xE3o"),t()(),i(3929,"tr",19)(3930,"td",20)(3931,"div",21)(3932,"span",22),e(3933," componentEditable"),o(3934,"br"),t()()(),i(3935,"td",23)(3936,"code",104),e(3937,"'input' "),t(),i(3938,"code",105),e(3939," 'number' "),t(),i(3940,"code",106),e(3941," 'select' "),t(),i(3942,"code",107),e(3943," 'datepicker' "),t(),i(3944,"code",108),e(3945," 'switch' "),t(),i(3946,"code",109),e(3947," 'combo' "),t(),i(3948,"code",110),e(3949," 'multiselect' "),t(),i(3950,"code",111),e(3951," 'decimal' "),t(),i(3952,"code",112),e(3953," 'checkbox' "),t(),i(3954,"code",113),e(3955," 'lookup'"),t()(),i(3956,"td",26)(3957,"em")(3958,"strong"),e(3959,"(opcional)"),t()(),i(3960,"p"),e(3961,"Propriedade para escolher qual componente ser\xE1 exibido para editar."),t(),i(3962,"blockquote")(3963,"p"),e(3964,"O valor padr\xE3o \xE9 "),i(3965,"code"),e(3966,"input"),t(),e(3967,"."),t()()()(),i(3968,"tr",19)(3969,"td",20)(3970,"div",21)(3971,"span",22),e(3972," componentSize"),o(3973,"br"),t()()(),i(3974,"td",23)(3975,"code",114),e(3976,"'small' "),t(),i(3977,"code",115),e(3978," 'medium' "),t(),i(3979,"code",116),e(3980," 'large'"),t()(),i(3981,"td",26)(3982,"em")(3983,"strong"),e(3984,"(opcional)"),t()(),i(3985,"p"),e(3986,"Define o tamanho dos componentes de formul\xE1rio no grid conforme suas respectivas documenta\xE7\xF5es:"),t(),i(3987,"ul")(3988,"li")(3989,"code"),e(3990,"small"),t(),e(3991,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(3992,"li")(3993,"code"),e(3994,"medium"),t(),e(3995,": aplica a medida medium de cada componente."),t(),i(3996,"li")(3997,"code"),e(3998,"large"),t(),e(3999,": aplica a medida large de cada componente (dispon\xEDvel para "),i(4e3,"code"),e(4001,"po-checkbox"),t(),e(4002," e "),i(4003,"code"),e(4004,"po-radio-group"),t(),e(4005,")."),i(4006,"blockquote")(4007,"p"),e(4008,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(4009,"code"),e(4010,"medium"),t(),e(4011,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(4012,"a",41),e(4013,"po-theme"),t(),e(4014,"."),t()()()()()(),i(4015,"tr",19)(4016,"td",20)(4017,"div",21)(4018,"span",22),e(4019," controlValueWithLabel"),o(4020,"br"),t()()(),i(4021,"td",23)(4022,"code",24),e(4023,"boolean"),t()(),i(4024,"td",26)(4025,"em")(4026,"strong"),e(4027,"(opcional)"),t()(),i(4028,"p"),e(4029,"Determina se os componentes "),i(4030,"code"),e(4031,"select"),t(),e(4032,", "),i(4033,"code"),e(4034,"combo"),t(),e(4035,", "),i(4036,"code"),e(4037,"multiselect"),t(),e(4038," e "),i(4039,"code"),e(4040,"thf-lookup"),t(),e(4041,`
devem exibir o `),i(4042,"code"),e(4043,"label"),t(),e(4044," ao inv\xE9s de "),i(4045,"code"),e(4046,"value"),t(),e(4047," na grid"),t()()(),i(4048,"tr",19)(4049,"td",20)(4050,"div",21)(4051,"span",22),e(4052," disabled"),o(4053,"br"),t()()(),i(4054,"td",23)(4055,"code",24),e(4056,"boolean "),t(),i(4057,"code",117),e(4058," ((rowData: any, column?: ThfGridColumn) => boolean)"),t()(),i(4059,"td",26)(4060,"em")(4061,"strong"),e(4062,"(opcional)"),t()(),i(4063,"p"),e(4064,`Desabilita o campo. Pode ser um valor booleano fixo ou uma fun\xE7\xE3o din\xE2mica
que recebe os dados da linha e retorna um booleano`),t()()(),i(4065,"tr",19)(4066,"td",20)(4067,"div",21)(4068,"span",22),e(4069," fieldFormat"),o(4070,"br"),t()()(),i(4071,"td",23)(4072,"code",48),e(4073,"Array<string> "),t(),i(4074,"code",118),e(4075," ((item: any) => string)"),t()(),i(4076,"td",26)(4077,"em")(4078,"strong"),e(4079,"(opcional)"),t()(),i(4080,"p"),e(4081,"Formato de exibi\xE7\xE3o do campo."),t(),i(4082,"p"),e(4083,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(4084,"em"),e(4085,"string"),t(),e(4086," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(4087,"pre")(4088,"code",31),e(4089,`fieldFormat(obj) {
  return \`\${obj.id} (\${obj.name})\`;
}


Ou pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo.
Nessa caso, ser\xE1 utilizado \` - \` como separador, por exemplo:

\`\`\`typescript
 fieldFormat]="['id','nickname']"`),t()(),i(4090,"blockquote")(4091,"p"),e(4092,"Componente compat\xEDvel: "),i(4093,"code"),e(4094,"thf-lookup"),t(),e(4095,"."),t()()()(),i(4096,"tr",19)(4097,"td",20)(4098,"div",21)(4099,"span",22),e(4100," filterSearchSelect"),o(4101,"br"),t()()(),i(4102,"td",23)(4103,"code",119),e(4104,"Array<ThfLookupFilterSearchSelect>"),t()(),i(4105,"td",26)(4106,"em")(4107,"strong"),e(4108,"(opcional)"),t()(),i(4109,"p"),e(4110,"Propriedade para listar as op\xE7\xF5es de filtro do po-search no modal."),t(),i(4111,"blockquote")(4112,"p"),e(4113,"Componente compat\xEDvel: "),i(4114,"code"),e(4115,"thf-lookup"),t(),e(4116,"."),t()()()(),i(4117,"tr",19)(4118,"td",20)(4119,"div",21)(4120,"span",22),e(4121," keysLabel"),o(4122,"br"),t()()(),i(4123,"td",23)(4124,"code",120),e(4125,"Array<ThfLookupKeysLabel>"),t()(),i(4126,"td",26)(4127,"em")(4128,"strong"),e(4129,"(opcional)"),t()(),i(4130,"p"),e(4131,"Propriedade para exibir at\xE9 3 propriedades por valor no listbox."),t(),i(4132,"blockquote")(4133,"p"),e(4134,"Componente compat\xEDvel: "),i(4135,"code"),e(4136,"thf-lookup"),t(),e(4137,"."),t()()()(),i(4138,"tr",19)(4139,"td",20)(4140,"div",21)(4141,"span",22),e(4142," onBlur"),o(4143,"br"),t()()(),i(4144,"td",23)(4145,"code",27),e(4146,"Function"),t()(),i(4147,"td",26)(4148,"em")(4149,"strong"),e(4150,"(opcional)"),t()(),i(4151,"p"),e(4152,"Evento disparado ao sair do campo."),t(),i(4153,"blockquote")(4154,"p")(4155,"strong"),e(4156,"Componentes compat\xEDveis"),t(),e(4157,": "),i(4158,"code"),e(4159,"po-input"),t(),e(4160,", "),i(4161,"code"),e(4162,"po-number"),t(),e(4163,", "),i(4164,"code"),e(4165,"po-decimal"),t(),e(4166,", "),i(4167,"code"),e(4168,"po-datepicker"),t(),e(4169,", "),i(4170,"code"),e(4171,"po-select"),t(),e(4172,", "),i(4173,"code"),e(4174,"po-combo"),t(),e(4175,", "),i(4176,"code"),e(4177,"po-multiselect"),t(),e(4178,", "),i(4179,"code"),e(4180,"po-checkbox"),t()()()()(),i(4181,"tr",19)(4182,"td",20)(4183,"div",21)(4184,"span",22),e(4185," onChange"),o(4186,"br"),t()()(),i(4187,"td",23)(4188,"code",121),e(4189,"(value: any) => void"),t()(),i(4190,"td",26)(4191,"em")(4192,"strong"),e(4193,"(opcional)"),t()(),i(4194,"p"),e(4195,"Evento disparado ao alterar valor e deixar o campo."),t(),i(4196,"blockquote")(4197,"p")(4198,"strong"),e(4199,"Componentes compat\xEDveis"),t(),e(4200,": "),i(4201,"code"),e(4202,"po-input"),t(),e(4203,", "),i(4204,"code"),e(4205,"po-number"),t(),e(4206,", "),i(4207,"code"),e(4208,"po-decimal"),t(),e(4209,", "),i(4210,"code"),e(4211,"po-datepicker"),t(),e(4212,", "),i(4213,"code"),e(4214,"po-select"),t(),e(4215,", "),i(4216,"code"),e(4217,"po-switch"),t(),e(4218,", "),i(4219,"code"),e(4220,"po-combo"),t(),e(4221,", "),i(4222,"code"),e(4223,"po-multiselect"),t(),e(4224,", "),i(4225,"code"),e(4226,"po-checkbox"),t(),e(4227,", "),i(4228,"code"),e(4229,"thf-lookup"),t()()()()(),i(4230,"tr",19)(4231,"td",20)(4232,"div",21)(4233,"span",22),e(4234," onChangeModel"),o(4235,"br"),t()()(),i(4236,"td",23)(4237,"code",122),e(4238,"(model: any) => void"),t()(),i(4239,"td",26)(4240,"em")(4241,"strong"),e(4242,"(opcional)"),t()(),i(4243,"p"),e(4244,"Evento disparado ao alterar valor do model."),t(),i(4245,"blockquote")(4246,"p")(4247,"strong"),e(4248,"Componentes compat\xEDveis"),t(),e(4249,": "),i(4250,"code"),e(4251,"po-input"),t(),e(4252,", "),i(4253,"code"),e(4254,"po-number"),t(),e(4255,", "),i(4256,"code"),e(4257,"po-decimal"),t(),e(4258,", "),i(4259,"code"),e(4260,"po-select"),t(),e(4261,", "),i(4262,"code"),e(4263,"po-combo"),t(),e(4264,", "),i(4265,"code"),e(4266,"thf-lookup"),t()()()()(),i(4267,"tr",19)(4268,"td",20)(4269,"div",21)(4270,"span",22),e(4271," onEnter"),o(4272,"br"),t()()(),i(4273,"td",23)(4274,"code",27),e(4275,"Function"),t()(),i(4276,"td",26)(4277,"em")(4278,"strong"),e(4279,"(opcional)"),t()(),i(4280,"p"),e(4281,"Evento disparado ao entrar no campo."),t(),i(4282,"blockquote")(4283,"p")(4284,"strong"),e(4285,"Componentes compat\xEDveis"),t(),e(4286,": "),i(4287,"code"),e(4288,"po-input"),t(),e(4289,", "),i(4290,"code"),e(4291,"po-number"),t(),e(4292,", "),i(4293,"code"),e(4294,"po-decimal"),t()()()()(),i(4295,"tr",19)(4296,"td",20)(4297,"div",21)(4298,"span",22),e(4299," onError"),o(4300,"br"),t()()(),i(4301,"td",23)(4302,"code",123),e(4303,"(error: HttpErrorResponse) => void"),t()(),i(4304,"td",26)(4305,"em")(4306,"strong"),e(4307,"(opcional)"),t()(),i(4308,"p"),e(4309,"Callback disparado quando ocorre erro na requisi\xE7\xE3o de busca."),t(),i(4310,"blockquote")(4311,"p")(4312,"strong"),e(4313,"Componente compat\xEDvel"),t(),e(4314,": "),i(4315,"code"),e(4316,"thf-lookup"),t()()()()(),i(4317,"tr",19)(4318,"td",20)(4319,"div",21)(4320,"span",22),e(4321," onFocus"),o(4322,"br"),t()()(),i(4323,"td",23)(4324,"code",27),e(4325,"Function"),t()(),i(4326,"td",26)(4327,"em")(4328,"strong"),e(4329,"(opcional)"),t()(),i(4330,"p"),e(4331,"Callback disparado quando o campo recebe foco."),t(),i(4332,"blockquote")(4333,"p")(4334,"strong"),e(4335,"Componente compat\xEDvel"),t(),e(4336,": "),i(4337,"code"),e(4338,"thf-lookup"),t()()()()(),i(4339,"tr",19)(4340,"td",20)(4341,"div",21)(4342,"span",22),e(4343," onInputChange"),o(4344,"br"),t()()(),i(4345,"td",23)(4346,"code",121),e(4347,"(value: any) => void"),t()(),i(4348,"td",26)(4349,"em")(4350,"strong"),e(4351,"(opcional)"),t()(),i(4352,"p"),e(4353,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no campo de busca do componente. A fun\xE7\xE3o receber\xE1 como argumento o valor modificado."),t(),i(4354,"blockquote")(4355,"p")(4356,"strong"),e(4357,"Componente compat\xEDvel"),t(),e(4358,": "),i(4359,"code"),e(4360,"po-combo"),t()()()()(),i(4361,"tr",19)(4362,"td",20)(4363,"div",21)(4364,"span",22),e(4365," onSelected"),o(4366,"br"),t()()(),i(4367,"td",23)(4368,"code",124),e(4369,"(selection: any "),t(),i(4370,"code",125),e(4371," Array<any>) => void"),t()(),i(4372,"td",26)(4373,"em")(4374,"strong"),e(4375,"(opcional)"),t()(),i(4376,"p"),e(4377,"Callback disparado ao selecionar item(s)."),t(),i(4378,"blockquote")(4379,"p")(4380,"strong"),e(4381,"Componente compat\xEDvel"),t(),e(4382,": "),i(4383,"code"),e(4384,"thf-lookup"),t()()()()(),i(4385,"tr",19)(4386,"td",20)(4387,"div",21)(4388,"span",22),e(4389," readonly"),o(4390,"br"),t()()(),i(4391,"td",23)(4392,"code",24),e(4393,"boolean "),t(),i(4394,"code",117),e(4395," ((rowData: any, column?: ThfGridColumn) => boolean)"),t()(),i(4396,"td",26)(4397,"em")(4398,"strong"),e(4399,"(opcional)"),t()(),i(4400,"p"),e(4401,`Indica que o campo ser\xE1 somente leitura. Pode ser um valor booleano fixo
ou uma fun\xE7\xE3o din\xE2mica que recebe os dados da linha e retorna um booleano`),t()()(),i(4402,"tr",19)(4403,"td",20)(4404,"div",21)(4405,"span",22),e(4406," size"),o(4407,"br"),t()()(),i(4408,"td",23)(4409,"code",126),e(4410,"'sm' "),t(),i(4411,"code",127),e(4412," 'md' "),t(),i(4413,"code",128),e(4414," 'lg' "),t(),i(4415,"code",129),e(4416," 'xl' "),t(),i(4417,"code",130),e(4418," 'auto'"),t()(),i(4419,"td",26)(4420,"em")(4421,"strong"),e(4422,"(opcional)"),t()(),i(4423,"p"),e(4424,"Propriedade para definir o tamanho do modal."),t(),i(4425,"blockquote")(4426,"p"),e(4427,"Componente compat\xEDvel: "),i(4428,"code"),e(4429,"thf-lookup"),t(),e(4430,"."),t()()()()()(),i(4431,"po-accordion-item",131)(4432,"h4",9)(4433,"code"),e(4434,"ThfGridDeleteService"),t()(),i(4435,"div",10)(4436,"p"),e(4437,"Interface para excluir algum item via servi\xE7o."),t()(),i(4438,"table",62)(4439,"tr",19)(4440,"th",63)(4441,"div",21)(4442,"h4")(4443,"span",22),e(4444," deleteItem "),t()()()()(),i(4445,"tr",26)(4446,"td",26)(4447,"p"),e(4448,`M\xE9todo que ser\xE1 disparado ao excluir algum item, deve-se retornar
um `),i(4449,"em"),e(4450,"Observable"),t(),e(4451,"."),t()()()(),i(4452,"h5")(4453,"b"),e(4454,"Par\xE2metros"),t()(),i(4455,"table",16)(4456,"tr",17)(4457,"th",18),e(4458,"Nome"),t(),i(4459,"th",18),e(4460,"Tipo"),t(),i(4461,"th",18),e(4462,"Descri\xE7\xE3o"),t()(),i(4463,"tr",19)(4464,"td",20),e(4465," selectedRow"),t(),i(4466,"td",23)(4467,"code",64),e(4468," any "),t()(),i(4469,"td",26)(4470,"p"),e(4471,"Par\xE2metro com o valor do atual item selecionado."),t()()(),i(4472,"tr",19)(4473,"td",20),e(4474," filterParams"),t(),i(4475,"td",23)(4476,"code",64),e(4477," any "),t()(),i(4478,"td",26)(4479,"p"),e(4480,"Valor informado atrav\xE9s da propriedade "),i(4481,"code"),e(4482,"t-param-delete-api"),t(),e(4483,"."),t()()(),i(4484,"tr",19)(4485,"td",20),e(4486," keyValue"),t(),i(4487,"td",23)(4488,"code",64),e(4489," string "),t()(),i(4490,"td",26)(4491,"p"),e(4492,"Valor informado caso tenha alguma coluna com a propriedade "),i(4493,"code"),e(4494,"key"),t(),e(4495," ativa ou o valor da propriedade "),i(4496,"code"),e(4497,"id"),t(),e(4498,"."),t()()()(),o(4499,"br"),i(4500,"table",62)(4501,"tr",19)(4502,"th",63)(4503,"div",21)(4504,"h4")(4505,"span",22),e(4506," deleteBatchItems "),t()()()()(),i(4507,"tr",26)(4508,"td",26)(4509,"p"),e(4510,"M\xE9todo que ser\xE1 disparado ao excluir itens quando o THF-GRID estiver com a propriedade "),i(4511,"code"),e(4512,"t-allow-batch-delete"),t(),e(4513,` habilitada, deve-se retornar
um `),i(4514,"em"),e(4515,"Observable"),t(),e(4516,"."),t(),i(4517,"p"),e(4518,"Ao habilitar a propriedade "),i(4519,"code"),e(4520,"t-allow-batch-delete"),t(),e(4521,", este m\xE9todo sempre ser\xE1 chamado, exluindo um ou v\xE1rios itens."),t()()()(),i(4522,"h5")(4523,"b"),e(4524,"Par\xE2metros"),t()(),i(4525,"table",16)(4526,"tr",17)(4527,"th",18),e(4528,"Nome"),t(),i(4529,"th",18),e(4530,"Tipo"),t(),i(4531,"th",18),e(4532,"Descri\xE7\xE3o"),t()(),i(4533,"tr",19)(4534,"td",20),e(4535," selectedRows"),t(),i(4536,"td",23)(4537,"code",64),e(4538," any "),t()(),i(4539,"td",26)(4540,"p"),e(4541,"Par\xE2metro com os valores dos itens selecionados."),t()()(),i(4542,"tr",19)(4543,"td",20),e(4544," paramDelete"),t(),i(4545,"td",23)(4546,"code",64),e(4547," any "),t()(),i(4548,"td",26)(4549,"p"),e(4550,"Valor informado atrav\xE9s da propriedade "),i(4551,"code"),e(4552,"t-param-delete-api"),t(),e(4553,"."),t()()(),i(4554,"tr",19)(4555,"td",20),e(4556," keys"),t(),i(4557,"td",23)(4558,"code",64),e(4559," string "),t()(),i(4560,"td",26)(4561,"p"),e(4562,"Valor informado caso tenha alguma coluna com a propriedade "),i(4563,"code"),e(4564,"key"),t(),e(4565," ativa ou o valor da propriedade "),i(4566,"code"),e(4567,"id"),t(),e(4568,"."),t()()()(),o(4569,"br"),t(),i(4570,"po-accordion-item",132)(4571,"h4",9)(4572,"code"),e(4573,"ThfGridEditProperties"),t()(),i(4574,"div",10)(4575,"p"),e(4576,"Interface para configura\xE7\xE3o da edi\xE7\xE3o em linha ("),i(4577,"strong"),e(4578,"t-edit-properties"),t(),e(4579,")."),t()(),i(4580,"h4",15),e(4581,"Propriedades"),t(),i(4582,"table",16)(4583,"tr",17)(4584,"th",18),e(4585,"Nome"),t(),i(4586,"th",18),e(4587,"Tipo"),t(),i(4588,"th",18),e(4589,"Descri\xE7\xE3o"),t()(),i(4590,"tr",19)(4591,"td",20)(4592,"div",21)(4593,"span",22),e(4594," actionEdit"),o(4595,"br"),t()()(),i(4596,"td",23)(4597,"code",133),e(4598,"(param: any) => FormGroup"),t()(),i(4599,"td",26)(4600,"p"),e(4601,`M\xE9todo executado ao iniciar o modo edi\xE7\xE3o.
\xC9 passado um par\xE2metro com os valores respectivos de cada coluna.
\xC9 obrigat\xF3rio retornar o formul\xE1rio. Cada FormControl deve estar com o mesmo nome da `),i(4602,"code"),e(4603,"property"),t(),e(4604," da coluna desejada."),t(),i(4605,"p"),e(4606,"Exemplo de envio para a API:"),t(),i(4607,"pre")(4608,"code",28),e(4609,`<thf-grid
  t-service-api="https://po-sample-api.onrender.com/v1/people"
  [t-columns]="columns"
  [t-edit-properties]="editProperties"
>
</thf-grid>`),t()(),i(4610,"pre")(4611,"code",31),e(4612,`form: FormGroup;
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
};`),t()()()(),i(4613,"tr",19)(4614,"td",20)(4615,"div",21)(4616,"span",22),e(4617," validate"),o(4618,"br"),t()()(),i(4619,"td",23)(4620,"code",134),e(4621,"(data: any, columnProperty: string) => FormGroup"),t()(),i(4622,"td",26)(4623,"em")(4624,"strong"),e(4625,"(opcional)"),t()(),i(4626,"p"),e(4627,`M\xE9todo executado ao alterar o valor de algum campo do formul\xE1rio.
O primeiro par\xE2metro s\xE3o os valores respectivos de cada coluna.
O segundo par\xE2metro \xE9 indicando a `),i(4628,"code"),e(4629,"property"),t(),e(4630,` da coluna que teve o valor alterado
\xC9 obrigat\xF3rio retornar o formul\xE1rio. Cada FormControl deve estar com o mesmo nome da `),i(4631,"code"),e(4632,"property"),t(),e(4633," da coluna desejada."),t()()()()(),i(4634,"po-accordion-item",135)(4635,"h4",9)(4636,"code"),e(4637,"ThfGridLiterals"),t()(),i(4638,"div",10)(4639,"p"),e(4640,"Interface para customizar literais ("),i(4641,"strong"),e(4642,"t-literals"),t(),e(4643,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(4644,"h4",15),e(4645,"Propriedades"),t(),i(4646,"table",16)(4647,"tr",17)(4648,"th",18),e(4649,"Nome"),t(),i(4650,"th",18),e(4651,"Tipo"),t(),i(4652,"th",18),e(4653,"Descri\xE7\xE3o"),t()(),i(4654,"tr",19)(4655,"td",20)(4656,"div",21)(4657,"span",22),e(4658," advancedSearch"),o(4659,"br"),t()()(),i(4660,"td",23)(4661,"code",40),e(4662,"string"),t()(),i(4663,"td",26)(4664,"em")(4665,"strong"),e(4666,"(opcional)"),t()(),i(4667,"p"),e(4668,"T\xEDtulo do modal Filtros"),t()()(),i(4669,"tr",19)(4670,"td",20)(4671,"div",21)(4672,"span",22),e(4673," bodyDelete"),o(4674,"br"),t()()(),i(4675,"td",23)(4676,"code",40),e(4677,"string"),t()(),i(4678,"td",26)(4679,"em")(4680,"strong"),e(4681,"(opcional)"),t()(),i(4682,"p"),e(4683,"Conte\xFAdo do modal Excluir"),t()()(),i(4684,"tr",19)(4685,"td",20)(4686,"div",21)(4687,"span",22),e(4688," bodyDeleteBatch"),o(4689,"br"),t()()(),i(4690,"td",23)(4691,"code",40),e(4692,"string"),t()(),i(4693,"td",26)(4694,"em")(4695,"strong"),e(4696,"(opcional)"),t()(),i(4697,"p"),e(4698,"Conte\xFAdo do modal Excluir configurado para excluir em lote"),t()()(),i(4699,"tr",19)(4700,"td",20)(4701,"div",21)(4702,"span",22),e(4703," cancel"),o(4704,"br"),t()()(),i(4705,"td",23)(4706,"code",40),e(4707,"string"),t()(),i(4708,"td",26)(4709,"em")(4710,"strong"),e(4711,"(opcional)"),t()(),i(4712,"p"),e(4713,"Label do bot\xE3o Cancelar"),t()()(),i(4714,"tr",19)(4715,"td",20)(4716,"div",21)(4717,"span",22),e(4718," columnsManager"),o(4719,"br"),t()()(),i(4720,"td",23)(4721,"code",40),e(4722,"string"),t()(),i(4723,"td",26)(4724,"em")(4725,"strong"),e(4726,"(opcional)"),t()(),i(4727,"p"),e(4728,"T\xEDtulo do page-slide Gerenciar Tabela"),t()()(),i(4729,"tr",19)(4730,"td",20)(4731,"div",21)(4732,"span",22),e(4733," compact"),o(4734,"br"),t()()(),i(4735,"td",23)(4736,"code",40),e(4737,"string"),t()(),i(4738,"td",26)(4739,"em")(4740,"strong"),e(4741,"(opcional)"),t()(),i(4742,"p"),e(4743,"Label do radio de densidade Compacto no Gerenciar Tabela"),t()()(),i(4744,"tr",19)(4745,"td",20)(4746,"div",21)(4747,"span",22),e(4748," confirm"),o(4749,"br"),t()()(),i(4750,"td",23)(4751,"code",40),e(4752,"string"),t()(),i(4753,"td",26)(4754,"em")(4755,"strong"),e(4756,"(opcional)"),t()(),i(4757,"p"),e(4758,"Label do bot\xE3o Confirmar"),t()()(),i(4759,"tr",19)(4760,"td",20)(4761,"div",21)(4762,"span",22),e(4763," default"),o(4764,"br"),t()()(),i(4765,"td",23)(4766,"code",40),e(4767,"string"),t()(),i(4768,"td",26)(4769,"em")(4770,"strong"),e(4771,"(opcional)"),t()(),i(4772,"p"),e(4773,"Label do radio de densidade Espa\xE7oso no Gerenciar Tabela"),t()()(),i(4774,"tr",19)(4775,"td",20)(4776,"div",21)(4777,"span",22),e(4778," delete"),o(4779,"br"),t()()(),i(4780,"td",23)(4781,"code",40),e(4782,"string"),t()(),i(4783,"td",26)(4784,"em")(4785,"strong"),e(4786,"(opcional)"),t()(),i(4787,"p"),e(4788,"Label do bot\xE3o Excluir"),t()()(),i(4789,"tr",19)(4790,"td",20)(4791,"div",21)(4792,"span",22),e(4793," deleteApiError"),o(4794,"br"),t()()(),i(4795,"td",23)(4796,"code",40),e(4797,"string"),t()(),i(4798,"td",26)(4799,"em")(4800,"strong"),e(4801,"(opcional)"),t()(),i(4802,"p"),e(4803,"Resposta de erro da requisi\xE7\xE3o delete no popup"),t()()(),i(4804,"tr",19)(4805,"td",20)(4806,"div",21)(4807,"span",22),e(4808," deleteItem"),o(4809,"br"),t()()(),i(4810,"td",23)(4811,"code",40),e(4812,"string"),t()(),i(4813,"td",26)(4814,"em")(4815,"strong"),e(4816,"(opcional)"),t()(),i(4817,"p"),e(4818,"T\xEDtulo do modal Excluir"),t()()(),i(4819,"tr",19)(4820,"td",20)(4821,"div",21)(4822,"span",22),e(4823," density"),o(4824,"br"),t()()(),i(4825,"td",23)(4826,"code",40),e(4827,"string"),t()(),i(4828,"td",26)(4829,"em")(4830,"strong"),e(4831,"(opcional)"),t()(),i(4832,"p"),e(4833,'T\xEDtulo da sess\xE3o "Densidade" no Gerenciar Tabela'),t()()(),i(4834,"tr",19)(4835,"td",20)(4836,"div",21)(4837,"span",22),e(4838," draggable"),o(4839,"br"),t()()(),i(4840,"td",23)(4841,"code",40),e(4842,"string"),t()(),i(4843,"td",26)(4844,"em")(4845,"strong"),e(4846,"(opcional)"),t()(),i(4847,"p"),e(4848,'Label da op\xE7\xE3o "Draggable" na sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(4849,"tr",19)(4850,"td",20)(4851,"div",21)(4852,"span",22),e(4853," edit"),o(4854,"br"),t()()(),i(4855,"td",23)(4856,"code",40),e(4857,"string"),t()(),i(4858,"td",26)(4859,"em")(4860,"strong"),e(4861,"(opcional)"),t()(),i(4862,"p"),e(4863,"Label do bot\xE3o Editar"),t()()(),i(4864,"tr",19)(4865,"td",20)(4866,"div",21)(4867,"span",22),e(4868," editRow"),o(4869,"br"),t()()(),i(4870,"td",23)(4871,"code",40),e(4872,"string"),t()(),i(4873,"td",26)(4874,"em")(4875,"strong"),e(4876,"(opcional)"),t()(),i(4877,"p"),e(4878,"T\xEDtulo das a\xE7\xF5es quando Edi\xE7\xE3o em linha."),t()()(),i(4879,"tr",19)(4880,"td",20)(4881,"div",21)(4882,"span",22),e(4883," export"),o(4884,"br"),t()()(),i(4885,"td",23)(4886,"code",40),e(4887,"string"),t()(),i(4888,"td",26)(4889,"em")(4890,"strong"),e(4891,"(opcional)"),t()(),i(4892,"p"),e(4893,"Label do bot\xE3o Exportar"),t()()(),i(4894,"tr",19)(4895,"td",20)(4896,"div",21)(4897,"span",22),e(4898," exportExcel"),o(4899,"br"),t()()(),i(4900,"td",23)(4901,"code",40),e(4902,"string"),t()(),i(4903,"td",26)(4904,"em")(4905,"strong"),e(4906,"(opcional)"),t()(),i(4907,"p"),e(4908,"Label do bot\xE3o Exportar Excel"),t()()(),i(4909,"tr",19)(4910,"td",20)(4911,"div",21)(4912,"span",22),e(4913," exportPDF"),o(4914,"br"),t()()(),i(4915,"td",23)(4916,"code",40),e(4917,"string"),t()(),i(4918,"td",26)(4919,"em")(4920,"strong"),e(4921,"(opcional)"),t()(),i(4922,"p"),e(4923,"Label do bot\xE3o Exportar PDF"),t()()(),i(4924,"tr",19)(4925,"td",20)(4926,"div",21)(4927,"span",22),e(4928," extraCompact"),o(4929,"br"),t()()(),i(4930,"td",23)(4931,"code",40),e(4932,"string"),t()(),i(4933,"td",26)(4934,"em")(4935,"strong"),e(4936,"(opcional)"),t()(),i(4937,"p"),e(4938,"Label do radio de densidade Extra Compacto no Gerenciar Tabela"),t()()(),i(4939,"tr",19)(4940,"td",20)(4941,"div",21)(4942,"span",22),e(4943," filters"),o(4944,"br"),t()()(),i(4945,"td",23)(4946,"code",40),e(4947,"string"),t()(),i(4948,"td",26)(4949,"em")(4950,"strong"),e(4951,"(opcional)"),t()(),i(4952,"p"),e(4953,"Label do bot\xE3o Filtros"),t()()(),i(4954,"tr",19)(4955,"td",20)(4956,"div",21)(4957,"span",22),e(4958," fixed"),o(4959,"br"),t()()(),i(4960,"td",23)(4961,"code",40),e(4962,"string"),t()(),i(4963,"td",26)(4964,"em")(4965,"strong"),e(4966,"(opcional)"),t()(),i(4967,"p"),e(4968,'T\xEDtulo da sess\xE3o "Fixo" no Gerenciar Tabela'),t()()(),i(4969,"tr",19)(4970,"td",20)(4971,"div",21)(4972,"span",22),e(4973," gridRowActionsConfirmAddCancelButton"),o(4974,"br"),t()()(),i(4975,"td",23)(4976,"code",40),e(4977,"string"),t()(),i(4978,"td",26)(4979,"em")(4980,"strong"),e(4981,"(opcional)"),t()(),i(4982,"p"),e(4983,'Label do bot\xE3o "Cancelar" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(4984,"tr",19)(4985,"td",20)(4986,"div",21)(4987,"span",22),e(4988," gridRowActionsConfirmAddConfirmButton"),o(4989,"br"),t()()(),i(4990,"td",23)(4991,"code",40),e(4992,"string"),t()(),i(4993,"td",26)(4994,"em")(4995,"strong"),e(4996,"(opcional)"),t()(),i(4997,"p"),e(4998,'Label do bot\xE3o "Confirmar" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(4999,"tr",19)(5e3,"td",20)(5001,"div",21)(5002,"span",22),e(5003," gridRowActionsConfirmAddTitle"),o(5004,"br"),t()()(),i(5005,"td",23)(5006,"code",40),e(5007,"string"),t()(),i(5008,"td",26)(5009,"em")(5010,"strong"),e(5011,"(opcional)"),t()(),i(5012,"p"),e(5013,'T\xEDtulo do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(5014,"tr",19)(5015,"td",20)(5016,"div",21)(5017,"span",22),e(5018," groupable"),o(5019,"br"),t()()(),i(5020,"td",23)(5021,"code",40),e(5022,"string"),t()(),i(5023,"td",26)(5024,"em")(5025,"strong"),e(5026,"(opcional)"),t()(),i(5027,"p"),e(5028,'Label da op\xE7\xE3o "Groupable" na sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(5029,"tr",19)(5030,"td",20)(5031,"div",21)(5032,"span",22),e(5033," groupableText"),o(5034,"br"),t()()(),i(5035,"td",23)(5036,"code",40),e(5037,"string"),t()(),i(5038,"td",26)(5039,"em")(5040,"strong"),e(5041,"(opcional)"),t()(),i(5042,"p"),e(5043,"Texto do cabe\xE7alho onde se deve soltar as colunas que devem ser agrupadas."),t()()(),i(5044,"tr",19)(5045,"td",20)(5046,"div",21)(5047,"span",22),e(5048," legendListOptions"),o(5049,"br"),t()()(),i(5050,"td",23)(5051,"code",40),e(5052,"string"),t()(),i(5053,"td",26)(5054,"em")(5055,"strong"),e(5056,"(opcional)"),t()(),i(5057,"p"),e(5058,'T\xEDtulo da sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(5059,"tr",19)(5060,"td",20)(5061,"div",21)(5062,"span",22),e(5063," loadMoreData"),o(5064,"br"),t()()(),i(5065,"td",23)(5066,"code",40),e(5067,"string"),t()(),i(5068,"td",26)(5069,"em")(5070,"strong"),e(5071,"(opcional)"),t()(),i(5072,"p"),e(5073,"Label do bot\xE3o Carregar mais resultados"),t()()(),i(5074,"tr",19)(5075,"td",20)(5076,"div",21)(5077,"span",22),e(5078," loadingData"),o(5079,"br"),t()()(),i(5080,"td",23)(5081,"code",40),e(5082,"string"),t()(),i(5083,"td",26)(5084,"em")(5085,"strong"),e(5086,"(opcional)"),t()(),i(5087,"p"),e(5088,"Texto do modal Carregando..."),t()()(),i(5089,"tr",19)(5090,"td",20)(5091,"div",21)(5092,"span",22),e(5093," manageTable"),o(5094,"br"),t()()(),i(5095,"td",23)(5096,"code",40),e(5097,"string"),t()(),i(5098,"td",26)(5099,"em")(5100,"strong"),e(5101,"(opcional)"),t()(),i(5102,"p"),e(5103,"Label do bot\xE3o Gerenciar Tabela"),t()()(),i(5104,"tr",19)(5105,"td",20)(5106,"div",21)(5107,"span",22),e(5108," moreActions"),o(5109,"br"),t()()(),i(5110,"td",23)(5111,"code",40),e(5112,"string"),t()(),i(5113,"td",26)(5114,"em")(5115,"strong"),e(5116,"(opcional)"),t()(),i(5117,"p"),e(5118,"Label do bot\xE3o Mais a\xE7\xF5es"),t()()(),i(5119,"tr",19)(5120,"td",20)(5121,"div",21)(5122,"span",22),e(5123," multipleItems"),o(5124,"br"),t()()(),i(5125,"td",23)(5126,"code",40),e(5127,"string"),t()(),i(5128,"td",26)(5129,"em")(5130,"strong"),e(5131,"(opcional)"),t()(),i(5132,"p"),e(5133,"Texto auxiliar ao selecionar muitos itens exibido nas a\xE7\xF5es em lote."),t()()(),i(5134,"tr",19)(5135,"td",20)(5136,"div",21)(5137,"span",22),e(5138," noColumns"),o(5139,"br"),t()()(),i(5140,"td",23)(5141,"code",40),e(5142,"string"),t()(),i(5143,"td",26)(5144,"em")(5145,"strong"),e(5146,"(opcional)"),t()(),i(5147,"p"),e(5148,"Mensagem exibida quando n\xE3o existem colunas definidas."),t()()(),i(5149,"tr",19)(5150,"td",20)(5151,"div",21)(5152,"span",22),e(5153," noData"),o(5154,"br"),t()()(),i(5155,"td",23)(5156,"code",40),e(5157,"string"),t()(),i(5158,"td",26)(5159,"em")(5160,"strong"),e(5161,"(opcional)"),t()(),i(5162,"p"),e(5163,"Mensagem exibida quando n\xE3o existem itens para serem exibidos."),t()()(),i(5164,"tr",19)(5165,"td",20)(5166,"div",21)(5167,"span",22),e(5168," noItem"),o(5169,"br"),t()()(),i(5170,"td",23)(5171,"code",40),e(5172,"string"),t()(),i(5173,"td",26)(5174,"em")(5175,"strong"),e(5176,"(opcional)"),t()(),i(5177,"p"),e(5178,"Mensagem exibida quando nenhum item est\xE1 selecionado."),t()()(),i(5179,"tr",19)(5180,"td",20)(5181,"div",21)(5182,"span",22),e(5183," oneItem"),o(5184,"br"),t()()(),i(5185,"td",23)(5186,"code",40),e(5187,"string"),t()(),i(5188,"td",26)(5189,"em")(5190,"strong"),e(5191,"(opcional)"),t()(),i(5192,"p"),e(5193,"Texto ao selecionar um \xFAnico item exibido nas a\xE7\xF5es em lote."),t()()(),i(5194,"tr",19)(5195,"td",20)(5196,"div",21)(5197,"span",22),e(5198," otherColumns"),o(5199,"br"),t()()(),i(5200,"td",23)(5201,"code",40),e(5202,"string"),t()(),i(5203,"td",26)(5204,"em")(5205,"strong"),e(5206,"(opcional)"),t()(),i(5207,"p"),e(5208,'T\xEDtulo da sess\xE3o "Outras colunas" no Gerenciar Tabela'),t()()(),i(5209,"tr",19)(5210,"td",20)(5211,"div",21)(5212,"span",22),e(5213," placeholderSearchInput"),o(5214,"br"),t()()(),i(5215,"td",23)(5216,"code",40),e(5217,"string"),t()(),i(5218,"td",26)(5219,"em")(5220,"strong"),e(5221,"(opcional)"),t()(),i(5222,"p"),e(5223,"Placeholder do campo Buscar na tabela"),t()()(),i(5224,"tr",19)(5225,"td",20)(5226,"div",21)(5227,"span",22),e(5228," restoreDefault"),o(5229,"br"),t()()(),i(5230,"td",23)(5231,"code",40),e(5232,"string"),t()(),i(5233,"td",26)(5234,"em")(5235,"strong"),e(5236,"(opcional)"),t()(),i(5237,"p"),e(5238,'Label do bot\xE3o "Restaurar padr\xE3o" no Gerenciar Tabela'),t()()(),i(5239,"tr",19)(5240,"td",20)(5241,"div",21)(5242,"span",22),e(5243," resultsByPage"),o(5244,"br"),t()()(),i(5245,"td",23)(5246,"code",40),e(5247,"string"),t()(),i(5248,"td",26)(5249,"em")(5250,"strong"),e(5251,"(opcional)"),t()(),i(5252,"p"),e(5253,'Label "Resultados por p\xE1gina" no Gerenciar Tabela.'),t()()(),i(5254,"tr",19)(5255,"td",20)(5256,"div",21)(5257,"span",22),e(5258," save"),o(5259,"br"),t()()(),i(5260,"td",23)(5261,"code",40),e(5262,"string"),t()(),i(5263,"td",26)(5264,"em")(5265,"strong"),e(5266,"(opcional)"),t()(),i(5267,"p"),e(5268,"Label do bot\xE3o Salvar"),t()()(),i(5269,"tr",19)(5270,"td",20)(5271,"div",21)(5272,"span",22),e(5273," warningColumnsRequired"),o(5274,"br"),t()()(),i(5275,"td",23)(5276,"code",40),e(5277,"string"),t()(),i(5278,"td",26)(5279,"em")(5280,"strong"),e(5281,"(opcional)"),t()(),i(5282,"p"),e(5283,'Mensagem do modal "Exclus\xE3o dos dados inseridos".'),t()()()()(),i(5284,"po-accordion-item",136)(5285,"h4",9)(5286,"code"),e(5287,"ThfGridOptionPaging"),t()(),i(5288,"div",10)(5289,"p"),e(5290,"Interface para configura\xE7\xE3o das op\xE7\xF5es de pagina\xE7\xE3o ("),i(5291,"strong"),e(5292,"t-options-paging"),t(),e(5293,")."),t()(),i(5294,"h4",15),e(5295,"Propriedades"),t(),i(5296,"table",16)(5297,"tr",17)(5298,"th",18),e(5299,"Nome"),t(),i(5300,"th",18),e(5301,"Tipo"),t(),i(5302,"th",18),e(5303,"Descri\xE7\xE3o"),t()(),i(5304,"tr",19)(5305,"td",20)(5306,"div",21)(5307,"span",22),e(5308," label"),o(5309,"br"),t()()(),i(5310,"td",23)(5311,"code",40),e(5312,"string"),t()(),i(5313,"td",26)(5314,"p"),e(5315,"Label correspondente a quantidade de itens"),t()()(),i(5316,"tr",19)(5317,"td",20)(5318,"div",21)(5319,"span",22),e(5320," value"),o(5321,"br"),t()()(),i(5322,"td",23)(5323,"code",51),e(5324,"number"),t()(),i(5325,"td",26)(5326,"p"),e(5327,"Quantidade de itens por p\xE1gina"),t()()()()(),i(5328,"po-accordion-item",137)(5329,"h4",9)(5330,"code"),e(5331,"ThfGridOptions"),t()(),i(5332,"div",10)(5333,"p"),e(5334,"Interface para as propriedades que permitem personalizar dinamicamente o comportamento do componente."),t()(),i(5335,"h4",15),e(5336,"Propriedades"),t(),i(5337,"table",16)(5338,"tr",17)(5339,"th",18),e(5340,"Nome"),t(),i(5341,"th",18),e(5342,"Tipo"),t(),i(5343,"th",18),e(5344,"Descri\xE7\xE3o"),t()(),i(5345,"tr",19)(5346,"td",20)(5347,"div",21)(5348,"span",22),e(5349," actions"),o(5350,"br"),t()()(),i(5351,"td",23)(5352,"code",29),e(5353,"Array<ThfTableAction>"),t()(),i(5354,"td",26)(5355,"em")(5356,"strong"),e(5357,"(opcional)"),t()(),i(5358,"p"),e(5359,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar no grid atrav\xE9s de bot\xF5es."),t()()(),i(5360,"tr",19)(5361,"td",20)(5362,"div",21)(5363,"span",22),e(5364," columns"),o(5365,"br"),t()()(),i(5366,"td",23)(5367,"code",37),e(5368,"Array<ThfGridColumn>"),t()(),i(5369,"td",26)(5370,"em")(5371,"strong"),e(5372,"(opcional)"),t()(),i(5373,"p"),e(5374,`Lista das colunas usadas no grid e busca avan\xE7ada.
Caso precise alterar uma coluna que j\xE1 exista deve ser passado o atributo `),i(5375,"code"),e(5376,"property"),t(),e(5377," com o mesmo conte\xFAdo do original."),t()()(),i(5378,"tr",19)(5379,"td",20)(5380,"div",21)(5381,"span",22),e(5382," customActions"),o(5383,"br"),t()()(),i(5384,"td",23)(5385,"code",42),e(5386,"Array<PoDropdownAction>"),t()(),i(5387,"td",26)(5388,"em")(5389,"strong"),e(5390,"(opcional)"),t()(),i(5391,"p"),e(5392,"Lista de a\xE7\xF5es customizadas do grid que ser\xE3o incorporadas \xE0s a\xE7\xF5es informadas atrav\xE9s da propriedade "),i(5393,"code"),e(5394,"actions"),t(),e(5395,"."),t(),i(5396,"pre")(5397,"code",31),e(5398,`// Exemplo de uso:
[
 { label: 'Apply Discount', action: this.applyDiscount.bind(this) },
 { label: 'Details', action: this.details.bind(this) }
];`),t()()()()()(),i(5399,"po-accordion-item",138)(5400,"h4",9)(5401,"code"),e(5402,"ThfGridRowActions"),t()(),i(5403,"div",10)(5404,"p"),e(5405,"Interface para configura\xE7\xE3o da edi\xE7\xE3o flu\xEDda ("),i(5406,"strong"),e(5407,"t-grid-row-actions"),t(),e(5408,`).
Essas a\xE7\xF5es permitem manipular o comportamento de edi\xE7\xE3o, inser\xE7\xE3o e remo\xE7\xE3o de dados no grid.`),t()(),i(5409,"h4",15),e(5410,"Propriedades"),t(),i(5411,"table",16)(5412,"tr",17)(5413,"th",18),e(5414,"Nome"),t(),i(5415,"th",18),e(5416,"Tipo"),t(),i(5417,"th",18),e(5418,"Descri\xE7\xE3o"),t()(),i(5419,"tr",19)(5420,"td",20)(5421,"div",21)(5422,"span",22),e(5423," actionEdit"),o(5424,"br"),t()()(),i(5425,"td",23)(5426,"code",139),e(5427,"(param: any, mode: 'edit' "),t(),i(5428,"code",140),e(5429," 'include') => FormGroup "),t(),i(5430,"code",141),e(5431," Observable<FormGroup>"),t()(),i(5432,"td",26)(5433,"p"),e(5434,`Fun\xE7\xE3o respons\xE1vel por iniciar o modo de edi\xE7\xE3o ou inclus\xE3o de uma linha no grid.
O m\xE9todo recebe os dados da linha selecionada ou um objeto vazio no modo de inclus\xE3o.
Deve retornar um `),i(5435,"code"),e(5436,"FormGroup"),t(),e(5437," que ser\xE1 utilizado para controlar os valores das colunas edit\xE1veis."),t(),i(5438,"pre")(5439,"code",31),e(5440,`// Exemplo de uso:

actionEdit: (param, mode) => new FormGroup({
  name: new FormControl(param.name),
  age: new FormControl(param.age)
})`),t()(),i(5441,"p"),e(5442,"ou"),t(),i(5443,"pre")(5444,"code",31),e(5445,`actionEdit: (dataItem, mode) => {
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
 }`),t()()()(),i(5446,"tr",19)(5447,"td",20)(5448,"div",21)(5449,"span",22),e(5450," afterRemove"),o(5451,"br"),t()()(),i(5452,"td",23)(5453,"code",142),e(5454,"(row: any) => void"),t()(),i(5455,"td",26)(5456,"em")(5457,"strong"),e(5458,"(opcional)"),t()(),i(5459,"p"),e(5460,`Fun\xE7\xE3o opcional executada ap\xF3s a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s a remo\xE7\xE3o de dados, como exibir notifica\xE7\xF5es.`),t()()(),i(5461,"tr",19)(5462,"td",20)(5463,"div",21)(5464,"span",22),e(5465," afterSave"),o(5466,"br"),t()()(),i(5467,"td",23)(5468,"code",142),e(5469,"(row: any) => void"),t()(),i(5470,"td",26)(5471,"em")(5472,"strong"),e(5473,"(opcional)"),t()(),i(5474,"p"),e(5475,`Fun\xE7\xE3o opcional executada ap\xF3s o salvamento de uma linha editada.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s a conclus\xE3o de uma edi\xE7\xE3o.`),t()()(),i(5476,"tr",19)(5477,"td",20)(5478,"div",21)(5479,"span",22),e(5480," afterUndoRemove"),o(5481,"br"),t()()(),i(5482,"td",23)(5483,"code",142),e(5484,"(row: any) => void"),t()(),i(5485,"td",26)(5486,"em")(5487,"strong"),e(5488,"(opcional)"),t()(),i(5489,"p"),e(5490,`Fun\xE7\xE3o opcional executada ap\xF3s desfazer a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s desfazer a remo\xE7\xE3o de dados, como exibir notifica\xE7\xF5es.`),t()()(),i(5491,"tr",19)(5492,"td",20)(5493,"div",21)(5494,"span",22),e(5495," beforeInsert"),o(5496,"br"),t()()(),i(5497,"td",23)(5498,"code",143),e(5499,"(row: any) => boolean "),t(),i(5500,"code",144),e(5501," Observable<boolean>"),t()(),i(5502,"td",26)(5503,"em")(5504,"strong"),e(5505,"(opcional)"),t()(),i(5506,"p"),e(5507,`Fun\xE7\xE3o opcional executada antes de inserir uma nova linha no grid.
Pode ser usada para validar ou modificar os dados antes da inclus\xE3o.`),t()()(),i(5508,"tr",19)(5509,"td",20)(5510,"div",21)(5511,"span",22),e(5512," beforeRemove"),o(5513,"br"),t()()(),i(5514,"td",23)(5515,"code",143),e(5516,"(row: any) => boolean "),t(),i(5517,"code",144),e(5518," Observable<boolean>"),t()(),i(5519,"td",26)(5520,"em")(5521,"strong"),e(5522,"(opcional)"),t()(),i(5523,"p"),e(5524,`Fun\xE7\xE3o opcional executada antes de remover uma linha do grid.
Pode ser usada para validar ou confirmar a remo\xE7\xE3o da linha.`),t()()(),i(5525,"tr",19)(5526,"td",20)(5527,"div",21)(5528,"span",22),e(5529," beforeSave"),o(5530,"br"),t()()(),i(5531,"td",23)(5532,"code",145),e(5533,"(updatedRow: any, originalRow: any) => boolean "),t(),i(5534,"code",144),e(5535," Observable<boolean>"),t()(),i(5536,"td",26)(5537,"em")(5538,"strong"),e(5539,"(opcional)"),t()(),i(5540,"p"),e(5541,`Fun\xE7\xE3o opcional executada antes de salvar as altera\xE7\xF5es de uma linha editada.
Pode ser usada para validar ou modificar os dados antes de confirmar a edi\xE7\xE3o.`),t()()(),i(5542,"tr",19)(5543,"td",20)(5544,"div",21)(5545,"span",22),e(5546," beforeUndoRemove"),o(5547,"br"),t()()(),i(5548,"td",23)(5549,"code",143),e(5550,"(row: any) => boolean "),t(),i(5551,"code",144),e(5552," Observable<boolean>"),t()(),i(5553,"td",26)(5554,"em")(5555,"strong"),e(5556,"(opcional)"),t()(),i(5557,"p"),e(5558,`Fun\xE7\xE3o opcional executada antes de desfazer a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para validar ou confirmar o desfazer da remo\xE7\xE3o da linha.`),t()()(),i(5559,"tr",19)(5560,"td",20)(5561,"div",21)(5562,"span",22),e(5563," change"),o(5564,"br"),t()()(),i(5565,"td",23)(5566,"code",146),e(5567,"(updatedRows: Array<any>) => void"),t()(),i(5568,"td",26)(5569,"em")(5570,"strong"),e(5571,"(opcional)"),t()(),i(5572,"p"),e(5573,`Fun\xE7\xE3o opcional que retorna a lista atualizada sempre que ocorre edi\xE7\xE3o, inclus\xE3o ou remo\xE7\xE3o.
Facilita o monitoramento das mudan\xE7as feitas, permitindo que se veja rapidamente o que foi alterado no grid.
Ser\xE1 disparado apenas durante a\xE7\xF5es de edi\xE7\xE3o flu\xEDda, sem compatibilidade com outros eventos.`),t()()(),i(5574,"tr",19)(5575,"td",20)(5576,"div",21)(5577,"span",22),e(5578," hiddenGrid"),o(5579,"br"),t()()(),i(5580,"td",23)(5581,"code",24),e(5582,"boolean"),t()(),i(5583,"td",26)(5584,"em")(5585,"strong"),e(5586,"(opcional)"),t()(),i(5587,"p"),e(5588,"Propriedade opcional utilizada para determinar se a grid deve ser ocultada quando n\xE3o houver registros."),t()()(),i(5589,"tr",19)(5590,"td",20)(5591,"div",21)(5592,"span",22),e(5593," noPermission"),o(5594,"br"),t()()(),i(5595,"td",23)(5596,"code",147),e(5597,"Array<ThfGridEditModeActionType>"),t()(),i(5598,"td",26)(5599,"em")(5600,"strong"),e(5601,"(opcional)"),t()(),i(5602,"p"),e(5603,`Propriedade opcional que permite remover e desabilitar as a\xE7\xF5es no grid.
Os valores permitidos no array s\xE3o definidos pelo enum `),i(5604,"strong"),e(5605,"ThfGridEditModeActionType"),t(),e(5606,":"),t(),i(5607,"pre")(5608,"code",31),e(5609,`// Exemplo de uso:

gridRowActions: ThfGridRowActions = {
 noPermission: [
   ThfGridEditModeActionType.Replace,
   ThfGridEditModeActionType.Add,
   ThfGridEditModeActionType.Remove] // Desabilita edi\xE7\xE3o, inclus\xE3o e remo\xE7\xE3o
  // outras a\xE7\xF5es...
};`),t()()()(),i(5610,"tr",19)(5611,"td",20)(5612,"div",21)(5613,"span",22),e(5614," title"),o(5615,"br"),t()()(),i(5616,"td",23)(5617,"code",40),e(5618,"string"),t()(),i(5619,"td",26)(5620,"em")(5621,"strong"),e(5622,"(opcional)"),t()(),i(5623,"p"),e(5624,"T\xEDtulo opcional que pode ser usado para exibir um cabe\xE7alho ou descri\xE7\xE3o na interface."),t()()(),i(5625,"tr",19)(5626,"td",20)(5627,"div",21)(5628,"span",22),e(5629," validateField"),o(5630,"br"),t()()(),i(5631,"td",23)(5632,"code",148),e(5633,"(updatedField: any, columnProperty: string) => boolean "),t(),i(5634,"code",144),e(5635," Observable<boolean>"),t()(),i(5636,"td",26)(5637,"em")(5638,"strong"),e(5639,"(opcional)"),t()(),i(5640,"p"),e(5641,`Fun\xE7\xE3o opcional executada quando algum campo \xE9 alterado.
Pode ser usada para validar ou modificar dados baseados no valor alterado.`),t(),i(5642,"pre")(5643,"code",31),e(5644,`// Exemplo de uso:

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
}`),t()()()()()()()(),y(5645,4),t(),i(5646,"po-tab",149),y(5647,5),i(5648,"po-container",5)(5649,"po-accordion",6)(5650,"po-accordion-item",150)(5651,"h4",9)(5652,"code"),e(5653,"ThfColumnSpacing"),t()(),i(5654,"h4",15),e(5655,"Propriedades"),t(),i(5656,"table",16)(5657,"tr",17)(5658,"th",18),e(5659,"Nome"),t(),i(5660,"th",18),e(5661,"Descri\xE7\xE3o"),t()(),i(5662,"tr",19)(5663,"td",20)(5664,"div",21)(5665,"span",22),e(5666," ExtraSmall"),o(5667,"br"),t()()(),i(5668,"td",26)(5669,"p"),e(5670,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),t()()(),i(5671,"tr",19)(5672,"td",20)(5673,"div",21)(5674,"span",22),e(5675," Large"),o(5676,"br"),t()()(),i(5677,"td",26)(5678,"p"),e(5679,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),t()()(),i(5680,"tr",19)(5681,"td",20)(5682,"div",21)(5683,"span",22),e(5684," Medium"),o(5685,"br"),t()()(),i(5686,"td",26)(5687,"p"),e(5688,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),t()()(),i(5689,"tr",19)(5690,"td",20)(5691,"div",21)(5692,"span",22),e(5693," Small"),o(5694,"br"),t()()(),i(5695,"td",26)(5696,"p"),e(5697,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),t()()()()(),i(5698,"po-accordion-item",151)(5699,"h4",9)(5700,"code"),e(5701,"ThfGridEditModeActionType"),t()(),i(5702,"h4",15),e(5703,"Propriedades"),t(),i(5704,"table",16)(5705,"tr",17)(5706,"th",18),e(5707,"Nome"),t(),i(5708,"th",18),e(5709,"Descri\xE7\xE3o"),t()(),i(5710,"tr",19)(5711,"td",20)(5712,"div",21)(5713,"span",22),e(5714," Add"),o(5715,"br"),t()()(),i(5716,"td",26)(5717,"p"),e(5718,"A\xE7\xE3o de inclus\xE3o"),t()()(),i(5719,"tr",19)(5720,"td",20)(5721,"div",21)(5722,"span",22),e(5723," Remove"),o(5724,"br"),t()()(),i(5725,"td",26)(5726,"p"),e(5727,"A\xE7\xE3o de remo\xE7\xE3o"),t()()(),i(5728,"tr",19)(5729,"td",20)(5730,"div",21)(5731,"span",22),e(5732," Replace"),o(5733,"br"),t()()(),i(5734,"td",26)(5735,"p"),e(5736,"A\xE7\xE3o de edi\xE7\xE3o"),t()()()()()()(),y(5737,6),t(),i(5738,"po-tab",152),y(5739,7),i(5740,"po-container",5)(5741,"po-accordion",6)(5742,"po-accordion-item",153)(5743,"h4",9)(5744,"code"),e(5745,"ThfGridCellTemplateDirective"),t()(),i(5746,"div",10)(5747,"p"),e(5748,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),t(),i(5749,"p"),e(5750,"Em seu uso, deve-se apenas adicionar a diretiva "),i(5751,"strong"),e(5752,"t-grid-cell-template"),t(),e(5753," \xE0 tag "),i(5754,"code"),e(5755,"ng-template"),t(),e(5756,"."),t(),i(5757,"p"),e(5758,"Retorno:"),t(),i(5759,"ul")(5760,"li")(5761,"code"),e(5762,"column"),t(),e(5763,": conte\xFAdo da coluna corrente."),t(),i(5764,"li")(5765,"code"),e(5766,"row"),t(),e(5767,": conte\xFAdo da linha corrente"),t()(),i(5768,"p"),e(5769,"Modo de uso:"),t(),i(5770,"pre")(5771,"code"),e(5772,`...
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
...`),t()(),i(5773,"blockquote")(5774,"p"),e(5775,"No exemplo acima, o usu\xE1rio tem como retorno "),i(5776,"code"),e(5777,"row"),t(),e(5778," e a "),i(5779,"code"),e(5780,"column"),t(),e(5781," corrente, neste caso ele tem total liberdade para manipular os objetos."),t()(),i(5782,"p"),e(5783,"Abaixo, a declara\xE7\xE3o dos dados de entrada do THF-GRID para o uso da directiva."),t(),i(5784,"pre")(5785,"code"),e(5786,`...
export class AppComponent {

   columns = [
      { property: 'code', label: 'ID' },
      { property: 'product', label: 'PRODUTO' },
      { property: 'status', label: 'STATUS', type: 'cellTemplate' },
      { property: 'status2', label: 'STATUS 2', type: 'cellTemplate' },
      { property: 'status3', label: 'STATUS 3', type: 'cellTemplate' }
   ];
}
...`),t()(),i(5787,"blockquote")(5788,"p"),e(5789,"Observa\xE7\xE3o: Sempre adicionar o "),i(5790,"strong"),e(5791,"type"),t(),e(5792," da coluna que deseja manipular com a directiva como "),i(5793,"code"),e(5794,"cellTemplate"),t()()()(),i(5795,"div",11)(5796,"h4",12),e(5797,"Seletor"),t(),i(5798,"pre",13),e(5799,`<[t-grid-cell-template] >
</[t-grid-cell-template]>
`),t()()(),i(5800,"po-accordion-item",154)(5801,"h4",9)(5802,"code"),e(5803,"ThfGridColumnTemplateDirective"),t()(),i(5804,"div",10)(5805,"p"),e(5806,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),t(),i(5807,"p"),e(5808,"Em seu uso, deve-se utilizar como par\xE2metro de entrada o input "),i(5809,"strong"),e(5810,"[t-property]"),t(),e(5811,`, o qual \xE9 respons\xE1vel por informar ao THF-GRID qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),t(),i(5812,"p"),e(5813,"Retorno:"),t(),i(5814,"ul")(5815,"li"),e(5816,"value: valor referente ao conte\xFAdo da linha corrente."),t()(),i(5817,"p"),e(5818,"Modo de uso:"),t(),i(5819,"pre")(5820,"code",28),e(5821,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com">
  <ng-template t-grid-column-template [t-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</thf-grid>
...`),t()(),i(5822,"blockquote")(5823,"p"),e(5824,"No exemplo acima, todas as c\xE9lulas correspondentes a coluna "),i(5825,"code"),e(5826,"status"),t(),e(5827," ter\xE3o o conte\xFAdo alterado para "),i(5828,"code"),e(5829,"<h1>${value}</h1>"),t(),e(5830,`,
sendo que `),i(5831,"code"),e(5832,"value"),t(),e(5833," refere-se ao conte\xFAdo da linha."),t()(),i(5834,"pre")(5835,"code",28),e(5836,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com">
  <ng-template  t-grid-column-template [t-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</thf-grid>
...`),t()(),i(5837,"blockquote")(5838,"p"),e(5839,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),t()(),i(5840,"p"),e(5841,"Abaixo, a declara\xE7\xE3o dos dados de entrada do THF-GRID para o uso da directiva."),t(),i(5842,"pre")(5843,"code",31),e(5844,`...
export class AppComponent {

   targetProperty= 'status';

   columns = [
     { property: 'code', label: 'ID' },
     { property: 'product', label: 'PRODUTO' },
     { property: 'status', label: 'STATUS', type: 'columnTemplate' }
   ];
}
...`),t()(),i(5845,"blockquote")(5846,"p"),e(5847,"Observa\xE7\xE3o: Sempre adicionar o "),i(5848,"strong"),e(5849,"type"),t(),e(5850," da coluna que deseja manipular com a directiva como "),i(5851,"code"),e(5852,"columnTemplate"),t()()()(),i(5853,"div",11)(5854,"h4",12),e(5855,"Seletor"),t(),i(5856,"pre",13),e(5857,`<[t-grid-column-template] >
</[t-grid-column-template]>
`),t()()()()(),y(5858,8),t(),i(5859,"po-tab",155)(5860,"po-container",5),y(5861,9),i(5862,"h3",156),e(5863,"Tokens customiz\xE1veis"),t(),i(5864,"p"),e(5865,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(5866,"blockquote")(5867,"p"),e(5868,"Para maiores informa\xE7\xF5es, acesse o guia "),i(5869,"a",157),e(5870,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(5871,"."),t()(),i(5872,"table")(5873,"thead")(5874,"tr")(5875,"th"),e(5876,"Propriedade"),t(),i(5877,"th"),e(5878,"Descri\xE7\xE3o"),t(),i(5879,"th"),e(5880,"Valor Padr\xE3o"),t()()(),i(5881,"tbody")(5882,"tr")(5883,"td")(5884,"strong"),e(5885,"Default Values"),t()(),o(5886,"td")(5887,"td"),t(),i(5888,"tr")(5889,"td")(5890,"code"),e(5891,"--font-family"),t()(),i(5892,"td"),e(5893,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(5894,"td")(5895,"code"),e(5896,"var(--font-family-theme)"),t()()(),i(5897,"tr")(5898,"td")(5899,"code"),e(5900,"--background-color"),t()(),i(5901,"td"),e(5902,"Cor de background"),t(),i(5903,"td")(5904,"code"),e(5905,"var(--color-neutral-light-00)"),t()()(),i(5906,"tr")(5907,"td")(5908,"code"),e(5909,"--color"),t()(),i(5910,"td"),e(5911,"Cor principal da table"),t(),i(5912,"td")(5913,"code"),e(5914,"var(--color-neutral-dark-95)"),t()()(),i(5915,"tr")(5916,"td")(5917,"code"),e(5918,"--background-striped-color"),t()(),i(5919,"td"),e(5920,"Cor do background quando striped"),t(),i(5921,"td")(5922,"code"),e(5923,"var(--color-neutral-light-05)"),t()()(),i(5924,"tr")(5925,"td")(5926,"code"),e(5927,"--color-line"),t()(),i(5928,"td"),e(5929,"Cor das linhas"),t(),i(5930,"td")(5931,"code"),e(5932,"var(--color-neutral-mid-40)"),t()()(),i(5933,"tr")(5934,"td")(5935,"strong"),e(5936,"Hover"),t()(),o(5937,"td")(5938,"td"),t(),i(5939,"tr")(5940,"td")(5941,"code"),e(5942,"--color-hover"),t()(),i(5943,"td"),e(5944,"Cor principal no estado hover"),t(),i(5945,"td")(5946,"code"),e(5947,"var(--color-action-hover)"),t()()(),i(5948,"tr")(5949,"td")(5950,"code"),e(5951,"--background-color-hover"),t()(),i(5952,"td"),e(5953,"Cor de background no estado hover"),t(),i(5954,"td")(5955,"code"),e(5956,"var(--color-brand-01-lighter)"),t()()(),i(5957,"tr")(5958,"td")(5959,"strong"),e(5960,"Focused"),t()(),o(5961,"td")(5962,"td"),t(),i(5963,"tr")(5964,"td")(5965,"code"),e(5966,"--outline-color-focused"),t()(),i(5967,"td"),e(5968,"Cor do outline do estado de focus"),t(),i(5969,"td")(5970,"code"),e(5971,"var(--color-action-focus)"),t()()(),i(5972,"tr")(5973,"td")(5974,"strong"),e(5975,"Disabled"),t()(),o(5976,"td")(5977,"td"),t(),i(5978,"tr")(5979,"td")(5980,"code"),e(5981,"--color-disabled"),t()(),i(5982,"td"),e(5983,"Cor principal no estado disabled"),t(),i(5984,"td")(5985,"code"),e(5986,"var(--color-neutral-mid-40)"),t()()(),i(5987,"tr")(5988,"td")(5989,"strong"),e(5990,"Headline"),t()(),o(5991,"td")(5992,"td"),t(),i(5993,"tr")(5994,"td")(5995,"code"),e(5996,"--background-color-headline"),t()(),i(5997,"td"),e(5998,"Cor do cabe\xE7alho"),t(),i(5999,"td")(6e3,"code"),e(6001,"var(--color-neutral-light-10)"),t()()(),i(6002,"tr")(6003,"td")(6004,"code"),e(6005,"--font-weight-headline"),t()(),i(6006,"td"),e(6007,"Peso da fonte do cabe\xE7alho"),t(),i(6008,"td")(6009,"code"),e(6010,"var(--font-weight-bold)"),t()()(),i(6011,"tr")(6012,"td")(6013,"strong"),e(6014,"Selected"),t()(),o(6015,"td")(6016,"td"),t(),i(6017,"tr")(6018,"td")(6019,"code"),e(6020,"--background-color-selected"),t()(),i(6021,"td"),e(6022,"Cor de background no estado de selecionado"),t(),i(6023,"td")(6024,"code"),e(6025,"var(--color-brand-01-lightest)"),t()()(),i(6026,"tr")(6027,"td")(6028,"code"),e(6029,"--color-actived"),t()(),i(6030,"td"),e(6031,"Cor do texto no estado de selecionado"),t(),i(6032,"td")(6033,"code"),e(6034,"var(--color-neutral-dark-90)"),t()()(),i(6035,"tr")(6036,"td")(6037,"strong"),e(6038,"Pressed"),t()(),o(6039,"td")(6040,"td"),t(),i(6041,"tr")(6042,"td")(6043,"code"),e(6044,"--background-color-actived"),t()(),i(6045,"td"),e(6046,"Cor de background da a\xE7\xE3o quando pressionada"),t(),i(6047,"td")(6048,"code"),e(6049,"var(--color-brand-01-light)"),t()()(),i(6050,"tr"),o(6051,"td")(6052,"td")(6053,"td"),t(),i(6054,"tr")(6055,"td")(6056,"strong"),e(6057,"Toolbar Title"),t()(),o(6058,"td")(6059,"td"),t(),i(6060,"tr")(6061,"td")(6062,"code"),e(6063,"--font-size-toolbar-title"),t()(),i(6064,"td"),e(6065,"Tamanho da fonte do Titulo da toolbar da Grid"),t(),i(6066,"td"),e(6067,"1.125rem"),t()(),i(6068,"tr")(6069,"td")(6070,"code"),e(6071,"--letter-spacing-toolbar-title"),t()(),i(6072,"td"),e(6073,"Espa\xE7amento entre letras do Titulo da toolbar da Grid"),t(),i(6074,"td"),e(6075,"0.017rem"),t()()()()(),y(6076,10),t(),i(6077,"po-tab",158),y(6078,11),t()()())},dependencies:[L,B,b,be,Z,z],encapsulation:2})}}return d})();var jt=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],Vt=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],lt=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(u=>{let q=u.querySelector(".po-tab-button-label");q&&q?.textContent?.trim().toLowerCase()===a&&u.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(u=>!u.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(R(H))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-lookup"]],viewQuery:function(r,n){if(r&1&&(T(z,5),T(L,5)),r&2){let l;w(l=D())&&(n.tabs=l.first),w(l=D())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:Vt,decls:1996,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","Array<ThfLookupColumn>"],[1,"language-html"],[1,"language-typescript"],["p-type","success","p-value","since 19.8.0"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","((item:","any)","=>","string)"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<ThfLookupFilterSearchSelect>"],["pan","",1,"docs-api-property-type","ThfLookupFilter"],["href","https://po-ui.io/guides/api"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","Array<ThfLookupKeysLabel>"],["pan","",1,"docs-api-property-type","ThfLookupLiterals"],["pan","",1,"docs-api-property-type","'equal'"],["pan","",1,"docs-api-property-type","'include'"],["p-label","M\xE9todos"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["p-label","Interfaces"],["p-label","ThfLookupColumn"],["p-label","ThfLookupFilterSearchSelect"],["p-label","ThfLookupFilter"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","Array<any>"],["p-label","ThfLookupFilteredItemsParams"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","number"],["p-label","ThfLookupKeysLabel"],["p-label","ThfLookupLiterals"],["p-label","ThfLookupResponseApi"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(W(jt),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),y(4),t(),i(5,"po-tab",4),y(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfLookupComponent"),t()(),i(16,"div",10)(17,"p"),e(18,`Componente utilizado para abrir um modal de busca com um grid que lista dados de um servi\xE7o.
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
  t-help="string"
  (t-focus)="EventEmitter"
  t-key-last-search="string"
  (t-keydown)="EventEmitter"
  t-keys-label="Array<ThfLookupKeysLabel>"
  t-label="string"
  t-literals="ThfLookupLiterals"
  t-multiple="boolean"
  t-no-autocomplete="boolean"
  (t-error)="EventEmitter"
  t-optional="boolean"
  t-placeholder="string"
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
desenvolvedor.`),t()()()(),i(571,"tr",19)(572,"td",20)(573,"div",21)(574,"span",22),e(575,"t-help"),o(576,"br"),t()()(),i(577,"td",23)(578,"code",27),e(579,"string"),t()(),i(580,"td",25),e(581,"-"),t(),i(582,"td",26)(583,"em")(584,"strong"),e(585,"(opcional)"),t()(),i(586,"p"),e(587,"Texto de apoio do campo."),t()()(),i(588,"tr",19)(589,"td",20)(590,"div",29)(591,"span",30),e(592," (t-focus)"),o(593,"br"),t()()(),i(594,"td",23)(595,"code",24),e(596,"EventEmitter"),t()(),i(597,"td",25),e(598,"-"),t(),i(599,"td",26)(600,"em")(601,"strong"),e(602,"(opcional)"),t()(),i(603,"p"),e(604,"Evento emitido quando o campo de entrada (input) recebe foco."),t(),i(605,"p"),e(606,"Esse evento pode ser utilizado para realizar a\xE7\xF5es espec\xEDficas no momento em que o foco \xE9 aplicado ao input."),t()()(),i(607,"tr",19)(608,"td",20)(609,"div",21)(610,"span",22),e(611,"t-key-last-search"),o(612,"br"),t()()(),i(613,"td",23)(614,"code",27),e(615,"string"),t()(),i(616,"td",25),e(617,"-"),t(),i(618,"td",26)(619,"em")(620,"strong"),e(621,"(opcional)"),t()(),i(622,"p"),e(623,"Define um identificador \xFAnico para o campo. Marca\xE7\xE3o necess\xE1ria quando h\xE1 hist\xF3rico de \xFAltimas pesquisas."),t()()(),i(624,"tr",19)(625,"td",20)(626,"div",29)(627,"span",30),e(628," (t-keydown)"),o(629,"br"),t()()(),i(630,"td",23)(631,"code",24),e(632,"EventEmitter"),t()(),i(633,"td",25),e(634,"-"),t(),i(635,"td",26)(636,"em")(637,"strong"),e(638,"(opcional)"),t()(),i(639,"p"),e(640,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no campo.
Retorna um objeto `),i(641,"code"),e(642,"KeyboardEvent"),t(),e(643," com informa\xE7\xF5es sobre a tecla."),t()()(),i(644,"tr",19)(645,"td",20)(646,"div",21)(647,"span",22),e(648,"t-keys-label"),o(649,"br"),t()()(),i(650,"td",23)(651,"code",43),e(652,"Array<ThfLookupKeysLabel>"),t()(),i(653,"td",25),e(654,"-"),t(),i(655,"td",26)(656,"em")(657,"strong"),e(658,"(opcional)"),t()(),i(659,"p"),e(660,"Permite definir at\xE9 3 propriedades do item selecionado que ficar\xE3o vis\xEDveis no campo."),t(),i(661,"pre")(662,"code",32),e(663,`<thf-lookup
 ...
 [t-keys-label]="keysLabel"
></thf-lookup>`),t()(),i(664,"pre")(665,"code",33),e(666,`keysLabel: Array<ThfLookupKeysLabel> = [
 { label: 'Nome', value: 'name' },
 { label: 'Email', value: 'email' }
];`),t()(),i(667,"pre")(668,"code"),e(669,`// sa\xEDda no campo:
Robert Bruce Banner-hulksmash@marvel.com`),t()()()(),i(670,"tr",19)(671,"td",20)(672,"div",21)(673,"span",22),e(674,"t-label"),o(675,"br"),t()()(),i(676,"td",23)(677,"code",27),e(678,"string"),t()(),i(679,"td",25),e(680,"-"),t(),i(681,"td",26)(682,"em")(683,"strong"),e(684,"(opcional)"),t()(),i(685,"p"),e(686,"Label do campo. Tamb\xE9m usado como t\xEDtulo do modal de busca avan\xE7ada, se "),i(687,"code"),e(688,"modalTitle"),t(),e(689," n\xE3o estiver definido em "),i(690,"strong"),e(691,"t-literals"),t(),e(692,"."),t()()(),i(693,"tr",19)(694,"td",20)(695,"div",21)(696,"span",22),e(697,"t-literals"),o(698,"br"),t()()(),i(699,"td",23)(700,"code",44),e(701,"ThfLookupLiterals"),t()(),i(702,"td",25),e(703,"-"),t(),i(704,"td",26)(705,"em")(706,"strong"),e(707,"(opcional)"),t()(),i(708,"p"),e(709,"Permite definir literais personalizados para o componente, conforme a interface "),i(710,"strong"),e(711,"ThfLookupLiterals"),t(),e(712,"."),t(),i(713,"pre")(714,"code",32),e(715,`// Exemplo de uso:
<thf-lookup
 ...
 [t-literals]="customLiterals"
></thf-lookup>`),t()(),i(716,"pre")(717,"code",33),e(718,"customLiterals: ThfLookupLiterals = { modalTitle: 'Busca avan\xE7ada' };"),t()()()(),i(719,"tr",19)(720,"td",20)(721,"div",21)(722,"span",22),e(723,"t-multiple"),o(724,"br"),t()()(),i(725,"td",23)(726,"code",28),e(727,"boolean"),t()(),i(728,"td",25)(729,"p")(730,"code"),e(731,"false"),t()()(),i(732,"td",26)(733,"em")(734,"strong"),e(735,"(opcional)"),t()(),i(736,"p"),e(737,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(738,"blockquote")(739,"p"),e(740,"Quando habilitado, o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(741,"code"),e(742,"[ 12345, 67890 ]"),t()()()()(),i(743,"tr",19)(744,"td",20)(745,"div",21)(746,"span",22),e(747,"t-no-autocomplete"),o(748,"br"),t()()(),i(749,"td",23)(750,"code",28),e(751,"boolean"),t()(),i(752,"td",25)(753,"p")(754,"code"),e(755,"false"),t()()(),i(756,"td",26)(757,"em")(758,"strong"),e(759,"(opcional)"),t()(),i(760,"p"),e(761,"Desabilita o "),i(762,"code"),e(763,"autocomplete"),t(),e(764," (propriedade nativa) do campo."),t()()(),i(765,"tr",19)(766,"td",20)(767,"div",29)(768,"span",30),e(769," (t-error)"),o(770,"br"),t()()(),i(771,"td",23)(772,"code",24),e(773,"EventEmitter"),t()(),i(774,"td",25),e(775,"-"),t(),i(776,"td",26)(777,"em")(778,"strong"),e(779,"(opcional)"),t()(),i(780,"p"),e(781,`Evento disparado quando ocorre algum erro na requisi\xE7\xE3o de busca.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(782,"tr",19)(783,"td",20)(784,"div",21)(785,"span",22),e(786,"t-optional"),o(787,"br"),t()()(),i(788,"td",23)(789,"code",28),e(790,"boolean"),t()(),i(791,"td",25)(792,"p")(793,"code"),e(794,"false"),t()()(),i(795,"td",26)(796,"em")(797,"strong"),e(798,"(opcional)"),t()(),i(799,"p"),e(800,"Exibe um indicador opcional no campo. Requer que "),i(801,"strong"),e(802,"t-label"),t(),e(803," esteja definido e "),i(804,"strong"),e(805,"t-required"),t(),e(806," desabilitado."),t()()(),i(807,"tr",19)(808,"td",20)(809,"div",21)(810,"span",22),e(811,"t-placeholder"),o(812,"br"),t()()(),i(813,"td",23)(814,"code",27),e(815,"string"),t()(),i(816,"td",25),e(817,"-"),t(),i(818,"td",26)(819,"em")(820,"strong"),e(821,"(opcional)"),t()(),i(822,"p"),e(823,"Texto exibido enquanto o campo estiver vazio."),t()()(),i(824,"tr",19)(825,"td",20)(826,"div",21)(827,"span",22),e(828,"t-required"),o(829,"br"),t()()(),i(830,"td",23)(831,"code",28),e(832,"boolean"),t()(),i(833,"td",25)(834,"p")(835,"code"),e(836,"false"),t()()(),i(837,"td",26)(838,"em")(839,"strong"),e(840,"(opcional)"),t()(),i(841,"p"),e(842,"Define o campo como obrigat\xF3rio. Caso "),i(843,"strong"),e(844,"t-disabled"),t(),e(845," esteja habilitado, a obrigatoriedade ser\xE1 ignorada."),t()()(),i(846,"tr",19)(847,"td",20)(848,"div",21)(849,"span",22),e(850,"t-search-on-enter"),o(851,"br"),t()()(),i(852,"td",23)(853,"code",45),e(854,"'equal' "),t(),i(855,"code",46),e(856," 'include'"),t()(),i(857,"td",25)(858,"p")(859,"code"),e(860,"equal"),t()()(),i(861,"td",26)(862,"em")(863,"strong"),e(864,"(opcional)"),t()(),i(865,"p"),e(866,"Realiza busca do item ao pressionar a tecla Enter."),t(),i(867,"blockquote")(868,"p"),e(869,"Caso essa propriedade seja definida como "),i(870,"code"),e(871,"equal"),t(),e(872,`, a busca ser\xE1 realizada quando o valor do campo for exatamente igual ao valor do item.
Caso seja definida como `),i(873,"code"),e(874,"include"),t(),e(875,", a busca retornar\xE1 o primeiro item que contenha o valor do campo."),t()()()(),i(876,"tr",19)(877,"td",20)(878,"div",29)(879,"span",30),e(880," (t-selected)"),o(881,"br"),t()()(),i(882,"td",23)(883,"code",24),e(884,"EventEmitter"),t()(),i(885,"td",25),e(886,"-"),t(),i(887,"td",26)(888,"em")(889,"strong"),e(890,"(opcional)"),t()(),i(891,"p"),e(892,`Evento disparado ao selecionar um item.
Para sele\xE7\xE3o m\xFAltipla, retorna a lista de itens selecionados contendo os valores da coluna definida em `),i(893,"strong"),e(894,"t-field-value"),t(),e(895,`.
Para sele\xE7\xE3o \xFAnica retorna o objeto do item.`),t()()(),i(896,"tr",19)(897,"td",20)(898,"div",21)(899,"span",22),e(900,"t-show-required"),o(901,"br"),t()()(),i(902,"td",23)(903,"code",28),e(904,"boolean"),t()(),i(905,"td",25)(906,"p")(907,"code"),e(908,"false"),t()()(),i(909,"td",26)(910,"em")(911,"strong"),e(912,"(opcional)"),t()(),i(913,"p"),e(914,"Exibe um indicador de obrigatoriedade no campo. Requer que "),i(915,"strong"),e(916,"t-required"),t(),e(917," esteja habilitado e "),i(918,"strong"),e(919,"t-label"),t(),e(920," definido."),t()()(),i(921,"tr",19)(922,"td",20)(923,"div",21)(924,"span",22),e(925," t-modal-size"),o(926,"br"),t()()(),i(927,"td",23)(928,"code",27),e(929,"string"),t()(),i(930,"td",25)(931,"p")(932,"code"),e(933,"lg"),t()()(),i(934,"td",26)(935,"em")(936,"strong"),e(937,"(opcional)"),t()(),i(938,"p"),e(939,"Define o tamanho do modal."),t(),i(940,"p"),e(941,"Valores v\xE1lidos:"),t(),i(942,"ul")(943,"li")(944,"code"),e(945,"sm"),t(),e(946," (pequeno)"),t(),i(947,"li")(948,"code"),e(949,"md"),t(),e(950," (m\xE9dio)"),t(),i(951,"li")(952,"code"),e(953,"lg"),t(),e(954," (grande)"),t(),i(955,"li")(956,"code"),e(957,"xl"),t(),e(958," (extra grande)"),t(),i(959,"li")(960,"code"),e(961,"auto"),t(),e(962," (autom\xE1tico)"),t()(),i(963,"blockquote")(964,"p"),e(965,"Quando informado "),i(966,"code"),e(967,"auto"),t(),e(968,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),i(969,"code"),e(970,"lg"),t(),e(971,"."),t()()()()()(),i(972,"po-accordion-item",47)(973,"table",48)(974,"tr",19)(975,"th",49)(976,"div",21)(977,"h4")(978,"span",22),e(979," showAdditionalHelp "),t()()()()(),i(980,"tr",26)(981,"td",26)(982,"p"),e(983,"M\xE9todo que exibe "),i(984,"code"),e(985,"t-additionalHelpTooltip"),t(),e(986," ou executa a a\xE7\xE3o definida em "),i(987,"code"),e(988,"t-additionalHelp"),t(),e(989,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(990,"code"),e(991,"t-keydown"),t(),e(992,"."),t(),i(993,"pre")(994,"code"),e(995,`<thf-lookup
 #lookup
 ...
 t-additional-help-tooltip="Mensagem de ajuda complementar"
 (t-keydown)="onKeyDown($event, lookup)"
></thf-lookup>`),t()(),i(996,"pre")(997,"code"),e(998,`...
onKeyDown(event: KeyboardEvent, inp: ThfLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}`),t()()()()(),o(999,"br"),t()()(),y(1e3,2),t(),i(1001,"po-tab",50),y(1002,3),i(1003,"po-container",5)(1004,"po-accordion",6)(1005,"po-accordion-item",51)(1006,"h4",9)(1007,"code"),e(1008,"ThfLookupColumn"),t()(),i(1009,"div",10)(1010,"p"),e(1011,"Interface para configura\xE7\xE3o das colunas ("),i(1012,"strong"),e(1013,"t-columns"),t(),e(1014,")."),t()(),i(1015,"h4",15),e(1016,"Propriedades"),t(),i(1017,"table",16)(1018,"tr",17)(1019,"th",18),e(1020,"Nome"),t(),i(1021,"th",18),e(1022,"Tipo"),t(),i(1023,"th",18),e(1024,"Descri\xE7\xE3o"),t()(),i(1025,"tr",19)(1026,"td",20)(1027,"div",21)(1028,"span",22),e(1029," format"),o(1030,"br"),t()()(),i(1031,"td",23)(1032,"code",27),e(1033,"string"),t()(),i(1034,"td",26)(1035,"em")(1036,"strong"),e(1037,"(opcional)"),t()(),i(1038,"p"),e(1039,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(1040,"ul")(1041,"li"),e(1042,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(1043,"li"),e(1044,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(1045,"tr",19)(1046,"td",20)(1047,"div",21)(1048,"span",22),e(1049," label"),o(1050,"br"),t()()(),i(1051,"td",23)(1052,"code",27),e(1053,"string"),t()(),i(1054,"td",26)(1055,"em")(1056,"strong"),e(1057,"(opcional)"),t()(),i(1058,"p"),e(1059,"Texto para t\xEDtulo da coluna."),t(),i(1060,"p"),e(1061,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(1062,"em"),e(1063,"label"),t(),e(1064," o valor da propriedade "),i(1065,"em"),e(1066,"property"),t(),e(1067," com a primeira letra em mai\xFAsculo."),t()()(),i(1068,"tr",19)(1069,"td",20)(1070,"div",21)(1071,"span",22),e(1072," property"),o(1073,"br"),t()()(),i(1074,"td",23)(1075,"code",27),e(1076,"string"),t()(),i(1077,"td",26)(1078,"em")(1079,"strong"),e(1080,"(opcional)"),t()(),i(1081,"p"),e(1082,"Nome identificador da coluna."),t()()(),i(1083,"tr",19)(1084,"td",20)(1085,"div",21)(1086,"span",22),e(1087," type"),o(1088,"br"),t()()(),i(1089,"td",23)(1090,"code",27),e(1091,"string"),t()(),i(1092,"td",26)(1093,"em")(1094,"strong"),e(1095,"(opcional)"),t()(),i(1096,"p"),e(1097,"Tipo da coluna:"),t(),i(1098,"ul")(1099,"li"),e(1100,"string (padr\xE3o): textos"),t(),i(1101,"li"),e(1102,"number: valores num\xE9ricos"),t(),i(1103,"li"),e(1104,"date: data"),t(),i(1105,"li"),e(1106,"currency: valores monet\xE1rios"),t(),i(1107,"li"),e(1108,"dateTime: data e hora"),t()()()(),i(1109,"tr",19)(1110,"td",20)(1111,"div",21)(1112,"span",22),e(1113," width"),o(1114,"br"),t()()(),i(1115,"td",23)(1116,"code",27),e(1117,"string"),t()(),i(1118,"td",26)(1119,"em")(1120,"strong"),e(1121,"(opcional)"),t()(),i(1122,"p"),e(1123,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()()(),i(1124,"po-accordion-item",52)(1125,"h4",9)(1126,"code"),e(1127,"ThfLookupFilterSearchSelect"),t()(),i(1128,"div",10)(1129,"p"),e(1130,"Interface que define as colunas para busca ("),i(1131,"strong"),e(1132,"t-filter-search-select"),t(),e(1133,")"),t()(),i(1134,"h4",15),e(1135,"Propriedades"),t(),i(1136,"table",16)(1137,"tr",17)(1138,"th",18),e(1139,"Nome"),t(),i(1140,"th",18),e(1141,"Tipo"),t(),i(1142,"th",18),e(1143,"Descri\xE7\xE3o"),t()(),i(1144,"tr",19)(1145,"td",20)(1146,"div",21)(1147,"span",22),e(1148," label"),o(1149,"br"),t()()(),i(1150,"td",23)(1151,"code",27),e(1152,"string"),t()(),i(1153,"td",26)(1154,"p"),e(1155,"R\xF3tulo da coluna"),t()()(),i(1156,"tr",19)(1157,"td",20)(1158,"div",21)(1159,"span",22),e(1160," value"),o(1161,"br"),t()()(),i(1162,"td",23)(1163,"code",27),e(1164,"string"),t()(),i(1165,"td",26)(1166,"p"),e(1167,"Coluna"),t()()()()(),i(1168,"po-accordion-item",53)(1169,"h4",9)(1170,"code"),e(1171,"ThfLookupFilter"),t()(),i(1172,"div",10)(1173,"p"),e(1174,"Interface para definir o tipo de busca via servi\xE7o."),t()(),i(1175,"table",48)(1176,"tr",19)(1177,"th",49)(1178,"div",21)(1179,"h4")(1180,"span",22),e(1181," fetchItems "),t()()()()(),i(1182,"tr",26)(1183,"td",26)(1184,"p"),e(1185,`M\xE9todo que ser\xE1 disparado ao digitar no campo do componente, deve-se retornar
um `),i(1186,"em"),e(1187,"Observable"),t(),e(1188," com a resposta da API no formato { items: [] }."),t()()()(),i(1189,"h5")(1190,"b"),e(1191,"Par\xE2metros"),t()(),i(1192,"table",16)(1193,"tr",17)(1194,"th",18),e(1195,"Nome"),t(),i(1196,"th",18),e(1197,"Tipo"),t(),i(1198,"th",18),e(1199,"Descri\xE7\xE3o"),t()(),i(1200,"tr",19)(1201,"td",20),e(1202," query"),t(),i(1203,"td",23)(1204,"code",54),e(1205," string "),t()(),i(1206,"td",26)(1207,"p"),e(1208,"Par\xE2metro com o valor que est\xE1 sendo digitado no campo do lookup"),t()()(),i(1209,"tr",19)(1210,"td",20),e(1211," filterParams"),t(),i(1212,"td",23)(1213,"code",54),e(1214," any "),t()(),i(1215,"td",26)(1216,"p"),e(1217,"Valor informado atrav\xE9s da propriedade "),i(1218,"strong"),e(1219,"t-filter-params"),t(),e(1220,"."),t()()()(),o(1221,"br"),i(1222,"table",48)(1223,"tr",19)(1224,"th",49)(1225,"div",21)(1226,"h4")(1227,"span",22),e(1228," getFilteredItems "),t()()()()(),i(1229,"tr",26)(1230,"td",26)(1231,"p"),e(1232,`M\xE9todo que ser\xE1 disparado ao filtrar no grid ou carregar mais resultados no componente, deve-se retornar
um `),i(1233,"em"),e(1234,"Observable"),t(),e(1235," com a resposta da API no formato da interface "),i(1236,"strong"),e(1237,"ThfLookupResponseApi"),t(),e(1238,"."),t()()()(),i(1239,"h5")(1240,"b"),e(1241,"Par\xE2metros"),t()(),i(1242,"table",16)(1243,"tr",17)(1244,"th",18),e(1245,"Nome"),t(),i(1246,"th",18),e(1247,"Tipo"),t(),i(1248,"th",18),e(1249,"Descri\xE7\xE3o"),t()(),i(1250,"tr",19)(1251,"td",20),e(1252," params"),t(),i(1253,"td",23)(1254,"code",54),e(1255," ThfLookupFilteredItemsParams "),t()(),i(1256,"td",26)(1257,"p"),e(1258,"Objeto enviado por par\xE2metro que implementa a interface "),i(1259,"strong"),e(1260,"ThfLookupFilteredItemsParams"),t(),e(1261,"."),t()()()(),o(1262,"br"),i(1263,"table",48)(1264,"tr",19)(1265,"th",49)(1266,"div",21)(1267,"h4")(1268,"span",22),e(1269," getObjectByValue "),t()()()()(),i(1270,"tr",26)(1271,"td",26)(1272,"p"),e(1273,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(1274,"p"),e(1275,"Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o esteja habilitada, o par\xE2metro "),i(1276,"code"),e(1277,"value"),t(),e(1278,` ser\xE1 enviado como uma lista de valores
e o `),i(1279,"em"),e(1280,"Observable"),t(),e(1281," deve retornar uma lista de objetos."),t()()()(),i(1282,"h5")(1283,"b"),e(1284,"Par\xE2metros"),t()(),i(1285,"table",16)(1286,"tr",17)(1287,"th",18),e(1288,"Nome"),t(),i(1289,"th",18),e(1290,"Tipo"),t(),i(1291,"th",18),e(1292,"Descri\xE7\xE3o"),t()(),i(1293,"tr",19)(1294,"td",20),e(1295," value"),t(),i(1296,"td",23)(1297,"code",27),e(1298," string "),t(),i(1299,"code",55),e(1300," Array<any> "),t()(),i(1301,"td",26)(1302,"p"),e(1303,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(1304,"tr",19)(1305,"td",20),e(1306," filterParams"),t(),i(1307,"td",23)(1308,"code",54),e(1309," any "),t()(),i(1310,"td",26)(1311,"p"),e(1312,"Valor informado atrav\xE9s da propriedade "),i(1313,"strong"),e(1314,"t-filter-params"),t(),e(1315,"."),t()()()(),o(1316,"br"),t(),i(1317,"po-accordion-item",56)(1318,"h4",9)(1319,"code"),e(1320,"ThfLookupFilteredItemsParams"),t()(),i(1321,"div",10)(1322,"p"),e(1323,"Interface do objeto enviado como par\xE2metro do m\xE9todo privado "),i(1324,"strong"),e(1325,"getFilteredItems"),t(),e(1326,"."),t()(),i(1327,"h4",15),e(1328,"Propriedades"),t(),i(1329,"table",16)(1330,"tr",17)(1331,"th",18),e(1332,"Nome"),t(),i(1333,"th",18),e(1334,"Tipo"),t(),i(1335,"th",18),e(1336,"Descri\xE7\xE3o"),t()(),i(1337,"tr",19)(1338,"td",20)(1339,"div",21)(1340,"span",22),e(1341," filter"),o(1342,"br"),t()()(),i(1343,"td",23)(1344,"code",57),e(1345,`{ [key: string]: any;
}`),t()(),i(1346,"td",26)(1347,"em")(1348,"strong"),e(1349,"(opcional)"),t()(),i(1350,"p"),e(1351,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(1352,"tr",19)(1353,"td",20)(1354,"div",21)(1355,"span",22),e(1356," filterParams"),o(1357,"br"),t()()(),i(1358,"td",23)(1359,"code",38),e(1360,"any"),t()(),i(1361,"td",26)(1362,"em")(1363,"strong"),e(1364,"(opcional)"),t()(),i(1365,"p"),e(1366,"Valor informado atrav\xE9s da propriedade "),i(1367,"code"),e(1368,"t-filter-params"),t(),e(1369,"."),t()()(),i(1370,"tr",19)(1371,"td",20)(1372,"div",21)(1373,"span",22),e(1374," order"),o(1375,"br"),t()()(),i(1376,"td",23)(1377,"code",27),e(1378,"string"),t()(),i(1379,"td",26)(1380,"em")(1381,"strong"),e(1382,"(opcional)"),t()(),i(1383,"p"),e(1384,"Coluna que est\xE1 sendo ordenada na grid."),t(),i(1385,"ul")(1386,"li"),e(1387,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(1388,"code"),e(1389,"-<colunaOrdenada>"),t(),e(1390,", por exemplo "),i(1391,"code"),e(1392,"-name"),t(),e(1393,"."),t(),i(1394,"li"),e(1395,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(1396,"code"),e(1397,"<colunaOrdenada>"),t(),e(1398,", por exemplo "),i(1399,"code"),e(1400,"name"),t(),e(1401,"."),t()()()(),i(1402,"tr",19)(1403,"td",20)(1404,"div",21)(1405,"span",22),e(1406," page"),o(1407,"br"),t()()(),i(1408,"td",23)(1409,"code",58),e(1410,"number"),t()(),i(1411,"td",26)(1412,"em")(1413,"strong"),e(1414,"(opcional)"),t()(),i(1415,"p"),e(1416,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(1417,"tr",19)(1418,"td",20)(1419,"div",21)(1420,"span",22),e(1421," pageSize"),o(1422,"br"),t()()(),i(1423,"td",23)(1424,"code",58),e(1425,"number"),t()(),i(1426,"td",26)(1427,"em")(1428,"strong"),e(1429,"(opcional)"),t()(),i(1430,"p"),e(1431,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()()(),i(1432,"po-accordion-item",59)(1433,"h4",9)(1434,"code"),e(1435,"ThfLookupKeysLabel"),t()(),i(1436,"div",10)(1437,"p"),e(1438,"Interface para definir as propriedades vis\xEDveis do item selecionado ("),i(1439,"strong"),e(1440,"t-keys-label"),t(),e(1441,")."),t()(),i(1442,"h4",15),e(1443,"Propriedades"),t(),i(1444,"table",16)(1445,"tr",17)(1446,"th",18),e(1447,"Nome"),t(),i(1448,"th",18),e(1449,"Tipo"),t(),i(1450,"th",18),e(1451,"Descri\xE7\xE3o"),t()(),i(1452,"tr",19)(1453,"td",20)(1454,"div",21)(1455,"span",22),e(1456," label"),o(1457,"br"),t()()(),i(1458,"td",23)(1459,"code",27),e(1460,"string"),t()(),i(1461,"td",26)(1462,"p"),e(1463,"Texto exibido"),t()()(),i(1464,"tr",19)(1465,"td",20)(1466,"div",21)(1467,"span",22),e(1468," value"),o(1469,"br"),t()()(),i(1470,"td",23)(1471,"code",27),e(1472,"string"),t()(),i(1473,"td",26)(1474,"p"),e(1475,"Coluna"),t()()()()(),i(1476,"po-accordion-item",60)(1477,"h4",9)(1478,"code"),e(1479,"ThfLookupLiterals"),t()(),i(1480,"div",10)(1481,"p"),e(1482,"Interface para customizar literais ("),i(1483,"strong"),e(1484,"t-literals"),t(),e(1485,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(1486,"h4",15),e(1487,"Propriedades"),t(),i(1488,"table",16)(1489,"tr",17)(1490,"th",18),e(1491,"Nome"),t(),i(1492,"th",18),e(1493,"Tipo"),t(),i(1494,"th",18),e(1495,"Descri\xE7\xE3o"),t()(),i(1496,"tr",19)(1497,"td",20)(1498,"div",21)(1499,"span",22),e(1500," confirmBodyDelete"),o(1501,"br"),t()()(),i(1502,"td",23)(1503,"code",27),e(1504,"string"),t()(),i(1505,"td",26)(1506,"em")(1507,"strong"),e(1508,"(opcional)"),t()(),i(1509,"p"),e(1510,"Texto do corpo do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(1511,"tr",19)(1512,"td",20)(1513,"div",21)(1514,"span",22),e(1515," confirmCancelDelete"),o(1516,"br"),t()()(),i(1517,"td",23)(1518,"code",27),e(1519,"string"),t()(),i(1520,"td",26)(1521,"em")(1522,"strong"),e(1523,"(opcional)"),t()(),i(1524,"p"),e(1525,"Texto do bot\xE3o de cancelar do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(1526,"tr",19)(1527,"td",20)(1528,"div",21)(1529,"span",22),e(1530," confirmRemoveDelete"),o(1531,"br"),t()()(),i(1532,"td",23)(1533,"code",27),e(1534,"string"),t()(),i(1535,"td",26)(1536,"em")(1537,"strong"),e(1538,"(opcional)"),t()(),i(1539,"p"),e(1540,"Texto do bot\xE3o de remover do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(1541,"tr",19)(1542,"td",20)(1543,"div",21)(1544,"span",22),e(1545," confirmTitleDelete"),o(1546,"br"),t()()(),i(1547,"td",23)(1548,"code",27),e(1549,"string"),t()(),i(1550,"td",26)(1551,"em")(1552,"strong"),e(1553,"(opcional)"),t()(),i(1554,"p"),e(1555,"T\xEDtulo do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(1556,"tr",19)(1557,"td",20)(1558,"div",21)(1559,"span",22),e(1560," lastSearch"),o(1561,"br"),t()()(),i(1562,"td",23)(1563,"code",27),e(1564,"string"),t()(),i(1565,"td",26)(1566,"em")(1567,"strong"),e(1568,"(opcional)"),t()(),i(1569,"p"),e(1570,"Texto exibido no listbox quando estiver exibindo as ultimas pesquisas."),t()()(),i(1571,"tr",19)(1572,"td",20)(1573,"div",21)(1574,"span",22),e(1575," listNotFound"),o(1576,"br"),t()()(),i(1577,"td",23)(1578,"code",27),e(1579,"string"),t()(),i(1580,"td",26)(1581,"em")(1582,"strong"),e(1583,"(opcional)"),t()(),i(1584,"p"),e(1585,"Texto exibido no listbox quando nenhum resultado for encontrado."),t()()(),i(1586,"tr",19)(1587,"td",20)(1588,"div",21)(1589,"span",22),e(1590," modalPlaceholder"),o(1591,"br"),t()()(),i(1592,"td",23)(1593,"code",27),e(1594,"string"),t()(),i(1595,"td",26)(1596,"em")(1597,"strong"),e(1598,"(opcional)"),t()(),i(1599,"p"),e(1600,"Texto exibido no placeholder do input da modal."),t()()(),i(1601,"tr",19)(1602,"td",20)(1603,"div",21)(1604,"span",22),e(1605," modalPrimaryActionLabel"),o(1606,"br"),t()()(),i(1607,"td",23)(1608,"code",27),e(1609,"string"),t()(),i(1610,"td",26)(1611,"em")(1612,"strong"),e(1613,"(opcional)"),t()(),i(1614,"p"),e(1615,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),t()()(),i(1616,"tr",19)(1617,"td",20)(1618,"div",21)(1619,"span",22),e(1620," modalSecondaryActionLabel"),o(1621,"br"),t()()(),i(1622,"td",23)(1623,"code",27),e(1624,"string"),t()(),i(1625,"td",26)(1626,"em")(1627,"strong"),e(1628,"(opcional)"),t()(),i(1629,"p"),e(1630,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),t()()(),i(1631,"tr",19)(1632,"td",20)(1633,"div",21)(1634,"span",22),e(1635," modalTableLoadMoreData"),o(1636,"br"),t()()(),i(1637,"td",23)(1638,"code",27),e(1639,"string"),t()(),i(1640,"td",26)(1641,"em")(1642,"strong"),e(1643,"(opcional)"),t()(),i(1644,"p"),e(1645,"Label do "),i(1646,"code"),e(1647,"button"),t(),e(1648," que deve carregar mais resultados no grid, ou seja, exibir mais itens."),t()()(),i(1649,"tr",19)(1650,"td",20)(1651,"div",21)(1652,"span",22),e(1653," modalTableLoadingData"),o(1654,"br"),t()()(),i(1655,"td",23)(1656,"code",27),e(1657,"string"),t()(),i(1658,"td",26)(1659,"em")(1660,"strong"),e(1661,"(opcional)"),t()(),i(1662,"p"),e(1663,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na grid."),t()()(),i(1664,"tr",19)(1665,"td",20)(1666,"div",21)(1667,"span",22),e(1668," modalTableNoColumns"),o(1669,"br"),t()()(),i(1670,"td",23)(1671,"code",27),e(1672,"string"),t()(),i(1673,"td",26)(1674,"em")(1675,"strong"),e(1676,"(opcional)"),t()(),i(1677,"p"),e(1678,"Texto exibido quando n\xE3o existem colunas definidas no grid."),t()()(),i(1679,"tr",19)(1680,"td",20)(1681,"div",21)(1682,"span",22),e(1683," modalTableNoData"),o(1684,"br"),t()()(),i(1685,"td",23)(1686,"code",27),e(1687,"string"),t()(),i(1688,"td",26)(1689,"em")(1690,"strong"),e(1691,"(opcional)"),t()(),i(1692,"p"),e(1693,"Texto exibido quando n\xE3o existem itens para serem exibidos no grid."),t()()(),i(1694,"tr",19)(1695,"td",20)(1696,"div",21)(1697,"span",22),e(1698," modalTitle"),o(1699,"br"),t()()(),i(1700,"td",23)(1701,"code",27),e(1702,"string"),t()(),i(1703,"td",26)(1704,"em")(1705,"strong"),e(1706,"(opcional)"),t()(),i(1707,"p"),e(1708,"Texto exibido no t\xEDtulo da modal."),t()()(),i(1709,"tr",19)(1710,"td",20)(1711,"div",21)(1712,"span",22),e(1713," multipleItems"),o(1714,"br"),t()()(),i(1715,"td",23)(1716,"code",27),e(1717,"string"),t()(),i(1718,"td",26)(1719,"em")(1720,"strong"),e(1721,"(opcional)"),t()(),i(1722,"p"),e(1723,"Frase exibida no accordion quando possui mais de um item selecionado."),t()()(),i(1724,"tr",19)(1725,"td",20)(1726,"div",21)(1727,"span",22),e(1728," oneItem"),o(1729,"br"),t()()(),i(1730,"td",23)(1731,"code",27),e(1732,"string"),t()(),i(1733,"td",26)(1734,"em")(1735,"strong"),e(1736,"(opcional)"),t()(),i(1737,"p"),e(1738,"Frase exibida no accordion quando possui apenas um item selecionado."),t()()(),i(1739,"tr",19)(1740,"td",20)(1741,"div",21)(1742,"span",22),e(1743," or"),o(1744,"br"),t()()(),i(1745,"td",23)(1746,"code",27),e(1747,"string"),t()(),i(1748,"td",26)(1749,"em")(1750,"strong"),e(1751,"(opcional)"),t()(),i(1752,"p"),e(1753,"Palavra 'ou' que \xE9 exibida dentro do listbox."),t()()(),i(1754,"tr",19)(1755,"td",20)(1756,"div",21)(1757,"span",22),e(1758," searchAdvanced"),o(1759,"br"),t()()(),i(1760,"td",23)(1761,"code",27),e(1762,"string"),t()(),i(1763,"td",26)(1764,"em")(1765,"strong"),e(1766,"(opcional)"),t()(),i(1767,"p"),e(1768,"Texto exibido no listbox para fazer busca avan\xE7ada."),t()()(),i(1769,"tr",19)(1770,"td",20)(1771,"div",21)(1772,"span",22),e(1773," searchBy"),o(1774,"br"),t()()(),i(1775,"td",23)(1776,"code",27),e(1777,"string"),t()(),i(1778,"td",26)(1779,"em")(1780,"strong"),e(1781,"(opcional)"),t()(),i(1782,"p"),e(1783,"Texto exibido para indicar os campos filtrados."),t()()()()(),i(1784,"po-accordion-item",61)(1785,"h4",9)(1786,"code"),e(1787,"ThfLookupResponseApi"),t()(),i(1788,"div",10)(1789,"p"),e(1790,"Interface que representa a estrutura de uma resposta de sucesso HTTP."),t(),i(1791,"blockquote")(1792,"p"),e(1793,"Utilizada apenas quando a resposta incluir uma cole\xE7\xE3o de itens. "),t()()(),i(1794,"h4",15),e(1795,"Propriedades"),t(),i(1796,"table",16)(1797,"tr",17)(1798,"th",18),e(1799,"Nome"),t(),i(1800,"th",18),e(1801,"Tipo"),t(),i(1802,"th",18),e(1803,"Descri\xE7\xE3o"),t()(),i(1804,"tr",19)(1805,"td",20)(1806,"div",21)(1807,"span",22),e(1808," hasNext"),o(1809,"br"),t()()(),i(1810,"td",23)(1811,"code",28),e(1812,"boolean"),t()(),i(1813,"td",26)(1814,"p"),e(1815,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(1816,"tr",19)(1817,"td",20)(1818,"div",21)(1819,"span",22),e(1820," items"),o(1821,"br"),t()()(),i(1822,"td",23)(1823,"code",55),e(1824,"Array<any>"),t()(),i(1825,"td",26)(1826,"p"),e(1827,"Lista de itens retornados."),t()()()()()()(),y(1828,4),t(),i(1829,"po-tab",62)(1830,"po-container",5),y(1831,5),i(1832,"h3",63),e(1833,"Tokens customiz\xE1veis"),t(),i(1834,"p"),e(1835,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(1836,"blockquote")(1837,"p"),e(1838,"Para maiores informa\xE7\xF5es, acesse o guia "),i(1839,"a",64),e(1840,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(1841,"."),t()(),i(1842,"table")(1843,"thead")(1844,"tr")(1845,"th"),e(1846,"Propriedade"),t(),i(1847,"th"),e(1848,"Descri\xE7\xE3o"),t(),i(1849,"th"),e(1850,"Valor Padr\xE3o"),t()()(),i(1851,"tbody")(1852,"tr")(1853,"td")(1854,"strong"),e(1855,"Default Values"),t()(),o(1856,"td")(1857,"td"),t(),i(1858,"tr")(1859,"td")(1860,"code"),e(1861,"--font-family"),t()(),i(1862,"td"),e(1863,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(1864,"td")(1865,"code"),e(1866,"var(--font-family-theme)"),t()()(),i(1867,"tr")(1868,"td")(1869,"code"),e(1870,"--font-size"),t()(),i(1871,"td"),e(1872,"Tamanho da fonte"),t(),i(1873,"td")(1874,"code"),e(1875,"var(--font-size)"),t()()(),i(1876,"tr")(1877,"td")(1878,"code"),e(1879,"--text-color-placeholder"),t()(),i(1880,"td"),e(1881,"Cor do texto no placeholder"),t(),i(1882,"td")(1883,"code"),e(1884,"var(--color-neutral-light-30)"),t()()(),i(1885,"tr")(1886,"td")(1887,"code"),e(1888,"--color"),t()(),i(1889,"td"),e(1890,"Cor principal do campo"),t(),i(1891,"td")(1892,"code"),e(1893,"var(--color-neutral-dark-70)"),t()()(),i(1894,"tr")(1895,"td")(1896,"code"),e(1897,"--background"),t()(),i(1898,"td"),e(1899,"Cor de background"),t(),i(1900,"td")(1901,"code"),e(1902,"var(--color-neutral-light-00)"),t()()(),i(1903,"tr")(1904,"td")(1905,"code"),e(1906,"--text-color"),t()(),i(1907,"td"),e(1908,"Cor do texto"),t(),i(1909,"td")(1910,"code"),e(1911,"var(--color-neutral-mid-60)"),t()()(),i(1912,"tr")(1913,"td")(1914,"strong"),e(1915,"Hover"),t()(),o(1916,"td")(1917,"td"),t(),i(1918,"tr")(1919,"td")(1920,"code"),e(1921,"--color-hover"),t()(),i(1922,"td"),e(1923,"Cor principal do campo no estado hover"),t(),i(1924,"td")(1925,"code"),e(1926,"var(--color-brand-01-dark)"),t()()(),i(1927,"tr")(1928,"td")(1929,"code"),e(1930,"--background-hover"),t()(),i(1931,"td"),e(1932,"Cor de background no estado hover"),t(),i(1933,"td")(1934,"code"),e(1935,"var(--color-brand-01-lightest)"),t()()(),i(1936,"tr")(1937,"td")(1938,"strong"),e(1939,"Focused"),t()(),o(1940,"td")(1941,"td"),t(),i(1942,"tr")(1943,"td")(1944,"code"),e(1945,"--color-focused"),t()(),i(1946,"td"),e(1947,"Cor principal do campo no estado de focus"),t(),i(1948,"td")(1949,"code"),e(1950,"var(--color-action-default)"),t()()(),i(1951,"tr")(1952,"td")(1953,"code"),e(1954,"--outline-color-focused"),t()(),i(1955,"td"),e(1956,"Cor do outline no estado de focus"),t(),i(1957,"td")(1958,"code"),e(1959,"var(--color-action-focus)"),t()()(),i(1960,"tr")(1961,"td")(1962,"strong"),e(1963,"Disabled"),t()(),o(1964,"td")(1965,"td"),t(),i(1966,"tr")(1967,"td")(1968,"code"),e(1969,"--color-disabled"),t()(),i(1970,"td"),e(1971,"Cor principal do campo no estado disabled"),t(),i(1972,"td")(1973,"code"),e(1974,"var(--color-neutral-light-30)"),t()()(),i(1975,"tr")(1976,"td")(1977,"code"),e(1978,"--background-disabled"),t()(),i(1979,"td"),e(1980,"Cor de background no estado disabled"),t(),i(1981,"td")(1982,"code"),e(1983,"var(--color-neutral-light-05)"),t()()(),i(1984,"tr")(1985,"td")(1986,"code"),e(1987,"--text-color-disabled"),t()(),i(1988,"td"),e(1989,"Cor do texto no estado disabled"),t(),i(1990,"td")(1991,"code"),e(1992,"var(--color-neutral-dark-70)"),t()()()()()(),y(1993,6),t(),i(1994,"po-tab",65),y(1995,7),t()()())},dependencies:[L,B,b,be,Z,z],encapsulation:2})}}return d})();var Ot=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","labs",""]]],Qt=["[overview]","[especificacao-before]","[especificacao-after]","[labs]"],dt=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(u=>{let q=u.querySelector(".po-tab-button-label");q&&q?.textContent?.trim().toLowerCase()===a&&u.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(u=>!u.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(R(H))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-splitter-pane"]],viewQuery:function(r,n){if(r&1&&(T(z,5),T(L,5)),r&2){let l;w(l=D())&&(n.tabs=l.first),w(l=D())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:Qt,decls:140,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"language-html"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean,","any"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(W(Ot),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),y(4),t(),i(5,"po-tab",4),y(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfSplitterModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfSplitterPaneComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"O componente "),i(19,"code"),e(20,"thf-splitter-pane"),t(),e(21," representa uma das se\xE7\xF5es que comp\xF5em o "),i(22,"code"),e(23,"thf-splitter"),t(),e(24,"."),t(),i(25,"p"),e(26,"Devem ser utilizados "),i(27,"strong"),e(28,"exatamente dois panes"),t(),e(29," por splitter; panes adicionais ser\xE3o ignorados."),t(),i(30,"p"),e(31,"Cada "),i(32,"code"),e(33,"pane"),t(),e(34," se ajusta dinamicamente conforme o redimensionamento."),t(),i(35,"pre")(36,"code",11),e(37,`<thf-splitter>
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
evento n\xE3o ser\xE1 disparado.`),t(),i(134,"pre")(135,"code",11),e(136,'<thf-splitter-pane (t-size-change)="onSizeChange($event)">'),t()()()()()()()(),y(137,2),t(),i(138,"po-tab",32),y(139,3),t()()())},dependencies:[L,B,b,Z,z],encapsulation:2})}}return d})();var Nt=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","enums-before",""]],[["","enums-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],Bt=["[overview]","[especificacao-before]","[especificacao-after]","[enums-before]","[enums-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],mt=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(u=>{let q=u.querySelector(".po-tab-button-label");q&&q?.textContent?.trim().toLowerCase()===a&&u.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(u=>!u.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(R(H))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-splitter"]],viewQuery:function(r,n){if(r&1&&(T(z,5),T(L,5)),r&2){let l;w(l=D())&&(n.tabs=l.first),w(l=D())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:Bt,decls:326,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],["id","boas-pr\xE1ticas"],[1,"language-html"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean,","any"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","ThfSplitterOrientation,","string"],[1,"language-typescript"],["p-label","Enums"],["p-label","ThfSplitterOrientation"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(W(Nt),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),y(4),t(),i(5,"po-tab",4),y(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfSplitterModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfSplitterComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"O componente "),i(19,"code"),e(20,"thf-splitter"),t(),e(21,` \xE9 respons\xE1vel por dividir visualmente a tela em duas se\xE7\xF5es, com suporte a
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
Valores aceitos: `),i(141,"code"),e(142,"'horizontal'"),t(),e(143," ou "),i(144,"code"),e(145,"'vertical'"),t(),e(146,"."),t(),i(147,"pre")(148,"code",12),e(149,'<thf-splitter t-orientation="vertical"> ...'),t()(),i(150,"p"),e(151,"ou"),t(),i(152,"pre")(153,"code",33),e(154,"orientation = ThfSplitterOrientation.Vertical;"),t()(),i(155,"pre")(156,"code",12),e(157,'<thf-splitter [t-orientation]="orientation"> ...'),t()()()()()()()(),y(158,2),t(),i(159,"po-tab",34),y(160,3),i(161,"po-container",5)(162,"po-accordion",6)(163,"po-accordion-item",35)(164,"h4",9)(165,"code"),e(166,"ThfSplitterOrientation"),t()(),i(167,"h4",17),e(168,"Propriedades"),t(),i(169,"table",18)(170,"tr",19)(171,"th",20),e(172,"Nome"),t(),i(173,"th",20),e(174,"Descri\xE7\xE3o"),t()(),i(175,"tr",21)(176,"td",22)(177,"div",23)(178,"span",24),e(179," Horizontal"),o(180,"br"),t()()(),i(181,"td",28)(182,"p"),e(183,"Divide o espa\xE7o na "),i(184,"strong"),e(185,"horizontal"),t(),e(186," (esquerda/direita)"),t()()(),i(187,"tr",21)(188,"td",22)(189,"div",23)(190,"span",24),e(191," Vertical"),o(192,"br"),t()()(),i(193,"td",28)(194,"p"),e(195,"Divide o espa\xE7o na "),i(196,"strong"),e(197,"vertical"),t(),e(198," (cima/baixo)"),t()()()()()()(),y(199,4),t(),i(200,"po-tab",36)(201,"po-container",5),y(202,5),i(203,"h3",37),e(204,"Tokens customiz\xE1veis"),t(),i(205,"p"),e(206,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(207,"blockquote")(208,"p"),e(209,"Para maiores informa\xE7\xF5es, acesse o guia "),i(210,"a",38),e(211,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(212,"."),t()(),i(213,"table")(214,"thead")(215,"tr")(216,"th"),e(217,"Propriedade"),t(),i(218,"th"),e(219,"Descri\xE7\xE3o"),t(),i(220,"th"),e(221,"Valor Padr\xE3o"),t()()(),i(222,"tbody")(223,"tr")(224,"td")(225,"strong"),e(226,"Splitter Track"),t()(),o(227,"td")(228,"td"),t(),i(229,"tr")(230,"td")(231,"code"),e(232,"--background-track"),t()(),i(233,"td"),e(234,"Cor de background do Track apresentado no Splitter"),t(),i(235,"td")(236,"code"),e(237,"var(--color-neutral-light-10)"),t()()(),i(238,"tr"),o(239,"td")(240,"td")(241,"td"),t(),i(242,"tr")(243,"td")(244,"strong"),e(245,"Splitter Trigger"),t()(),o(246,"td")(247,"td"),t(),i(248,"tr")(249,"td")(250,"code"),e(251,"--box-shadow"),t()(),i(252,"td"),e(253,"Sombra aplicado no bot\xE3o do trigger"),t(),i(254,"td")(255,"code"),e(256,"var(--shadow-sm)"),t()()(),i(257,"tr")(258,"td")(259,"code"),e(260,"--background-color"),t()(),i(261,"td"),e(262,"Cor de background"),t(),i(263,"td")(264,"code"),e(265,"var(--color-neutral-light-00)"),t()()(),i(266,"tr")(267,"td")(268,"code"),e(269,"--color"),t()(),i(270,"td"),e(271,"Cor do \xEDcone"),t(),i(272,"td")(273,"code"),e(274,"var(--color-action-default)"),t()()(),i(275,"tr")(276,"td")(277,"strong"),e(278,"Hover"),t()(),o(279,"td")(280,"td"),t(),i(281,"tr")(282,"td")(283,"code"),e(284,"--background-color-hover"),t()(),i(285,"td"),e(286,"Cor de background no estado hover"),t(),i(287,"td")(288,"code"),e(289,"var(--color-brand-01-lighter)"),t()()(),i(290,"tr")(291,"td")(292,"code"),e(293,"--color-hover"),t()(),i(294,"td"),e(295,"Cor do \xEDcone no estado hover"),t(),i(296,"td")(297,"code"),e(298,"var(--color-brand-01-darkest)"),t()()(),i(299,"tr")(300,"td")(301,"strong"),e(302,"Pressed"),t()(),o(303,"td")(304,"td"),t(),i(305,"tr")(306,"td")(307,"code"),e(308,"--background-color-pressed"),t()(),i(309,"td"),e(310,"Cor de background quando pressionada"),t(),i(311,"td")(312,"code"),e(313,"var(--color-brand-01-ligh)"),t()()(),i(314,"tr")(315,"td")(316,"code"),e(317,"--color-pressed"),t()(),i(318,"td"),e(319,"Cor de \xEDcone quando pressionado"),t(),i(320,"td")(321,"code"),e(322,"var(--color-brand-01-darkest)"),t()()()()()(),y(323,6),t(),i(324,"po-tab",39),y(325,7),t()()())},dependencies:[L,B,b,Z,z],encapsulation:2})}}return d})();var st=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275mod=oe({type:d})}static{this.\u0275inj=ne({imports:[Ee,ge]})}}return d})();var Pe=[{id:11234,initials:"BR",country:"Brazil",value:1e3,date:"2018-10-09",returnDate:"2018-11-01",class:"Economic",onBoardService:!1,destination:"Rio de Janeiro",airline:"Azul",status:"available",region:"Latin America"},{id:22467,initials:"FR",country:"France",value:5e3,date:"2019-12-13",returnDate:"2019-12-31",class:"Economic",onBoardService:!1,destination:"Paris",airline:"British Airways",status:"closed",region:"Alps"},{id:40670,initials:"SN",country:"Senegal",value:3200,date:"2017-11-22",returnDate:"2018-12-01",class:"Economic",onBoardService:!1,destination:"Dakar",airline:"Iberia",status:"closed",region:"Western Africa"},{id:34679,initials:"PT",country:"Portugal",value:5500,date:"2017-10-10",returnDate:"2018-10-20",class:"Economic",onBoardService:!1,destination:"Lisbon",airline:"Air Europa",status:"closed",region:"Mediterranean"},{id:48999,initials:"RU",country:"Russia",value:6700,date:"2019-01-17",returnDate:"2019-02-20",class:"First Class",onBoardService:!0,destination:"Moscow",airline:"Lufthansa",status:"reserved",region:"Caucasus"},{id:48998,initials:"US",country:"United States",value:2700.49,date:"2018-10-17",returnDate:"2018-10-29",class:"Economic",onBoardService:!1,destination:"Los Angeles",airline:"American Airlines",status:"reserved",region:"North America"},{id:54563,initials:"CL",country:"Chile",value:2e3,date:"2018-10-20",returnDate:"2018-11-01",destination:"Cusco",class:"Economic",onBoardService:!1,airline:"LATAM",status:"available",region:"Latin America"},{id:64568,initials:"MX",country:"Mexico",value:2100,date:"2018-03-10",returnDate:"2018-05-09",destination:"Mexico City",class:"Economic",onBoardService:!1,airline:"Aero M\xE9xico",status:"available",region:"Latin America"},{id:75456,initials:"IE",country:"Ireland",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Cork",class:"First Class",onBoardService:!0,airline:"Lufthansa",status:"reserved",region:"British Isle"},{id:23445,initials:"ZA",country:"South Africa",value:1900,date:"2018-12-10",returnDate:"2018-12-25",destination:"Cape Town",class:"Economic",onBoardService:!1,airline:"South African Airways",status:"available",region:"Southern Africa"},{id:19238,initials:"AU",country:"Australia",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Sydney",class:"First Class",onBoardService:!0,airline:"Jetstar Airways",status:"reserved",region:"Australasia"},{id:85456,initials:"JP",country:"Japan",value:5900,date:"2018-10-25",returnDate:"2018-11-10",destination:"Tokio",class:"Executive",onBoardService:!0,airline:"Japan Airlines",status:"available",region:"East Asia"},{id:94565,initials:"CN",country:"China",value:2900,date:"2018-10-10",returnDate:"2018-10-25",destination:"Beijing",class:"Economic",onBoardService:!1,airline:"Malaysia Airlines",status:"available",region:"East Asia"},{id:32330,initials:"UK",country:"England",value:2090.5,date:"2018-10-07",returnDate:"2018-11-15",destination:"London",class:"Executive",onBoardService:!0,airline:"British Airways",status:"available",region:"British Isle"},{id:14560,initials:"CA",country:"Canada",value:2090.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Quebec",class:"Economic",onBoardService:!1,airline:"American Airlines",status:"available",region:"North America"},{id:93800,initials:"IS",country:"Iceland",value:6300,date:"2018-10-12",returnDate:"2018-10-27",destination:"Reykjav\xEDk",class:"Economic",onBoardService:!1,airline:"Star Alliance",status:"available",region:"Nordics"},{id:34239,initials:"DE",country:"Germany",value:3070.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Berlin",class:"Executive",onBoardService:!0,airline:"LATAM",status:"available",region:"Danube"},{id:45611,initials:"AR",country:"Argentina",value:3500.5,date:"2018-12-07",returnDate:"2018-12-29",destination:"Ushuaia",class:"Economic",onBoardService:!1,airline:"LATAM",status:"reserved",region:"Latin America"}],pt=`export const DATA = ${JSON.stringify(Pe,null,2)};`;function Wt(d,I){}function Ut(d,I){d&1&&_(0,Wt,0,0,"ng-template")}function Kt(d,I){if(d&1&&(i(0,"po-accordion-item",7),_(1,Ut,1,0,null,8),t()),d&2){let a=E();m(),s("ngTemplateOutlet",a.dynamicTemplate)}}function Jt(d,I){if(d&1&&o(0,"po-code-editor",9),d&2){let a=E();s("p-readonly",!0)("ngModel",a.htmlCode)("p-theme",a.themeActive===1?"vs-dark":"vs")}}function $t(d,I){if(d&1&&o(0,"po-code-editor",10),d&2){let a=E();s("p-readonly",!0)("p-theme",a.themeActive===1?"vs-dark":"vs")("ngModel",a.tsCode)}}function Zt(d,I){if(d&1&&o(0,"po-code-editor",10),d&2){let a=E();s("p-readonly",!0)("p-theme",a.themeActive===1?"vs-dark":"vs")("ngModel",a.serviceCode)}}function Xt(d,I){if(d&1&&o(0,"po-code-editor",10),d&2){let a=E();s("p-readonly",!0)("p-theme",a.themeActive===1?"vs-dark":"vs")("ngModel",a.othersCode==null?null:a.othersCode.body)}}var P=(()=>{class d{constructor(a){this.sharedService=a,this.htmlCode="",this.marginTopClass="po-mt-3",this.properties=!1,this.serviceCode="",this.showOthersCodeButton=!1,this.showServiceButton=!1,this.tsCode="",this.buttons=[],this.selectedCode="html"}ngOnInit(){this.buttons=[{label:"HTML",selected:!0,action:()=>this.selectedCode="html"},{label:"TS",action:()=>this.selectedCode="ts"}],this.showServiceButton&&this.buttons.push({label:"Service",action:()=>this.selectedCode="service"}),this.showOthersCodeButton&&this.buttons.push({label:this.othersCode.label,action:()=>this.selectedCode="othersCode"}),this.sharedService.getThemeActive().subscribe(a=>{this.themeActive=a.type||0})}static{this.\u0275fac=function(r){return new(r||d)(R(nt))}}static{this.\u0275cmp=x({type:d,selectors:[["app-code-accordion-doc"]],inputs:{dynamicTemplate:"dynamicTemplate",htmlCode:"htmlCode",marginTopClass:"marginTopClass",othersCode:"othersCode",properties:"properties",serviceCode:"serviceCode",showOthersCodeButton:"showOthersCodeButton",showServiceButton:"showServiceButton",tsCode:"tsCode"},standalone:!1,decls:10,vars:8,consts:[[3,"ngClass"],["p-label","Propriedades",4,"ngIf"],["p-label","Fontes"],[1,"po-pt-1"],["p-toggle","single","ngDefaultControl","",3,"ngModelChange","p-buttons","ngModel"],["class","po-pt-2","p-height","350","p-language","html","ngDefaultControl","",3,"p-readonly","ngModel","p-theme",4,"ngIf"],["class","po-pt-2","p-height","350","p-language","typescript","ngDefaultControl","",3,"p-readonly","p-theme","ngModel",4,"ngIf"],["p-label","Propriedades"],[4,"ngTemplateOutlet"],["p-height","350","p-language","html","ngDefaultControl","",1,"po-pt-2",3,"p-readonly","ngModel","p-theme"],["p-height","350","p-language","typescript","ngDefaultControl","",1,"po-pt-2",3,"p-readonly","p-theme","ngModel"]],template:function(r,n){r&1&&(i(0,"div",0)(1,"po-accordion"),_(2,Kt,2,1,"po-accordion-item",1),i(3,"po-accordion-item",2)(4,"div",3)(5,"po-button-group",4),v("ngModelChange",function(u){return h(n.selectedCode,u)||(n.selectedCode=u),u}),t(),_(6,Jt,1,3,"po-code-editor",5)(7,$t,1,3,"po-code-editor",6)(8,Zt,1,3,"po-code-editor",6)(9,Xt,1,3,"po-code-editor",6),t()()()()),r&2&&(s("ngClass",n.marginTopClass),m(2),s("ngIf",n.properties),m(3),s("p-buttons",n.buttons),f("ngModel",n.selectedCode),m(),s("ngIf",n.selectedCode==="html"),m(),s("ngIf",n.selectedCode==="ts"),m(),s("ngIf",n.selectedCode==="service"),m(),s("ngIf",n.selectedCode==="othersCode"))},dependencies:[Re,re,je,ze,N,K,L,B,Je,He],encapsulation:2})}}return d})();var ct=(()=>{class d{constructor(){this.htmlCode=`<thf-grid
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
  `,this.tsOthersCode={label:"Data",body:pt},this.columnsTotalizador=[{property:"status",label:"Status",type:"label",labels:[{value:"available",color:"color-11",label:"Available"},{value:"reserved",color:"color-08",label:"Reserved"},{value:"closed",color:"color-07",label:"Closed"}]},{property:"region",label:"Region"},{property:"country",label:"Country"},{property:"destination",label:"Destination"},{property:"value",type:"currency",label:"Value",format:"BRL"}],this.aggregatesDescriptor=[{field:"value",aggregate:"sum",label:"Total"},{field:"country",aggregate:"count",label:"Contagem"}],this.itemsTotalizador=Pe}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-aggregates-doc"]],standalone:!1,decls:6,vars:15,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-actions-filter","t-columns","t-resizable","t-groupable","t-draggable","t-items","t-selectable","t-show-densification-configuration","t-aggregates","t-show-footer-aggregates","t-height"],[3,"htmlCode","tsCode","othersCode","showOthersCodeButton"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Totalizador por Colunas"),t(),o(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-actions-filter",!0)("t-columns",n.columnsTotalizador)("t-resizable",!0)("t-groupable",!0)("t-draggable",!0)("t-items",n.itemsTotalizador)("t-selectable",!0)("t-show-densification-configuration",!0)("t-aggregates",n.aggregatesDescriptor)("t-show-footer-aggregates",!0)("t-height",450),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)("othersCode",n.tsOthersCode)("showOthersCodeButton",!0))},dependencies:[b,C,F,P],encapsulation:2})}}return d})();var ut=(()=>{class d{constructor(){this.htmlCode=`<thf-grid
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
  `,this.column=[{property:"id",label:"Id",visible:!1},{property:"label",label:"Label",visible:!1},{property:"value",label:"Code"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail",width:100}]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-basic-doc"]],standalone:!1,decls:6,vars:4,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/heroes",3,"t-columns","t-height"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Service"),t(),o(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-columns",n.column)("t-height",400),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[b,C,F,P],encapsulation:2})}}return d})();var ye=(()=>{class d{constructor(a){this.httpClient=a}deleteItem(a,r,n){return this.httpClient.delete("https://po-sample-api.onrender.com/v1/people"+"/"+n)}static{this.\u0275fac=function(r){return new(r||d)(De(Ve))}}static{this.\u0275prov=we({token:d,factory:d.\u0275fac,providedIn:"root"})}}return d})();var Et=(()=>{class d{constructor(a){this.serviceDeleteApi=a,this.htmlCode=`<thf-grid
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
  `,this.column=[{property:"id",label:"Id",visible:!1},{property:"label",label:"Label",visible:!1},{property:"name",label:"Nome"},{property:"cityName",label:"Cidade"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail",width:100}]}selectedItem(a){this.literals={bodyDelete:"Tem certeza que deseja excluir "+a.name+"?"}}static{this.\u0275fac=function(r){return new(r||d)(R(ye))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-delete-service-doc"]],standalone:!1,features:[_e([ye])],decls:6,vars:10,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/people",3,"t-selected","t-action-delete","t-columns","t-height","t-literals","t-selectable","t-service-delete-api"],[3,"htmlCode","tsCode","serviceCode","showServiceButton"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Grid Dele\xE7\xE3o com Servi\xE7o Customizado"),t(),o(3,"po-divider",1),i(4,"thf-grid",2),g("t-selected",function(u){return n.selectedItem(u)}),t(),o(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-action-delete",!0)("t-columns",n.column)("t-height",400)("t-literals",n.literals)("t-selectable",!0)("t-service-delete-api",n.serviceDeleteApi),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)("serviceCode",n.serviceCode)("showServiceButton",!0))},dependencies:[b,C,F,P],encapsulation:2})}}return d})();var ni=()=>[];function oi(d,I){if(d&1){let a=M();i(0,"div",7)(1,"po-container",8)(2,"po-checkbox-group",9),v("ngModelChange",function(n){p(a);let l=E();return h(l.columnsName,n)||(l.columnsName=n),c(n)}),g("p-change",function(){p(a);let n=E();return c(n.updateColumns())}),t()(),i(3,"po-container",8)(4,"po-checkbox-group",10),v("ngModelChange",function(n){p(a);let l=E();return h(l.selection,n)||(l.selection=n),c(n)}),g("p-change",function(){p(a);let n=E();return c(n.changeSelectionOptions())}),t()(),i(5,"po-container",8)(6,"po-checkbox-group",11),v("ngModelChange",function(n){p(a);let l=E();return h(l.otherProperties,n)||(l.otherProperties=n),c(n)}),g("p-change",function(){p(a);let n=E();return c(n.changeOtherProperties())}),t()(),i(7,"po-container",8)(8,"po-radio-group",12),v("ngModelChange",function(n){p(a);let l=E();return h(l.spacing,n)||(l.spacing=n),c(n)}),t()(),i(9,"po-container",8)(10,"po-radio-group",13),v("ngModelChange",function(n){p(a);let l=E();return h(l.componentsSize,n)||(l.componentsSize=n),c(n)}),t(),i(11,"po-radio-group",14),v("ngModelChange",function(n){p(a);let l=E();return h(l.filterinputModeValue,n)||(l.filterinputModeValue=n),c(n)}),t()(),i(12,"po-container",15)(13,"po-number",16),v("ngModelChange",function(n){p(a);let l=E();return h(l.minResizableValue,n)||(l.minResizableValue=n),c(n)}),t(),i(14,"po-number",17),v("ngModelChange",function(n){p(a);let l=E();return h(l.maxResizableValue,n)||(l.maxResizableValue=n),c(n)}),t()(),i(15,"po-container",15)(16,"po-number",18),v("ngModelChange",function(n){p(a);let l=E();return h(l.height,n)||(l.height=n),c(n)}),t(),i(17,"po-number",19),v("ngModelChange",function(n){p(a);let l=E();return h(l.maxHeight,n)||(l.maxHeight=n),c(n)}),t(),i(18,"po-number",20),v("ngModelChange",function(n){p(a);let l=E();return h(l.minHeight,n)||(l.minHeight=n),c(n)}),t()(),i(19,"po-container",15)(20,"po-textarea",21),v("ngModelChange",function(n){p(a);let l=E();return h(l.literals,n)||(l.literals=n),c(n)}),g("p-change-model",function(){p(a);let n=E();return c(n.changeLiterals())}),t()(),i(21,"po-container",15)(22,"po-textarea",22),v("ngModelChange",function(n){p(a);let l=E();return h(l.sort,n)||(l.sort=n),c(n)}),g("p-change-model",function(){p(a);let n=E();return c(n.changeSort())}),t()(),i(23,"po-container",23)(24,"div",24)(25,"po-checkbox-group",25),v("ngModelChange",function(n){p(a);let l=E();return h(l.pagination,n)||(l.pagination=n),c(n)}),g("p-change",function(){p(a);let n=E();return c(n.changePagination())}),t(),i(26,"po-textarea",26),v("ngModelChange",function(n){p(a);let l=E();return h(l.optionsPage,n)||(l.optionsPage=n),c(n)}),g("p-change-model",function(){p(a);let n=E();return c(n.changeOptionsPage())}),t()()()(),i(27,"div",27)(28,"po-button",28),g("p-click",function(){p(a);let n=E();return c(n.restore())}),t()()}if(d&2){let a=E();m(2),f("ngModel",a.columnsName),s("p-options",a.columnsOptions),m(2),s("p-options",a.selectionOptions),f("ngModel",a.selection),m(2),s("p-columns",4)("p-options",a.otherPropertiesOptions),f("ngModel",a.otherProperties),m(2),s("p-columns",4)("p-options",a.spacingOptions),f("ngModel",a.spacing),m(2),f("ngModel",a.componentsSize),s("p-options",a.componentsSizeOptions),m(),f("ngModel",a.filterinputModeValue),s("p-options",a.filterModeOptions),m(2),f("ngModel",a.minResizableValue),s("disabled",!a.resizable),m(),f("ngModel",a.maxResizableValue),s("disabled",!a.resizable),m(2),f("ngModel",a.height),m(),f("ngModel",a.maxHeight),m(),f("ngModel",a.minHeight),m(2),f("ngModel",a.literals),m(2),f("ngModel",a.sort),m(3),s("p-options",a.paginationOptions),f("ngModel",a.pagination),m(),f("ngModel",a.optionsPage),s("disabled",!a.pagination.includes("pageable"))}}var xt=(()=>{class d{constructor(a){this.poNotification=a,this.htmlCode=`<po-container>
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
  `,this.actions=void 0,this.columnsName=["id","name","birthdate","email"],this.componentsSize="medium",this.customOptionsPage=[{value:10,label:"10"},{value:20,label:"20"},{value:50,label:"50"},{value:100,label:"100"},{value:1e3,label:"1000"}],this.customSort=[{field:"",dir:"asc"}],this.event="",this.filterinputModeValue="basic",this.height=400,this.minHeight=void 0,this.maxHeight=void 0,this.literals="",this.literalsCustom={},this.maxResizableValue=300,this.minResizableValue=10,this.optionsPage='[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]',this.pagination=[],this.properties=[],this.resizable=!1,this.selection=["selectableEntireLine"],this.sort='[{"field": "", "dir": "asc"}]',this.spacing=ee.Medium,this.otherProperties=["actionsFilter","draggable","groupable","sortable","striped","virtualScroll"],this.customAction=[{label:"",action:r=>{this.poNotification.information(`${r.id} - ${r.name}`)},icon:"ICON_MENU_OPEN",fixed:!0}],this.componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.selectionOptions=[{label:"Selectable",value:"selectable"},{label:"Single",value:"singleSelect",disabled:!0},{label:"Entire Line",value:"selectableEntireLine",disabled:!0},{label:"Hide Select All",value:"hideSelectAll",disabled:!0},{label:"Action Delete",value:"actionDelete",disabled:!0},{label:"Action Edit",value:"actionEdit",disabled:!0},{label:"Action Excel",value:"actionExcel",disabled:!0},{label:"Action PDF",value:"actionPdf",disabled:!0},{label:"Hide Batch Actions",value:"hideBatchActions",disabled:!0}],this.spacingOptions=[{label:"extraSmall",value:ee.ExtraSmall},{label:"Small",value:ee.Small},{label:"Medium",value:ee.Medium},{label:"Large",value:ee.Large}],this.filterModeOptions=[{label:"Basic",value:"basic"},{label:"Service",value:"service"}],this.otherPropertiesOptions=[{label:"Actions",value:"actions"},{label:"Actions Filter",value:"actionsFilter"},{label:"Action Right",value:"actionRight"},{label:"Draggable",value:"draggable"},{label:"Groupable",value:"groupable"},{label:"Hide Columns Manager",value:"hideColumnsManager"},{label:"Hide Actions Fixed Columns",value:"hideActionFixedColumns"},{label:"Hide Table Search",value:"hideTableSearch"},{label:"Loading",value:"loading"},{label:"Resizable",value:"resizable"},{label:"Show Densification Configuration",value:"showDensificationConfiguration"},{label:"Show Draggable Icon",value:"showDraggableIcon"},{label:"Sortable",value:"sortable"},{label:"Striped",value:"striped"},{label:"Text Wrap",value:"textWrap",disabled:!1},{label:"Virtual Scroll",value:"virtualScroll"}],this.paginationOptions=[{label:"Pageable",value:"pageable"},{label:"Show More Disabled",value:"showMoreDisabled",disabled:!1},{label:"Show More Visible",value:"showMoreVisible",disabled:!1}],this.items=[{id:1,name:"Jo\xE3o Silva",birthdate:"1990-05-15",lastLogin:"2024-02-14T15:30:00Z",active:!0,email:"joao.silva@example.com"},{id:2,name:"Maria Souza",birthdate:"1985-10-23",lastLogin:"2024-02-13T08:45:00Z",active:!1,email:"maria.souza@example.com"},{id:3,name:"Carlos Almeida",birthdate:"1998-07-09",lastLogin:"2024-02-14T20:15:00Z",active:!0,email:"carlos.almeida@example.com"},{id:4,name:"Fernanda Costa",birthdate:"1992-03-12",lastLogin:"2024-02-12T18:00:00Z",active:!1,email:"fernanda.costa@example.com"},{id:5,name:"Ricardo Lima",birthdate:"1980-11-30",lastLogin:"2024-02-11T07:25:00Z",active:!0,email:"ricardo.lima@example.com"},{id:6,name:"Ana Pereira",birthdate:"1995-09-18",lastLogin:"2024-02-10T14:10:00Z",active:!0,email:"ana.pereira@example.com"},{id:7,name:"Pedro Henrique",birthdate:"1993-06-25",lastLogin:"2024-02-09T12:30:00Z",active:!1,email:"pedro.henrique@example.com"},{id:8,name:"Beatriz Ramos",birthdate:"1999-04-03",lastLogin:"2024-02-08T09:15:00Z",active:!0,email:"beatriz.ramos@example.com"},{id:9,name:"Lucas Oliveira",birthdate:"1987-07-22",lastLogin:"2024-02-07T16:45:00Z",active:!1,email:"lucas.oliveira@example.com"},{id:10,name:"Juliana Martins",birthdate:"1996-01-05",lastLogin:"2024-02-06T11:00:00Z",active:!0,email:"juliana.martins@example.com"},{id:11,name:"Eduardo Nunes",birthdate:"1982-08-17",lastLogin:"2024-02-05T17:20:00Z",active:!1,email:"eduardo.nunes@example.com"},{id:12,name:"Camila Ferreira",birthdate:"2000-12-29",lastLogin:"2024-02-04T13:40:00Z",active:!0,email:"camila.ferreira@example.com"}],this.columns=[{property:"id",label:"Number"},{property:"name",label:"Text"},{property:"birthdate",label:"Date",type:"date"},{property:"email",label:"Link",type:"link",action:this.openEmail.bind(this)}],this.columnsOptions=[{value:"id",label:"Number"},{value:"name",label:"Text"},{value:"birthdate",label:"Date"},{value:"lastLogin",label:"DateTime"},{value:"active",label:"Boolean"},{value:"email",label:"Link"}],this.columnsDefinition={id:{property:"id",label:"Number"},name:{property:"name",label:"Text"},birthdate:{property:"birthdate",label:"Date",type:"date"},lastLogin:{property:"lastLogin",label:"DateTime",type:"dateTime"},active:{property:"active",label:"Boolean"},email:{property:"email",label:"Link",type:"link",action:this.openEmail.bind(this)}}}ngAfterViewInit(){this.restore()}changeEvent(a){this.event=a}changeLiterals(){try{this.literalsCustom=JSON.parse(this.literals)}catch{this.literalsCustom={}}}changeOptionsPage(){try{this.customOptionsPage=JSON.parse(this.optionsPage)}catch{this.customOptionsPage=[{value:10,label:"10"},{value:20,label:"20"},{value:50,label:"50"},{value:100,label:"100"},{value:1e3,label:"1000"}]}}changeOtherProperties(){this.actions=this.otherProperties.includes("actions")?this.customAction:[];let a=this.otherProperties.includes("virtualScroll"),r=this.otherProperties.includes("resizable");this.otherPropertiesOptions=this.otherPropertiesOptions.map(n=>n.value==="textWrap"?ie(te({},n),{disabled:a}):n),a&&this.otherProperties.includes("textWrap")&&(this.otherProperties=this.otherProperties.filter(n=>n!=="textWrap")),this.resizable=r}changePagination(){let a=this.pagination.includes("pageable");this.paginationOptions[1].disabled=!a,this.paginationOptions[2].disabled=!a,this.paginationOptions=[...this.paginationOptions]}changeSelectionOptions(){let a=this.selection.includes("selectable");this.selectionOptions[1].disabled=!a,this.selectionOptions[2].disabled=!a,this.selectionOptions[3].disabled=!a,this.selectionOptions[4].disabled=!a,this.selectionOptions[5].disabled=!a,this.selectionOptions[6].disabled=!a,this.selectionOptions[7].disabled=!a,this.selectionOptions[8].disabled=!a,this.selectionOptions=[...this.selectionOptions]}changeSort(){try{this.customSort=JSON.parse(this.sort)}catch{this.customSort=[{field:"",dir:"asc"}]}}openEmail(a){window.open(`mailto:${a}`,"_blank")}restore(){this.actions=void 0,this.columnsName=["id","name","birthdate","email"],this.componentsSize="medium",this.event="",this.filterinputModeValue="basic",this.literals="",this.literalsCustom={},this.maxResizableValue=300,this.minResizableValue=10,this.height=400,this.minHeight=void 0,this.maxHeight=void 0,this.optionsPage='[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]',this.pagination=["showMoreVisible"],this.properties=[],this.resizable=!1,this.selection=["selectableEntireLine"],this.sort='[{"field": "", "dir": "asc"}]',this.spacing=ee.Medium,this.otherProperties=["actionsFilter","draggable","groupable","sortable","striped","virtualScroll"],this.updateColumns(),this.changeLiterals(),this.changeSort(),this.changePagination(),this.changeSelectionOptions(),this.changeOtherProperties()}updateColumns(){this.columns=[],this.columnsName.forEach(a=>this.columns.push(this.columnsDefinition[a]))}static{this.\u0275fac=function(r){return new(r||d)(R(Xe))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-labs-doc"]],standalone:!1,decls:10,vars:47,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-param-delete-api","value",3,"t-change-fixed-columns","t-change-order-column","t-change-page-size","t-change-sort-column","t-change-visible-columns","t-change-options-column-manager","t-changed-density","t-delete-item","t-delete-items","t-delete-item-error","t-filter-item-error","t-restore-column-manager","t-selected","t-all-selected","t-unselected","t-all-unselected","t-change-group","t-rows-selected","t-action-delete","t-action-edit","t-action-excel","t-action-pdf","t-actions","t-actions-filter","t-actions-right","t-components-size","t-columns","t-draggable","t-filter-input-mode","t-groupable","t-height","t-max-height","t-min-height","t-hide-columns-manager","t-hide-action-fixed-columns","t-hide-batch-actions","t-hide-select-all","t-hide-table-search","t-literals","t-loading","t-max-resizable-width","t-min-resizable-width","t-options-paging","t-pageable","t-resizable","t-selectable","t-selectable-entire-line","t-show-densification-configuration","t-show-draggable-icon","t-show-more-disabled","t-show-more-visible","t-single-select","t-sort","t-sortable","t-spacing","t-striped","t-text-wrap","t-virtual-scroll","t-items"],[1,"po-mt-2",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","columnsName","p-columns","4","p-label","Columns",3,"ngModelChange","p-change","ngModel","p-options"],["name","selection","p-label","Selection","p-columns","4",3,"ngModelChange","p-change","p-options","ngModel"],["name","otherProperties","p-label","Other Properties",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","spacing","p-help","Para aplicar o tamanho Extra Small, defina o n\xEDvel de acessibilidade como AA no navbar.","p-label","Spacing",3,"ngModelChange","p-columns","p-options","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, defina o n\xEDvel de acessibilidade como AA no navbar.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterinputModeValue","p-label","Filter Input Mode",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],[1,"po-mb-2","po-lg-6",2,"display","flex"],["p-label","Min Resizable Width",1,"po-md-6",3,"ngModelChange","ngModel","disabled"],["p-label","Max Resizable Width",1,"po-md-6",3,"ngModelChange","ngModel","disabled"],["p-label","Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["p-label","Max Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["p-label","Min Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","literals","p-label","Literals","p-help",'{"noData": "Sem dados a serem exibidos"}',3,"ngModelChange","p-change-model","ngModel"],["name","sort","p-label","Sort","p-help",'[{ "field":"name", "dir":"asc" }]',3,"ngModelChange","p-change-model","ngModel"],[1,"po-mb-2","po-lg-12",2,"display","flex"],[2,"display","flex","flex-wrap","wrap"],["name","pagination","p-label","Pagination",1,"po-lg-6",3,"ngModelChange","p-change","p-options","ngModel"],["name","optionsPage","p-label","Options Page","p-help",'[{ "value":"25", "label":"25" }, { "value":"50", "label":"50" }]',1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel","disabled"],[1,"po-row"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let l=M();i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),o(3,"po-divider",2),i(4,"thf-grid",3),g("t-change-fixed-columns",function(){return p(l),c(n.changeEvent("t-change-fixed-columns"))})("t-change-order-column",function(){return p(l),c(n.changeEvent("t-change-order-column"))})("t-change-page-size",function(){return p(l),c(n.changeEvent("t-change-page-size"))})("t-change-sort-column",function(){return p(l),c(n.changeEvent("t-change-sort-column"))})("t-change-visible-columns",function(){return p(l),c(n.changeEvent("t-change-visible-columns"))})("t-change-options-column-manager",function(){return p(l),c(n.changeEvent("t-change-options-column-manager"))})("t-changed-density",function(){return p(l),c(n.changeEvent("t-changed-density"))})("t-delete-item",function(){return p(l),c(n.changeEvent("t-delete-item"))})("t-delete-items",function(){return p(l),c(n.changeEvent("t-delete-items"))})("t-delete-item-error",function(){return p(l),c(n.changeEvent("t-delete-item-error"))})("t-filter-item-error",function(){return p(l),c(n.changeEvent("t-filter-item-error"))})("t-restore-column-manager",function(){return p(l),c(n.changeEvent("t-restore-column-manager"))})("t-selected",function(){return p(l),c(n.changeEvent("t-selected"))})("t-all-selected",function(){return p(l),c(n.changeEvent("t-all-selected"))})("t-unselected",function(){return p(l),c(n.changeEvent("t-unselected"))})("t-all-unselected",function(){return p(l),c(n.changeEvent("t-all-unselected"))})("t-change-group",function(){return p(l),c(n.changeEvent("t-change-group"))})("t-rows-selected",function(){return p(l),c(n.changeEvent("t-rows-selected"))}),t(),i(5,"po-container",4),o(6,"po-info",5),t(),o(7,"app-code-accordion-doc",6),_(8,oi,29,27,"ng-template",null,0,ae),t()}if(r&2){let l=U(9);m(4),s("t-action-delete",n.selection.includes("actionDelete"))("t-action-edit",n.selection.includes("actionEdit"))("t-action-excel",n.selection.includes("actionExcel"))("t-action-pdf",n.selection.includes("actionPdf"))("t-actions",n.actions||se(46,ni))("t-actions-filter",n.otherProperties.includes("actionsFilter"))("t-actions-right",n.otherProperties.includes("actionRight"))("t-components-size",n.componentsSize)("t-columns",n.columns)("t-draggable",n.otherProperties.includes("draggable"))("t-filter-input-mode",n.filterinputModeValue)("t-groupable",n.otherProperties.includes("groupable"))("t-height",n.height)("t-max-height",n.maxHeight)("t-min-height",n.minHeight)("t-hide-columns-manager",n.otherProperties.includes("hideColumnsManager"))("t-hide-action-fixed-columns",n.otherProperties.includes("hideActionFixedColumns"))("t-hide-batch-actions",n.selection.includes("hideBatchActions"))("t-hide-select-all",n.selection.includes("hideSelectAll"))("t-hide-table-search",n.otherProperties.includes("hideTableSearch"))("t-literals",n.literalsCustom)("t-loading",n.otherProperties.includes("loading"))("t-max-resizable-width",n.maxResizableValue)("t-min-resizable-width",n.minResizableValue)("t-options-paging",n.customOptionsPage)("t-pageable",n.pagination.includes("pageable"))("t-resizable",n.resizable)("t-selectable",n.selection.includes("selectable"))("t-selectable-entire-line",n.selection.includes("selectableEntireLine"))("t-show-densification-configuration",n.otherProperties.includes("showDensificationConfiguration"))("t-show-draggable-icon",n.otherProperties.includes("showDraggableIcon"))("t-show-more-disabled",n.pagination.includes("showMoreDisabled"))("t-show-more-visible",n.pagination.includes("showMoreVisible"))("t-single-select",n.selection.includes("singleSelect"))("t-sort",n.customSort)("t-sortable",n.otherProperties.includes("sortable"))("t-spacing",n.spacing)("t-striped",n.otherProperties.includes("striped"))("t-text-wrap",n.otherProperties.includes("textWrap"))("t-virtual-scroll",n.otherProperties.includes("virtualScroll"))("t-items",n.items),m(2),s("p-value",n.event),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[N,K,G,b,C,fe,le,et,ve,J,F,P],encapsulation:2})}}return d})();var ri=["gridComponent"],St=(()=>{class d{constructor(){this.htmlCode=`<thf-grid
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
  `,this.columns=[{property:"id",label:"Id",editProperties:{disabled:!0}},{property:"name",label:"Nome"},{property:"birthdate",label:"Data de  nascimento",type:"date",editProperties:{componentEditable:"datepicker",clean:!0,required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,additionalHelpTooltip:"Informe a data de nascimento no formato DDMMAAAA ou selecione no calend\xE1rio.",keydown:this.onKeyDown.bind(this,"birthdate")}},{property:"city",label:"Cidade",editProperties:{componentEditable:"combo",options:[{value:"4201307",label:"Araquari"},{value:"1501402",label:"Bel\xE9m"},{value:"3509502",label:"Campinas"},{value:"4106902",label:"Curitiba"},{value:"4209102",label:"Joinville"},{value:"3534401",label:"Osasco"},{value:"3304557",label:"Rio de Janeiro"},{value:"4215802",label:"S\xE3o Bento do Sul"},{value:"4216206",label:"S\xE3o Francisco do Sul"},{value:"3550308",label:"S\xE3o Paulo"}],fieldLabel:"label",fieldValue:"value",removeInitialFilter:!0,controlValueWithLabel:!0}}]}ngOnInit(){this.editProperties={actionEdit:this.setFormGroup.bind(this)}}onKeyDown(a,r){r.code==="F9"&&this.thfGrid.showAdditionalHelp(a)}setFormGroup(a){return this.form=new Q({id:new S(a.id,[j.required]),name:new S(a.name),city:new S(a.city),birthdate:new S(a.birthdate)}),this.form}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-editing-inline-doc"]],viewQuery:function(r,n){if(r&1&&T(ri,5),r&2){let l;w(l=D())&&(n.thfGrid=l.first)}},standalone:!1,decls:7,vars:11,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/people",3,"t-auto-size","t-columns","t-actions-filter","t-selectable","t-actions-right","t-draggable","t-groupable","t-height","t-edit-properties"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",1),e(2,"Edi\xE7\xE3o em linha"),t(),o(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("t-auto-size",!0)("t-columns",n.columns)("t-actions-filter",!0)("t-selectable",!0)("t-actions-right",!0)("t-draggable",!0)("t-groupable",!0)("t-height",400)("t-edit-properties",n.editProperties),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[b,C,F,P],encapsulation:2})}}return d})();var di=["modal"],mi=["gridComponent"];function si(d,I){if(d&1&&(i(0,"div",9)(1,"pre"),e(2),t()()),d&2){let a=E();m(2),ue(a.getLabelChangedItems())}}var bt=(()=>{class d{constructor(){this.htmlCode=`<po-button class="po-mr-2" p-label="Finaliza modo edi\xE7\xE3o" (p-click)="finishEditMode()"></po-button>
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
/>

<po-modal #modal p-title="Itens que foram alterados">
  <div class="code" *ngIf="getChangedItems()?.length">
    <pre>{{ getLabelChangedItems() }}</pre>
  </div>
</po-modal>
`,this.tsCode=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PoModalComponent } from '@po-ui/ng-components';
import { ThfGridColumn, ThfGridComponent, ThfGridRowActions } from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-row-actions-doc',
  templateUrl: './thf-grid-grid-row-actions-doc.component.html',
  styleUrls: ['./thf-grid-grid-row-actions-doc.component.css'],
  standalone: false
})
export class ThfGridRowActionsDocComponent {
  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

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
        required: true,
        componentEditable: 'input',
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        additionalHelpTooltip: 'Informe pelo menos o primeiro nome.',
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
        additionalHelpTooltip: 'Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.',
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
          { value: 3, label: 'Vendedor' }
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        additionalHelpTooltip: 'Marque um ou mais status, conforme necess\xE1rio.',
        keydown: this.onKeyDown.bind(this, 'otherStatus'),
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
`,this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],perfil:[1],state:{value:"SC",label:"Santa Catarina"},city:"Lages"},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],perfil:[2],state:{value:"SC",label:"Santa Catarina"},city:"Brusque"},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],perfil:[3],state:{value:"SP",label:"S\xE3o Paulo"},city:"Guarulhos"},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],perfil:[3],state:{value:"SP",label:"S\xE3o Paulo"},city:"Campinas"},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],perfil:[2],state:{value:"RJ",label:"Rio de Janeiro"},city:null},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],perfil:[1],state:null,city:null}],this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",additionalHelpTooltip:"Informe pelo menos o primeiro nome.",keydown:this.onKeyDown.bind(this,"name")}},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:1,label:"Ativo"},{value:2,label:"Inativo"},{value:0,label:"Other"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}},{property:"values",label:"Values",editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!0,errorMessage:"Obrigat\xF3rio",additionalHelpTooltip:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",keydown:this.onKeyDown.bind(this,"values")}},{property:"perfil",label:"Perfil",editProperties:{componentEditable:"multiselect",options:[{value:1,label:"RH"},{value:2,label:"Almoxarifado"},{value:3,label:"Vendedor"}],fieldLabel:"label",fieldValue:"value",required:!0,errorMessage:"Obrigat\xF3rio",additionalHelpTooltip:"Marque um ou mais status, conforme necess\xE1rio.",keydown:this.onKeyDown.bind(this,"otherStatus"),controlValueWithLabel:!0}},{property:"state",label:"Estado",editProperties:{componentEditable:"combo",required:!1,removeInitialFilter:!0,options:[{value:"MG",label:"Minas Gerais"},{value:"RJ",label:"Rio de Janeiro"},{value:"SC",label:"Santa Catarina"},{value:"SP",label:"S\xE3o Paulo"}],fieldLabel:"label",fieldValue:"value",controlValueWithLabel:!0}},{property:"city",label:"cidade",editProperties:{componentEditable:"combo",required:!1,removeInitialFilter:!0,disabled:!1,fieldLabel:"value",fieldValue:"value"}}],this.itemsUpdated=[]}ngOnInit(){this.gridRowsActionsWithItems={title:"Items",actionEdit:(a,r)=>(r==="include"&&!a.id&&(console.log("mode: ",r),this.disabledIncludeButton=!0,a.id=a.$uuidThfIncluded,a.dependents=[],this.currentIdItem=a.id),this.myForm=new Q({name:new S(a.name),status:new S(a.status,[j.min(1)]),values:new S(a.values,[j.required]),perfil:new S(a.perfil,[j.required]),state:new S(a.state),city:new S(a.city)}),this.handleStateAndCity(this.myForm?.controls.state.value),this.myForm),afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this),validateField:this.onValidate.bind(this)},this.itemsUpdated=[...this.items]}onAfterSave(a){console.log("onAfterSave(new): ",a);let r=this.columnWithItems.find(n=>n.property==="city");r?.editProperties&&(r.editProperties.disabled=!0)}onBeforeSave(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeInsert(a){console.log("before insert new value: ",a),this.disabledIncludeButton=!1,this.itemsUpdated=[...this.itemsUpdated,a];let r=this.columnWithItems.find(n=>n.property==="city");return r?.editProperties&&(r.editProperties.disabled=!0),!0}onValidate(a,r){if(console.log("onValidateField:",a,r),r==="state"){this.myForm?.controls.city.setValue(null);let n=this.myForm.controls.state.value,l=this.columnWithItems.find(u=>u.property==="city");if(!l?.editProperties)return!0;n?(l.editProperties.disabled=!1,l.editProperties.options=this.getCity(n.value),this.myForm?.controls.city.setValue("")):l.editProperties.disabled=!0}return!0}handleStateAndCity(a){let r=this.columnWithItems.find(n=>n.property==="city");r?.editProperties&&(a?(r.editProperties.options=this.getCity(a),r.editProperties.disabled=!1):r.editProperties.disabled=!0)}onBeforeRemove(a){return!0}onAfterRemove(a){return console.log("afterRemove: ",a),!0}getChangedItems(){return this.thfGrid?.getChangedItems()||[]}getLabelChangedItems(){return JSON.stringify(this.thfGrid?.getChangedItems()||[],null,2)}finishEditMode(){this.thfGrid.cleanRowActionsMode()}onKeyDown(a,r){r.code==="F9"&&this.thfGrid.showAdditionalHelp(a)}getCity(a){return{MG:[{value:"Belo Horizonte"},{value:"Contagem"},{value:"Juiz de Fora"},{value:"Uberl\xE2ndia"}],RJ:[{value:"Duque de Caxias"},{value:"Nova Igua\xE7u"},{value:"Rio de Janeiro"},{value:"S\xE3o Gon\xE7alo"}],SP:[{value:"Campinas"},{value:"Guarulhos"},{value:"S\xE3o Bernardo do Campo"},{value:"S\xE3o Paulo"}],SC:[{value:"Balne\xE1rio Cambori\xFA"},{value:"Brusque"},{value:"Lages"},{value:"Palho\xE7a"}]}[a]||[]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-row-actions-doc"]],viewQuery:function(r,n){if(r&1&&(T(di,7),T(mi,5)),r&2){let l;w(l=D())&&(n.poModal=l.first),w(l=D())&&(n.thfGrid=l.first)}},standalone:!1,decls:12,vars:12,consts:[["gridComponent",""],["modal",""],[1,"po-font-text-large-bold"],["p-label","Finaliza modo edi\xE7\xE3o",1,"po-mr-2",3,"p-click"],["p-label","Get itens alterados",3,"p-click","p-disabled"],[3,"t-height","t-selectable","t-single-select","t-items","t-columns","t-grid-row-actions","t-actions-right","t-sortable"],["p-title","Itens que foram alterados"],["class","code",4,"ngIf"],[3,"htmlCode","tsCode"],[1,"code"]],template:function(r,n){if(r&1){let l=M();i(0,"po-container")(1,"span",2),e(2,"Edi\xE7\xE3o flu\xEDda"),t(),o(3,"po-divider"),i(4,"po-button",3),g("p-click",function(){return p(l),c(n.finishEditMode())}),t(),i(5,"po-button",4),g("p-click",function(){return p(l),c(n.poModal.open())}),t(),o(6,"thf-grid",5,0),i(8,"po-modal",6,1),_(10,si,3,1,"div",7),t(),o(11,"app-code-accordion-doc",8),t()}if(r&2){let l,u;m(5),s("p-disabled",((l=n.getChangedItems())==null?null:l.length)===0),m(),s("t-height",400)("t-selectable",!0)("t-single-select",!0)("t-items",n.items)("t-columns",n.columnWithItems)("t-grid-row-actions",n.gridRowsActionsWithItems)("t-actions-right",!0)("t-sortable",!0),m(4),s("ngIf",(u=n.getChangedItems())==null?null:u.length),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[re,G,b,C,he,F,P],styles:[".code[_ngcontent-%COMP%]{padding:1rem;background-color:#000;color:#adff2f;margin-top:.5rem;margin-left:2rem;border-radius:.5rem}"]})}}return d})();var ci=["modal"],ui=["gridComponent"];function Ei(d,I){if(d&1&&(i(0,"div",9)(1,"pre"),e(2),t()()),d&2){let a=E();m(2),ue(a.getLabelChangedItems())}}var ft=(()=>{class d{constructor(){this.htmlCode=`<po-button
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
      destination: 'Rio de Janeiro',
      status: 'available',
      region: 'Latin America',
    },
    {
      id: 22467,
      country: 'France',
      value: 5000.0,
      destination: 'Paris',
      status: 'closed',
      region: 'Alps',
    },
    {
      id: 40670,
      country: 'Senegal',
      value: 3200.0,
      destination: 'Dakar',
      status: 'closed',
      region: 'Western Africa',
    },
    {
      id: 34679,
      country: 'Portugal',
      value: 5500.0,
      destination: 'Lisbon',
      status: 'closed',
      region: 'Mediterranean',
    },
    {
      id: 48999,
      country: 'Russia',
      value: 6700.0,
      destination: 'Moscow',
      status: 'reserved',
      region: 'Caucasus',
    },
    {
      id: 48999,
      country: 'United States',
      value: 2700.49,
      destination: 'Los Angeles',
      status: 'reserved',
      region: 'North America',
    },
    {
      id: 54563,
      country: 'Chile',
      value: 2000.0,
      destination: 'Cusco',
      status: 'available',
      region: 'Latin America',
    },
    {
      id: 64568,
      country: 'Mexico',
      value: 2100.0,
      destination: 'Mexico City',
      status: 'available',
      region: 'Latin America',
    },
    {
      id: 75456,
      country: 'Ireland',
      value: 6300.0,
      destination: 'Cork',
      status: 'reserved',
      region: 'British Isle',
    },
    {
      id: 23445,
      country: 'South Africa',
      value: 1900.0,
      destination: 'Cape Town',
      status: 'available',
      region: 'Southern Africa',
    },
    {
      id: 19238,
      country: 'Australia',
      value: 6300.0,
      destination: 'Sydney',
      status: 'reserved',
      region: 'Australasia',
    },
    {
      id: 85456,
      country: 'Japan',
      value: 5900.0,
      destination: 'Tokio',
      status: 'available',
      region: 'East Asia',
    },
    {
      id: 94565,
      country: 'China',
      value: 2900.0,
      destination: 'Beijing',
      status: 'available',
      region: 'East Asia',
    },
    {
      id: 32330,
      country: 'England',
      value: 2090.5,
      destination: 'London',
      status: 'available',
      region: 'British Isle',
    },
    {
      id: 14560,
      country: 'Canada',
      value: 2090.5,
      destination: 'Quebec',
      status: 'available',
      region: 'North America',
    },
    {
      id: 93800,
      country: 'Iceland',
      value: 6300.0,
      destination: 'Reykjav\xEDk',
      status: 'available',
      region: 'Nordics',
    },
    {
      id: 34239,
      country: 'Germany',
      value: 3070.5,
      destination: 'Berlin',
      status: 'available',
      region: 'Danube',
    },
    {
      id: 45611,
      country: 'Argentina',
      value: 3500.5,
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
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
  ];

  aggregatesDescriptor: Array<ThfAggregateDescriptor> = [
    { field: 'value', aggregate: 'sum', label: 'Total' }
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

  `,this.items=[{id:11234,country:"Brazil",value:1e3,destination:"Rio de Janeiro",status:"available",region:"Latin America"},{id:22467,country:"France",value:5e3,destination:"Paris",status:"closed",region:"Alps"},{id:40670,country:"Senegal",value:3200,destination:"Dakar",status:"closed",region:"Western Africa"},{id:34679,country:"Portugal",value:5500,destination:"Lisbon",status:"closed",region:"Mediterranean"},{id:48999,country:"Russia",value:6700,destination:"Moscow",status:"reserved",region:"Caucasus"},{id:48999,country:"United States",value:2700.49,destination:"Los Angeles",status:"reserved",region:"North America"},{id:54563,country:"Chile",value:2e3,destination:"Cusco",status:"available",region:"Latin America"},{id:64568,country:"Mexico",value:2100,destination:"Mexico City",status:"available",region:"Latin America"},{id:75456,country:"Ireland",value:6300,destination:"Cork",status:"reserved",region:"British Isle"},{id:23445,country:"South Africa",value:1900,destination:"Cape Town",status:"available",region:"Southern Africa"},{id:19238,country:"Australia",value:6300,destination:"Sydney",status:"reserved",region:"Australasia"},{id:85456,country:"Japan",value:5900,destination:"Tokio",status:"available",region:"East Asia"},{id:94565,country:"China",value:2900,destination:"Beijing",status:"available",region:"East Asia"},{id:32330,country:"England",value:2090.5,destination:"London",status:"available",region:"British Isle"},{id:14560,country:"Canada",value:2090.5,destination:"Quebec",status:"available",region:"North America"},{id:93800,country:"Iceland",value:6300,destination:"Reykjav\xEDk",status:"available",region:"Nordics"},{id:34239,country:"Germany",value:3070.5,destination:"Berlin",status:"available",region:"Danube"},{id:45611,country:"Argentina",value:3500.5,destination:"Ushuaia",status:"reserved",region:"Latin America"}],this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"status",label:"Status",type:"label",labels:[{value:"available",color:"color-11",label:"Available"},{value:"reserved",color:"color-08",label:"Reserved"},{value:"closed",color:"color-07",label:"Closed"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:"available",label:"Available"},{value:"reserved",label:"Reserved"},{value:"closed",label:"Closed"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}},{property:"region",label:"Region",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",additionalHelpTooltip:"Informe a regi\xE3o referida.",keydown:this.onKeyDown.bind(this,"region")}},{property:"country",label:"Country",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",additionalHelpTooltip:"Informe o pa\xEDs referido.",keydown:this.onKeyDown.bind(this,"country")}},{property:"destination",label:"Destination",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",additionalHelpTooltip:"Informe o destino dentro do pa\xEDs informado.",keydown:this.onKeyDown.bind(this,"destination")}},{property:"value",label:"Value",type:"currency",format:"USD",editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}}],this.aggregatesDescriptor=[{field:"value",aggregate:"sum",label:"Total"}],this.itemsUpdated=[]}ngOnInit(){this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!0,actionEdit:(a,r)=>(r==="include"&&!a.id&&(console.log("mode: ",r),this.disabledIncludeButton=!0,a.id=a.$uuidThfIncluded,a.dependents=[],this.currentIdItem=a.id),new Q({status:new S(a.status,[j.min(1)]),region:new S(a.region,[j.required]),country:new S(a.country,[j.required]),destination:new S(a.destination,[j.required]),value:new S(a.value,[j.required])})),afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this)},this.itemsUpdated=[...this.items]}onAfterSave(a){console.log("onAfterSave(new): ",a)}onBeforeSave(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeSaveSubItems(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeInsert(a){return console.log("before insert new value: ",a),this.disabledIncludeButton=!1,this.itemsUpdated=[...this.itemsUpdated,a],!0}onBeforeInsertSubItems(a){a.id=a.$uuidThfIncluded;let r=this.itemsUpdated.find(n=>n.id===this.currentIdItem);return r.dependents=r.dependents?[...r.dependents,a]:[a],!0}onBeforeRemove(a){return!0}onAfterRemove(a){return console.log("afterRemove: ",a),!0}getChangedItems(){return this.thfGrid?.getChangedItems()||[]}getLabelChangedItems(){return JSON.stringify(this.thfGrid?.getChangedItems()||[],null,2)}finishEditMode(){this.thfGrid.cleanRowActionsMode()}onKeyDown(a,r){r.code==="F9"&&this.thfGrid.showAdditionalHelp(a)}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-editing-fluid-currency-doc"]],viewQuery:function(r,n){if(r&1&&(T(ci,7),T(ui,5)),r&2){let l;w(l=D())&&(n.poModal=l.first),w(l=D())&&(n.thfGrid=l.first)}},standalone:!1,decls:12,vars:14,consts:[["gridComponent",""],["modal",""],[1,"po-font-text-large-bold"],["p-label","Finaliza modo edi\xE7\xE3o",1,"po-mr-2",3,"p-click"],["p-label","Get itens alterados",3,"p-click","p-disabled"],[3,"t-height","t-selectable","t-single-select","t-items","t-columns","t-grid-row-actions","t-aggregates","t-show-footer-aggregates","t-actions-right","t-sortable"],["p-title","Itens que foram alterados"],["class","code",4,"ngIf"],[3,"htmlCode","tsCode"],[1,"code"]],template:function(r,n){if(r&1){let l=M();i(0,"po-container")(1,"span",2),e(2,"Edi\xE7\xE3o com Padroniza\xE7\xE3o do N\xFAmero de Casas Decimais"),t(),o(3,"po-divider"),i(4,"po-button",3),g("p-click",function(){return p(l),c(n.finishEditMode())}),t(),i(5,"po-button",4),g("p-click",function(){return p(l),c(n.poModal.open())}),t(),o(6,"thf-grid",5,0),i(8,"po-modal",6,1),_(10,Ei,3,1,"div",7),t(),o(11,"app-code-accordion-doc",8),t()}if(r&2){let l,u;m(5),s("p-disabled",((l=n.getChangedItems())==null?null:l.length)===0),m(),s("t-height",400)("t-selectable",!0)("t-single-select",!0)("t-items",n.items)("t-columns",n.columnWithItems)("t-grid-row-actions",n.gridRowsActionsWithItems)("t-aggregates",n.aggregatesDescriptor)("t-show-footer-aggregates",!0)("t-actions-right",!0)("t-sortable",!0),m(4),s("ngIf",(u=n.getChangedItems())==null?null:u.length),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[re,G,b,C,he,F,P],encapsulation:2})}}return d})();var ht=(()=>{class d{constructor(){this.htmlCode=`<thf-grid
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
}`,this.products=[{id:1,status:{value:"active",label:"Ativo"},name:"Smartphone",price:999.99,discount:0},{id:2,status:{value:"inactive",label:"Inativo"},name:"Tablet",price:499.99,discount:50},{id:3,status:{value:"active",label:"Ativo"},name:"Office Chair",price:299.99,discount:10}],this.columns=[{property:"id",label:"ID",editProperties:{disabled:!0}},{property:"status",label:"Status",editProperties:{componentEditable:"combo",options:[{value:"active",label:"Ativo"},{value:"inactive",label:"Inativo"}],fieldLabel:"label",fieldValue:"value",removeInitialFilter:!0,controlValueWithLabel:!0}},{property:"name",label:"Nome do Produto",editProperties:{readonly:a=>a.status==="inactive"}},{property:"price",label:"Pre\xE7o",editProperties:{readonly:!0}},{property:"discount",label:"Desconto (%)",editProperties:{disabled:a=>a.status==="inactive"}}],this.gridRowActions={title:"Produtos",actionEdit:this.onEdit.bind(this),validateField:this.onValidate.bind(this)}}onEdit(a,r){return console.log("Editando produto:",a,"Modo:",r),this.editForm=new Q({id:new S(a.id),name:new S(a.name),price:new S(a.price),discount:new S(a.discount),status:new S(a.status)}),this.editForm}onValidate(a,r){return console.log("onValidateField:",a,r),!0}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-dynamic-properties"]],standalone:!1,decls:6,vars:7,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-items","t-columns","t-grid-row-actions","t-auto-size","t-actions-right"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Edi\xE7\xE3o com Propriedades din\xE2micas"),t(),o(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-items",n.products)("t-columns",n.columns)("t-grid-row-actions",n.gridRowActions)("t-auto-size",!0)("t-actions-right",!0),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[b,C,F,P],encapsulation:2})}}return d})();var bi=["gridComponent"],vt=(()=>{class d{constructor(){this.htmlCode=`<thf-grid
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
}`,this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome"},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}]},{property:"values",label:"Values"},{property:"number",label:"Number",type:"number"},{property:"datepicker",label:"datepicker"},{property:"otherStatus",label:"Outro Status"},{property:"select",label:"select"},{property:"switch",label:"switch"},{property:"decimal",label:"decimal",type:"currency"},{property:"checkbox",label:"checkbox"},{property:"valuesx",label:"Valuesx"}],this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],valuesx:[1495831666871],otherStatus:[233],number:1,datepicker:"1980-11-01",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],valuesx:[1495831698598],otherStatus:[233],number:2,datepicker:"1980-11-02",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],valuesx:[1495832652942],otherStatus:[3],number:3,datepicker:"1980-11-03",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],valuesx:[1495832683682],otherStatus:[3],number:4,datepicker:"1980-11-04",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],valuesx:[1495833068596],otherStatus:[233],number:5,datepicker:"1980-11-05",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],valuesx:[1495833068597],otherStatus:[233],number:6,datepicker:"1980-11-06",select:"3",switch:!0,decimal:123.45,checkbox:!0}]}ngOnInit(){let a=[],r=this.items[0];for(let n=1;n<=100;n++){let l=Date.now()+n,u=ie(te({},r),{id:l+n,name:`${r.name} ${n}${n}`});a.push(u)}this.items=a}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-auto-fit-scroll"]],viewQuery:function(r,n){if(r&1&&T(bi,5),r&2){let l;w(l=D())&&(n.thfGrid=l.first)}},standalone:!1,decls:7,vars:10,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-spacing","extraSmall","t-components-size","small",3,"t-columns","t-items","t-height","t-page-size-virtual","t-virtual-scroll","t-resizable","t-auto-size","t-auto-size-on-scroll"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",1),e(2,"Grid utilizando auto-size e auto-fit-on-scroll"),t(),o(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("t-columns",n.columnWithItems)("t-items",n.items)("t-height",500)("t-page-size-virtual",20)("t-virtual-scroll",!0)("t-resizable",!0)("t-auto-size",!0)("t-auto-size-on-scroll",!0),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[b,C,F,P],encapsulation:2})}}return d})();var hi=["gridComponent"],gt=(()=>{class d{constructor(){this.htmlCode=`
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
  `,this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome",editProperties:{required:!0,componentEditable:"input",errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,additionalHelpTooltip:"Informe pelo menos o primeiro nome.",help:"Input text",keydown:this.onKeyDown.bind(this,"name")}},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}],editProperties:{componentEditable:"combo",required:!0,disabledInitFilter:!0,options:[{value:1,label:"Ativo"},{value:2,label:"Inativo"},{value:0,label:"Other"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value",additionalHelpTooltip:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"values",label:"Values",editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!1,errorMessage:"Obrigat\xF3rio",additionalHelpTooltip:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",help:"Input lookup",keydown:this.onKeyDown.bind(this,"values"),controlValueWithLabel:!0}},{property:"number",label:"Number",type:"number",editProperties:{componentEditable:"number",errorMessage:"Number \xE9 obrigat\xF3rio",help:"Input number",additionalHelpTooltip:"Digite um n\xFAmero aqui"}},{property:"datepicker",label:"datepicker",editProperties:{componentEditable:"datepicker",errorMessage:"Datepicker \xE9 obrigat\xF3rio",help:"Entre com a data",additionalHelpTooltip:"Valor do tipo date"}},{property:"otherStatus",label:"Outro Status",editProperties:{componentEditable:"multiselect",options:[{value:123,label:"Ativo"},{value:233,label:"Inativo"},{value:3,label:"Other"}],fieldLabel:"label",fieldValue:"value",errorMessage:"Obrigat\xF3rio",additionalHelpTooltip:"Marque um ou mais status, conforme necess\xE1rio.",help:"status",keydown:this.onKeyDown.bind(this,"otherStatus"),controlValueWithLabel:!0}},{property:"select",label:"select",editProperties:{componentEditable:"select",options:[{value:123,label:"Ativo"},{value:233,label:"Inativo"},{value:3,label:"Other"}],errorMessage:"select \xE9 obrigat\xF3rio",additionalHelpTooltip:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"switch",label:"switch",editProperties:{componentEditable:"switch",hideLabelStatus:!1,additionalHelpTooltip:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"decimal",label:"decimal",type:"currency",editProperties:{componentEditable:"decimal",additionalHelpTooltip:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"checkbox",label:"checkbox",editProperties:{componentEditable:"checkbox",disabled:!1,help:"lorem impsum",additionalHelpTooltip:" ok ok ok"}},{property:"valuesx",label:"Valuesx",editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!0,errorMessage:"Obrigat\xF3rio",additionalHelpTooltip:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",help:"Input lookup",keydown:this.onKeyDown.bind(this,"valuesx"),controlValueWithLabel:!0}}],this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],valuesx:[1495831666871],otherStatus:[233],number:1,datepicker:"1980-11-01",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],valuesx:[1495831698598],otherStatus:[233],number:2,datepicker:"1980-11-02",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],valuesx:[1495832652942],otherStatus:[3],number:3,datepicker:"1980-11-03",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],valuesx:[1495832683682],otherStatus:[3],number:4,datepicker:"1980-11-04",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],valuesx:[1495833068596],otherStatus:[233],number:5,datepicker:"1980-11-05",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],valuesx:[1495833068597],otherStatus:[233],number:6,datepicker:"1980-11-06",select:"3",switch:!0,decimal:123.45,checkbox:!0}],this.itemsUpdated=[]}ngOnInit(){this.editProperties={actionEdit:this.setFormGroup.bind(this)};for(let n=1;n<=600;n++){let l=`property${n}`;this.columnWithItems.push({property:l,label:`Dynamic ${n}`,editProperties:{disabled:!1}})}let a=[],r=this.items[0];for(let n=1;n<=1e4;n++){let l=Date.now()+n,u=ie(te({},r),{id:l+n,name:`${r.name} ${n}`});for(let q=1;q<=600;q++)u[`property${q}`]=`Valor ${q}`;a.push(u)}this.items=a,this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!0,actionEdit:(n,l)=>{l==="include"&&!n.id&&(console.log("mode: ",l),n.id=n.$uuidThfIncluded,n.dependents=[],this.currentIdItem=n.id);let u={name:new S(n.name),status:new S(n.status,[j.min(1)]),values:new S(n.values,[j.required]),valuesx:new S(n.values,[j.required]),otherStatus:new S(n.otherStatus),number:new S(n.number),datepicker:new S(n.datepicker),select:new S(n.select),switch:new S(n.switch),decimal:new S(n.decimal),checkbox:new S(n.checkbox)};for(let q=1;q<=600;q++)u[`property${q}`]=new S(n[`property${q}`]);return this.form=new Q(u),this.form},afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this)},this.itemsUpdated=[...this.items]}onKeyDown(a,r){r.code==="F9"&&this.thfGrid.showAdditionalHelp(a)}onBeforeSave(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeSaveSubItems(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeInsert(a){return console.log("before insert new value: ",a),this.itemsUpdated=[...this.itemsUpdated,a],!0}onBeforeInsertSubItems(a){a.id=a.$uuidThfIncluded;let r=this.itemsUpdated.find(n=>n.id===this.currentIdItem);return r.dependents=r.dependents?[...r.dependents,a]:[a],!0}onBeforeRemove(a){return!0}onAfterSave(a){console.log("onAfterSave(new): ",a)}onAfterRemove(a){return console.log("afterRemove: ",a),!0}setFormGroup(a){return this.form=new Q({id:new S(a.id,[j.required]),name:new S(a.name),city:new S(a.city),birthdate:new S(a.birthdate),status:new S(a.status),email:new S(a.email)}),this.form}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-virtual-doc"]],viewQuery:function(r,n){if(r&1&&T(hi,5),r&2){let l;w(l=D())&&(n.thfGrid=l.first)}},standalone:!1,decls:7,vars:12,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-spacing","small",3,"t-selectable","t-single-select","t-columns","t-items","t-grid-row-actions","t-actions-right","t-auto-size","t-height","t-virtual-columns","t-virtual-scroll"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",1),e(2,"Grid utilizando virtual-columns e virtual-scroll"),t(),o(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("t-selectable",!0)("t-single-select",!0)("t-columns",n.columnWithItems)("t-items",n.items)("t-grid-row-actions",n.gridRowsActionsWithItems)("t-actions-right",!0)("t-auto-size",!1)("t-height",500)("t-virtual-columns",!0)("t-virtual-scroll",!0),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[b,C,F,P],encapsulation:2})}}return d})();var yt=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid"]],standalone:!1,decls:14,vars:0,consts:[["p-title","THF-Grid","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview","",1,"samples-container"],["labs","",1,"samples-container"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-grid")(2,"div",1),o(3,"app-thf-grid-basic-doc")(4,"app-thf-grid-editing-inline-doc")(5,"app-thf-grid-row-actions-doc")(6,"app-thf-grid-aggregates-doc")(7,"app-thf-grid-editing-fluid-currency-doc")(8,"app-thf-grid-delete-service-doc")(9,"app-thf-grid-virtual-doc")(10,"app-thf-grid-dynamic-properties")(11,"app-thf-grid-auto-fit-scroll"),t(),i(12,"div",2),o(13,"app-thf-grid-labs-doc"),t()()())},dependencies:[$,rt,ct,ut,Et,xt,St,bt,ft,ht,vt,gt],encapsulation:2})}}return d})();function gi(d,I){if(d&1){let a=M();i(0,"div",7)(1,"po-container",8)(2,"po-input",9),v("ngModelChange",function(n){p(a);let l=E();return h(l.label,n)||(l.label=n),c(n)}),t(),i(3,"po-input",10),v("ngModelChange",function(n){p(a);let l=E();return h(l.help,n)||(l.help=n),c(n)}),t(),i(4,"po-input",11),v("ngModelChange",function(n){p(a);let l=E();return h(l.additionalHelpTooltip,n)||(l.additionalHelpTooltip=n),c(n)}),t(),i(5,"po-input",12),v("ngModelChange",function(n){p(a);let l=E();return h(l.placeholder,n)||(l.placeholder=n),c(n)}),t(),i(6,"po-input",13),v("ngModelChange",function(n){p(a);let l=E();return h(l.fieldErrorMessage,n)||(l.fieldErrorMessage=n),c(n)}),t(),i(7,"po-select",14),v("ngModelChange",function(n){p(a);let l=E();return h(l.fieldLabel,n)||(l.fieldLabel=n),c(n)}),t(),i(8,"po-select",15),v("ngModelChange",function(n){p(a);let l=E();return h(l.fieldValue,n)||(l.fieldValue=n),c(n)}),t(),i(9,"po-input",16),v("ngModelChange",function(n){p(a);let l=E();return h(l.fieldFormat,n)||(l.fieldFormat=n),c(n)}),g("p-change",function(n){p(a);let l=E();return c(l.onFieldFormatChange(n))}),t()(),i(10,"po-container",8)(11,"po-checkbox-group",17),v("ngModelChange",function(n){p(a);let l=E();return h(l.columnsName,n)||(l.columnsName=n),c(n)}),g("p-change",function(){p(a);let n=E();return c(n.updateColumns())}),t()(),i(12,"po-container",8)(13,"po-checkbox-group",18),v("ngModelChange",function(n){p(a);let l=E();return h(l.otherProperties,n)||(l.otherProperties=n),c(n)}),g("p-change",function(){p(a);let n=E();return c(n.changeOtherPropertiesOptions())}),t()(),i(14,"po-container",8)(15,"po-radio-group",19),v("ngModelChange",function(n){p(a);let l=E();return h(l.lookupModalSize,n)||(l.lookupModalSize=n),c(n)}),t(),i(16,"po-radio-group",20),v("ngModelChange",function(n){p(a);let l=E();return h(l.searchOnEnter,n)||(l.searchOnEnter=n),c(n)}),t()(),i(17,"po-container",8)(18,"po-radio-group",21),v("ngModelChange",function(n){p(a);let l=E();return h(l.size,n)||(l.size=n),c(n)}),t(),i(19,"po-textarea",22),v("ngModelChange",function(n){p(a);let l=E();return h(l.literals,n)||(l.literals=n),c(n)}),g("p-change-model",function(){p(a);let n=E();return c(n.changeLiterals())}),t(),i(20,"po-textarea",23),v("ngModelChange",function(n){p(a);let l=E();return h(l.filterSearchSelect,n)||(l.filterSearchSelect=n),c(n)}),g("p-change-model",function(){p(a);let n=E();return c(n.changeFilterSearchSelects())}),t(),i(21,"po-textarea",24),v("ngModelChange",function(n){p(a);let l=E();return h(l.keysLabel,n)||(l.keysLabel=n),c(n)}),g("p-change-model",function(){p(a);let n=E();return c(n.changeKeysLabel())}),t()()(),i(22,"div",25)(23,"po-button",26),g("p-click",function(){p(a);let n=E();return c(n.restore())}),t()()}if(d&2){let a=E();m(2),f("ngModel",a.label),m(),f("ngModel",a.help),m(),f("ngModel",a.additionalHelpTooltip),m(),f("ngModel",a.placeholder),m(),f("ngModel",a.fieldErrorMessage),m(),f("ngModel",a.fieldLabel),s("p-options",a.fieldLabelOptions),m(),f("ngModel",a.fieldValue),s("p-options",a.fieldValueOptions),m(),f("ngModel",a.fieldFormat),m(2),f("ngModel",a.columnsName),s("p-columns",4)("p-options",a.columnsOptions),m(2),s("p-columns",4)("p-options",a.otherPropertiesOptions),f("ngModel",a.otherProperties),m(2),s("p-columns",3)("p-options",a.lookupModalSizeOptions),f("ngModel",a.lookupModalSize),m(),f("ngModel",a.searchOnEnter),s("p-options",a.searchOnEnterOptions),m(2),f("ngModel",a.size),s("p-options",a.sizesOptions),m(),f("ngModel",a.literals),m(),f("ngModel",a.filterSearchSelect),m(),f("ngModel",a.keysLabel)}}var Ct=(()=>{class d{constructor(){this.htmlCode=`<po-container>
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
          p-label="Additional Help Tooltip"
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
          p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar."
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
import { PoCheckboxGroupOption, PoSelectOption } from '@po-ui/ng-components';
import { ThfLookupColumn, ThfLookupFilterSearchSelect, ThfLookupKeysLabel, ThfLookupLiterals } from '@totvs/thf-components';

@Component({
  selector: 'app-thf-lookup-labs-doc',
  templateUrl: './thf-lookup-labs-doc.component.html',
  styleUrl: './thf-lookup-labs-doc.component.css'
})
export class ThfLookupLabsDocComponent {
  additionalHelpTooltip: string = '';
  columnsName: Array<string> = ['id', 'name', 'nickname', 'email'];
  customFilterSearchSelect: Array<ThfLookupFilterSearchSelect> = [];
  customKeysLabel: Array<ThfLookupKeysLabel> = [];
  customLiterals: ThfLookupLiterals = {};
  event: string = '';
  fieldErrorMessage: string = '';
  fieldLabel: string = 'name';
  fieldValue: string = 'value';
  filterSearchSelect: string = '';
  help: string = '';
  keysLabel: string = '';
  label: string = '';
  literals: string = '';
  lookupModalSize: string = 'lg';
  lookupSingle: any;
  otherProperties: Array<string> = [];
  placeholder: string = '';
  fieldFormat: Array<string> | undefined;
  size: string = 'medium';
  searchOnEnter: 'include' | 'equal' = 'equal';

  columns: Array<ThfLookupColumn> = [
    { property: 'id', label: 'Id' },
    { property: 'name', label: 'Nome' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail' },
  ];

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
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
  ];

  searchOnEnterOptions: Array<PoRadioGroupOption> = [
    { label: 'equal', value: 'equal' },
    { label: 'include', value: 'include' },
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
    this.customFilterSearchSelect = [];
    this.customKeysLabel = [];
    this.customLiterals = {};
    this.event = '';
    this.fieldErrorMessage = '';
    this.fieldLabel = 'nickname';
    this.fieldValue = 'name';
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
    this.lookupModalSize = 'lg';
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach((column) =>
      this.columns.push(this.columnsDefinition[column])
    );
  }
}
  `,this.additionalHelpTooltip="",this.columnsName=["id","name","nickname","email"],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.event="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.help="",this.keysLabel="",this.label="",this.literals="",this.fieldErrorMessage="",this.otherProperties=[],this.placeholder="",this.lookupModalSize="lg",this.size="medium",this.searchOnEnter="equal",this.columns=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail"}],this.lookupModalSizeOptions=[{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"},{label:"xl",value:"xl"},{label:"auto",value:"auto"}],this.otherPropertiesOptions=[{label:"Auto Height",value:"autoHeight"},{label:"Clean",value:"clean",disabled:!1},{label:"Disabled",value:"disabled"},{label:"Multiple",value:"multiple"},{label:"No Autocomplete",value:"noAutoComplete"},{label:"Optional",value:"optional",disabled:!1},{label:"Required",value:"required"},{label:"Show Required",value:"showRequired",disabled:!0},{value:"fieldErrorLimit",label:"Limit Error Message"}],this.searchOnEnterOptions=[{label:"equal",value:"equal"},{label:"include",value:"include"}],this.sizesOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Nome"},{value:"nickname",label:"Apelido"},{value:"email",label:"E-mail"}],this.fieldLabelOptions=[{value:"name",label:"Name"},...this.columnsOptions],this.fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions],this.columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Nome"},nickname:{property:"nickname",label:"Apelido"},email:{property:"email",label:"E-mail"}}}ngOnInit(){this.restore()}changeEvent(a){this.event=a}changeFilterSearchSelects(){try{this.customFilterSearchSelect=JSON.parse(this.filterSearchSelect)}catch{this.customFilterSearchSelect=[]}}changeKeysLabel(){try{this.customKeysLabel=JSON.parse(this.keysLabel)}catch{this.customKeysLabel=[]}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals={}}}changeOtherPropertiesOptions(){let a=this.otherProperties.includes("multiple"),r=this.otherProperties.includes("required");this.otherPropertiesOptions[1].disabled=a,this.otherPropertiesOptions[7].disabled=!r,this.otherPropertiesOptions[5].disabled=r,this.otherPropertiesOptions=[...this.otherPropertiesOptions]}onFieldFormatChange(a){try{this.fieldFormat=JSON.parse(a)}catch{this.fieldFormat=void 0}}restore(){this.additionalHelpTooltip="",this.columnsName=["id","name","nickname","email"],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.event="",this.fieldErrorMessage="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.help="",this.keysLabel="",this.label="",this.literals="",this.lookupSingle=void 0,this.otherProperties=[],this.placeholder="",this.fieldFormat=void 0,this.size="medium",this.searchOnEnter="equal",this.changeFilterSearchSelects(),this.changeKeysLabel(),this.changeLiterals(),this.changeOtherPropertiesOptions(),this.updateColumns(),this.lookupModalSize="lg"}updateColumns(){this.columns=[],this.columnsName.forEach(a=>this.columns.push(this.columnsDefinition[a]))}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-labs-doc"]],standalone:!1,decls:10,vars:31,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookup","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-change","t-error","t-selected","t-focus","t-keydown","t-rows-selected","ngModelChange","t-additional-help-tooltip","t-auto-height","t-clean","t-columns","t-disabled","t-error-limit","t-field-error-message","t-field-format","t-field-label","t-field-value","t-filter-search-select","t-help","t-keys-label","t-label","t-literals","t-modal-size","t-multiple","t-no-autocomplete","t-optional","t-placeholder","t-required","t-show-required","t-search-on-enter","t-size","ngModel"],[1,"po-mt-1",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","columnsName","p-label","Columns",3,"ngModelChange","p-change","ngModel","p-columns","p-options"],["name","otherProperties","p-label","Other Properties",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","lookupModalSize","p-label","Modal Size",1,"po-lg-6",3,"ngModelChange","p-columns","p-options","ngModel"],["name","searchOnEnter","p-label","SearchOnEnter",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","literals","p-label","Literals","p-help",'{ "modalTitle": "Busca avan\xE7ada" }',1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","filterSearchSelect","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]',"p-label","Filter Search Select",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","keysLabel","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]',"p-label","Keys Label",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],[1,"po-row"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let l=M();i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),o(3,"po-divider",2),i(4,"thf-lookup",3),g("t-change",function(){return p(l),c(n.changeEvent("t-change"))})("t-error",function(){return p(l),c(n.changeEvent("t-error"))})("t-selected",function(){return p(l),c(n.changeEvent("t-selected"))})("t-focus",function(){return p(l),c(n.changeEvent("t-focus"))})("t-keydown",function(){return p(l),c(n.changeEvent("t-keydown"))})("t-rows-selected",function(){return p(l),c(n.changeEvent("t-rows-selected"))}),v("ngModelChange",function(q){return p(l),h(n.lookupSingle,q)||(n.lookupSingle=q),c(q)}),t(),i(5,"po-container",4),o(6,"po-info",5),t(),o(7,"app-code-accordion-doc",6),_(8,gi,24,26,"ng-template",null,0,ae),t()}if(r&2){let l=U(9);m(4),s("t-additional-help-tooltip",n.additionalHelpTooltip)("t-auto-height",n.otherProperties.includes("autoHeight"))("t-clean",n.otherProperties.includes("clean"))("t-columns",n.columns)("t-disabled",n.otherProperties.includes("disabled"))("t-error-limit",n.otherProperties.includes("fieldErrorLimit"))("t-field-error-message",n.fieldErrorMessage)("t-field-format",n.fieldFormat)("t-field-label",n.fieldLabel)("t-field-value",n.fieldValue)("t-field-error-message",n.fieldErrorMessage)("t-filter-search-select",n.customFilterSearchSelect)("t-help",n.help)("t-keys-label",n.customKeysLabel)("t-label",n.label)("t-literals",n.customLiterals)("t-modal-size",n.lookupModalSize)("t-multiple",n.otherProperties.includes("multiple"))("t-no-autocomplete",n.otherProperties.includes("noAutoComplete"))("t-optional",n.otherProperties.includes("optional"))("t-placeholder",n.placeholder)("t-required",n.otherProperties.includes("required"))("t-show-required",n.otherProperties.includes("showRequired"))("t-search-on-enter",n.searchOnEnter)("t-size",n.size),f("ngModel",n.lookupSingle),m(2),s("p-value",n.event),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[N,K,G,b,C,fe,le,Ye,tt,ve,J,me,P],styles:[".po-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:16px}.containerProperties[_ngcontent-%COMP%]{flex:1 1 100%}"]})}}return d})();var Pt=(()=>{class d{constructor(){this.htmlCode=`<form [formGroup]="formMission">
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
  `,this.formMission=new Q({lookup2:new S(["1495831666871"])}),this.columns=[{property:"name",label:"Name"},{property:"nickname",label:"Nickname"},{property:"email",label:"Email"},{property:"id",label:"Id"}],this.keysLabel=[{label:"Nome",value:"name"},{label:"Email",value:"email"}],this.filterSelect=[{label:"Nome",value:"name"},{label:"Nickname",value:"nickname"},{label:"Email",value:"email"}]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-form-doc"]],standalone:!1,decls:7,vars:7,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],[3,"formGroup"],["formControlName","lookup2","name","lookupMultiple","t-field-label","name","t-field-value","value","t-filter-service","https://po-sample-api.onrender.com/v1/heroes","t-key-last-search","lookupMultiple","t-label","Her\xF3is","t-placeholder","Placeholder multiple",3,"t-columns","t-keys-label","t-multiple","t-filter-search-select"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Multiple Reactive Form"),t(),o(3,"po-divider",1),i(4,"form",2),o(5,"thf-lookup",3),t(),o(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("formGroup",n.formMission),m(),s("t-columns",n.columns)("t-keys-label",n.keysLabel)("t-multiple",!0)("t-filter-search-select",n.filterSelect),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[Se,N,xe,Qe,Ge,b,C,me,P],encapsulation:2})}}return d})();var Tt=(()=>{class d{constructor(){this.htmlCode=`<thf-lookup
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
export class ThfLookupBasicDocComponent {}`}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-basic-doc"]],standalone:!1,decls:7,vars:2,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupSingle","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Single"),t(),o(3,"po-divider",1),i(4,"form"),o(5,"thf-lookup",2),t(),o(6,"app-code-accordion-doc",3),t()),r&2&&(m(6),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[Se,xe,Oe,b,C,me,P],encapsulation:2})}}return d})();var wt=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup"]],standalone:!1,decls:8,vars:0,consts:[["p-title","THF-Lookup","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],[1,"samples-container"],["labs","",1,"samples-container"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-lookup")(2,"div",1)(3,"div",2),o(4,"app-thf-lookup-basic-doc")(5,"app-thf-lookup-form-doc"),t()(),i(6,"div",3),o(7,"app-thf-lookup-labs-doc"),t()()())},dependencies:[$,lt,Ct,Pt,Tt],encapsulation:2})}}return d})();var Ti=["splitter"],wi=["paneForm"],Di=()=>({label:"horizontal",value:"horizontal"}),Ai=()=>({label:"vertical",value:"vertical"}),qi=(d,I)=>[d,I];function ki(d,I){if(d&1){let a=M();i(0,"thf-splitter-pane",10),g("t-size-change",function(){p(a);let n=E();return c(n.changeEvent("(t-size-change)"))}),i(1,"div",11)(2,"po-widget",12),g("p-primary-action",function(){let n=p(a).index,l=E();return c(l.removePane(n))}),i(3,"div",13),e(4),t()()()()}if(d&2){let a=I.$implicit,r=I.index;s("t-resizable",a.resizable)("t-scrollable",a.scrollable)("t-size",a.size),m(4),Fe(" Pane Content ",r," ")}}function Fi(d,I){if(d&1){let a=M();i(0,"div",14)(1,"po-container",15),o(2,"po-dynamic-form",16,2),i(4,"div",17)(5,"po-button",18),g("p-click",function(){p(a);let n=U(3),l=E();return c(l.addPane(n.form.value))}),t()()(),i(6,"po-container",15)(7,"po-switch",19),v("ngModelChange",function(n){p(a);let l=E();return h(l.disabled,n)||(l.disabled=n),c(n)}),t(),i(8,"po-radio-group",20),v("ngModelChange",function(n){p(a);let l=E();return h(l.orientation,n)||(l.orientation=n),c(n)}),t()()(),i(9,"div",17)(10,"po-button",21),g("p-click",function(){p(a);let n=E();return c(n.restore())}),t()()}if(d&2){let a=U(3),r=E();m(2),s("p-fields",r.panesFieldsForm)("p-value",r.pane),m(3),s("p-disabled",a.form.invalid),m(2),f("ngModel",r.disabled),m(),f("ngModel",r.orientation),s("p-options",Ie(8,qi,se(6,Di),se(7,Ai)))}}var Dt=(()=>{class d{constructor(){this.event="",this.panes=[],this.pane={},this.disabled=!1,this.orientation="horizontal",this.panesFieldsForm=[{property:"size",gridColumns:6,type:"number",maxValue:100,minValue:0,maxLength:3,step:5,help:"Valor em porc (%)"},{property:"scrollable",type:"boolean",gridColumns:3}],this.htmlCode=`<thf-splitter
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
}`}ngOnInit(){this.restore()}changeEvent(a){this.event=a}restore(){this.event="",this.panes=[],this.pane={size:"50",scrollable:!1}}addPane(a){let r=Object.assign({},a);r.size+="%",this.panes.push(r),this.pane={size:"50",scrollable:!1}}removePane(a){this.panes.splice(a,1)}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-labs-doc"]],viewQuery:function(r,n){if(r&1&&(T(Ti,7),T(wi,7)),r&2){let l;w(l=D())&&(n.splitter=l.first),w(l=D())&&(n.paneForm=l.first)}},standalone:!1,decls:12,vars:8,consts:[["splitter",""],["customTemplate",""],["paneForm",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","splitter",3,"t-layout-change","t-disabled","t-orientation"],[3,"t-resizable","t-scrollable","t-size","t-size-change",4,"ngFor","ngForOf"],[1,"po-mt-1",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[3,"t-size-change","t-resizable","t-scrollable","t-size"],[1,"po-m-2"],["p-title","Title Pane","p-primary-label","Close",3,"p-primary-action"],[1,"po-font-subtitle","po-text-center"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],[3,"p-fields","p-value"],[1,"po-row"],["p-label","Add Pane",1,"po-md-3",3,"p-click","p-disabled"],["name","disabled","p-label","Disabled",1,"po-md-6",3,"ngModelChange","ngModel"],["name","orientation","p-label","orientation",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let l=M();i(0,"po-container")(1,"span",3),e(2,"Labs"),t(),o(3,"po-divider",4),i(4,"thf-splitter",5,0),g("t-layout-change",function(){return p(l),c(n.changeEvent("(t-layout-change)"))}),_(6,ki,5,4,"thf-splitter-pane",6),t(),i(7,"po-container",7),o(8,"po-info",8),t(),o(9,"app-code-accordion-doc",9),_(10,Fi,11,11,"ng-template",null,1,ae),t()}if(r&2){let l=U(11);m(4),s("t-disabled",n.disabled)("t-orientation",n.orientation),m(2),s("ngForOf",n.panes),m(2),s("p-value",n.event),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[Me,N,K,G,b,C,it,le,Ze,J,de,Y,X,P],encapsulation:2})}}return d})();var Ii=["gridComponent"];function Li(d,I){if(d&1){let a=M();i(0,"thf-splitter-pane",9)(1,"po-widget",11),g("p-primary-action",function(){p(a);let n=E();return c(n.closePane())}),i(2,"div",12),o(3,"po-info",13),t(),i(4,"div",12),o(5,"po-info",14),t(),i(6,"div",12),o(7,"po-info",15),t(),i(8,"div",12),o(9,"po-info",16),t()()()}if(d&2){let a=E();s("t-size","30%"),m(3),s("p-value",a.selectedHero.name),m(2),s("p-value",a.selectedHero.nickname),m(2),s("p-value",a.selectedHero.email),m(2),s("p-value",a.selectedHero.city)}}var At=(()=>{class d{constructor(a,r){this.router=a,this.changeDetector=r,this.showHeroPane=!1,this.selectedHero=null,this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",email:"hulksmash@marvel.com",status:1,city:"Lages"},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",email:"spvalueerman@marvel.com",status:2,city:"Brusque"},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,email:"goku@dbz.com",city:"Guarulhos"},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,email:"hawkeye@marvel.com",city:"Campinas"},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,email:"nickfuckingfury@marvel.com",city:null},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,email:"gohan@dbz.com",city:null}],this.column=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}]},{property:"city",label:"Cidade"}],this.htmlCode=`  <thf-splitter t-disabled>
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
}`}ngAfterViewInit(){this.grid.selectRowItem(this.items[0]),this.selectItem(this.items[0]),this.changeDetector.detectChanges()}openExternalLink(){window.open("https://github.com/po-ui/po-angular")}selectItem(a){if(!a){this.closePane();return}this.selectedHero={id:a.id||"",name:a.name||"",nickname:a.nickname||"",email:a.email||"",city:a.city||""},this.showHeroPane=!0}closePane(){this.showHeroPane=!1,this.selectedHero=null,this.grid.unselectRows()}static{this.\u0275fac=function(r){return new(r||d)(R(Ue),R(Le))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-grid-doc"]],viewQuery:function(r,n){if(r&1&&T(Ii,7),r&2){let l;w(l=D())&&(n.grid=l.first)}},standalone:!1,decls:15,vars:9,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["t-disabled",""],[1,"po-lg-12","po-pt-2","po-pb-2"],[1,"po-row",2,"justify-content","space-between","align-items","center"],[1,"po-font-subtitle"],["p-icon","an an-star","p-label","Star",3,"p-click"],[3,"t-selected","t-unselected","t-height","t-selectable","t-single-select","t-items","t-columns","t-sortable"],[3,"t-size"],[3,"htmlCode","tsCode"],["p-title","Her\xF3i Selecionado","p-primary-label","Fechar Painel",3,"p-primary-action"],[1,"po-row"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Apelido",1,"po-md-12",3,"p-value"],["p-label","Contato",1,"po-md-12",3,"p-value"],["p-label","Reside em",1,"po-md-12",3,"p-value"]],template:function(r,n){if(r&1){let l=M();i(0,"po-container")(1,"span",1),e(2,"Divis\xE3o din\xE2mica"),t(),o(3,"po-divider",2),i(4,"thf-splitter",3)(5,"thf-splitter-pane")(6,"div",4)(7,"div",5)(8,"p",6),e(9,"Controle de Her\xF3is"),t(),i(10,"po-button",7),g("p-click",function(){return p(l),c(n.openExternalLink())}),t()(),i(11,"thf-grid",8,0),g("t-selected",function(q){return p(l),c(n.selectItem(q))})("t-unselected",function(){return p(l),c(n.closePane())}),t()()(),_(13,Li,10,5,"thf-splitter-pane",9),t(),o(14,"app-code-accordion-doc",10),t()}r&2&&(m(11),s("t-height",300)("t-selectable",!0)("t-single-select",!0)("t-items",n.items)("t-columns",n.column)("t-sortable",!0),m(2),ke(n.showHeroPane?13:-1),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[G,b,C,J,de,F,Y,X,P],encapsulation:2})}}return d})();var qt=(()=>{class d{constructor(){this.optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7},rendererOption:"svg"},this.optionsPie={rendererOption:"svg"},this.categoriesColumn=["coffee","chocolate","tea"],this.evolutionOfCoffeeAndSomeCompetitors=[{label:"2014",data:[91,40,42],type:pe.Column},{label:"2017",data:[93,52,18],type:pe.Column},{label:"2020",data:[95,21,-17],type:pe.Column},{label:"Coffee consumption in Brazil",data:[34,27,79],type:pe.Line,color:"color-10"}],this.coffeeProduction=[{label:"Brazil",data:2796,tooltip:"Brazil (South America)",color:"color-10"},{label:"Vietnam",data:1076,tooltip:"Vietnam (Asia)"},{label:"Colombia",data:688,tooltip:"Colombia (South America)"},{label:"Indonesia",data:682,tooltip:"Indonesia (Asia/Oceania)"},{label:"Peru",data:273,tooltip:"Peru (South America)"}],this.htmlCode=`<thf-splitter>
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
`}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-chart-doc"]],standalone:!1,decls:12,vars:8,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["p-title","Chart type column with line"],["p-title","Evolution of coffee and some competitors - %",3,"p-options","p-categories","p-series"],[3,"t-size"],["p-title","Chart type pizza"],["p-title","Top 5 coffee producing countries (in tons)",3,"p-series","p-options"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Divis\xE3o com gr\xE1ficos din\xE2micos"),t(),o(3,"po-divider",1),i(4,"thf-splitter")(5,"thf-splitter-pane")(6,"po-widget",2),o(7,"po-chart",3),t()(),i(8,"thf-splitter-pane",4)(9,"po-widget",5),o(10,"po-chart",6),t()()(),o(11,"app-code-accordion-doc",7),t()),r&2&&(m(7),s("p-options",n.optionsColumn)("p-categories",n.categoriesColumn)("p-series",n.evolutionOfCoffeeAndSomeCompetitors),m(),s("t-size","50%"),m(2),s("p-series",n.coffeeProduction)("p-options",n.optionsPie),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[$e,b,C,de,Y,X,P],encapsulation:2})}}return d})();var kt=(()=>{class d{constructor(){this.htmlCode=`<thf-splitter>
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
  `}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-basic-doc"]],standalone:!1,decls:17,vars:3,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-orientation"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic"),t(),o(3,"po-divider",1),i(4,"thf-splitter")(5,"thf-splitter-pane")(6,"h4"),e(7,"Pane 1"),t()(),i(8,"thf-splitter-pane")(9,"thf-splitter",2)(10,"thf-splitter-pane")(11,"h4"),e(12,"Pane 2"),t()(),i(13,"thf-splitter-pane")(14,"h4"),e(15,"Pane 3"),t()()()()(),o(16,"app-code-accordion-doc",3),t()),r&2&&(m(9),s("t-orientation","vertical"),m(7),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[b,C,Y,X,P],encapsulation:2})}}return d})();var Vi=()=>[At,qt,kt];function zi(d,I){d&1&&(i(0,"div",3),o(1,"app-thf-splitter-basic-doc")(2,"app-thf-splitter-grid-doc")(3,"app-thf-splitter-chart-doc"),t())}function Oi(d,I){d&1&&o(0,"po-loading-overlay",4),d&2&&s("p-screen-lock",!1)}var Ft=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter"]],standalone:!1,decls:9,vars:0,consts:[["p-title","THF-Splitter","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],["labs","",1,"samples-container"],[1,"samples-container"],[3,"p-screen-lock"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-splitter")(2,"div",1),_(3,zi,4,0)(4,Oi,1,1),Ae(5,3,Vi,null,4),qe(),t(),i(7,"div",2),o(8,"app-thf-splitter-labs-doc"),t()()())},dependencies:[Ke,$,mt,Dt],encapsulation:2})}}return d})();var _t=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-pane"]],standalone:!1,decls:2,vars:0,consts:[["p-title","THF-Splitter-Pane","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"]],template:function(r,n){r&1&&(i(0,"po-page-default",0),o(1,"api-thf-splitter-pane"),t())},dependencies:[$,dt],encapsulation:2})}}return d})();var Qi=[{path:"thf-grid",component:yt},{path:"thf-lookup",component:wt},{path:"thf-splitter",component:Ft},{path:"thf-splitter-pane",component:_t}],It=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275mod=oe({type:d})}static{this.\u0275inj=ne({imports:[Ce.forChild(Qi),Ce]})}}return d})();var Fd=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275mod=oe({type:d})}static{this.\u0275inj=ne({imports:[Ee,Ne,Be,ge,ot,at,st,It,We]})}}return d})();export{Fd as DocumentationModule};
