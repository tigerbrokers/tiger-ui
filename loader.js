const load = requireContext => {
  requireContext.keys()
    .map(requireContext)
}

load(require.context('.', true, /^(?!\.\/node_modules|\.\/docs).*\/(.*\.)?play\.js$/))
