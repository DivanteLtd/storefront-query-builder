import { applySearchQuery, applySort, buildQueryBodyFromFilterObject, buildQueryBodyFromSearchQuery } from './elasticsearch/index'
import SearchQuery from './types/SearchQuery'
import QueryArgument from './types/QueryArgument'
import AppliedFilter from './types/AppliedFilter'
import AvailableFilter from './types/AvailableFilter'
import ElasticsearchQueryConfig from './elasticsearch/types/ElasticsearchQueryConfig'

interface QueryAdapter {
    buildQueryBodyFromSearchQuery ({ config, queryChain, searchQuery }: { config: ElasticsearchQueryConfig, queryChain: any, searchQuery: SearchQuery, customFilters?: { [key: string]: Function } })
    buildQueryBodyFromFilterObject ({ config, queryChain, filter, search }: { config: ElasticsearchQueryConfig, queryChain: any, filter: any, search: string })
    applySearchQuery ({ config, queryText, queryChain}: { config: ElasticsearchQueryConfig, queryText: string, queryChain: any })
    applySort ({ sort, queryChain }: { sort: string, queryChain:any })
}

const elasticsearch:QueryAdapter = { 
    buildQueryBodyFromFilterObject,
    buildQueryBodyFromSearchQuery,
    applySearchQuery,
    applySort
}

export { 
    SearchQuery,
    QueryArgument,
    AppliedFilter,
    AvailableFilter,

    elasticsearch,
    ElasticsearchQueryConfig
}