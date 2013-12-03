var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Cuestionario = new Schema({
    codigo: { type: String },
    fecha_aplicacion: { type: Date },
    municipio: { type: String },
    nombre: { type: String },
    apellidos: { type: String },
    cargo: { type: String },
    telefono: { type: String },
    correo_electronico: { type: String },
    nombre_organizacion: { type: String },
    sigla_organizacion: { type: String },
    direccion_organizacion: { type: String },
    municipio: { type: String },
    comuna: { type: String },
    corregimiento: { type: String },
    vereda: { type: String },
    barrio: { type: String },
    telefono_fijo: { type: String },
    celular: { type: String },
    correo_electronico: { type: String },
    tipo_organizacion: { type: String },
    otra_cual_tipo_organizacion: { type: String },
    objetivo_organizacion: { type: String },
    cobertura_organiza: { type: String },
    motivo_constitucion: { type: String },
    fecha_constitucion: { type: Date },
    perso_juridica: { type: String },
    num_personeria: { type: String },
    requisitos_asociados: { type: String },
    cuales_requisitos: { type: String },
    cuantos_asociados_inicios: { type: Number },
    cuantos_asociados_actualmente: { type: Number },
    motivo_aumentdismi: { type: String },
    figura_directiva: { type: String },
    cual_figu_direc: { type: String },
    cargo: { type: String },
    directivos: { type: String },
    genero: { type: String },
    orient_sexual: { type: String },
    edad: { type: String },
    etnia: { type: String },
    remuneracion: { type: String },
    como_elige_directivos: { type: String },
    comite_grupo_mesas: { type: String },
    tipo_de_comites: { type: String },
    otros_cual_comite: { type: String },
    frecuen_figudirectiva: { type: String },
    otra_frecuenc: { type: String },
    frecuencia_reune_directivos_socios: { type: String },
    mecanismo_decision: { type: String },
    otro_cual_mecanism: { type: String },
    quien_decide: { type: String },
    otro_cual_quien_decide: { type: String },
    conflictos_entre_integrantes: { type: String },
    otros_conflictos: { type: String },
    como_tramitan_conflictos: { type: String },
    otro_como_tramitan_conflictos: { type: String },
    registra_diferencial: { type: String },
    otra_cual_diferencial: { type: String },
    como_registra_diferencial: { type: String },
    otra_como_registra_diferencial: { type: String },
    enfoque_grupos: { type: String },
    otro_cual_enfoque: { type: String },
    asociados_no_victimas: { type: String },
    hechos_victimizantes_asociados: { type: String },
    otros_cuales_hechos_victimizantes: { type: String },
    hechos_victimizantes_mas_frecuentes_1: { type: String },
    hechos_victimizantes_mas_frecuentes_2: { type: String },
    hechos_victimizantes_mas_frecuentes_3: { type: String },
    hechos_victimizantes_mas_frecuentes_4: { type: String },
    trabajo_por_hvespecifico: { type: String },
    tipos_victimiz_trabajo_por: { type: String },
    otro_tipos_victimiz_trabajo_por: { type: String },
    org_cuenta_con: { type: String },
    bienes: { type: String },
    lugar_fisico: { type: String },
    relacion_lugar: { type: String },
    quien_financia: { type: String },
    forma_financia: { type: String },
    otra_financia: { type: String },
    recursos_propios_como: { type: String },
    otros_recursos_propios: { type: String },
    tiene_recursos_funcionamiento: { type: String },
    cuanto_dinero_2013: { type: String },
    cuanto_dinero_mas: { type: String },
    dineros_proyectos_2013: { type: String },
    cuanto_dinero_admin_2013: { type: String },
    cuanto_dinero_mas_proyecto_2013: { type: String },
    funcion_interno: { type: String },
    planeacion_ejecucion: { type: String },
    otro_destino_recursos_planeacion: { type: String },
    cuales_medios_comunicacion: { type: String },
    otro_medios_comunicacion: { type: String },
    rendicion_cuentas: { type: String },
    forma_rendicion_cuentas: { type: String },
    frecuencia_rendicion_cuentas: { type: String },
    otra_frecuencia_rendicion_cuentas: { type: String },
    medios_utiliza_comunicacion_interna: { type: String },
    otros_medios_comunicacion_interna: { type: String },
    medios_difusion_externos: { type: String },
    otro_medios_difusion_externos: { type: String },
    mecanismos_recepcion_informacion: { type: String },
    otros_mecanismos_recepcion_informacion: { type: String },
    han_recibido_formacion: { type: String },
    otra_formacion: { type: String },
    se_socializa_conocimiento: { type: String },
    replica_formacion_a_organizaciones_victimas_cercanas: { type: String },
    derechos_organizacion_trabaja: { type: String },
    organizacion_orienta_asociados: { type: String },
    organizacion_si_orienta_asociados: { type: String },
    organizacion_estrategias_derechos: { type: String },
    organizacion_circula_informacion: { type: String },
    organizacion_si_circula_informacion: { type: String },
    otro_organizacion_si_circula_informacion: { type: String },
    organizacion_orienta_ante_estado: { type: String },
    organizacion_si_orienta_ante_estado: { type: String },
    organizacion_orienta_fiscalia: { type: String },
    organizacion_orienta_ley1448: { type: String },
    organizacion_orienta_despojo: { type: String },
    organizacion_inscrita_otras_orga: { type: String },
    organizacion_si_inscrita_otras_orga: { type: String },
    organizacion_participa_otras_orga: { type: String },
    organizacion_motivacion_otras_orga: { type: String },
    organizacion_asiste_otros_espacios_participa: { type: String },
    organizacion_si_asiste_otros_espacios_participa: { type: String },
    organizacion_comite_mmpv: { type: String },
    organizacion_grupo_tematico_mmpv: { type: String },
    organizacion_si_cual_grupo_tematico_mmpv: { type: String },
    organizacion_delegada_ctjt: { type: String },
    organizacion_subcomite_ctjt: { type: String },
    organizacion_subcomite_ctjt_cuales: { type: String },
    organizacion_participa_en: { type: String },
    organizacion_dificultades_efectiva_participa: { type: String },
    organizacion_logra_proyectos_con_munadmon: { type: String },
    organizacion_cuales_propuestas: { type: String },
    organizacion_seguimiento_a_propuestas: { type: String },
    organizacion_quienes_apoyan: { type: String },
    organizacion_apoyo_en: { type: String },
    nombre_facilitador: { type: String },
    institucion_representa_facilitador: { type: String },
    telefono_facilitador: { type: String },
    correo_electronico: { type: String },
    firma_facilitador: { type: String },
    observaciones: { type: String }
});

module.exports = mongoose.model('Cuestionario', Cuestionario);