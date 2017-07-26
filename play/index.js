const load = requireContext => requireContext.keys().map(requireContext)
load(require.context('../src', true, /\.play\.js$/))
