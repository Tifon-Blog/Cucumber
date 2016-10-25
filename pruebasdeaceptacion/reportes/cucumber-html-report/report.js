$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("NoPreguntasEvalua.feature");
formatter.feature({
  "line": 1,
  "name": "prueba de carga de no preguntas de evaluacion",
  "description": "",
  "id": "prueba-de-carga-de-no-preguntas-de-evaluacion",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "",
  "description": "",
  "id": "prueba-de-carga-de-no-preguntas-de-evaluacion;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Abrimos el navegador y vamos al sitio web donde se deberian cargar las preguntas",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "El usuario deberia ver el siguente \"\u003cmensaje\u003e\" el cual dice que no hay registros",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "prueba-de-carga-de-no-preguntas-de-evaluacion;;",
  "rows": [
    {
      "cells": [
        "mensaje"
      ],
      "line": 8,
      "id": "prueba-de-carga-de-no-preguntas-de-evaluacion;;;1"
    },
    {
      "cells": [
        "No records found."
      ],
      "line": 9,
      "id": "prueba-de-carga-de-no-preguntas-de-evaluacion;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "",
  "description": "",
  "id": "prueba-de-carga-de-no-preguntas-de-evaluacion;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Abrimos el navegador y vamos al sitio web donde se deberian cargar las preguntas",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "El usuario deberia ver el siguente \"No records found.\" el cual dice que no hay registros",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "noPreguntasEvaluaSteps.abrimos_el_navegador_y_vamos_al_sitio_web_donde_se_deberian_cargar_las_preguntas()"
});
formatter.result({
  "duration": 12691466627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found.",
      "offset": 36
    }
  ],
  "location": "noPreguntasEvaluaSteps.el_usuario_deberia_ver_el_siguente_el_cual_dice_que_no_hay_registros(String)"
});
formatter.result({
  "duration": 514056785,
  "status": "passed"
});
formatter.uri("PreguntaAutoEvalua.feature");
formatter.feature({
  "line": 1,
  "name": "prueba de carga de preguntas de la AutoEvaluacion",
  "description": "",
  "id": "prueba-de-carga-de-preguntas-de-la-autoevaluacion",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "",
  "description": "",
  "id": "prueba-de-carga-de-preguntas-de-la-autoevaluacion;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Abrimos el navegador y vamos al sitio web del login",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "El usuario deberia ver las preguntas \"\u003cpregunta\u003e\" al final",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "prueba-de-carga-de-preguntas-de-la-autoevaluacion;;",
  "rows": [
    {
      "cells": [
        "pregunta"
      ],
      "line": 8,
      "id": "prueba-de-carga-de-preguntas-de-la-autoevaluacion;;;1"
    },
    {
      "cells": [
        "Pregunta AutoUno"
      ],
      "line": 9,
      "id": "prueba-de-carga-de-preguntas-de-la-autoevaluacion;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "",
  "description": "",
  "id": "prueba-de-carga-de-preguntas-de-la-autoevaluacion;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Abrimos el navegador y vamos al sitio web del login",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "El usuario deberia ver las preguntas \"Pregunta AutoUno\" al final",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "preguntasAutoEvaluaSteps.abrimos_el_navegador_y_vamos_al_sitio_web_del_login()"
});
formatter.result({
  "duration": 7727159515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pregunta AutoUno",
      "offset": 38
    }
  ],
  "location": "preguntasAutoEvaluaSteps.el_usuario_deberia_ver_las_preguntas_al_final(String)"
});
formatter.result({
  "duration": 520929618,
  "status": "passed"
});
});