var mongoose = require('mongoose'),
    uniqueValidator = require('mongoose-unique-validator'),
    Schema = mongoose.Schema;

function upperCase(val) {
  return val.toString.toUpperCase();
}

var Cuestionario = new Schema({
    codigo: { type: String, index: true, unique: true, required: true },
    fecha_aplicacion: { type: String, required: true, default: 'SIN INFORMACION' },
    municipio_encuesta: { type: String, required: true, default: 'SIN INFORMACION' },
    nombre_organizacion: { type: String, default: 'SIN INFORMACION' },
    sigla_organizacion: { type: String, default: 'SIN INFORMACION' },
    direccion_organizacion: { type: String, default: 'SIN INFORMACION' },
    municipio: { type: String, default: 'SIN INFORMACION' },
    comuna: { type: String, default: 'SIN INFORMACION' },
    corregimiento: { type: String, default: 'SIN INFORMACION' },
    vereda: { type: String, default: 'SIN INFORMACION' },
    barrio: { type: String, default: 'SIN INFORMACION' },
    telefono_fijo: { type: String, default: 'SIN INFORMACION' },
    celular: { type: String, default: 'SIN INFORMACION' },
    correo_electronico: { type: String, default: 'SIN INFORMACION' },
    tipo_organizacion: { type: String, default: 'SIN INFORMACION' },
    otra_cual_tipo_organizacion: { type: String, default: 'SIN INFORMACION' },
    objetivo_organizacion: { type: String, default: 'SIN INFORMACION' },
    cobertura_organiza: { type: String, default: 'SIN INFORMACION' },
    motivo_constitucion: { type: String, default: 'SIN INFORMACION' },
    fecha_constitucion: { type: String, default: 'SIN INFORMACION' },
    perso_juridica: { type: String, default: 'SIN INFORMACION' },
    num_personeria: { type: String, default: 'SIN INFORMACION' },
    requisitos_asociados: { type: String, default: 'SIN INFORMACION' },
    cuales_requisitos: { type: String, default: 'SIN INFORMACION' },
    cuantos_asociados_inicios: { type: String, default: 'SIN INFORMACION' },
    cuantos_asociados_actualmente: { type: String, default: 'SIN INFORMACION' },
    motivo_aumentdismi: { type: String, default: 'SIN INFORMACION' },
    figura_directiva: { type: String, default: 'SIN INFORMACION' },
    cual_figu_direc: { type: String, default: 'SIN INFORMACION' },
    como_elige_directivos: { type: String, default: 'SIN INFORMACION' },
    comite_grupo_mesas: { type: String, default: 'SIN INFORMACION' },
    tipo_de_comites: { type: String, default: 'SIN INFORMACION' },
    otros_cual_comite: { type: String, default: 'SIN INFORMACION' },
    frecuen_figudirectiva: { type: String, default: 'SIN INFORMACION' },
    otra_frecuenc: { type: String, default: 'SIN INFORMACION' },
    frecuencia_reune_directivos_socios: { type: String, default: 'SIN INFORMACION' },
    otra_frecuencia_reune_directivos_socios: { type: String, default: 'SIN INFORMACION' },
    mecanismo_decision: { type: String, default: 'SIN INFORMACION' },
    otro_cual_mecanism: { type: String, default: 'SIN INFORMACION' },
    quien_decide: { type: String, default: 'SIN INFORMACION' },
    otro_cual_quien_decide: { type: String, default: 'SIN INFORMACION' },
    conflictos_entre_integrantes: { type: String, default: 'SIN INFORMACION' },
    otros_conflictos: { type: String, default: 'SIN INFORMACION' },
    como_tramitan_conflictos: { type: String, default: 'SIN INFORMACION' },
    otro_como_tramitan_conflictos: { type: String, default: 'SIN INFORMACION' },
    registra_diferencial: { type: String, default: 'SIN INFORMACION' },
    otra_cual_diferencial: { type: String, default: 'SIN INFORMACION' },
    como_registra_diferencial: { type: String, default: 'SIN INFORMACION' },
    otra_como_registra_diferencial: { type: String, default: 'SIN INFORMACION' },
    enfoque_grupos: { type: String, default: 'SIN INFORMACION' },
    otro_cual_enfoque: { type: String, default: 'SIN INFORMACION' },
    asociados_no_victimas: { type: String, default: 'SIN INFORMACION' },
    hechos_victimizantes_asociados: { type: String, default: 'SIN INFORMACION' },
    otros_cuales_hechos_victimizantes: { type: String, default: 'SIN INFORMACION' },
    hechos_victimizantes_mas_frecuentes_1: { type: String, default: 'SIN INFORMACION' },
    hechos_victimizantes_mas_frecuentes_2: { type: String, default: 'SIN INFORMACION' },
    hechos_victimizantes_mas_frecuentes_3: { type: String, default: 'SIN INFORMACION' },
    hechos_victimizantes_mas_frecuentes_4: { type: String, default: 'SIN INFORMACION' },
    trabajo_por_hvespecifico: { type: String, default: 'SIN INFORMACION' },
    tipos_victimiz_trabajo_por: { type: String, default: 'SIN INFORMACION' },
    otro_tipos_victimiz_trabajo_por: { type: String, default: 'SIN INFORMACION' },
    org_cuenta_con: { type: String, default: 'SIN INFORMACION' },
    bienes: { type: String, default: 'SIN INFORMACION' },
    lugar_fisico: { type: String, default: 'SIN INFORMACION' },
    relacion_lugar: { type: String, default: 'SIN INFORMACION' },
    quien_financia: { type: String, default: 'SIN INFORMACION' },
    forma_financia: { type: String, default: 'SIN INFORMACION' },
    otra_financia: { type: String, default: 'SIN INFORMACION' },
    recursos_propios_como: { type: String, default: 'SIN INFORMACION' },
    otros_recursos_propios: { type: String, default: 'SIN INFORMACION' },
    tiene_recursos_funcionamiento: { type: String, default: 'SIN INFORMACION' },
    cuanto_dinero_2013: { type: String, default: 'SIN INFORMACION' },
    cuanto_dinero_mas: { type: String, default: 'SIN INFORMACION' },
    dineros_proyectos_2013: { type: String, default: 'SIN INFORMACION' },
    cuanto_dinero_admin_2013: { type: String, default: 'SIN INFORMACION' },
    cuanto_dinero_mas_proyecto_2013: { type: String, default: 'SIN INFORMACION' },
    funcion_interno: { type: String, default: 'SIN INFORMACION' },
    planeacion_ejecucion: { type: String, default: 'SIN INFORMACION' },
    otro_destino_recursos_planeacion: { type: String, default: 'SIN INFORMACION' },
    cuales_medios_comunicacion: { type: String, default: 'SIN INFORMACION' },
    otro_medios_comunicacion: { type: String, default: 'SIN INFORMACION' },
    rendicion_cuentas: { type: String, default: 'SIN INFORMACION' },
    forma_rendicion_cuentas: { type: String, default: 'SIN INFORMACION' },
    otra_forma_rendicion_cuentas: { type: String, default: 'SIN INFORMACION' },
    frecuencia_rendicion_cuentas: { type: String, default: 'SIN INFORMACION' },
    otra_frecuencia_rendicion_cuentas: { type: String, default: 'SIN INFORMACION' },
    medios_utiliza_comunicacion_interna: { type: String, default: 'SIN INFORMACION' },
    otros_medios_comunicacion_interna: { type: String, default: 'SIN INFORMACION' },
    medios_difusion_externos: { type: String, default: 'SIN INFORMACION' },
    otro_medios_difusion_externos: { type: String, default: 'SIN INFORMACION' },
    mecanismos_recepcion_informacion: { type: String, default: 'SIN INFORMACION' },
    otros_mecanismos_recepcion_informacion: { type: String, default: 'SIN INFORMACION' },
    han_recibido_formacion: { type: String, default: 'SIN INFORMACION' },
    otra_formacion: { type: String, default: 'SIN INFORMACION' },
    se_socializa_conocimiento: { type: String, default: 'SIN INFORMACION' },
    replica_formacion_a_organizaciones_victimas_cercanas: { type: String, default: 'SIN INFORMACION' },
    derechos_organizacion_trabaja: { type: String, default: 'SIN INFORMACION' },
    otros_derechos_organizacion_trabaja: { type: String, default: 'SIN INFORMACION' },
    organizacion_orienta_asociados: { type: String, default: 'SIN INFORMACION' },
    organizacion_si_orienta_asociados: { type: String, default: 'SIN INFORMACION' },
    organizacion_estrategias_derechos: { type: String, default: 'SIN INFORMACION' },
    otra_organizacion_estrategias_derechos: { type: String, default: 'SIN INFORMACION' },
    organizacion_circula_informacion: { type: String, default: 'SIN INFORMACION' },
    organizacion_si_circula_informacion: { type: String, default: 'SIN INFORMACION' },
    otro_organizacion_si_circula_informacion: { type: String, default: 'SIN INFORMACION' },
    organizacion_orienta_ante_estado: { type: String, default: 'SIN INFORMACION' },
    organizacion_si_orienta_ante_estado: { type: String, default: 'SIN INFORMACION' },
    organizacion_orienta_fiscalia: { type: String, default: 'SIN INFORMACION' },
    organizacion_orienta_ley1448: { type: String, default: 'SIN INFORMACION' },
    organizacion_orienta_despojo: { type: String, default: 'SIN INFORMACION' },
    organizacion_inscrita_otras_orga: { type: String, default: 'SIN INFORMACION' },
    organizacion_si_inscrita_otras_orga: { type: String, default: 'SIN INFORMACION' },
    organizacion_participa_otras_orga: { type: String, default: 'SIN INFORMACION' },
    otra_organizacion_participa_otras_orga: { type: String, default: 'SIN INFORMACION' },
    organizacion_motivacion_otras_orga: { type: String, default: 'SIN INFORMACION' },
    otra_organizacion_motivacion_otras_orga: { type: String, default: 'SIN INFORMACION' },
    organizacion_asiste_otros_espacios_participa: { type: String, default: 'SIN INFORMACION' },
    organizacion_si_asiste_otros_espacios_participa: { type: String, default: 'SIN INFORMACION' },
    organizacion_comite_mmpv: { type: String, default: 'SIN INFORMACION' },
    organizacion_grupo_tematico_mmpv: { type: String, default: 'SIN INFORMACION' },
    organizacion_si_cual_grupo_tematico_mmpv: { type: String, default: 'SIN INFORMACION' },
    organizacion_delegada_ctjt: { type: String, default: 'SIN INFORMACION' },
    organizacion_subcomite_ctjt: { type: String, default: 'SIN INFORMACION' },
    organizacion_subcomite_ctjt_cuales: { type: String, default: 'SIN INFORMACION' },
    organizacion_participa_en: { type: String, default: 'SIN INFORMACION' },
    otra_organizacion_participa_en: { type: String, default: 'SIN INFORMACION' },
    organizacion_dificultades_efectiva_participa: { type: String, default: 'SIN INFORMACION' },
    otra_organizacion_dificultades_efectiva_participa: { type: String, default: 'SIN INFORMACION' },
    organizacion_logra_proyectos_con_munadmon: { type: String, default: 'SIN INFORMACION' },
    organizacion_cuales_propuestas: { type: String, default: 'SIN INFORMACION' },
    organizacion_seguimiento_a_propuestas: { type: String, default: 'SIN INFORMACION' },
    organizacion_quienes_apoyan: { type: String, default: 'SIN INFORMACION' },
    nombre_organizacion_quienes_apoyan: { type: String, default: 'SIN INFORMACION' },
    organizacion_apoyo_en: { type: String, default: 'SIN INFORMACION' },
    organizacion_apoyo_en: { type: String, default: 'SIN INFORMACION' },
    nombre_facilitador: { type: String, default: 'SIN INFORMACION' },
    institucion_representa_facilitador: { type: String, default: 'SIN INFORMACION' },
    telefono_facilitador: { type: String, default: 'SIN INFORMACION' },
    correo_electronico_facilitador: { type: String, default: 'SIN INFORMACION' },
    firma_facilitador: { type: String, default: 'SIN INFORMACION' },
    observaciones: { type: String, default: 'SIN INFORMACION' }
});

Cuestionario.plugin(uniqueValidator);

module.exports = mongoose.model('Cuestionario', Cuestionario);
