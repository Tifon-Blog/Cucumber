$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("NoPreguntasAutoevaluacion.feature");
formatter.feature({
  "line": 1,
  "name": "Prueba para no ver preguntas de autoevaluacion",
  "description": "",
  "id": "prueba-para-no-ver-preguntas-de-autoevaluacion",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "NoVerPreguntasAutoevaluacion",
  "description": "",
  "id": "prueba-para-no-ver-preguntas-de-autoevaluacion;noverpreguntasautoevaluacion",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Abrimos el navegador y vamos al sitio web no ver preguntas de autoevaluacion",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "El usuario deberia ver el mensaje \"\u003cmensaje\u003e\" para saber que no hay preguntas",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "prueba-para-no-ver-preguntas-de-autoevaluacion;noverpreguntasautoevaluacion;",
  "rows": [
    {
      "cells": [
        "mensaje"
      ],
      "line": 8,
      "id": "prueba-para-no-ver-preguntas-de-autoevaluacion;noverpreguntasautoevaluacion;;1"
    },
    {
      "cells": [
        "No records found."
      ],
      "line": 9,
      "id": "prueba-para-no-ver-preguntas-de-autoevaluacion;noverpreguntasautoevaluacion;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "NoVerPreguntasAutoevaluacion",
  "description": "",
  "id": "prueba-para-no-ver-preguntas-de-autoevaluacion;noverpreguntasautoevaluacion;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Abrimos el navegador y vamos al sitio web no ver preguntas de autoevaluacion",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "El usuario deberia ver el mensaje \"No records found.\" para saber que no hay preguntas",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "NoPreguntasAutoEvalStepsDefinitions.abrimos_el_navegador_y_vamos_al_sitio_web_no_ver_preguntas_de_autoevaluacion()"
});
formatter.result({
  "duration": 9219088627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found.",
      "offset": 35
    }
  ],
  "location": "NoPreguntasAutoEvalStepsDefinitions.el_usuario_deberia_ver_el_mensaje_para_saber_que_no_hay_preguntas(String)"
});
formatter.result({
  "duration": 1299913970,
  "status": "passed"
});
formatter.uri("NoPreguntasEvalua.feature");
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("preguntasEvaluacion.feature");
formatter.feature({
  "line": 1,
  "name": "Prueba para ver preguntas evaluacion",
  "description": "",
  "id": "prueba-para-ver-preguntas-evaluacion",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "VerPreguntasEvaluacion",
  "description": "",
  "id": "prueba-para-ver-preguntas-evaluacion;verpreguntasevaluacion",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Abrimos el navegador y vamos al sitio web ver preguntas evaluacion",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "El usuario deberia ver el mensaje \"\u003cmensaje\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "prueba-para-ver-preguntas-evaluacion;verpreguntasevaluacion;",
  "rows": [
    {
      "cells": [
        "mensaje"
      ],
      "line": 8,
      "id": "prueba-para-ver-preguntas-evaluacion;verpreguntasevaluacion;;1"
    },
    {
      "cells": [
        "¿ El profesor cumplio su deber"
      ],
      "line": 9,
      "id": "prueba-para-ver-preguntas-evaluacion;verpreguntasevaluacion;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "VerPreguntasEvaluacion",
  "description": "",
  "id": "prueba-para-ver-preguntas-evaluacion;verpreguntasevaluacion;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Abrimos el navegador y vamos al sitio web ver preguntas evaluacion",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "El usuario deberia ver el mensaje \"¿ El profesor cumplio su deber\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "preguntasEvaluaStepsDefinitions.abrimos_el_navegador_y_vamos_al_sitio_web_ver_preguntas_evaluacion()"
});
formatter.result({
  "duration": 5108503501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "¿ El profesor cumplio su deber",
      "offset": 35
    }
  ],
  "location": "preguntasEvaluaStepsDefinitions.el_usuario_deberia_ver_el_mensaje(String)"
});
formatter.result({
  "duration": 1165221839,
  "status": "passed"
});
});