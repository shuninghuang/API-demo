const returns = (metrics, groupBy=null, timeGranularity=null) => {
	return {
		'returns': {
			'library': 75,
			'global_filter': {
				'rules': {
					'rules': [{
						'type': 'tag',
						'condition': {
							'tag': 45
						}
					}, {
						'type': 'attribute',
						'condition': {
							'attribute': {
								'name': 'eventType',
								'type': 'string'
							},
							'value': 'post'
						}
					}, {
						'type': 'time',
						'condition': {
							'timerange': {
								'name': 'Today',
								'zone': 8
							}
						}
					}],
					'op': 'all'
				}
			},
			'metrics': metrics,
			'group_by': groupBy,
			'time_granularity': timeGranularity
		}
	}
}

export const MetricsQuery = returns([{
	'attribute': {
		'name': 'd.userId',
		'type': 'string'
	},
	'operation': 'cardinality',
	'name': 'Uniques'
}, {
	'attribute': {
		'name': 'eventType',
		'type': 'string'
	},
	'operation': 'cardinality',
	'name': 'Page Views'
}]);
export const LineChartQuery = returns([{
	'attribute': {
		'name': 'd.userId',
		'type': 'string'
	},
	'operation': 'cardinality',
	'name': 'Uniques'
}, {
	'attribute': {
		'name': 'eventType',
		'type': 'string'
	},
	'operation': 'cardinality',
	'name': 'Page Views'
}], null, {
	'granularity': 'hour',
	'timezone_offset': 8
})
export const PieChartQuery = returns([{
	'attribute': {
		'name': 'eventType',
		'type': 'string'
	},
	'operation': 'cardinality',
	'name': 'Page Views'
}], {
	'attribute': {
		'name': 'd.device',
		'type': 'string'
	}
})