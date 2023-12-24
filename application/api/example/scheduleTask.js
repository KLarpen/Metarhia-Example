({
  /* Try in console:
    await api.example.scheduleTask({ name: 'tsk', i: 1, every: '2s' });
    await api.example.scheduleTask({ name: 'tsk2', i: 2, every: '2s' });
    await api.example.scheduleTask({ name: 'tsk3', i: 3, every: '2s' });
    await api.example.scheduleTask({ name: 'tsk', i: 1.2, every: '2s' });
    await api.example.scheduleTask({ name: 'tsk', i: 1.3, every: '2s' });
    Then check console, restart the server and check again
  */
  access: 'public',
  parameters: {
    name: 'string',
    i: 'number',
    every: '?string',
  },
  method: async ({ name, i, every }) => {
    const res = await application.scheduler.add({
      name,
      every: every || '10s',
      args: { i },
      run: 'lib.task1.f1',
    });
    return { result: 'scheduled', res };
  },
});
