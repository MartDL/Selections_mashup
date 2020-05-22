export const def = {
    qInfo: {
      qType: "qHyperCube"
    },
    qHyperCubeDef: {
        qDimensions: [
            { qDef: { qFieldDefs: ["SRC_AGENCY"]}},
        ],
        qMeasures: [
          { qDef: { qDef: 'Count(distinct FIRE_ID)', qLabel: 'Fire Count'}}
         ]
    },
    qInitialDataFetch: [
      {
        qTop: 0,
        qLeft: 0,
        qWidth: 2,
        qHeight: 100,
      }
    ],
  }