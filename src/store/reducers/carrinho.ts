import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  produtos: Produto[]
}

const initialState: CarrinhoState = {
  produtos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarProduto: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.produtos.find((item) => item.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.produtos.push(produto)
      }
    }
  }
})

export const { adicionarProduto } = carrinhoSlice.actions

export default carrinhoSlice.reducer
